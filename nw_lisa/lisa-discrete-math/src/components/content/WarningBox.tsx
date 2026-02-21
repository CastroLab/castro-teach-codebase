import React from 'react';

interface WarningBoxProps {
  title?: string;
  children: React.ReactNode;
}

export function WarningBox({ title, children }: WarningBoxProps) {
  return (
    <div
      className="my-4 p-4 bg-warning-bg border-l-4 border-warning-border rounded-r-lg"
      style={{ breakInside: 'avoid' }}
    >
      <h4 className="font-bold font-serif text-warning-text text-lg mb-2">
        {title ?? '\u26A0 Common Mistake'}
      </h4>
      <div className="font-serif text-gray-800 leading-relaxed">{children}</div>
    </div>
  );
}
