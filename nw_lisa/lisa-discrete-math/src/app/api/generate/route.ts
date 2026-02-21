import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

const GENERATE_MODEL = 'claude-sonnet-4-20250514'

export async function POST(req: NextRequest) {
  try {
    const { question, type, correctAnswer, explanation } = await req.json()

    const response = await anthropic.messages.create({
      model: GENERATE_MODEL,
      max_tokens: 1024,
      system: `You are a discrete mathematics question generator for CS 5002.
Generate a NEW question that tests the same concept as the original but with different specifics.
Use LaTeX notation with $...$ for inline math and $$...$$ for display math.

Respond with JSON only in this exact format:
{
  "question": "The question text with $LaTeX$",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctAnswer": "The correct answer",
  "explanation": "Step-by-step explanation with $LaTeX$",
  "hint": "A helpful hint"
}

Rules:
- For multiple-choice questions, include 4 options. For free-response, omit the "options" field.
- The new question should test the same skill but use different numbers/variables/expressions.
- Keep difficulty similar to the original.
- Always include LaTeX formatting for mathematical expressions.`,
      messages: [
        {
          role: 'user',
          content: `Generate a similar question based on this original:

Question: ${question}
Type: ${type}
Correct Answer: ${correctAnswer}
Explanation: ${explanation}

Generate a new question testing the same concept with different specifics. Respond with JSON only.`,
        },
      ],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''

    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      const result = JSON.parse(jsonMatch[0])
      return NextResponse.json(result)
    }

    return NextResponse.json(
      { error: 'Failed to generate question' },
      { status: 500 },
    )
  } catch (error) {
    console.error('Generate API error:', error)
    return NextResponse.json(
      { error: 'Question generation service unavailable' },
      { status: 500 },
    )
  }
}
