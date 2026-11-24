import { Boxes, Microscope, ScanLine } from 'lucide-react'
import type { ComponentType } from 'react'
import type { Project } from '../../types'

interface ProjectVisualProps {
  project: Project
}

const iconBySlug: Record<string, ComponentType<{ className?: string }>> = {
  cervicalai: Microscope,
  'robotic-microscopy': ScanLine,
  shelfscan: Boxes,
}

const labelByCategory: Record<Project['category'], string> = {
  professional: 'Professional work',
  personal: 'Personal project',
}

/**
 * Decorative placeholder used until approved project imagery is added under
 * `public/images/`. It intentionally renders no fabricated screenshot.
 */
export default function ProjectVisual({ project }: ProjectVisualProps) {
  const Icon = iconBySlug[project.slug] ?? ScanLine

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
