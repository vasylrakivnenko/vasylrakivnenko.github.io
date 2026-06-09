import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import speakingImage from "@assets/1702346092406_1781039882681.jpg";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative pt-20 overflow-hidden">
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src={speakingImage} 
          alt="Fractional AI Lead Speaking" 
          className="w-full h-full object-cover object-center md:object-right-top opacity-30 mix-blend-luminosity grayscale-[30%]"
        />
        {/* Darkening overall overlay for text legibility */}
        <div className="absolute inset-0 bg-background/80 md:bg-background/60" />
        {/* Gradient from left (dark) to right (transparent) for desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        {/* Gradient from bottom to top for mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent md:hidden" />
      </div>

      {/* Decorative gradient blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-muted-foreground text-lg tracking-wide uppercase font-medium mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-primary/30" />
              Turn AI into ROI
            </h2>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block text-foreground drop-shadow-sm">Fractional</span>
            <span className="block text-primary/90 drop-shadow-sm">AI Leadership</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-sm"
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
              href="#contact" 
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground h-14 px-8"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 text-sm text-foreground/70 font-medium"
          >
            <span className="bg-background/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/50 shadow-sm">
              Stanford Law AI Technical Lead
            </span>
            <span className="hidden sm:inline-block text-border/80">•</span>
            <span className="bg-background/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/50 shadow-sm">
              Stanford Continuing Studies Instructor
            </span>
            <span className="hidden sm:inline-block text-border/80">•</span>
            <span className="bg-background/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/50 shadow-sm">
              Stanford GSB Research Affiliate
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
