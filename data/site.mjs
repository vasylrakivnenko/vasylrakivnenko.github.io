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

export const nav = [
  { href: "#about", label: "About me" },
  { href: "#work", label: "Portfolio" },
  { href: "#research", label: "Research & Blog" },
  { href: "/cv/", label: "My CV" },
];

/* --------------------------------------------------------- the hero ---- */

export const hero = {
  eyebrow: "AI Engineering and Leadership · Silicon Valley",
  headline: "AI is the new electricity.",
  headlineAccent: "Don’t let your business run in the dark.",
  lede: "I build enterprise AI solutions to automate workflows and boost productivity.",
  // Only tools that appear in work you've actually shown me.
  stack: ["python", "flask", "postgres", "pydantic", "claude + gpt", "cloud run"],
  // Credential chips used to sit here. With the About block now directly
  // below the hero, they repeated its ticker within one scroll, so the hero
  // ends on the stack line instead. To bring them back, restore a `chips`
  // array here and re-add the `.hero__chips` div in build.mjs heroSection().
  image: {
    src: "/assets/1702346092406_1781039882681-CreCwZNO.jpg",
    alt: "Vasyl Rakivnenko speaking at Stanford",
  },
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
    { value: 11, label: "years in tech & business leadership" },
  ],
};

/* ------------------------------------------------- research & blog ----- */
/* One dated stream. Papers, the patent and the blog in the same list, tagged
   by kind — an engineer's output is one body of work, not three sections. */

export const research = {
  title: "Research & Blog",
  lede: "Papers, a patent, and write-ups of the things that surprised me — benchmarks, reproductions, post-mortems.",
  items: [
    {
      kind: "Paper",
      date: "Jun 2024",
      title: "Bias in Text Embedding Models",
      where: "arXiv:2406.12138 · with N. Maslej, J. Cervi, V. Zhukov",
      href: "https://arxiv.org/abs/2406.12138",
    },
    {
      kind: "Patent",
      date: "Sep 2025",
      title: "Method for remote control of alcohol content in exhaled air",
      where: "PL247981B1 granted · EP4060527A1",
      href: "https://patents.google.com/patent/PL247981B1/en",
    },
  ],
  blog: [
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
};

/* ---------------------------------------------------------- contact ---- */

export const contact = {
  title: "Tell me what’s slow, manual, or unreliable.",
  body: "I’ll tell you honestly whether AI is the right tool for it — and if it is, what the highest-value place to start looks like and roughly what it takes to build. Thirty minutes, no deck, no obligation.",
  cta: "Book a call",
};
