import type { ArchitectureDiagram } from '../../types'

/**
 * Pre-rendered architecture diagrams (static SVGs; sources in docs/diagrams/).
 * Wide diagrams keep a minimum width so their labels stay readable, and scroll
 * sideways inside their frame on narrow screens instead of shrinking.
 */
export default function ArchitectureDiagrams({ diagrams }: { diagrams: ArchitectureDiagram[] }) {
  return (
    <div className="grid gap-6">
      {diagrams.map((diagram) => (
        <figure key={diagram.src} className="overflow-hidden rounded-xl border border-line bg-canvas">
          <div className="overflow-x-auto p-4 sm:p-6">
            <img
              src={diagram.src}
              alt={diagram.alt}
              loading="lazy"
              className="mx-auto block h-auto w-full"
              style={{ maxWidth: diagram.width, minWidth: Math.round(diagram.width * 0.7) }}
            />
          </div>
          <figcaption className="border-t border-line bg-surface px-5 py-3 text-sm text-ink-muted">
            {diagram.caption}
            {diagram.width > 900 ? (
              <span className="text-ink-subtle sm:hidden"> Scroll sideways to see the whole diagram.</span>
            ) : null}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
