export interface ProjectImage {
  src: string;
  alt: string;
  display: "inline" | "full-width";
}

export interface ProjectSection {
  heading: string;
  content?: string;
  bullets?: string[];
  image?: ProjectImage;
  note?: string;
}

export interface Project {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  role: string;
  context: string;
  year: string;
  duration?: string;
  challenge: string;
  whatIDid: string[];
  result: string;
  quote?: string;
  image: string;
  thumbnail?: string;
  comingSoon?: boolean;
  confidential?: boolean;
  sections?: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "fintech-overhaul",
    tag: "Content Strategy · Fintech",
    title: "End-to-End Content Overhaul for a Major Fintech App",
    summary: "Push notification overhaul — value props, 15 new message groups, legal review.",
    role: "Content Strategist & Project Manager",
    context: "Leading personal finance / budgeting app (US consumer)",
    year: "2025",
    challenge: "Push notification content had grown stale and unstructured. Messages lacked a coherent value proposition framework, labels were inconsistently applied, and the account needed a full reset before agent learning could resume cleanly.",
    whatIDid: [
      "Ran a Values Thinking exercise — mapping 10–11 distinct, user-centric value propositions from the product's core offerings.",
      "Created 15 new message groups combining evergreen fintech content with renewed engagement and retention messaging.",
      "Coordinated a cross-functional working group, delegating message writing with detailed briefs and reviewing all output.",
      "Managed the legal review cycle, incorporating compliance feedback and prioritising launch sequencing.",
      "Oversaw archiving of legacy campaigns and restructured the label library for clean agent learning."
    ],
    result: "Completed on schedule — all 15 new message groups entered legal review within the first week of February, and the first campaigns went live shortly after.",
    quote: "Copywriting support has been really helpful",
    image: "/fintech-overhaul.png"
  },
  {
    slug: "sports-training",
    tag: "Training · Content Co-Creation",
    title: "In-Person Training for a Major Sports League",
    summary: "NYC-based content workshop — co-wrote 800+ message alternates in under 15 minutes.",
    role: "Content Strategist",
    context: "Premier professional sports league (US)",
    year: "2025",
    challenge: "A newly onboarded sports league needed their internal marketing team to become confident and self-sufficient with the Composer tool — building campaigns, understanding label strategy, and producing content at scale.",
    whatIDid: [
      "Travelled to the client's New York City headquarters for an in-person working session.",
      "Delivered a hands-on training covering the Composer, label system, and spreadsheet-based campaign building.",
      "Co-wrote a live \"Standings\" push notification — producing 800+ message alternates in roughly 10–15 minutes.",
      "Defined a prioritised roadmap of 8 new campaign categories.",
      "Provided content strategy guidance on messaging across multiple audience types."
    ],
    result: "By end of February, the client had 3 new messages ready to launch. By end of March, the account had grown to 10+ active campaigns.",
    quote: "It was truly impactful just sitting next to the client and working together to build and brainstorm messages. We co-wrote a message with 800+ alternates in just 10 or 15 mins.",
    image: "/sports-training.png"
  },
  {
    slug: "tax-onboarding",
    tag: "Client Onboarding · Europe",
    title: "New-Client Kick-Off for a European Tax Filing App",
    summary: "Solo-led onboarding from scratch — Values Thinking, label framework, rapid launch.",
    role: "Content Strategist",
    context: "Fast-growing European consumer tax app · $102K deal value",
    year: "2025",
    challenge: "A newly closed account with a highly seasonal user base needed onboarding onto the platform's content methodology from scratch — the first solo content kick-off of its kind.",
    whatIDid: [
      "Led a pre-sync with internal stakeholders to tailor the methodology to a tax product context.",
      "Facilitated the first live content kick-off using Values Thinking and Inner Monologue frameworks.",
      "Created and shared a collaborative Label Worksheet for the client's ongoing reference.",
      "Ran a follow-up Labels & Messaging Workshop, narrowing the library to 6 core value propositions.",
      "Reviewed the client's first independently-built push campaigns weeks after kick-off."
    ],
    result: "The client was reviewing self-created campaigns in the Composer within weeks of their first session — the fastest any client had moved from onboarding to independent content creation.",
    quote: "That was FAST. I wonder if any other partner created messages this fast.",
    image: "/tax-onboarding.png"
  },
  {
    slug: "superapp-l10n",
    tag: "Localisation · SEA",
    title: "Localisation Framework for a Southeast Asian Super App",
    summary: "Multi-language push notification framework across 4+ markets.",
    role: "Content Strategist",
    context: "Major Southeast Asian ride-hailing and delivery super app",
    year: "2025",
    challenge: "A super app operating across multiple Southeast Asian markets needed personalised push notifications in multiple languages — with copy written by their internal PMM team. The challenge was both technical (word-order differences across languages) and strategic (multiple value props per message slowing agent learning).",
    whatIDid: [
      "Designed a localisation template with a Loom walkthrough for structuring messages across languages.",
      "Identified a word-order problem in translated components (SVO vs SOV language structures) and proposed a fix.",
      "Reviewed PMM-authored copy across multiple rounds for label structure, value prop clarity, and alternate quality.",
      "Explained why single-CVP messages support faster agent learning, with a practical experiment structure."
    ],
    result: "Use Case 2 launched in early March — with Dineout Deals, Advanced Booking, Group Order, and Family Account campaigns going live across multiple Southeast Asian markets.",
    image: "/superapp-l10n.png"
  },
  {
    slug: "playbook",
    tag: "Internal · Company-Wide",
    title: "Content Playbook — Company-Wide Training Resource",
    summary: "Comprehensive Figma deck covering label strategy, message architecture, and best practices. Distributed to all active clients.",
    role: "Content Strategist & Author",
    context: "Internal deliverable distributed to all active clients",
    year: "2025",
    challenge: "As the client portfolio grew, onboarding was inconsistent and time-consuming. There was no single resource covering label strategy, message architecture, and best practices — from first-day clients to high-maturity accounts.",
    whatIDid: [
      "Labels and content strategies — how to structure a label library, what makes a good value proposition, common mistakes.",
      "Step-by-step message creation guide: from brief to published campaign.",
      "Best practices: writing copy that supports agent learning, not just copy that sounds good.",
      "Content Personalisation Map: a visual framework for identifying gaps across audiences and use cases.",
      "Content Scorecard: a maturity model for evaluating client progress."
    ],
    result: "Adopted company-wide within days of internal launch. Distributed to clients including the sports league, the fintech rewards app, the barbershop booking app, the super app, and others.",
    quote: "This deck is on fire… Components never were so clear.",
    image: "/playbook.png"
  },
  {
    slug: "chatbot",
    tag: "Conversation Design · Fintech",
    title: "Building an In-App Chat Assistant",
    summary: "End-to-end conversation design for a support bot resolving 50,000+ monthly queries — from research to a 5-product decision tree.",
    role: "Sole Content Owner — IA, Content Strategy, Conversation Design",
    context: "LazyPay (PayU Finance)",
    year: "2022",
    duration: "2 months · XL project",
    challenge: "82% of queries received by the call centre — over 50,000 per month — could be resolved with factual information. The business needed to reduce incoming calls and improve CSAT with a faster, more satisfying support experience. In-app, 45% of new users were not repaying on time. The existing support experience was phone-first and offered no automated path to resolution.",
    whatIDid: [],
    result: "Delivered a full decision tree spanning 5 product lines — one of the most structurally complex content projects I have led. Phase I covered Help & Support with simple decision-tree logic; Phase II scope included NLP and in-app ticket raising, informed directly by prototype findings.",
    image: "/images/projects/chatbot/01_cover_thumbnail.svg",
    thumbnail: "/images/projects/chatbot/01_cover_thumbnail.svg",
    sections: [
      {
        heading: "Research & Data",
        content: "I collated all available data from UX research and customer care teams — reviewing user interviews, call centre recordings, transcripts, and monthly reports. I also ran a competitor analysis of other fintech apps and conducted journey mapping sessions with the designer and PM.",
        image: {
          src: "/images/projects/chatbot/02_research-data_inline.svg",
          alt: "Horizontal bar chart showing top call centre query categories: Account Related 21.1%, Loans and EMIs 14.6%, Charges and Fees 6.1%",
          display: "inline"
        }
      },
      {
        heading: "Content Guidelines & Framework",
        content: "Working with stakeholders, I established four governing principles for the chatbot's content — covering tone, information relevance, decision architecture, and user control.",
        image: {
          src: "/images/projects/chatbot/03_content-framework_inline.svg",
          alt: "Four framework principles: Empathetic tone, Co-operative, At most 3 options per node, User stays in control",
          display: "full-width"
        }
      },
      {
        heading: "Prototype & Test",
        content: "Before building the full tree, I tested two prototypes — one using Use Case categories, one using Product categories — across 10 user sessions.",
        image: {
          src: "/images/projects/chatbot/04_prototype-findings_inline.svg",
          alt: "Six findings from 10 user prototype sessions, including preference for use-case categorisation and requests for NLP and in-app ticket raising",
          display: "full-width"
        }
      },
      {
        heading: "Final Tree & Designs",
        content: "The complete decision tree spanned 5 product lines with interconnected flows, covering everything from transactions to repayments. I collaborated closely with the product designer to finalise the app UI with a focus on discoverability and comprehension.",
        bullets: [
          "Capabilities limited to Help & Support",
          "Simple decision-tree logic (NLP in Phase II scope)",
          "Bot has a persona but no name or avatar",
          "Implemented via a third-party vendor, not a native build",
          "Each new chat carries the same context"
        ]
      }
    ]
  },
  {
    slug: "lazycard",
    tag: "UX Writing · Fintech",
    title: "UX Writing Review for LazyCard",
    summary: "Full content audit and rewrite for a new physical and digital credit card — first project as LazyPay's first UX Writer.",
    role: "Sole Content Owner — IA, Content Strategy, Copy Review",
    context: "LazyPay (PayU Finance)",
    year: "2021",
    duration: "4 days · M project",
    challenge: "LazyCard was a credit offering launched by LazyPay near the end of 2021, available as both a physical and digital card. As a newly joined UX Writer — the first at the company — my first project was to review the existing copy across the entire LazyCard app flow and bring it up to standard.",
    whatIDid: [],
    result: "Delivered a full copy review with concrete, implemented recommendations — restructured value propositions, removed a misleading approval claim, standardised casing, and replaced jargon throughout.",
    image: "/images/projects/lazycard/01_cover_thumbnail.svg",
    thumbnail: "/images/projects/lazycard/01_cover_thumbnail.svg",
    sections: [
      {
        heading: "Understanding the Users",
        content: "An earlier persona study (March 2020) identified three major persona types for young Indian users. Hedonists and Attackers were the primary target group for LazyCard — they are more likely to opt for credit products and are already comfortable with the concept of credit.",
        image: {
          src: "/images/projects/lazycard/02_user-personas_inline.svg",
          alt: "Three user persona cards: Defender (save for future), Hedonist (earn to enjoy, target), and Attacker (earn for future, target). Hedonist and Attacker are highlighted as LazyCard target groups.",
          display: "full-width"
        }
      },
      {
        heading: "Mapping the User Journey",
        content: "I mapped the end-to-end journey across four stages — from first awareness of LazyCard through to activation — to identify where copy problems were most impactful.",
        image: {
          src: "/images/projects/lazycard/03_user-journey_full-width.svg",
          alt: "Four-stage user journey map for LazyCard: Awareness, Consideration, Onboarding, Activation — with descriptions and emotional states at each stage",
          display: "full-width"
        }
      },
      {
        heading: "Designs and Copy Review",
        content: "I conducted a full IA, content strategy, and copy review across the finished designs — covering the entry point on the homescreen, the LazyCard landing screen, and the onboarding and KYC flow.",
        image: {
          src: "/images/projects/lazycard/04_copy-review_full-width.svg",
          alt: "Before and after copy comparison table showing improvements to the LazyCard landing screen: headline, value props list, acceptance copy, and CTA button",
          display: "full-width"
        }
      }
    ]
  },
  {
    slug: "expense-mgmt",
    tag: "Content Strategy · Fintech",
    title: "Exploring Expense Management",
    summary: "Research-driven IA, content strategy, and terminology framework for a new expense tracking feature — built before a single screen was designed.",
    role: "Sole UX Writer — IA, Content Strategy, Terminology Framework",
    context: "LazyPay (PayU Finance)",
    year: "2022",
    duration: "2 weeks · L project",
    challenge: "LazyPay wanted to build a new expense tracking feature. As the sole UX Writer, I was tasked with defining the terminology, information architecture, and overall content strategy before a single screen was designed.",
    whatIDid: [],
    result: "Delivered a complete content strategy and IA framework that defined how the product would communicate its core concept — \"Manage your money\" — and how every type of expense, spend, and transaction would be categorised and named.",
    image: "/images/projects/expense-mgmt/01_cover_thumbnail.svg",
    thumbnail: "/images/projects/expense-mgmt/01_cover_thumbnail.svg",
    confidential: true,
    sections: [
      {
        heading: "Analysing the Competition",
        content: "I researched 12–15 apps in the current market to understand how they structure their products and what terminology they use — specifically to understand whether Indian users, whose first language is often not English, were already exposed to terms like 'expense', 'transactions', or 'budget'."
      },
      {
        heading: "Researching User Needs",
        content: "The designer and I conducted internal and external user interviews alongside a demographic study. Sessions revealed that the primary motivation was to save and manage money — not to automate tracking. Most users preferred a physical diary. Users were comfortable with terms like 'expense tracking' and 'categories'.",
        image: {
          src: "/images/projects/expense-mgmt/02_user-research-stats_inline.svg",
          alt: "Five statistics from user research: 40% want to save more, 33% struggle with saving, 30% don't track expenses, 26% use a physical diary, 14% use an app",
          display: "full-width"
        }
      },
      {
        heading: "Information Architecture",
        content: "Based on user mental models, I defined a clear IA framework that separated credit and debit as distinct entities, treated any immediate loss of money as an expense, and organised everyday transactions as 'Spends' — a subset of expenses — grouped by categories like travel and food.",
        image: {
          src: "/images/projects/expense-mgmt/03_ia-framework_full-width.svg",
          alt: "Expense information architecture tree: Expenses branches into Spends (everyday transactions), Bills and Subscriptions, and Upcoming Payments. Spends further splits into category types like Food and Travel.",
          display: "full-width"
        },
        note: "This feature was in progress at time of documentation and had not yet been publicly released."
      }
    ]
  },
  {
    slug: "repayments",
    tag: "Content Strategy · Fintech",
    title: "Improving Repayment Rates",
    summary: "Content and design interventions to drive on-time repayments — a three-pronged strategy targeting discoverability, urgency, and transparency.",
    role: "Content Strategist — Problem Identification, Multi-level Solution Design, Content-First Design",
    context: "LazyPay (PayU Finance)",
    year: "2022",
    duration: "1 month · L project",
    challenge: "High repayment rates signal user trust and reduce risk for the business. The rate was especially poor among new users — 45% were not repaying on time. Of these, 23% were opening the app during the repayment window but still not paying, while the rest were not opening the app at all.",
    whatIDid: [],
    result: "Delivered a full three-strategy solution across all repayment touchpoints, with a primary success target of a 10% improvement in on-time repayment rate based on analyst modelling.",
    image: "/images/projects/repayments/01_cover_thumbnail.svg",
    thumbnail: "/images/projects/repayments/01_cover_thumbnail.svg",
    sections: [
      {
        heading: "Defining the Problem",
        content: "Through research and data analysis, the team identified several root causes: users lacked awareness of late fees, they knew repayment was important but not urgent, reminders were perceived as boring and robotic, and new users had the same experience as mature users despite being unfamiliar with the process.",
        image: {
          src: "/images/projects/repayments/02_problem-data_inline.svg",
          alt: "Flow diagram showing 100% of new users breaking into 45% not repaying (split into 23% who opened the app but didn't pay and 22% who didn't open at all) and 55% paying on time. Root causes listed: no urgency signals, late fee not visible, notification easy to ignore.",
          display: "full-width"
        }
      },
      {
        heading: "Solution Strategy",
        content: "I reviewed the existing UI screens and notifications, then designed a three-pronged strategy covering all touch-points in the user's repayment journey.",
        image: {
          src: "/images/projects/repayments/03_solution-strategy_full-width.svg",
          alt: "Three-column strategy framework: 01 Discoverability (redesigned notification placement and hierarchy), 02 Urgency (new bottom sheet after due date breach), 03 Transparency (surfaced late fees, clearer CTA)",
          display: "full-width"
        }
      },
      {
        heading: "Content-First Design",
        content: "My key contribution was applying a content-first design approach to the notification component — prioritising information based on what users actually need to know, in the order they need to know it.",
        image: {
          src: "/images/projects/repayments/04_content-hierarchy_full-width.svg",
          alt: "Prioritised table of notification content: Amount (essential), Due date (essential), Due status (essential), Penalties, Count, Product name — with example text and purpose for each",
          display: "full-width"
        }
      }
    ]
  },
  {
    slug: "goibibo",
    tag: "UX Design · Travel",
    title: "GoIbibo Homescreen & Loyalty",
    summary: "Details to be added.",
    role: "",
    context: "",
    year: "",
    challenge: "",
    whatIDid: [],
    result: "",
    image: "",
    comingSoon: true
  }
];

