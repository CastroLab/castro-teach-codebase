import React from 'react';

interface DefinitionBoxProps {
  title: string;
  children: React.ReactNode;
}

export function DefinitionBox({ title, children }: DefinitionBoxProps) {
  return (
    <div
      className="definition-box my-4 p-4 bg-definition-bg border-l-4 border-definition-border rounded-r-lg"
      style={{ breakInside: 'avoid' }}
    >
      <h4 className="font-bold font-serif text-definition-text text-lg mb-2">
        {title}
      </h4>
      <div className="font-serif text-gray-800 leading-relaxed">{children}</div>
    </div>
  );
}
