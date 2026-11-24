import { ArrowRight, Download, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile, resume, socialLinks } from '../../data/profile'
import Container from '../ui/Container'

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="hero-surface relative overflow-hidden border-b border-line">
      <Container size="lg" className="relative py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16">
          <div>
            <p className="eyebrow">Applied AI/ML Engineering</p>

            <h1
              id="hero-heading"
              className="mt-6 max-w-3xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              {profile.name}
              <span className="mt-5 block text-lg font-medium tracking-normal text-balance text-ink-muted sm:text-xl lg:text-2xl">
                {profile.headline}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {profile.intro}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
              >
                View Projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              {resume.available ? (
                <a
                  href={resume.href}
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface"
                >
                  Download Resume
                  <Download className="size-4" aria-hidden="true" />
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-dashed border-line-strong px-5 py-2.5 text-sm font-medium text-ink-subtle"
                >
                  Download Resume
                  <Download className="size-4" aria-hidden="true" />
                </span>
              )}
            </div>

            {resume.available ? null : (
              <p className="mt-3 max-w-md text-xs text-ink-subtle">
                The resume PDF is not published yet. Adding{' '}
                <code className="font-mono">public/resume.pdf</code> enables this download
                automatically.
              </p>
            )}

            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
              {socialLinks.map((link) =>
                link.available && link.href ? (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
                    >
                      {link.label}
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  </li>
                ) : (
                  <li key={link.id} className="text-sm text-ink-subtle">
                    {link.label}{' '}
                    <span className="font-mono text-xs tracking-[0.12em] uppercase">
                      (link pending)
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="surface-card p-6">
              <div className="flex items-center gap-3 border-b border-line pb-5">
                <span
                  aria-hidden="true"
                  className="grid size-11 place-items-center rounded-lg bg-ink font-mono text-sm font-semibold text-canvas"
                >
                  DC
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{profile.name}</p>
                  <p className="text-xs text-ink-muted">{profile.role}</p>
                </div>
              </div>

              <dl className="mt-5 space-y-4">
                {profile.focusAreas.map((area) => (
                  <div key={area.label}>
                    <dt className="font-mono text-[0.65rem] tracking-[0.18em] text-ink-muted uppercase">
                      {area.label}
                    </dt>
                    <dd className="mt-1 text-sm text-ink-muted">{area.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
