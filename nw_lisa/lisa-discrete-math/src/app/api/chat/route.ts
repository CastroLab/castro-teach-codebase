import { NextRequest } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { TA_SYSTEM_PROMPT, INSTRUCTOR_SYSTEM_PROMPT } from '@/lib/prompts'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

const CHAT_MODEL = 'claude-sonnet-4-6'

export async function POST(req: NextRequest) {
  try {
    const { messages, mode, context } = await req.json()

    const systemPrompt = mode === 'instructor' ? INSTRUCTOR_SYSTEM_PROMPT : TA_SYSTEM_PROMPT

    // Inject page context into system prompt
    let fullSystemPrompt = systemPrompt
    if (context) {
      fullSystemPrompt += `\n\n--- CURRENT CONTEXT ---\n`
      if (context.page) fullSystemPrompt += `Page: ${context.page}\n`
      if (context.topic) fullSystemPrompt += `Current Topic: ${context.topic}\n`
      if (context.drillTitle) fullSystemPrompt += `Drill/Exercise: ${context.drillTitle}\n`
      if (context.allQuestions) fullSystemPrompt += `All questions in this drill:\n${context.allQuestions}\n`
      if (context.currentQuestionIndex) fullSystemPrompt += `Lisa is currently on question ${context.currentQuestionIndex}.\n`
      if (context.currentQuestion) fullSystemPrompt += `Current question text:\n${context.currentQuestion}\n`
      fullSystemPrompt += `---\nUse this context to provide relevant, targeted help. When Lisa says "help with question 2" or similar, refer to the numbered question list above.`
    }

    const stream = await anthropic.messages.stream({
      model: CHAT_MODEL,
      max_tokens: 2048,
      system: fullSystemPrompt,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    })

    const encoder = new TextEncoder()

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === 'content_block_delta') {
              const delta = event.delta
              if ('text' in delta) {
                controller.enqueue(
                  encoder.encode(`data: ${JSON.stringify({ text: delta.text })}\n\n`)
                )
              }
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
          controller.close()
        } catch (error) {
          const errMsg = error instanceof Error ? error.message : 'Unknown stream error'
          console.error('Chat stream error:', errMsg)
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ error: errMsg })}\n\n`)
          )
          controller.close()
        }
      },
    })

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
