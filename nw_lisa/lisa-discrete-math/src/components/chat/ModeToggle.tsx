'use client';

type ChatMode = 'ta' | 'instructor';

interface ModeToggleProps {
  mode: ChatMode;
  onToggle: (mode: ChatMode) => void;
}

export default function ModeToggle({ mode, onToggle }: ModeToggleProps) {
  return (
    <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
      <div className="flex items-center bg-gray-200 rounded-lg p-0.5">
        <button
          type="button"
          onClick={() => onToggle('ta')}
          className={`flex-1 py-1.5 px-3 text-sm font-semibold rounded-md transition-all ${
            mode === 'ta'
              ? 'bg-white text-indigo-700 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Gam (TA)
        </button>
        <button
          type="button"
          onClick={() => onToggle('instructor')}
          className={`flex-1 py-1.5 px-3 text-sm font-semibold rounded-md transition-all ${
            mode === 'instructor'
              ? 'bg-white text-indigo-700 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Instructor
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-1.5 text-center font-serif">
        {mode === 'ta'
          ? 'Gam guides you with hints and questions -- won\'t give direct answers.'
          : 'Instructor mode provides direct explanations and solutions.'}
      </p>
    </div>
  );
}
