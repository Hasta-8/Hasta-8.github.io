import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  action?: { label: string; to: string }
  children: ReactNode
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  action,
  children,
}: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-24 py-16 sm:py-24">
      <Container size="xl">
        <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 id={headingId} className="mt-4 max-w-2xl text-3xl sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 max-w-2xl text-ink-muted sm:text-lg">{description}</p>
            ) : null}
          </div>

          {action ? (
            <Link
              to={action.to}
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              {action.label}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          ) : null}
        </div>

        <div className="mt-10">{children}</div>
      </Container>
    </section>
  )
}
