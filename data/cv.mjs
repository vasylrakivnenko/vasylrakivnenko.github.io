/* ==========================================================================
   /cv/ content.

   The web page is the source of truth — "Save as PDF" prints it through
   assets/cv.css, so the PDF can never drift out of date. Bump `updated`
   whenever you edit this file.

   Everything here is anchored to a public source: Stanford Profiles, the
   Stanford Law and Continuing Studies course listings, Google Patents,
   arXiv, the UNLV conference programme, the Polish company register, and
   your own GitHub. TODO markers show the handful of gaps I could not close
   from public records — mostly exact start dates.
   ========================================================================== */

export const cv = {
  updated: "September 2026",

  headline: "AI Engineer · Enterprise AI Systems",

  summary:
    "I build enterprise AI systems that run in production: agentic workflows, citation-grounded retrieval, evaluation harnesses, and the infrastructure underneath them. I lead AI engineering at Stanford Law School’s Legal Design Lab, hold a research affiliation with the Value Chain Innovation Initiative at the Stanford GSB, and teach Stanford Continuing Studies students how to supervise AI coding agents. Before Stanford I co-founded and ran an international road-freight company in Poland — Forbes Diamonds 2020 and 2021 — which is why I judge every system by what it changes in the business, not by how it demos.",

  contact: [
    {
      label: "Email",
      value: "vasyl@stanford.edu",
      href: "mailto:vasyl@stanford.edu",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/rakivnenkov",
      href: "https://www.linkedin.com/in/rakivnenkov",
    },
    {
      label: "GitHub",
      value: "github.com/vasylrakivnenko",
      href: "https://github.com/vasylrakivnenko",
    },
    {
      label: "Scholar",
      value: "Google Scholar",
      href: "https://scholar.google.com/citations?user=nCEO29EAAAAJ",
    },
    {
      label: "Web",
      value: "vasylrakivnenko.github.io",
      href: "https://vasylrakivnenko.github.io/",
    },
  ],

  sections: [
    {
      title: "Experience",
      entries: [
        {
          when: "Current", // TODO: add start year
          title: "AI Technical Lead",
          org: "Legal Design Lab, Stanford Law School",
          body: "AI engineering owned end to end — architecture, build, evaluation and rollout — in a domain where a partially correct answer is a liability rather than a partial win.",
          bullets: [
            "Expungement eligibility screening: a rules-heavy, high-stakes classification problem where a confident wrong answer costs someone their record clearance.",
            "Legal-aid applications (LAFLA) and document-extraction pipelines for access-to-justice work.",
            "Published a cost–performance benchmark of vision-enabled LLMs on real legal OCR, including the case where a plain Python script beat the frontier models.",
            "Retrieval that carries its sources, and evaluation harnesses that surface regressions before a user meets them.",
          ],
          chips: [
            "Python",
            "Retrieval",
            "Vision LLMs",
            "Evals",
            "Legal NLP",
          ],
        },
        {
          when: "2024 – present",
          title: "Research Affiliate",
          org: "Value Chain Innovation Initiative, Stanford Graduate School of Business",
          body: "Research on where AI actually lands in a value chain — which steps it absorbs, which it merely reshuffles, and why measured productivity gains keep diverging from pilot results.",
        },
        {
          when: "2026", // Spring and Fall 2026 catalogues
          title: "Instructor — TECH 43, Supervising AI Coding Agents",
          org: "Stanford Continuing Studies",
          body: "A two-day on-campus course teaching a practical supervise-and-verify workflow: coding agents will write the application, so the skill that matters is deciding how much of the output to trust. Spring and Fall 2026 catalogues; enrolment capped at 55.",
          chips: ["Coding agents", "Verification", "Curriculum design"],
        },
        {
          when: "TODO: years",
          title: "Founder & CEO",
          org: "IngestAI Labs, Inc. — Palo Alto, CA",
          body: "TODO: one or two lines on what IngestAI built and what came of it. Worth stating plainly either way — a closed venture described honestly reads better than a gap.",
        },
        {
          when: "2020 – present",
          title: "President of the Board",
          org: "Aidlermedia Sp. z o.o. — Warsaw",
          body: "Assignee of the granted patent PL247981B1 covering remote breath-alcohol monitoring.",
        },
        {
          when: "2011 – present", // company registered 2011; transport activity from 2005
          title: "Co-founder & CEO",
          org: "Servired Sp. z o.o. — Warsaw · international road freight",
          body: "Built and ran an international road-freight operation with its own taut-liner fleet, bootstrapped with no outside capital.",
          bullets: [
            "Grew to 170+ full-time employees and roughly $10M in revenue (company-reported).",
            "Forbes Diamonds (Diamenty Forbesa — Poland’s fastest-growing companies): 2020 and 2021. Forbes Poland Family Business ranking: 2018.",
            "Applied nearest-neighbour matching to the load-assignment problem consuming the dispatch desk.",
          ],
          chips: ["P&L ownership", "Scaling", "Logistics", "Optimisation"],
        },
      ],
    },
    {
      title: "Research",
      note: "One preprint, one granted patent. Listed as such rather than dressed up as a publication record.",
      entries: [
        {
          when: "Jun 2024",
          title: "Bias in Text Embedding Models",
          org: "arXiv:2406.12138 — with N. Maslej, J. Cervi, V. Zhukov",
          body: "Measuring gender bias in the embedding models that sit underneath most production retrieval systems. Follow-on work on bias in rerankers is public on GitHub.",
        },
      ],
    },
    {
      title: "Patents",
      entries: [
        {
          when: "Granted 2025",
          title:
            "Method for remote control of alcohol content in exhaled air",
          org: "PL247981B1 (Poland) · family member EP4060527A1 · assignee Aidlermedia Sp. z o.o.",
          body: "Remote breath-alcohol monitoring for workplace access control: wireless breathalyser, deep CNN facial recognition and device identification, 3D biometric authentication, continuous retraining, GPS and timestamping. Filed 15 March 2021, granted 22 September 2025.",
          bullets: [
            "Used in clinical trials monitoring abstinence for liver-transplant qualification, Department of General and Transplantation Surgery, Medical University of Warsaw. TODO: confirm before citing publicly — this is well sourced but second-hand.",
          ],
          chips: ["CNN", "Biometrics", "IoT", "Regulated deployment"],
        },
      ],
    },
    {
      title: "Selected writing",
      note: "Full stream on the home page. TODO: swap the Medium links for per-article URLs.",
      entries: [
        {
          when: "Nov 2025",
          title:
            "How a Simple Python Script Outran GPT-5 and Other State-of-the-Art Vision LLMs on a Legal OCR Task",
          org: "Data Science Collective",
        },
        {
          when: "Sep 2025",
          title:
            "A 1989 ConvNet: What’s Changed Since Karpathy Updated LeCun’s 33-Year-Old Code",
          org: "GenerativeAI.pub",
        },
        {
          when: "Jul 2025",
          title:
            "Best Vision-Enabled LLMs for Data Extraction: Cost–Performance Benchmark",
          org: "Legal Design and Innovation",
        },
        {
          when: "Oct 2024",
          title:
            "Toward Responsible AI: Uncovering Gender Bias in Leading Embedding Models",
          org: "Forbes",
        },
      ],
    },
    {
      title: "Selected talks",
      entries: [
        {
          when: "Nov 2025",
          title: "AI and Access to Justice Summit 2025",
          org: "Stanford Legal Design Lab, Stanford Law School",
        },
        {
          when: "May 2023",
          title:
            "Keynote panel — The Future of Gambling: How Artificial Intelligence Will Change the Way We Gamble",
          org: "18th International Conference on Gambling & Risk Taking, UNLV International Gaming Institute",
        },
        {
          when: "TODO: date",
          title: "Agentic coding",
          org: "Stanford IT Conference",
        },
        {
          when: "TODO: date",
          title: "Guest lecture",
          org: "Zurich University of Applied Sciences of the Grisons (FH Graubünden)",
        },
        {
          when: "TODO: date",
          title: "Building production AI systems",
          org: "Silicon Valley Google Developer Groups",
        },
      ],
    },
    {
      title: "Education",
      entries: [
        {
          when: "2023",
          title: "Stanford Executive Program",
          org: "Stanford Graduate School of Business",
        },
        {
          when: "2020",
          title: "MBA, Business Administration",
          org: "Kozminski University, Warsaw",
        },
        {
          when: "2011",
          title: "BA, Business Administration",
          org: "Mondragon University, Spain",
        },
      ],
    },
  ],

  aside: [
    {
      title: "Core stack",
      chips: [
        "Python",
        "TypeScript",
        "PyTorch",
        "LangGraph",
        "MCP",
        "pgvector",
        "Postgres",
        "Docker",
        "AWS",
        "GCP",
        "Airflow",
        "vLLM",
      ],
    },
    {
      title: "Systems I build",
      items: [
        "Agentic workflow automation",
        "Retrieval & document intelligence",
        "Evaluation & observability",
        "Model routing & fine-tuning",
        "Privacy, security & guardrails",
        "Deployment & handover",
      ],
    },
    {
      title: "Domains",
      items: [
        "Legal & access to justice",
        "Healthtech & regulated deployment",
        "Logistics & transportation",
        "Education",
      ],
    },
    {
      title: "Recognition",
      items: [
        "Forbes Diamonds — 2020, 2021",
        "Forbes Poland Family Business — 2018",
        "Granted patent PL247981B1",
        "170+ people hired and managed",
      ],
    },
  ],
};
