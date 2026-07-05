import React from 'react';
import { motion } from 'framer-motion';

/**
 * PROJECT DATA
 */
const PROJECTS = [
  {
    title: "Product Taxonomy: Renaming an AI Product While It Runs",
    tag: "Information Architecture · Product Language",
    summary: "Drove the evidence, framework, and decision session that ratified nine renamed product entities — then shipped the glossary and rollout plan for a product that never stops running.",
    year: "2025",
    type: "taxonomy"
  },
  {
    title: "Content Maps: Building the Shared Language for Agentic Content Strategy",
    tag: "Content Strategy · Methodology",
    summary: "Turned a one-off planning habit into Aampe's standard strategic artifact — credited in a $90K closed-won deal and proposed as a 60-day certification for every new hire.",
    year: "2025",
    type: "map"
  },
  {
    title: "End-to-End Content Overhaul for a Major Fintech App",
    tag: "Content Strategy · Fintech",
    summary: "Push notification overhaul — value props, 15 new message groups, legal review.",
    year: "2025",
    type: "fintech"
  },
  {
    title: "In-Person Training for a Major Sports League",
    tag: "Training · Content Co-Creation",
    summary: "NYC-based content workshop — co-wrote 800+ message alternates in under 15 minutes.",
    year: "2025",
    type: "training"
  },
  {
    title: "New-Client Kick-Off for a European Tax Filing App",
    tag: "Client Onboarding · Europe",
    summary: "Solo-led onboarding from scratch — Values Thinking, label framework, rapid launch.",
    year: "2025",
    type: "onboarding"
  },
  {
    title: "Localisation Framework for a Southeast Asian Super App",
    tag: "Localisation · SEA",
    summary: "Multi-language push notification framework across 4+ markets.",
    year: "2025",
    type: "localisation"
  },
  {
    title: "Content Playbook — Company-Wide Training Resource",
    tag: "Internal · Company-Wide",
    summary: "Comprehensive Figma deck covering label strategy, message architecture, and best practices. Distributed to all active clients.",
    year: "2025",
    type: "playbook"
  },
  {
    title: "Barbershop Booking App",
    tag: "Content Strategy · Marketplace",
    summary: "Full label audit and 6 new message groups — drove the account's first-ever active user messaging milestone.",
    year: "2025",
    type: "marketplace"
  },
  {
    title: "Travel & Accommodation Super App",
    tag: "Content Strategy · Travel",
    summary: "Full-day Jakarta onsite across 5 sessions — content audit, label strategy, and promo optimisation. Account renewed at $172K ACV.",
    year: "2025",
    type: "travel"
  },
  {
    title: "Running Training App",
    tag: "Content Strategy · Fitness",
    summary: "Restructured label architecture and scoped a new campaign pipeline including Refer a Friend and Marathon upsell.",
    year: "2025",
    type: "fitness"
  },
  {
    title: "Music Streaming Platform",
    tag: "Content Strategy · Entertainment",
    summary: "Identified a structural translation bug across 27 languages and co-created a platform-level fix with engineering.",
    year: "2025",
    type: "entertainment"
  },
  {
    title: "Financial Rewards App",
    tag: "Content Strategy · Fintech",
    summary: "Full account optimisation review — 15 new message group proposals and two working sessions with the client's content team.",
    year: "2025",
    type: "fintech"
  },
  {
    title: "Personalised Greeting Card App",
    tag: "Content Strategy · Consumer",
    summary: "Built a full Content Roadmap strategy deck and Custom Components implementation plan — delivered independently, without a live session.",
    year: "2025",
    type: "consumer"
  },
  {
    title: "Shopping Rewards App",
    tag: "Client Onboarding · Retail",
    summary: "Contributed to the initial client success call for a newly closed $101K ACV account targeting three use cases.",
    year: "2025",
    type: "onboarding"
  },
  {
    title: "Building an In-App Chat Assistant",
    tag: "Conversation Design · Fintech",
    summary: "End-to-end conversation design for a support bot resolving 50,000+ monthly queries — from research to a 5-product decision tree.",
    year: "2022",
    type: "chat"
  },
  {
    title: "Exploring Expense Management",
    tag: "Content Strategy · Fintech",
    summary: "Research-driven IA, content strategy, and terminology framework for a new expense tracking feature — built before a single screen was designed.",
    year: "2022",
    type: "fintech"
  },
  {
    title: "Improving Repayment Rates",
    tag: "Content Strategy · Fintech",
    summary: "Content and design interventions to drive on-time repayments — a three-pronged strategy targeting discoverability, urgency, and transparency.",
    year: "2022",
    type: "fintech"
  },
  {
    title: "UX Writing Review for LazyCard",
    tag: "UX Writing · Fintech",
    summary: "Full content audit and rewrite for a new physical and digital credit card — first project as LazyPay's first UX Writer.",
    year: "2021",
    type: "fintech"
  }
];

