import type { ProjectCaseStudy } from '../../types'

export const shelfScanCaseStudy: ProjectCaseStudy = {
  context:
    'Personal project, developed independently of the professional engagements described elsewhere on this site. Code, evaluation scripts, results and a live demo are public.',
  problem:
    'Picture a supermarket shelf: a hundred or more boxes, bottles and packets squeezed side by side. Shops want to know what is on it, what has run out and how much space each brand gets, and often someone still counts by hand. ShelfScan takes one photo of a shelf, draws a box around every product it can see, and groups the ones that look the same, so twelve cans of the same soup end up in one pile. It also measures how many products it finds and how good its groups are, and openly shows the shelves where it still gets confused.',
  objectives: [
    'Measure detection quality on held-out data with a standard protocol (COCO AP, precision and recall).',
    'Measure grouping separately from detection, against hand-made labels of which products are the same.',
    'Tune thresholds only by rules written down before the results were seen.',
    'Ship it as a hardened API with tests, Docker, a demo and a visible failure gallery.',
  ],
  contributions: [
    'Made the environment reproducible (uv lock file, CPU-only PyTorch, pinned model revisions), verified to give bit-identical output.',
    'Rewrote the Flask prototype as a FastAPI service: typed responses, upload validation, startup model loading, health and readiness checks, deterministic output.',
    'Evaluated detection on 420 SKU-110K test images and grouping on 14 shelves I labelled with a purpose-built labelling tool.',
    'Built a demo page that explains each grouping decision (the most similar crops and their cosine similarity), a static online copy, Docker, and a failure gallery on openly licensed photos.',
  ],
  approach: [
    'Detection: a DETR ResNet-50 detector already fine-tuned on SKU-110K (400 object queries), confidence 0.8, IoU-based non-maximum suppression.',
    'Grouping: each detected box is cropped and embedded with DINOv2-small; crops are clustered by cosine similarity with average-linkage agglomerative clustering.',
    'Every experiment was registered with its success criteria before it ran, and failed predictions are reported as failed.',
    'Threshold changes follow a pre-set rule: choose on one half of the labelled images, adopt only if the other half improves by a fixed margin.',
  ],
  architecture: [
    {
      title: 'Upload validation',
      description:
        'Format checked from the bytes (JPEG, PNG, WebP), size and pixel limits, EXIF orientation applied, one error shape for every failure.',
      status: 'verified',
    },
    {
      title: 'Product detection',
      description: 'DETR ResNet-50 fine-tuned on SKU-110K, pinned to a fixed revision; NMS removes duplicate boxes.',
      status: 'verified',
    },
    {
      title: 'Crop embeddings',
      description: 'DINOv2-small CLS embedding per product crop, L2-normalised.',
      status: 'verified',
    },
    {
      title: 'Grouping',
      description:
        'Agglomerative clustering on cosine distance; crops join a group when their average similarity is at least 0.6.',
      status: 'verified',
    },
    {
      title: 'Response and demo',
      description:
        'JSON with boxes, groups and timings, an annotated image, and an optional "explain" mode that returns each crop’s nearest neighbours.',
      status: 'verified',
    },
  ],
  diagrams: [
    {
      src: '/images/shelfscan/architecture.svg',
      alt: 'Flowchart: shelf photo, upload checks, DETR detection with confidence threshold and NMS, DINOv2 crop embeddings, agglomerative clustering, then boxes, groups and annotated image; an optional explain mode returns nearest crops',
      caption: 'Detection and grouping pipeline.',
      width: 1326,
    },
  ],
  tools: [
    { name: 'PyTorch + Transformers', role: 'DETR detector and DINOv2 embedder, CPU-only', status: 'verified' },
    { name: 'scikit-learn', role: 'Agglomerative clustering', status: 'verified' },
    { name: 'FastAPI + Pydantic', role: 'Typed API, validation, OpenAPI docs', status: 'verified' },
    { name: 'pycocotools', role: 'COCO detection metrics', status: 'verified' },
    { name: 'uv, pytest, ruff, GitHub Actions', role: 'Reproducible environment, tests and CI', status: 'verified' },
    { name: 'Docker', role: 'Container with models mounted read-only', status: 'verified' },
  ],
  dataset: {
    name: 'SKU-110K (test split) and 14 hand-labelled shelves',
    description:
      'Detection: 420 SKU-110K test images with 61,461 annotated products, a split the detector never trained on. Grouping: 14 of those images (1,526 products) that I labelled by which products are identical. The dataset licence forbids redistribution, so only aggregate numbers are published; the demo uses openly licensed Wikimedia Commons photos.',
    status: 'verified',
  },
  evaluation: [
    'Detection (COCO protocol, up to 400 detections per image): AP 0.425, AP50 0.813. At the deployed threshold: precision 0.766, recall 0.837, F1 0.800. My prediction (AP 0.53–0.61, from the model card) failed and is reported as failed.',
    'Grouping: pairwise F1 0.25 at the default threshold, 0.32 at the adopted one (chosen on 7 images, confirmed on the other 7: 0.21 → 0.34). No threshold reaches much above 0.3.',
    'A detection threshold sweep over 70 settings found nothing that passed the pre-set rule, so the default detection settings stayed.',
    'Latency on a 4-core laptop CPU: detection about 3 s per image; grouping adds about 0.14 s per product (5–9 s for 30–45 products, 35–40 s for 250).',
  ],
  challenges: [
    {
      challenge: 'The detector’s published score (58.9 mAP) could not be reproduced.',
      decision:
        'Investigated (NMS ruled out, a pycocotools 100-detection cap found and worked around) and published only my own measured numbers.',
    },
    {
      challenge: 'Grouping quality had no ground truth.',
      decision: 'Built a labelling tool and labelled 14 shelves; scored with pairwise F1 and adjusted Rand index.',
    },
    {
      challenge: 'Grouping turned out weak.',
      decision:
        'Said so plainly in the README and demo, explained why (the embedding sees shape and colour, not label text), and showed it in a failure gallery.',
    },
  ],
  limitations: [
    'Grouping is visual similarity, not product identity: lookalike packs of different products share a group (pairwise F1 about 0.3).',
    'Price tags, transparent packaging, loose goods and steep camera angles fail (see the failure gallery).',
    'Latency grows with shelf density because every crop is embedded.',
    'Measured on SKU-110K shelves only; other stores and cameras may differ.',
  ],
  evidence: [
    {
      id: 'shelfscan-why',
      title: 'Why is it in this group?',
      description:
        'The demo explains each grouping decision: a selected honey jar’s nearest crops are other honey varieties at similarity 0.78–0.89, which is why different products share a group. Photo: culinary123, CC BY-SA 3.0, Wikimedia Commons.',
      image: '/images/shelfscan/why-this-group.jpg',
      alt: 'ShelfScan demo page with a honey jar selected and its most similar crops listed with similarity scores',
      status: 'approved',
    },
    {
      id: 'shelfscan-failure',
      title: 'Failure gallery',
      description:
        'Different products, even different brands, merged into one group: the kind of error the measured F1 describes. Photo: culinary123, CC BY-SA 3.0, Wikimedia Commons.',
      image: '/images/shelfscan/failure-merged-products.jpg',
      alt: 'Syrup and honey bottles boxed in group colours, with different products sharing a colour',
      status: 'approved',
    },
  ],
  disclosure:
    'Personal work with no employer material. SKU-110K images are not redistributed; screenshots use openly licensed Wikimedia Commons photos.',
}
