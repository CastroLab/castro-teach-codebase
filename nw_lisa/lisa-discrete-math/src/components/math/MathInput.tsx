'use client'

import { useRef, useCallback } from 'react'
import { MathDisplay } from './MathDisplay'

interface MathInputProps {
  value: string
  onChange: (latex: string) => void
  placeholder?: string
}

const symbolGroups = [
  {
    name: 'Logic',
    symbols: [
      { label: '\u00AC', latex: '\\neg ' },
      { label: '\u2227', latex: '\\wedge ' },
      { label: '\u2228', latex: '\\vee ' },
      { label: '\u2192', latex: '\\to ' },
      { label: '\u2194', latex: '\\leftrightarrow ' },
      { label: '\u2200', latex: '\\forall ' },
      { label: '\u2203', latex: '\\exists ' },
      { label: '\u22A4', latex: '\\top ' },
      { label: '\u22A5', latex: '\\bot ' },
    ],
  },
  {
    name: 'Sets',
    symbols: [
      { label: '\u2208', latex: '\\in ' },
      { label: '\u2209', latex: '\\notin ' },
      { label: '\u2286', latex: '\\subseteq ' },
      { label: '\u2282', latex: '\\subset ' },
      { label: '\u222A', latex: '\\cup ' },
      { label: '\u2229', latex: '\\cap ' },
      { label: '\u2205', latex: '\\emptyset ' },
      { label: '\u2118', latex: '\\wp ' },
      { label: '\u00D7', latex: '\\times ' },
      { label: '\u2216', latex: '\\setminus ' },
      { label: '\u0305', latex: '\\overline{}' },
    ],
  },
  {
    name: 'Numbers',
    symbols: [
      { label: '\u2261', latex: '\\equiv ' },
      { label: '|', latex: '\\mid ' },
      { label: '\u230A\u230B', latex: '\\lfloor \\rfloor' },
      { label: 'mod', latex: '\\bmod ' },
    ],
  },
  {
    name: 'General',
    symbols: [
      { label: 'a/b', latex: '\\frac{}{}' },
      { label: 'x\u207F', latex: '^{}' },
      { label: 'x\u2099', latex: '_{}' },
      { label: '(n k)', latex: '\\binom{}{}' },
      { label: 'n!', latex: '!' },
      { label: '\u2211', latex: '\\sum ' },
    ],
  },
]

export function MathInput({ value, onChange, placeholder = 'Type LaTeX here...' }: MathInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const insertSymbol = useCallback(
    (latex: string) => {
      const textarea = textareaRef.current
      if (!textarea) {
        onChange(value + latex)
        return
      }
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const newValue = value.slice(0, start) + latex + value.slice(end)
      onChange(newValue)

      requestAnimationFrame(() => {
        textarea.focus()
        const bracePos = latex.indexOf('{}')
        if (bracePos !== -1) {
          const cursor = start + bracePos + 1
          textarea.setSelectionRange(cursor, cursor)
        } else {
          const cursor = start + latex.length
          textarea.setSelectionRange(cursor, cursor)
        }
      })
    },
    [value, onChange],
  )

  return (
    <div className="w-full space-y-3">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full min-h-[80px] p-3 border-2 border-gray-300 rounded-lg font-mono text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none resize-y bg-white transition-colors"
        spellCheck={false}
      />

      <div className="space-y-2">
        {symbolGroups.map((group) => (
          <div key={group.name} className="flex flex-wrap items-center gap-1">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-16 shrink-0">
              {group.name}
            </span>
            <div className="flex flex-wrap gap-1">
              {group.symbols.map((sym) => (
                <button
                  key={sym.latex}
                  type="button"
                  onClick={() => insertSymbol(sym.latex)}
                  className="px-2 py-1 text-sm bg-gray-100 hover:bg-blue-100 hover:text-blue-700 border border-gray-200 rounded-md transition-colors cursor-pointer font-serif min-w-[2rem] text-center"
                  title={sym.latex.trim()}
                >
                  {sym.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {value.trim() && (
        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
          <span className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Preview</span>
          <MathDisplay math={value} display />
        </div>
      )}
    </div>
  )
}

export default MathInput
