import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  AliasChainVisual,
  MisreadObjectsVisual,
  HierarchyVisual,
  TerminologySessionVisual,
  ThreeActsVisual,
} from "../components/ProductTaxonomyVisuals";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function PullQuote({ children, cite, variant = "green" }: { children: React.ReactNode; cite: string; variant?: "green" | "sienna" | "lime" }) {
  const borderColor = variant === "sienna" ? "border-primary" : variant === "lime" ? "border-accent" : "border-foreground";
  const bgColor = variant === "sienna" ? "bg-primary/5" : variant === "lime" ? "bg-accent/10" : "bg-foreground/5";
  return (
    <blockquote className={`border-l-4 ${borderColor} ${bgColor} rounded-r-md px-5 py-4 my-6`}>
      <p className="font-serif text-lg text-foreground/90 leading-relaxed italic m-0">{children}</p>
      <cite className="block mt-3 text-sm font-medium not-italic text-muted-foreground">{cite}</cite>
    </blockquote>
  );
}

function Act({ time, heading, children }: { time: string; heading: string; children: React.ReactNode }) {
  return (
    <article className="border-l-2 border-border/40 pl-6 my-10 relative">
      <div className="absolute -left-[9px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
      <time className="block text-[10px] uppercase tracking-[0.18em] font-medium text-primary mb-3">{time}</time>
      <h3 className="text-xl font-serif text-foreground mb-3">{heading}</h3>
      {children}
    </article>
  );
}