const ACCENT_COLOR = "#E8492A";
const TEXT_COLOR = "#161616";
const BG_COLOR = "#FAFAF8";

/**
 * Small info-dense graphic elements
 */
const ProjectVisual = ({ type }: { type: string }) => {
  const stroke = ACCENT_COLOR;
  
  const visuals: Record<string, React.ReactNode> = {
    taxonomy: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M10 20H70M10 40H50M10 60H30" stroke={stroke} strokeWidth="1.5" />
        <rect x="55" y="35" width="15" height="15" stroke={stroke} strokeWidth="1.5" />
        <path d="M35 55L45 65L65 45" stroke={stroke} strokeWidth="1.5" />
      </svg>
    ),
    map: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="20" cy="20" r="4" fill={stroke} />
        <circle cx="60" cy="30" r="4" fill={stroke} />
        <circle cx="30" cy="60" r="4" fill={stroke} />
        <circle cx="50" cy="55" r="4" fill={stroke} />
        <path d="M20 20L60 30L50 55L30 60L20 20" stroke={stroke} strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
    fintech: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="15" y="20" width="50" height="40" rx="4" stroke={stroke} strokeWidth="1.5" />
        <path d="M15 35H65" stroke={stroke} strokeWidth="1.5" />
        <circle cx="55" cy="50" r="3" fill={stroke} />
        <path d="M25 50H40" stroke={stroke} strokeWidth="1.5" />
      </svg>
    ),
    training: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M20 60V20L60 40L20 60Z" stroke={stroke} strokeWidth="1.5" />
        <path d="M15 15L65 65" stroke={stroke} strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    onboarding: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M15 40C15 26.1929 26.1929 15 40 15V15C53.8071 15 65 26.1929 65 40V65H15V40Z" stroke={stroke} strokeWidth="1.5" />
        <circle cx="40" cy="35" r="5" stroke={stroke} strokeWidth="1.5" />
      </svg>
    ),
    localisation: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="25" stroke={stroke} strokeWidth="1.5" />
        <path d="M15 40H65M40 15V65" stroke={stroke} strokeWidth="1" opacity="0.5" />
        <path d="M22 22L58 58M58 22L22 58" stroke={stroke} strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    playbook: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="25" y="20" width="30" height="40" stroke={stroke} strokeWidth="1.5" />
        <rect x="20" y="25" width="30" height="40" stroke={stroke} strokeWidth="1.5" fill={BG_COLOR} />
        <rect x="15" y="30" width="30" height="40" stroke={stroke} strokeWidth="1.5" fill={BG_COLOR} />
        <path d="M20 40H40M20 50H35" stroke={stroke} strokeWidth="1" />
      </svg>
    ),
    marketplace: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M20 20H60V60H20V20Z" stroke={stroke} strokeWidth="1.5" />
        <path d="M20 30H60M35 20V60M45 20V60" stroke={stroke} strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    travel: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M40 15C30 15 20 23 20 35C20 47 40 65 40 65C40 65 60 47 60 35C60 23 50 15 40 15Z" stroke={stroke} strokeWidth="1.5" />
        <circle cx="40" cy="35" r="5" stroke={stroke} strokeWidth="1.5" />
      </svg>
    ),
    fitness: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M15 60L25 45L35 55L50 30L65 40" stroke={stroke} strokeWidth="2" />
        <circle cx="65" cy="40" r="3" fill={stroke} />
      </svg>
    ),
    entertainment: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="20" y="20" width="40" height="40" rx="20" stroke={stroke} strokeWidth="1.5" />
        <path d="M35 30V50L50 40L35 30Z" fill={stroke} />
      </svg>
    ),
    consumer: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M40 20L45 35H60L48 45L53 60L40 50L27 60L32 45L20 35H35L40 20Z" stroke={stroke} strokeWidth="1.5" />
      </svg>
    ),
    chat: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M20 20H60V50H30L20 60V20Z" stroke={stroke} strokeWidth="1.5" />
        <circle cx="35" cy="35" r="1.5" fill={stroke} />
        <circle cx="40" cy="35" r="1.5" fill={stroke} />
        <circle cx="45" cy="35" r="1.5" fill={stroke} />
      </svg>
    )
  };

  return (
    <div className="flex-shrink-0 bg-white/50 border border-[#E8492A]/10 rounded-sm overflow-hidden flex items-center justify-center" style={{ width: '80px', height: '80px' }}>
      {visuals[type] || visuals['taxonomy']}
    </div>
  );
};

