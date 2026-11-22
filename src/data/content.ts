export const profile = {
  name: 'Harshul Jain',
  role: 'Senior Software Engineer, Audible',
  /** H1 — split across two lines in the hero */
  headline: ['ML and AI Infrastructure', 'at production scale'],
  tagline:
    'Senior Software Engineer at Audible, building ML and LLM infrastructure at production scale — and open-sourcing what I learn along the way.',
  belief:
    'I believe AI infrastructure should be open. The hard-won lessons from running it at scale belong in public.',
  bioShort:
    'ML and LLM infrastructure at production scale: real-time fraud detection, content intelligence, GenAI semantic search for 10M+ customers, and a feature store at 100K TPS.',
  bioLong: [
    'I am a Senior Software Engineer at Audible, where I build and lead ML and LLM infrastructure at scale.',
    'My work started with a real-time fraud detection platform on Kinesis and Flink that caught abuse in seconds, protected critical audio assets, and drove over $2M in ARR impact. I then led content intelligence pipelines producing browse nodes, topic vectors, writing-style signals, content segmentation, reviews, PDP features, and book tags — powering ML experiences across Audible.',
    'From there I moved into GenAI infrastructure, leading the control and data-storage layer for Audible’s semantic search platform, now serving 10M+ customers across hundreds of datasets. Today I lead Audible’s real-time ML feature store: thousands of features, hundreds of datasets, 20+ use cases, 100K TPS — and the real-time customer representation systems bringing LLMs into recommenders at scale.',
    'Outside Audible I write and teach about LLM inference infrastructure. I author “LLM Inference at Scale”, an open-source benchmark-driven handbook, delivered a two-hour workshop at the AI Engineer World’s Fair, speak at ODSC and the AI Engineer Code Summit, and give guest lectures at NYU. I also build AgentShip, an open-source framework for production AI agents — Terraform for agentic harnesses.',
  ],
  email: 'harshuljain1393@gmail.com',
  links: {
    github: 'https://github.com/harshuljain13',
    scholar: 'https://scholar.google.com/citations?user=m5AnZ-wAAAAJ',
    substack: 'https://harshuljain.substack.com',
    linkedin: 'https://www.linkedin.com/in/hjain1393',
    x: 'https://x.com/hj1393',
    handbook: 'https://github.com/harshuljain13/llm-inference-at-scale',
    alphaxiv: 'https://www.alphaxiv.org/@harshul-jain',
    resume: 'https://drive.google.com/file/d/1xHDnUI1RPkGQj7T3UU61NkC-Wc6DXPK4/view',
  },
};

/** Production-scale impact — the numbers that do the persuading. */
export const impact = [
  { value: '10M+', label: 'customers on GenAI semantic search' },
  { value: '100K', label: 'TPS on the real-time feature store' },
  { value: '20+',  label: 'ML use cases in production' },
  { value: '$2M+', label: 'ARR impact from fraud detection' },
];

export type Talk = {
  /** URL slug — the talk detail page lives at /talks/<slug> */
  slug: string;
  venue: string;
  title: string;
  date: string;
  kind: 'talk' | 'workshop' | 'guest-lecture' | 'invited';
  location?: string;
  logo: string;
  /** gradient classes for the carousel tile */
  tile: string;
  /** background colour matching the conference's own site */
  brandBg: string;
  /** whether that background is dark (logo renders light) or light */
  brandFg: 'light' | 'dark';
  /** YouTube video ID — '' until the recording is published */
  youtubeId?: string;
  /** Second the embed starts at (skips intros). */
  start?: number;
  /** 2–3 line teaser shown on the landing-page card. */
  summary?: string;
  /** Video chapters: [seconds, label]. Rendered as seekable links on the talk page. */
  chapters?: [number, string][];
  /** Slides, code, papers and other links for the talk page. */
  resources?: { label: string; href: string }[];
  /** Session abstract. Paste the Sessionize description here. */
  description?: string;
  /** Extra paragraphs below the abstract (takeaways, context). */
  body?: string[];
  /** Topic hashtags shown on the talk page. */
  hashtags?: string[];
  /** Co-presenters, if any. */
  withSpeakers?: string[];
  /** Link to the Sessionize / official session page. */
  sessionUrl?: string;
};

