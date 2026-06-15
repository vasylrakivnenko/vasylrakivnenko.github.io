import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import stanfordLogo from "@assets/block-s-right_1781549815899.avif";
import teachingImg from "@assets/Teaching_AI_at_Stanford_CSP_1781543611704.jpg";
import gsbImg from "@assets/Speaking_at_Stanford_GSB_1781543654823.jpg";
import unlvImg from "@assets/Speaking_at_University_of_Nevada_Las_Vegas_(UNLV)_1781543835166.png";
import stanfordITImg from "@assets/Speaking_at_Stanford_IT_Conference_1781543884835.jpg";
import vcEventImg from "@assets/Speaking_at_Network_VC_event_1781544156039.jpg";
import googleImg from "@assets/Speaking_at_Google_1781544157456.jpg";

const photos = [
  { src: teachingImg, caption: "Teaching AI at Stanford Continuing Studies", venue: "Stanford University" },
  { src: gsbImg, caption: "Panel speaker at Stanford GSB", venue: "Stanford Graduate School of Business" },
  { src: stanfordITImg, caption: "Stanford IT Conference — Agentic Coding", venue: "Stanford University" },
  { src: unlvImg, caption: "18th International Conference on Gambling & Risk Taking", venue: "University of Nevada Las Vegas (UNLV)" },
  { src: vcEventImg, caption: "Silicon Valley VC pitch event", venue: "Silicon Valley" },
  { src: googleImg, caption: "Silicon Valley Google Developer Group", venue: "Google, Mountain View" },
];

const stanfordRoles = [
  {
    title: "AI Technical Lead",
    org: "Stanford Law School — IT, Legal Design Lab",
    detail: "Agentic AI systems, RAG pipelines, document intelligence, PII detection & redaction, LLM customization, and applied ML. Also AI Technical Assistant for LAW 809E (AI for Legal Help).",
  },
  {
    title: "Instructor",
    org: "Stanford Continuing Studies",
    detail: '"Supervising AI Coding Agents" (TECH 43) — teaching professionals to evaluate, manage, and safely supervise autonomous coding tools.',
  },
  {
    title: "Research Affiliate",
    org: "Stanford GSB — Value Chain Innovation Initiative",
    detail: "Research with Prof. Haim Mendelson on LLM performance, pricing dynamics, and model quality-cost tradeoffs.",
  },
];

const INTERVAL = 5000;

export function Credentials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number, dir = 1) => {
      setDirection(dir);
      setCurrent((index + photos.length) % photos.length);
    },
    []
  );

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  const variants = {
    enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: -dir * 60, opacity: 0 }),
  };

  return (
    <section id="credentials" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header + bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="max-w-3xl text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>From in production and driving CDL trucks to building a company with $10M in sales, to working at the intersection of AI and some of the most rigorous institutions in the world.</p>
              <p>
                I believe the best AI work comes from people who understand both the technology and the human systems around it. That means staying curious, staying honest about what AI can and cannot do, and building things that are genuinely useful.
              </p>
            </div>
          </motion.div>

          {/* Stanford block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
          >
            {/* Stanford header bar */}
            <div className="flex items-center gap-4 px-8 py-5 border-b border-border bg-[#8C1515]/5">
              <div className="flex items-center gap-3">
                <img
                  src={stanfordLogo}
                  alt="Stanford University"
                  className="h-[58px] w-auto shrink-0"
                />
                <div>
                  <p className="font-bold text-lg leading-tight" style={{ color: "#8C1515" }}>Stanford University</p>
                  <p className="text-xs text-muted-foreground font-medium">Three concurrent roles</p>
                </div>
              </div>
            </div>

            {/* Roles */}
            <div className="divide-y divide-border">
              {stanfordRoles.map((role, i) => (
                <div key={i} className="px-8 py-6 md:flex md:gap-8">
                  <div className="md:w-56 shrink-0 mb-2 md:mb-0">
                    <p className="font-semibold text-foreground">{role.title}</p>
                    <p className="text-sm text-primary font-medium mt-0.5">{role.org}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{role.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Field experience paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 rounded-2xl border border-border bg-card shadow-sm px-8 py-6"
          >
            <p className="font-semibold text-foreground mb-2">Other AI Projects & Consulting</p>
            <p className="text-muted-foreground text-sm leading-relaxed">Led an AI and digital transformation program at PT Amman Mineral — one of the world's largest copper and gold mining companies — was working alongside consulting companies like McKinsey and FTI Consulting. Prior to that, built a logistics company from scratch to $10M+ in revenue. Five-plus years of AI consulting and development across mining, healthtech, edtech, logistics, and legal — independently and with major consulting firms — providing a cross-industry lens most advisors lack.</p>
          </motion.div>

          {/* Advisors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-16 rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
          >
            <div className="px-8 py-5 border-b border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Advisors</p>
            </div>
            <div className="divide-y divide-border">
              {[
                {
                  name: "Haim Mendelson",
                  title: "Kleiner Perkins Caufield & Byers Professor of Electronic Business and Commerce and Management",
                  org: "Stanford Graduate School of Business",
                },
                {
                  name: "Alexander Soroka",
                  title: "Managing Partner",
                  org: "Network VC",
                },
              ].map((advisor) => (
                <div key={advisor.name} className="px-8 py-5 md:flex md:items-center md:gap-8">
                  <div className="md:w-48 shrink-0 mb-1 md:mb-0">
                    <p className="font-semibold text-foreground">{advisor.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/80">{advisor.title}</p>
                    <p className="text-sm text-primary font-medium mt-0.5">{advisor.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo carousel — Speaking & Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8">Speaking &amp; Events</h3>

            <div
              className="relative select-none"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* 3-photo strip */}
              <div className="grid grid-cols-3 gap-4">
                {[0, 1, 2].map((offset) => {
                  const idx = (current + offset) % photos.length;
                  const isFocus = offset === 1;
                  return (
                    <motion.div
                      key={`${current}-${offset}`}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className={`relative rounded-xl overflow-hidden shadow-md ${isFocus ? "ring-2 ring-primary/60" : "opacity-80"}`}
                      style={{ aspectRatio: "4/3" }}
                    >
                      <img
                        src={photos[idx].src}
                        alt={photos[idx].caption}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 px-3 py-3">
                        <p className={`text-white font-semibold leading-snug ${isFocus ? "text-sm" : "text-xs"}`}>
                          {photos[idx].caption}
                        </p>
                        <p className="text-slate-300 text-xs mt-0.5">{photos[idx].venue}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Prev / Next */}
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-border shadow text-foreground flex items-center justify-center transition-colors hover:bg-muted z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next photo"
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-border shadow text-foreground flex items-center justify-center transition-colors hover:bg-muted z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dot indicators */}
              <div className="flex justify-center gap-1.5 mt-5">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > current ? 1 : -1)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-5 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
