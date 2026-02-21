'use client'

import Link from 'next/link'
import { curriculum } from '@/data/curriculum'
import { DrillContainer } from '@/components/drill/DrillContainer'

export default function SubunitPage({
  params,
}: {
  params: { dayId: string; unitId: string; subunitId: string }
}) {
  const { dayId, unitId, subunitId } = params
  const dayNum = parseInt(dayId)
  const unitNum = parseInt(unitId)
  const subunitNum = parseInt(subunitId)
  const day = curriculum.find(d => d.id === dayNum)
  const unit = day?.units[unitNum - 1]
  const subunit = unit?.subunits[subunitNum - 1]

  if (!day || !unit || !subunit) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold">Subunit not found</h1>
        <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
          &larr; Back to Dashboard
        </Link>
      </div>
    )
  }

  const drillId = `drill-${subunit.id}`

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">Dashboard</Link>
        <span>/</span>
        <Link href={`/day/${day.id}`} className="hover:text-gray-700">Day {day.id}</Link>
        <span>/</span>
        <Link href={`/day/${day.id}/unit/${unitNum}`} className="hover:text-gray-700">
          {unit.title}
        </Link>
        <span>/</span>
        <span className="text-gray-800">{subunit.title}</span>
      </div>

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span
            className="text-xs font-medium px-2 py-1 rounded-full"
            style={{ backgroundColor: day.color + '20', color: day.color }}
          >
            Day {day.id} &middot; Unit {unitNum}
          </span>
          <span className="text-xs text-gray-400">{subunit.timeMinutes} min</span>
        </div>
        <h1 className="text-3xl font-bold">{subunit.title}</h1>
        <p className="text-gray-600 mt-2">{subunit.description}</p>
      </header>

      {subunit.contentId && (
        <div className="mb-8">
          <Link
            href={`/content/${subunit.contentId}`}
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            📖 Open Study Material
            <span className="text-xs opacity-75">(opens in new tab)</span>
          </Link>
        </div>
      )}

      <section>
        <h2 className="text-xl font-bold mb-4">Practice Drills</h2>
        <DrillContainer drillId={drillId} subunitId={subunit.id} />
      </section>

      <div className="mt-8 flex justify-between items-center">
        {subunitNum > 1 ? (
          <Link
            href={`/day/${day.id}/unit/${unitNum}/subunit/${subunitNum - 1}`}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            &larr; Previous Subunit
          </Link>
        ) : (
          <div />
        )}
        {subunitNum < unit.subunits.length ? (
          <Link
            href={`/day/${day.id}/unit/${unitNum}/subunit/${subunitNum + 1}`}
            className="text-sm font-medium px-4 py-2 rounded-lg"
            style={{ backgroundColor: day.color + '15', color: day.color }}
          >
            Next Subunit &rarr;
          </Link>
        ) : (
          <Link
            href={`/day/${day.id}/unit/${unitNum}#test`}
            className="text-sm font-medium px-4 py-2 rounded-lg bg-green-50 text-green-700"
          >
            Ready for Unit Test &rarr;
          </Link>
        )}
      </div>
    </div>
  )
}
