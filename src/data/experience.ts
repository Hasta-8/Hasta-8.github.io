import type { ExperienceEntry } from '../types'

export const experiences: ExperienceEntry[] = [
  {
    id: 'mimd-lab',
    organization: 'MiMD Lab, IIT Delhi',
    role: 'AI/ML Engineer',
    location: 'IIT Delhi',
    period: 'February 2026 – Present',
    bullets: [
      'Developed computer vision pipelines for robotic microscopy and automated tissue localization.',
      'Worked on image acquisition, fisheye correction, ArUco-based perspective correction, and multi-image stitching.',
      'Developed tissue detection and localization algorithms using image processing, contour detection, and RANSAC-based geometric fitting.',
      'Integrated camera acquisition, Flask APIs, the Autoscope GUI, and Duet motor control to support automated scanning workflows.',
      'Set up the NVIDIA Jetson Orin Nano and worked with RF-DETR/PyTorch inference workflows for tissue detection.',
    ],
    links: [
      {
        label: 'View Robotic Microscopy Case Study',
        href: '/projects/robotic-microscopy',
      },
      {
        label: 'View CervicalAI Case Study',
        href: '/projects/cervicalai',
      },
    ],
  },
  {
    id: 'aimil-ltd',
    organization: 'Aimil Ltd.',
    role: 'AI Systems Analyst',
    period: 'December 2024 – October 2025',
    bullets: [
      'Developed LLM-powered sentiment analysis workflows to extract actionable insights from medical staff feedback.',
      'Built Python-based data processing and inference pipelines for clinical and operational feedback analysis.',
      'Collaborated with clinical stakeholders to translate domain requirements into machine-learning-driven product features.',
    ],
    links: [],
  },
]
