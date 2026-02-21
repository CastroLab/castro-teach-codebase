'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useSidebarStore } from '@/lib/sidebar-store'

const ChatPanel = dynamic(() => import('./ChatPanel'), {
  ssr: false,
  loading: () => <div />,
})

export function ChatSidebarWrapper() {
  const [mounted, setMounted] = useState(false)
  const collapsed = useSidebarStore((s) => s.collapsed)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Spacer to push main content left when sidebar is open */}
      {!collapsed && (
        <div
          className="shrink-0 transition-all duration-300"
          style={{ width: 'var(--sidebar-width, 380px)' }}
        />
      )}
      <ChatPanel />
    </>
  )
}
