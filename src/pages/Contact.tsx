import {
  Clock,
  Download,
  ExternalLink,
  Laptop,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import { contactDetails, contactLinks, resume } from '../data/profile'

const inquiryItems = [
  { label: 'The problem', text: 'What are you trying to solve?' },
  { label: 'The data', text: 'What images, datasets, or other inputs are available?' },
  {
    label: 'The constraints',
    text: 'Hardware, latency, accuracy, or deployment requirements.',
  },
  { label: 'The desired outcome', text: 'What should the system achieve?' },
]

const emailLink = contactLinks.find((link) => link.id === 'email')
const emailAddress = emailLink?.href.replace(/^mailto:/, '')
const socialContactLinks = contactLinks.filter(
  (link) => link.id !== 'email' && link.available && link.href.length > 0,
)

export default function Contact() {
  return (
    <Container size="lg">
      <div className="py-14 sm:py-20">
        <PageHeader
          eyebrow="Contact"
          title="Let's build something useful."
          description="I'm open to applied AI/ML roles, research collaborations, and computer vision projects where algorithms need to work within real-world hardware constraints."
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <div>
            <p className="max-w-2xl text-ink-muted sm:text-lg">
              Whether you&apos;re building an intelligent vision system, exploring a research
              problem, or looking for an engineer who can bridge ML experimentation and practical
              deployment, I&apos;d be happy to hear from you.
            </p>

            <h2 className="mt-10 text-xl">Contact details</h2>

            <dl className="mt-4 divide-y divide-line border-y border-line">
              <div className="grid gap-2 py-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-baseline sm:gap-6">
                <dt className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.18em] text-ink-subtle uppercase">
                  <Mail className="size-3.5" aria-hidden="true" />
                  Email
                </dt>
                <dd>
                  {emailLink?.available && emailLink.href ? (
                    <a
                      href={emailLink.href}
                      className="break-all text-sm font-medium text-ink transition-colors hover:text-accent"
                    >
                      {emailAddress}
                    </a>
                  ) : (
                    <span className="text-sm text-ink-subtle">Email pending confirmation</span>
                  )}
                </dd>
              </div>

              <div className="grid gap-2 py-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-baseline sm:gap-6">
                <dt className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.18em] text-ink-subtle uppercase">
                  <Phone className="size-3.5" aria-hidden="true" />
                  {contactDetails.phone.label}
                </dt>
                <dd>
                  <a
                    href={contactDetails.phone.href}
                    className="text-sm font-medium text-ink transition-colors hover:text-accent"
                  >
                    {contactDetails.phone.value}
                  </a>
                </dd>
              </div>

              <div className="grid gap-2 py-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-baseline sm:gap-6">
                <dt className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.18em] text-ink-subtle uppercase">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  Location
                </dt>
                <dd className="text-sm text-ink-muted">{contactDetails.location}</dd>
              </div>

              <div className="grid gap-2 py-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-baseline sm:gap-6">
                <dt className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.18em] text-ink-subtle uppercase">
                  <Laptop className="size-3.5" aria-hidden="true" />
                  Work
                </dt>
                <dd className="text-sm text-ink-muted">{contactDetails.workArrangements}</dd>
              </div>

              <div className="grid gap-2 py-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-baseline sm:gap-6">
                <dt className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.18em] text-ink-subtle uppercase">
                  <Clock className="size-3.5" aria-hidden="true" />
                  Response
                </dt>
                <dd className="text-sm text-ink-muted">{contactDetails.responseExpectation}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="eyebrow">Elsewhere</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {socialContactLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
                    >
                      {link.label}
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {resume.available ? (
              <p className="mt-5">
                <a
                  href={resume.href}
                  download
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  Download Resume (PDF)
                  <Download className="size-4" aria-hidden="true" />
                </a>
              </p>
            ) : null}
          </div>

          <aside aria-labelledby="inquiry-heading" className="surface-card h-fit p-6 sm:p-7">
            <p className="eyebrow text-ink-muted">Project inquiry</p>
            <h2 id="inquiry-heading" className="mt-3 text-xl sm:text-2xl">
              Reaching out about a project?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              To help me understand what you&apos;re working on, it helps to include:
            </p>

            <ol className="mt-6 space-y-4">
              {inquiryItems.map((item, index) => (
                <li key={item.label} className="flex gap-3">
                  <span className="mt-0.5 font-mono text-[0.65rem] tracking-[0.14em] text-ink-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    <span className="font-medium text-ink">{item.label}:</span> {item.text}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-6 border-t border-line pt-4 text-sm leading-relaxed text-ink-muted">
              No formal brief needed. A few details about the problem are a great place to start.
            </p>
          </aside>
        </div>
      </div>
    </Container>
  )
}
