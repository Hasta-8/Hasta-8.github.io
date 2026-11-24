import type { ReactNode } from 'react'

type ChipVariant = 'default' | 'accent'

interface ChipProps {
  children: ReactNode
  variant?: ChipVariant
}

const variantClasses: Record<ChipVariant, string> = {
  default: 'border-line bg-surface text-ink-muted',
  accent: 'border-transparent bg-accent-soft text-accent-strong',
}

export default function Chip({ children, variant = 'default' }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variantClasses[variant]}`}
    >
      {children}
    </span>
  )
}
