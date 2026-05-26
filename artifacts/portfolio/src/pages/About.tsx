import { motion } from "framer-motion";

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

      {/* Professional values */}
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
            What I believe
          </span>
        </div>
        <div className="md:col-span-8 flex flex-col gap-8">
          <p className="text-lg text-foreground/70 leading-relaxed font-light">
            A few principles that shape how I approach every project — placeholder content, to be updated.
          </p>

          <div className="flex flex-col gap-px bg-border/50 border border-border/50">
            {[
              {
                heading: "Content is a design decision",
                body: "Words aren't what you add after the layout is done. The best work happens when content and design are figured out together — which means I push to be in the room early."
              },
              {
                heading: "Clarity is kindness",
                body: "Jargon, hedging, and over-explaining are all forms of noise. I write to be understood on the first read, by the person with the least context in the room."
              },
              {
                heading: "Research before writing",
                body: "Good content starts with knowing who you're talking to, what they need, and what they already believe. I'd rather spend more time on the brief than redo the work later."
              },
              {
                heading: "Small words, big ideas",
                body: "Complexity in the thinking is fine. Complexity in the output is a failure. The harder the concept, the simpler the language needs to be."
              }
            ].map(({ heading, body }) => (
              <div key={heading} className="bg-background p-6 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
                <h3 className="text-base font-medium text-foreground sm:w-52 shrink-0">{heading}</h3>
                <p className="text-base text-foreground/60 leading-relaxed font-light">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Career arc */}
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-border/50 pt-16 grid md:grid-cols-12 gap-8 md:gap-16"
      >
        <div className="md:col-span-3">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
            Background
          </span>
        </div>
        <div className="md:col-span-8 flex flex-col gap-4">
          {[
            { period: "2022 – Present", role: "Lead UX Writer → Content Strategist", place: "PayU Finance (LazyPay) · current role" },
            { period: "2021 – 2022", role: "Senior UX Writer", place: "PayU Finance — first UX Writer in the org" },
            { period: "2020 – 2021", role: "UX Writer & Copywriter", place: "Freelance" },
            { period: "2019 – 2020", role: "Senior UX Designer", place: "GoIbibo" },
            { period: "2014 – 2019", role: "Software Engineer → UX Designer", place: "Adobe · 5 years" },
          ].map(({ period, role, place }) => (
            <div key={period} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4 border-b border-border/30 last:border-0">
              <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground w-28 shrink-0">{period}</span>
              <div>
                <span className="text-base font-medium text-foreground">{role}</span>
                <span className="text-sm text-foreground/50 ml-2">— {place}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
