import type { ProjectCaseStudy } from '../../types'

export const productionRagCaseStudy: ProjectCaseStudy = {
  context:
    'Personal project. Code, evaluation sets, results and a walkthrough video are public. Everything runs locally on a laptop CPU: no paid APIs, and no data leaves the machine.',
  problem:
    'Question answering over documents is easy to demo and hard to trust: models answer confidently when the evidence is missing, cite the wrong source, or credit one model’s numbers to a similar one. The goal was a retrieval-augmented system over 28 openly licensed AI/ML papers that cites a page for every sentence, declines rather than guesses, and is measured on questions written to catch exactly those failures.',
  objectives: [
    'Answer only from the corpus, with a page citation for every sentence.',
    'Decline questions the corpus can’t answer, including near-miss "trap" questions about models it doesn’t cover.',
    'Measure retrieval and answers on golden and held-out question sets, with criteria fixed before each experiment.',
    'Serve it as a secured API with a UI that shows every pipeline step.',
  ],
  contributions: [
    'Built ingestion, chunking, hybrid retrieval (BM25 plus dense embeddings with reciprocal rank fusion) and cross-encoder reranking.',
    'Built a LangGraph agent that grades the evidence, rewrites weak queries within a bounded budget and declines with the score when evidence stays weak.',
    'Wrote the evaluation sets, including trap questions, and recorded every experiment, including the failed ones.',
    'Built the FastAPI service (security screening, caching, rate limiting, streaming traces), the React UI with a citation viewer, Docker, and a replay mode as a demo fallback.',
  ],
  approach: [
    'Retrieval: BM25 and bge-small embeddings, fused with reciprocal rank fusion, then reranked by a MiniLM cross-encoder.',
    'Grading: a rerank-score threshold decides whether the evidence is good enough; weak evidence triggers at most two query rewrites, then a decline.',
    'Generation: Qwen3-1.7B (llama.cpp, quantized) writes from the top three chunks; checks verify citations, entity names, PII and prompt leaks before the answer is returned.',
    'Every step writes into a trace that streams to the UI, so retrieval results appear in about 2 seconds while the CPU generates the answer.',
  ],
  architecture: [
    { title: 'Security screen', description: 'Prompt-injection, PII and delimiter checks before any model call.', status: 'verified' },
    { title: 'Hybrid retrieval', description: 'BM25 + dense embeddings (bge-small, ONNX), fused with RRF; Chroma index versioned by model and chunking settings.', status: 'verified' },
    { title: 'Rerank and grade', description: 'Cross-encoder reranking; a score threshold decides answer, rewrite or decline.', status: 'verified' },
    { title: 'Grounded generation', description: 'Qwen3-1.7B on CPU with a 0.6B fallback; three chunks; every sentence cited.', status: 'verified' },
    { title: 'Answer checks', description: 'Citation validity, entity-name consistency, PII and prompt-leak checks.', status: 'verified' },
  ],
  diagrams: [
    {
      src: '/images/production-rag/architecture.svg',
      alt: 'Flowchart: question, security screen, answer cache, hybrid retrieval, cross-encoder rerank, grading with up to two query rewrites or a decline, Qwen3-1.7B answer, answer checks, then answer with sources and trace',
      caption: 'Request path. Orange boxes are checks that can stop or short-circuit a request.',
      width: 613,
    },
  ],
  tools: [
    { name: 'LangGraph', role: 'Agent state machine with bounded retries', status: 'verified' },
    { name: 'llama.cpp (Qwen3-1.7B)', role: 'Local LLM on CPU', status: 'verified' },
    { name: 'fastembed, Chroma, rank-bm25', role: 'Embeddings, vector index, keyword search', status: 'verified' },
    { name: 'FastAPI', role: 'API with streaming traces, cache and rate limiter', status: 'verified' },
    { name: 'React + TypeScript', role: 'Chat UI, trace panel, PDF citation viewer', status: 'verified' },
    { name: 'Docker, pytest, GitHub Actions', role: 'Packaging, tests, CI', status: 'verified' },
  ],
  dataset: {
    name: '28 openly licensed arXiv papers, plus written question sets',
    description:
      'Only papers whose licence allows redistribution (28 of 78 candidates). Evaluation: a golden set of 30 answerable and 5 trap questions, and held-out sets written before the experiments they judge; retrieval also checked on the public BEIR SciFact benchmark.',
    status: 'verified',
  },
  evaluation: [
    'Golden set: 27 of 30 answered, 100% of answers citing an evidence page, 4 of 5 traps declined.',
    'Held-out sets: 10 of 12 answered, 12 of 12 traps declined.',
    'Retrieval (evidence page in the top 3): dense 73% → hybrid + rerank 97%.',
    'BEIR SciFact nDCG@10: dense 0.707, hybrid + rerank 0.687, in line with the published BM25 + reranker figure (0.688).',
    'Latency on a 4-core laptop CPU: retrieval and trace in about 2 s, answer in 35–65 s, cached answers in milliseconds.',
  ],
  challenges: [
    {
      challenge: 'A small model credits facts about one model to a similar one (asked about Llama 2’s GPUs, it found LLaMA v1’s).',
      decision: 'Added an entity-name check that withdraws answers naming the wrong model, and trap questions that test it.',
    },
    {
      challenge: 'Answers take 35–65 s on a CPU.',
      decision: 'Streamed the retrieval trace first, cached answers, and added a labelled replay mode for demos.',
    },
    {
      challenge: 'Small evaluation sets make one-question differences noise.',
      decision: 'Validated each change on held-out sets written before the experiment ran.',
    },
  ],
  limitations: [
    'Slow by design on a CPU, one answer at a time.',
    'One golden trap is still answered with a nearby model’s fact; the entity check misses generic names.',
    '3 of 30 golden questions are over-refused.',
    'Query rewrites rarely help (1 of 6 vague questions rescued).',
    'Regex-based security is one layer, not a complete defence.',
  ],
  evidence: [
    {
      id: 'rag-trace',
      title: 'A cited answer with its full trace',
      description:
        'Each step, from the security screen to the answer checks, is shown with its scores; the cited page opens with the passage highlighted.',
      image: '/images/production-rag/answer-trace.jpg',
      alt: 'Production RAG UI showing an answer with citations, a trace of retrieval scores per chunk, and the cited PDF page',
      status: 'approved',
    },
    {
      id: 'rag-compare',
      title: 'Retrieval modes side by side',
      description: 'Compare mode runs one question through dense, hybrid and hybrid + rerank retrieval, so the effect of each stage is visible.',
      image: '/images/production-rag/compare.jpg',
      alt: 'Three columns of ranked passages for dense, hybrid and hybrid plus rerank retrieval',
      status: 'approved',
    },
  ],
  disclosure: 'Personal work with no employer material. The corpus contains only papers whose licences allow redistribution.',
}
