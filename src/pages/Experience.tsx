import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import { education } from '../data/education'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <Container size="lg">
      <div className="py-14 sm:py-20">
        <PageHeader
          eyebrow="Experience"
          title="Experience & Education"
          description="A look at my professional experience, technical work, and academic background."
        />

        <div className="mt-12 space-y-6">
          {experiences.map((entry) => {
            const showLocation =
              entry.location &&
              !entry.organization.toLowerCase().includes(entry.location.toLowerCase())

            return (
              <article key={entry.id} className="surface-card p-6 sm:p-8">
                <div className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h2 className="text-xl">{entry.role}</h2>
                    <p className="mt-1 text-ink-muted">{entry.organization}</p>
                    {showLocation ? (
                      <p className="mt-1 text-xs text-ink-muted">{entry.location}</p>
                    ) : null}
                  </div>
                  {entry.period ? (
                    <p className="font-mono text-xs tracking-[0.12em] text-ink-muted uppercase">
                      {entry.period}
                    </p>
                  ) : null}
                </div>

                <ul className="mt-6 space-y-3">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {entry.links.length > 0 ? (
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5">
                    {entry.links.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
                      >
                        {link.label}
                        <ArrowUpRight
                          className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    ))}
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>

        <section
          aria-labelledby="education-heading"
          className="mt-14 border-t border-line pt-10"
        >
          <p className="eyebrow">Education</p>
          <h2 id="education-heading" className="mt-3 text-xl">
            Academic background
          </h2>

          <div className="mt-6 space-y-6">
            {education.map((entry) => (
              <article
                key={entry.id}
                className="border-t border-line pt-6 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg">{entry.degree}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{entry.institution}</p>
                    {entry.location ? (
                      <p className="mt-1 text-xs text-ink-subtle">{entry.location}</p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-1 sm:items-end">
                    <p className="font-mono text-xs tracking-[0.12em] text-ink-subtle uppercase">
                      {entry.period}
                    </p>
                    {entry.gpa ? (
                      <p className="text-xs text-ink-subtle">GPA {entry.gpa}</p>
                    ) : null}
                    {entry.percentage ? (
                      <p className="text-xs text-ink-subtle">Percentage {entry.percentage}</p>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Container>
  )
}
