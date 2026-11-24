import type { ProjectCaseStudy } from '../../types'

export const shelfScanCaseStudy: ProjectCaseStudy = {
  context:
    'Personal project, developed independently of the professional engagements described elsewhere on this site. Because it is my own work, the architecture and the evaluation approach can be described in more detail here — but the measurements themselves are only published once they have been re-verified.',
  problem:
    'Object detection demos are usually reported as a single accuracy number, which hides the part that matters in practice: two detectors that score similarly can behave very differently once inference cost is included. The point of this project was to build a shelf detection pipeline where candidate models are compared on the same imagery and the same evaluation code, and where accuracy is reported next to the measured inference cost, so the trade-off is visible rather than implied.',
  objectives: [
    'Build an object detection pipeline over shelf imagery that produces consistent detections that can be compared across models.',
    'Run a model comparison in which every candidate detector is evaluated through the same data pipeline and the same scoring code.',
    'Measure inference performance for each candidate instead of assuming that a single accuracy metric is enough to choose a model.',
    'Report the comparison honestly, including the cases where the better-accuracy model is not the better model to deploy.',
  ],
  contributions: [
    'Built the shelf detection pipeline, including data preparation, training, and inference.',
    'Designed and ran the model comparison, keeping the evaluation harness identical across candidates so that the differences are attributable to the models.',
    'Measured inference performance for each candidate and combined it with the accuracy results into a single comparison.',
    'Documented the comparison setup and the open items that must be confirmed before the numbers are published.',
  ],
  approach: [
    'Shelf imagery is prepared and labelled, then split into training and evaluation sets so that every candidate model is scored on data none of them has seen.',
    'Each candidate detector is trained through the same pipeline, with the same data handling and the same augmentation policy, so that the comparison isolates the model.',
    'All candidates are scored with a single evaluation harness, using one metric definition and one post-processing configuration.',
    'Inference is measured for each candidate under the same conditions, so latency and throughput numbers describe the same workload for every model.',
    'Accuracy and inference measurements are brought together into a single comparison, which is the artefact the project actually exists to produce.',
  ],
  architecture: [
    {
      title: 'Shelf imagery',
      description:
        'Captured shelf scenes containing the product categories of interest, labelled for detection.',
      status: 'verified',
    },
    {
      title: 'Data preparation',
      description:
        'Labelling, train and evaluation splits, and augmentation applied consistently for every candidate model.',
      status: 'verified',
    },
    {
      title: 'Candidate detectors',
      description:
        'A set of object detection models trained through the same pipeline; the specific candidates are pending confirmation before publication.',
      status: 'pending',
    },
    {
      title: 'Shared evaluation harness',
      description:
        'One scoring implementation, one metric definition, and one post-processing configuration used for every candidate.',
      status: 'verified',
    },
    {
      title: 'Inference measurement',
      description:
        'Inference performance measured for each candidate under identical conditions, so the comparison is like-for-like.',
      status: 'verified',
    },
    {
      title: 'Comparison summary',
      description:
        'Accuracy and inference cost combined into a single view of the trade-off, which is the deliverable of the project.',
      status: 'verified',
    },
  ],
  tools: [
    {
      name: 'Python',
      role: 'Implementation language for the pipeline, the evaluation harness, and the benchmarks',
      status: 'verified',
    },
    {
      name: 'Object detection models under comparison',
      role: 'The candidate detectors evaluated against each other',
      status: 'pending',
    },
    {
      name: 'Deep learning framework',
      role: 'Framework and version used for training and inference',
      status: 'pending',
    },
    {
      name: 'Inference runtime and device',
      role: 'Runtime and hardware on which latency and throughput were measured',
      status: 'pending',
    },
    {
      name: 'Evaluation and benchmarking tooling',
      role: 'Metric implementation and measurement scripts used for the comparison',
      status: 'pending',
    },
  ],
  dataset: {
    name: 'Shelf imagery collected for this project',
    description:
      'Images captured for the project and labelled for detection. Scene count, class taxonomy, and split composition are pending confirmation and are not published yet.',
    status: 'pending',
  },
  evaluation: [
    'Every candidate is evaluated on the same held-out evaluation split with the same metric implementation, so differences in the results are attributable to the models rather than to the harness.',
    'Detection accuracy is reported with the standard detection metric for the task.',
    'Inference performance is measured for each candidate under the same conditions, and reported alongside accuracy.',
    'Candidate names, dataset composition, and the measured numbers are still being confirmed, so the tables below show the metrics that will be published rather than values that are not yet verified.',
  ],
  challenges: [
    {
      challenge:
        'A comparison is only meaningful if every candidate is treated identically, otherwise the harness differences are mistaken for model differences.',
      decision:
        'One evaluation harness, one metric definition, and one post-processing configuration are used for all candidates, and the setup is shared rather than re-implemented per model.',
    },
    {
      challenge:
        'Accuracy alone hides the deployment cost of a model, and a comparison that ignores inference cost produces the wrong recommendation.',
      decision:
        'Inference performance is measured for every candidate under identical conditions and reported next to accuracy, so the trade-off is part of the result.',
    },
    {
      challenge:
        'Published comparison numbers invite the question of how they were produced.',
      decision:
        'The metric definition, split policy, and measurement conditions are documented, and values that are not yet re-verified are left unpublished rather than approximated.',
    },
  ],
  limitations: [
    'The candidate model names, the dataset composition, and the measured accuracy and latency values are pending confirmation and are not published yet. The metric rows below mark the values that will appear once they are verified.',
    'No repository or demo is published for this project yet, even though it is personal work, because the comparison harness has not been cleaned up for release.',
    'The evaluation covers the shelf detection scenario only; conclusions do not extend to other domains, scenes, or hardware.',
    'No claim is made about production readiness, and the published result will describe an offline evaluation rather than a live deployment.',
  ],
  evidence: [
    {
      id: 'shelfscan-detection-samples',
      title: 'Detection samples from the evaluation set',
      description:
        'Approved visual of shelf detections produced by the evaluated models, to be published alongside the comparison.',
      image: '/images/shelfscan/detection-samples.png',
      status: 'placeholder',
    },
    {
      id: 'shelfscan-comparison-chart',
      title: 'Accuracy versus inference cost comparison',
      description:
        'Chart placing each candidate by detection accuracy and measured inference cost, which is the central artefact of the project.',
      image: '/images/shelfscan/comparison-chart.png',
      status: 'placeholder',
    },
  ],
  disclosure:
    'ShelfScan is personal work and contains no employer material. Measurements, model names, and dataset details are published only after they have been re-verified.',
}
