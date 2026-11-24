import type { ToolItem } from '../../types'

interface ToolListProps {
  tools: ToolItem[]
}

export default function ToolList({ tools }: ToolListProps) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line">
      {tools.map((tool) => (
        <li
          key={tool.name}
          className="grid gap-2 bg-surface-raised px-5 py-4 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:items-baseline sm:gap-6"
        >
          <p className="text-sm font-medium text-ink">{tool.name}</p>
          <p className="text-sm leading-relaxed text-ink-muted">{tool.role}</p>
        </li>
      ))}
    </ul>
  )
}
