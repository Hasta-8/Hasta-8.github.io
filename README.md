# Debadri Chatterjee — portfolio

**Live site: https://hasta-8.github.io/**

Personal portfolio of an Applied AI/ML Engineer (computer vision and retrieval):
professional work, personal projects with measured results and live demos,
experience, skills and a downloadable resume.

| Project | What it shows | Links |
|---|---|---|
| Production RAG | Cited answers over 28 papers on a laptop CPU; hybrid retrieval, reranking, an agent that declines | [code](https://github.com/Hasta-8/production-rag) · [video](https://youtu.be/EQdFXa5EfL4) |
| ShelfScan | Shelf product detection and visual grouping, measured separately | [code](https://github.com/Hasta-8/ShelfScan) · [demo](https://hasta-8.github.io/ShelfScan/) · [video](https://youtu.be/p2lKjtaSrEc) |
| Image Similarity Search | CLIP + FAISS with versioned index releases; mAP 0.844 on INRIA Holidays | [code](https://github.com/Hasta-8/Image_Similarity_Search) |
| Garment Attributes | Zero-shot catalogue attributes with Fashion-CLIP, measured on held-out photos | [code](https://github.com/Hasta-8/Garment_Detection_Project) · [demo](https://hasta-8.github.io/Garment_Detection_Project/) · [video](https://youtu.be/dFRQeSfDtRI) |
| Glove Detection | Fine-tuned YOLOv8s, re-evaluated after finding validation leakage | [code](https://github.com/Hasta-8/glove-detection-yolov8) · [demo](https://hasta-8.github.io/glove-detection-yolov8/) · [video](https://youtu.be/nOzdFzO_gJ4) |

CervicalAI and Robotic Microscopy are professional work, described without internal
code, data or unreleased results.

## Site

A static React + Vite + TypeScript site styled with Tailwind CSS. Content lives in
typed data files (`src/data/`), so a project, metric or link changes in one place.
No backend, database or tracking.

```bash
npm ci
npm run dev        # http://localhost:5173
npm run typecheck && npm run lint && npm run build   # → dist/
```

Every push to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`). Build reports live in
[`docs/build-reports.md`](docs/build-reports.md).

© Debadri Chatterjee. The resume and project descriptions are not licensed for reuse.
