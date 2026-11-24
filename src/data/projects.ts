import type { Project } from '../types'
import { caseStudies } from './case-studies'

export const projects: Project[] = [
  {
    slug: 'cervicalai',
    title: 'CervicalAI',
    summary:
      'Cervical cell detection and classification for microscopy imagery, evaluated on the cs-cervical-7a dataset.',
    category: 'professional',
    status: 'draft',
    tags: ['Object Detection', 'Classification', 'RF-DETR', 'Computer Vision'],
    metrics: [
      {
        label: 'mAP@50 on cs-cervical-7a',
        value: '87.33%',
        status: 'reported',
        note: 'RF-DETR. Internal verification was ongoing when this was documented; it is not a clinical validation.',
      },
      {
        label: 'Per-class mAP',
        value: 'Not published',
        status: 'pending',
        note: 'The class-level breakdown was still under internal verification.',
      },
      {
        label: 'Precision and recall at IoU 0.5',
        value: 'Not published',
        status: 'pending',
        note: 'Curves and operating thresholds were still under internal verification.',
      },
      {
        label: 'Classification stage accuracy',
        value: 'Not published',
        status: 'pending',
        note: 'Stage-level classification metrics were still under internal verification.',
      },
    ],
    links: [],
    caseStudy: caseStudies.cervicalai,
  },
  {
    slug: 'robotic-microscopy',
    title: 'Robotic Microscopy',
    summary:
      'Tissue localization, image stitching, coordinate calibration, and stage positioning for automated slide handling, with an edge AI workflow on constrained hardware.',
    category: 'professional',
    status: 'draft',
    tags: ['Image Stitching', 'Geometric Calibration', 'Stage Positioning', 'Edge AI'],
    metrics: [
      {
        label: 'Tissue localisation accuracy',
        value: 'Not published',
        status: 'pending',
        note: 'Stage-level metrics were still under internal verification.',
      },
      {
        label: 'Stitch seam quality',
        value: 'Not published',
        status: 'pending',
        note: 'The metric definition and its values were still under internal verification.',
      },
      {
        label: 'Image-to-stage calibration error',
        value: 'Not published',
        status: 'pending',
        note: 'Values were still under internal verification.',
      },
      {
        label: 'Edge inference latency',
        value: 'Not published',
        status: 'pending',
        note: 'Measured on unpublished hardware; the values are still under internal verification.',
      },
    ],
    links: [],
    caseStudy: caseStudies['robotic-microscopy'],
  },
  {
    slug: 'shelfscan',
    title: 'ShelfScan',
    summary:
      'Shelf object detection with side-by-side model comparison and measured inference performance.',
    category: 'personal',
    status: 'draft',
    tags: ['Object Detection', 'Model Comparison', 'Inference Benchmarking'],
    metrics: [
      {
        label: 'Detection accuracy on the held-out split',
        value: 'Not published',
        status: 'pending',
        note: 'Candidate models and measured values are pending confirmation.',
      },
      {
        label: 'Inference latency',
        value: 'Not published',
        status: 'pending',
        note: 'The measurement conditions are pending confirmation.',
      },
      {
        label: 'Model comparison outcome',
        value: 'Not published',
        status: 'pending',
        note: 'The comparison summary is pending re-verification.',
      },
    ],
    links: [],
    caseStudy: caseStudies.shelfscan,
  },
]

export const featuredProjects = projects.slice(0, 3)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(slug: string): Project[] {
  return projects.filter((project) => project.slug !== slug)
}