export const talks: Talk[] = [
  {
    slug: 'aie-worlds-fair-llm-inference-at-scale',
    venue: "AI Engineer World's Fair",
    title: 'Deep dive on LLM Inference at Scale',
    date: '2026',
    kind: 'invited',
    location: 'San Francisco',
    logo: '/logos/aie.svg',
    brandBg: '#000000',
    brandFg: 'light',
    tile: 'from-sky-500 to-cyan-400',
    youtubeId: 'y2W4FNAuPEA',
    withSpeakers: ['Tanmay Sah'],
    summary:
      'Why KV cache, not compute, breaks LLM serving. GPU memory math from first principles, then model-side (quantization, GQA/MLA, FlashAttention) and serving-side (paged attention, continuous batching, prefix caching) fixes — each benchmarked.',
    description: `A single token of KV cache on Mistral 7B costs 131 KB. Multiply that by 16,000 tokens of context and 80 concurrent users and the cache alone wants 42 GB of GPU memory — which is why requests start failing on a 24 GB card. This workshop builds that number up from first principles.

It opens on three symptoms every team hits: memory that climbs with context length, time to first token that degrades as prompts grow, and throughput that collapses because a naive server answers requests one after another. The rest of the session explains what causes each one, working down through the inference pipeline into the attention layer, then into how a GPU splits its memory between fixed model weights and the cache that has to grow.

Optimization is then split in two. Tanmay takes the model side: quantization, multi-head through multi-query, grouped-query and latent attention, then FlashAttention and tiling. Harshul takes the serving side: paged attention borrowed from OS paging, continuous batching, prefix caching and KV quantization, each benchmarked against a plain baseline.

It closes on engine selection: no statistical difference between vLLM and SGLang on standard workloads, but a 3–4× gap once agentic branching enters the picture.`,
    chapters: [
      [0, 'Introductions and what the workshop covers'],
      [163, 'What LLM inference is, and why it costs so much'],
      [321, 'The repo, the slides, and the free GPU notebooks'],
      [503, 'Three pain points: memory, first token, throughput'],
      [738, 'Foundations: the pipeline and the attention layer'],
      [893, 'KV cache math and how GPU memory divides'],
      [1241, 'Prefill and decode, and why decode is memory bound'],
      [1721, 'Throughput, concurrency, and the trade-off triangle'],
      [2042, 'The capacity calculator and picking a GPU'],
      [2230, 'Model optimization: quantization and attention variants'],
      [2884, 'FlashAttention, the scorecard, and a demo'],
      [3614, 'Serving optimizations: paging, batching, caching'],
      [3972, 'Benchmarking vLLM, and speculative decoding'],
      [4647, 'vLLM vs SGLang, choosing an engine, what to study next'],
    ],
    resources: [
      { label: 'Slides & notebooks — LLM Inference at Scale', href: 'https://github.com/harshuljain13/llm-inference-at-scale' },
    ],
    sessionUrl: 'https://ai.engineer/talks/y2W4FNAuPEA-youtube-5e3b6590220846c1c316',
    hashtags: ['LLMInference', 'vLLM', 'KVCache', 'GPUServing', 'AIInfra'],
  },
  {
    slug: 'aie-code-summit-self-hosted-llm-say-no',
    venue: 'AI Engineer Code Summit',
    title: 'Your Self-Hosted LLM Needs to Say No',
    date: '2026',
    kind: 'talk',
    location: 'San Francisco',
    logo: '/logos/aie-code-summit.svg',
    brandBg: '#0A0A0A',
    brandFg: 'light',
    tile: 'from-amber-400 to-orange-500',
    youtubeId: 'ntVpbyDTYaQ',
    withSpeakers: ['Parv Khatri'],
    summary:
      'Coding agents fan out, retry and burst — and a self-hosted LLM will accept every request. The case for admission control: refusing work before it reaches the GPU, drawn from 55 systems papers and eight production incidents.',
    description: `Coding agents fan out, retry and burst, and if they hit an LLM you host yourself, your inference layer will happily accept every request and bury the ones you needed first.

This talk makes the case for admission control: deciding what to refuse before it reaches the GPU. Drawing on a review of 55 systems papers and eight real production incidents, it shares five questions to ask any admission policy before you deploy it, and a checklist you can use right away.`,
    resources: [
      { label: 'Paper — Admission Control for LLM Inference Serving: A Systematic Review', href: 'https://doi.org/10.20944/preprints202611.1079.v1' },
      { label: 'AdmitPerf — admission control benchmark harness', href: 'https://github.com/harshuljain13/AdmitPerf' },
      { label: 'Admission Control Policies Survey', href: 'https://github.com/harshuljain13/AdmissionControlPolicies-Survey' },
    ],
    hashtags: ['AdmissionControl', 'LLMServing', 'Reliability', 'SelfHosted'],
  },
  {
    slug: 'ai-context-runtime-agnostic-agents',
    venue: 'AI Context Series',
    title: 'Beyond Frameworks: Building Runtime-Agnostic AI Agents',
    date: 'Mar 2026',
    kind: 'talk',
    logo: '/logos/ai-context.svg',
    brandBg: '#0D1117',
    brandFg: 'light',
    tile: 'from-violet-500 to-fuchsia-500',
    summary:
      'Separate what an agent does from how it executes. Patterns from AgentShip for swapping ADK and LangGraph, and plugging in MCP tools, memory and observability without rewriting agent code.',
    description: `AI agent frameworks are proliferating: Google ADK, LangGraph, OpenAI Agents SDK, CrewAI, each with distinct paradigms, tool interfaces and deployment models. Tool standards like MCP, memory layers like mem0 and Supermemory, and observability platforms like LangFuse and Opik are emerging to solve interoperability, but adoption remains fragmented. Teams spend months building on one framework with tightly coupled memory, observability and tooling, only to find they need capabilities from another. The result: rewrites, lock-in and production delays.

This talk introduces runtime-agnostic agent architecture. Instead of coupling agent logic to a framework, separate what the agent does from how it executes: write the agent once, run it on any engine, and integrate tools and memory through standardized abstractions.

Drawing from AgentShip, an open-source production layer for AI agents:
• Pluggable engine pattern: an AgentEngine abstraction that swaps ADK for LangGraph (or future runtimes) without touching agent code
• MCP integration layer: standardized tool discovery and invocation, making tools portable across frameworks
• Pluggable memory: short- and long-term memory with custom implementations, mem0, Supermemory or in-memory stores
• Pluggable observability: framework-agnostic tracing with LangFuse, Opik or custom backends
• Declarative agent configuration: YAML definitions that remove framework-specific boilerplate
• Unified streaming and sessions: consistent behavior across engines, three streaming modes, pluggable session storage
• Agent-to-agent orchestration: hierarchical workflows where sub-agents become tools

The demo is a health AI assistant where a primary agent orchestrates five specialized sub-agents for conversation analysis, medical reports and action tracking, all on interchangeable backends.`,
    resources: [{ label: 'AgentShip on GitHub', href: 'https://github.com/Agent-Ship/agent-ship' }],
    hashtags: ['AIAgents', 'AgentShip', 'MCP', 'LangGraph', 'GoogleADK'],
  },
  {
    slug: 'cncf-mcp-security',
    venue: 'KubeCon + CloudNativeCon',
    title: 'Securing the Agentic Tool Layer: A Runtime Defense Framework for MCP Agent Deployments',
    date: '2026',
    kind: 'talk',
    logo: '/logos/cncf.svg',
    brandBg: '#FFFFFF',
    brandFg: 'dark',
    tile: 'from-indigo-500 to-blue-500',
    youtubeId: 'MqFxT2ezR3Y',
    start: 206,
    withSpeakers: ['Saurabh Yergattikar'],
    summary:
      'MCP agents get hijacked through the tools they already trust. A threat taxonomy from 80+ SAFE-MCP techniques, and a runtime proxy that cut tool-poisoning success from 74% to under 9% at under 120 ms per call.',
    description: `Most LLM safety work guards the user prompt. MCP agents face a different problem: the attack arrives through the tools the agent already trusts. A poisoned tool description, a hidden instruction in a tool response, or a malicious server pulled from a public registry can hijack an agent without ever touching the user.

This session walks through a threat taxonomy built from 80+ techniques catalogued under SAFE-MCP, a Linux Foundation / OpenSSF project, then shows a runtime proxy that validates tool calls and responses inline, with no changes to the agent or server. In red-team testing across five model backends, it cut tool-poisoning success from 74% to under 9% and indirect injection from 47% to under 6%, adding under 120 ms per call.

Attendees leave with a concrete defense architecture, the false-positive tradeoffs that matter in production, and what to vet before approving an MCP server for their stack.`,
    resources: [
      { label: 'SAFE-MCP — threat technique catalogue', href: 'https://github.com/SAFE-MCP/safe-mcp' },
    ],
    hashtags: ['MCP', 'AgentSecurity', 'SAFEMCP', 'RedTeaming', 'CloudNative'],
  },
  {
    slug: 'odsc-west-sf-serving-llms-efficiently',
    venue: 'ODSC West SF',
    title: 'Serving LLMs Efficiently',
    date: '2026',
    kind: 'workshop',
    location: 'San Francisco',
    logo: '/logos/odsc.png',
    brandBg: '#0E1B2A',
    brandFg: 'light',
    tile: 'from-emerald-500 to-teal-400',
    youtubeId: '', // recording TBD
    description: '',
    hashtags: ['LLMInference', 'LLMServing', 'GPUEfficiency'],
  },
  {
    slug: 'nyu-agentic-ai-rag',
    venue: 'NYU',
    title: 'Agentic AI + RAG',
    date: '2026',
    kind: 'guest-lecture',
    location: 'New York',
    logo: '/logos/nyu.svg',
    brandBg: '#57068C',
    brandFg: 'light',
    tile: 'from-rose-500 to-pink-500',
    description: '',
    hashtags: ['AgenticAI', 'RAG', 'Teaching'],
  },
];

