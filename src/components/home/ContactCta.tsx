import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import Section from '../ui/Section'
import { contactLinks, resume } from '../../data/profile'

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export default function ContactCta() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's discuss an applied AI problem"
      description="I am open to applied AI/ML roles, research collaborations, and projects where computer vision has to survive contact with real hardware."
    >
      <div className="surface-card grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <h3 className="text-2xl sm:text-3xl">
            Have a detection, classification, or edge inference problem?
          </h3>
          <p className="mt-4 max-w-xl text-ink-muted">
            Send a short description of the problem, the data you have, and the constraints you work
            under. I am happy to discuss evaluation design and deployment trade-offs before any code
            is written.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-3">
            {contactLinks.map((link) => {
              if (!link.available || !link.href) {
                return (
                  <li key={link.id} className="text-sm text-ink-subtle">
                    {link.label}{' '}
                    <span className="font-mono text-xs tracking-[0.12em] uppercase">
                      (link pending)
                    </span>
                  </li>
                )
              }

              const external = isExternalHref(link.href)

              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
                  >
                    {link.label}
                    {external ? (
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>

          {resume.available ? (
            <a
              href={resume.href}
              download
              className="text-sm font-medium text-accent-strong underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
            >
              Download the resume PDF
            </a>
          ) : (
            <p className="text-sm text-ink-subtle">
              Resume PDF pending publication
              <span className="sr-only"> — the resume has not been added yet</span>
            </p>
          )}

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            Open the contact page
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </Section>
  )
}
