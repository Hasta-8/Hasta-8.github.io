import type { ProjectCaseStudy } from '../../types'

export const cervicalAiCaseStudy: ProjectCaseStudy = {
  context:
    'Professional work carried out at MiMD Lab, IIT Delhi. This summary describes the workflow and the documented evaluation only; internal slides, source code, training data, and unreleased results are not published.',
  problem:
    'Working with cervical microscopy imagery means solving two problems in sequence: locating individual cells inside a dense field of view, and then assigning each located cell a class. Cell-level analysis cannot begin until detection is reliable, and a detection-only pipeline says nothing about how well the downstream classes separate. The engineering objective was therefore a single pipeline in which both stages are measured separately and reported against a labelled benchmark.',
  objectives: [
    'Detect cervical cells in microscopy imagery so that every candidate cell has a location and a bounding box.',
    'Classify each detected cell so that downstream analysis can work on labelled cells rather than raw pixels.',
    'Evaluate detection quality on the cs-cervical-7a benchmark using mAP@50, and keep the evaluation protocol reproducible for review.',
    'Keep detection and classification separable, so a regression in one stage can be attributed instead of hidden behind an end-to-end number.',
  ],
  contributions: [
    'Developed the cervical cell detection and classification workflow, including the data preparation, training, and inference path used for the imagery.',
    'Evaluated the RF-DETR detector on cs-cervical-7a and reported the result as mAP@50, with the evaluation protocol documented for internal review.',
    'Structured the pipeline so that detection output is an explicit intermediate artefact, which is what makes the classification stage trainable and separately measurable.',
    'Documented the result, its scope, and the open verification items that were still outstanding when this summary was written.',
  ],
  approach: [
    'Imagery is prepared and organised into labelled training and evaluation splits before any model is trained, so that the evaluation always runs on data the detector has never seen.',
    'A detector is trained to localise cervical cells in the field of view. The documented configuration for this engagement is RF-DETR.',
    'Detected cells are cropped from the source imagery and passed to the classification stage, which assigns a label to each crop.',
    'Detections are scored against the cs-cervical-7a ground truth with mAP@50, which measures the quality of the localisation task at an IoU threshold of 0.5.',
    'Outputs are reviewed internally before any figure is published, and the review status of each published number is recorded with the number itself.',
  ],
  architecture: [
    {
      title: 'Microscopy imagery',
      description:
        'Source fields of view containing cervical cells, organised into labelled splits for training and evaluation.',
      status: 'verified',
    },
    {
      title: 'Detection stage',
      description:
        'RF-DETR is trained to localise individual cells in each field of view and emit a bounding box per cell.',
      status: 'verified',
    },
    {
      title: 'Localisation to crops',
      description:
        'Detection output is turned into an explicit intermediate artefact — one cropped image per detected cell — which is the contract between the two stages.',
      status: 'verified',
    },
    {
      title: 'Classification stage',
      description:
        'Each cropped cell is assigned a class by a classifier trained on the labelled crops.',
      status: 'verified',
    },
    {
      title: 'Evaluation against cs-cervical-7a',
      description:
        'Predictions are scored against the benchmark labels with mAP@50, the metric used to report the documented result.',
      status: 'verified',
    },
    {
      title: 'Internal review',
      description:
        'Results are checked by the team before publication; the review of the reported figure was still ongoing when this summary was written.',
      status: 'verified',
    },
  ],
  tools: [
    {
      name: 'RF-DETR',
      role: 'Detector used for cervical cell localisation',
      status: 'verified',
    },
    {
      name: 'Python',
      role: 'Implementation language for the pipeline',
      status: 'verified',
    },
    {
      name: 'Deep learning framework and training configuration',
      role: 'Exact framework version, optimiser, schedule, and augmentation setup',
      status: 'not_disclosed',
    },
    {
      name: 'Image preprocessing pipeline',
      role: 'Tiling, rescaling, and normalisation applied before inference',
      status: 'not_disclosed',
    },
    {
      name: 'Classification model family',
      role: 'Architecture used to label detected cells',
      status: 'not_disclosed',
    },
  ],
  dataset: {
    name: 'cs-cervical-7a',
    description:
      'Cervical cell detection benchmark used to evaluate the detector. The dataset card, class taxonomy, and split composition are not reproduced here.',
    status: 'verified',
  },
  evaluation: [
    'Detection is evaluated with mean average precision at an intersection-over-union threshold of 0.5 (mAP@50) on cs-cervical-7a.',
    'Detection and classification are evaluated as separate stages: detection through mAP@50, classification through its own stage-level metrics.',
    'The documented RF-DETR result is 87.33% mAP@50 on cs-cervical-7a.',
    'Internal verification of that figure was ongoing at the time of writing, so it is presented as a documented engineering result rather than a settled benchmark.',
    'Per-class breakdowns, precision and recall curves, and the exact evaluation protocol are not published, because they were still under internal verification.',
  ],
  challenges: [
    {
      challenge:
        'Detection quality and classification quality fail in different ways, so a single end-to-end score hides which stage regressed.',
      decision:
        'The pipeline keeps detection output as an explicit artefact and evaluates each stage on its own, so a failure can be attributed to a specific stage.',
    },
    {
      challenge:
        'A reported number is only meaningful if it can be reproduced from the same data, split, and scoring code.',
      decision:
        'The evaluation is pinned to a named public benchmark and a fixed metric, and the protocol is documented for review instead of being left implicit in a training script.',
    },
    {
      challenge:
        'Results from a professional engagement can only be published with the approval that the engagement allows.',
      decision:
        'Only the workflow and the approved figure are published here; the slides, code, data, and analysis artefacts stay internal, and the review status is stated next to the number.',
    },
  ],
  limitations: [
    'Internal verification of the 87.33% mAP@50 result was still ongoing when this summary was written. It is an engineering result on a detection benchmark and is not a clinical validation, a diagnostic claim, or a statement about performance in a screening programme.',
    'Per-class performance, error analysis, and the full evaluation protocol are not published, so the single headline number should not be read as a complete picture of the system.',
    'No repository, demo, model weights, or dataset samples are published for this engagement.',
    'The case study describes the documented workflow only; undocumented implementation details are marked as not disclosed rather than estimated.',
  ],
  evidence: [
    {
      id: 'cervicalai-detection-overlay',
      title: 'Detection overlay on cs-cervical-7a',
      description:
        'Approved visual showing detected cervical cells over a source field of view, intended to accompany the mAP@50 result.',
      image: '/images/cervicalai/detection-overlay.png',
      status: 'placeholder',
    },
    {
      id: 'cervicalai-stage-metrics',
      title: 'Detection and classification stage metrics',
      description:
        'Approved figure comparing the two stages of the pipeline, to be released once the underlying verification is complete.',
      image: '/images/cervicalai/stage-metrics.png',
      status: 'placeholder',
    },
  ],
  disclosure:
    'CervicalAI is professional work. No internal slides, source code, datasets, or unreleased results from this engagement appear on this site, and any material used here is used with the approval of the engagement.',
}
