import type { ProjectMetric } from '../../types'

interface MetricTableProps {
  metrics: ProjectMetric[]
  caption: string
}

export default function MetricTable({ metrics, caption }: MetricTableProps) {
  if (metrics.length === 0) {
    return null
  }

  return (
    <div
      role="region"
      aria-label={caption}
      tabIndex={0}
      className="overflow-x-auto rounded-xl border border-line bg-surface-raised"
    >
      <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="px-5 py-3 font-mono text-[0.65rem] tracking-[0.16em] text-ink-subtle uppercase">
              Metric
            </th>
            <th scope="col" className="px-5 py-3 font-mono text-[0.65rem] tracking-[0.16em] text-ink-subtle uppercase">
              Value
            </th>
            <th scope="col" className="px-5 py-3 font-mono text-[0.65rem] tracking-[0.16em] text-ink-subtle uppercase">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric) => {
            const isPending = metric.status === 'pending'

            return (
              <tr key={metric.label} className="border-b border-line last:border-b-0 align-top">
                <th scope="row" className="px-5 py-4 font-medium text-ink">
                  {metric.label}
                </th>
                <td className="px-5 py-4">
                  <span
                    className={
                      isPending
                        ? 'font-mono text-sm text-ink-subtle'
                        : 'text-lg font-semibold tracking-tight text-ink'
                    }
                  >
                    {metric.value}
                  </span>
                </td>
                <td className="px-5 py-4 text-xs leading-relaxed text-ink-muted">
                  {metric.note ?? '—'}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
