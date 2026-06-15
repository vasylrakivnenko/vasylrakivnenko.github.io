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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What is a Fractional AI Lead?</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A savvy business solution where expertise meets flexibility – think of me as your internal team member with the added benefits of cost-savings and administrative ease.
              </p>
              <p>Perfect for businesses not quite ready for a full-time Chief AI Officer or AI Lead, this suite gives you access to top-tier AI insight and experience, tailored to fit your company's rhythm and budget.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
