interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-line pb-10">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h1 className="text-3xl sm:text-4xl">{title}</h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-ink-muted sm:text-lg">{description}</p>
      ) : null}
    </header>
  )
}
