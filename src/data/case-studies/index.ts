import type { ProjectCaseStudy } from '../../types'
import { cervicalAiCaseStudy } from './cervicalai'
import { roboticMicroscopyCaseStudy } from './robotic-microscopy'
import { shelfScanCaseStudy } from './shelfscan'

export const caseStudies: Record<string, ProjectCaseStudy> = {
  cervicalai: cervicalAiCaseStudy,
  'robotic-microscopy': roboticMicroscopyCaseStudy,
  shelfscan: shelfScanCaseStudy,
}
