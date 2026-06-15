import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import speakingImage from "@assets/1702346092406_1781039882681.jpg";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative pt-20 overflow-hidden bg-slate-950">
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={speakingImage}
          alt="Fractional AI Lead Speaking"
          className="w-full h-full object-cover object-center md:object-right-top opacity-30 mix-blend-luminosity grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-slate-950/80 md:bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent md:hidden" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[128px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-slate-400 text-lg tracking-wide uppercase font-medium mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-500/50" />
              Turn AI into ROI
            </h2>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block text-white drop-shadow-sm">Fractional AI Lead</span>
            <span className="block text-blue-400 drop-shadow-sm">&amp; AI Adoption Services</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Senior AI strategy and hands-on execution for companies building the next generation of intelligent systems.
            Pragmatic, measurable, and integrated with your team.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://calendly.com/vasyl-stanford/fractional-chief-ai-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 bg-blue-600 text-white hover:bg-blue-700 h-14 px-8 shadow-lg"
            >
              Book a Free Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 border border-slate-600 bg-slate-900/50 text-slate-200 hover:bg-slate-800 backdrop-blur-sm h-14 px-8"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 text-sm text-slate-300 font-medium"
          >
            <span className="bg-slate-900/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/60 shadow-sm">
              Stanford Law AI Technical Lead
            </span>
            <span className="hidden sm:inline-block text-slate-600">•</span>
            <span className="bg-slate-900/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/60 shadow-sm">
              Stanford Continuing Studies Instructor
            </span>
            <span className="hidden sm:inline-block text-slate-600">•</span>
            <span className="bg-slate-900/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/60 shadow-sm">
              Stanford GSB Research Affiliate
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
