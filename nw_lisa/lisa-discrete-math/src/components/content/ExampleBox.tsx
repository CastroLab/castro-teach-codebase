import React from 'react';

interface ExampleBoxProps {
  title?: string;
  children: React.ReactNode;
}

export function ExampleBox({ title, children }: ExampleBoxProps) {
  return (
    <div
      className="example-box my-4 p-4 bg-example-bg border-l-4 border-example-border rounded-r-lg"
      style={{ breakInside: 'avoid' }}
    >
      <h4 className="font-bold font-serif text-example-text text-lg mb-2">
        Example{title ? `: ${title}` : ''}
      </h4>
      <div className="font-serif text-gray-800 leading-relaxed">{children}</div>
    </div>
  );
}
