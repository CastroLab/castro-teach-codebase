'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { getDrillSetById, type DrillQuestion as DrillQ } from '@/data/drills'
import { MathDisplay } from '@/components/math/MathDisplay'
import { MathInput } from '@/components/math/MathInput'
import { useProgressStore } from '@/lib/progress'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { useDrillContextStore } from '@/lib/drill-context'
import TruthTableBuilder from '@/components/math/TruthTableBuilder'

function renderTextWithMath(text: string) {
  const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g)
  return parts.map((part, i) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return <MathDisplay key={i} math={part.slice(2, -2).trim()} display />
    }
    if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
      return <MathDisplay key={i} math={part.slice(1, -1)} />
    }
    if (!part) return null
    return <span key={i}>{part}</span>
  })
}

interface Props {
  drillId: string
  subunitId: string
}

export function DrillContainer({ drillId, subunitId }: Props) {
  const drill = getDrillSetById(drillId)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [results, setResults] = useState<Record<string, { correct: boolean; explanation: string }>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [freeAnswer, setFreeAnswer] = useState('')
  const [truthTableValues, setTruthTableValues] = useState<string[][] | null>(null)
  const [truthTableGraded, setTruthTableGraded] = useState(false)
  const [grading, setGrading] = useState(false)
  const [completed, setCompleted] = useState(false)
  // Generated question state
  const [generatedQ, setGeneratedQ] = useState<{
    question: string; options?: string[]; correctAnswer: string; explanation: string; hint?: string
  } | null>(null)
  const [generating, setGenerating] = useState(false)
  const [generatedAnswer, setGeneratedAnswer] = useState('')
  const [generatedSelected, setGeneratedSelected] = useState<string | null>(null)
  const [generatedResult, setGeneratedResult] = useState<{ correct: boolean; explanation: string } | null>(null)
  const { completeDrill, markSubunitComplete } = useProgressStore()

  const questions = useMemo(() => drill?.questions ?? [], [drill])
  const currentQ = questions[currentIdx]

  const { setDrillContext, setCurrentQuestion, clearContext } = useDrillContextStore()

  useEffect(() => {
    if (drill && questions.length > 0) {
      setDrillContext({
        drillId,
        drillTitle: drill.title,
        subunitId,
        questions: questions.map((q) => ({ id: q.id, question: q.question, type: q.type })),
      })
    }
    return () => { clearContext() }
  }, [drill, drillId, subunitId, questions, setDrillContext, clearContext])

  useEffect(() => {
    if (currentQ) {
      setCurrentQuestion(currentIdx, { id: currentQ.id, question: currentQ.question, type: currentQ.type })
    }
  }, [currentIdx, currentQ, setCurrentQuestion])

  const score = useMemo(() => Object.values(results).filter(r => r.correct).length, [results])

  const handleAnswer = useCallback(async (answer: string) => {
    if (!currentQ || grading) return
    setGrading(true)
    setAnswers(prev => ({ ...prev, [currentQ.id]: answer }))

    const normalized = answer.trim().toLowerCase().replace(/\s+/g, '')
    const correctNormalized = currentQ.correctAnswer.trim().toLowerCase().replace(/\s+/g, '')

    if (normalized === correctNormalized) {
      setResults(prev => ({ ...prev, [currentQ.id]: { correct: true, explanation: currentQ.explanation } }))
      setGrading(false)
      return
    }

    // For multiple choice, simple check
    if (currentQ.type === 'multiple-choice') {
      const isCorrect = answer.trim() === currentQ.correctAnswer.trim()
      setResults(prev => ({
        ...prev,
        [currentQ.id]: { correct: isCorrect, explanation: currentQ.explanation },
      }))
      setGrading(false)
      return
    }

    // Fuzzy grade free-response with Claude
    try {
      const res = await fetch('/api/grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: currentQ.question,
          correctAnswer: currentQ.correctAnswer,
          userAnswer: answer,
        }),
      })
      if (res.ok) {
        const gradeResult = await res.json()
        setResults(prev => ({
          ...prev,
          [currentQ.id]: {
            correct: gradeResult.correct,
            explanation: gradeResult.correct
              ? currentQ.explanation
              : `${gradeResult.feedback}\n\n**Solution:** ${currentQ.explanation}`,
          },
        }))
      } else {
        setResults(prev => ({ ...prev, [currentQ.id]: { correct: false, explanation: currentQ.explanation } }))
      }
    } catch {
      setResults(prev => ({ ...prev, [currentQ.id]: { correct: false, explanation: currentQ.explanation } }))
    } finally {
      setGrading(false)
    }
  }, [currentQ, grading])

  const handleNext = useCallback(() => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1)
      setSelectedOption(null)
      setFreeAnswer('')
      setTruthTableValues(null)
      setTruthTableGraded(false)
      setGeneratedQ(null)
      setGeneratedAnswer('')
      setGeneratedSelected(null)
      setGeneratedResult(null)
    } else {
      setCompleted(true)
      const finalScore = Object.values(results).filter(r => r.correct).length
      completeDrill(drillId, finalScore, questions.length, answers)
      markSubunitComplete(subunitId)
    }
  }, [currentIdx, questions.length, results, completeDrill, drillId, answers, subunitId, markSubunitComplete])

  if (!drill || questions.length === 0) {
    return (
      <div className="p-6 rounded-xl border bg-gray-50 text-center text-gray-500">
        Drill questions coming soon!
      </div>
    )
  }

  if (completed) {
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="p-6 rounded-xl border bg-white space-y-6">
        <h3 className="text-2xl font-bold text-center">Drill Complete!</h3>
        <div className="text-center">
          <div className="text-4xl mb-2">{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪'}</div>
          <div className="text-3xl font-bold" style={{ color: pct >= 80 ? '#22c55e' : pct >= 60 ? '#f59e0b' : '#ef4444' }}>
            {score}/{questions.length}
          </div>
          <p className="text-gray-600 mt-1">
            {pct >= 80 ? 'Excellent work!' : pct >= 60 ? 'Good effort. Review what you missed.' : 'Keep practicing!'}
          </p>
        </div>
        <ProgressBar value={pct} color={pct >= 80 ? '#22c55e' : pct >= 60 ? '#f59e0b' : '#ef4444'} size="lg" />
        <div className="space-y-3">
          {questions.map((q, i) => (
            <div key={q.id} className={`p-3 rounded-lg border text-sm ${
              results[q.id]?.correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
            }`}>
              <span className="font-bold">Q{i + 1}:</span>{' '}
              {results[q.id]?.correct ? '✓ Correct' : '✗ Incorrect'}
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => {
              setCurrentIdx(0); setAnswers({}); setResults({}); setSelectedOption(null); setFreeAnswer(''); setCompleted(false)
            }}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  const hasResult = !!results[currentQ.id]
  const progress = ((currentIdx + (hasResult ? 1 : 0)) / questions.length) * 100

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Question {currentIdx + 1} of {questions.length}</span>
        <div className="flex gap-1">
          {questions.map((q, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full ${
              i === currentIdx ? 'bg-blue-500'
              : results[q.id] ? (results[q.id].correct ? 'bg-green-400' : 'bg-red-400')
              : 'bg-gray-200'
            }`} />
          ))}
        </div>
      </div>

      <ProgressBar value={progress} color="#6366f1" size="sm" />

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
            currentQ.difficulty === 1 ? 'bg-green-100 text-green-700'
            : currentQ.difficulty === 2 ? 'bg-yellow-100 text-yellow-700'
            : 'bg-red-100 text-red-700'
          }`}>
            {currentQ.difficulty === 1 ? 'Easy' : currentQ.difficulty === 2 ? 'Medium' : 'Hard'}
          </span>
        </div>

        <div className="text-lg leading-relaxed mb-6">{renderTextWithMath(currentQ.question)}</div>

        {/* Multiple choice */}
        {currentQ.type === 'multiple-choice' && currentQ.options && (
          <div className="space-y-2">
            {currentQ.options.map((opt, i) => {
              const letter = String.fromCharCode(65 + i)
              const isSelected = selectedOption === opt
              const isCorrect = hasResult && opt.trim() === currentQ.correctAnswer.trim()
              const isWrong = hasResult && isSelected && !isCorrect

              return (
                <button
                  key={i}
                  onClick={() => { if (!hasResult) { setSelectedOption(opt); handleAnswer(opt) } }}
                  disabled={hasResult}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                    isCorrect && hasResult ? 'border-green-400 bg-green-50'
                    : isWrong ? 'border-red-400 bg-red-50'
                    : isSelected ? 'border-blue-400 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  } ${hasResult ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <span className="font-bold mr-2 text-gray-500">{letter}.</span>
                  {renderTextWithMath(opt)}
                </button>
              )
            })}
          </div>
        )}

        {/* Truth table interactive */}
        {currentQ.type === 'truth-table' && currentQ.variables && currentQ.correctTableValues && (
          <div className="space-y-3">
            <TruthTableBuilder
              variables={currentQ.variables}
              expression={currentQ.expression ?? ''}
              onChange={setTruthTableValues}
              correctValues={truthTableGraded ? currentQ.correctTableValues : undefined}
            />
            {!hasResult && (
              <button
                onClick={() => {
                  if (!truthTableValues) return
                  setTruthTableGraded(true)
                  const allCorrect = currentQ.correctTableValues!.every((row, ri) =>
                    row.every((val, ci) => truthTableValues[ri]?.[ci] === val)
                  )
                  const answer = truthTableValues.map(r => r.join(',')).join('; ')
                  setAnswers(prev => ({ ...prev, [currentQ.id]: answer }))
                  setResults(prev => ({
                    ...prev,
                    [currentQ.id]: {
                      correct: allCorrect,
                      explanation: currentQ.explanation,
                    },
                  }))
                }}
                disabled={!truthTableValues || truthTableValues.some(row => row.some(v => v === ''))}
                className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                Check Table
              </button>
            )}
          </div>
        )}

        {/* Free response (includes conversion, set-operation, and truth-table questions without metadata) */}
        {currentQ.type !== 'multiple-choice' && !(currentQ.type === 'truth-table' && currentQ.variables && currentQ.correctTableValues) && !hasResult && (
          <div className="space-y-3">
            <MathInput value={freeAnswer} onChange={setFreeAnswer} placeholder="Type your answer..." />
            <button
              onClick={() => handleAnswer(freeAnswer)}
              disabled={!freeAnswer.trim() || grading}
              className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {grading ? 'Checking...' : 'Submit'}
            </button>
          </div>
        )}

        {grading && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            Checking your answer...
          </div>
        )}

        {/* Result */}
        {hasResult && (
          <div className={`mt-4 p-4 rounded-lg border-2 ${
            results[currentQ.id].correct ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
          }`}>
            <div className="font-bold mb-1">
              {results[currentQ.id].correct ? '✓ Correct!' : '✗ Not quite right'}
            </div>
            {!results[currentQ.id].correct && (
              <div className="mb-2 text-sm">
                <span className="font-medium">Correct answer: </span>
                <MathDisplay math={currentQ.correctAnswer} />
              </div>
            )}
            <div className="text-sm leading-relaxed">{renderTextWithMath(results[currentQ.id].explanation)}</div>
          </div>
        )}

        {/* Generate similar question */}
        {hasResult && !generatedQ && (
          <div className="mt-4">
            <button
              onClick={async () => {
                setGenerating(true)
                try {
                  const res = await fetch('/api/generate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      question: currentQ.question,
                      type: currentQ.type,
                      correctAnswer: currentQ.correctAnswer,
                      explanation: currentQ.explanation,
                    }),
                  })
                  if (res.ok) {
                    const data = await res.json()
                    if (!data.error) setGeneratedQ(data)
                  }
                } catch { /* ignore */ }
                setGenerating(false)
              }}
              disabled={generating}
              className="text-sm px-4 py-2 bg-purple-100 text-purple-700 font-medium rounded-lg hover:bg-purple-200 disabled:opacity-50 transition-colors"
            >
              {generating ? (
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                  Generating...
                </span>
              ) : '✨ Generate a similar question'}
            </button>
          </div>
        )}

        {/* Generated question inline */}
        {generatedQ && (
          <div className="mt-4 p-4 rounded-lg border-2 border-purple-200 bg-purple-50">
            <div className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-2">Practice Question</div>
            <div className="text-base leading-relaxed mb-4">{renderTextWithMath(generatedQ.question)}</div>

            {/* MC options for generated question */}
            {generatedQ.options && !generatedResult && (
              <div className="space-y-2 mb-3">
                {generatedQ.options.map((opt, i) => {
                  const letter = String.fromCharCode(65 + i)
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setGeneratedSelected(opt)
                        const isCorrect = opt.trim() === generatedQ.correctAnswer.trim()
                        setGeneratedResult({ correct: isCorrect, explanation: generatedQ.explanation })
                      }}
                      disabled={!!generatedResult}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-all text-sm ${
                        generatedSelected === opt ? 'border-blue-400 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <span className="font-bold mr-2 text-gray-500">{letter}.</span>
                      {renderTextWithMath(opt)}
                    </button>
                  )
                })}
              </div>
            )}

            {/* Free response for generated question */}
            {!generatedQ.options && !generatedResult && (
              <div className="space-y-3 mb-3">
                <MathInput value={generatedAnswer} onChange={setGeneratedAnswer} placeholder="Your answer..." />
                <button
                  onClick={async () => {
                    const normalized = generatedAnswer.trim().toLowerCase().replace(/\s+/g, '')
                    const correctNormalized = generatedQ.correctAnswer.trim().toLowerCase().replace(/\s+/g, '')
                    if (normalized === correctNormalized) {
                      setGeneratedResult({ correct: true, explanation: generatedQ.explanation })
                      return
                    }
                    try {
                      const res = await fetch('/api/grade', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          question: generatedQ.question,
                          correctAnswer: generatedQ.correctAnswer,
                          userAnswer: generatedAnswer,
                        }),
                      })
                      if (res.ok) {
                        const gradeResult = await res.json()
                        setGeneratedResult({
                          correct: gradeResult.correct,
                          explanation: gradeResult.correct ? generatedQ.explanation : `${gradeResult.feedback}\n\n**Solution:** ${generatedQ.explanation}`,
                        })
                      } else {
                        setGeneratedResult({ correct: false, explanation: generatedQ.explanation })
                      }
                    } catch {
                      setGeneratedResult({ correct: false, explanation: generatedQ.explanation })
                    }
                  }}
                  disabled={!generatedAnswer.trim()}
                  className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-colors text-sm"
                >
                  Check Answer
                </button>
              </div>
            )}

            {/* Generated question result */}
            {generatedResult && (
              <div className={`p-3 rounded-lg border text-sm ${
                generatedResult.correct ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
              }`}>
                <div className="font-bold mb-1">
                  {generatedResult.correct ? '✓ Correct!' : '✗ Not quite right'}
                </div>
                {!generatedResult.correct && (
                  <div className="mb-1">
                    <span className="font-medium">Answer: </span>
                    {renderTextWithMath(generatedQ.correctAnswer)}
                  </div>
                )}
                <div className="leading-relaxed">{renderTextWithMath(generatedResult.explanation)}</div>
              </div>
            )}
          </div>
        )}

        {/* Hint */}
        {!hasResult && currentQ.hint && (
          <details className="mt-4">
            <summary className="text-sm text-indigo-600 cursor-pointer hover:underline">💡 Need a hint?</summary>
            <div className="mt-2 p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-sm">
              {renderTextWithMath(currentQ.hint)}
            </div>
          </details>
        )}
      </div>

      {hasResult && (
        <div className="text-right">
          <button
            onClick={handleNext}
            className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            {currentIdx < questions.length - 1 ? 'Next Question →' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  )
}

export default DrillContainer
