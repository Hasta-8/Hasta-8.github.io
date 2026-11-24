import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Model development, evaluation, and honest reporting of results.',
    featured: true,
    skills: [{ name: 'Deep learning' }, { name: 'Model evaluation' }],
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Detection, classification, and image geometry on real imagery.',
    featured: true,
    skills: [
      { name: 'Object detection' },
      { name: 'Image classification' },
      { name: 'Image stitching' },
      { name: 'Coordinate calibration' },
    ],
  },
  {
    id: 'python-data',
    title: 'Python & Data Processing',
    description: 'Python-based processing, inference, and data pipelines for applied ML work.',
    featured: true,
    skills: [{ name: 'Python' }, { name: 'Data pipelines' }],
  },
  {
    id: 'deployment',
    title: 'Deployment & Edge AI',
    description: 'Bringing models to constrained hardware and measuring inference performance.',
    featured: true,
    skills: [{ name: 'Edge AI deployment' }, { name: 'Inference benchmarking' }],
  },
  {
    id: 'tools',
    title: 'Frameworks & Tools',
    description: 'Libraries and tooling used across the documented project and professional work.',
    featured: false,
    skills: [
      { name: 'PyTorch' },
      { name: 'OpenCV' },
      { name: 'Flask' },
      { name: 'RF-DETR' },
      { name: 'Linux' },
      { name: 'Git' },
    ],
  },
]

export const featuredSkillGroups = skillGroups.filter((group) => group.featured)
