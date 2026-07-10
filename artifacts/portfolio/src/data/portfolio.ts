export interface ProjectImage {
  src: string;
  alt: string;
  display: "inline" | "full-width" | "group";
  caption?: string;
  phoneFrame?: boolean;
  scale?: number;
}

export interface ProjectSection {
  heading: string;
  content?: string;
  bullets?: string[];
  image?: ProjectImage;
  images?: ProjectImage[];
  note?: string;
  imagePlacement?: "beside";
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
  featured?: boolean;
  comingSoon?: boolean;
  confidential?: boolean;
  sections?: ProjectSection[];
  archived?: boolean;
}

export const projects: Project[] = [
  {
    slug: "product-taxonomy",
    tag: "Information Architecture · Product Language",
    title: "Product Taxonomy: Renaming an AI Product While It Runs",
    summary: "Drove the evidence, framework, and decision session that ratified nine renamed product entities — then shipped the glossary and rollout plan for a product that never stops running.",
    role: "Field-side driver, with product design and data science",
    context: "Aampe — AI-powered lifecycle marketing platform",
    year: "2025",
    featured: true,
    challenge: "Aampe's product objects grew their names ad hoc — one object answered to five names in circulation, familiar-sounding words pulled customers back into campaign thinking, and new words lacked consistent definitions across UI, docs, KB, and sales decks.",
    whatIDid: [
      "Authored the Terminology & Taxonomy framework: three candidate terms per entity with recorded reasoning, naming principles, voting rules, and named tie-breakers.",
      "Mined my own client session recordings into the audit's primary evidence — surfacing terms customers misread, like Offering-as-promotion and Label doing two jobs.",
      "Argued the Topics feature onto a four-dimension model (feature, category, context, constraint) instead of a rigid topic/sub-topic hierarchy before it shipped.",
      "Filed the cleanup ticket replacing Composer's default component definitions with the canonical ones.",
      "Co-ran the Terminology Session at the Taiwan offsite — ten people including the CEO and a co-founder, live polls, and a sentence test for every entity.",
      "Wrote the implementation plan: engineering scoping, old-to-new migration mapping, customer change management, and a six-step rollout.",
    ],
    result: "Nine entities ratified, including bold renames (Label → Tag, Message Group → Formula, Audience → Eligibility Criteria). Glossary and rollout plan shipped, with governance rules to prevent future terminology creep.",
    quote: "Customers understand the mental model — messages, parts, variants, labels — but not the vocabulary.",
    image: "/images/projects/product-taxonomy/glossary-preview.png",
  },
  {
    slug: "content-maps",
    tag: "Content Strategy · Methodology",
    title: "Content Maps: Building the Shared Language for Agentic Content Strategy",
    summary: "Turned a one-off planning habit into Aampe's standard strategic artifact — credited in a $90K closed-won deal and proposed as a 60-day certification for every new hire.",
    role: "Originator & owner of the methodology",
    context: "Aampe — AI-powered lifecycle marketing platform",
    year: "2025",
    featured: true,
    challenge: "No shared, repeatable way to answer the most basic strategic question on any account: what should we be saying to whom, and where are the gaps? Every team improvised its own version.",
    whatIDid: [
      "Proposed the content map as a standard for every customer and defined the artifact's structure.",
      "Built the first templates (Taxfix, Deezer, Carousell, NBA, Traveloka, Swiggy) that other teams reused across verticals.",
      "Led the company-wide naming exercise — facilitated 29-vote poll, landed on Agentic Personalization Map.",
      "Authored a step-by-step Notion guide and ran the Content Map Challenge (~15 participants, individualized feedback on every map).",
      "Paired the methodology with AI tooling: templates became training data for ContentMaPT and MapPT (custom GPTs).",
      "Published the company's definitive blog post on the concept (Oct 2025).",
      "Led the map-led onsite session for Mintos, credited in the $90K closed-won announcement.",
    ],
    result: "Credited in a $90K closed-won deal. ~15 people trained company-wide. Maps deployed across 15+ accounts. Proposed as a 60-day certification for every new hire.",
    quote: "This was the selling point of the session. If I do a presentation to my executives, this is it.",
    image: "/content-maps.png",
  },
  {
    slug: "fintech-overhaul",
    archived: true,
    tag: "Content Strategy · Fintech",
    title: "End-to-End Content Overhaul for a Major Fintech App",
    summary: "Push notification overhaul — value props, 15 new message groups, legal review.",
    role: "Content Strategist & Project Manager",
    context: "Leading personal finance / budgeting app (US consumer)",
    year: "2025",
    featured: true,
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
    archived: true,
    tag: "Training · Content Co-Creation",
    title: "In-Person Training for a Major Sports League",
    summary: "NYC-based content workshop — co-wrote 800+ message alternates in under 15 minutes.",
    role: "Content Strategist",
    context: "Premier professional sports league (US)",
    year: "2025",
    featured: true,
    challenge: "A newly onboarded sports league needed their internal marketing team to become confident and self-sufficient with the Composer tool — building campaigns, understanding label strategy, and producing content at scale.",
    whatIDid: [
      "Travelled to the client's New York City headquarters for an in-person working session.",
      "Delivered a hands-on training covering the Composer, label system, and spreadsheet-based campaign building.",
      "Co-wrote a live \"Standings\" push notification — producing 800+ message alternates in roughly 10–15 minutes.",
      "Defined a prioritised roadmap of 8 new campaign categories.",
      "Ran a content and label performance working session in March — walked through agent learnings and introduced the Content Personalisation Map.",
      "Presented semantic label analysis in April with re-labelling recommendations going into the playoffs.",
      "Became the internal expert on Custom Components, recording a how-to Loom demo for the client team."
    ],
    result: "The account grew from 1 message live at end of February to 26+ active campaigns by the start of the playoffs. The client requested ongoing monthly working sessions directly with me.",
    quote: "It was truly impactful just sitting next to the client and working together to build and brainstorm messages. We co-wrote a message with 800+ alternates in just 10 or 15 mins.",
    image: "/sports-training.png"
  },
  {
    slug: "tax-onboarding",
    archived: true,
    tag: "Client Onboarding · Europe",
    title: "New-Client Kick-Off for a European Tax Filing App",
    summary: "Solo-led onboarding from scratch — Values Thinking, label framework, rapid launch.",
    role: "Content Strategist",
    context: "Fast-growing European consumer tax app · $102K deal value",
    year: "2025",
    featured: true,
    challenge: "A newly closed account with a highly seasonal user base needed onboarding onto the platform's content methodology from scratch — the first solo content kick-off of its kind.",
    whatIDid: [
      "Led a pre-sync with internal stakeholders to tailor the methodology to a tax product context.",
      "Facilitated the first live content kick-off using Values Thinking and Inner Monologue frameworks.",
      "Created and shared a collaborative Label Worksheet for the client's ongoing reference.",
      "Ran a follow-up Labels & Messaging Workshop, narrowing the library to 6 core value propositions.",
      "Built a detailed email component guide with a Loom recording for structuring Aampe components within email templates.",
      "Prepared copy for a DIY onboarding demo, coordinating directly with the CEO — delivered same-day.",
      "Reviewed the client's first independently-built push campaigns weeks after kick-off."
    ],
    result: "The client was reviewing self-created campaigns in the Composer within weeks of their first session — the fastest any client had moved from onboarding to independent content creation. The interactive Figma personalisation demo was built and delivered same-day.",
    quote: "That was FAST. I wonder if any other partner created messages this fast.",
    image: "/tax-onboarding.png"
  },
  {
    slug: "superapp-l10n",
    archived: true,
    tag: "Localisation · SEA",
    title: "Localisation Framework for a Southeast Asian Super App",
    summary: "Multi-language push notification framework across 4+ markets.",
    role: "Content Strategist",
    context: "Major Southeast Asian ride-hailing and delivery super app",
    year: "2025",
    featured: true,
    challenge: "A super app operating across multiple Southeast Asian markets needed personalised push notifications in multiple languages — with copy written by their internal PMM team. The challenge was both technical (word-order differences across languages) and strategic (multiple value props per message slowing agent learning).",
    whatIDid: [
      "Designed a localisation template with a Loom walkthrough for structuring messages across languages.",
      "Identified a word-order problem in translated components (SVO vs SOV language structures) and proposed a platform-level fix to engineering.",
      "Reviewed PMM-authored copy across multiple rounds for label structure, value prop clarity, and alternate quality.",
      "Covered for the account manager to personally coordinate and launch campaigns in early March, including the Family Account push across all target markets.",
      "Led content review for Use Case 3 (CRM team content) as a third expansion of the engagement in March."
    ],
    result: "Use Case 2 launched in early March — Dineout Deals, Advanced Booking, Group Order, and Family Account campaigns live across six Southeast Asian markets. A third use case kicked off by end of March. The localisation template became a reusable asset company-wide.",
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
    featured: true,
    challenge: "As the client portfolio grew, onboarding was inconsistent and time-consuming. There was no single resource covering label strategy, message architecture, and best practices — from first-day clients to high-maturity accounts.",
    whatIDid: [
      "Labels and content strategies — how to structure a label library, what makes a good value proposition, common mistakes.",
      "Step-by-step message creation guide: from brief to published campaign.",
      "Best practices: writing copy that supports agent learning, not just copy that sounds good.",
      "Beyond the basics: advanced creative strategies for high-maturity accounts.",
      "Content Personalisation Map: a visual framework for identifying gaps across audiences and use cases.",
      "Content Scorecard: a maturity model for evaluating how far along a client is and what to focus on next."
    ],
    result: "Adopted company-wide within days of internal launch. Distributed to all active clients. Used as a live reference in onboarding sessions, working visits, and sales demos throughout April.",
    quote: "This deck is on fire… Components never were so clear.",
    image: "/playbook.png"
  },
  {
    slug: "barbershop-booking",
    archived: true,
    tag: "Content Strategy · Marketplace",
    title: "Barbershop Booking App",
    summary: "Full label audit and 6 new message groups — drove the account's first-ever active user messaging milestone.",
    role: "Content Strategist",
    context: "US consumer app for barbershop discovery and booking",
    year: "2025",
    challenge: "Joined the account mid-engagement with inconsistent label architecture and no clear content strategy for reaching active users.",
    whatIDid: [
      "Conducted a full label audit across the existing account.",
      "Designed and built 6 new message groups: payments (casual and professional tones), scheduling, barbershop tips for barbers and clients, and barber facts.",
      "Pitched a creative Affirmation push notification campaign concept with referral-linked action buttons."
    ],
    result: "In March, the account broke into active user messaging for the first time — a milestone directly attributed to the new message groups.",
    image: "/barbershop-booking.png"
  },
  {
    slug: "travel-superapp",
    archived: true,
    tag: "Content Strategy · Travel",
    title: "Travel & Accommodation Super App",
    summary: "Full-day Jakarta onsite across 5 sessions — content audit, label strategy, and promo optimisation. Account renewed at $172K ACV.",
    role: "Content Strategist",
    context: "Major Southeast Asian travel booking platform · $172K ACV renewal (+15% expansion)",
    year: "2025",
    challenge: "A high-value account needed a structured content strategy review to unlock growth and justify renewal — requiring an in-person engagement to build momentum.",
    whatIDid: [
      "Provided structured guidance on message formatting in February, unlocking 15 new campaigns without writing from scratch.",
      "Attended a full-day onsite at the client's Jakarta offices — a 7-hour workshop across 5 sessions covering performance review, content audit, content strategy, promo/blockbuster optimisation, and product roadmap.",
      "Co-led content and label strategy sessions and demonstrated ChatGPT-assisted content generation.",
      "Left with a detailed action item list and followed up with written summaries and Loom recordings."
    ],
    result: "Account renewed at $172K ACV with a 15% expansion. The onsite was cited as a key factor in the renewal outcome.",
    quote: "Mohana, Madhuri, Patty — your two-day onsite workshop marathon laid the groundwork for this milestone.",
    image: "/travel-superapp.png"
  },
  {
    slug: "running-app",
    archived: true,
    tag: "Content Strategy · Fitness",
    title: "Running Training App",
    summary: "Restructured label architecture and scoped a new campaign pipeline including Refer a Friend and Marathon upsell.",
    role: "Content Strategist",
    context: "Subscription fitness app for structured running plans",
    year: "2025",
    challenge: "An established fitness app account needed its label architecture overhauled and a new content pipeline scoped to drive retention and growth.",
    whatIDid: [
      "Led a value props and offerings naming exercise, restructuring labels for cleaner agent learning.",
      "Created a label audit sheet and advocated for indirect benefit-led content over feature-forward copy.",
      "Added 6 new messages for the Tip Dataset.",
      "Scoped new campaigns: Refer a Friend (two-step), Running Facts, and Marathon upsell.",
      "Advised on label placement for new blog and Pilates feature messages in April."
    ],
    result: "Delivered a restructured label library, a prioritised campaign pipeline, and a clear content roadmap for the account's next growth phase.",
    image: "/running-app.png"
  },
  {
    slug: "music-streaming",
    archived: true,
    tag: "Content Strategy · Entertainment",
    title: "Music Streaming Platform",
    summary: "Identified a structural translation bug across 27 languages and co-created a platform-level fix with engineering.",
    role: "Content Strategist",
    context: "European music streaming service with 27 active languages",
    year: "2025",
    challenge: "Push notification components broke when translated into languages with different sentence structures — a technical problem that also affected content quality across the entire account.",
    whatIDid: [
      "Prepared and presented a content deep dive for the client's change management call.",
      "Identified a structural problem with translated components — different languages reorder subject, verb, and object when only part of a sentence is dynamic, breaking the rendered message.",
      "Created an examples sheet documenting the issue across multiple language families.",
      "Coordinated a joint solution call between the client and engineering."
    ],
    result: "The word-order bug was surfaced as a platform-level issue, escalated to engineering with a concrete examples sheet and a proposed detection solution.",
    image: "/music-streaming.png"
  },
  {
    slug: "financial-rewards",
    archived: true,
    tag: "Content Strategy · Fintech",
    title: "Financial Rewards App",
    summary: "Full account optimisation review — 15 new message group proposals and two working sessions with the client's content team.",
    role: "Content Strategist",
    context: "US consumer cashback and rewards platform",
    year: "2025",
    challenge: "An existing account needed a structured reset: campaigns were unoptimised, and the internal content team needed onboarding onto the platform's label and campaign-building process.",
    whatIDid: [
      "Audited all existing campaigns and produced a structured label audit.",
      "Proposed 15 new message groups covering the full product surface.",
      "Ran two working sessions with the client's internal copywriter and content lead.",
      "Onboarded the client's copywriter onto the label and campaign-building process."
    ],
    result: "By April, six message groups were marked ready for launch — labelled, structured in the Composer, and ready for the client's team to publish independently.",
    image: "/financial-rewards.png"
  },
  {
    slug: "greeting-card-app",
    archived: true,
    tag: "Content Strategy · Consumer",
    title: "Personalised Greeting Card App",
    summary: "Built a full Content Roadmap strategy deck and Custom Components implementation plan — delivered independently, without a live session.",
    role: "Content Strategist",
    context: "European consumer app for custom postcards and greeting cards",
    year: "2025",
    challenge: "A self-sufficient client needed strategic direction for the next phase of their content programme — delivered without the usual live workshop format.",
    whatIDid: [
      "Reviewed the client's self-built label library and prepared messages for launch.",
      "Proactively wrote Easter-themed value-based messages as inspiration.",
      "Independently reviewed the client's Miro board and built a Content Roadmap strategy deck covering the next few months.",
      "Built a Custom Components implementation plan to give the client a clear development path."
    ],
    result: "Delivered a full content strategy and implementation roadmap entirely asynchronously — no live session required.",
    image: "/greeting-card-app.png"
  },
  {
    slug: "shopping-rewards",
    archived: true,
    tag: "Client Onboarding · Retail",
    title: "Shopping Rewards App",
    summary: "Contributed to the initial client success call for a newly closed $101K ACV account targeting three use cases.",
    role: "Content Strategist",
    context: "US consumer shopping rewards / cashback app · $101K ACV",
    year: "2025",
    challenge: "A newly closed account needed a strong first impression to set expectations and build confidence in the platform's content methodology across three distinct use cases.",
    whatIDid: [
      "Participated in the initial client success call, covering three use cases: converting installs to active users, winning back lapsed users, and retaining and growing current users.",
      "Contributed content strategy framing and direction for the early engagement."
    ],
    result: "The client success call was cited internally as a key factor in the positive early client relationship.",
    quote: "The CS call was an absolute home run for Sarah and the team.",
    image: "/shopping-rewards.png"
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
    challenge: "High repayment rates signal user trust and reduce risk for the business. The rate was especially poor among **new users — 45% were not repaying on time**. Of these, 23% were opening the app during the repayment window but still not paying, while the rest were not opening the app at all.",
    whatIDid: [],
    result: "Delivered a full three-strategy solution across all repayment touchpoints, with a primary success target of a **10% improvement in on-time repayment rate** based on analyst modelling.",
    image: "/images/projects/repayments/cover.avif",
    thumbnail: "/images/projects/repayments/cover.avif",
    sections: [
      {
        heading: "Defining the Problem",
        content: "Through research and data analysis, the team identified several root causes behind late repayment:",
        bullets: [
          "Users **lacked awareness of late fees** — the cost of not paying wasn't visible upfront.",
          "They knew repayment was important, but **it never felt urgent**.",
          "Reminders were perceived as **boring and robotic**, easy to tune out.",
          "**New users had the same experience as mature users**, despite being unfamiliar with the process."
        ],
        image: {
          src: "/images/projects/repayments/inline-notification.avif",
          alt: "Hand-drawn sketch mapping four questions every repayment touchpoint needs to answer: how much to pay, when to pay, level of urgency, and why to pay — radiating from a central notification component",
          display: "inline"
        },
        note: "I mapped the problem to four core questions any repayment touchpoint needed to answer: how much to pay, when to pay, why to pay, and the level of urgency.",
      },
      {
        heading: "User Journey",
        content: "A typical repayment journey for a LazyPay user spans **three days of escalating touchpoints** — from a routine statement email to same-day SMS blasts — across WhatsApp, SMS, email, and the in-app notification itself.",
        image: {
          src: "/images/projects/repayments/user-journey.avif",
          alt: "Three-day repayment journey map: Day 1 statement generated, Day 2 reminder before due date, Day 3 due date with escalating SMS and emails",
          display: "full-width"
        }
      },
      {
        heading: "Solution Strategy",
        content: "I reviewed the existing UI screens and notifications, then designed a three-pronged strategy covering every touch-point in the user's repayment journey:",
        bullets: [
          "**Discoverability** — Many users claimed not to be aware of their dues and due dates. The current in-app notification was very missable, blending into the rest of the UI.",
          "**Urgency** — Some users reported having seen reminders, yet ignored them or put them off for later. There was also no noticeable difference in UI after missing the due date.",
          "**Transparency** — Late fees and consequences of not repaying were not given upfront. The information hierarchy on the repayment page was vague, with no clear call to action."
        ]
      },
      {
        heading: "A Content-First Design Approach",
        content: "First, we had to rethink the notification displayed on our homescreen. I applied a content design approach to determine what information users actually need, and in what order. The key change was surfacing consequences plainly once a due date was breached: the **late fee** amount, the **credit score impact**, and that **transactions get blocked** until the user repays.",
        imagePlacement: "beside",
        image: {
          src: "/images/projects/repayments/bottom-sheet.avif",
          alt: "New overdue bottom sheet showing: ₹2,464.7 is overdue, Please repay immediately to avoid more penalties — with three consequences listed: late fee of ₹150, credit score impact, transactions blocked — and a Pay Now button",
          display: "inline",
          phoneFrame: true
        }
      },
      {
        heading: "Before & After",
        content: "The redesign moved from a **low-contrast dark homescreen** where dues were easy to miss, to a **content-led light UI** that leads with the due amount, date, and consequences. The notification state changes once a due date is breached.",
        images: [
          {
            src: "/images/projects/repayments/nav-old.avif",
            alt: "Old LazyPay homescreen: dark theme, small low-contrast dues reminder at the bottom, Activity tab in nav bar",
            display: "group",
            caption: "Before"
          },
          {
            src: "/images/projects/repayments/nav-new.avif",
            alt: "New LazyPay homescreen: light theme, prominent due-date inline notification at the top, showing before-due and after-due states side by side",
            display: "group",
            caption: "After",
            scale: 1.3
          }
        ]
      },
      {
        heading: "Escalating to Urgency",
        content: "Once a due date passed unpaid, a **dedicated overdue bottom sheet** surfaced automatically alongside the inline notification — making the stakes impossible to miss before the user could proceed in the app.",
        image: {
          src: "/images/projects/repayments/overdue.avif",
          alt: "Full phone frame showing new LazyPay homescreen after due date: inline overdue notification (DUE SINCE 3 AUG, ₹2,464.7 overdue) plus the bottom sheet (late fee, credit score impact, transactions blocked, Pay now button)",
          display: "inline"
        }
      },
      {
        heading: "Better Navigation",
        content: "Users also struggled to find where their dues lived in the app. Renaming the ambiguous **\"Activity\"** tab to **\"Dues\"** — paired with a one-time coach mark — closed a simple but high-impact discoverability gap.",
        images: [
          {
            src: "/images/projects/repayments/before-old.avif",
            alt: "Old navigation bar showing the Activity tab (Home, Activity, Profile) that users didn't associate with dues",
            display: "group",
            caption: "Old"
          },
          {
            src: "/images/projects/repayments/new-before-due.avif",
            alt: "New navigation bar showing renamed Dues tab (Home, Dues, Profile) with a red badge dot",
            display: "group",
            caption: "New"
          },
          {
            src: "/images/projects/repayments/new-after-due.avif",
            alt: "New navigation bar with one-time coach mark tooltip: 'Activity is now Dues — Track and pay dues and EMIs here'",
            display: "group",
            caption: "New + Coach mark"
          }
        ]
      },
      {
        heading: "Impact: Inline Notification",
        content: "Post-launch funnel data showed a **significant lift** in users clicking through from the redesigned homescreen notification to the repayment flow.",
        images: [
          {
            src: "/images/projects/repayments/impact-notif.avif",
            alt: "Old LazyPay homescreen showing the original dark-theme notification that users were not clicking through",
            display: "group",
            caption: "Before"
          },
          {
            src: "/images/projects/repayments/impact-notif-android-ios.avif",
            alt: "Analytics funnel comparison: old notification vs new notification click-through, showing improvement for Android",
            display: "group",
            caption: "Funnel comparison — Android"
          }
        ]
      },
      {
        heading: "Notification — Platform Breakdown",
        images: [
          {
            src: "/images/projects/repayments/impact-notif-android-ios.avif",
            alt: "Notification funnel data for Android and iOS combined",
            display: "group",
            caption: "Android + iOS"
          },
          {
            src: "/images/projects/repayments/impact-notif-android.avif",
            alt: "Notification funnel data for Android",
            display: "group",
            caption: "Android"
          },
          {
            src: "/images/projects/repayments/impact-notif-ios.avif",
            alt: "Notification funnel data for iOS",
            display: "group",
            caption: "iOS"
          }
        ]
      },
      {
        heading: "Impact: Navigation Bar Label",
        content: "The renamed **\"Dues\"** tab also lifted downstream conversion — more users who tapped the nav bar went on to complete the repayment flow.",
        images: [
          {
            src: "/images/projects/repayments/impact-nav.avif",
            alt: "Old LazyPay Activity/repayment page from before the navigation rename, showing the repayment details screen users reached via the old Activity tab",
            display: "group",
            caption: "Before"
          },
          {
            src: "/images/projects/repayments/impact-nav-android-ios.avif",
            alt: "Analytics funnel comparison: old Activity tab navigation vs new Dues tab, showing improvement in users reaching repayment status",
            display: "group",
            caption: "Funnel comparison — Android"
          }
        ]
      },
      {
        heading: "Navigation — Platform Breakdown",
        images: [
          {
            src: "/images/projects/repayments/impact-nav-android-ios.avif",
            alt: "Navigation funnel data for Android and iOS combined",
            display: "group",
            caption: "Android + iOS"
          },
          {
            src: "/images/projects/repayments/impact-nav-android.avif",
            alt: "Navigation funnel data for Android",
            display: "group",
            caption: "Android"
          },
          {
            src: "/images/projects/repayments/impact-nav-ios.avif",
            alt: "Navigation funnel data for iOS",
            display: "group",
            caption: "iOS"
          }
        ]
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
    date: "Nov 2024 – Present",
    role: "Content Strategist",
    company: "Aampe",
    description: "Building message content for consumer apps across fintech, sports, travel, food delivery, and fitness — designing label architectures, value proposition frameworks, and message variants to help clients unlock agentic optimisation. Alongside client work, translating practitioner insight into formal product pitches and UX feedback: a systematic bridge between what customers need and what the product becomes."
  },
  {
    id: 1,
    date: "Jan 2022 – Oct 2024 · 3 years",
    role: "Lead UX Writer",
    company: "PayU · LazyPay, PayU Finance",
    description: "Spearheading content strategy and design for LazyPay across touchpoints."
  },
  {
    id: 2,
    date: "Oct 2021 – Dec 2021 · 3 months",
    role: "Senior UX Writer",
    company: "PayU Finance",
    description: "First and only UX Writer at PayU Finance. Owned UX writing for LazyPay, defined content guidelines, and advocated for content design across the org."
  },
  {
    id: 3,
    date: "Oct 2020 – Sep 2021 · 1 year",
    role: "UX Writer & Copywriter",
    company: "Freelance · Spotdraft (part-time)",
    description: "Transitioned into UX writing. Worked on copywriting and social media content with various agencies."
  },
  {
    id: 4,
    date: "Jul 2019 – Sep 2020 · 1 year",
    role: "Senior UX Designer",
    company: "GoIbibo",
    description: "Designed end-to-end user experience for GoIbibo's homescreen, chatbot, and loyalty program GoTribe."
  },
  {
    id: 5,
    date: "Jul 2014 – Jul 2019 · 5 years",
    role: "Software Engineer → UX Designer",
    company: "Adobe",
    description: "Started as a Quality Engineer straight out of college. Owned product quality and customer support across multiple release cycles. After 3.5 years, moved laterally into a UX Design role — singlehandedly taking over design for a new B2B e-learning product."
  }
];