export function SwissGrid() {
  return (
    <div className="min-h-screen font-['Space_Grotesk'] text-[#161616] selection:bg-[#E8492A] selection:text-white" style={{ backgroundColor: BG_COLOR }}>
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        body { margin: 0; padding: 0; }
        .swiss-grid-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 40px 60px;
        }
        .project-row {
          display: grid;
          grid-template-columns: 60px 100px 1fr 120px 80px;
          gap: 24px;
          align-items: center;
          padding: 16px 0;
          border-top: 1px solid #161616;
        }
        .project-row:last-child {
          border-bottom: 1px solid #161616;
        }
        .text-accent { color: ${ACCENT_COLOR}; }
        .label-caps {
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
      `}</style>

      <div className="swiss-grid-container">
        {/* Header */}
        <header className="mb-20">
          <div className="flex justify-between items-baseline border-b border-[#161616] pb-2 mb-2">
            <h1 className="text-4xl font-bold tracking-tighter uppercase leading-none">Selected Work</h1>
            <span className="text-sm font-medium tracking-tight">Mohana Das Portfolio 2025</span>
          </div>
          <p className="text-sm max-w-md font-light leading-snug">
            A dense index of content strategy, information architecture, and product language interventions delivered between 2021 and 2025.
          </p>
        </header>

        {/* List Header */}
        <div className="grid grid-cols-[60px_100px_1fr_120px_80px] gap-6 mb-4 px-0 opacity-40">
          <div className="label-caps">No.</div>
          <div className="label-caps">Year</div>
          <div className="label-caps">Project · Summary</div>
          <div className="label-caps">Category</div>
          <div className="label-caps">Vis.</div>
        </div>

        {/* Project List */}
        <main className="mb-40">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-row group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
            >
              {/* Number */}
              <div className="text-2xl font-bold text-accent tracking-tighter">
                {(PROJECTS.length - index).toString().padStart(2, '0')}
              </div>
              
              {/* Year */}
              <div className="text-sm font-medium opacity-60">
                [{project.year}]
              </div>

              {/* Title & Summary */}
              <div className="flex flex-col gap-1 pr-12">
                <h2 className="text-xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-200 leading-tight">
                  {project.title}
                </h2>
                <p className="text-[13px] leading-relaxed opacity-80 font-normal">
                  {project.summary}
                </p>
              </div>

              {/* Tag/Category */}
              <div className="text-[11px] font-bold leading-tight uppercase tracking-wide">
                {project.tag.split(' · ').map((t, i) => (
                  <div key={i} className={i > 0 ? "opacity-50" : ""}>{t}</div>
                ))}
              </div>

              {/* Small Visual */}
              <ProjectVisual type={project.type} />
            </motion.div>
          ))}
        </main>

        {/* Footer info for scannability */}
        <footer className="py-20 border-t border-[#161616] flex justify-between items-start text-xs font-medium uppercase tracking-widest opacity-40">
          <div>Mohana Das</div>
          <div>Product Content Strategy</div>
          <div>Index 2021–2025</div>
        </footer>
      </div>
    </div>
  );
}

export default SwissGrid;
