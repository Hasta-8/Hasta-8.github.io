import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../types'
import Chip from '../ui/Chip'
import ProjectVisual from './ProjectVisual'

interface CaseStudyHeaderProps {
  project: Project
}

export default function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  const approvedEvidence = project.caseStudy?.evidence.filter(
    (item) => item.status === 'approved',
  ).length

  const meta = [
    {
      label: 'Engagement',
      value:
        project.category === 'professional'
          ? 'Professional work · MiMD Lab, IIT Delhi'
          : 'Personal project',
    },
    {
      label: 'Case study',
      value: project.status === 'draft' ? 'Draft · awaiting review' : 'Reviewed',
    },
    {
      label: 'Public code or demo',
      value: project.links.length > 0 ? 'Linked below' : 'Not published',
    },
    {
      label: 'Visual evidence',
      value:
        approvedEvidence && approvedEvidence > 0
          ? `${approvedEvidence} approved`
          : 'Placeholders in place',
    },
  ]

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

          <ul className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Chip variant="accent">{tag}</Chip>
              </li>
            ))}
          </ul>
        </div>

        <ProjectVisual project={project} />
      </div>

      <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {meta.map((item) => (
          <div key={item.label} className="bg-surface-raised px-5 py-4">
            <dt className="font-mono text-[0.65rem] tracking-[0.16em] text-ink-subtle uppercase">
              {item.label}
            </dt>
            <dd className="mt-1.5 text-sm text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  )
}
