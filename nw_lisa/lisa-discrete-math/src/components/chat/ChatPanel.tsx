'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import ChatMessage from './ChatMessage'
import ChatMathInput from './ChatMathInput'
import ModeToggle from './ModeToggle'
import { useSidebarStore } from '@/lib/sidebar-store'
import { useDrillContextStore } from '@/lib/drill-context'

type ChatMode = 'ta' | 'instructor'
interface Msg { role: 'user' | 'assistant'; content: string }

export function ChatPanel() {
  const [messages, setMessages] = useState<Msg[]>([])
  const [mode, setMode] = useState<ChatMode>('ta')
  const [isLoading, setIsLoading] = useState(false)
  const [streamingContent, setStreamingContent] = useState('')
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const { collapsed, setCollapsed } = useSidebarStore()

  useEffect(() => {
    const container = messagesContainerRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [messages, streamingContent])

  const handleModeChange = useCallback((newMode: ChatMode) => {
    setMode(newMode)
    setMessages([])
    setStreamingContent('')
  }, [])

  const handleSend = useCallback(
    async (content: string) => {
      const userMessage: Msg = { role: 'user', content }
      const updatedMessages = [...messages, userMessage]
      setMessages(updatedMessages)
      setIsLoading(true)
      setStreamingContent('')

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: updatedMessages,
            mode,
            context: (() => {
              const drillState = useDrillContextStore.getState()
              const ctx: Record<string, unknown> = {
                page: typeof window !== 'undefined' ? window.location.pathname : '',
                topic: typeof document !== 'undefined' ? document.title : '',
              }
              if (drillState.drillTitle) {
                ctx.drillTitle = drillState.drillTitle
                ctx.currentQuestionIndex = drillState.currentQuestionIndex + 1
                ctx.currentQuestion = drillState.currentQuestion?.question ?? null
                ctx.allQuestions = drillState.questions.map(
                  (q, i) => `${i + 1}. ${q.question}`
                ).join('\n')
              }
              return ctx
            })(),
          }),
        })

        if (!response.ok) throw new Error(`Chat request failed: ${response.status}`)

        if (response.body) {
          const reader = response.body.getReader()
          const decoder = new TextDecoder()
          let accumulated = ''

          while (true) {
            const { done, value } = await reader.read()
            if (done) break
            const chunk = decoder.decode(value, { stream: true })
            const lines = chunk.split('\n')

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6)
                if (data === '[DONE]') continue
                try {
                  const parsed = JSON.parse(data)
                  if (parsed.error) {
                    throw new Error(parsed.error)
                  }
                  if (parsed.text) {
                    accumulated += parsed.text
                    setStreamingContent(accumulated)
                  }
                } catch (e) {
                  if (e instanceof Error && e.message !== 'Unexpected end of JSON input') {
                    throw e
                  }
                }
              }
            }
          }

          setMessages(prev => [...prev, { role: 'assistant', content: accumulated }])
          setStreamingContent('')
        }
      } catch (error) {
        const msg = error instanceof Error ? error.message : 'Unknown error'
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: `Sorry, I had trouble connecting: ${msg}. Please try again!` },
        ])
      } finally {
        setIsLoading(false)
      }
    },
    [messages, mode],
  )

  if (collapsed) {
    return (
      <button
        type="button"
        onClick={() => setCollapsed(false)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 w-10 h-20 bg-indigo-600 text-white rounded-l-lg shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors"
        aria-label="Open chat"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    )
  }

  return (
    <div
      className="chat-sidebar fixed right-0 top-0 bottom-0 z-40 flex flex-col bg-white border-l border-gray-200 shadow-lg"
      style={{ width: 'var(--sidebar-width, 380px)' }}
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 bg-indigo-600">
        <h2 className="text-white font-bold text-sm tracking-wide">
          {mode === 'ta' ? '💬 Chat with Gam' : '📚 Instructor'}
        </h2>
        <button
          type="button"
          onClick={() => setCollapsed(true)}
          className="text-white/80 hover:text-white transition-colors p-1"
          aria-label="Close chat"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <ModeToggle mode={mode} onToggle={handleModeChange} />

      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
        {messages.length === 0 && !streamingContent && (
          <div className="text-center text-gray-400 font-serif text-sm mt-8 space-y-2">
            <div className="text-3xl mb-3">{mode === 'ta' ? '🎓' : '👨‍🏫'}</div>
            <p className="font-semibold text-gray-600">
              {mode === 'ta' ? 'Gam is ready to help!' : 'Instructor mode active'}
            </p>
            <p>
              {mode === 'ta'
                ? "Hey Lisa! I'll guide you with hints and questions to help you discover answers yourself."
                : "Hello Lisa. Ask me anything and I'll provide detailed explanations and walkthroughs."}
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}

        {streamingContent && (
          <ChatMessage
            message={{ role: 'assistant', content: streamingContent }}
            isStreaming
          />
        )}
      </div>

      <ChatMathInput
        onSend={handleSend}
        disabled={isLoading}
        placeholder={mode === 'ta' ? 'Ask Gam for a hint...' : 'Ask the instructor...'}
      />
    </div>
  )
}

export default ChatPanel
