import type { FocusArea, ProfileLink } from '../types'

export const profile = {
  name: 'Debadri Chatterjee',
  role: 'AI/ML Engineer',
  headline: 'AI/ML Engineer specializing in Computer Vision and Applied AI',
  intro:
    'I build machine learning systems that work outside the notebook: training deep learning models for computer vision problems, evaluating them against real evidence, and deploying them as practical, monitored software.',
  focusAreas: [
    {
      label: 'Focus',
      value: 'Computer vision · Applied AI',
    },
    {
      label: 'Current role',
      value: 'AI/ML Engineer, MiMD Lab (IIT Delhi)',
    },
    {
      label: 'Methods',
      value: 'Deep learning · Object detection · Model evaluation',
    },
    {
      label: 'Deployment',
      value: 'Edge AI · Inference benchmarking',
    },
  ] satisfies FocusArea[],
}

/**
 * Public profile links. Placeholder entries keep `available: false` and an empty
 * `href` so no unverified URL is ever rendered or fabricated. Replace the
 * placeholder with the real URL and flip `available` to true.
 */
export const profileLinks: ProfileLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/Hasta-8', available: true },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/debadri-chatterjee/', available: true },
  { id: 'email', label: 'Email', href: 'mailto:debadrichatterjee1997@gmail.com', available: true },
]

export const socialLinks = profileLinks.filter((link) => link.id !== 'email')
export const contactLinks = profileLinks

/**
 * Additional contact details shown on the Contact page. Keeping these separate
 * from `profileLinks` avoids publishing a phone number in the footer or CTA.
 */
export const contactDetails = {
  phone: {
    label: 'Phone',
    value: '+91 9038914297',
    href: 'tel:+919038914297',
  },
  location: 'New Delhi, India',
  workArrangements: 'Open to remote, hybrid, onsite, and relocation opportunities.',
  responseExpectation: 'I aim to respond as soon as possible.',
}

export const resume = {
  href: '/resume.pdf',
  available: __HAS_RESUME__,
}

export function getAvailableLinks(links: ProfileLink[]): ProfileLink[] {
  return links.filter((link) => link.available && link.href.length > 0)
}
