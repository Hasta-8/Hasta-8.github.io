import type { ProjectCaseStudy } from '../../types'
import { cervicalAiCaseStudy } from './cervicalai'
import { garmentCaseStudy } from './garment'
import { gloveCaseStudy } from './glove'
import { imgSimiSearchCaseStudy } from './imgsimisearch'
import { productionRagCaseStudy } from './production-rag'
import { roboticMicroscopyCaseStudy } from './robotic-microscopy'
import { shelfScanCaseStudy } from './shelfscan'

export const caseStudies: Record<string, ProjectCaseStudy> = {
  'production-rag': productionRagCaseStudy,
  shelfscan: shelfScanCaseStudy,
  cervicalai: cervicalAiCaseStudy,
  'robotic-microscopy': roboticMicroscopyCaseStudy,
  imgsimisearch: imgSimiSearchCaseStudy,
  garment: garmentCaseStudy,
  glove: gloveCaseStudy,
}
