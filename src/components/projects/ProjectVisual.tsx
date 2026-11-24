import { Boxes, FileSearch, Hand, Images, Microscope, ScanLine, Shirt } from 'lucide-react'
import type { ComponentType } from 'react'
import type { Project } from '../../types'

interface ProjectVisualProps {
  project: Project
}

const iconBySlug: Record<string, ComponentType<{ className?: string }>> = {
  cervicalai: Microscope,
  'robotic-microscopy': ScanLine,
  shelfscan: Boxes,
  'production-rag': FileSearch,
  imgsimisearch: Images,
  garment: Shirt,
  glove: Hand,
}

const labelByCategory: Record<Project['category'], string> = {
  professional: 'Professional work',
  personal: 'Personal project',
}

/**
 * The project's screenshot when one is approved (`project.image`, under
 * `public/images/`); otherwise a decorative placeholder. It never renders a
 * fabricated screenshot.
 */
export default function ProjectVisual({ project }: ProjectVisualProps) {
  const Icon = iconBySlug[project.slug] ?? ScanLine

  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="size-full object-cover object-top"
        />
      </div>
    )
  }

  return (
    <div
      aria-hidden="true"
      className="visual-grid relative flex aspect-[16/10] items-center justify-center border-b border-line bg-surface"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="grid size-14 place-items-center rounded-xl border border-line bg-canvas text-ink-muted">
          <Icon className="size-6" />
        </span>
        <p className="font-mono text-xs tracking-[0.18em] text-ink-subtle uppercase">
          {labelByCategory[project.category]}
        </p>
      </div>
      <span className="absolute top-4 left-4 font-mono text-xs tracking-[0.18em] text-ink-subtle uppercase">
        {project.slug}
      </span>
    </div>
  )
}
