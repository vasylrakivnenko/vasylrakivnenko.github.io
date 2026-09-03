/* ==========================================================================
   Single source of truth for every page on the site.
   Edit here, then run `node build.mjs` to regenerate the HTML.

   Anything tagged REVIEW: is content I derived from claims already on the
   site rather than from a document you gave me — worth a read-through before
   you consider it final.
   ========================================================================== */

export const site = {
  name: "Vasyl Rakivnenko",
  role: "AI Engineer",
  origin: "https://vasylrakivnenko.github.io",
  email: "vasyl@stanford.edu",
  linkedin: "https://www.linkedin.com/in/rakivnenkov",
  x: "https://x.com/rakivnenkow",
  github: "https://github.com/vasylrakivnenko",
  scholar: "https://scholar.google.com/citations?user=nCEO29EAAAAJ",
  calendly:
    "https://calendly.com/vasyl-stanford/fractional-chief-ai-discovery-call",
  description:
    "AI Engineer in Silicon Valley. I build enterprise AI solutions to automate workflows and boost productivity — agentic systems, retrieval, evaluation and the infrastructure that keeps them running.",
};

/* ------------------------------------------------------------- nav ----- */

export const nav = {
  before: [
    { href: "/#about", label: "About me" },
    { href: "/cv/", label: "My CV" },
    { href: "/#research", label: "Research" },
  ],
  after: [{ href: "/#portfolio", label: "Portfolio" }],
};

/* --------------------------------------------------------- the hero ---- */

export const hero = {
  eyebrow: "AI Engineering and Leadership · Silicon Valley",
  headline: "AI is the new electricity.",
  headlineAccent: "Don’t let your business run in the dark.",
  lede: "I build enterprise AI solutions to automate workflows and boost productivity.",
  stack: [
    "python",
    "typescript",
    "pytorch",
    "langgraph",
    "postgres/pgvector",
    "aws",
  ],
  // Credential chips used to sit here. With the About block now directly
  // below the hero, they repeated its ticker within one scroll, so the hero
  // ends on the stack line instead. To bring them back, restore a `chips`
  // array here and re-add the `.hero__chips` div in build.mjs heroSection().
  image: {
    src: "/assets/1702346092406_1781039882681-CreCwZNO.jpg",
    alt: "Vasyl Rakivnenko speaking at Stanford",
  },
};

/* ------------------------------------------------- the stack I build --- */

export const stackSection = {
  eyebrow: "How I build",
  title: "Six layers decide whether AI survives contact with production.",
  lede: "Nearly every enterprise AI project that fails, fails in the same place: the gap between a demo that impresses a room and a system that runs on a Tuesday morning without anyone watching. These are the layers that gap is made of. I build all six.",
  layers: [
    {
      num: "06",
      name: "Interface",
      hint: "Where people actually meet the system",
      headline: "Software people use without being trained to use it.",
      detail:
        "The best model in the world is worthless behind a UI nobody opens. I ship AI into the tools your team already lives in — the internal dashboard, the CRM, Slack, the case management system — so adoption is the default rather than a change-management programme.",
      stack: ["React", "TypeScript", "Streaming UI", "Slack / Teams", "REST"],
    },
    {
      num: "05",
      name: "Agents & orchestration",
      hint: "Planning, tool use, human handoff",
      headline: "State machines, not prompt spaghetti.",
      detail:
        "Multi-step agents that plan, call your internal tools, recover from failure, and know exactly when to stop and ask a human. Built as explicit, inspectable graphs — so when something goes wrong you can point at the node that did it instead of re-reading a 4,000-token prompt.",
      stack: ["LangGraph", "Tool calling", "MCP", "Queues", "Human-in-the-loop"],
    },
    {
      num: "04",
      name: "Retrieval & memory",
      hint: "Your documents, made answerable",
      headline: "Answers with citations, not confident guesses.",
      detail:
        "Hybrid search over your own corpus — contracts, tickets, filings, shift reports — with reranking, chunking that respects document structure, and citations on every claim. If the system can’t ground an answer, it says so. That property is what makes it usable in a regulated review.",
      stack: ["pgvector", "Hybrid BM25", "Rerankers", "OCR", "Knowledge graphs"],
    },
    {
      num: "03",
      name: "Models",
      hint: "Routing, fine-tuning, structured output",
      headline: "The right model per task, not one model for everything.",
      detail:
        "Frontier models where reasoning matters, small open-weight models where volume and latency matter, fine-tuning only where it demonstrably earns its cost. Structured outputs with schema validation, so downstream code never has to parse prose.",
      stack: [
        "Claude",
        "Open weights",
        "LoRA / PEFT",
        "vLLM",
        "Structured output",
      ],
    },
    {
      num: "02",
      name: "Evaluation & guardrails",
      hint: "How you know it still works",
      headline: "If quality regresses, a dashboard tells you — not a customer.",
      detail:
        "Every system ships with a golden dataset, an offline eval suite in CI, and online tracing. Plus the unglamorous safety layer: PII detection and redaction, prompt-injection defence, tenant isolation, cost and latency budgets, and an audit trail that survives a compliance review.",
      stack: ["Eval harnesses", "Tracing", "Red-teaming", "PII redaction", "CI"],
    },
    {
      num: "01",
      name: "Data & infrastructure",
      hint: "The part nobody demos",
      headline: "Boring, observable, and yours to operate.",
      detail:
        "Ingestion pipelines, vector and relational stores, deployment into your cloud and your identity provider, monitoring, and cost controls. Handover includes runbooks and a team that can actually run it — the goal is your independence, not a permanent dependency on me.",
      stack: ["Python", "Docker", "AWS / GCP", "Airflow", "Observability"],
    },
  ],
};

