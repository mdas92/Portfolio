import { motion } from "framer-motion";
import { Link } from "wouter";

export default function AampeStrategy() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col pb-24 w-full"
    >
      {/* ── Header ── */}
      <div className="px-6 md:px-16 lg:px-24 py-8 md:py-16 max-w-5xl mx-auto w-full">
        <Link
          href="/work"
          className="inline-flex items-center text-sm font-sans font-semibold uppercase tracking-wider px-4 py-2 border-2 border-foreground bg-background transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] mb-12"
        >
          ← Back to Work
        </Link>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-tight leading-tight">
          Content Strategy for a Million Agents
        </h1>

        <p className="text-lg md:text-xl font-sans text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          How I Turned Content Strategy into Infrastructure and built the Strategic Semantic Layer for an Agentic World
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-border/50 text-sm">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Role</div>
            <div className="font-medium text-foreground">Content Strategist &amp; Methodology Owner</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Context</div>
            <div className="font-medium text-foreground">Aampe — AI-powered lifecycle marketing platform</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Year</div>
            <div className="font-medium text-foreground">2025</div>
          </div>
        </div>
      </div>

      {/* ── Hero placeholder ── */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-16 md:mb-24">
        <div
          className="w-full border border-dashed border-border/40 bg-muted/10 flex items-center justify-center"
          style={{ height: 320 }}
        >
          <span className="text-xs font-sans text-muted-foreground/40 uppercase tracking-widest">
            Hero visual — coming soon
          </span>
        </div>
      </div>
    </motion.article>
  );
}
