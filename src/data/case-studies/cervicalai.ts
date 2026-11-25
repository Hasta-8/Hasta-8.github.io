import type { ProjectCaseStudy } from '../../types'

export const cervicalAiCaseStudy: ProjectCaseStudy = {
  context:
    'Ongoing team project at MiMD Lab, IIT Delhi, built with cytopathologists and fellow engineers. The models are a team effort. Code, data, model weights and unpublished results stay inside the lab.',
  problem:
    'Cervical cancer is one of the most common cancers among women in India, and one of the most preventable when it is caught early. The screening test, a Pap smear, spreads thousands of cells on a glass slide, and a trained specialist has to look at every one under a microscope to spot the few that are starting to change. There are far too few specialists for the number of women who need screening, and it is tiring work where a single abnormal cell is easy to miss. CervicalAI looks first: it finds every cell in the microscope image, sorts the normal from the suspicious, and measures the same tell-tale sign a pathologist looks for, how big the nucleus is compared with the rest of the cell. The specialist can then start with the slides and cells that matter most.',
  objectives: [
    'Find every cell in a Pap smear image, even in crowded fields where cells overlap.',
    'Sort each cell into the Bethesda categories pathologists use: normal (NILM), low-grade (LSIL), high-grade (HSIL) and squamous cell carcinoma (SCC).',
    'Measure each cell’s nucleus-to-cytoplasm (N/C) ratio, the main sign of how abnormal a cell is.',
    'Keep the models small enough to run on the microscope’s own hardware, and judge them with metrics chosen for the errors that matter clinically.',
  ],
  contributions: [
    'Worked in the team that built the cell detector, comparing YOLO, RT-DETR and RF-DETR models on the same data before choosing RF-DETR.',
    'Helped curate the training images in numbered versions, rejecting sets with blur, air bubbles, poor contrast or cropped cells.',
    'Contributed to the N/C ratio pipeline, in which a detector finds each cell and a small segmentation model outlines the cell and its nucleus.',
    'Set up an NVIDIA Jetson Orin Nano and benchmarked the detector on it, as a step towards running the models on the microscope itself.',
    'Contributed to the team’s framework for choosing evaluation metrics by clinical failure mode.',
  ],
  approach: [
    'Annotation: cytopathologists mark each cell in Label Studio, following a written protocol for each class.',
    'Pre-processing: large slide images are cut into tiles and normalised; rotation, flips and brightness changes make the models robust to slide-to-slide variation.',
    'Detection: RF-DETR, a transformer detector with a DINOv2 backbone, finds each cell. It was chosen over YOLO and RT-DETR variants after a side-by-side comparison.',
    'Classification: each detected cell is cropped and passed to a classifier that assigns a Bethesda category.',
    'N/C ratio: a lightweight segmentation model built for edge hardware outlines the cell and the nucleus, and the ratio is nuclear area divided by cytoplasmic area. Because both areas share the same scale, the ratio needs no microscope calibration.',
    'Segmentation labels were bootstrapped with Cellpose, a published general-purpose cell model, and curated by hand; Cellpose is not used when the system runs.',
  ],
  architecture: [
    { title: 'Microscope image', description: 'A field of view from a Pap smear slide, tiled and normalised.', status: 'verified' },
    { title: 'Cell detection', description: 'RF-DETR draws a box around every cell, including overlapping ones.', status: 'verified' },
    { title: 'Cell classification', description: 'Each cell crop is sorted into NILM, LSIL, HSIL or SCC.', status: 'verified' },
    { title: 'Cell and nucleus outlines', description: 'A small segmentation model outlines the cell and its nucleus in each crop.', status: 'verified' },
    { title: 'N/C ratio', description: 'Nuclear area divided by cytoplasmic area, the measure pathologists use to judge abnormality.', status: 'verified' },
    { title: 'Review list', description: 'Cells and slides ranked so the pathologist sees the suspicious ones first.', status: 'verified' },
  ],
  diagrams: [
    {
      src: '/images/cervicalai/architecture.svg',
      alt: 'Flowchart: Pap smear microscope image, tiling and normalisation, RF-DETR cell detection, one crop per cell, then a classifier (NILM, LSIL, HSIL, SCC) and a segmentation model for cell and nucleus outlines feeding the N/C ratio, both leading to cells ranked for pathologist review',
      caption: 'How a slide image becomes a review list. The orange box is where the pathologist takes over.',
      width: 1305,
    },
  ],
  tools: [
    { name: 'RF-DETR (DINOv2 backbone)', role: 'Cell detector', status: 'verified' },
    { name: 'PyTorch', role: 'Training and inference', status: 'verified' },
    { name: 'Label Studio', role: 'Cell annotation by cytopathologists', status: 'verified' },
    { name: 'Cellpose', role: 'Bootstrapping cell and nucleus outlines for training', status: 'verified' },
    { name: 'NVIDIA Jetson Orin Nano', role: 'Edge inference benchmarking', status: 'verified' },
  ],
  dataset: {
    name: 'Pap smear images annotated by cytopathologists',
    description:
      'Fields of view captured on the lab’s Autoscope microscope and a commercial slide scanner, annotated cell by cell by cytopathologists and curated in numbered versions; the detector result below is on version cs-cervical-7a. The images are patient data and stay inside the lab.',
    status: 'verified',
  },
  evaluation: [
    'Detection: mAP@50 on the held-out test split of cs-cervical-7a. RF-DETR reaches 87.33%.',
    'Detector candidates were compared on the same dataset versions before RF-DETR was chosen.',
    'Metrics are chosen by failure mode: sensitivity first for screening, because a missed abnormal cell is the costly error; specificity to avoid needless follow-ups; Dice and IoU for outlines.',
    'The detector is also checked by eye on images from other microscopes and a hospital set, to see how it transfers.',
  ],
  challenges: [
    {
      challenge: 'Cell images vary with staining, focus, air bubbles and how the slide was prepared.',
      decision: 'Curated the data in numbered versions with written reasons for accepting or rejecting each, and used augmentation for the remaining variation.',
    },
    {
      challenge: 'One model that both finds and outlines cells tends to do neither well.',
      decision: 'Split the job the way the biology splits it: a detector finds cells across the whole field, then a small model outlines each crop in full detail.',
    },
    {
      challenge: 'Drawing cell and nucleus outlines by hand for thousands of cells is slow.',
      decision: 'Bootstrapped the outlines with Cellpose, curated them by hand, and trained a small purpose-built model on them.',
    },
    {
      challenge: 'Standard metrics can look good while the clinically costly error goes unmeasured.',
      decision: 'Picked metrics by failure mode, putting sensitivity first for screening.',
    },
  ],
  limitations: [
    'A research system in development, not a diagnostic device, and not clinically validated.',
    'The 87.33% mAP@50 is a detection result on the team’s dataset; class-level and clinical results are not published.',
    'Code, data, model weights and patient images stay inside the lab.',
  ],
  evidence: [],
  disclosure:
    'CervicalAI is ongoing team work at MiMD Lab, IIT Delhi. This page describes the approach in general terms; the cover image is one field of view with no patient information.',
}