/* ------------------------------------------------------ what I build --- */

export const capabilities = {
  eyebrow: "Engineering",
  title: "What I build",
  lede: "Six systems that come up again and again across legal, clinical, industrial and education settings. Different domains, the same engineering problems underneath.",
  items: [
    {
      icon: "workflow",
      title: "Agentic workflow automation",
      body: "Multi-step agents that take a real business process end to end — read the input, call your systems, make the call they’re allowed to make, and escalate the rest. Scoped so the blast radius of a mistake is always known in advance.",
      chips: ["LangGraph", "Tool calling", "MCP"],
    },
    {
      icon: "search",
      title: "Retrieval & document intelligence",
      body: "Search and question-answering over your own document estate, with citations. Contracts, clinical notes, filings, inspection reports — extracted, structured, and made answerable without shipping your data to somebody else’s training set.",
      chips: ["pgvector", "Rerankers", "OCR"],
    },
    {
      icon: "gauge",
      title: "Evaluation & observability",
      body: "The discipline that separates a product from a demo. Golden datasets, offline evals wired into CI, online tracing and drift alerts. You get a number for “is it working” instead of a vibe.",
      chips: ["Eval harnesses", "Tracing", "Golden sets"],
    },
    {
      icon: "cpu",
      title: "Model selection & fine-tuning",
      body: "Benchmarking your actual task across frontier and open-weight models, then routing by cost, latency and accuracy. Fine-tuning and distillation where the maths works out — and an honest “you don’t need this” where it doesn’t.",
      chips: ["LoRA", "vLLM", "Distillation"],
    },
    {
      icon: "shield",
      title: "Security, privacy & guardrails",
      body: "PII detection and redaction, tenant isolation, prompt-injection defence, and audit logging designed for people who will one day be asked to explain a decision. I’ve shipped AI in regulated, high-stakes settings and built for that from day one.",
      chips: ["PII redaction", "Isolation", "Audit trails"],
    },
    {
      icon: "layers",
      title: "Integration & handover",
      body: "It runs in your cloud, behind your SSO, in your CI — not on a laptop under my desk. Every engagement ends with runbooks, architecture docs, and a team I’ve trained to extend it without me.",
      chips: ["AWS / GCP", "SSO", "Runbooks"],
    },
  ],
};

/* ------------------------------------------------------------ about ---- */
/* This block is preserved verbatim from the previous site by request. */

