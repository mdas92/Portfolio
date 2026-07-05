import React from 'react';

// --- DATA ---
const PROJECTS = [
  {
    id: 'product-taxonomy',
    title: 'Product Taxonomy: Renaming an AI Product While It Runs',
    tag: 'Information Architecture · Product Language',
    summary: 'Drove the evidence, framework, and decision session that ratified nine renamed product entities — then shipped the glossary and rollout plan for a product that never stops running.',
    year: '2025',
    type: 'ia'
  },
  {
    id: 'content-maps',
    title: 'Content Maps: Building the Shared Language for Agentic Content Strategy',
    tag: 'Content Strategy · Methodology',
    summary: "Turned a one-off planning habit into Aampe's standard strategic artifact — credited in a $90K closed-won deal and proposed as a 60-day certification for every new hire.",
    year: '2025',
    type: 'strategy'
  },
  {
    id: 'fintech-overhaul',
    title: 'End-to-End Content Overhaul for a Major Fintech App',
    tag: 'Content Strategy · Fintech',
    summary: 'Push notification overhaul — value props, 15 new message groups, legal review.',
    year: '2025',
    type: 'fintech'
  },
  {
    id: 'sports-league',
    title: 'In-Person Training for a Major Sports League',
    tag: 'Training · Content Co-Creation',
    summary: 'NYC-based content workshop — co-wrote 800+ message alternates in under 15 minutes.',
    year: '2025',
    type: 'training'
  },
  {
    id: 'tax-app',
    title: 'New-Client Kick-Off for a European Tax Filing App',
    tag: 'Client Onboarding · Europe',
    summary: 'Solo-led onboarding from scratch — Values Thinking, label framework, rapid launch.',
    year: '2025',
    type: 'onboarding'
  },
  {
    id: 'super-app-l10n',
    title: 'Localisation Framework for a Southeast Asian Super App',
    tag: 'Localisation · SEA',
    summary: 'Multi-language push notification framework across 4+ markets.',
    year: '2025',
    type: 'l10n'
  },
  {
    id: 'content-playbook',
    title: 'Content Playbook — Company-Wide Training Resource',
    tag: 'Internal · Company-Wide',
    summary: 'Comprehensive Figma deck covering label strategy, message architecture, and best practices. Distributed to all active clients.',
    year: '2025',
    type: 'playbook'
  },
  {
    id: 'barbershop-app',
    title: 'Barbershop Booking App',
    tag: 'Content Strategy · Marketplace',
    summary: "Full label audit and 6 new message groups — drove the account's first-ever active user messaging milestone.",
    year: '2025',
    type: 'marketplace'
  },
  {
    id: 'travel-app',
    title: 'Travel & Accommodation Super App',
    tag: 'Content Strategy · Travel',
    summary: 'Full-day Jakarta onsite across 5 sessions — content audit, label strategy, and promo optimisation. Account renewed at $172K ACV.',
    year: '2025',
    type: 'travel'
  },
  {
    id: 'running-app',
    title: 'Running Training App',
    tag: 'Content Strategy · Fitness',
    summary: 'Restructured label architecture and scoped a new campaign pipeline including Refer a Friend and Marathon upsell.',
    year: '2025',
    type: 'fitness'
  },
  {
    id: 'music-platform',
    title: 'Music Streaming Platform',
    tag: 'Content Strategy · Entertainment',
    summary: 'Identified a structural translation bug across 27 languages and co-created a platform-level fix with engineering.',
    year: '2025',
    type: 'entertainment'
  },
  {
    id: 'financial-rewards',
    title: 'Financial Rewards App',
    tag: 'Content Strategy · Fintech',
    summary: "Full account optimisation review — 15 new message group proposals and two working sessions with the client's content team.",
    year: '2025',
    type: 'fintech'
  },
  {
    id: 'greeting-card-app',
    title: 'Personalised Greeting Card App',
    tag: 'Content Strategy · Consumer',
    summary: 'Built a full Content Roadmap strategy deck and Custom Components implementation plan — delivered independently, without a live session.',
    year: '2025',
    type: 'consumer'
  },
  {
    id: 'shopping-rewards',
    title: 'Shopping Rewards App',
    tag: 'Client Onboarding · Retail',
    summary: 'Contributed to the initial client success call for a newly closed $101K ACV account targeting three use cases.',
    year: '2025',
    type: 'onboarding'
  },
  {
    id: 'chat-assistant',
    title: 'Building an In-App Chat Assistant',
    tag: 'Conversation Design · Fintech',
    summary: 'End-to-end conversation design for a support bot resolving 50,000+ monthly queries — from research to a 5-product decision tree.',
    year: '2022',
    type: 'chat'
  },
  {
    id: 'expense-mgmt',
    title: 'Exploring Expense Management',
    tag: 'Content Strategy · Fintech',
    summary: 'Research-driven IA, content strategy, and terminology framework for a new expense tracking feature — built before a single screen was designed.',
    year: '2022',
    type: 'fintech'
  },
  {
    id: 'repayment-rates',
    title: 'Improving Repayment Rates',
    tag: 'Content Strategy · Fintech',
    summary: 'Content and design interventions to drive on-time repayments — a three-pronged strategy targeting discoverability, urgency, and transparency.',
    year: '2022',
    type: 'fintech'
  },
  {
    id: 'lazycard-review',
    title: 'UX Writing Review for LazyCard',
    tag: 'UX Writing · Fintech',
    summary: "Full content audit and rewrite for a new physical and digital credit card — first project as LazyPay's first UX Writer.",
    year: '2021',
    type: 'fintech'
  }
];

