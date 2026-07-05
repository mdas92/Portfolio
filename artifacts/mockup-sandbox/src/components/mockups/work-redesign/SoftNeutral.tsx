import React from 'react';
import { 
  Network, 
  Map, 
  RefreshCcw, 
  Users, 
  Zap, 
  Globe, 
  BookOpen, 
  Scissors, 
  Plane, 
  Activity, 
  Music, 
  Gift, 
  ShoppingBag, 
  MessageSquare, 
  Search, 
  CreditCard,
  TrendingUp,
  Database
} from 'lucide-react';

const projects = [
  {
    title: "Product Taxonomy: Renaming an AI Product While It Runs",
    tag: "Information Architecture · Product Language",
    summary: "Drove the evidence, framework, and decision session that ratified nine renamed product entities — then shipped the glossary and rollout plan for a product that never stops running.",
    year: "2025",
    icon: Database
  },
  {
    title: "Content Maps: Building the Shared Language for Agentic Content Strategy",
    tag: "Content Strategy · Methodology",
    summary: "Turned a one-off planning habit into Aampe's standard strategic artifact — credited in a $90K closed-won deal and proposed as a 60-day certification for every new hire.",
    year: "2025",
    icon: Map
  },
  {
    title: "End-to-End Content Overhaul for a Major Fintech App",
    tag: "Content Strategy · Fintech",
    summary: "Push notification overhaul — value props, 15 new message groups, legal review.",
    year: "2025",
    icon: RefreshCcw
  },
  {
    title: "In-Person Training for a Major Sports League",
    tag: "Training · Content Co-Creation",
    summary: "NYC-based content workshop — co-wrote 800+ message alternates in under 15 minutes.",
    year: "2025",
    icon: Users
  },
  {
    title: "New-Client Kick-Off for a European Tax Filing App",
    tag: "Client Onboarding · Europe",
    summary: "Solo-led onboarding from scratch — Values Thinking, label framework, rapid launch.",
    year: "2025",
    icon: Zap
  },
  {
    title: "Localisation Framework for a Southeast Asian Super App",
    tag: "Localisation · SEA",
    summary: "Multi-language push notification framework across 4+ markets.",
    year: "2025",
    icon: Globe
  },
  {
    title: "Content Playbook — Company-Wide Training Resource",
    tag: "Internal · Company-Wide",
    summary: "Comprehensive Figma deck covering label strategy, message architecture, and best practices. Distributed to all active clients.",
    year: "2025",
    icon: BookOpen
  },
  {
    title: "Barbershop Booking App",
    tag: "Content Strategy · Marketplace",
    summary: "Full label audit and 6 new message groups — drove the account's first-ever active user messaging milestone.",
    year: "2025",
    icon: Scissors
  },
  {
    title: "Travel & Accommodation Super App",
    tag: "Content Strategy · Travel",
    summary: "Full-day Jakarta onsite across 5 sessions — content audit, label strategy, and promo optimisation. Account renewed at $172K ACV.",
    year: "2025",
    icon: Plane
  },
  {
    title: "Running Training App",
    tag: "Content Strategy · Fitness",
    summary: "Restructured label architecture and scoped a new campaign pipeline including Refer a Friend and Marathon upsell.",
    year: "2025",
    icon: Activity
  },
  {
    title: "Music Streaming Platform",
    tag: "Content Strategy · Entertainment",
    summary: "Identified a structural translation bug across 27 languages and co-created a platform-level fix with engineering.",
    year: "2025",
    icon: Music
  },
  {
    title: "Financial Rewards App",
    tag: "Content Strategy · Fintech",
    summary: "Full account optimisation review — 15 new message group proposals and two working sessions with the client's content team.",
    year: "2025",
    icon: TrendingUp
  },
  {
    title: "Personalised Greeting Card App",
    tag: "Content Strategy · Consumer",
    summary: "Built a full Content Roadmap strategy deck and Custom Components implementation plan — delivered independently, without a live session.",
    year: "2025",
    icon: Gift
  },
  {
    title: "Shopping Rewards App",
    tag: "Client Onboarding · Retail",
    summary: "Contributed to the initial client success call for a newly closed $101K ACV account targeting three use cases.",
    year: "2025",
    icon: ShoppingBag
  },
  {
    title: "Building an In-App Chat Assistant",
    tag: "Conversation Design · Fintech",
    summary: "End-to-end conversation design for a support bot resolving 50,000+ monthly queries — from research to a 5-product decision tree.",
    year: "2022",
    icon: MessageSquare
  },
  {
    title: "Exploring Expense Management",
    tag: "Content Strategy · Fintech",
    summary: "Research-driven IA, content strategy, and terminology framework for a new expense tracking feature — built before a single screen was designed.",
    year: "2022",
    icon: Search
  },
  {
    title: "Improving Repayment Rates",
    tag: "Content Strategy · Fintech",
    summary: "Content and design interventions to drive on-time repayments — a three-pronged strategy targeting discoverability, urgency, and transparency.",
    year: "2022",
    icon: TrendingUp
  },
  {
    title: "UX Writing Review for LazyCard",
    tag: "UX Writing · Fintech",
    summary: "Full content audit and rewrite for a new physical and digital credit card — first project as LazyPay's first UX Writer.",
    year: "2021",
    icon: CreditCard
  }
];

export default function SoftNeutral() {
  return (
    <div className="min-h-screen bg-[#F5F6F8] text-[#1A1D23] font-['Inter'] selection:bg-[#3B6FDB]/20">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

      <div className="max-w-[800px] mx-auto pt-16 pb-24 px-6">
        <header className="mb-12">
          <h1 className="text-sm font-medium tracking-tight text-[#1A1D23]/60 mb-1 uppercase">Selected Work</h1>
          <p className="text-2xl font-semibold tracking-tight">Portfolio Index</p>
        </header>

        <main className="space-y-px bg-[#E5E7EB] border border-[#E5E7EB] rounded-lg overflow-hidden shadow-sm">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white flex items-start gap-4 p-4 transition-colors hover:bg-[#F9FAFB]"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-[#3B6FDB]/10 flex items-center justify-center text-[#3B6FDB]">
                  <project.icon size={24} strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="flex-grow min-w-0 py-0.5">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <h3 className="text-sm font-semibold truncate leading-tight group-hover:text-[#3B6FDB] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-medium text-[#1A1D23]/40 tabular-nums">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-xs text-[#1A1D23]/70 leading-relaxed mb-2 line-clamp-2">
                  {project.summary}
                </p>
                
                <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#3B6FDB]/5 text-[10px] font-medium text-[#3B6FDB]/80 border border-[#3B6FDB]/10">
                  {project.tag}
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
