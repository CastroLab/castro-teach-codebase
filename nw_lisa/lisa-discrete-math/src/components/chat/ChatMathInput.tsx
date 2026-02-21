'use client'

import { useState, useRef, useCallback, KeyboardEvent } from 'react'
import { MathDisplay } from '@/components/math/MathDisplay'

interface ChatMathInputProps {
  onSend: (message: string) => void
  disabled?: boolean
  placeholder?: string
}

const symbols = [
  { label: '\u00AC', latex: '\\neg ' },
  { label: '\u2227', latex: '\\wedge ' },
  { label: '\u2228', latex: '\\vee ' },
  { label: '\u2192', latex: '\\to ' },
  { label: '\u2200', latex: '\\forall ' },
  { label: '\u2203', latex: '\\exists ' },
  { label: '\u2208', latex: '\\in ' },
  { label: '\u2286', latex: '\\subseteq ' },
  { label: '\u222A', latex: '\\cup ' },
  { label: '\u2229', latex: '\\cap ' },
  { label: '\u2205', latex: '\\emptyset ' },
  { label: 'a/b', latex: '\\frac{}{}' },
  { label: 'x\u207F', latex: '^{}' },
  { label: 'x\u2099', latex: '_{}' },
  { label: '(n k)', latex: '\\binom{}{}' },
]

export default function ChatMathInput({
  onSend,
  disabled = false,
  placeholder = 'Ask a question...',
}: ChatMathInputProps) {
  const [value, setValue] = useState('')
  const [showSymbols, setShowSymbols] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSend = useCallback(() => {
    const trimmed = value.trim()
    if (trimmed && !disabled) {
      onSend(trimmed)
      setValue('')
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }, [value, disabled, onSend])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    },
    [handleSend],
  )

  const handleInput = useCallback(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`
    }
  }, [])

  const insertSymbol = useCallback(
    (latex: string) => {
      const textarea = textareaRef.current
      if (!textarea) {
        setValue((prev) => prev + latex)
        return
      }
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const newValue = value.slice(0, start) + latex + value.slice(end)
      setValue(newValue)

      requestAnimationFrame(() => {
        textarea.focus()
        const bracePos = latex.indexOf('{}')
        if (bracePos !== -1) {
          const cursor = start + bracePos + 1
          textarea.setSelectionRange(cursor, cursor)
        } else {
          const cursor = start + latex.length
          textarea.setSelectionRange(cursor, cursor)
        }
      })
    },
    [value],
  )

  const hasLatex = value.includes('\\') || value.includes('$')

  return (
    <div className="border-t border-gray-200 bg-white">
      {/* Live KaTeX preview */}
      {hasLatex && value.trim() && (
        <div className="px-3 pt-2 pb-1">
          <div className="p-2 bg-gray-50 rounded border border-gray-200 text-xs">
            <MathDisplay math={value.replace(/\$/g, '')} display />
          </div>
        </div>
      )}

      {/* Symbol palette */}
      {showSymbols && (
        <div className="px-3 pt-2 pb-1">
          <div className="flex flex-wrap gap-1">
            {symbols.map((sym) => (
              <button
                key={sym.latex}
                type="button"
                onClick={() => insertSymbol(sym.latex)}
                className="px-1.5 py-0.5 text-xs bg-gray-100 hover:bg-blue-100 hover:text-blue-700 border border-gray-200 rounded transition-colors font-serif min-w-[1.75rem] text-center"
                title={sym.latex.trim()}
              >
                {sym.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input row */}
      <div className="flex items-end gap-2 p-3">
        <button
          type="button"
          onClick={() => setShowSymbols(!showSymbols)}
          className={`shrink-0 w-9 h-9 flex items-center justify-center rounded-lg border transition-colors text-sm font-bold ${
            showSymbols
              ? 'bg-blue-100 border-blue-300 text-blue-700'
              : 'bg-gray-100 border-gray-300 text-gray-600 hover:bg-gray-200'
          }`}
          aria-label="Toggle math symbols"
          title="Math symbols"
        >
          fx
        </button>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            handleInput()
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          className="flex-1 resize-none px-3 py-2 border border-gray-300 rounded-lg text-sm
                     focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none
                     disabled:bg-gray-100 disabled:text-gray-400 font-serif
                     max-h-[120px] transition-colors"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={disabled || !value.trim()}
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg
                     bg-blue-600 text-white hover:bg-blue-700
                     disabled:bg-gray-300 disabled:cursor-not-allowed
                     transition-colors"
          aria-label="Send message"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