// --- ICONS / VISUALS ---

const ProjectVisual = ({ type }: { type: string }) => {
  const accentColor = "#B5652F"; // Terracotta
  const inkColor = "#2B2420"; // Espresso
  
  const baseClasses = "w-full h-full flex items-center justify-center bg-[#F3EFE9] rounded-md overflow-hidden p-3";
  
  switch (type) {
    case 'ia':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="20" height="12" rx="2" stroke={inkColor} strokeWidth="2.5" />
            <rect x="36" y="8" width="20" height="12" rx="2" stroke={inkColor} strokeWidth="2.5" />
            <rect x="22" y="44" width="20" height="12" rx="2" stroke={accentColor} strokeWidth="2.5" fill={accentColor} fillOpacity="0.1" />
            <path d="M18 20V32H46V20M32 32V44" stroke={inkColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'strategy':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="10" stroke={inkColor} strokeWidth="2.5" />
            <circle cx="44" cy="44" r="10" stroke={accentColor} strokeWidth="2.5" fill={accentColor} fillOpacity="0.1" />
            <path d="M28 26L36 38" stroke={inkColor} strokeWidth="2.5" strokeDasharray="4 2" />
            <path d="M20 20L20 20.01M44 44L44 44.01" stroke={inkColor} strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'fintech':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="16" width="44" height="32" rx="4" stroke={inkColor} strokeWidth="2.5" />
            <path d="M10 24H54" stroke={inkColor} strokeWidth="2.5" />
            <circle cx="46" cy="38" r="4" stroke={accentColor} strokeWidth="2.5" fill={accentColor} fillOpacity="0.1" />
            <rect x="18" y="32" width="16" height="3" rx="1.5" fill={inkColor} />
            <rect x="18" y="40" width="10" height="3" rx="1.5" fill={inkColor} />
          </svg>
        </div>
      );
    case 'training':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 44V20C12 17.7909 13.7909 16 16 16H48C50.2111 16 52 17.7909 52 20V44" stroke={inkColor} strokeWidth="2.5" />
            <path d="M8 44H56" stroke={inkColor} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M22 28H42M22 36H34" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'onboarding':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 52L32 12L52 52H12Z" stroke={inkColor} strokeWidth="2.5" />
            <circle cx="32" cy="38" r="6" stroke={accentColor} strokeWidth="2.5" fill={accentColor} fillOpacity="0.1" />
          </svg>
        </div>
      );
    case 'l10n':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="20" stroke={inkColor} strokeWidth="2.5" />
            <path d="M32 12V52M12 32H52" stroke={inkColor} strokeWidth="1.5" opacity="0.5" />
            <path d="M22 20C26 24 26 40 22 44M42 20C38 24 38 40 42 44" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'playbook':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="18" y="10" width="30" height="40" rx="2" stroke={inkColor} strokeWidth="2" transform="rotate(10 33 30)" fill="white" />
            <rect x="14" y="14" width="30" height="40" rx="2" stroke={inkColor} strokeWidth="2" transform="rotate(-5 29 34)" fill="white" />
            <rect x="16" y="12" width="30" height="40" rx="2" stroke={inkColor} strokeWidth="2.5" fill="white" />
            <path d="M22 22H40M22 30H40M22 38H32" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'marketplace':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20H54L50 48H14L10 20Z" stroke={inkColor} strokeWidth="2.5" />
            <path d="M22 20V14C22 11.7909 23.7909 10 26 10H38C40.2111 10 42 11.7909 42 14V20" stroke={inkColor} strokeWidth="2.5" />
            <circle cx="32" cy="34" r="5" stroke={accentColor} strokeWidth="2.5" fill={accentColor} fillOpacity="0.1" />
          </svg>
        </div>
      );
    case 'travel':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 52V24C16 19.5817 19.5817 16 24 16H40C44.4183 16 48 19.5817 48 24V52" stroke={inkColor} strokeWidth="2.5" />
            <rect x="24" y="32" width="16" height="10" rx="1" stroke={accentColor} strokeWidth="2" fill={accentColor} fillOpacity="0.1" />
            <path d="M8 52H56" stroke={inkColor} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'fitness':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 32C12 20.9543 20.9543 12 32 12C43.0457 12 52 20.9543 52 32C52 43.0457 43.0457 52 32 52" stroke={inkColor} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M32 12V22M52 32H42M32 52V42" stroke={inkColor} strokeWidth="1.5" />
            <path d="M32 32L44 20" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="32" cy="32" r="3" fill={inkColor} />
          </svg>
        </div>
      );
    case 'entertainment':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="22" stroke={inkColor} strokeWidth="2.5" />
            <path d="M28 22V42L44 32L28 22Z" fill={accentColor} />
          </svg>
        </div>
      );
    case 'consumer':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16H52V48H12V16Z" stroke={inkColor} strokeWidth="2.5" />
            <path d="M32 26L35 32H41L36 36L38 42L32 38L26 42L28 36L23 32H29L32 26Z" fill={accentColor} />
            <path d="M12 24H52" stroke={inkColor} strokeWidth="1.5" />
          </svg>
        </div>
      );
    case 'chat':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16H52V42H32L20 50V42H12V16Z" stroke={inkColor} strokeWidth="2.5" />
            <circle cx="24" cy="29" r="2.5" fill={accentColor} />
            <circle cx="32" cy="29" r="2.5" fill={accentColor} />
            <circle cx="40" cy="29" r="2.5" fill={accentColor} />
          </svg>
        </div>
      );
    default:
      return (
        <div className={baseClasses}>
          <div className="w-8 h-8 rounded-full border-2 border-[#2B2420] flex items-center justify-center">
            <div className="w-3 h-3 bg-[#B5652F] rounded-full" />
          </div>
        </div>
      );
  }
};

