import type { Project } from '../types'
import { caseStudies } from './case-studies'

export const projects: Project[] = [
  {
    slug: 'production-rag',
    title: 'Production RAG',
    summary:
      'Cited question answering over 28 AI/ML papers, running entirely on a laptop CPU: hybrid retrieval, reranking and an agent that declines rather than guesses.',
    category: 'personal',
    status: 'reviewed',
    tags: ['RAG', 'Hybrid Retrieval', 'LangGraph', 'FastAPI', 'Local LLM'],
    image: '/images/production-rag/answer-trace.jpg',
    metrics: [
      {
        label: 'Trap questions declined (held-out)',
        value: '12 / 12',
        status: 'reported',
        note: 'Questions about models the corpus does not cover. 27 of 30 golden questions answered, every answer citing an evidence page.',
      },
      {
        label: 'Evidence page in the top 3',
        value: '73% → 97%',
        status: 'reported',
        note: 'Dense retrieval versus hybrid retrieval with reranking, golden set.',
      },
      {
        label: 'Latency on a 4-core laptop CPU',
        value: '~2 s retrieval, 35–65 s answer',
        status: 'reported',
      },
    ],
    links: [
      { label: 'GitHub repository', href: 'https://github.com/Hasta-8/production-rag' },
      { label: 'Walkthrough video (3 min)', href: 'https://youtu.be/VBb8cBV-7U4' },
    ],
    caseStudy: caseStudies['production-rag'],
  },
  {
    slug: 'shelfscan',
    title: 'ShelfScan',
    summary:
      'Detects every product on a retail shelf photo and groups the lookalikes, with detection and grouping measured separately and the failures shown.',
    category: 'personal',
    status: 'reviewed',
    tags: ['Object Detection', 'DETR', 'DINOv2', 'Clustering', 'FastAPI'],
    image: '/images/shelfscan/why-this-group.jpg',
    metrics: [
      {
        label: 'Detection F1 (SKU-110K test, 420 images)',
        value: '0.80',
        status: 'reported',
        note: 'Precision 0.77, recall 0.84 at the deployed threshold; COCO AP50 0.81.',
      },
      {
        label: 'Grouping pairwise F1 (14 hand-labelled shelves)',
        value: '0.32',
        status: 'reported',
        note: 'Weak, and stated as such: lookalike packs of different products share a group.',
      },
    ],
    links: [
      { label: 'GitHub repository', href: 'https://github.com/Hasta-8/ShelfScan' },
      { label: 'Live demo', href: 'https://hasta-8.github.io/ShelfScan/' },
      { label: 'Walkthrough video (90 s)', href: 'https://youtu.be/tzosflpDz_M' },
      { label: 'Failure gallery', href: 'https://github.com/Hasta-8/ShelfScan/blob/main/docs/failures.md' },
    ],
    caseStudy: caseStudies.shelfscan,
  },
  {
    slug: 'cervicalai',
    title: 'CervicalAI',
    summary:
      'AI that helps screen Pap smears for cervical cancer: it finds every cell under the microscope, flags the suspicious ones and measures how large each nucleus is against its cell.',
    category: 'professional',
    status: 'draft',
    tags: ['Object Detection', 'Segmentation', 'RF-DETR', 'Medical Imaging'],
    image: '/images/cervicalai/cover.jpg',
    metrics: [
      {
        label: 'Cell detection mAP@50 on cs-cervical-7a',
        value: '87.33%',
        status: 'reported',
        note: 'RF-DETR, held-out test split. A detection result on the team’s dataset, not a clinical validation.',
      },
    ],
    links: [],
    caseStudy: caseStudies.cervicalai,
  },
  {
    slug: 'robotic-microscopy',
    title: 'Robotic Microscopy',
    summary:
      'A preview camera that glances at the whole slide first, finds the tissue, works out where it is in millimetres and sends the robotic microscope straight there.',
    category: 'professional',
    status: 'draft',
    tags: ['Computer Vision', 'Camera Calibration', 'OpenCV', 'Robotics'],
    image: '/images/microscopy/cover.jpg',
    metrics: [],
    links: [],
    caseStudy: caseStudies['robotic-microscopy'],
  },
  {
    slug: 'imgsimisearch',
    title: 'Image Similarity Search',
    summary:
      'Search a photo collection by image with CLIP and FAISS, with versioned index releases, fail-closed startup checks and a public-benchmark evaluation.',
    category: 'personal',
    status: 'reviewed',
    tags: ['CLIP', 'FAISS', 'Vector Search', 'FastAPI', 'React'],
    image: '/images/imgsimisearch/search.jpg',
    metrics: [
      {
        label: 'mAP on INRIA Holidays (500 queries)',
        value: '0.844',
        status: 'reported',
        note: 'Official scorer; INRIA’s own 2008 system scores 0.746. Median search latency about 270 ms on a laptop CPU.',
      },
    ],
    links: [
      { label: 'GitHub repository', href: 'https://github.com/Hasta-8/Image_Similarity_Search' },
      { label: 'Walkthrough video (2 min)', href: 'https://youtu.be/lahenfW94s4' },
    ],
    caseStudy: caseStudies.imgsimisearch,
  },
  {
    slug: 'garment',
    title: 'Garment Attributes',
    summary:
      'Zero-shot catalogue attributes (category, colour, pattern, sleeve, section) from a garment photo with Fashion-CLIP, measured on held-out photos.',
    category: 'personal',
    status: 'reviewed',
    tags: ['Fashion-CLIP', 'Zero-shot', 'FastAPI', 'Evaluation'],
    image: '/images/garment/demo.jpg',
    metrics: [
      {
        label: 'Held-out accuracy',
        value: 'Category 0.74 · Sleeve 0.83',
        status: 'reported',
        note: 'Gender section 0.94 after a prompt fix (0.14 before); colour 0.60; pattern 0.57.',
      },
    ],
    links: [
      { label: 'GitHub repository', href: 'https://github.com/Hasta-8/Garment_Detection_Project' },
      { label: 'Live demo', href: 'https://hasta-8.github.io/Garment_Detection_Project/' },
      { label: 'Walkthrough video (65 s)', href: 'https://github.com/Hasta-8/Garment_Detection_Project/releases/tag/v0.2.0' },
    ],
    caseStudy: caseStudies.garment,
  },
  {
    slug: 'glove',
    title: 'Glove Detection',
    summary:
      'A YOLOv8s detector for gloved and bare hands in factory images, re-evaluated after finding that half its validation set leaked from training.',
    category: 'personal',
    status: 'reviewed',
    tags: ['YOLOv8', 'Fine-tuning', 'Data Leakage', 'Error Analysis'],
    image: '/images/glove/demo.jpg',
    metrics: [
      {
        label: 'mAP50 on validation images unlike any training frame',
        value: '0.70',
        status: 'reported',
        note: '0.85 on the full validation set, of which 52% are near-copies of training frames. Bare-hand recall 0.51.',
      },
    ],
    links: [
      { label: 'GitHub repository', href: 'https://github.com/Hasta-8/glove-detection-yolov8' },
      { label: 'Live demo', href: 'https://hasta-8.github.io/glove-detection-yolov8/' },
      { label: 'Walkthrough video (62 s)', href: 'https://github.com/Hasta-8/glove-detection-yolov8/releases/tag/v0.2.0' },
      { label: 'Trained model (release)', href: 'https://github.com/Hasta-8/glove-detection-yolov8/releases/tag/model-v1' },
    ],
    caseStudy: caseStudies.glove,
  },
]

const featuredSlugs = ['production-rag', 'shelfscan', 'cervicalai', 'robotic-microscopy']

export const featuredProjects = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => project !== undefined)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(slug: string): Project[] {
  return projects.filter((project) => project.slug !== slug)
}
