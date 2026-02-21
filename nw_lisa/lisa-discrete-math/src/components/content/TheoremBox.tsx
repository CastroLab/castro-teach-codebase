import React from 'react';

interface TheoremBoxProps {
  title: string;
  children: React.ReactNode;
}

export function TheoremBox({ title, children }: TheoremBoxProps) {
  return (
    <div
      className="theorem-box my-4 p-4 bg-theorem-bg border-l-4 border-theorem-border rounded-r-lg"
      style={{ breakInside: 'avoid' }}
    >
      <h4 className="font-bold font-serif text-theorem-text text-lg mb-2">
        <span className="italic">Theorem:</span> {title}
      </h4>
      <div className="font-serif text-gray-800 leading-relaxed">{children}</div>
    </div>
  );
}
