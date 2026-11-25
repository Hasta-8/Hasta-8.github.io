import type { ProjectCaseStudy } from '../../types'

export const roboticMicroscopyCaseStudy: ProjectCaseStudy = {
  context:
    'Ongoing work at MiMD Lab, IIT Delhi, on the lab’s Autoscope robotic microscope. The preview camera module is my own: I designed, built, calibrated and integrated it, and it runs on several Autoscope devices. Code, hardware details and internal results stay inside the lab.',
  problem:
    'A microscope sees the world through a keyhole: at high magnification one camera view covers a speck of the slide, and the tissue could be anywhere on the glass. Scanning the whole slide to find it would waste most of the time on empty glass. So before the microscope starts, a small preview camera above the slide takes one wide photo, much like glancing at a page before you read it. My pipeline finds the tissue in that photo, works out exactly where it sits on the machine in millimetres, and tells the robotic stage where to go and how large an area to scan. The microscope then spends its time on the sample, not on empty glass.',
  objectives: [
    'Get a sharp, glare-free, undistorted photo of the whole slide from a small wide-angle camera.',
    'Find the tissue reliably, whatever stain it has and however faint it is.',
    'Turn a position in the photo into stage coordinates the microscope can move to.',
    'Run it automatically inside the Autoscope software, on every device.',
  ],
  contributions: [
    'Set up the preview camera, chose its mounting height and position by experiment, and settled on a diffused LED strip after testing several lighting layouts for glare.',
    'Corrected the wide-angle lens distortion with OpenCV fisheye calibration, after tracing a stubborn distortion to a resolution mismatch between calibration and capture.',
    'Added ArUco markers to the slide holder so the slide can be found and squared up in every photo.',
    'Built colour-agnostic tissue detection: contour finding on the stain channel, RANSAC outline fitting, and a safety margin so no tissue is left out.',
    'Built the checkerboard calibration and homography that map photo pixels to stage millimetres, and checked them against CAD measurements of the platform.',
    'Integrated the pipeline into the Autoscope scanning backend and GUI with automatic and manual region selection, and deployed it on several devices.',
    'Now extending it to a six-slide holder with panoramic stitching and motor calibration for the lab’s next system.',
  ],
  approach: [
    'Capture: take an autofocused photo under each of two LEDs and merge the clean parts, so neither LED’s reflection spoils the image.',
    'Correct: undo the fisheye distortion of the wide-angle lens with a calibrated camera model.',
    'Locate the slide: detect the four ArUco markers on the holder and warp the slide to a flat, top-down view.',
    'Find the tissue: isolate the stain channel, boost contrast (CLAHE), threshold (Otsu), clean up, and fit the tissue outline with RANSAC. The result is a bounding box with a safety margin.',
    'Map to the machine: a checkerboard-calibrated homography converts the box corners from pixels to millimetres; offsets turn them into G-code moves for the objective, along with the scan’s rows, columns and focus depth.',
  ],
  architecture: [
    { title: 'Two-LED capture', description: 'Autofocused photos under two LEDs, merged to remove glare.', status: 'verified' },
    { title: 'Fisheye correction', description: 'A calibrated camera model straightens the wide-angle image.', status: 'verified' },
    { title: 'Slide localisation', description: 'ArUco markers on the holder anchor the slide and flatten its perspective.', status: 'verified' },
    { title: 'Tissue detection', description: 'Stain channel, Otsu threshold and RANSAC outline, with a safety margin.', status: 'verified' },
    { title: 'Pixel-to-stage mapping', description: 'A checkerboard-calibrated homography converts pixels to millimetres.', status: 'verified' },
    { title: 'Scan', description: 'G-code moves send the objective to the tissue and scan only that region.', status: 'verified' },
  ],
  diagrams: [
    {
      src: '/images/microscopy/architecture.svg',
      alt: 'Flowchart in two rows. Find the tissue: autofocus shots under two LEDs, merge sharpest glare-free parts, fisheye correction, ArUco markers find and flatten the slide, tissue detection. Send the microscope: box plus safety margin, homography from pixels to stage millimetres, G-code moves with scan rows, columns and focus depth, microscope scans only the tissue',
      caption: 'The preview pipeline, from one wide photo to a targeted scan. The orange box is the safety margin that keeps edge tissue in the scan.',
      width: 1121,
    },
  ],
  tools: [
    { name: 'OpenCV', role: 'Fisheye calibration, ArUco detection, contours, homography', status: 'verified' },
    { name: 'Python', role: 'Pipeline and backend integration', status: 'verified' },
    { name: 'Arducam camera and LED strip', role: 'Preview imaging hardware', status: 'verified' },
    { name: 'G-code motion control', role: 'Moving the stage and objective', status: 'verified' },
    { name: 'NVIDIA Jetson Orin Nano', role: 'Edge inference benchmarking', status: 'verified' },
  ],
  dataset: {
    name: 'Slides imaged on Autoscope devices',
    description:
      'Tested on cytology slides from more than one preparation method, across several Autoscope devices. The slide images carry patient labels and stay inside the lab.',
    status: 'verified',
  },
  evaluation: [
    'Coordinate accuracy checked against CAD measurements of the platform and by driving the objective to detected tissue corners.',
    'Tested on slides from different preparation methods across several devices, comparing the detected box with where the tissue actually is.',
    'Full scans checked for complete tissue coverage, which is why the box carries a safety margin and scan offsets.',
    'Detection is strong overall; the remaining misses are mostly extremely faint tissue.',
  ],
  challenges: [
    {
      challenge: 'The fisheye correction kept leaving the image distorted.',
      decision: 'Traced it to calibrating at one resolution and capturing at another, recalibrated at the capture resolution, and replaced the lens.',
    },
    {
      challenge: 'Glass slides reflect light, and glare hides the tissue.',
      decision: 'Tested several LED layouts, chose a diffused LED strip, and merged photos taken under two LEDs so each covers the other’s glare.',
    },
    {
      challenge: 'Stains vary in colour from slide to slide, so colour thresholds break.',
      decision: 'Made detection colour-agnostic: work on the stain channel and fit the outline with RANSAC.',
    },
    {
      challenge: 'Pixels are not millimetres, and a small mapping error makes the objective miss the tissue.',
      decision: 'Anchored every photo with ArUco markers, mapped pixels to millimetres with a checkerboard homography, and validated it against CAD measurements.',
    },
  ],
  limitations: [
    'Very faint tissue can still be missed; manual region selection is the fallback.',
    'Accuracy figures are internal and not published.',
    'Six-slide stitching for the next system is still in progress.',
  ],
  evidence: [],
  disclosure:
    'Robotic Microscopy is ongoing work at MiMD Lab, IIT Delhi. Code, hardware details and internal results are not shared; the slide label in the cover image is blurred.',
}
