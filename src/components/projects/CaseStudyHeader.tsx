import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../types'
import Chip from '../ui/Chip'
import ProjectLinks from './ProjectLinks'
import ProjectVisual from './ProjectVisual'

interface CaseStudyHeaderProps {
  project: Project
}

export default function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  return (
    <header className="border-b border-line pb-12">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs tracking-[0.14em] text-ink-subtle uppercase">
          <li>
            <Link to="/projects" className="transition-colors hover:text-ink">
              Projects
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="size-3.5" />
          </li>
          <li className="text-ink" aria-current="page">
            {project.title}
          </li>
        </ol>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-14">
        <div>
          <p className="eyebrow">
            Case study · {project.category === 'professional' ? 'Professional work' : 'Personal project'}
          </p>

          <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl">{project.title}</h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{project.summary}</p>

          <ProjectLinks project={project} />

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Chip variant="accent">{tag}</Chip>
              </li>
            ))}
          </ul>
        </div>

        <ProjectVisual project={project} />
      </div>

    </header>
  )
}
