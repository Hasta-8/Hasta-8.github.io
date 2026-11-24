import type { VerificationStatus } from '../../types'

interface StatusBadgeProps {
  status: VerificationStatus
  label?: string
}

const labels: Record<VerificationStatus, string> = {
  verified: 'Verified',
  pending: 'Pending',
  not_disclosed: 'Not disclosed',
}

export default function StatusBadge({ status, label }: StatusBadgeProps) {
  if (status === 'verified') {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.14em] text-accent-strong uppercase">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
        {label ?? labels.verified}
      </span>
    )
  }

  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-line-strong px-2.5 py-0.5 font-mono text-[0.65rem] tracking-[0.14em] text-ink-subtle uppercase">
      {label ?? labels[status]}
    </span>
  )
}
