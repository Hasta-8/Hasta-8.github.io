import { ImageOff } from 'lucide-react'
import type { EvidenceItem } from '../../types'

interface EvidenceGridProps {
  evidence: EvidenceItem[]
}

export default function EvidenceGrid({ evidence }: EvidenceGridProps) {
  if (evidence.length === 0) {
    return null
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {evidence.map((item) => {
        const isApproved = item.status === 'approved' && item.image

        return (
          <li key={item.id} className="surface-card overflow-hidden">
            {isApproved ? (
              <img
                src={item.image}
                alt={item.alt ?? item.title}
                loading="lazy"
                className="aspect-[16/10] w-full border-b border-line object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="visual-grid flex aspect-[16/10] items-center justify-center border-b border-line bg-surface"
              >
                <span className="grid size-12 place-items-center rounded-xl border border-dashed border-line-strong bg-canvas text-ink-subtle">
                  <ImageOff className="size-5" />
                </span>
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base">{item.title}</h3>
                <span className="shrink-0 rounded-full border border-dashed border-line-strong px-2.5 py-0.5 font-mono text-[0.65rem] tracking-[0.14em] text-ink-subtle uppercase">
                  {isApproved ? 'Approved' : 'Placeholder'}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>

              {!isApproved && item.image ? (
                <p className="mt-4 font-mono text-xs break-all text-ink-subtle">
                  Replace with: {item.image}
                </p>
              ) : null}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
