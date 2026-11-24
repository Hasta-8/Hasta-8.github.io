import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Model development, evaluation, and honest reporting of results.',
    featured: true,
    skills: [
      { name: 'Deep learning' },
      { name: 'Model evaluation' },
      { name: 'Fine-tuning' },
      { name: 'Retrieval-augmented generation' },
      { name: 'Embeddings and vector search' },
    ],
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
      { name: 'Zero-shot classification' },
      { name: 'Image retrieval' },
    ],
  },
  {
    id: 'python-data',
    title: 'Python & Data Processing',
    description: 'Python-based processing, inference, and data pipelines for applied ML work.',
    featured: true,
    skills: [{ name: 'Python' }, { name: 'Data pipelines' }, { name: 'Automated testing' }],
  },
  {
    id: 'deployment',
    title: 'Deployment & Edge AI',
    description:
      'Serving models as tested APIs, packaging them, and measuring inference performance, from laptop CPUs to edge hardware.',
    featured: true,
    skills: [
      { name: 'Edge AI deployment' },
      { name: 'Inference benchmarking' },
      { name: 'REST APIs' },
      { name: 'Docker' },
      { name: 'CI with GitHub Actions' },
    ],
  },
  {
    id: 'tools',
    title: 'Frameworks & Tools',
    description: 'Libraries and tooling used across the documented project and professional work.',
    featured: false,
    skills: [
      { name: 'PyTorch' },
      { name: 'OpenCV' },
      { name: 'Hugging Face Transformers' },
      { name: 'Ultralytics YOLOv8' },
      { name: 'FastAPI' },
      { name: 'Flask' },
      { name: 'RF-DETR' },
      { name: 'FAISS' },
      { name: 'LangGraph' },
      { name: 'llama.cpp' },
      { name: 'React and TypeScript' },
      { name: 'Linux' },
      { name: 'Git' },
    ],
  },
]

export const featuredSkillGroups = skillGroups.filter((group) => group.featured)
