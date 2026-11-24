import type { ProjectCaseStudy } from '../../types'

export const imgSimiSearchCaseStudy: ProjectCaseStudy = {
  context: 'Personal project. Code, tests and benchmark tooling are public.',
  problem:
    'Content-based image search is a few lines with CLIP and FAISS, and an early version of this project did just that, except that its indexing and search paths used random placeholder vectors instead of the real embedder. The rebuild set out to make retrieval correct and to treat the index like a software release: reproducible, versioned, validated at startup and measured on a public benchmark.',
  objectives: [
    'One embedding service shared by indexing and search, with the model revision pinned.',
    'Reproducible index builds released as immutable, validated versions with atomic activation and rollback.',
    'Measure retrieval quality on a public benchmark with its official scorer.',
    'Harden the API for public demos.',
  ],
  contributions: [
    'Replaced the placeholder vectors with a single CLIP embedding service used by both indexing and search.',
    'Built the release workflow: deterministic rebuilds, content fingerprints, manifests, validation, an atomic pointer for activation and rollback.',
    'Made the service fail closed: it refuses to serve if the active index was built with a different model revision.',
    'Added demo hardening (upload limits, timeouts, concurrency caps, safe file serving) and 196 automated tests.',
  ],
  approach: [
    'Images are embedded with CLIP ViT-B/32 (512-d, L2-normalised) and indexed with FAISS exact inner product, which equals cosine similarity.',
    'Index builds produce a candidate with a manifest (model, preprocessing, metric, checksums); validated candidates are promoted to immutable releases.',
    'The API re-validates the active release at startup; /ready stays 503 if anything doesn’t match.',
    'Retrieval quality is measured on INRIA Holidays with the official scorer, plus Precision@K, Recall@K and MRR.',
  ],
  architecture: [
    { title: 'Upload', description: 'Streaming size limit, body-read timeout, decoded off the event loop.', status: 'verified' },
    { title: 'CLIP embedding', description: 'ViT-B/32 at a pinned revision, shared with the indexer.', status: 'verified' },
    { title: 'FAISS search', description: 'Exact cosine search, top 5, under 2 ms.', status: 'verified' },
    { title: 'Versioned index', description: 'Immutable releases, atomic activation and rollback, startup validation.', status: 'verified' },
    { title: 'React UI', description: 'Results grid with cached thumbnails linking to full images.', status: 'verified' },
  ],
  tools: [
    { name: 'CLIP (Transformers, PyTorch)', role: 'Image embeddings', status: 'verified' },
    { name: 'FAISS', role: 'Vector index', status: 'verified' },
    { name: 'FastAPI', role: 'Search API', status: 'verified' },
    { name: 'React', role: 'Web UI', status: 'verified' },
    { name: 'pytest, Jest', role: '196 automated tests', status: 'verified' },
  ],
  dataset: {
    name: 'INRIA Holidays (evaluation)',
    description:
      '1,491 holiday photos in 500 groups of the same scene or object; the first photo of each group is the query. Images are INRIA’s copyright and used for evaluation only.',
    status: 'verified',
  },
  evaluation: [
    'mAP 0.844 with the official INRIA scorer (500 queries), against 0.746 for INRIA’s own 2008 system under the same scorer.',
    'Top-1 result correct 85.6%, Recall@10 0.940, MRR 0.898.',
    'Median search latency about 270 ms on a laptop CPU (p95 408 ms); FAISS itself under 2 ms, CLIP embedding about 208 ms.',
  ],
  challenges: [
    {
      challenge: 'The first version silently returned meaningless results (random vectors).',
      decision: 'One shared embedding service, tests that check real embeddings, and a startup check that the index matches the model.',
    },
    {
      challenge: 'Editing an index in place makes failures hard to undo.',
      decision: 'Immutable releases with an atomic pointer, so activation and rollback are one swap.',
    },
  ],
  limitations: [
    'No Docker image or CI yet.',
    'EXIF orientation isn’t applied before embedding, so some rotated photos score lower.',
    'No authentication or per-client rate limiting, so not for open public use.',
  ],
  evidence: [],
  disclosure: 'Personal work with no employer material. Benchmark images are not redistributed.',
}
