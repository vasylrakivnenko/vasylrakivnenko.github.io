import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const offers = [
  {
    title: "1:1 Consultation",
    price: "$300 / hour",
    formats: [
      "Single session via video call"
    ],
    positioning: "A focused, high-signal hour to pressure-test your AI strategy, unblock a specific challenge, or get an expert second opinion before making a consequential decision.",
    outcomes: [
      "Concrete direction on your most pressing AI question",
      "Expert review of your architecture, tooling, or build plan",
      "Actionable next steps you can implement immediately",
      "No retainer required — sharp thinking, single session"
    ],
    cta: "Book a Session",
    ctaLink: "https://calendly.com/vasyl-stanford/1-1-session",
    highlight: false,
    addOns: null
  },
  {
    title: "AI Opportunity Assessment",
    price: "$6,000",
    formats: [
      "2-Day Workshop — In-person or virtual, intensive for your leadership team",
      "4-Week Residency — Working 1:1 with 8–12 of your managers and leaders"
    ],
    positioning: "Discover where AI creates real value across your business, pressure-test the best ideas, and leave with a clear, prioritized blueprint your whole team believes in — technical and non-technical alike.",
    outcomes: [
      "AI Opportunity Blueprint (value vs. effort map)",
      "Prioritized use cases ranked by value & feasibility",
      "Shared language & team alignment",
      "A grounded read on what implementation actually takes"
    ],
    cta: "Book a Discovery Call",
    ctaLink: "https://calendly.com/vasyl-stanford/fractional-chief-ai-discovery-call",
    highlight: false,
    addOns: null
  },
  {
    title: "Fractional AI Lead",
    price: "$6,000 / month",
    formats: [
      "Ongoing, part-time senior AI leadership"
    ],
    positioning: "Senior AI strategy and execution oversight on a flexible, part-time basis — so you get a CAIO-level partner without a full-time hire.",
    outcomes: [
      "Strategy, Blueprints, and Roadmaps",
      "Architecture decisions and oversight",
      "High-leverage work only — no time wasted on routine tasks"
    ],
    cta: "Book a Discovery Call",
    ctaLink: "https://calendly.com/vasyl-stanford/fractional-chief-ai-discovery-call",
    highlight: true,
    addOns: [
      { role: "AI Architect", rate: "$100/hr" },
      { role: "ML / Software Developer", rate: "$50/hr" }
    ]
  }
];

export function Offers() {
  return (
    <section id="offers" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">Offers &amp; Engagements</h2>
            <p className="text-lg text-muted-foreground">
              Flexible, high-impact engagements tailored to your stage — from a single strategic hour to ongoing AI leadership.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                offer.highlight
                  ? "bg-card border-primary shadow-xl shadow-primary/10"
                  : "bg-card border-border shadow-sm"
              }`}
            >
              {offer.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                  Flagship Engagement
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-primary">{offer.price}</span>
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  {offer.formats.map((f, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {offer.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">{outcome}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {offer.positioning}
                </p>

                {offer.addOns && (
                  <div className="mb-8 p-4 rounded-lg bg-muted/60 border border-border">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Optional Delivery Team
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      Your senior time stays on strategy — bring in a delivery team for execution as needed:
                    </p>
                    <ul className="space-y-2">
                      {offer.addOns.map((addon, i) => (
                        <li key={i} className="flex justify-between text-sm">
                          <span className="text-foreground/80">{addon.role}</span>
                          <span className="font-medium text-primary">{addon.rate}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <a
                href={offer.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-12 w-full ${
                  offer.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {offer.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
