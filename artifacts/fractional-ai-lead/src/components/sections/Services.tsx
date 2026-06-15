import { motion } from "framer-motion";
import { BrainCircuit, Workflow, FileText, Code2, ShieldCheck, Users } from "lucide-react";

const services = [
  {
    title: "AI Strategy & Roadmaps",
    description: "Assess your current architecture, identify high-impact opportunities, and chart a pragmatic course from idea to production.",
    icon: BrainCircuit
  },
  {
    title: "Agentic AI Systems & Automation",
    description: "Design and implement autonomous workflows that orchestrate complex tasks, freeing your team for higher-leverage work.",
    icon: Workflow
  },
  {
    title: "RAG Pipelines & Document Intelligence",
    description: "Unlock the value of your unstructured data with robust retrieval-augmented generation tailored to your domain.",
    icon: FileText
  },
  {
    title: "Prototyping, Building & Deployment",
    description: "Move past toy demos. Build resilient, scalable AI applications integrated seamlessly into your existing infrastructure.",
    icon: Code2
  },
  {
    title: "Governance & Safe Use",
    description: "Establish frameworks for responsible AI deployment, addressing PII, security, evaluation, and operational risk.",
    icon: ShieldCheck
  },
  {
    title: "Team Enablement & Training",
    description: "Upskill your engineers and operators to confidently supervise, maintain, and iterate on AI tools and agentic systems.",
    icon: Users
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Help</h2>
          <p className="text-lg text-muted-foreground">
            Bridging the gap between ambitious strategy and flawless execution. I operate at both the whiteboard and the terminal.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
