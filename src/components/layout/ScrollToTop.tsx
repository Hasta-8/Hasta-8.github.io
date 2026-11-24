import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getProjectBySlug } from '../../data/projects'

const SITE = 'Debadri Chatterjee'
const titles: Record<string, string> = {
  '/': `${SITE} — Applied AI/ML Engineer`,
  '/projects': `Projects · ${SITE}`,
  '/experience': `Experience · ${SITE}`,
  '/skills': `Skills · ${SITE}`,
  '/about': `About · ${SITE}`,
  '/contact': `Contact · ${SITE}`,
}

/** On every route change: scroll to the top and set the browser-tab title. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    const path = pathname.replace(/\/+$/, '') || '/'
    const slug = path.startsWith('/projects/') ? path.slice('/projects/'.length) : null
    const project = slug ? getProjectBySlug(slug) : undefined
    document.title = project ? `${project.title} · ${SITE}` : (titles[path] ?? `Page not found · ${SITE}`)
  }, [pathname])

  return null
}
