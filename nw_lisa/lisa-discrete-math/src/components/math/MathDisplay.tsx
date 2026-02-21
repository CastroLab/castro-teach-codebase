'use client'

import { useMemo } from 'react'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

interface MathDisplayProps {
  math: string
  display?: boolean
}

export function MathDisplay({ math, display = false }: MathDisplayProps) {
  const rendered = useMemo(() => {
    try {
      if (display) {
        return <BlockMath math={math} />
      }
      return <InlineMath math={math} />
    } catch {
      return (
        <code className="px-1.5 py-0.5 bg-red-50 text-red-700 rounded text-sm font-mono border border-red-200">
          {math}
        </code>
      )
    }
  }, [math, display])

  return <>{rendered}</>
}

export default MathDisplay
