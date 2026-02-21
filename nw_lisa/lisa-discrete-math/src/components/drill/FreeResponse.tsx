'use client';

import { useState } from 'react';
import MathInput from '@/components/math/MathInput';

interface FreeResponseProps {
  onSubmit: (answer: string) => void;
  placeholder?: string;
}

export default function FreeResponse({
  onSubmit,
  placeholder = 'Type your answer in LaTeX...',
}: FreeResponseProps) {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (value.trim() && !submitted) {
      setSubmitted(true);
      onSubmit(value.trim());
    }
  };

  return (
    <div className="space-y-3">
      <MathInput
        value={value}
        onChange={setValue}
        placeholder={placeholder}
      />
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!value.trim() || submitted}
        className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg
                   hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed
                   transition-colors shadow-sm"
      >
        {submitted ? 'Submitted' : 'Submit Answer'}
      </button>
    </div>
  );
}
