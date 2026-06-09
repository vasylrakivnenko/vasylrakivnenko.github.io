import { motion } from "framer-motion";
import { Truck, Pickaxe, Stethoscope, GraduationCap, Briefcase, Scale } from "lucide-react";

const industries = [
  { name: "Logistics", description: "Supply chain optimization and predictive routing.", icon: Truck },
  { name: "Copper & Gold Mining", description: "Operational efficiency and resource extraction models.", icon: Pickaxe },
  { name: "Healthtech", description: "Clinical workflows and patient data intelligence.", icon: Stethoscope },
  { name: "Edtech", description: "Personalized learning and administrative automation.", icon: GraduationCap },
  { name: "Consulting", description: "Knowledge retrieval and data-driven insights.", icon: Briefcase },
  { name: "Legaltech", description: "Document intelligence, PII redaction, and compliance.", icon: Scale }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Industries() {
  return (
    <section id="industries" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sectors Served</h2>
          <p className="text-lg text-muted-foreground">
            Proven experience adapting AI strategies and technical solutions across diverse, high-stakes domains.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-card border border-border flex flex-col items-start gap-4 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <ind.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{ind.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{ind.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
