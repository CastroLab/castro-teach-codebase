'use client'

import Link from 'next/link'
import { getContent, type ContentBlock } from '@/data/content'
import { MathDisplay } from '@/components/math/MathDisplay'
import { DefinitionBox } from '@/components/content/DefinitionBox'
import { TheoremBox } from '@/components/content/TheoremBox'
import { ExampleBox } from '@/components/content/ExampleBox'
import { WarningBox } from '@/components/content/WarningBox'
import { VideoEmbed } from '@/components/content/VideoEmbed'

function renderTextWithMath(text: string) {
  // Split on $$...$$ (display) and $...$ (inline) patterns
  const parts: React.ReactNode[] = []
  let remaining = text
  let key = 0

  while (remaining.length > 0) {
    // Check for display math $$...$$
    const displayMatch = remaining.match(/\$\$([\s\S]*?)\$\$/)
    // Check for inline math $...$
    const inlineMatch = remaining.match(/\$([^$]+?)\$/)

    const displayIdx = displayMatch ? remaining.indexOf(displayMatch[0]) : Infinity
    const inlineIdx = inlineMatch ? remaining.indexOf(inlineMatch[0]) : Infinity

    if (displayIdx === Infinity && inlineIdx === Infinity) {
      parts.push(<span key={key++} dangerouslySetInnerHTML={{ __html: remaining.replace(/\n/g, '<br/>') }} />)
      break
    }

    if (displayIdx <= inlineIdx && displayMatch) {
      if (displayIdx > 0) {
        parts.push(<span key={key++} dangerouslySetInnerHTML={{ __html: remaining.slice(0, displayIdx).replace(/\n/g, '<br/>') }} />)
      }
      parts.push(<MathDisplay key={key++} math={displayMatch[1]} display />)
      remaining = remaining.slice(displayIdx + displayMatch[0].length)
    } else if (inlineMatch) {
      if (inlineIdx > 0) {
        parts.push(<span key={key++} dangerouslySetInnerHTML={{ __html: remaining.slice(0, inlineIdx).replace(/\n/g, '<br/>') }} />)
      }
      parts.push(<MathDisplay key={key++} math={inlineMatch[1]} />)
      remaining = remaining.slice(inlineIdx + inlineMatch[0].length)
    }
  }

  return <>{parts}</>
}

export default function ContentPage({
  params,
}: {
  params: { contentId: string }
}) {
  const { contentId } = params
  const content = getContent(contentId)

  if (!content) {
    return (
      <div className="max-w-3xl mx-auto px-8 py-12 content-page">
        <h1 className="text-2xl font-bold">Content not found</h1>
        <p className="text-gray-500 mt-2">No content available for ID: {contentId}</p>
        <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
          &larr; Back to Dashboard
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-8 py-12 content-page">
      <div className="no-print mb-6">
        <button
          onClick={() => window.print()}
          className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
        >
          🖨️ Print / Save as PDF
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
      {content.subtitle && (
        <p className="text-lg text-gray-500 mb-8">{content.subtitle}</p>
      )}

      <div className="space-y-6 leading-relaxed text-[1.05rem]">
        {content.blocks.map((block, i) => {
          switch (block.type) {
            case 'text':
              return (
                <div key={i} className="text-gray-800">
                  {renderTextWithMath(block.content || '')}
                </div>
              )
            case 'math':
              return <MathDisplay key={i} math={block.content || ''} display={block.display !== false} />
            case 'definition':
              return (
                <DefinitionBox key={i} title={block.title || 'Definition'}>
                  {renderTextWithMath(block.content || '')}
                </DefinitionBox>
              )
            case 'theorem':
              return (
                <TheoremBox key={i} title={block.title || 'Theorem'}>
                  {renderTextWithMath(block.content || '')}
                </TheoremBox>
              )
            case 'example':
              return (
                <ExampleBox key={i} title={block.title}>
                  {renderTextWithMath(block.content || '')}
                </ExampleBox>
              )
            case 'warning':
              return (
                <WarningBox key={i} title={block.title}>
                  {renderTextWithMath(block.content || '')}
                </WarningBox>
              )
            case 'video':
              return block.videoId ? (
                <VideoEmbed
                  key={i}
                  videoId={block.videoId}
                  title={block.title || 'Video'}
                  timestamp={block.timestamp}
                />
              ) : null
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}
