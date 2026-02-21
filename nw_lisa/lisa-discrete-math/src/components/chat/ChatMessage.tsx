'use client';

import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

interface ChatMessageProps {
  message: { role: 'user' | 'assistant'; content: string };
  isStreaming?: boolean;
}

const markdownComponents: Components = {
  table: ({ children, ...props }) => (
    <div className="my-2 overflow-x-auto">
      <table className="chat-md-table" {...props}>{children}</table>
    </div>
  ),
  pre: ({ children, ...props }) => (
    <pre className="my-2 p-3 rounded-lg bg-gray-800 text-gray-100 overflow-x-auto text-xs" {...props}>
      {children}
    </pre>
  ),
  code: ({ children, className, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="px-1 py-0.5 rounded bg-gray-200 text-gray-800 text-xs font-mono" {...props}>
          {children}
        </code>
      );
    }
    return <code className={className} {...props}>{children}</code>;
  },
};

const userMarkdownComponents: Components = {
  ...markdownComponents,
  pre: ({ children, ...props }) => (
    <pre className="my-2 p-3 rounded-lg bg-blue-800/40 text-blue-50 overflow-x-auto text-xs" {...props}>
      {children}
    </pre>
  ),
  code: ({ children, className, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="px-1 py-0.5 rounded bg-blue-500/30 text-white text-xs font-mono" {...props}>
          {children}
        </code>
      );
    }
    return <code className={className} {...props}>{children}</code>;
  },
};

export default function ChatMessage({ message, isStreaming = false }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={`chat-message flex gap-2.5 ${
        isUser ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {!isUser && (
        <div className="shrink-0 w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold mt-0.5">
          AI
        </div>
      )}

      <div
        className={`chat-markdown max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed font-serif ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-md chat-markdown-user'
            : 'bg-gray-100 text-gray-900 rounded-bl-md border border-gray-200'
        }`}
      >
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
          components={isUser ? userMarkdownComponents : markdownComponents}
        >
          {message.content}
        </ReactMarkdown>
        {isStreaming && (
          <span className="inline-flex items-center ml-1 gap-0.5">
            <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </span>
        )}
      </div>
    </div>
  );
}
