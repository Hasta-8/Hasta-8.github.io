import { ArrowRight, ArrowUpRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import { education } from '../data/education'
import { experiences } from '../data/experience'
import { resume } from '../data/profile'

const focusAreas = [
  {
    title: 'Computer Vision & Image Processing',
    description:
      'Developing image-processing pipelines for image enhancement, geometric calibration, feature detection, object localization, and automated visual inspection.',
  },
  {
    title: 'Applied Machine Learning',
    description:
      'Working with object detection, model training and evaluation, data augmentation, and performance analysis, with an emphasis on understanding where models succeed and where they fail.',
  },
  {
    title: 'Medical Imaging & Scientific Applications',
    description:
      'Applying computer vision techniques to microscopy and cervical cytology, where image quality, accurate localization, and reliable analysis are important.',
  },
  {
    title: 'Edge AI & System Integration',
    description:
      'Bringing algorithms closer to real-world applications through Python, OpenCV, Linux-based systems, cameras, and hardware-integrated workflows.',
  },
]

const selectedWork = [
  {
    slug: 'robotic-microscopy',
    title: 'Robotic Microscopy',
    category: 'Professional work',
    description:
      'Worked on image acquisition, camera calibration, tissue localization, and automated scanning workflows for a robotic microscopy system.',
  },
  {
    slug: 'cervicalai',
    title: 'CervicalAI',
    category: 'Professional work',
    description:
      'Worked on computer vision for cervical cytology, including cell detection, data augmentation, and model evaluation.',
  },
  {
    slug: 'shelfscan',
    title: 'ShelfScan',
    category: 'Personal project',
    description:
      'A computer vision project focused on visual analysis in a retail or shelf-monitoring context.',
  },
]

const sectionLinks = [
  { id: 'focus', label: 'What I work on' },
  { id: 'approach', label: 'Engineering approach' },
  { id: 'work', label: 'Selected work' },
  { id: 'next', label: "What's next" },
]

const currentRole = experiences[0]
const highestEducation = education[0]

export default function About() {
  return (
    <div>
      <section aria-labelledby="about-heading">
        <Container size="lg" className="py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16">
            <div>
              <p className="eyebrow">About me</p>
              <h1
                id="about-heading"
                className="mt-5 max-w-3xl text-4xl leading-[1.05] sm:text-5xl"
              >
                Building AI systems that solve real-world problems.
              </h1>

              <div className="mt-8 max-w-2xl space-y-5 text-ink-muted sm:text-lg">
                <p>
                  I&apos;m an AI/ML Engineer with a Master&apos;s degree in Computer Science,
                  interested in building intelligent systems that connect machine learning with
                  practical engineering.
                </p>
                <p>
                  My work focuses on computer vision, medical image analysis, and applied AI. I enjoy
                  working across the problem-solving process, from understanding the underlying
                  problem and developing algorithms to evaluating results, improving reliability, and
                  integrating solutions with real-world systems.
                </p>
              </div>

              {resume.available ? (
                <a
                  href={resume.href}
                  download
                  className="mt-8 inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface"
                >
                  Download Resume
                  <Download className="size-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <nav aria-label="On this page" className="hidden lg:block">
                <p className="eyebrow">On this page</p>
                <ol className="mt-5 space-y-3 border-l border-line">
                  {sectionLinks.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex items-baseline gap-3 pl-4 text-sm text-ink-muted transition-colors hover:text-ink"
                      >
                        <span className="font-mono text-[0.65rem] tracking-[0.14em] text-ink-subtle">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="grid grid-cols-2 gap-6 border-t border-line pt-5 lg:mt-8 lg:block">
                {currentRole ? (
                  <div>
                    <p className="eyebrow">Currently</p>
                    <p className="mt-2 text-sm text-ink-muted">
                      {currentRole.role}
                      <span className="mt-0.5 block text-ink-subtle">
                        {currentRole.organization}
                      </span>
                    </p>
                  </div>
                ) : null}

                {highestEducation ? (
                  <div className="lg:mt-6 lg:border-t lg:border-line lg:pt-5">
                    <p className="eyebrow">Education</p>
                    <p className="mt-2 text-sm text-ink-muted">
                      {highestEducation.degree}
                      <span className="mt-0.5 block text-ink-subtle">
                        {highestEducation.shortInstitution ?? highestEducation.institution}
                        {highestEducation.period ? ` · ${highestEducation.period}` : ''}
                      </span>
                    </p>
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section
        id="focus"
        aria-labelledby="focus-heading"
        className="scroll-mt-24 border-t border-line py-14 sm:py-20"
      >
        <Container size="lg">
          <p className="eyebrow">01 — Focus</p>
          <h2 id="focus-heading" className="mt-4 text-2xl sm:text-3xl">
            What I work on
          </h2>

          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <article key={area.title} className="border-t border-line pt-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[0.65rem] tracking-[0.14em] text-ink-subtle">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg">{area.title}</h3>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
                  {area.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 max-w-2xl border-t border-line pt-5">
            <p className="eyebrow">Working toolkit</p>
            <p className="mt-2 text-sm text-ink-muted">
              Python · PyTorch · OpenCV · FastAPI · Docker · Linux · Git · edge deployment
            </p>
          </div>
        </Container>
      </section>

      <section
        id="approach"
        aria-labelledby="approach-heading"
        className="scroll-mt-24 border-t border-line py-14 sm:py-20"
      >
        <Container size="lg">
          <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="eyebrow">02 — Approach</p>
            </div>

            <div>
              <h2
                id="approach-heading"
                className="max-w-2xl text-3xl leading-tight sm:text-4xl"
              >
                Beyond getting a model to work.
              </h2>

              <div className="mt-8 max-w-2xl border-l-2 border-accent pl-6 sm:pl-8">
                <p className="text-lg leading-relaxed text-ink sm:text-xl">
                  I believe good engineering goes beyond getting a model to work on a few examples.
                </p>
              </div>

              <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted">
                I focus on understanding the problem first, choosing an appropriate approach,
                designing experiments, and measuring performance against clearly defined
                requirements. I value reproducibility, robust implementations, and solutions whose
                limitations are understood rather than hidden behind a single performance score.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="work"
        aria-labelledby="work-heading"
        className="scroll-mt-24 border-t border-line py-14 sm:py-20"
      >
        <Container size="lg">
          <p className="eyebrow">03 — Selected work</p>
          <h2 id="work-heading" className="mt-4 max-w-2xl text-2xl sm:text-3xl">
            Turning ideas into working systems.
          </h2>
          <p className="mt-5 max-w-2xl text-ink-muted">
            My projects reflect my interest in applying computer vision and machine learning to
            practical engineering challenges.
          </p>

          <ul className="mt-10 border-y border-line">
            {selectedWork.map((item, index) => (
              <li key={item.slug} className="border-b border-line last:border-b-0">
                <Link
                  to={`/projects/${item.slug}`}
                  className="group grid grid-cols-[2rem_minmax(0,1fr)_auto] items-start gap-4 py-6 sm:grid-cols-[3rem_minmax(0,1fr)_auto]"
                >
                  <span className="pt-1 font-mono text-[0.65rem] tracking-[0.14em] text-ink-subtle">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span>
                    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent-strong">
                        {item.title}
                      </span>
                      <span className="font-mono text-[0.65rem] tracking-[0.14em] text-ink-subtle uppercase">
                        {item.category}
                      </span>
                    </span>
                    <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </span>
                  </span>

                  <ArrowUpRight
                    className="mt-1 size-5 text-ink-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Read the {item.title} case study</span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-6">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              All case studies
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </p>
        </Container>
      </section>

      <section
        id="next"
        aria-labelledby="next-heading"
        className="scroll-mt-24 border-t border-line py-14 sm:py-20"
      >
        <Container size="lg">
          <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="eyebrow">04 — What&apos;s next</p>
            </div>

            <div>
              <h2 id="next-heading" className="max-w-2xl text-2xl sm:text-3xl">
                Interested in what comes after the prototype.
              </h2>

              <div className="mt-6 max-w-2xl space-y-5 text-ink-muted sm:text-lg">
                <p>
                  I&apos;m interested in opportunities where computer vision, machine learning, and
                  software engineering come together. I want to continue building systems that are
                  not only technically sound but also measurable, reliable, and useful outside a
                  development environment.
                </p>
                <p>
                  I&apos;m particularly interested in applied AI, computer vision engineering, and
                  ML systems that bridge experimentation and deployment.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
                >
                  Start a conversation
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface"
                >
                  View case studies
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
