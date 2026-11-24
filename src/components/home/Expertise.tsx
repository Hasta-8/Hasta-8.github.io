import Section from '../ui/Section'
import SkillChip from '../ui/SkillChip'
import { featuredSkillGroups } from '../../data/skills'

export default function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Technical expertise"
      title="The stack behind the work"
      description="Grouped by area of practice, with every listed capability backed by documented project or professional work."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {featuredSkillGroups.map((group) => (
          <article key={group.id} className="surface-card p-6 sm:p-7">
            <h3 className="text-lg">{group.title}</h3>
            <p className="mt-2 text-sm text-ink-muted">{group.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <SkillChip skill={skill} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