export const about = {
  marquee: [
    "AI Technical Lead — Legal Design Lab, Stanford Law School",
    "Instructor — Stanford Continuing Studies (TECH 43)",
    "Research Affiliate — Value Chain Innovation Initiative, Stanford GSB",
    "3× Forbes-recognised founder (Poland)",
    "170-person company bootstrapped",
    "~$10M revenue, zero outside capital",
    "Granted patent — PL247981B1",
    "Bias in Text Embedding Models — arXiv:2406.12138",
  ],
  title: "I’ve actually run a business — not just advised one.",
  paragraphs: [
    "I’m not a consultant who’s never carried a P&L. I bootstrapped a company from nothing to 170+ people and roughly $10M in revenue — recognised 3× by Forbes in Poland as one of the fastest-growing companies in the country — and I made payroll every single month. That taught me the thing most AI people miss: technology only matters if it moves the business.",
    "Today I lead AI engineering at Stanford Law School, research AI economics at the Stanford GSB, and teach working professionals how to build with — and safely supervise — AI agents. I’ve shipped real AI in regulated, high-stakes settings, including a patented system piloted with clinicians.",
    "So when we work together, you get both halves: someone who can sit across from your executives and talk business, and someone who’ll open the laptop and build the thing. Strategy and execution, from one person.",
  ],
  photos: [
    {
      src: "/assets/Teaching_AI_at_Stanford_CSP_1781543611704-BktDRNav.jpg",
      alt: "Teaching AI at Stanford Continuing Studies",
    },
    {
      src: "/assets/Speaking_at_Stanford_GSB_1781543654823-DjnrncIt.jpg",
      alt: "Panel speaker at Stanford GSB",
    },
    {
      src: "/assets/Speaking_at_Stanford_IT_Conference_1781543884835-TuZP-RYM.jpg",
      alt: "Stanford IT Conference — Agentic Coding",
    },
    {
      src: "/assets/1702346092406_1781039882681-CreCwZNO.jpg",
      alt: "Speaking at PLUGandPLAY, Mountain View",
    },
    {
      src: "/assets/Speaking_at_University_of_Nevada_Las_Vegas_(UNLV)_1781543835166-dkCJ6Z1k.png",
      alt: "18th International Conference on Gambling & Risk Taking, UNLV",
    },
    {
      src: "/assets/Speaking_at_Network_VC_event_1781544156039-CIKeLDQi.jpg",
      alt: "Silicon Valley VC pitch event",
    },
    {
      src: "/assets/Speaking_at_Google_1781544157456-CGH99UCD.jpg",
      alt: "Silicon Valley Google Developer Group",
    },
  ],
  stats: [
    { value: 170, suffix: "+", label: "people hired & managed" },
    { value: "$10M+", label: "revenue bootstrapped" },
    { value: 3, label: "times Forbes recognised" },
    { value: 3, label: "public companies helped" },
  ],
};

/* --------------------------------------------------------- research ---- */
/* Framed around what the public record actually supports: one arXiv
   preprint, one granted patent, the Stanford GSB VCII affiliation, a dated
   writing stream and dated talks. Deliberately NOT laid out as an academic
   publication list — that would be costume, and the record is a preprint,
   not a paper trail. */

