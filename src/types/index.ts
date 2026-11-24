export interface ExternalLink {
  label: string
  href: string
  /** Not published yet (e.g. a video still to be uploaded): shown as "coming soon", not linked. */
  pending?: boolean
}

export interface ProfileLink {
  id: string
  label: string
  href: string
  available: boolean
}

export interface FocusArea {
  label: string
  value: string
}

export interface ProjectMetric {
  label: string
  value: string
  note?: string
  status?: 'reported' | 'pending'
}

export type ProjectReviewStatus = 'draft' | 'reviewed'

export interface Project {
  slug: string
  title: string
  summary: string
  category: 'professional' | 'personal'
  status: ProjectReviewStatus
  tags: string[]
  metrics: ProjectMetric[]
  links: ExternalLink[]
  image?: string
  caseStudy?: ProjectCaseStudy
}

export type VerificationStatus = 'verified' | 'pending' | 'not_disclosed'

export interface ArchitectureStage {
  title: string
  description: string
  status: VerificationStatus
}

export interface ToolItem {
  name: string
  role: string
  status: VerificationStatus
}

export interface DatasetInfo {
  name: string
  description: string
  status: VerificationStatus
}

export interface ChallengeItem {
  challenge: string
  decision: string
}

export interface EvidenceItem {
  id: string
  title: string
  description: string
  image?: string
  alt?: string
  status: 'approved' | 'placeholder'
}

export interface ProjectCaseStudy {
  context: string
  problem: string
  objectives: string[]
  contributions: string[]
  approach: string[]
  architecture: ArchitectureStage[]
  tools: ToolItem[]
  dataset: DatasetInfo
  evaluation: string[]
  challenges: ChallengeItem[]
  limitations: string[]
  evidence: EvidenceItem[]
  disclosure?: string
}

export interface ExperienceEntry {
  id: string
  organization: string
  role: string
  location?: string
  period?: string
  bullets: string[]
  links: ExternalLink[]
}

export interface EducationEntry {
  id: string
  degree: string
  institution: string
  shortInstitution?: string
  location?: string
  period: string
  gpa?: string
  percentage?: string
}

export interface SkillItem {
  name: string
}

export interface SkillGroup {
  id: string
  title: string
  description: string
  featured: boolean
  skills: SkillItem[]
}
