import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Calendar, ArrowRight } from "lucide-react";

export function Contact() {
  const [emailRevealed, setEmailRevealed] = useState(false);

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Let's Talk</h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Ready to cut through the hype and build AI systems that deliver real ROI?
              Start with a free 30-minute discovery call — no pitch, just a direct conversation about where AI can genuinely move the needle for your business.
            </p>

            <a
              href="https://calendly.com/vasyl-stanford/fractional-chief-ai-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 bg-blue-600 text-white hover:bg-blue-700 h-14 px-10 mb-12 shadow-lg"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Book a Free 30-Min Discovery Call
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>

            <div className="border-t border-slate-800 pt-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                {/* LinkedIn — highlighted */}
                <a
                  href="https://www.linkedin.com/in/rakivnenkov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 bg-[#0A66C2] text-white hover:bg-[#0958a8] h-12 px-6 w-full sm:w-auto"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>

                {/* Email — reveal on hover/click */}
                {emailRevealed ? (
                  <a
                    href="mailto:vasyl@stanford.edu"
                    className="inline-flex items-center justify-center rounded-md text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 border border-slate-600 text-slate-200 hover:bg-slate-800 h-12 px-6 w-full sm:w-auto"
                  >
                    <Mail className="mr-2 h-4 w-4 shrink-0" />
                    vasyl@stanford.edu
                  </a>
                ) : (
                  <button
                    onClick={() => setEmailRevealed(true)}
                    onMouseEnter={() => setEmailRevealed(true)}
                    className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 border border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-200 h-12 px-6 w-full sm:w-auto"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    E-mail
                  </button>
                )}

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
