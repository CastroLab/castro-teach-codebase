import type { Metadata } from 'next'
import './globals.css'
import { ChatSidebarWrapper } from '@/components/chat/ChatSidebarWrapper'

export const metadata: Metadata = {
  title: "Lisa's Discrete Math Study Hub",
  description: 'CS5002 Discrete Mathematics Midterm Preparation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="flex min-h-screen">
          <main className="flex-1 min-w-0 transition-all duration-300">
            {children}
          </main>
          <ChatSidebarWrapper />
        </div>
      </body>
    </html>
  )
}
