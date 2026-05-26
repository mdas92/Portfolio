import { motion } from "framer-motion";
import { journey } from "../data/portfolio";

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
      <div className="flex items-center gap-3 mb-8 md:mb-12">
        <div className="w-8 h-[2px] bg-primary" />
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground">
          Content Strategist & Product Thinker
        </span>
      </div>

      <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-[-0.04em] font-serif mb-12">
        Hello, I'm <br className="hidden md:block" /> Mohana<span className="text-primary">.</span>
      </h1>

      {/* Hero grid */}
      <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-start mt-8 mb-24">
        <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-8">
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light font-sans">
            Content strategist and product thinker with 10+ years across engineering, design, and writing. I help teams say the right thing — to the right person, in the right moment.
          </p>
          <p className="text-lg text-foreground/60 leading-relaxed font-light">
            Based in Tokyo, Japan.
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
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
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
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-12">
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
