import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../types'
import Chip from '../ui/Chip'
import ProjectVisual from './ProjectVisual'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const metric = project.metrics.find((item) => item.status !== 'pending')

  return (
    <article className="group surface-card flex h-full flex-col overflow-hidden transition-colors hover:border-line-strong">
      <Link
        to={`/projects/${project.slug}`}
        className="flex h-full flex-col focus-visible:outline-offset-[-2px]"
      >
        <ProjectVisual project={project} />

        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-xs tracking-[0.18em] text-ink-muted uppercase">
            {project.category === 'professional' ? 'Professional work' : 'Personal project'}
          </p>

          <h3 className="mt-4 text-xl transition-colors group-hover:text-accent-strong">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{project.summary}</p>

          {metric ? (
            <p className="mt-5 border-l-2 border-accent pl-3">
              <span className="block font-mono text-xs tracking-[0.12em] text-ink-muted uppercase">
                {metric.label}
              </span>
              <span className="mt-1 block text-lg font-semibold text-ink">{metric.value}</span>
              {metric.note ? (
                <span className="mt-1 block text-xs text-ink-muted">{metric.note}</span>
              ) : null}
            </p>
          ) : null}

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Chip>{tag}</Chip>
              </li>
            ))}
          </ul>

          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
            View case study
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </article>
  )
}
