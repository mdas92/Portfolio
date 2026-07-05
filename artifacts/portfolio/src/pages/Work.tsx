import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { projects, Project } from "../data/portfolio";
import {
  ContentMapsVisual,
  FintechVisual,
  SportsVisual,
  TaxVisual,
  SuperappVisual,
  PlaybookVisual,
  ProductTaxonomyVisual,
  ChatbotVisual,
  LazycardVisual,
  ExpenseMgmtVisual,
  RepaymentsVisual,
  BarbershopVisual,
  TravelVisual,
  RunningVisual,
  MusicVisual,
  RewardsVisual,
  GreetingVisual,
  ShoppingVisual,
} from "../components/ProjectCardVisuals";

const cardVisuals: Record<string, React.ReactNode> = {
  "product-taxonomy": <ProductTaxonomyVisual compact />,
  "content-maps": <ContentMapsVisual compact />,
  "fintech-overhaul": <FintechVisual compact />,
  "sports-training": <SportsVisual compact />,
  "tax-onboarding": <TaxVisual compact />,
  "superapp-l10n": <SuperappVisual compact />,
  "playbook": <PlaybookVisual compact />,
  "chatbot": <ChatbotVisual compact />,
  "lazycard": <LazycardVisual compact />,
  "expense-mgmt": <ExpenseMgmtVisual compact />,
  "repayments": <RepaymentsVisual compact />,
  "barbershop-booking": <BarbershopVisual compact />,
  "travel-superapp": <TravelVisual compact />,
  "running-app": <RunningVisual compact />,
  "music-streaming": <MusicVisual compact />,
  "financial-rewards": <RewardsVisual compact />,
  "greeting-card-app": <GreetingVisual compact />,
  "shopping-rewards": <ShoppingVisual compact />,
};

const ProjectRow = ({ project, index }: { project: Project; index: number }) => {
  // Use wouter Link for internal navigation
  // Note: Special cases from original Work.tsx logic (content-maps/product-taxonomy)
  // are actually just normal routes in ProjectDetail.tsx or dedicated pages
  // but they all live under /work/:slug in the router mostly.
  const href = `/work/${project.slug}`;

  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
        className="group flex items-center py-6 border-b border-border/50 hover:bg-muted/30 transition-colors cursor-pointer"
      >
        {/* Visual Asset (Mini Card) */}
        <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 mr-6 md:mr-8 overflow-hidden rounded-md border border-border/10">
          {cardVisuals[project.slug] || (
            <div className="w-full h-full bg-muted flex items-center justify-center text-[10px] text-muted-foreground">
              {project.title.substring(0, 1)}
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="flex-grow flex flex-col pt-1 overflow-hidden">
          <div className="flex items-baseline justify-between mb-1">
            <h2 className="font-serif text-lg md:text-xl font-medium group-hover:text-primary transition-colors truncate pr-4">
              {project.title}
            </h2>
            <span className="flex-shrink-0 font-sans text-[11px] md:text-xs font-medium text-muted-foreground tabular-nums">
              {project.year}
            </span>
          </div>

          <p className="text-sm font-sans text-foreground/70 leading-relaxed max-w-3xl mb-3 line-clamp-1 md:line-clamp-2">
            {project.summary}
          </p>

          <div className="flex items-center gap-3">
             {/* Quirky Riso Tag */}
            <div 
              className="inline-block px-2 py-0.5 border-2 border-foreground bg-background text-foreground text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-transform group-hover:rotate-1"
              style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1.5}deg)` }}
            >
              {project.tag.split(" · ")[0]}
            </div>
            {project.archived && (
              <span className="text-[9px] uppercase tracking-wider font-bold text-primary/60">Archived</span>
            )}
            {project.confidential && (
              <span className="text-[9px] uppercase tracking-wider font-bold text-muted-foreground/60">Confidential</span>
            )}
          </div>
        </div>

        {/* Arrow Decoration */}
        <div className="flex-shrink-0 self-center ml-4 md:ml-8 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
          <svg 
            width="20" height="20" viewBox="0 0 20 20" fill="none" 
            className="drop-shadow-[2px_2px_0px_#C45C26]"
          >
            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#0D3B2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </Link>
  );
};

export default function Work() {
  // Sorted list: 2025 projects first, then 2022, then 2021.
  // Within the same year, preserve original array order.
  const sortedProjects = [...projects].sort((a, b) => {
    const yearA = parseInt(a.year);
    const yearB = parseInt(b.year);
    if (yearA !== yearB) {
      return yearB - yearA;
    }
    // If same year, maintain original order
    return projects.indexOf(a) - projects.indexOf(b);
  });

  return (
    <div className="flex-1 flex flex-col w-full bg-background">
      <div className="px-6 md:px-16 lg:px-24 py-12 md:py-20 max-w-6xl mx-auto w-full">
        {/* Compact Page Header */}
        <header className="mb-12 md:mb-16">
          <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-3">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight">Work</h1>
        </header>

        {/* Main List */}
        <div className="flex flex-col border-t border-border/50">
          {sortedProjects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
