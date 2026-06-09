import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Assess & Align",
    description: "Deep dive into your business model, technical infrastructure, and bottlenecks. We align on where AI can actually move the needle, rather than chasing trends."
  },
  {
    number: "02",
    title: "Prioritize High-ROI Use Cases",
    description: "Filter opportunities by technical feasibility and business impact. We select the highest leverage project to prove value quickly."
  },
  {
    number: "03",
    title: "Prototype & Validate",
    description: "Rapidly build a functional proof-of-concept. Test assumptions, measure performance, and validate against real user needs before heavy investment."
  },
  {
    number: "04",
    title: "Deploy to Production",
    description: "Harden the prototype into a resilient, scalable system. Address edge cases, security, latency, and integration with your existing stack."
  },
  {
    number: "05",
    title: "Enable the Team",
    description: "Ensure your team owns the outcome. Training, documentation, and establishing guardrails so you aren't dependent on external consultants forever."
  }
];

export function Approach() {
  return (
    <section id="approach" className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Methodology</h2>
          <p className="text-lg text-muted-foreground">
            A structured, disciplined approach to integrating AI—minimizing risk while maximizing speed to value.
          </p>
        </div>

        <div className="max-w-4xl relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-8 top-8 bottom-8 w-[1px] bg-border hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative pl-0 md:pl-24"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="hidden md:flex absolute left-0 top-1 w-16 h-16 rounded-full bg-background border border-border items-center justify-center font-mono text-sm font-bold text-primary z-10">
                  {step.number}
                </div>
                
                <div className="md:hidden inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs font-bold mb-4">
                  Step {step.number}
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