export const research = {
  eyebrow: "Research & writing",
  title: "What I’m working out, not just what I’ve shipped",
  lede: "Engineering, research and teaching feed each other here. Teaching forces me to explain what actually works; research keeps me honest about what doesn’t; building keeps both grounded in systems that have to survive real users.",
  cards: [
    {
      kind: "Preprint · arXiv:2406.12138",
      title: "Bias in Text Embedding Models",
      body: "Measuring gender bias in the embedding models that quietly sit under most production retrieval systems. If your RAG stack ranks with a biased encoder, the bias is in your product whether or not it is in your prompt.",
      meta: "Rakivnenko, Maslej, Cervi, Zhukov · June 2024",
      href: "https://arxiv.org/abs/2406.12138",
    },
    {
      kind: "Patent · PL247981B1",
      title: "Remote control of alcohol content in exhaled air",
      body: "A remote breath-alcohol monitoring system for workplace access control: wireless breathalyser, CNN-based face recognition and device identification, biometric 3D authentication, GPS and timestamping. Filed March 2021, granted September 2025.",
      meta: "Granted PL247981B1 · EP4060527A1 · piloted with clinicians",
      href: "https://patents.google.com/patent/PL247981B1/en",
    },
    {
      kind: "Affiliation",
      title: "Value Chain Innovation Initiative",
      body: "Research affiliate at the Stanford Graduate School of Business since 2024, looking at where AI actually lands in a value chain — which steps it absorbs, which it merely reshuffles, and why measured gains keep diverging from pilot results.",
      meta: "Stanford GSB · 2024–present",
      href: "",
    },
  ],

  writingTitle: "Writing",
  writingNote: "Benchmarks, reproductions and post-mortems — mostly the things that surprised me.",
  writing: [
    {
      date: "Dec 2025",
      title:
        "Deep Compression, 2015: How Much More Can We Squeeze in 2025?",
      where: "Towards AI",
      href: "https://medium.com/@rakivnenko",
    },
    {
      date: "Nov 2025",
      title:
        "How a Simple Python Script Outran GPT-5 and Other State-of-the-Art Vision LLMs on a Legal OCR Task",
      where: "Data Science Collective",
      href: "https://medium.com/@rakivnenko",
    },
    {
      date: "Sep 2025",
      title:
        "A 1989 ConvNet: What’s Changed Since Karpathy Updated LeCun’s 33-Year-Old Code",
      where: "GenerativeAI.pub",
      href: "https://medium.com/@rakivnenko",
    },
    {
      date: "Aug 2025",
      title: "Why LLMs Fail When It Actually Matters (And How to Fix It)",
      where: "Medium",
      href: "https://medium.com/@rakivnenko",
    },
    {
      date: "Jul 2025",
      title:
        "Best Vision-Enabled LLMs for Data Extraction: Cost–Performance Benchmark",
      where: "Legal Design and Innovation",
      href: "https://medium.com/@rakivnenko",
    },
    {
      date: "Nov 2024",
      title:
        "Optimizing Truck Load Matching with the Average Nearest Neighbor Algorithm",
      where: "Medium",
      href: "https://medium.com/@rakivnenko",
    },
    {
      date: "Oct 2024",
      title:
        "Toward Responsible AI: Uncovering Gender Bias in Leading Embedding Models",
      where: "Forbes",
      href: "https://www.forbes.com/councils/forbesbusinessdevelopmentcouncil/2024/10/01/toward-responsible-ai-uncovering-gender-bias-in-leading-embedding-models/",
    },
    {
      date: "Apr 2024",
      title:
        "Comparing Diagnostic Capabilities of Vision AI Models in Dermatology",
      where: "Medium",
      href: "https://medium.com/@rakivnenko",
    },
    {
      date: "Jan 2024",
      title: "Implement AI as an Employee",
      where: "Forbes",
      href: "https://councils.forbes.com/profile/Vasyl-Rakivnenko-AI-Technical-Lead-Stanford-University/0ff2e6b1-8d15-409b-a76c-be51bfa367c7",
    },
    {
      date: "Nov 2023",
      title: "Build Nearly Any AI Solution with These 5 Models",
      where: "Medium",
      href: "https://medium.com/@rakivnenko",
    },
  ],

  talksTitle: "Talks",
  talks: [
    {
      venue: "Nov 2025",
      title: "AI and Access to Justice Summit 2025",
      where: "Stanford Legal Design Lab, Stanford Law School",
      href: "https://conferences.law.stanford.edu/ai-a2j-2025/",
    },
    {
      venue: "May 2023",
      title:
        "Keynote panel — The Future of Gambling: How Artificial Intelligence Will Change the Way We Gamble",
      where:
        "18th International Conference on Gambling & Risk Taking, UNLV International Gaming Institute",
      href: "https://www.unlv.edu/sites/default/files/media/document/2023-05/18-ConfProgram-508.pdf",
    },
    {
      venue: "Stanford",
      title: "Agentic coding",
      where: "Stanford IT Conference",
      href: "",
    },
    {
      venue: "Google",
      title: "Building production AI systems",
      where: "Silicon Valley Google Developer Groups",
      href: "",
    },
    {
      venue: "FH Graubünden",
      title: "Guest lecture",
      where: "Zurich University of Applied Sciences of the Grisons",
      href: "",
    },
    {
      venue: "Plug and Play",
      title: "AI adoption in the enterprise",
      where: "Plug and Play Tech Center, Mountain View",
      href: "",
    },
  ],
};

/* -------------------------------------------------------- portfolio ---- */
/* Entry shape is deliberately compressed: title, an explicit ROLE, one
   sentence of mechanism, one number. Labelled Problem/Approach/Outcome
   blocks are a consulting layout; this is how engineers list work.

   Every entry below is anchored to something public — a repo, a paper, a
   patent, a course listing, a conference programme. Where a `metric` is
   soft, that's the honest state of the record; swap in a real number the
   moment you have one you can stand behind. */

