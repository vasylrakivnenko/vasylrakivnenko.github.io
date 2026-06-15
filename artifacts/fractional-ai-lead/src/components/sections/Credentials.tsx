import { motion } from "framer-motion";

export function Credentials() {
  return (
    <section id="credentials" className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                A diverse, non-linear background — from driving CDL trucks to building and scaling companies to $10M+ in sales — bringing adaptability, humility, and perspective to bridging technical feasibility and human value.
              </p>
              <p>
                Real value comes from lived experience, curiosity, continuous learning, and building work that is responsible, useful, and meaningful.
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-1">AI Technical Lead</h3>
              <p className="text-primary mb-4 font-medium">Stanford Law School (Stanford Legal Design Lab)</p>
              <p className="text-muted-foreground leading-relaxed">
                Agentic AI systems, RAG pipelines, document intelligence, PII detection &amp; redaction, LLM customization &amp; integration, applied ML. Also AI Technical Assistant for LAW 809E (AI for Legal Help).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-1">Instructor</h3>
              <p className="text-primary mb-4 font-medium">Stanford Continuing Studies</p>
              <p className="text-muted-foreground leading-relaxed">
                "Supervising AI Coding Agents" (TECH 43): teaching professionals to evaluate, manage, and safely supervise autonomous coding tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-1">Research Affiliate</h3>
              <p className="text-primary mb-4 font-medium">Stanford GSB (Value Chain Innovation Initiative)</p>
              <p className="text-muted-foreground leading-relaxed">
                Research with Prof. Haim Mendelson on LLM performance, pricing dynamics, and model quality-cost tradeoffs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-1">AI Project Lead</h3>
              <p className="text-primary mb-4 font-medium">PT Amman Mineral Nusa Tenggara</p>
              <p className="text-muted-foreground leading-relaxed">
                AI &amp; digital transformation program with McKinsey and FTI Consulting in mining operations.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 p-8 rounded-2xl bg-card border border-border shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Speaking &amp; Guest Lectures</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Stanford GSB
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                University of Nevada Las Vegas (UNLV)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Zurich University of Applied Sciences of the Grisons
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Silicon Valley Google Developer Group
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
