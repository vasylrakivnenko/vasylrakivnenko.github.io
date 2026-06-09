import { motion } from "framer-motion";

export function Explainer() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What is a Fractional AI Lead?</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The concept is simple: access to top-tier AI strategy and hands-on execution on a flexible, part-time basis.
              </p>
              <p>
                Many companies recognize that AI will fundamentally reshape their industry, but aren't ready to hire a full-time Chief AI Officer. They need senior leadership to bridge the gap between technical feasibility and business value—someone who can cut through the hype, identify high-ROI use cases, and actually build them.
              </p>
              <p>
                A Fractional AI Lead embeds with your team, providing the strategic oversight of an executive and the execution capability of a seasoned engineer, tailored entirely to your current stage and budget.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
