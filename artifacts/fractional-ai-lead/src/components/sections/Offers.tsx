import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const offers = [
  {
    title: "AI Opportunity Assessment Workshop",
    price: "$6,000",
    format: "In-person (or virtual), 2 days",
    positioning: "The fastest way to discover where AI creates real value across your business and leave with a prioritized blueprint your whole team believes in.",
    outcomes: [
      "AI Opportunity Blueprint (value vs. effort map)",
      "Prioritized use cases ranked by value & feasibility",
      "Shared language & team alignment",
      "A grounded view of what implementation actually takes"
    ],
    cta: "See what's inside",
    ctaLink: "#workshop",
    highlight: false
  },
  {
    title: "4-Week AI Opportunity Assessment",
    price: "$12,000",
    format: "4 weeks",
    positioning: "A deeper, hands-on assessment — working individually with 8–12 of your managers and leaders to go function-by-function and surface validated, high-conviction opportunities.",
    outcomes: [
      "Everything in the workshop, taken deeper",
      "1:1 work with each leader",
      "A validated, prioritized roadmap",
      "Deeper buy-in across the leadership team"
    ],
    cta: "Let's Talk",
    ctaLink: "#contact",
    highlight: false
  },
  {
    title: "Fractional AI Lead",
    price: "$6,000 / month",
    format: "Ongoing, part-time senior AI leadership",
    positioning: "Senior AI strategy and execution oversight on a flexible, part-time basis — so you get a CAIO-level partner without a full-time hire.",
    outcomes: [
      "Focused on Strategy, Blueprints, Roadmaps",
      "Architecture decisions and oversight",
      "The high-leverage work"
    ],
    cta: "Let's Talk",
    ctaLink: "#contact",
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
            <h2 className="text-4xl font-bold mb-4">Offers & Engagements</h2>
            <p className="text-lg text-muted-foreground">
              Flexible, high-impact engagements tailored to your stage—from discovering your first use cases to ongoing AI leadership.
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
                  ? "bg-card border-primary shadow-lg shadow-primary/10" 
                  : "bg-muted/30 border-border"
              }`}
            >
              {offer.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  Flagship Offering
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-primary">{offer.price}</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                  {offer.format}
                </div>
                <p className="text-muted-foreground min-h-[80px]">
                  {offer.positioning}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {offer.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">{outcome}</span>
                    </li>
                  ))}
                </ul>

                {offer.addOns && (
                  <div className="mb-8 p-4 rounded-lg bg-background/50 border border-border/50">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Optional Delivery Team
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">
                      Bring in a delivery team so expensive senior time isn't spent on routine build work (engaged as needed):
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
                className={`mt-auto inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-12 w-full ${
                  offer.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {offer.cta}
                {offer.ctaLink.startsWith("#") ? null : <ArrowRight className="ml-2 h-4 w-4" />}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
