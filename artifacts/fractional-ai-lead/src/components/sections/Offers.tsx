import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";

export function Offers() {
  return (
    <section id="offers" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4">Offers &amp; Engagements</h2>
          <p className="text-lg text-muted-foreground">
            Flexible, high-impact engagements tailored to your stage — from a single strategic hour to ongoing AI leadership.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-5">

          {/* ── Row 1: 1:1 Consultation — horizontal slim entry strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="flex flex-col md:flex-row md:items-center gap-6 rounded-2xl border border-border bg-card px-8 py-6 shadow-sm"
          >
            {/* Left: title + price */}
            <div className="md:w-52 shrink-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Entry point</p>
              <h3 className="text-xl font-bold mb-1">1:1 Consultation</h3>
              <span className="text-2xl font-bold text-primary">$300<span className="text-base font-medium text-muted-foreground"> / hr</span></span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px self-stretch bg-border" />

            {/* Middle: outcomes */}
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {[
                "Concrete direction on your most pressing AI question",
                "Expert review of your architecture, tooling, or build plan",
                "Actionable next steps you can implement immediately",
                "No retainer required — sharp thinking, single session",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            {/* Right: CTA */}
            <div className="shrink-0">
              <a
                href="https://calendly.com/vasyl-stanford/1-1-session"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-semibold border border-input bg-transparent hover:bg-accent hover:text-accent-foreground transition-colors h-10 px-5 whitespace-nowrap"
              >
                Book a Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* ── Row 2: Assessment (light) + Fractional AI Lead (dark flagship) ── */}
          <div className="grid md:grid-cols-2 gap-5">

            {/* AI Opportunity Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="flex flex-col rounded-2xl border border-border bg-card px-8 py-8 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Deep-dive</p>
              <h3 className="text-2xl font-bold mb-1">AI Opportunity Assessment</h3>
              <div className="mb-5">
                <span className="text-3xl font-bold text-primary">$6,000</span>
              </div>

              {/* Format pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["2-Day Workshop", "4-Week Residency"].map((f) => (
                  <span key={f} className="inline-flex items-center rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-foreground/70">
                    {f}
                  </span>
                ))}
              </div>

              {/* Outcomes */}
              <ul className="space-y-3 mb-6 flex-grow">
                {[
                  "AI Opportunity Blueprint (value vs. effort map)",
                  "Prioritized use cases ranked by value & feasibility",
                  "Shared language & team alignment",
                  "A grounded read on what implementation actually takes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Discover where AI creates real value across your business, pressure-test the best ideas, and leave with a clear, prioritized blueprint your whole team believes in.
              </p>

              <a
                href="https://calendly.com/vasyl-stanford/fractional-chief-ai-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-md text-sm font-semibold border border-input bg-transparent hover:bg-accent hover:text-accent-foreground transition-colors h-11 w-full"
              >
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            {/* Fractional AI Lead — dark flagship */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="flex flex-col rounded-2xl bg-slate-900 px-8 py-8 shadow-xl relative overflow-hidden"
            >
              {/* Subtle glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest border border-primary/30">
                  <Zap className="h-3 w-3" />
                  Flagship Engagement
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">Fractional AI Lead</h3>
              <div className="mb-5">
                <span className="text-3xl font-bold text-white">$6,000<span className="text-base font-medium text-slate-400"> / month</span></span>
              </div>

              {/* Format pill */}
              <div className="flex mb-6">
                <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-300">
                  Ongoing, part-time senior AI leadership
                </span>
              </div>

              {/* Outcomes */}
              <ul className="space-y-3 mb-6 flex-grow">
                {[
                  "AI Strategy, Blueprints, and Roadmaps",
                  "Architecture decisions and oversight",
                  "High-leverage work only — no routine tasks",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Senior AI strategy and execution oversight on a flexible, part-time basis — so you get a CAIO-level partner without a full-time hire.
              </p>

              {/* Optional delivery team */}
              <div className="rounded-xl border border-slate-700/60 bg-slate-800/50 px-5 py-4 mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Optional Delivery Team</p>
                <div className="space-y-2">
                  {[
                    { role: "AI Architect", rate: "$100 / hr" },
                    { role: "ML / Software Developer", rate: "$50 / hr" },
                  ].map((addon) => (
                    <div key={addon.role} className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">{addon.role}</span>
                      <span className="text-sm font-semibold text-primary">{addon.rate}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://calendly.com/vasyl-stanford/fractional-chief-ai-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-11 w-full"
              >
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
