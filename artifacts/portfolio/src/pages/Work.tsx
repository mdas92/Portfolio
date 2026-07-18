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
  AampeStrategyVisual,
} from "../components/ProjectCardVisuals";

const cardVisuals: Record<string, React.ReactNode> = {
  "aampe-strategy": <AampeStrategyVisual compact />,
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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const href = `/work/${project.slug}`;
  const isSoon = project.comingSoon;

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.4) }}
      className={`group flex flex-col rounded-xl border border-border bg-background transition-all overflow-hidden ${isSoon ? "cursor-default" : "hover:border-primary/40 hover:bg-muted/40 cursor-pointer"}`}
    >
      {/* Visual thumbnail */}
      <div className={`w-full overflow-hidden border-b border-border relative ${isSoon ? "opacity-30 grayscale" : ""}`}>
        {cardVisuals[project.slug] || (
          <div className="w-full h-[110px] bg-muted flex items-center justify-center">
            <span className="font-serif text-4xl text-muted-foreground/30">
              {project.title.substring(0, 1)}
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-start justify-between gap-3">
          <span className={`text-[10px] font-sans font-semibold uppercase tracking-widest leading-tight ${isSoon ? "text-muted-foreground/40" : "text-primary"}`}>
            {project.tag}
          </span>
          <span className={`flex-shrink-0 font-sans text-[11px] tabular-nums ${isSoon ? "text-muted-foreground/40" : "text-muted-foreground"}`}>
            {project.year}
          </span>
        </div>

        <h2 className={`font-serif text-xl leading-tight transition-colors ${isSoon ? "text-foreground/30" : "group-hover:text-primary"}`}>
          {project.title}
        </h2>

        <p className={`text-sm font-sans leading-relaxed line-clamp-2 flex-1 ${isSoon ? "text-foreground/20" : "text-foreground/60"}`}>
          {project.summary}
        </p>

        <div className="flex items-center gap-3 pt-1">
          {project.confidential && (
            <span className="text-[9px] uppercase tracking-wider font-bold text-muted-foreground/60">Confidential</span>
          )}
          {isSoon ? (
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground/50 border border-border/50 px-2 py-1">
              Coming Soon
            </span>
          ) : (
            <span className="ml-auto text-xs font-sans font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Read case study →
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  if (isSoon) return <div>{inner}</div>;
  return <Link href={href}>{inner}</Link>;
};

export default function Work() {
  // Sorted list: 2025 projects first, then 2022, then 2021.
  // Archived projects are excluded from the public Work page (data kept in portfolio.ts).
  // Within the same year, preserve original array order.
  const sortedProjects = [...projects].filter((p) => !p.archived).sort((a, b) => {
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
      <div className="px-6 md:px-14 py-12 md:py-20 max-w-6xl mx-auto w-full">
        {/* Page header */}
        <header className="mb-10 md:mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-muted-foreground block mb-3">SELECTED WORK</span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight">What I've<br />built.</h1>
        </header>

        {/* 2-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
