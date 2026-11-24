import ProjectCard from '../projects/ProjectCard'
import Section from '../ui/Section'
import { featuredProjects } from '../../data/projects'

export default function FeaturedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Featured projects"
      description="Computer vision and retrieval systems, professional and personal — each with its approach, measured results, and honest limitations."
      action={{ label: 'All projects', to: '/projects' }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm text-ink-subtle">
        Personal projects link to their code, demos and evaluation. Professional case studies describe
        the work without internal code or data, and results still under internal verification are
        marked as such.
      </p>
    </Section>
  )
}
