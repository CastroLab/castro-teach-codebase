'use client'

import Link from 'next/link'
import { curriculum } from '@/data/curriculum'
import { useProgressStore } from '@/lib/progress'
import { ProgressBar } from '@/components/ui/ProgressBar'

export default function DayPage({ params }: { params: { dayId: string } }) {
  const { dayId } = params
  const dayNum = parseInt(dayId)
  const day = curriculum.find(d => d.id === dayNum)
  const { completedSubunits } = useProgressStore()

  if (!day) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold">Day not found</h1>
        <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
          &larr; Back to Dashboard
        </Link>
      </div>
    )
  }

  function getUnitProgress(unit: (typeof curriculum)[0]['units'][0]): number {
    const subunitIds = unit.subunits.map(s => s.id)
    if (subunitIds.length === 0) return 0
    const completed = subunitIds.filter(id => completedSubunits.includes(id)).length
    return Math.round((completed / subunitIds.length) * 100)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 mb-6 inline-block">
        &larr; Back to Dashboard
      </Link>

      <header className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: day.color }}>
          Day {day.id}: {day.title}
        </h1>
        <p className="text-gray-600 mt-1">{day.subtitle}</p>
        <p className="text-sm text-gray-400 mt-1">
          Estimated time: {day.totalHours} hours
        </p>
      </header>

      <div className="space-y-6">
        {day.units.map((unit, unitIdx) => {
          const progress = getUnitProgress(unit)
          return (
            <div
              key={unit.id}
              className="rounded-xl border p-6 bg-white shadow-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-xl font-bold">
                    Unit {unitIdx + 1}: {unit.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">{unit.description}</p>
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                  {unit.timeMinutes} min
                </span>
              </div>

              <ProgressBar value={progress} color={day.color} size="sm" />

              <div className="mt-4 space-y-2">
                {unit.subunits.map((subunit, subIdx) => {
                  const isComplete = completedSubunits.includes(subunit.id)
                  return (
                    <Link
                      key={subunit.id}
                      href={`/day/${day.id}/unit/${unitIdx + 1}/subunit/${subIdx + 1}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isComplete
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {isComplete ? '✓' : subIdx + 1}
                        </span>
                        <div>
                          <span className="text-sm font-medium group-hover:text-blue-600">
                            {subunit.title}
                          </span>
                          <p className="text-xs text-gray-400">{subunit.description}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">{subunit.timeMinutes} min</span>
                    </Link>
                  )
                })}
              </div>

              <div className="mt-4 pt-4 border-t">
                <Link
                  href={`/day/${day.id}/unit/${unitIdx + 1}#test`}
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                  style={{
                    backgroundColor: day.color + '15',
                    color: day.color,
                  }}
                >
                  📝 Unit Test
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
