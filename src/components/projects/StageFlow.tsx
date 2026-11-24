import type { ArchitectureStage } from '../../types'
import StatusBadge from '../ui/StatusBadge'

interface StageFlowProps {
  stages: ArchitectureStage[]
}

export default function StageFlow({ stages }: StageFlowProps) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
      {stages.map((stage, index) => (
        <li key={stage.title} className="bg-surface-raised p-6">
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-xs tracking-[0.16em] text-ink-subtle">
              {String(index + 1).padStart(2, '0')}
            </span>
            <StatusBadge status={stage.status} />
          </div>
          <h3 className="mt-4 text-base">{stage.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{stage.description}</p>
        </li>
      ))}
    </ol>
  )
}
