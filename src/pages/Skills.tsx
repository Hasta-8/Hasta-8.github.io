import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import SkillChip from '../components/ui/SkillChip'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <Container size="lg">
      <div className="py-14 sm:py-20">
        <PageHeader
          eyebrow="Skills"
          title="Technical toolkit"
          description="Grouped by area of practice. Every listed capability is supported by documented project or professional work."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <section key={group.id} className="surface-card p-6 sm:p-7">
              <h2 className="text-lg">{group.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{group.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <SkillChip skill={skill} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </Container>
  )
}
