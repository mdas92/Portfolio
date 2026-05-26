import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 flex flex-col px-6 md:px-16 lg:px-24 py-12 md:py-24 max-w-7xl mx-auto w-full"
    >
      <div className="flex items-center gap-3 mb-8 md:mb-12">
        <div className="w-8 h-[2px] bg-primary" />
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground">
          Content Strategist & Product Thinker
        </span>
      </div>

      <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-[-0.04em] font-serif mb-12">
        Hello, I'm <br className="hidden md:block"/> Mohana<span className="text-primary">.</span>
      </h1>

      <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-start mt-8">
        <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-8">
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light font-sans">
            From engineering to design to writing — 10 years of building things in tech. I work at the intersection of content strategy, product thinking, and language. Currently based in Kolkata, India.
          </p>
          <div>
            <a 
              href="#" 
              className="inline-block text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors text-lg"
            >
              Download Resume ↗
            </a>
          </div>
        </div>
        
        <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="aspect-[3/4] bg-muted w-full overflow-hidden"
          >
            <img 
              src="/mohana-photo.png" 
              alt="Mohana Das Portrait" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