export const projects = [
  {
    sector: "legal",
    title: "Expungement eligibility screening",
    role: "AI Technical Lead",
    org: "Legal Design Lab, Stanford Law School",
    years: "Current",
    one: "Screening whether a criminal record qualifies for expungement — a rules-heavy, high-stakes eligibility problem where a confident wrong answer costs someone their record clearance.",
    metric: "Access-to-justice tooling, built where the eligibility rules actually live",
    stack: ["Python", "Rules + LLM", "Legal NLP", "Evals"],
    links: [
      {
        label: "Repo",
        href: "https://github.com/vasylrakivnenko/expungement",
      },
    ],
  },
  {
    sector: "legal",
    title: "Vision-LLM benchmark for legal document extraction",
    role: "Author / Engineer",
    org: "Legal Design Lab · published benchmark",
    years: "2025",
    one: "Benchmarked frontier vision models against each other — and against a plain Python script — on a real legal OCR task, on both cost and accuracy.",
    metric: "The simple script beat GPT-5-class vision models on the task",
    stack: ["Vision LLMs", "OCR", "Benchmarking", "Cost analysis"],
    links: [
      { label: "Write-up", href: "https://medium.com/@rakivnenko" },
      { label: "Repo", href: "https://github.com/vasylrakivnenko/pixxel-ocr" },
    ],
  },
  {
    sector: "healthtech",
    title: "Remote breath-alcohol monitoring (Alko Prevent)",
    role: "Founder / Inventor",
    org: "Patent PL247981B1 granted · clinical pilot",
    years: "2021–2025",
    one: "A wireless breathalyser with CNN face recognition, 3D biometric authentication, device identification and GPS timestamping — so a remote test can actually be trusted to belong to the right person at the right moment.",
    metric: "Granted patent; piloted in transplant-qualification abstinence monitoring",
    stack: ["CNN", "Face recognition", "IoT", "Biometrics"],
    links: [
      {
        label: "Patent",
        href: "https://patents.google.com/patent/PL247981B1/en",
      },
    ],
  },
  {
    sector: "other",
    title: "Bias in text embedding models",
    role: "First author",
    org: "arXiv:2406.12138 · with N. Maslej, J. Cervi, V. Zhukov",
    years: "2024",
    one: "Measured gender bias in the embedding models sitting underneath most production retrieval stacks — then followed it into rerankers, which is where ranking bias actually bites.",
    metric: "Preprint + Forbes write-up + open follow-on work on rerankers",
    stack: ["Embeddings", "Rerankers", "Evaluation", "Fairness"],
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2406.12138" },
      {
        label: "Rerankers repo",
        href: "https://github.com/vasylrakivnenko/bias_in_rerankers",
      },
    ],
  },
  {
    sector: "edutech",
    title: "TECH 43 — Supervising AI Coding Agents",
    role: "Instructor",
    org: "Stanford Continuing Studies",
    years: "2026",
    one: "A two-day on-campus course on a practical supervise-and-verify workflow: coding agents will write the application, so the skill that matters is deciding how much of it to trust.",
    metric: "Running Spring and Fall 2026 · enrolment capped at 55",
    stack: ["Coding agents", "Verification", "Curriculum"],
    links: [
      {
        label: "Course",
        href: "https://continuingstudies.stanford.edu/courses/detail/20261_TECH-43",
      },
    ],
  },
  {
    sector: "transportation",
    title: "Truck load matching, and the company underneath it",
    role: "Co-founder & CEO",
    org: "Servired Sp. z o.o., Warsaw · international road freight",
    years: "2011–",
    one: "Bootstrapped an international road-freight operation with its own fleet, then applied nearest-neighbour matching to the load-assignment problem that was eating the dispatch desk.",
    metric: "170+ people · ~$10M revenue · Forbes Diamonds 2020 & 2021",
    stack: ["Optimisation", "Nearest neighbour", "Logistics", "P&L"],
    links: [{ label: "Write-up", href: "https://medium.com/@rakivnenko" }],
  },
];

/* -------------------------------------------------------------- now ---- */
/* A /now block: what has my attention, dated. Cheap to keep current and the
   single clearest signal that a site belongs to someone still building.
   Update the date whenever you edit the items. */

