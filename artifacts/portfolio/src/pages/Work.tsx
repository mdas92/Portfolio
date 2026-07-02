import { motion } from "framer-motion";
import { Link } from "wouter";
import { projects } from "../data/portfolio";
import {
  ContentMapsVisual,
  FintechVisual,
  SportsVisual,
  TaxVisual,
  SuperappVisual,
  PlaybookVisual,
} from "../components/ProjectCardVisuals";

const cardVisuals: Record<string, React.ReactNode> = {
  "content-maps":     <ContentMapsVisual />,
  "fintech-overhaul": <FintechVisual />,
  "sports-training":  <SportsVisual />,
  "tax-onboarding":   <TaxVisual />,
  "superapp-l10n":    <SuperappVisual />,
  "playbook":         <PlaybookVisual />,
};

const valuesThinkingSteps = [
  {
    step: "01",
    heading: "Map Offerings",
    body: "List everything the product offers: its features, capabilities, and functional benefits. These are Offerings — what the product does, not what the user gains."
  },
  {
    step: "02",
    heading: "Apply the Inner Monologue",
    body: "For each Offering, ask: what is the user actually thinking or feeling when this matters to them? This surfaces authentic value propositions in the user's own voice rather than marketing language."
  },
  {
    step: "03",
    heading: "Prioritise & Deduplicate",
    body: "Narrow to the top 5–10 value props that are mutually exclusive, meaningfully distinct, and testable. Overlapping props slow agent learning — fewer labels that explain the same reaction means faster system learning."
  },
  {
    step: "04",
    heading: "Build the Label Architecture",
    body: "Translate the final value propositions into a clean label library: one label per concept, consistently named, so every message alternate is labelled in a way the agent can use reliably."
  }
];

export default function Work() {
  const featuredProjects = projects.filter((p) => p.year === "2025" && p.featured && !p.archived);
  const otherEngagements = projects.filter((p) => p.year === "2025" && !p.featured && !p.archived);
  const olderProjects = projects.filter((p) => p.year !== "2025" && !p.archived);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 flex flex-col px-6 md:px-16 lg:px-24 py-12 md:py-24 max-w-7xl mx-auto w-full"
    >
      <div className="mb-20">
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-4">
          Selected Work
        </span>
        <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">Projects</h1>
        <p className="text-xl md:text-2xl text-foreground/70 font-light max-w-2xl">
          A selection of content strategy, UX writing, and product thinking work.
        </p>
      </div>

      {/* Featured Work */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 mb-24">
        {featuredProjects.map((project, i) => {
          const isFullWidth = project.slug === "playbook" || project.slug === "content-maps";
          const classes = `bg-background p-8 md:p-12 flex flex-col justify-between group hover:bg-muted/30 transition-colors ${
            isFullWidth ? "md:col-span-2" : ""
          }`;

          return (
            <Link key={project.slug} href={`/work/${project.slug}`} className={classes}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full flex flex-col"
              >
                {cardVisuals[project.slug] && (
                  <div className="w-full overflow-hidden border-b border-foreground/10">
                    {cardVisuals[project.slug]}
                  </div>
                )}
                <div className="p-8 md:p-12 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-6">
                      {project.tag}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground">{project.summary}</p>
                  </div>
                  <div className="mt-12 flex items-center text-sm font-medium hover:text-primary relative self-start">
                    <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">View Project ↗</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-foreground/20 group-hover:bg-primary transition-colors" />
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Other 2025 Engagements */}
      {otherEngagements.length > 0 && (
      <>
      <div className="mb-10">
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-2">
          Also in 2025
        </span>
        <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-tight">Other Engagements</h2>
        <p className="text-lg text-foreground/60 font-light max-w-2xl">
          A wider set of client accounts I contributed to across content strategy, label architecture, and client education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 mb-24">
        {otherEngagements.map((project, i) => {
          const accentColors = ['#C45C26', '#C5F135', '#0D3B2E', '#C45C26', '#C5F135', '#0D3B2E', '#C45C26', '#C5F135'];
          const accent = accentColors[i % accentColors.length];
          const isLight = accent === '#C5F135';
          return (
            <Link key={project.slug} href={`/work/${project.slug}`} className="bg-background flex flex-col group hover:bg-muted/30 transition-colors">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="h-full flex flex-col"
              >
                <div className="h-1.5 w-full" style={{ backgroundColor: accent }} />
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-4">
                      {project.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif mb-3 leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.summary}</p>
                  </div>
                  <div className="mt-6 flex items-center text-sm font-medium relative self-start">
                    <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">View Project ↗</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-foreground/20 group-hover:bg-primary transition-colors" />
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
      </>
      )}

      {/* Older Projects */}
      <div className="mb-10">
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-2">
          Older Work
        </span>
        <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-tight">LazyPay · PayU Finance</h2>
        <p className="text-lg text-foreground/60 font-light max-w-2xl">
          UX Writing and content strategy work from 2021–2024, as the first and only UX Writer at PayU Finance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
        {olderProjects.map((project, i) => {
          const classes = `bg-background flex flex-col group transition-colors ${
            project.comingSoon ? "opacity-50" : "hover:bg-muted/30"
          }`;

          if (project.comingSoon) {
            return (
              <div key={project.slug} className={classes}>
                {project.thumbnail && (
                  <div className="w-full overflow-hidden" style={{ maxHeight: 200 }}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full object-cover"
                      style={{ maxHeight: 200 }}
                    />
                  </div>
                )}
                <div className="p-8 md:p-12 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-6">
                      {project.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{project.summary}</p>
                  </div>
                  <div className="mt-8">
                    <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs uppercase tracking-wider font-medium">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link key={project.slug} href={`/work/${project.slug}`} className={classes}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="h-full flex flex-col"
              >
                {project.thumbnail && (
                  <div className="w-full overflow-hidden" style={{ maxHeight: 220 }}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      style={{ maxHeight: 220 }}
                    />
                  </div>
                )}
                <div className="p-8 md:p-12 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-4">
                      {project.tag}
                      {project.duration && (
                        <span className="ml-3 text-foreground/30">·</span>
                      )}
                      {project.duration && (
                        <span className="ml-3">{project.duration}</span>
                      )}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif mb-3 leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.summary}</p>
                  </div>
                  <div className="mt-8 flex items-center text-sm font-medium relative self-start">
                    <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">View Project ↗</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-foreground/20 group-hover:bg-primary transition-colors" />
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Values Thinking methodology */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-32 border-t border-border/50 pt-16 grid md:grid-cols-12 gap-8 md:gap-16"
      >
        <div className="md:col-span-3">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-2">
            Methodology
          </span>
          <h2 className="text-2xl md:text-3xl font-serif leading-tight">Values Thinking</h2>
        </div>
        <div className="md:col-span-8 flex flex-col gap-8">
          <p className="text-lg text-foreground/70 leading-relaxed font-light">
            A structured content methodology applied across every Aampe client engagement — designed to bridge the gap between how a product team thinks about features and how users actually experience value. It produces label architectures that support effective agent learning, not just content that sounds good.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/50 border border-border/50">
            {valuesThinkingSteps.map(({ step, heading, body }) => (
              <div key={step} className="bg-background p-6 md:p-8 flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary">{step}</span>
                <h3 className="text-base font-medium text-foreground">{heading}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed font-light">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground/50 leading-relaxed font-light">
            Applied across 7+ clients in 2025 — fintech, sports, food delivery, fitness, travel, tax filing, and barbershop booking. Now documented in the Content Playbook and used in pre-sales and client onboarding contexts company-wide.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
