import { useState } from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import { projects } from '../data/projects'

type CategoryFilter = 'all' | 'professional' | 'personal'

const filters: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All work' },
  { id: 'professional', label: 'Professional work' },
  { id: 'personal', label: 'Personal projects' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all')

  const visibleProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <Container size="lg">
      <div className="py-14 sm:py-20">
        <PageHeader
          eyebrow="Projects"
          title="Selected case studies"
          description="Applied computer vision and retrieval work across professional and personal projects. Personal projects are public, with code, demos and measured results; professional engagements are described without exposing internal code, data, or unreleased results."
        />

        <div className="mt-10 flex flex-wrap items-baseline justify-between gap-4 border-b border-line pb-5">
          <h2 className="text-xl">Case studies</h2>
          <p aria-live="polite" className="font-mono text-xs tracking-[0.14em] text-ink-subtle uppercase">
            Showing {visibleProjects.length} of {projects.length}
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter projects by engagement type"
          className="mt-6 flex flex-wrap gap-2"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id
            const count =
              filter.id === 'all'
                ? projects.length
                : projects.filter((project) => project.category === filter.id).length

            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-ink bg-ink text-canvas'
                    : 'border-line bg-surface text-ink-muted hover:border-line-strong hover:text-ink'
                }`}
              >
                {filter.label}
                <span
                  className={`font-mono text-xs ${isActive ? 'text-canvas' : 'text-ink-muted'}`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Container>
  )
}
