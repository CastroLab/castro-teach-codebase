'use client'

import { useState, useMemo, useEffect } from 'react'
import { getUnitTest } from '@/data/tests'
import { MathDisplay } from '@/components/math/MathDisplay'
import { MathInput } from '@/components/math/MathInput'
import { useProgressStore } from '@/lib/progress'
import { useDrillContextStore } from '@/lib/drill-context'

function renderTextWithMath(text: string) {
  const parts: React.ReactNode[] = []
  let remaining = text
  let key = 0

  while (remaining.length > 0) {
    const displayMatch = remaining.match(/\$\$([\s\S]*?)\$\$/)
    const inlineMatch = remaining.match(/\$([^$]+?)\$/)
    const displayIdx = displayMatch ? remaining.indexOf(displayMatch[0]) : Infinity
    const inlineIdx = inlineMatch ? remaining.indexOf(inlineMatch[0]) : Infinity

    if (displayIdx === Infinity && inlineIdx === Infinity) {
      parts.push(<span key={key++} dangerouslySetInnerHTML={{ __html: remaining.replace(/\n/g, '<br/>') }} />)
      break
    }

    if (displayIdx <= inlineIdx && displayMatch) {
      if (displayIdx > 0) parts.push(<span key={key++} dangerouslySetInnerHTML={{ __html: remaining.slice(0, displayIdx).replace(/\n/g, '<br/>') }} />)
      parts.push(<MathDisplay key={key++} math={displayMatch[1]} display />)
      remaining = remaining.slice(displayIdx + displayMatch[0].length)
    } else if (inlineMatch) {
      if (inlineIdx > 0) parts.push(<span key={key++} dangerouslySetInnerHTML={{ __html: remaining.slice(0, inlineIdx).replace(/\n/g, '<br/>') }} />)
      parts.push(<MathDisplay key={key++} math={inlineMatch[1]} />)
      remaining = remaining.slice(inlineIdx + inlineMatch[0].length)
    }
  }
  return <>{parts}</>
}

interface Props {
  testId: string
  dayColor: string
}

export function UnitTestContainer({ testId, dayColor }: Props) {
  const test = getUnitTest(testId)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [grading, setGrading] = useState(false)
  const [results, setResults] = useState<Record<string, { correct: boolean; feedback: string }>>({})
  const completeTest = useProgressStore(s => s.completeTest)
  const { setDrillContext, clearContext } = useDrillContextStore()

  useEffect(() => {
    if (test) {
      setDrillContext({
        drillId: testId,
        drillTitle: test.title,
        subunitId: testId,
        questions: test.parts.map((p, i) => ({
          id: p.id,
          question: `Part ${i + 1}: ${p.question}`,
          type: 'unit-test',
        })),
      })
    }
    return () => { clearContext() }
  }, [test, testId, setDrillContext, clearContext])

  if (!test) {
    return (
      <div className="p-6 rounded-xl border bg-gray-50 text-center text-gray-500">
        Unit test not available yet.
      </div>
    )
  }

  const totalScore = useMemo(() => {
    if (!submitted) return 0
    return test.parts.reduce((sum, part) => {
      return sum + (results[part.id]?.correct ? part.pointValue : 0)
    }, 0)
  }, [submitted, results, test.parts])

  async function handleSubmit() {
    if (!test) return
    setGrading(true)
    const newResults: Record<string, { correct: boolean; feedback: string }> = {}

    for (const part of test.parts) {
      const userAnswer = answers[part.id] || ''
      if (!userAnswer.trim()) {
        newResults[part.id] = { correct: false, feedback: 'No answer provided.' }
        continue
      }

      // Try exact match first
      const normalized = userAnswer.trim().toLowerCase()
      const correctNormalized = part.correctAnswer.trim().toLowerCase()
      if (normalized === correctNormalized) {
        newResults[part.id] = { correct: true, feedback: 'Correct!' }
        continue
      }

      // Fuzzy grade with Claude
      try {
        const res = await fetch('/api/grade', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            question: part.question,
            correctAnswer: part.correctAnswer,
            userAnswer,
          }),
        })
        if (res.ok) {
          newResults[part.id] = await res.json()
        } else {
          newResults[part.id] = { correct: false, feedback: 'Could not grade automatically.' }
        }
      } catch {
        newResults[part.id] = { correct: false, feedback: 'Grading service unavailable.' }
      }
    }

    setResults(newResults)
    setSubmitted(true)
    setGrading(false)

    // Save progress
    const score = test.parts.reduce((sum, part) => {
      return sum + (newResults[part.id]?.correct ? part.pointValue : 0)
    }, 0)
    completeTest(testId, score, test.totalPoints, answers)
  }

  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="text-2xl font-bold mb-1">{test.title}</h2>
      <p className="text-sm text-gray-500 mb-6">
        {test.parts.length} parts &middot; {test.totalPoints} points &middot; ~{test.timeMinutes} minutes
      </p>

      {submitted && (
        <div
          className="mb-6 p-4 rounded-lg text-center text-lg font-bold"
          style={{
            backgroundColor: totalScore / test.totalPoints >= 0.7 ? '#dcfce7' : '#fef9c3',
            color: totalScore / test.totalPoints >= 0.7 ? '#166534' : '#854d0e',
          }}
        >
          Score: {totalScore} / {test.totalPoints} ({Math.round((totalScore / test.totalPoints) * 100)}%)
        </div>
      )}

      <div className="space-y-8">
        {test.parts.map((part, idx) => (
          <div key={part.id} className="border-b pb-6 last:border-0">
            <div className="flex items-start gap-3 mb-3">
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: dayColor }}
              >
                {idx + 1}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400">{part.pointValue} pts</span>
                  {submitted && results[part.id] && (
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      results[part.id].correct
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {results[part.id].correct ? 'Correct' : 'Incorrect'}
                    </span>
                  )}
                </div>
                <div className="text-gray-800 mb-3">
                  {renderTextWithMath(part.question)}
                </div>

                {!submitted ? (
                  <MathInput
                    value={answers[part.id] || ''}
                    onChange={(val) => setAnswers(prev => ({ ...prev, [part.id]: val }))}
                    placeholder="Type your answer..."
                  />
                ) : (
                  <div>
                    <div className="p-3 rounded bg-gray-50 mb-3">
                      <span className="text-xs text-gray-500">Your answer: </span>
                      {answers[part.id] ? (
                        <MathDisplay math={answers[part.id]} />
                      ) : (
                        <span className="text-gray-400 italic">No answer</span>
                      )}
                    </div>
                    {results[part.id] && !results[part.id].correct && (
                      <div className="p-3 rounded bg-blue-50 mb-3">
                        <span className="text-xs text-blue-500 font-medium">Correct answer: </span>
                        <MathDisplay math={part.correctAnswer} />
                      </div>
                    )}
                    <details className="mt-2">
                      <summary className="text-sm text-blue-600 cursor-pointer hover:underline">
                        View detailed solution
                      </summary>
                      <div className="mt-2 p-4 rounded-lg bg-gray-50 text-sm">
                        {renderTextWithMath(part.solution)}
                      </div>
                    </details>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {!submitted && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={grading}
            className="px-6 py-3 rounded-lg text-white font-medium disabled:opacity-50"
            style={{ backgroundColor: dayColor }}
          >
            {grading ? 'Grading...' : 'Submit Test'}
          </button>
        </div>
      )}
    </div>
  )
}
