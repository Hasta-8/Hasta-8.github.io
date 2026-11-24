import ProjectCard from '../projects/ProjectCard'
import Section from '../ui/Section'
import { featuredProjects } from '../../data/projects'

export default function FeaturedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Featured projects"
      description="Computer vision systems built for microscopy, robotics, and retail — each with its approach, evaluation, and honest limitations."
      action={{ label: 'All projects', to: '/projects' }}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm text-ink-subtle">
        Case studies are published as they are reviewed and approved. Metrics are labelled with their
        verification status, and results still under internal verification are marked as such.
      </p>
    </Section>
  )
}
