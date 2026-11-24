import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import { getAvailableLinks, profileLinks, resume } from '../../data/profile'

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

const currentYear = new Date().getFullYear()

export default function Footer() {
  const links = getAvailableLinks(profileLinks)

  return (
    <footer className="border-t border-line bg-surface">
      <Container>
        <div className="flex flex-col gap-8 py-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="text-sm font-medium text-ink">Debadri Chatterjee</p>
            <p className="mt-1 text-sm text-ink-muted">
              AI/ML Engineer working on computer vision and deployed AI systems.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[0.65rem] tracking-[0.18em] text-ink-subtle uppercase">
                Pages
              </p>
              <Link to="/projects" className="text-ink-muted transition-colors hover:text-ink">
                Projects
              </Link>
              <Link to="/experience" className="text-ink-muted transition-colors hover:text-ink">
                Experience
              </Link>
              <Link to="/skills" className="text-ink-muted transition-colors hover:text-ink">
                Skills
              </Link>
              <Link to="/contact" className="text-ink-muted transition-colors hover:text-ink">
                Contact
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-mono text-[0.65rem] tracking-[0.18em] text-ink-subtle uppercase">
                Elsewhere
              </p>
              {links.map((link) => {
                const external = isExternalHref(link.href)

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                )
              })}
              {resume.available ? (
                <a
                  href={resume.href}
                  download
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  Resume (PDF)
                </a>
              ) : (
                <span className="text-ink-subtle">Resume (pending)</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Debadri Chatterjee</p>
          <p className="font-mono">React · Vite · TypeScript · Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  )
}
