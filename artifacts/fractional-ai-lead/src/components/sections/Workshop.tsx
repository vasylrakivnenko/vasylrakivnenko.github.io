import { motion } from "framer-motion";
import { CheckCircle, Search, Layers, Shield, Settings2, Users } from "lucide-react";

export function Workshop() {
  return (
    <section id="workshop" className="py-24 bg-muted/10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">AI Opportunity Assessment Workshop</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A focused 2-day workshop to discover where AI creates real value across your business, pressure-test the best ideas, and leave with a clear, prioritized blueprint your whole team believes in — technical and non-technical alike.
            </p>
            <div className="mt-8 inline-flex px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium">
              Delivered on-site or virtual • Industry-agnostic
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="text-primary h-6 w-6" />
                What You Walk Away With
              </h3>
              <ul className="space-y-6">
                <li>
                  <h4 className="font-medium text-lg mb-1">1. AI Opportunity Blueprint</h4>
                  <p className="text-muted-foreground">A visual map of your top opportunities, plotted by business impact against implementation effort.</p>
                </li>
                <li>
                  <h4 className="font-medium text-lg mb-1">2. A New Perspective on AI</h4>
                  <p className="text-muted-foreground">A sharper, grounded view of where AI genuinely fits, and a realistic read on what putting it to work actually takes.</p>
                </li>
                <li>
                  <h4 className="font-medium text-lg mb-1">3. Prioritized Use Cases</h4>
                  <p className="text-muted-foreground">Concrete opportunities ranked by value and feasibility, with impact and effort noted for each.</p>
                </li>
                <li>
                  <h4 className="font-medium text-lg mb-1">4. Team Alignment</h4>
                  <p className="text-muted-foreground">Everyone leaves with one shared language for where AI fits, and the confidence to move.</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Layers className="text-primary h-6 w-6" />
                The Frameworks We Use
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Task Decomposition</span>
                    <span className="text-muted-foreground"> — Break each function's work into discrete tasks; we evaluate the task, not the job title.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">AI Capability Lenses</span>
                    <span className="text-muted-foreground"> — Test every task against what AI does: predict, see, read & write, listen & speak, generate.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Suitability-for-AI Screen</span>
                    <span className="text-muted-foreground"> — A rapid rubric (adapted from Stanford research) that separates real AI fits from wishful thinking.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Automate vs. Augment</span>
                    <span className="text-muted-foreground"> — Decide whether AI replaces a task or assists the person doing it.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Value vs. Effort Matrix</span>
                    <span className="text-muted-foreground"> — Plot every candidate and prioritize what to pursue first.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">The 2-Day Agenda</h3>
            <div className="grid md:grid-cols-2 gap-8 relative">
              <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-border -translate-x-1/2" />
              
              <div className="bg-muted/30 p-8 rounded-2xl border border-border relative">
                <div className="hidden md:flex absolute -right-[41px] top-8 w-10 h-10 rounded-full bg-background border-2 border-primary items-center justify-center font-bold text-primary z-10">1</div>
                <h4 className="text-xl font-bold mb-4 text-primary">DAY 1 — Discover & Generate</h4>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <Search className="h-5 w-5 text-foreground/50 shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Map the landscape</strong> — Where AI is already in use across the team, and the most time-consuming work in each function.</span>
                  </li>
                  <li className="flex gap-3">
                    <Users className="h-5 w-5 text-foreground/50 shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Generate in small groups</strong> — Mixed technical and non-technical teams run their tasks through the capability lenses to surface a wide set of opportunities.</span>
                  </li>
                  <li className="flex gap-3">
                    <Shield className="h-5 w-5 text-foreground/50 shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Surface the signal</strong> — Groups share back, then run candidates through the Suitability-for-AI rubric to test whether AI can genuinely deliver.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/30 p-8 rounded-2xl border border-border relative">
                <div className="hidden md:flex absolute -left-[41px] top-8 w-10 h-10 rounded-full bg-background border-2 border-primary items-center justify-center font-bold text-primary z-10">2</div>
                <h4 className="text-xl font-bold mb-4 text-primary">DAY 2 — Screen, Prioritize & Prototype</h4>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <Shield className="h-5 w-5 text-foreground/50 shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Pressure-test the winners</strong> — Decide automate vs. augment, and stress each one on data, scope, and risk.</span>
                  </li>
                  <li className="flex gap-3">
                    <Settings2 className="h-5 w-5 text-foreground/50 shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Assess complexity</strong> — Size how hard each candidate is to build using a simple combined estimation approach.</span>
                  </li>
                  <li className="flex gap-3">
                    <Layers className="h-5 w-5 text-foreground/50 shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Build the blueprint</strong> — Plot everything on the Value vs. Effort matrix and lock your prioritized set of opportunities.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-foreground/50 shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Prototype with agentic coding tools</strong> — Stand up a quick proof-of-concept of a top opportunity live, so the team sees what "real" looks like.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8"
              >
                Book a Workshop
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
