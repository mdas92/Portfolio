import { motion } from "framer-motion";
import { journey } from "../data/portfolio";
import mohanaPhoto from "@assets/IMG-20250407-WA0026-POP_OUT_1783247508725.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 flex flex-col px-6 md:px-16 lg:px-24 py-12 md:py-24 max-w-7xl mx-auto w-full"
    >
      <div className="mb-8 md:mb-12">
        <div 
          className="inline-block px-4 py-2 border-2 border-foreground mb-8 w-fit rotate-[-2deg] bg-background font-sans"
        >
          <span className="font-bold uppercase tracking-wider text-xs md:text-sm">
            hi, i'm mohana 👋
          </span>
        </div>
      </div>
      <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] leading-[0.9] tracking-[-0.03em] font-serif mb-12">
        writer<span className="text-primary">.</span> content strategist<span className="text-primary">.</span> <br className="hidden md:block" /> 
        <span className="relative inline-block">
          <span className="relative z-10 italic">product thinker.</span>
          <span 
            className="absolute inset-0 bg-[#C5F135] -z-10 mix-blend-multiply" 
            style={{ transform: 'rotate(1deg) scale(1.05) translateY(10%)' }}
          ></span>
        </span>
      </h1>
      {/* Hero grid */}
      <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-start mt-8 mb-24">
        <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-8">
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light font-sans">
            With 12 years of experience across engineering, design and writing, I help craft a holistic customer experience through content strategy, product positioning, and value frameworks.
          </p>
          <p className="text-lg text-foreground/60 leading-relaxed font-light">
            Based in Tokyo, JP (fully remote)
          </p>
          <div>
            <a
              href="#"
              className="group relative inline-flex items-center gap-4 bg-primary text-background px-8 py-4 text-lg w-fit transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0D3B2E] border-2 border-foreground font-sans font-bold"
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
            className="group relative aspect-[3/4] bg-muted w-full overflow-hidden border-2 border-foreground"
          >
            <img
              src={mohanaPhoto}
              alt="Mohana Das Portrait"
              className="w-full h-full object-cover grayscale contrast-110 group-hover:contrast-100 transition-all duration-700"
              style={{ objectPosition: "center 20%" }}
            />
            <div
              className="absolute inset-0 mix-blend-color transition-opacity duration-700"
              style={{
                background: "linear-gradient(135deg, #0D3B2E 0%, #C45C26 55%, #C5F135 100%)",
              }}
            />
            <div className="absolute inset-0 mix-blend-multiply bg-background/10" />
          </motion.div>
        </div>
      </div>
      {/* What I do */}
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-border/50 pt-16 mb-24 grid md:grid-cols-12 gap-8 md:gap-16"
      >
        <div className="md:col-span-3">
          <span className="inline-block px-2 py-1 border border-foreground/20 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground bg-background">
            What I do
          </span>
        </div>
        <div className="md:col-span-8 flex flex-col gap-6">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
            I work at an AI-powered lifecycle marketing platform, building content strategy for consumer apps across fintech, sports, travel, food delivery, and fitness. My work spans designing label architectures, value proposition frameworks, and thousands of message variants — helping brands unlock the full potential of agentic optimisation.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
            Alongside client work, I build internal tools, create training resources, and translate practitioner insights into formal product pitches. Before this, I was the first and only UX Writer at LazyPay (PayU Finance), where I built the content design practice from the ground up — owning conversation design, information architecture, and microcopy across a fintech product reaching millions of users across India.
          </p>
        </div>
      </motion.div>
      {/* Journey */}
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-border/50 pt-16"
      >
        <span className="inline-block px-2 py-1 border border-foreground/20 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground bg-background mb-12">
          Career
        </span>
        <div className="flex flex-col border-t border-border/50">
          {journey.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-12 border-b border-border/50 group"
            >
              <div className="md:col-span-3">
                <div className="text-muted-foreground font-sans font-medium text-sm tracking-wide">
                  {item.date}
                </div>
              </div>
              <div className="md:col-span-8 flex flex-col gap-2">
                <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                  {item.role}
                </h3>
                <div className="text-muted-foreground font-medium mb-2">
                  {item.company}
                </div>
                <p className="text-foreground/80 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
