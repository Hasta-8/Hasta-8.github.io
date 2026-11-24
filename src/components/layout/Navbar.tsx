import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { resume } from '../../data/profile'
import Container from '../ui/Container'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight"
            onClick={closeMenu}
          >
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center rounded-md bg-ink font-mono text-xs font-semibold text-canvas"
            >
              DC
            </span>
            <span className="hidden sm:inline">Debadri Chatterjee</span>
            <span className="sm:hidden">Portfolio</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'text-ink underline decoration-accent decoration-2 underline-offset-[6px]'
                      : 'text-ink-muted hover:text-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {resume.available ? (
            <a
              href={resume.href}
              download
              className="hidden items-center gap-1.5 rounded-md border border-line-strong px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface lg:inline-flex"
            >
              Resume
              <Download className="size-3.5" aria-hidden="true" />
            </a>
          ) : null}

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-line text-ink-muted transition-colors hover:text-ink lg:hidden"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>

        <nav
          id="primary-navigation"
          aria-label="Primary mobile"
          hidden={!isOpen}
          className="border-t border-line py-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive ? 'bg-surface text-ink' : 'text-ink-muted hover:text-ink'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            {resume.available ? (
              <li>
                <a
                  href={resume.href}
                  download
                  onClick={closeMenu}
                  className="flex items-center gap-2 rounded-md border border-line-strong px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface"
                >
                  Resume
                  <Download className="size-3.5" aria-hidden="true" />
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
