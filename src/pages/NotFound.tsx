import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'

export default function NotFound() {
  return (
    <Container>
      <div className="py-20">
        <p className="eyebrow mb-3">404</p>
        <h1 className="text-3xl sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-ink-muted">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
        >
          Back to home
        </Link>
      </div>
    </Container>
  )
}
