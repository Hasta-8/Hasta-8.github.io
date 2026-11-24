import type { ProjectCaseStudy } from '../../types'

export const gloveCaseStudy: ProjectCaseStudy = {
  context: 'Personal project. Code, the trained model, evaluation scripts and a live demo are public.',
  problem:
    'Glove compliance checks need a detector that finds hands in factory camera images and says whether each is gloved. I fine-tuned YOLOv8s for this in January 2026 and its validation scores looked strong (mAP50 0.85). The follow-up question was whether those scores describe new scenes, and what kinds of mistakes the model makes.',
  objectives: [
    'Make the model available and verifiable: published weights with a checksum and one supported version.',
    'Check the validation set for leakage from training, and report metrics without it.',
    'Break errors down by class and hand size.',
    'Wrap the CLI in a validated API and a demo that shows failures as well as successes.',
  ],
  contributions: [
    'Fine-tuned YOLOv8s (50 epochs, 640 px) on an industrial PPE dataset filtered to gloved and bare hands.',
    'Found that 52% of validation images are near-copies of training frames (same CCTV cameras, moments apart) with a perceptual-hash check, and re-measured without them.',
    'Showed that passing the image array straight to the model matches the CLI on all 882 validation images, while the old temporary-file step changed the boxes on 83% of them.',
    'Published the model as a release with its SHA-256 and built a FastAPI service, tests, Docker and a demo.',
  ],
  approach: [
    'YOLOv8s pretrained on COCO, fine-tuned 50 epochs at 640×640, batch 16, on two classes: gloved_hand and bare_hand.',
    'Re-ran the training-time validation on CPU to confirm the numbers reproduce (within 0.002).',
    'Leakage check: a difference hash per image; validation images within 6 bits of any training image were set aside, a threshold fixed before running and checked by eye.',
    'Error analysis: each annotated hand counted as found, found with the wrong class, or missed, by size.',
  ],
  architecture: [
    { title: 'Input', description: 'CLI over a folder of images, or an API upload validated from its bytes.', status: 'verified' },
    { title: 'YOLOv8s detector', description: 'Letterboxed to 640×640; two classes; confidence 0.25.', status: 'verified' },
    { title: 'Output', description: 'Annotated image (green gloved, red bare) and JSON with labels, confidences and boxes.', status: 'verified' },
  ],
  tools: [
    { name: 'Ultralytics YOLOv8', role: 'Training and inference', status: 'verified' },
    { name: 'OpenCV, NumPy', role: 'Image handling, perceptual hashing', status: 'verified' },
    { name: 'FastAPI', role: 'Detection API with upload validation', status: 'verified' },
    { name: 'uv, pytest, ruff, GitHub Actions, Docker', role: 'Environment, tests, CI, packaging', status: 'verified' },
  ],
  dataset: {
    name: 'Industrial PPE dataset (Roboflow Universe), filtered to hand classes',
    description:
      '6,984 training and 882 validation images, mostly overhead factory CCTV frames. The source test split has no glove labels, so the validation split also chose the best epoch. The dataset isn’t redistributed; only aggregate numbers are published.',
    status: 'verified',
  },
  evaluation: [
    'All 882 validation images: precision 0.855, recall 0.806, mAP50 0.846, mAP50-95 0.419.',
    'Without near-copies of training frames (422 images): mAP50 0.700; bare-hand recall 0.51.',
    'Errors are misses, not confusions: only 7 of 2,532 hands were found with the wrong class. Large hands are found about 95% of the time, small ones 6–25%.',
    'On eight ordinary work photos from outside the training data (close-ups, outdoors), no hand was detected correctly.',
    'About 0.15 s per image on a laptop CPU once warm.',
  ],
  challenges: [
    {
      challenge: 'High validation scores hid heavy leakage between training and validation frames.',
      decision: 'Measured it, set those images aside, and made the leakage-free numbers the headline.',
    },
    {
      challenge: 'A clone of the repository had no model (weights were git-ignored).',
      decision: 'Published the model as a release asset with a download script that verifies its SHA-256.',
    },
  ],
  limitations: [
    'On unseen scenes, about half of bare hands are missed.',
    'Works only on views like its training data (overhead factory cameras); ordinary photos fail.',
    'Single images only: no video tracking or compliance-over-time logic.',
    'No separate test set.',
  ],
  evidence: [
    {
      id: 'glove-demo',
      title: 'A failure, shown as one',
      description:
        'On this outdoor photo the "gloved hand" boxes land on ear defenders and the gloved hands are missed: the domain-shift failure the evaluation describes. Photo: Hk6rsf, public domain, Wikimedia Commons.',
      image: '/images/glove/demo.jpg',
      alt: 'Glove detection demo: a jackhammer worker with boxes wrongly placed on ear defenders and a tool pouch',
      status: 'approved',
    },
  ],
  disclosure:
    'Personal work with no employer material. The model and Ultralytics are AGPL-3.0; the dataset is not redistributed.',
}
