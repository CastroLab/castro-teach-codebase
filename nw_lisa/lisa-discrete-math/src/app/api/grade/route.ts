import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

const GRADING_MODEL = 'claude-haiku-4-5-20251001'

export async function POST(req: NextRequest) {
  try {
    const { question, correctAnswer, userAnswer } = await req.json()

    const response = await anthropic.messages.create({
      model: GRADING_MODEL,
      max_tokens: 512,
      system: `You are a discrete mathematics grading assistant. Compare the student's answer to the correct answer.
Be generous with formatting differences (e.g., "1/2" matches "\\frac{1}{2}", "{a,b,c}" matches "\\{a, b, c\\}").
Focus on mathematical equivalence, not exact string matching.
Respond with JSON only: {"correct": boolean, "feedback": "brief explanation of why correct or incorrect"}`,
      messages: [
        {
          role: 'user',
          content: `Question: ${question}\n\nCorrect Answer: ${correctAnswer}\n\nStudent's Answer: ${userAnswer}\n\nIs the student's answer mathematically correct? Respond with JSON only.`,
        },
      ],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''

    // Parse JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      const result = JSON.parse(jsonMatch[0])
      return NextResponse.json(result)
    }

    return NextResponse.json({
      correct: false,
      feedback: 'Unable to grade this answer automatically. Please check with your TA.',
    })
  } catch (error) {
    console.error('Grading API error:', error)
    return NextResponse.json(
      { correct: false, feedback: 'Grading service unavailable. Please try again.' },
      { status: 500 }
    )
  }
}