export default function ProductTaxonomy() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col pb-24 w-full"
    >
      {/* Hero */}
      <div className="px-6 md:px-16 lg:px-24 py-8 md:py-16 max-w-5xl mx-auto w-full">
        <Link href="/work" className="inline-flex items-center text-sm font-sans font-semibold uppercase tracking-wider px-4 py-2 border-2 border-foreground bg-background transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] mb-12">
          ← Back to Work
        </Link>

        <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary mb-5">
          Case study · Aampe · 2025 – Apr 2026
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 tracking-tight leading-tight max-w-4xl">
          Product Taxonomy: renaming an AI product while it runs
        </h1>

        <p className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed max-w-3xl mb-12">
          Aampe's product objects grew their names ad hoc, and customers were paying the tax. I
          helped drive the standardization of the product's taxonomy: the evidence, the
          framework, the decision session, the ratified glossary, and the implementation plan.
        </p>

        {/* At a glance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 mb-12">
          {[
            { label: "Role", value: "Field-side driver, with product design and data science" },
            { label: "Scope", value: "Core object names across UI, docs, KB, and sales decks" },
            { label: "Method", value: "Evidence → structured debate → glossary → implementation" },
            { label: "Result", value: "Nine entities ratified; glossary and rollout plan shipped" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-background p-6 flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">{label}</span>
              <strong className="text-foreground font-medium leading-snug">{value}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* Hero visual */}
      <div className="w-full max-w-5xl mx-auto px-6 md:px-16 lg:px-24 mb-16">
        <AliasChainVisual />
      </div>

      {/* Body */}
      <div className="px-6 md:px-16 lg:px-24 max-w-3xl mx-auto w-full flex flex-col gap-0">

        {/* Context */}
        <motion.section {...fadeUp} transition={{ duration: 0.5 }} className="mb-14">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            Context
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-6">Every term carries a mindset shift</h3>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-4">
            Marketers arrive at Aampe fluent in campaigns, segments, and journeys. The product
            replaces that worldview with agentic objects that have no industry equivalent:
            formulas, components, tags, topics. But those terms were coined ad hoc by whoever
            shipped a feature first, so one object answered to five names, familiar-sounding
            words pulled customers back into campaign thinking, and new words lacked consistent
            definitions.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-8">
            The vocabulary is the interface to the mindset shift, and it needed to be designed.
          </p>
          <MisreadObjectsVisual />
        </motion.section>

        {/* The debate */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            The debate
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-6">Does an early-stage startup even need strict taxonomy?</h3>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-8">
            Fair question. Naming ceremonies can feel like enterprise theater when you ship
            weekly, and premature rigor freezes a product that is still finding its shape. We
            made the call deliberately: not sooner, not later.
          </p>
          <div className="flex flex-col gap-px bg-foreground/10 border border-foreground/10">
            {[
              { title: "Too early would have been waste", body: "While the surface area was small, renaming was cheap and the concepts were still moving." },
              { title: "By 2025 the cost had flipped", body: "Every alias was multiplied across 20+ live client programs, docs, AI prompts, and sales decks, and paid for in onboarding time and support threads." },
              { title: "The next-gen product was a one-time window", body: "NX let us ship new names as part of a new experience instead of breaking live workflows." },
              { title: "Later meant freezing confusion", body: "Some names are architecturally permanent, so every quarter of delay hardcoded more of the wrong ones." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-background p-6 flex flex-col gap-2">
                <h4 className="text-base font-medium text-foreground">{title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed font-light m-0">{body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* The purpose */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            The purpose
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-6">Why it matters in an AI product</h3>
          <div className="flex flex-col gap-px bg-foreground/10 border border-foreground/10">
            {[
              { title: "Names configure the machine", body: "Tags and components are inputs to agent learning and generation prompts. A misread term becomes a mis-configured account." },
              { title: "Names are the onboarding", body: "Every client and new hire must learn the object model first. Five aliases means five times the ramp-up." },
              { title: "Names are credibility", body: "When the UI, docs, and sales deck disagree, the product feels more complicated than it is." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-background p-6 flex flex-col gap-2">
                <h4 className="text-base font-medium text-foreground">{title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed font-light m-0">{body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* The object of the work */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            The object of the work
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-6">What I drove or built</h3>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-8">
            Product taxonomy here means the names and definitions of the product's core objects,
            everywhere they surface. My concrete pieces:
          </p>
          <div className="border border-border/50 rounded p-5 bg-muted/10">
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-xs border-collapse min-w-[560px]">
                <thead>
                  <tr>
                    {["Artifact", "One line"].map((h) => (
                      <th key={h} className="bg-foreground text-background text-left px-3 py-2 font-semibold tracking-wide whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { artifact: "Taxonomy framework", line: "The \"Aampe Terminology & Taxonomy\" doc: entities, candidate terms with recorded reasoning, naming principles, voting rules, tie-breakers." },
                    { artifact: "Customer evidence catalog", line: "My client session recordings, mined term by term into the audit's primary evidence." },
                    { artifact: "Topics feature input", line: "The four-dimension model that replaced a rigid topic/sub-topic hierarchy before it shipped." },
                    { artifact: "Definition fixes in the product", line: "Cleanup ticket replacing Composer's default component definitions with the canonical ones." },
                    { artifact: "The decision session", line: "Co-ran the offsite Terminology Session that ratified the glossary." },
                    { artifact: "Glossary + rollout plan", line: "The two shipped assets, linked below." },
                  ].map((row) => (
                    <tr key={row.artifact}>
                      <td className="border border-border/40 bg-background px-3 py-2 align-top font-medium">{row.artifact}</td>
                      <td className="border border-border/40 bg-background px-3 py-2 align-top text-muted-foreground">{row.line}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* The rules */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            The rules
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-6">Principles I set down for naming</h3>
          <ul className="flex flex-col gap-3 text-foreground/80 leading-relaxed font-light list-disc pl-5 marker:text-primary mb-8 text-lg">
            <li><strong>One name, one purpose.</strong> No synonyms.</li>
            <li><strong>Name for function, not format.</strong> What it does, not what it looks like.</li>
            <li><strong>No CRM legacy baggage.</strong> No "campaign", no "journey". Prefer names that imply learning.</li>
            <li><strong>Respect the hierarchy.</strong> Atomic to modular to system, consistent across UI, docs, and data models.</li>
            <li><strong>Renames require justification.</strong> Comprehension, clarity, or function. Not preference.</li>
          </ul>
          <HierarchyVisual />
          <p className="text-lg text-foreground/80 leading-relaxed font-light mt-8">
            Every candidate faces a five-second test (human-readable, describes what the system
            does, fits the hierarchy, one meaning, no baggage) and a sentence test: it must slot
            into the sentences teams say daily, like "there seems to be a semantic ______-Label
            mismatch". If the word jars, it fails.
          </p>
        </motion.section>

        {/* My role */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            My role
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-6">The field voice in every naming decision</h3>
          <p className="text-lg text-foreground/80 leading-relaxed font-light">
            Standardization was cross-functional: product design ran the internal survey, data
            science owned the ontology thinking. I was the field voice the product team looped
            into every naming decision, because I taught this object model to customers every
            week. Mine: the evidence, the Topics-feature argument, the definition fixes, the
            framework, the session I co-ran, and the implementation plan.
          </p>
        </motion.section>

        {/* Three acts */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            Three acts
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-8">From symptom to shipped taxonomy</h3>

          <ThreeActsVisual />

          <Act time="Act I · 2025 — The problem keeps introducing itself" heading="Confusion showed up everywhere, independently">
            <ul className="flex flex-col gap-2 text-foreground/80 leading-relaxed font-light list-disc pl-5 marker:text-primary mb-4 text-base">
              <li>A super-app's new PM, first week in the product: "How do I add alternate / description to the body... how do we identify what type of sub-label works?"</li>
              <li>A travel client's own retro: campaign labelling is inconsistent, "causing confusion and suboptimal AI performance".</li>
              <li>A tax-filing client's onsite copy meeting opens by addressing "confusion around labels and message components driving agent learning".</li>
              <li>The same client's data lead, months later: "is this multiple labels per message/variant and the UI is confusing me?"</li>
              <li>Even internal reporting threads stall on formula vs. message vs. alternate before the actual question can be answered.</li>
            </ul>
            <PullQuote cite="Notes mined from a client content session I ran, October 2025">
              "Customers understand the mental model (messages → parts → variants → labels), but not the vocabulary."
            </PullQuote>
          </Act>

          <Act time="Act II · Oct–Dec 2025 — Making it a product problem" heading="Turned recurring confusion into an evidence-backed audit">
            <ul className="flex flex-col gap-2 text-foreground/80 leading-relaxed font-light list-disc pl-5 marker:text-primary mb-0 text-base">
              <li>Fed "Terminology for NX" onto the product design team's conceptual agenda.</li>
              <li>Company-wide glossary survey launched in FigJam; the five-name alias chain was exhibit A.</li>
              <li>My client session recording became the audit's primary evidence: "Offering" read as promotion, "Label" doing two jobs.</li>
              <li>Argued the Topics feature onto a four-dimension model (feature, category, context, constraint) instead of a hard-coded topic/sub-topic hierarchy. The rigid version didn't ship.</li>
              <li>Practiced safe extension on a live account: two new custom components with label sets mirroring the client's own internal terminology, named right the first time because components can't be renamed.</li>
            </ul>
          </Act>

          <Act time="Act III · Jan–Apr 2026 — Decide, ratify, ship" heading="From framework to nine ratified entities">
            <ul className="flex flex-col gap-2 text-foreground/80 leading-relaxed font-light list-disc pl-5 marker:text-primary mb-4 text-base">
              <li>Authored the Terminology & Taxonomy framework: three candidates per entity with recorded reasoning, naming principles, votes with mandatory rationale, named tie-breakers.</li>
              <li>Co-ran the Terminology Session at the Taiwan offsite: ten people including the CEO and a co-founder, live polls, and a sentence test for every entity.</li>
              <li>Filed the fix for Composer's default component definitions, folded into a health-check product pitch.</li>
              <li>Governance ratified with it: modifying an agreed term now requires rationale and consensus — "prevent terminology creep by using the accepted term over the one you prefer."</li>
              <li>Wrote the implementation plan: engineering scoping first, old-to-new migration mapping, customer change management, and a six-step rollout.</li>
            </ul>
            <TerminologySessionVisual />
          </Act>
        </motion.section>

        {/* Deliverables */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            The deliverables
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-8">Glossary and rollout plan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="/images/projects/product-taxonomy/Aampe_Product_Glossary.pdf"
              target="_blank"
              rel="noreferrer"
              className="group block border border-border/50 rounded overflow-hidden hover:border-primary transition-colors"
            >
              <img
                src="/images/projects/product-taxonomy/glossary-preview.png"
                alt="Product Glossary preview — nine ratified entities with definitions, examples, and decisions"
                className="w-full object-cover border-b border-border/50"
              />
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Product Glossary (PDF)</span>
                <span className="text-xs text-muted-foreground">↗</span>
              </div>
            </a>
            <a
              href="/images/projects/product-taxonomy/Terminology_Implementation_Plan.pdf"
              target="_blank"
              rel="noreferrer"
              className="group block border border-border/50 rounded overflow-hidden hover:border-primary transition-colors"
            >
              <img
                src="/images/projects/product-taxonomy/plan-preview.png"
                alt="Implementation Plan preview — scoping, migration mapping, change management, rollout sequence"
                className="w-full object-cover border-b border-border/50"
              />
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Implementation Plan (PDF)</span>
                <span className="text-xs text-muted-foreground">↗</span>
              </div>
            </a>
          </div>
        </motion.section>

        {/* Challenges */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            Challenges
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-8">What made it hard</h3>
          <div className="flex flex-col gap-px bg-foreground/10 border border-foreground/10">
            {[
              { title: "Familiarity vs. the mindset shift", body: "Familiar terms smuggled in campaign-era assumptions; novel terms raised the learning curve. Every name was a decision about how hard to challenge the customer's mental model." },
              { title: "Renaming a product that never stops running", body: "Old names lived in the UI, KB, decks, AI prompts, and customer habits, and some are architecturally permanent. Hence a plan, not a find-and-replace." },
              { title: "Everyone owns words, so no one does", body: "Strong opinions from engineering to the CEO. Surveys, votes, recorded counterpoints, and tie-breakers kept decisions on evidence instead of volume." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-background p-6 flex flex-col gap-2">
                <h4 className="text-base font-medium text-foreground">{title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed font-light m-0">{body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            What this demonstrates
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-8">Skills, mapped for hiring managers</h3>
          <div className="flex flex-wrap gap-2">
            {["Product language", "Information architecture", "Evidence-driven naming", "Ontology & conceptual modeling", "Workshop design", "Cross-functional facilitation", "UX writing", "Change management"].map((skill, idx) => (
              <span key={skill} className={`bg-background border-2 border-foreground rounded-md px-4 py-2 text-xs font-sans font-semibold uppercase tracking-wide text-foreground ${idx === 1 ? "rotate-1" : idx === 5 ? "-rotate-1" : ""}`}>
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Reflection */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            Reflection
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-4">
            Naming a running AI product isn't a copywriting exercise — it's product work with a
            deadline problem: the longer you wait, the more the wrong words get load-bearing.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed font-light">
            Being in every customer session gave me the evidence no internal survey could
            generate. The job wasn't picking better words — it was proving, with recordings and
            recurring confusion, exactly which words were costing the company time and trust,
            then building the process that could decide their replacements and make the decision
            stick.
          </p>
        </motion.section>

      </div>
    </motion.article>
  );
}
