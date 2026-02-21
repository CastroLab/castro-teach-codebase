'use client'

interface ProgressBarProps {
  value: number
  color?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses: Record<string, string> = {
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
}

export function ProgressBar({ value, color = '#3b82f6', size = 'md' }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value))

  return (
    <div className="flex items-center gap-3 w-full">
      <div className={`flex-1 ${sizeClasses[size]} bg-gray-100 rounded-full overflow-hidden`}>
        <div
          className="progress-bar h-full rounded-full"
          style={{ width: `${clamped}%`, backgroundColor: color }}
        />
      </div>
      {(size === 'md' || size === 'lg') && (
        <span className="text-xs font-medium text-gray-500 w-10 text-right">
          {Math.round(clamped)}%
        </span>
      )}
    </div>
  )
}

export default ProgressBar