/** Talks that have a published recording — drives the Media section. */
export const recordedTalks = talks.filter(t => t.youtubeId);

export type Paper = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: 'published' | 'preprint';
  summary: string;
  /** Google Scholar citation count */
  cites?: number;
  arxiv?: string;
  doi?: string;
  code?: string;
};

/**
 * PUBLIC WORK ONLY — mirrors the Google Scholar profile.
 * Papers under review or in prep are deliberately not listed;
 * do not add an entry until it has a public arXiv/DOI link.
 */
export const papers: Paper[] = [
  {
    title: 'Admission Control for LLM Inference Serving: A Systematic Review',
    authors: 'H. Jain, T. Sah, T. Sah, P. Khatri, D. Sah',
    venue: 'Preprints.org 2026111079',
    year: '2026',
    status: 'preprint',
    summary:
      'An adapted-PRISMA review of 55 admission and admission-adjacent works (2022–2026): why overload in LLM serving is governed at the ingress, not inside the engine.',
    doi: 'https://doi.org/10.20944/preprints202611.1079.v1',
  },
  {
    title:
      'Do We Need an LLM to Know Why Sources Conflict? Decision Models for Knowledge-Conflict Typing in RAG',
    authors: 'P. Khatri, H. Jain, M. Kapoor, T. Sah',
    venue: 'arXiv preprint arXiv:2610.36915',
    year: '2026',
    status: 'preprint',
    summary:
      'A retrieve-type-resolve spine for knowledge conflicts in RAG, with a learned typing head that matches or beats flat LLM deciders at a fraction of the cost.',
    arxiv: 'https://arxiv.org/abs/2610.36915',
  },
  {
    title: 'UndoBench: Separating Task Competence from Recovery Capability in Tool-Using AI Agents',
    authors: 'D. Sah, T. Sah, H. Jain, T. Sah',
    venue: 'arXiv preprint arXiv:2610.05622',
    year: '2026',
    status: 'preprint',
    cites: 3,
    summary:
      'A benchmark that isolates whether an agent can complete a task exactly once under transport faults — recovery capability measured separately from raw task competence.',
    arxiv: 'https://arxiv.org/abs/2610.05622',
  },
  {
    title: 'EvoUndo: Recoverability-Constrained Self-Evolution for LLM Agent Harnesses',
    authors: 'T. Sah, D. Sah, H. Jain, T. Sah',
    venue: 'arXiv preprint arXiv:2608.28363',
    year: '2026',
    status: 'preprint',
    cites: 4,
    summary:
      'A recoverability layer for agents that mutate external state: pre-state witnesses, duplicate-retry suppression, and selective rollback that spares newer valid work.',
    arxiv: 'https://arxiv.org/abs/2608.28363',
  },
  {
    title: 'TanML: Automated Model Validation Toolkit for Tabular Machine Learning Models',
    authors: 'T. Sah, D. Sah, H. Jain, T. Sah, K. Jordan',
    venue: 'Journal of Open Source Software 11 (125), 11253',
    year: '2026',
    status: 'published',
    cites: 1,
    summary:
      'An open-source toolkit that automates validation of tabular ML models — diagnostics, robustness checks, and reporting in a single reproducible pass.',
    doi: 'https://doi.org/10.21105/joss.11253',
  },
  {
    title: 'Traffic Light Solution for UGV Using Digital Image Processing',
    authors: 'N. Bhattacharayya, A. K. Singh, S. Kapil, H. Jain, A. Jain',
    venue: 'International Journal of Soft Computing and Engineering (IJSCE) 4 (ICCIN-2K14)',
    year: '2014',
    status: 'published',
    cites: 6,
    summary:
      'Vision pipeline for traffic-light detection and classification on an unmanned ground vehicle, built on classical digital image processing.',
  },
];

