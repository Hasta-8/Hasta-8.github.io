import type { ProjectCaseStudy } from '../../types'

export const garmentCaseStudy: ProjectCaseStudy = {
  context: 'Personal project. Code, evaluation scripts, results and a live demo are public.',
  problem:
    'Every item in an online clothing shop needs a description: is it a shirt or a dress, what colour, striped or plain, long or short sleeves, men’s or women’s section? Usually a person types this in by hand, thousands of times over. This project lets an AI model look at the product photo and fill in those details itself in a fraction of a second, without first being trained on the shop’s catalogue. Each answer comes with a confidence score, so a person only needs to double-check the uncertain ones, and every kind of answer is measured for how often it is actually right.',
  objectives: [
    'Return each attribute with a score and ranked alternatives, and say plainly that the scores are not probabilities.',
    'Cut the cost per request without changing the answers.',
    'Measure accuracy per attribute on held-out labelled photos.',
    'Decide when to trust an answer, using a threshold chosen on separate data.',
  ],
  contributions: [
    'Encoded every candidate prompt once at startup, so each request needs a single image pass.',
    'Built a FastAPI service with typed results, upload validation, health and readiness checks, tests in CI and Docker.',
    'Evaluated it on 2,115 held-out catalogue photos and on 100 photos labelled by hand for sleeve and pattern.',
    'Found and fixed a prompt bug that made the gender-section answer "unisex" for almost every garment.',
  ],
  approach: [
    'Fashion-CLIP (a CLIP model fine-tuned on fashion products) embeds the photo once; similarities with the pre-encoded prompts are softmaxed per attribute.',
    'Five attributes: 20 categories, 20 colours, 20 patterns, 4 sleeve types and 3 catalogue sections.',
    'The label mappings, the sample and the decision rules were written down before the evaluation ran.',
    'Prompt rewording was tested on one half of the data and adopted only if it helped on the other half.',
  ],
  architecture: [
    { title: 'Upload validation', description: 'Format sniffed from the bytes, size and pixel limits, corrupt-file handling.', status: 'verified' },
    { title: 'Image embedding', description: 'One Fashion-CLIP forward pass, pinned model revision.', status: 'verified' },
    { title: 'Zero-shot scoring', description: 'Cosine similarity against prompts encoded at startup; softmax per attribute.', status: 'verified' },
    { title: 'Response', description: 'Label, score and top-3 alternatives per attribute, plus a template-built title.', status: 'verified' },
  ],
  diagrams: [
    {
      src: '/images/garment/architecture.svg',
      alt: 'Flowchart: garment photo, upload checks, Fashion-CLIP image embedding compared by cosine similarity with prompt embeddings encoded once at startup, per-attribute softmax to label, score and top 3, then a templated title and description',
      caption: 'Zero-shot attribute pipeline: one image pass per request; the prompts are encoded once.',
      width: 1285,
    },
  ],
  tools: [
    { name: 'Fashion-CLIP (Transformers, PyTorch)', role: 'Zero-shot attribute scoring, CPU-only', status: 'verified' },
    { name: 'FastAPI + Pydantic', role: 'Typed API and validation', status: 'verified' },
    { name: 'uv, pytest, ruff, GitHub Actions', role: 'Reproducible environment, tests, CI', status: 'verified' },
    { name: 'Docker', role: 'Container with the model mounted read-only', status: 'verified' },
  ],
  dataset: {
    name: 'Myntra catalogue photos (evaluation only) and 100 hand-labelled photos',
    description:
      '2,115 catalogue photos at 384×512 with the retailer’s own labels (up to 150 per category, 16 categories), split into halves for choosing and confirming; Fashion-CLIP never trained on them. Sleeve and pattern have no catalogue labels, so I labelled 100 photos by hand. Only metrics are published.',
    status: 'verified',
  },
  evaluation: [
    'Held-out accuracy: gender section 0.94, sleeve 0.83, category 0.74, colour 0.60, pattern 0.57.',
    'Gender section reaches 0.94 with reworded prompts; plain prompts scored 0.14 because the model answered "unisex" almost always. Rewording colour and category didn’t help, so they stayed.',
    'Keeping only category answers with a score of at least 0.88 answers 60% of photos at 89% accuracy; for colour and gender no threshold reaches 90%.',
    'About 60 ms per image on a laptop CPU.',
  ],
  challenges: [
    {
      challenge: 'Catalogue labels don’t line up with the candidate list (a retailer’s "sweatshirts" are often hoodies).',
      decision: 'Fixed the label mapping before running, excluded ambiguous labels, and explained the overlaps in the results.',
    },
    {
      challenge: 'Softmax scores look like probabilities but aren’t.',
      decision: 'Documented it in the API schema and UI, and measured what a score threshold actually buys.',
    },
  ],
  limitations: [
    'Pattern is weak beyond plain and checked; geometric prints are never recognised.',
    'Sleeve is predicted even for trousers and skirts, where it means nothing.',
    'Measured on catalogue photos; street photos or several garments in frame are harder.',
  ],
  evidence: [
    {
      id: 'garment-demo',
      title: 'Attributes with scores and alternatives',
      description:
        'The online demo: each attribute’s top label, its score and the runners-up. Photo: Robert Sheie, CC BY 2.0, Wikimedia Commons.',
      image: '/images/garment/demo.jpg',
      alt: 'Garment attribute demo showing a striped shirt with score bars for category, colour, pattern, sleeve and gender section',
      status: 'approved',
    },
  ],
  disclosure: 'Personal work with no employer material. Catalogue images are not redistributed; demo photos are openly licensed.',
}