// --- COMPONENT ---

export default function WarmEditorial() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2B2420] font-sans selection:bg-[#B5652F]/20">
      {/* Google Fonts */}
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap" 
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .font-serif { font-family: 'Fraunces', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}} />

      {/* Header */}
      <header className="max-w-[1280px] mx-auto pt-16 pb-8 px-8">
        <h1 className="font-serif text-3xl font-medium tracking-tight">Work</h1>
        <p className="mt-2 text-sm text-[#2B2420]/60 font-sans tracking-wide uppercase">Selected Case Studies · 2021—2025</p>
      </header>

      {/* Main List */}
      <main className="max-w-[1280px] mx-auto px-8 pb-32">
        <div className="flex flex-col border-t border-[#2B2420]/10">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group flex items-start py-6 border-b border-[#2B2420]/10 hover:bg-[#B5652F]/[0.02] transition-colors duration-200"
            >
              {/* Visual Asset (Mini Card) */}
              <div className="flex-shrink-0 w-24 h-24 mr-8">
                <ProjectVisual type={project.type} />
              </div>

              {/* Text Content */}
              <div className="flex-grow flex flex-col pt-1">
                <div className="flex items-baseline justify-between mb-1">
                  <h2 className="font-serif text-xl font-medium group-hover:text-[#B5652F] transition-colors">
                    {project.title}
                  </h2>
                  <span className="ml-4 font-sans text-xs font-medium text-[#2B2420]/40 tabular-nums">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-sm font-sans text-[#2B2420]/80 leading-relaxed max-w-3xl mb-3">
                  {project.summary}
                </p>

                <div className="flex items-center gap-2">
                  <span className="inline-block px-2 py-0.5 bg-[#B5652F]/10 text-[#B5652F] text-[10px] font-semibold uppercase tracking-wider rounded">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Arrow Decoration (Subtle) */}
              <div className="flex-shrink-0 self-center ml-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#B5652F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Meta */}
      <footer className="max-w-[1280px] mx-auto px-8 py-16 text-center border-t border-[#2B2420]/5">
        <p className="font-serif italic text-lg text-[#2B2420]/40">End of catalog.</p>
      </footer>
    </div>
  );
}
