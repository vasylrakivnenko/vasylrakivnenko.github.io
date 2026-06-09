import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's Talk</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Ready to cut through the hype and build AI systems that deliver real ROI? 
              Reach out to discuss your strategy, architecture, or team enablement needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:vasyl@stanford.edu"
                className="inline-flex items-center justify-center rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 w-full sm:w-auto"
              >
                <Mail className="mr-3 h-5 w-5" />
                vasyl@stanford.edu
              </a>
              
              <a 
                href="https://www.linkedin.com/in/rakivnenkov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-card hover:bg-accent hover:text-accent-foreground h-14 px-8 w-full sm:w-auto"
              >
                <Linkedin className="mr-3 h-5 w-5" />
                Connect on LinkedIn
                <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
