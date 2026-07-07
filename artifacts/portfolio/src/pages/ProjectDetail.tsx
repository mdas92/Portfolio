import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { projects } from "../data/portfolio";
import {
  FintechVisual,
  SportsVisual,
  TaxVisual,
  SuperappVisual,
  ContentMapsVisual,
  ProductTaxonomyVisual,
  PlaybookVisual
} from "../components/ProjectCardVisuals";

// Renders **bold** markdown-style emphasis as themed highlights so key
// phrases stand out from body copy instead of one long grey wall of text.
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-primary">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

const heroVisuals: Record<string, React.ReactNode> = {
  "fintech-overhaul": <FintechVisual />,
  "sports-training": <SportsVisual />,
  "tax-onboarding": <TaxVisual />,
  "superapp-l10n": <SuperappVisual />,
  "content-maps": <ContentMapsVisual />,
  "product-taxonomy": <ProductTaxonomyVisual />,
  "playbook": <PlaybookVisual />,
};

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-serif mb-4">Project not found</h1>
        <Link href="/work" className="text-primary hover:underline">
          ← Back to Work
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col pb-24 w-full"
    >
      {/* Hero Section */}
      <div className="px-6 md:px-16 lg:px-24 py-8 md:py-16 max-w-5xl mx-auto w-full">
        <Link href="/work" className="inline-flex items-center text-sm font-sans font-semibold uppercase tracking-wider px-4 py-2 border-2 border-foreground bg-background transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] mb-12">
          ← Back to Work
        </Link>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-12 tracking-tight leading-tight">
          {project.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-border/50 text-sm">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Role</div>
            <div className="font-medium text-foreground">{project.role}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Context</div>
            <div className="font-medium text-foreground">{project.context}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
              {project.duration ? "Duration" : "Year"}
            </div>
            <div className="font-medium text-foreground">{project.duration ?? project.year}</div>
          </div>
        </div>
      </div>

      {/* Hero Image / Visual */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full overflow-hidden border border-border/10"
          style={{ maxHeight: 480 }}
        >
          {heroVisuals[project.slug] ? (
            heroVisuals[project.slug]
          ) : project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
              style={{ maxHeight: 480 }}
            />
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 lg:px-24 max-w-3xl mx-auto w-full flex flex-col gap-16">

        {/* Challenge */}
        {project.challenge && (
          <section>
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
              The Challenge
            </h2>
            <p className="text-lg md:text-xl text-foreground/95 leading-relaxed font-normal">
              <RichText text={project.challenge} />
            </p>
          </section>
        )}

        {/* Rich sections (for older projects) */}
        {project.sections && project.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
              {section.heading}
            </h2>

            {section.content && (
              <p className="text-lg md:text-xl text-foreground/95 leading-relaxed font-normal mb-8">
                <RichText text={section.content} />
              </p>
            )}

            {section.images && section.images.length > 0 && (
              <div className={`mb-8 grid gap-4 ${section.images.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                {section.images.map((img, k) => (
                  <div key={k} className="flex flex-col gap-2">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto rounded-lg border border-border/40 bg-background"
                    />
                    {img.caption && (
                      <p className="text-xs text-center text-muted-foreground font-sans leading-snug">{img.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {section.image && (
              <div className={`mb-8 ${section.image.display === "inline" ? "max-w-2xl" : "w-full"}`}>
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className="w-full h-auto rounded-lg border border-border/40 bg-background"
                />
                {section.image.caption && (
                  <p className="mt-2 text-xs text-center text-muted-foreground font-sans">{section.image.caption}</p>
                )}
              </div>
            )}

            {section.bullets && section.bullets.length > 0 && (
              <ul className="flex flex-col gap-3 text-lg text-foreground/95 leading-relaxed font-normal list-disc pl-5 marker:text-primary">
                {section.bullets.map((b, j) => (
                  <li key={j}><RichText text={b} /></li>
                ))}
              </ul>
            )}

            {section.note && (
              <p className="mt-6 text-sm text-muted-foreground italic border-l-2 border-border pl-4">
                <RichText text={section.note} />
              </p>
            )}
          </section>
        ))}

        {/* What I Did (for current-job projects) */}
        {project.whatIDid && project.whatIDid.length > 0 && (
          <section>
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
              What I Did
            </h2>
            <ul className="flex flex-col gap-4 text-lg text-foreground/95 leading-relaxed font-normal list-disc pl-5 marker:text-primary">
              {project.whatIDid.map((item, i) => (
                <li key={i}><RichText text={item} /></li>
              ))}
            </ul>
          </section>
        )}

        {/* Result */}
        {project.result && (
          <section>
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
              Result
            </h2>
            <p className="text-lg md:text-xl text-foreground/95 leading-relaxed font-normal">
              <RichText text={project.result} />
            </p>
          </section>
        )}

        {/* Confidential notice */}
        {project.confidential && (
          <div className="border border-border/50 p-6 text-sm text-muted-foreground">
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium block mb-2">Confidential</span>
            Screens and detailed wireframes for this project are not shown. This feature was in progress at time of documentation and had not been publicly released.
          </div>
        )}

        {/* Quote */}
        {project.quote && (
          <section className="pt-8">
            <blockquote className="border-l-2 border-primary pl-6 py-2">
              <p className="text-2xl md:text-3xl font-serif italic text-foreground leading-snug">
                "{project.quote}"
              </p>
            </blockquote>
          </section>
        )}

      </div>
    </motion.article>
  );
}