export const now = {
  updated: "September 2026",
  items: [
    "Leading AI engineering at the Stanford Legal Design Lab — retrieval and agent systems in a domain where a 95%-right answer is a liability, not a win.",
    "Teaching TECH 43, Supervising AI Coding Agents, at Stanford Continuing Studies this Spring and Fall.",
    "Following the embedding-bias work into rerankers, which is where ranking bias actually reaches the user.",
    "Benchmarking vision models on real document-extraction tasks — and publishing the cases where the boring baseline wins.",
  ],
};

/* ---------------------------------------------------------- contact ---- */

export const contact = {
  title: "Tell me what’s slow, manual, or unreliable.",
  body: "I’ll tell you honestly whether AI is the right tool for it — and if it is, what the highest-value place to start looks like and roughly what it takes to build. Thirty minutes, no deck, no obligation.",
  cta: "Book a call",
};

/* ---------------------------------------------------------- sectors ---- */

export const sectors = [
  {
    slug: "legal",
    label: "Legal",
    desc: "Contracts & research",
    name: "Legal",
    tagline:
      "Contract review in minutes, not days. Research that goes deeper, faster. Compliance monitoring that doesn’t miss anything.",
    intro:
      "Legal is a high-value, high-trust domain where AI has been making real inroads — and where the quality bar is non-negotiable. The goal isn’t to replace legal judgment. It’s to remove the hours of lower-value work that sit between your team and the decisions that actually require their expertise. This is also where I spend most of my week: I lead AI engineering at Stanford Law School.",
    stat: { value: "First review", label: "in minutes instead of days" },
    challenges: [
      "Contract review and redlining that consumes associate time at partner billing rates",
      "Legal research that is thorough but slow when deals move fast",
      "Compliance monitoring across a large document estate that nobody has time to read",
      "Matter intake and triage that creates bottlenecks at the front door",
      "Knowledge management where precedents live in email threads and people’s heads",
    ],
    opportunities: [
      {
        title: "Contract Intelligence",
        body: "AI that reads, extracts key clauses, flags non-standard terms, and drafts redlines against your playbook. First review in minutes, not days.",
      },
      {
        title: "Legal Research Acceleration",
        body: "Retrieval grounded in your jurisdiction’s case law, firm precedents, and regulatory guidance — surfacing relevant materials faster and more completely than manual search, with citations attached.",
      },
      {
        title: "Compliance Monitoring",
        body: "Continuously scan contracts, policies, and communications against regulatory requirements — alerting your team to exposure before it becomes a problem.",
      },
      {
        title: "Matter Intake & Triage",
        body: "Automate initial classification and routing of incoming matters so your team spends less time on intake and more on work that requires their expertise.",
      },
    ],
  },
  {
    slug: "healthtech",
    label: "Healthtech",
    desc: "Clinical & compliance",
    name: "Healthtech",
    tagline:
      "AI that works inside clinical and regulatory constraints — not around them.",
    intro:
      "Healthcare AI has enormous potential and genuine complexity. Regulatory requirements, data privacy obligations, and the stakes of clinical decision support demand an engineer who has shipped in regulated environments before and understands that a wrong output here has consequences well beyond a bad customer experience. I hold a patent on an AI system piloted with clinicians.",
    stat: { value: "30–50%", label: "reduction in clinician documentation time" },
    challenges: [
      "Clinical documentation that takes more time than the patient encounter itself",
      "Referral and prior-authorisation workflows that delay care and frustrate teams",
      "Patient communication that doesn’t scale as caseloads grow",
      "Unstructured data in clinical notes that never gets turned into actionable insight",
      "Privacy and compliance requirements that slow every AI initiative to a crawl",
    ],
    opportunities: [
      {
        title: "Clinical Documentation AI",
        body: "Ambient documentation or AI-assisted note drafting that cuts clinician documentation time substantially — keeping them with the patient, not staring at a screen.",
      },
      {
        title: "Referral & Auth Automation",
        body: "Pre-populate referral forms, flag missing information, and track authorisation status — reducing admin burden and speeding care delivery.",
      },
      {
        title: "Patient Communication",
        body: "Automate reminders, post-visit follow-up, and routine triage questions through AI-powered messaging — with human escalation built in by design, not bolted on.",
      },
      {
        title: "PII-Safe Data Extraction",
        body: "Extract structured insight from unstructured clinical notes with PII detection and redaction in the pipeline. Intelligence without compromising privacy.",
      },
    ],
  },
  {
    slug: "mining",
    label: "Mining",
    desc: "Ops & safety AI",
    name: "Mining",
    tagline:
      "Safer operations, better ore recovery, and equipment that tells you when it needs maintenance — before it fails.",
    intro:
      "Mining is one of the highest-stakes environments to deploy AI — and one of the highest-return. Predictive maintenance alone can pay back an entire engagement in the first quarter. The engineering challenge is deploying models that integrate with your existing sensor data, SCADA systems, and shift reporting without disrupting operations.",
    stat: {
      value: "Q1",
      label: "typical payback period from predictive maintenance alone",
    },
    challenges: [
      "Unplanned equipment downtime that costs tens of thousands of dollars per hour",
      "Manual shift reports and safety checklists that produce data nobody actually reads",
      "Grade variability causing suboptimal processing and lower recovery rates",
      "Environmental compliance reporting that is slow, error-prone, and always urgent",
      "Experienced operators retiring and taking decades of intuition with them",
    ],
    opportunities: [
      {
        title: "Predictive Maintenance",
        body: "Vibration, temperature, and operational telemetry used to predict failures 48–72 hours ahead. Stop replacing parts on a calendar — replace them when the data says to.",
      },
      {
        title: "Ore Grade Optimisation",
        body: "Models on real-time grade data that dynamically adjust blending and processing parameters, improving recovery without additional throughput.",
      },
      {
        title: "Safety & Compliance AI",
        body: "Analyse shift reports, near-miss logs, and inspection records to surface patterns before they become incidents — and generate compliance reports from structured operational data.",
      },
      {
        title: "Knowledge Capture",
        body: "Retrieval systems that preserve the decision-making logic of senior operators, making it searchable for the next generation of your workforce.",
      },
    ],
  },
  {
    slug: "edutech",
    label: "Edutech",
    desc: "Learning at scale",
    name: "Edutech",
    tagline:
      "Personalised learning at scale, smarter content pipelines, and student support that never sleeps.",
    intro:
      "Education technology sits at an interesting intersection: enormous amounts of content, high expectations for personalisation, and learners with wildly different needs and schedules. AI doesn’t replace good pedagogy — it makes it possible to deliver that pedagogy to ten times more learners without ten times more staff. I teach at Stanford Continuing Studies, so I build this from both sides.",
    stat: {
      value: "10×",
      label: "more learners served without proportionally more staff",
    },
    challenges: [
      "Content creation too slow and expensive to keep pace with curriculum updates",
      "Student engagement dropping off after the first week because the experience isn’t adaptive",
      "Support and tutoring that only works during business hours",
      "Assessment design that takes far longer than it should to produce and grade",
      "Analytics dashboards that show what happened but not what to do about it",
    ],
    opportunities: [
      {
        title: "Adaptive Learning Paths",
        body: "Learner performance data used to dynamically adjust content difficulty, pacing, and format — so every student gets an experience that fits where they actually are.",
      },
      {
        title: "AI Tutoring & Support",
        body: "Retrieval-based tutoring grounded in your curriculum that gives learners accurate, contextual help at any hour — with escalation to human instructors for complex cases.",
      },
      {
        title: "Content & Assessment Generation",
        body: "Accelerate curriculum development with tools that draft lesson summaries, quiz questions, and rubrics — reviewed by your instructional designers, not replaced by them.",
      },
      {
        title: "Predictive Intervention",
        body: "Identify at-risk students before they drop out using engagement and performance signals, so support reaches the right people at the right moment.",
      },
    ],
  },
  {
    slug: "freight-forwarding",
    label: "Freight Forwarding",
    desc: "Logistics & customs",
    name: "Freight Forwarding",
    tagline:
      "Cut documentation time, predict delays before they cost you, and automate the paper trail.",
    intro:
      "Freight forwarding runs on paperwork, relationships, and razor-thin margins. AI doesn’t replace your expertise — it removes the friction that slows it down. From document extraction to predictive delay alerts, the right systems free your team to focus on the shipments that actually need human judgment.",
    stat: {
      value: "70–90%",
      label: "reduction in manual document processing",
    },
    challenges: [
      "Hours lost manually processing Bills of Lading, AWBs, and customs documents",
      "No early warning system for port congestion, carrier delays, or compliance flags",
      "Customer service teams buried in status-update emails instead of exception handling",
      "Quoting accuracy suffering because rate data lives in too many places",
      "Compliance exposure from manual HTS classification and documentation review",
    ],
    opportunities: [
      {
        title: "Document Intelligence",
        body: "Automatically extract, classify, and validate shipping documents. Cut manual data entry sharply and catch errors before they become customs holds.",
      },
      {
        title: "Delay Prediction & Alerts",
        body: "Models trained on your historical shipment data that surface at-risk cargo before the customer calls you. Proactive beats reactive every time.",
      },
      {
        title: "Customer Status Automation",
        body: "Connect your TMS to an AI layer that drafts proactive status updates, answers routine tracking queries, and escalates only the exceptions.",
      },
      {
        title: "Rate Intelligence",
        body: "Aggregate carrier rates, spot market signals, and margin data into one view so your team quotes with confidence and speed.",
      },
    ],
  },
  {
    slug: "transportation",
    label: "Transportation",
    desc: "Fleet & routing",
    name: "Transportation",
    tagline:
      "Smarter routing, leaner fuel spend, and a dispatch operation that gets more done with the same fleet.",
    intro:
      "Transportation is a data-rich environment where most companies are still making decisions with yesterday’s numbers. AI can compress that lag — putting real-time traffic, weather, load, and driver data into a single operational picture so dispatchers make better decisions faster.",
    stat: {
      value: "8–15%",
      label: "fuel cost reduction without replacing a single vehicle",
    },
    challenges: [
      "Route planning that doesn’t account for real-time conditions until it’s too late",
      "Fuel costs that swing unpredictably because consumption isn’t properly monitored",
      "Driver scheduling that leaves capacity on the table or burns out your best people",
      "Fleet maintenance on a calendar instead of on actual vehicle condition",
      "Customer ETAs that are guesses dressed up as commitments",
    ],
    opportunities: [
      {
        title: "Dynamic Route Optimisation",
        body: "Move from static route plans to adaptive routing that responds to traffic, weather, load changes, and delivery windows in real time.",
      },
      {
        title: "Fuel & Emissions Intelligence",
        body: "Monitor driving behaviour and load efficiency to reduce fuel spend meaningfully — without replacing a single vehicle.",
      },
      {
        title: "Predictive Fleet Maintenance",
        body: "Connect telematics to maintenance scheduling to extend vehicle life and eliminate surprise breakdowns that strand loads.",
      },
      {
        title: "ETA Accuracy",
        body: "Replace guesswork with model-based arrival predictions built on historical patterns, current conditions, and driver behaviour — communicated automatically.",
      },
    ],
  },
  {
    slug: "other",
    label: "Other",
    desc: "Any industry",
    name: "Other Sectors",
    tagline:
      "If your industry isn’t listed, that doesn’t mean AI doesn’t apply — it means I haven’t written the page yet.",
    intro:
      "AI adoption follows the same pattern across virtually every industry: there’s a set of high-volume, high-friction workflows that consume expert time without requiring expert judgment, and there’s a set of decisions where better data would lead to meaningfully better outcomes. The engineering underneath is the same six layers every time.",
    stat: {
      value: "Every",
      label: "industry has a high-ROI AI starting point",
    },
    challenges: [
      "High-volume repetitive tasks that consume your best people’s time",
      "Decisions being made on incomplete or delayed data",
      "Customer-facing processes that don’t scale with demand",
      "Compliance or reporting requirements that are mostly manual",
      "Institutional knowledge that lives in people’s heads, not in systems",
    ],
    opportunities: [
      {
        title: "Process Automation",
        body: "Identify the workflows that are high-volume, rule-based, and currently done by hand. These are almost always the highest-return starting points.",
      },
      {
        title: "Decision Intelligence",
        body: "Systems that surface the right information at the right moment — so the people making decisions have what they need without spending an hour finding it.",
      },
      {
        title: "Customer Experience at Scale",
        body: "AI-assisted support, onboarding, and communication that handles routine interactions well and routes complex cases to humans who can actually help.",
      },
      {
        title: "Let’s Talk",
        body: "Tell me about your business and the friction you’re feeling. I’ll tell you honestly whether AI is the right tool — and if it is, what the highest-value starting point looks like.",
      },
    ],
  },
];
