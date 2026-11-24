import Section from '../ui/Section'
import { experiences } from '../../data/experience'

export default function ExperiencePreview() {
  const entry = experiences[0]

  if (!entry) {
    return null
  }

  const previewBullets = entry.bullets.slice(0, 3)

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Current role"
      description="A snapshot of where I am working and what the work involves."
      action={{ label: 'View full experience', to: '/experience' }}
    >
      <article className="surface-card p-6 sm:p-8">
        <div className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-xl">{entry.role}</h3>
            <p className="mt-1 text-ink-muted">{entry.organization}</p>
          </div>
          <p className="font-mono text-xs tracking-[0.12em] text-ink-muted uppercase">
            {entry.period}
          </p>
        </div>

        <ul className="mt-6 space-y-3">
          {previewBullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
              />
              {bullet}
            </li>
          ))}
        </ul>
      </article>
    </Section>
  )
}
