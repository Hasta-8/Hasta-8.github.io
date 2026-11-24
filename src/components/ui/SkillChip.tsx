import type { SkillItem } from '../../types'
import Chip from './Chip'

interface SkillChipProps {
  skill: SkillItem
}

export default function SkillChip({ skill }: SkillChipProps) {
  return <Chip variant="accent">{skill.name}</Chip>
}
