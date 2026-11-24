import { ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import CaseStudyHeader from '../components/projects/CaseStudyHeader'
import EvidenceGrid from '../components/projects/EvidenceGrid'
import MetricTable from '../components/projects/MetricTable'
import ProjectCard from '../components/projects/ProjectCard'
import StageFlow from '../components/projects/StageFlow'
import ToolList from '../components/projects/ToolList'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import StatusBadge from '../components/ui/StatusBadge'
import { getProjectBySlug, getRelatedProjects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <Container>
        <div className="py-20">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-3xl sm:text-4xl">Case study not found</h1>
          <p className="mt-4 max-w-xl text-ink-muted">
            No case study is published under this address. The project may have been renamed, or it
            may not be published yet.
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
          >
            Back to all projects
          </Link>
        </div>
      </Container>
    )
  }

  const caseStudy = project.caseStudy
  const relatedProjects = getRelatedProjects(project.slug)

  return (
    <Container size="lg">
      <article className="pt-12 pb-4 sm:pt-16">
        <CaseStudyHeader project={project} />

        {caseStudy ? (
          <>
            <Section
              id="overview"
              eyebrow="01 — Overview"
              title="The problem and what it required"
              description={caseStudy.context}
            >
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                <div>
                  <h3 className="text-lg">Problem statement</h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">{caseStudy.problem}</p>

                  <h3 className="mt-10 text-lg">Objectives</h3>
                  <ul className="mt-4 space-y-3">
                    {caseStudy.objectives.map((objective) => (
                      <li key={objective} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg">My contribution</h3>
                  <ol className="mt-4 grid gap-px overflow-hidden rounded-xl border border-line bg-line">
                    {caseStudy.contributions.map((contribution, index) => (
                      <li key={contribution} className="flex gap-4 bg-surface-raised p-5">
                        <span className="font-mono text-xs text-ink-subtle">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <p className="text-sm leading-relaxed text-ink-muted">{contribution}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Section>

            <Section
              id="approach"
              eyebrow="02 — Approach"
              title="Technical approach and architecture"
              description="How the work was carried out, and how the pipeline is put together."
            >
              <ol className="grid gap-4 sm:grid-cols-2">
                {caseStudy.approach.map((step, index) => (
                  <li key={step} className="flex gap-4 border-l-2 border-line pl-5">
                    <span className="font-mono text-xs text-ink-subtle">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm leading-relaxed text-ink-muted">{step}</p>
                  </li>
                ))}
              </ol>

              <h3 className="mt-14 text-lg">Architecture</h3>
              <div className="mt-6">
                <StageFlow stages={caseStudy.architecture} />
              </div>
            </Section>

            <Section
              id="stack"
              eyebrow="03 — Stack"
              title="Models, algorithms, and tools"
              description="Everything used, with the status of each item stated explicitly. Entries that cannot be disclosed say so instead of being guessed."
            >
              <ToolList tools={caseStudy.tools} />
            </Section>

            <Section
              id="evaluation"
              eyebrow="04 — Data and evaluation"
              title="Dataset and evaluation methodology"
              description="What the system was measured against, and how the measurement was produced."
            >
              <div className="surface-card p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-lg">{caseStudy.dataset.name}</h3>
                  <StatusBadge status={caseStudy.dataset.status} />
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">
                  {caseStudy.dataset.description}
                </p>
              </div>

              <h3 className="mt-12 text-lg">Evaluation methodology</h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {caseStudy.evaluation.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section
              id="results"
              eyebrow="05 — Results"
              title="Measured results and their qualifications"
              description="Every reported figure carries the condition it was measured under, and every figure that is still being verified is marked instead of being estimated."
            >
              <MetricTable metrics={project.metrics} caption={`Measured results for ${project.title}`} />

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-muted">
                A figure is only useful together with its qualification. The rows above separate what
                was measured and documented from what is still pending verification, so the distinction
                survives a quick read of this page.
              </p>
            </Section>

            <Section
              id="challenges"
              eyebrow="06 — Engineering decisions"
              title="Challenges and how they were handled"
              description="The parts of the work where the engineering judgement was the actual contribution."
            >
              <div className="grid gap-6">
                {caseStudy.challenges.map((item, index) => (
                  <div key={item.challenge} className="surface-card p-6 sm:p-7">
                    <p className="eyebrow">Challenge {String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-3 max-w-3xl text-lg leading-relaxed">{item.challenge}</h3>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted">
                      <span className="font-medium text-ink">Decision: </span>
                      {item.decision}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="limitations"
              eyebrow="07 — Limitations"
              title="What this case study does not claim"
              description="Stating the boundary of a result is part of the result."
            >
              <ul className="grid gap-4 sm:grid-cols-2">
                {caseStudy.limitations.map((limitation) => (
                  <li
                    key={limitation}
                    className="border-l-2 border-line-strong pl-5 text-sm leading-relaxed text-ink-muted"
                  >
                    {limitation}
                  </li>
                ))}
              </ul>

              {caseStudy.disclosure ? (
                <div className="mt-10 rounded-xl border border-line bg-surface p-6">
                  <p className="eyebrow">Disclosure</p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">
                    {caseStudy.disclosure}
                  </p>
                </div>
              ) : null}
            </Section>

            <Section
              id="evidence"
              eyebrow="08 — Evidence"
              title="Visual evidence"
              description="Approved screenshots and figures."
            >
              <EvidenceGrid evidence={caseStudy.evidence} />

            </Section>
          </>
        ) : (
          <Section
            id="summary"
            eyebrow="Case study"
            title="Case study in preparation"
            description="The full case study for this project has not been written yet."
          >
            <p className="max-w-3xl text-sm leading-relaxed text-ink-muted">{project.summary}</p>
          </Section>
        )}

        <Section
          id="related"
          eyebrow="Related"
          title="Other projects"
          description="Two more case studies from the same body of work."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {relatedProjects.map((related) => (
              <ProjectCard key={related.slug} project={related} />
            ))}
          </div>

          <Link
            to="/projects"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">
              ←
            </span>
            Back to all projects
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Section>
      </article>
    </Container>
  )
}