export type Project = {
  name: string;
  tagline: string;
  link?: string;
  tag: string;
  /** gradient accent for the project card */
  accent: string;
  /** original generated cover art — see components/ProjectArt.astro */
  art: 'stream' | 'graph' | 'latency' | 'gate' | 'wave';
  /** real project banner/logo under /public/projects — overrides `art` */
  image?: string;
};

export const projects: Project[] = [
  {
    name: 'LLM Inference at Scale',
    tagline: 'Open, benchmark-driven handbook on production LLM serving — GPU memory, KV cache, attention, quantization, speculative decoding. 160+ GitHub stars in its first month.',
    link: 'https://github.com/harshuljain13/llm-inference-at-scale',
    tag: 'Handbook',
    accent: 'from-violet-500 to-fuchsia-500',
    art: 'stream',
    image: '/projects/llm-inference-at-scale.svg',
  },
  {
    name: 'AgentShip',
    tagline: 'Pluggable agent runtime on LangGraph + MCP. v0.0.4 on PyPI, running 20 agents in production.',
    link: 'https://github.com/Agent-Ship/agent-ship',
    tag: 'Framework',
    accent: 'from-sky-500 to-cyan-400',
    art: 'graph',
    image: '/projects/agentship.png',
  },
  {
    name: 'AdmitPerf',
    tagline: 'Admission control benchmark harness for LLM serving. Policy sweep across TTFT/TPOT/goodput regimes.',
    link: 'https://github.com/harshuljain13/AdmitPerf',
    tag: 'Benchmark',
    accent: 'from-emerald-500 to-teal-400',
    art: 'latency',
    image: '/projects/admitperf.svg',
  },
  {
    name: 'Admission Control Policies Survey',
    tagline: 'Survey of 16 production and research admission policies. Companion to the systematic review on Preprints.org.',
    link: 'https://github.com/harshuljain13/AdmissionControlPolicies-Survey',
    tag: 'Survey',
    accent: 'from-amber-400 to-orange-500',
    art: 'gate',
  },
  {
    name: 'Murmur',
    tagline: 'On-device iOS transcription with Parakeet 0.6B. Zero telemetry by design.',
    link: 'https://github.com/harshuljain13/Murmur',
    tag: 'iOS',
    accent: 'from-rose-500 to-pink-500',
    art: 'wave',
  },
];

export const workAreas = [
  'ML & LLM Infrastructure',
  'Real-Time Feature Stores',
  'LLM Inference at Scale',
  'GenAI Semantic Search',
  'Agentic Systems & MCP',
  'Streaming & Fraud Detection',
];

/** Where the 300+ mentoring sessions actually happened. */
export const mentoring = [
  { name: 'Codementor', href: 'https://www.codementor.io/@harshul1610', logo: '/logos/codementor.svg' },
  { name: 'Topmate',    href: 'https://topmate.io/harshuljain13',       logo: '/logos/topmate.png' },
];

export type Highlight = {
  value: string;
  label: string;
};

export const highlights: Highlight[] = [
  { value: '6', label: 'Talks & guest lectures' },
  { value: '6', label: 'Papers & pre-prints' },
  { value: '5+', label: 'Hackathons judged' },
  { value: '10+', label: 'Manuscripts & papers reviewed' },
  { value: '300+', label: 'Professionals mentored' },
];
