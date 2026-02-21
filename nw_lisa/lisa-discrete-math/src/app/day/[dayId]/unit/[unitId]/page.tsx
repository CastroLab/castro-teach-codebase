'use client'

import { useState } from 'react'
import Link from 'next/link'
import { curriculum } from '@/data/curriculum'
import { useProgressStore } from '@/lib/progress'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { UnitTestContainer } from '@/components/drill/UnitTestContainer'

export default function UnitPage({
  params,
}: {
  params: { dayId: string; unitId: string }
}) {
  const { dayId, unitId } = params
  const dayNum = parseInt(dayId)
  const unitNum = parseInt(unitId)
  const day = curriculum.find(d => d.id === dayNum)
  const unit = day?.units[unitNum - 1]
  const { completedSubunits } = useProgressStore()
  const [showTest, setShowTest] = useState(false)

  if (!day || !unit) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold">Unit not found</h1>
        <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
          &larr; Back to Dashboard
        </Link>
      </div>
    )
  }

  const progress = (() => {
    const ids = unit.subunits.map(s => s.id)
    if (ids.length === 0) return 0
    return Math.round((ids.filter(id => completedSubunits.includes(id)).length / ids.length) * 100)
  })()

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Dashboard</Link>
        <span>/</span>
        <Link href={`/day/${day.id}`} className="hover:text-gray-700">Day {day.id}</Link>
        <span>/</span>
        <span className="text-gray-800">Unit {unitNum}</span>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl font-bold">{unit.title}</h1>
        <p className="text-gray-600 mt-1">{unit.description}</p>
        <div className="mt-3 flex items-center gap-4">
          <ProgressBar value={progress} color={day.color} size="md" />
          <span className="text-sm text-gray-400">{unit.timeMinutes} min</span>
        </div>
      </header>

      <div className="space-y-4 mb-8">
        {unit.subunits.map((subunit, subIdx) => {
          const isComplete = completedSubunits.includes(subunit.id)
          return (
            <Link
              key={subunit.id}
              href={`/day/${day.id}/unit/${unitNum}/subunit/${subIdx + 1}`}
              className="block rounded-xl border p-5 bg-white shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    isComplete
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                  }`}>
                    {isComplete ? '✓' : subIdx + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-600">{subunit.title}</h3>
                    <p className="text-sm text-gray-500">{subunit.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400">{subunit.timeMinutes} min</span>
                  <span className="text-gray-300 group-hover:text-blue-400 transition-colors">→</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <div id="test" className="pt-4 border-t">
        {!showTest ? (
          <button
            onClick={() => setShowTest(true)}
            className="w-full py-4 rounded-xl border-2 border-dashed text-lg font-semibold transition-all hover:border-solid"
            style={{
              borderColor: day.color + '60',
              color: day.color,
              backgroundColor: day.color + '08',
            }}
          >
            📝 Start Unit Test: {unit.title}
          </button>
        ) : (
          <UnitTestContainer testId={unit.testId} dayColor={day.color} />
        )}
      </div>
    </div>
  )
}
