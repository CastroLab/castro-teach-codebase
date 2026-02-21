'use client';

import { useCallback } from 'react';
import type { DrillQuestion as DrillQuestionType } from '@/data/drills';
import MathDisplay from '@/components/math/MathDisplay';
import MultipleChoice from './MultipleChoice';
import FreeResponse from './FreeResponse';

interface DrillQuestionProps {
  question: DrillQuestionType;
  onAnswer: (answer: string) => void;
  showResult?: { correct: boolean; explanation: string };
  onHint: () => void;
}

function renderQuestionText(text: string) {
  const parts = text.split(/(\$\$[^$]+\$\$|\$[^$]+\$)/g);
  return parts.map((part, i) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return <MathDisplay key={i} math={part.slice(2, -2)} display />;
    }
    if (part.startsWith('$') && part.endsWith('$')) {
      return <MathDisplay key={i} math={part.slice(1, -1)} />;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function DrillQuestion({
  question,
  onAnswer,
  showResult,
  onHint,
}: DrillQuestionProps) {

  const handleHint = useCallback(() => {
    onHint();
  }, [onHint]);

  return (
    <div className="drill-enter space-y-4">
      <div className="font-serif text-lg leading-relaxed text-gray-900">
        {renderQuestionText(question.question)}
      </div>

      {question.type === 'multiple-choice' && question.options && (
        <MultipleChoice
          options={question.options}
          onSelect={onAnswer}
          correctAnswer={showResult ? question.correctAnswer : undefined}
        />
      )}

      {question.type === 'free-response' && !showResult && (
        <FreeResponse onSubmit={onAnswer} />
      )}

      {!showResult && question.hint && (
        <button
          type="button"
          onClick={handleHint}
          className="px-4 py-2 text-sm text-indigo-600 border border-indigo-300 rounded-lg
                     hover:bg-indigo-50 transition-colors"
        >
          Ask Gam for help
        </button>
      )}

      {showResult && (
        <div
          className={`p-4 rounded-lg border-2 ${
            showResult.correct
              ? 'bg-green-50 border-green-300 text-green-900'
              : 'bg-red-50 border-red-300 text-red-900'
          }`}
        >
          <div className="font-bold mb-1">
            {showResult.correct ? 'Correct!' : 'Not quite right.'}
          </div>
          <div className="font-serif text-sm leading-relaxed">
            {renderQuestionText(showResult.explanation)}
          </div>
        </div>
      )}
    </div>
  );
}
