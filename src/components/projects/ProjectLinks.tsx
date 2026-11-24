import { Clock, CodeXml, ExternalLink, Globe, MonitorPlay } from 'lucide-react'
import type { ExternalLink as Link, Project } from '../../types'

function iconFor(link: Link) {
  if (/video/i.test(link.label)) return MonitorPlay
  if (/demo/i.test(link.label)) return Globe
  if (/github|repository|code/i.test(link.label)) return CodeXml
  return ExternalLink
}

const base =
  'inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-sm font-medium transition-colors'

/**
 * The project's public links (code, demo, video), shown under the title so
 * visitors can open them straight away. A link marked `pending` (a video not
 * uploaded yet) renders as a non-clickable "coming soon" label.
 */
export default function ProjectLinks({ project }: { project: Project }) {
  if (project.links.length === 0) {
    return project.category === 'professional' ? (
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
        Professional work at MiMD Lab, IIT Delhi. Code, slides and data stay inside the
        engagement, so this case study describes the engineering rather than linking to it.
      </p>
    ) : null
  }

  return (
    <ul className="mt-8 flex flex-wrap gap-3" aria-label="Project links">
      {project.links.map((link) => {
        const Icon = link.pending ? Clock : iconFor(link)
        return (
          <li key={link.label}>
            {link.pending ? (
              <span
                className={`${base} cursor-default border-dashed border-line-strong text-ink-subtle`}
                title="Not published yet"
              >
                <Icon className="size-4" aria-hidden="true" />
                {link.label} · coming soon
              </span>
            ) : (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className={`${base} border-line-strong bg-surface-raised text-ink hover:border-accent hover:text-accent`}
              >
                <Icon className="size-4" aria-hidden="true" />
                {link.label}
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}