export const journey = [
  {
    id: 0,
    date: "2024 – Present",
    role: "Content Strategist",
    company: "Aampe",
    description: "Building message content for consumer apps across fintech, sports, travel, food delivery, and fitness — designing label architectures, value proposition frameworks, and message variants to help clients unlock agentic optimisation. Alongside client work, translating practitioner insight into formal product pitches and UX feedback: a systematic bridge between what customers need and what the product becomes."
  },
  {
    id: 1,
    date: "Jan 2022 – Present",
    role: "Lead UX Writer",
    company: "PayU · LazyPay, PayU Finance",
    description: "Spearheading content strategy and design for LazyPay across touchpoints."
  },
  {
    id: 2,
    date: "Oct 2021 – Dec 2022",
    role: "Senior UX Writer",
    company: "PayU Finance",
    description: "First and only UX Writer at PayU Finance. Owned UX writing for LazyPay, defined content guidelines, and advocated for content design across the org."
  },
  {
    id: 3,
    date: "Oct 2020 – Sep 2021",
    role: "UX Writer & Copywriter",
    company: "Freelance · Spotdraft (part-time)",
    description: "Transitioned into UX writing. Worked on copywriting and social media content with various agencies."
  },
  {
    id: 4,
    date: "Jul 2019 – Sep 2020",
    role: "Senior UX Designer",
    company: "GoIbibo",
    description: "Designed end-to-end user experience for GoIbibo's homescreen, chatbot, and loyalty program GoTribe."
  },
  {
    id: 5,
    date: "Jul 2014 – Jul 2019",
    role: "Software Engineer → UX Designer",
    company: "Adobe · 5 years",
    description: "Started as a Quality Engineer straight out of college. Owned product quality and customer support across multiple release cycles. After 3.5 years, moved laterally into a UX Design role — singlehandedly taking over design for a new B2B e-learning product."
  }
];
