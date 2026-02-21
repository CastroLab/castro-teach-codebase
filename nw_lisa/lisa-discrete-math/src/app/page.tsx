'use client'

import Link from 'next/link'
import { useProgressStore } from '@/lib/progress'
import { curriculum } from '@/data/curriculum'
import { ProgressBar } from '@/components/ui/ProgressBar'

export default function Dashboard() {
  const { completedSubunits } = useProgressStore()

  function getDayProgress(day: typeof curriculum[0]): number {
    const allSubunitIds = day.units.flatMap(u => u.subunits.map(s => s.id))
    if (allSubunitIds.length === 0) return 0
    const completed = allSubunitIds.filter(id => completedSubunits.includes(id)).length
    return Math.round((completed / allSubunitIds.length) * 100)
  }

  const dayEmojis = ['📐', '🔬', '🔗', '🎯', '🏁']

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <header className="mb-10">
        <h1 className="text-5xl font-bold mb-2">Lisa&apos;s Discrete Math Study Hub</h1>
        <p className="text-xl text-gray-600">
          CS5002 Midterm Preparation &mdash; 5-Day Spiral Curriculum
        </p>
        <div className="mt-4 p-4 rounded-lg bg-amber-50 border border-amber-200">
          <p className="text-base text-amber-800">
            <strong>Study Strategy:</strong> Extra time on combinatorics (P vs C decision framework).
            Strong areas: logic, sets, number systems. Focus area: counting &amp; combinations.
          </p>
        </div>
      </header>

      <div className="grid gap-6">
        {curriculum.map((day, i) => {
          const progress = getDayProgress(day)
          return (
            <Link
              key={day.id}
              href={`/day/${day.id}`}
              className="block group"
            >
              <div
                className="rounded-xl border-2 p-6 transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ borderColor: day.color + '40', backgroundColor: day.color + '08' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{dayEmojis[i]}</span>
                    <div>
                      <h2 className="text-2xl font-bold group-hover:underline">
                        Day {day.id}: {day.title}
                      </h2>
                      <p className="text-base text-gray-500">{day.subtitle}</p>
                    </div>
                  </div>
                  <span
                    className="text-base font-medium px-3 py-1 rounded-full"
                    style={{ backgroundColor: day.color + '20', color: day.color }}
                  >
                    {day.totalHours} hours
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {day.units.map(unit => (
                    <span
                      key={unit.id}
                      className="text-sm px-2 py-1 rounded bg-white/80 border border-gray-200 text-gray-600"
                    >
                      {unit.title}
                    </span>
                  ))}
                </div>

                <ProgressBar value={progress} color={day.color} size="sm" />
              </div>
            </Link>
          )
        })}
      </div>

      <footer className="mt-12 text-center text-sm text-gray-400">
        Built for Lisa &mdash; You&apos;ve got this! 💪
      </footer>
    </div>
  )
}
