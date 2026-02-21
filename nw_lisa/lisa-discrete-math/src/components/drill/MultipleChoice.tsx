'use client';

import MathDisplay from '@/components/math/MathDisplay';

interface MultipleChoiceProps {
  options: string[];
  onSelect: (option: string) => void;
  selected?: string;
  correctAnswer?: string;
}

function renderOptionContent(text: string) {
  const parts = text.split(/(\$[^$]+\$)/g);
  return parts.map((part, i) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      return <MathDisplay key={i} math={part.slice(1, -1)} />;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function MultipleChoice({
  options,
  onSelect,
  selected,
  correctAnswer,
}: MultipleChoiceProps) {
  const isGraded = correctAnswer !== undefined;

  const getOptionStyle = (option: string): string => {
    const base =
      'w-full text-left px-4 py-3 rounded-lg border-2 transition-all font-serif flex items-center gap-3';

    if (!isGraded) {
      if (option === selected) {
        return `${base} border-blue-500 bg-blue-50 text-blue-900`;
      }
      return `${base} border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 cursor-pointer`;
    }

    if (option === correctAnswer) {
      return `${base} border-green-500 bg-green-50 text-green-900`;
    }
    if (option === selected && option !== correctAnswer) {
      return `${base} border-red-500 bg-red-50 text-red-900`;
    }
    return `${base} border-gray-200 opacity-60`;
  };

  const getRadioStyle = (option: string): string => {
    const base = 'w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center';

    if (!isGraded) {
      if (option === selected) {
        return `${base} border-blue-500 bg-blue-500`;
      }
      return `${base} border-gray-300`;
    }

    if (option === correctAnswer) {
      return `${base} border-green-500 bg-green-500`;
    }
    if (option === selected && option !== correctAnswer) {
      return `${base} border-red-500 bg-red-500`;
    }
    return `${base} border-gray-300`;
  };

  return (
    <div className="space-y-2">
      {options.map((option, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => !isGraded && onSelect(option)}
          className={getOptionStyle(option)}
          disabled={isGraded}
        >
          <div className={getRadioStyle(option)}>
            {(option === selected || (isGraded && option === correctAnswer)) && (
              <div className="w-2 h-2 rounded-full bg-white" />
            )}
          </div>
          <span className="flex-1">{renderOptionContent(option)}</span>
        </button>
      ))}
    </div>
  );
}
