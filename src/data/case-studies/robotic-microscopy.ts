import type { ProjectCaseStudy } from '../../types'

export const roboticMicroscopyCaseStudy: ProjectCaseStudy = {
  context:
    'Professional work carried out at MiMD Lab, IIT Delhi. Only the parts of the system that can be described without exposing confidential material are published here; internal hardware specifics, control parameters, and unpublished results are withheld.',
  problem:
    'A robotic microscopy station is only useful if the software can answer three questions about the physical world: where is the tissue in this slide, how do the individual camera fields combine into one coherent view, and where must the stage move next. Each answer depends on the previous one — a localisation error becomes a stitching artefact, and a calibration error becomes a stage error — so the system has to be designed as one chain rather than three separate features.',
  objectives: [
    'Detect and localise the tissue region within an acquired microscopy field, so that the rest of the pipeline knows which part of the slide is meaningful.',
    'Stitch overlapping camera fields into a single consistent view, removing the seams between acquisitions without distorting the geometry.',
    'Calibrate the image coordinate system against the stage coordinate system, so that a position found in the image can be commanded on the hardware.',
    'Command robotic stage movement to the calibrated target, closing the loop between what the model sees and where the microscope goes.',
    'Run the inference step on the edge, so the control loop does not depend on a remote service and stays responsive to the hardware it drives.',
  ],
  contributions: [
    'Implemented the tissue detection and localisation stage that identifies the region of interest in acquired fields.',
    'Built the image stitching stage that merges overlapping fields into a coherent composite view.',
    'Developed the geometric calibration that maps image coordinates onto stage coordinates.',
    'Implemented the stage positioning logic that converts a calibrated target into a commanded movement.',
    'Assembled the edge AI workflow that runs inference close to the hardware inside the control loop.',
  ],
  approach: [
    'The microscope acquires overlapping fields of view across the slide, and each field is processed independently before anything is combined.',
    'Tissue detection and localisation identify the region of interest inside a field, so that stitching and analysis operate on the slide content rather than on background.',
    'Overlapping fields are stitched into a composite view, with the blend between fields handled so that the composite stays geometrically faithful to the original captures.',
    'A geometric calibration step relates pixel positions in the stitched view to physical stage coordinates, which is what makes a detected position actionable.',
    'The calibrated target is converted into a stage command, and the hardware is driven to that position.',
    'Inference runs at the edge, inside the loop, so the system keeps working without a network round trip and without offloading control to a remote host.',
  ],
  architecture: [
    {
      title: 'Field acquisition',
      description:
        'The microscope captures overlapping fields of view across the slide, with enough overlap for the stitching stage to align them.',
      status: 'verified',
    },
    {
      title: 'Tissue detection and localisation',
      description:
        'A detection stage identifies the tissue region inside each acquired field, establishing the region of interest for the rest of the pipeline.',
      status: 'verified',
    },
    {
      title: 'Image stitching',
      description:
        'Overlapping fields are aligned and blended into a single composite view of the slide region.',
      status: 'verified',
    },
    {
      title: 'Geometric calibration',
      description:
        'The composite view is related to physical stage coordinates, so a position in image space maps to a position on the instrument.',
      status: 'verified',
    },
    {
      title: 'Robotic movement',
      description:
        'The calibrated target is converted into a stage command and the microscope is driven to it.',
      status: 'verified',
    },
    {
      title: 'Edge AI deployment',
      description:
        'The inference model runs on edge hardware within the loop, keeping latency bounded and the system independent of remote inference.',
      status: 'verified',
    },
  ],
  tools: [
    {
      name: 'Python',
      role: 'Implementation language for localisation, stitching, calibration, and control logic',
      status: 'verified',
    },
    {
      name: 'Deep learning model for tissue detection',
      role: 'Model that produces the tissue region used to drive the pipeline',
      status: 'not_disclosed',
    },
    {
      name: 'Edge inference runtime and accelerator',
      role: 'Runtime and device used to execute the model at the edge',
      status: 'not_disclosed',
    },
    {
      name: 'Motion control stack',
      role: 'Interface used to command the robotic stage',
      status: 'not_disclosed',
    },
    {
      name: 'Image stitching implementation',
      role: 'Algorithm and library used to align and blend overlapping fields',
      status: 'not_disclosed',
    },
  ],
  dataset: {
    name: 'Acquired microscopy imagery',
    description:
      'Fields of view captured by the instrument itself. Capture settings, slide types, and the number of fields are part of the internal setup and are not published.',
    status: 'pending',
  },
  evaluation: [
    'Each stage of the chain is evaluated on its own, because localisation, stitching, calibration, and inference fail independently.',
    'Localisation is checked against annotated regions of interest; stitching is checked for seam artefacts and geometric consistency; calibration is checked by comparing image coordinates with commanded stage positions; inference is checked for correctness and for latency at the edge.',
    'Numeric results for these stages were still under internal verification when this summary was written, so no stage-level figures are published here.',
    'The absence of published numbers is a deliberate choice: an unreviewed figure on a public site is worse than an acknowledged gap.',
  ],
  challenges: [
    {
      challenge:
        'Errors compound down the chain, so a small localisation offset shows up as a stitching artefact and then as a stage-positioning error.',
      decision:
        'The stages are kept decoupled and separately evaluated, so the source of an error is identifiable instead of being reported as one end-to-end failure.',
    },
    {
      challenge:
        'A stitched view is only useful if its pixels still mean a physical location on the instrument.',
      decision:
        'Calibration is treated as a first-class step of the pipeline, and it is validated against commanded stage positions rather than inferred from the image alone.',
    },
    {
      challenge:
        'The inference step sits inside a physical control loop, where a remote round trip is not acceptable.',
      decision:
        'The model runs on edge hardware within the loop, so behaviour is bounded by the local device rather than by network conditions.',
    },
    {
      challenge:
        'A robotics system carries proprietary and safety-relevant details that cannot simply be published.',
      decision:
        'The published description stops at the architecture and the engineering decisions; hardware identifiers, control parameters, and internal results are withheld.',
    },
  ],
  limitations: [
    'No numeric results are published for localisation, stitching, calibration, or edge inference, because internal verification was still ongoing when this summary was written.',
    'Model architecture, training details, hardware identifiers, and the motion-control stack are not disclosed.',
    'No repository, demo, or video is published for this engagement, and the composite imagery and calibration artefacts remain internal.',
    'The system described here is an internal research and engineering context; no production or clinical deployment is claimed.',
  ],
  evidence: [
    {
      id: 'microscopy-stitching-overlay',
      title: 'Stitched field overlay',
      description:
        'Approved visual of overlapping fields combined into a composite view, showing how the stitching stage resolves the field boundaries.',
      image: '/images/microscopy/stitching-overlay.png',
      status: 'placeholder',
    },
    {
      id: 'microscopy-calibration-diagram',
      title: 'Image-to-stage calibration diagram',
      description:
        'Approved schematic relating image coordinates to stage coordinates, to accompany the calibration section.',
      image: '/images/microscopy/calibration-diagram.png',
      status: 'placeholder',
    },
    {
      id: 'microscopy-edge-pipeline',
      title: 'Edge AI pipeline schematic',
      description:
        'Approved diagram of the acquisition → localisation → stitching → calibration → movement chain with the inference stage on the edge device.',
      image: '/images/microscopy/edge-pipeline.png',
      status: 'placeholder',
    },
  ],
  disclosure:
    'Robotic Microscopy is professional work. Hardware identifiers, control parameters, model weights, internal results, and any proprietary imagery from this engagement are deliberately excluded from this page.',
}
