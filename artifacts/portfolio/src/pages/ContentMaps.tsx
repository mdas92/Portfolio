import { motion } from "framer-motion";
import { Link } from "wouter";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function PullQuote({ children, cite, variant = "green" }: { children: React.ReactNode; cite: string; variant?: "green" | "sienna" | "lime" }) {
  const borderColor = variant === "sienna" ? "border-primary" : variant === "lime" ? "border-accent" : "border-foreground";
  const bgColor = variant === "sienna" ? "bg-primary/5" : variant === "lime" ? "bg-accent/10" : "bg-foreground/5";
  return (
    <blockquote className={`border-l-4 ${borderColor} ${bgColor} rounded-r-md px-5 py-4 my-6`}>
      <p className="font-serif text-lg text-foreground/90 leading-relaxed italic m-0">{children}</p>
      <cite className="block mt-3 text-sm font-medium not-italic text-muted-foreground">{cite}</cite>
    </blockquote>
  );
}

function Phase({ time, heading, children }: { time: string; heading: string; children: React.ReactNode }) {
  return (
    <article className="border-l-2 border-border/40 pl-6 my-10 relative">
      <div className="absolute -left-[9px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
      <time className="block text-[10px] uppercase tracking-[0.18em] font-medium text-primary mb-3">{time}</time>
      <h3 className="text-xl font-serif text-foreground mb-3">{heading}</h3>
      {children}
    </article>
  );
}

function ScreenshotPlaceholder({ label }: { label?: string }) {
  return (
    <div className="w-full border-2 border-dashed border-border/50 rounded bg-muted/20 flex flex-col items-center justify-center py-16 px-8 my-8 text-center">
      <div className="w-10 h-10 rounded-full border-2 border-border/40 flex items-center justify-center mb-3">
        <span className="text-muted-foreground text-lg">+</span>
      </div>
      <p className="text-sm text-muted-foreground font-medium">{label ?? "Screenshot — add image here"}</p>
    </div>
  );
}

export default function ContentMaps() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col pb-24 w-full"
    >
      {/* Hero */}
      <div className="px-6 md:px-16 lg:px-24 py-8 md:py-16 max-w-5xl mx-auto w-full">
        <Link href="/work" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12">
          ← Back to Work
        </Link>

        <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary mb-5">
          Case study · Aampe · Jul 2025 – Apr 2026
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 tracking-tight leading-tight max-w-4xl">
          Content Maps: building the shared language for agentic content strategy
        </h1>

        <p className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed max-w-3xl mb-12">
          I took a scattered planning habit and turned it into Aampe's standard strategic
          artifact — defined, templated, named, taught, paired with AI tooling, and
          credited in closed-won deals.
        </p>

        {/* At a glance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 mb-12">
          {[
            { label: "Role", value: "Originator & owner of the methodology" },
            { label: "Commercial impact", value: "Credited in a $90K closed-won deal (Mintos)" },
            { label: "Scale", value: "~15 people trained company-wide; maps across 15+ accounts" },
            { label: "Legacy", value: "Proposed as a 60-day certification for every new hire" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-background p-6 flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">{label}</span>
              <strong className="text-foreground font-medium leading-snug">{value}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshot placeholder — hero */}
      <div className="w-full max-w-5xl mx-auto px-6 md:px-16 lg:px-24 mb-16">
        <ScreenshotPlaceholder label="Hero image / overview screenshot — add image here" />
      </div>

      {/* Body */}
      <div className="px-6 md:px-16 lg:px-24 max-w-3xl mx-auto w-full flex flex-col gap-0">

        {/* Context */}
        <motion.section {...fadeUp} transition={{ duration: 0.5 }} className="mb-14">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            Context
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-6">The problem: no shared way to see the whole conversation</h3>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-4">
            Aampe replaces campaign-based messaging with agentic AI — one agent per user,
            learning what to say, when, and where. But agents can only learn from the content
            they're given, and in 2025 there was no shared, repeatable way to answer the most
            basic strategic question on any account: <em>what should we be saying to whom, and
            where are the gaps?</em>
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed font-light">
            Every account team improvised its own version. Accounts a full year into their
            relationship — Taxfix, MyPostcard — had no map of their content at all.
            CRM, growth, and product functions optimized in silos, and strategy conversations ran
            on tribal knowledge instead of a common artifact. The result: uneven onboarding, slow
            ramp-up, and agents stuck learning from a small cluster of topics.
          </p>
        </motion.section>

        {/* The artifact */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            The artifact
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-6">What a content map is</h3>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-4">
            A content map is a <strong>bird's-eye view of all possible touchpoints</strong> across
            a product's architecture, journeys, flows, customer experience, and lifecycle. A{" "}
            <em>touchpoint</em> is any opportunity where an agent can act as a medium of interaction
            between a user and the brand — a push notification, an onboarding screen, an email,
            an in-app banner, even a blog or FAQ that could be repurposed.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-8">
            The craft is capturing <em>all</em> of those touchpoints and organizing them into a
            structured hierarchy: features break into sub-features, sub-features generate{" "}
            <strong>topics</strong> (the content idea or message theme an agent can speak to —
            in Aampe, a topic maps to a message group), and each topic carries the operational
            metadata that makes it buildable: channels, trigger events, audience, and priority.
            In practice it lives in a spreadsheet anyone can read, critique, and fill gaps in
            at a glance.
          </p>

          {/* Sample table */}
          <div className="border border-border/50 rounded p-5 bg-muted/10">
            <p className="text-[10px] uppercase tracking-[0.18em] font-medium text-muted-foreground mb-4">
              Three rows of a content map (Uber — the teaching example from my guide)
            </p>
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-xs border-collapse min-w-[640px]">
                <thead>
                  <tr>
                    {["Feature", "Sub-feature", "Topic", "Content type", "Channels", "Entry event", "Audience", "Impact"].map((h) => (
                      <th key={h} className="bg-foreground text-background text-left px-3 py-2 font-semibold tracking-wide whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Rides", sub: "Reserve", topic: "Advance booking education", type: "foundational-feature-education", channels: "Push, Email", event: "— (always on)", audience: "All users", impact: "High", high: true },
                    { feature: "Eats", sub: "Food", topic: "Rainy-day comfort food", type: "contextual-datafeed", channels: "Push, In-app", event: "weather = rain", audience: "Active eaters", impact: "Med", high: false },
                    { feature: "Rides", sub: "Cabs", topic: "Add dinner to your ride home", type: "contextual-crosssell", channels: "Push", event: "ride_booked", audience: "Riders, non-Eats users", impact: "Med", high: false },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="border border-border/40 bg-background px-3 py-2 align-top">{row.feature}</td>
                      <td className="border border-border/40 bg-background px-3 py-2 align-top">{row.sub}</td>
                      <td className="border border-border/40 bg-background px-3 py-2 align-top">{row.topic}</td>
                      <td className="border border-border/40 bg-background px-3 py-2 align-top text-muted-foreground">{row.type}</td>
                      <td className="border border-border/40 bg-background px-3 py-2 align-top">{row.channels}</td>
                      <td className="border border-border/40 bg-background px-3 py-2 align-top text-muted-foreground">{row.event}</td>
                      <td className="border border-border/40 bg-background px-3 py-2 align-top">{row.audience}</td>
                      <td className={`border border-border/40 bg-background px-3 py-2 align-top font-bold ${row.high ? "text-primary" : "text-muted-foreground"}`}>{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* The purpose */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            The purpose
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-6">Why we build one</h3>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-8">
            Aampe's agents learn per user — but they can only learn from the content they're given.
            If a team only writes discount pushes, the agent can only ever learn "this user likes
            discounts." The content map exists to fix four problems at once:
          </p>
          <div className="flex flex-col gap-px bg-foreground/10 border border-foreground/10">
            {[
              { title: "Coverage for agent learning", body: "Agents need breadth — many topics, tones, and contexts — to find what resonates with each user. The map makes the full opportunity space visible, so content gets created for every moment of value, not just the loudest campaign idea." },
              { title: "Seeing what could exist, not just what does", body: "Most teams unknowingly operate inside a small fraction of their opportunity space. The map doesn't just catalog existing content — it exposes the openings: features never messaged, intents never connected, tones never tried." },
              { title: "A shared canvas across silos", body: "CRM, growth, product, and data teams each see their piece of the user journey. The map puts every touchpoint on one strategic surface, so alignment happens on evidence instead of tribal knowledge." },
              { title: "Prioritization you can defend", body: "The Impact column (High / Med / Low) sequences which topics accelerate agentic learning in the first three months, weighing content type, business KPIs, technical feasibility, and whether content can be repurposed — turning \"what should we build first?\" into a recommendation, not a debate." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-background p-6 flex flex-col gap-2">
                <h4 className="text-base font-medium text-foreground">{title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed font-light m-0">{body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* The method */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            The method
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-6">How one gets built</h3>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-8">
            I codified the build process into a step-by-step guide for internal teams — written
            so that someone who has never made one can go from a blank sheet to a working map.
            Four steps:
          </p>
          <ol className="flex flex-col gap-6">
            {[
              {
                n: "01",
                title: "Inventory features & sub-features",
                body: "Walk the entire product exhaustively — every screen, every flow, app and web — and list every feature and sub-feature into a hierarchy. The discipline matters: change locations, switch user modes, and keep going until the feature space is genuinely exhausted.",
                chips: [],
              },
              {
                n: "02",
                title: "Add global touchpoints",
                body: "Step back and capture the feature-agnostic layer: subscription tiers, onboarding and KYC flows, platform surfaces (Home, Account, Activity), and supporting content beyond the app — FAQs, help articles, blogs, app reviews. These become a \"Global\" feature so no relationship-building moment is invisible.",
                chips: [],
              },
              {
                n: "03",
                title: "Generate topics through content-type lenses",
                body: "For each touchpoint, ideate topics using a taxonomy of content types — creative lenses that turn one feature into many distinct engagement opportunities:",
                chips: [
                  { label: "Foundational", sub: "repurpose · feature-education · thematic · general" },
                  { label: "Contextual", sub: "event-driven · lifecycle · time · datafeed · cross-sell · social · attribute" },
                  { label: "Recommender", sub: "" },
                  { label: "Seasonal", sub: "" },
                  { label: "Transactional", sub: "" },
                ],
              },
              {
                n: "04",
                title: "Make it operational",
                body: "Add the columns that turn a brainstorm into a working plan: channels, entry and exit events for triggered content, whether content already exists to repurpose, audience type, and the Impact rating — plus deeplinks, status, and owners so the map doubles as the content-production tracker for the whole engagement.",
                chips: [],
              },
            ].map(({ n, title, body, chips }) => (
              <li key={n} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-foreground text-background rounded flex items-center justify-center text-sm font-bold font-sans">
                  {n}
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <h4 className="text-base font-medium text-foreground">{title}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed font-light m-0">{body}</p>
                  {chips.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {chips.map(({ label, sub }) => (
                        <span key={label} className="bg-foreground/8 border border-border/50 rounded-full px-3 py-1 text-xs font-semibold text-foreground/80">
                          {label}{sub ? <span className="font-normal text-muted-foreground ml-1">— {sub}</span> : null}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* My role */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            My role
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-6">Owner of the artifact, end to end</h3>
          <p className="text-lg text-foreground/80 leading-relaxed font-light">
            I proposed the content map as a standard for every customer, defined its structure,
            built the first templates that other people reused, led the exercise that named it,
            wrote the guide that taught it, ran the company-wide challenge that scaled it, paired
            it with AI tooling, and published the public thought-leadership piece that positioned
            it. This is the full arc — from one Slack proposal to a company-wide capability
            proposed as a hiring requirement. Here's how it evolved.
          </p>
        </motion.section>

        {/* The Work */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            The work
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-8">From one proposal to company infrastructure</h3>

          <Phase time="Phase 1 · July 2025 — The proposal" heading="Made the map a standard, not a one-off">
            <p className="text-foreground/80 leading-relaxed font-light mb-0">
              On the Deezer account, I proposed that every customer get a content map before
              post-sales handoff, and defined the artifact for the team: "a strategic outline of
              the key features, user actions, message topics and surfaces that should be covered
              over the course of partnership — it helps ensure we've got the right breadth
              of content for agent learning."
            </p>
            <PullQuote cite='Paul Meinshausen, CEO — same day, with four teammates asking to join the working session'>
              "I'm confident we don't have that for Deezer. Please kick it off Mohana. Thank you!"
            </PullQuote>
          </Phase>

          <ScreenshotPlaceholder label="Screenshot: first content map (Deezer / Taxfix) — add image here" />

          <Phase time="Phase 2 · Jul–Sep 2025 — Templates that traveled" heading="Proved the artifact was portable across verticals">
            <p className="text-foreground/80 leading-relaxed font-light mb-0">
              I built the Taxfix content map as a reusable template — and watched it travel
              without me in the room. A colleague ported it directly into theCut's Q3 strategy
              session (fintech → barbershop marketplace), and I went on to build maps for
              Deezer, Carousell, NBA, Traveloka, and Swiggy. The Carousell map's channel-aware
              structure was adopted as the team template for cross-channel mapping.
            </p>
            <PullQuote cite="Derek Geryol, CSM — #internal-thecut, July 2025" variant="sienna">
              "The content map you prepared for Taxfix was an incredible resource. I was able to map out theCut based on how you built that doc out."
            </PullQuote>
            <PullQuote cite="Schaun Wheeler, Co-founder — on the Deezer content map, August 2025" variant="sienna">
              "Every time Mohana pulls another one of these out, I feel like I'm watching a magician at work."
            </PullQuote>
          </Phase>

          <Phase time="Phase 3 · Aug 2025 — Pairing the map with AI" heading="Turned methodology into training data">
            <p className="text-foreground/80 leading-relaxed font-light mb-0">
              When the team built ContentMaPT — a custom GPT that generates first-pass content maps in about ten minutes — it was trained on my map templates. The map also became one half of a repeatable onboarding workflow ("Content Map + aamPT"), pairing it with the custom GPT I built and maintained, demoed to the whole CS team. I later built MapPT, a custom GPT for building maps, and rolled it out across the GTM org with a working session.
            </p>
            <PullQuote cite="Amaan Kulatunga, Solutions Consultant — introducing ContentMaPT, August 2025">
              "Thank you for your stellar templates — they set the bar so high for GPT to follow."
            </PullQuote>
          </Phase>

          <Phase time="Phase 4 · Aug–Sep 2025 — Naming & positioning" heading="Gave the artifact language that worked in sales rooms">
            <p className="text-foreground/80 leading-relaxed font-light mb-4">
              A tool this central needed language that could hold up in sales rooms. I opened the naming debate ("Opportunity Map?"), facilitated input across CS, marketing, product, and the CEO, and closed it with a company-wide vote (29 votes): <strong>Agentic Personalization Map</strong>. It was in a live deal deck the same day.
            </p>
            <p className="text-foreground/80 leading-relaxed font-light mb-0">
              When the CEO pushed to put "process and roadmap over any specific sheet," that shaped the map's role inside a standardized onboarding methodology — the four-session structure our CS team now follows.
            </p>
          </Phase>

          <ScreenshotPlaceholder label="Screenshot: naming vote / map-led deal deck — add image here" />

          <Phase time="Phase 5 · Oct–Nov 2025 — Teaching it at scale: the Content Map Challenge" heading="Turned a personal skill into a company capability">
            <p className="text-foreground/80 leading-relaxed font-light mb-4">
              I authored a step-by-step "How to Build Content Maps" guide in Notion, then designed and ran a company-wide contest to pressure-test it: ~15 participants, each assigned a real customer or prospect, two-week window, judged submissions with individualized written feedback on every single map. I also founded the #temp_content_maps channel and a Notion library centralising every client's map.
            </p>
            <ul className="flex flex-col gap-2 text-foreground/80 leading-relaxed font-light list-disc pl-5 marker:text-primary mb-4 text-base">
              <li>Winners announced with transparent criteria and real prizes; the winning map (Whatnot) was built by a new hire who credited the exercise for nailing a live ThredUp demo weeks later.</li>
              <li>Insights from all submissions were folded back into evolving the map format itself.</li>
              <li>Leadership response: "a great onboarding requirement for future new hires" (Zach Dorner), "I'll add it to the checklist" (Alana Wilder), and a proposal from senior leadership to make it a company-wide certification within every new hire's first 60 days.</li>
            </ul>
          </Phase>

          <ScreenshotPlaceholder label="Screenshot: Content Map Challenge guide / submissions — add image here" />

          <Phase time="Phase 6 · Oct 2025–Apr 2026 — Product, sales & public voice" heading="From internal tool to public positioning">
            <p className="text-foreground/80 leading-relaxed font-light mb-4">
              I published the public positioning piece —{" "}
              <a href="https://aampe.com/blog/the-bigger-picture-how-aampe-s-content-maps-redefine-content-strategy" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">
                The Bigger Picture: How Aampe's Content Maps Redefine Content Strategy
              </a>{" "}
              (Oct 2025) — framing maps as the connective tissue of agentic personalization.
            </p>
            <p className="text-foreground/80 leading-relaxed font-light mb-0">
              Inside the company, the map started driving product thinking: I proposed topic-coverage metrics and progressive "unlock analytics as you expand coverage" mechanics that fed the product team's roadmap discussion. The map-led onsite session for Mintos was later credited in the closed-won announcement.
            </p>
            <PullQuote cite="Sam McGill, Sales — Mintos closed-won announcement, $90K TCV, October 2025" variant="sienna">
              "Mohana — thank you for all of your work on the content map!! This was a key session ran on-site in Berlin."
            </PullQuote>
            <PullQuote cite='Director of Lifecycle at Monday.com (prospect), on the map-led POC deck'>
              "This was the selling point of the session. If I do a presentation to my executives, this is it."
            </PullQuote>
          </Phase>
        </motion.section>

        {/* Outcomes */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            Outcomes
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-8">Receipts</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 mb-8">
            {[
              { label: "Commercial", value: "Publicly credited as a key session in the $90K Mintos closed-won deal. A prospect called the map-led deck \"the selling point of the session.\"" },
              { label: "Operational", value: "Went from \"doesn't exist on accounts a year in\" to a standard expected at onboarding and QBRs, embedded in the 4-session onboarding methodology." },
              { label: "Organizational", value: "~15 people across every function built full end-to-end maps; proposed as a 60-day certification for all new hires." },
              { label: "Technical", value: "Map templates became training data for two custom GPTs (ContentMaPT, MapPT) and a repeatable Content Map + aamPT onboarding workflow." },
            ].map(({ label, value }) => (
              <div key={label} className="bg-background p-6 flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">{label}</span>
                <p className="text-foreground/80 text-sm leading-relaxed font-light m-0">{value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {[
              { quote: "This Content Map template is fire.", cite: "Amaan Kulatunga, Solutions Consultant" },
              { quote: "I'm loving the new content map format in action.", cite: "Amaan Kulatunga, on the client-facing Traveloka map" },
              { quote: "No wonder you absolutely nailed the demo with ThredUp and drafted such good message content!", cite: "Piper Martz, to the Challenge winner — skill transfer in action" },
              { quote: "We pulled a lot of insights from this exercise, and it's really helping shape how we evolve the Content Map.", cite: "Amaan Kulatunga, Challenge wrap-up" },
            ].map(({ quote, cite }) => (
              <PullQuote key={cite} cite={cite} variant="lime">
                "{quote}"
              </PullQuote>
            ))}
          </div>

          <ScreenshotPlaceholder label="Screenshot: closed-won announcement / blog post — add image here" />
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            What this demonstrates
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif mb-8">Skills, mapped for hiring managers</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {[
              { title: "0→1 framework design", body: "Saw a structural gap, defined the artifact, and iterated the format against real prospect friction — including reworking a core dimension after a live session exposed it." },
              { title: "Systems thinking", body: "Designed the map to connect strategy to execution: audiences to value props to labels to agent learning — one artifact legible to CRM, growth, product, and data teams." },
              { title: "Cross-functional leadership", body: "Aligned CS, sales, product, marketing, and the CEO around one artifact — through facilitation and a company vote, not mandate." },
              { title: "AI-native workflows", body: "Turned the methodology into GPT training material and paired it with custom AI tooling so a 4-hour expert task became a 10-minute first pass." },
              { title: "Enablement & teaching", body: "Authored the guide, designed the contest, gave individualized feedback on every submission, and built the channel and library that keep it alive." },
              { title: "Commercial instinct", body: "Positioned an internal planning tool as a sales asset — credited in a closed-won deal and called \"the selling point\" by a prospect executive." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-background p-6 flex flex-col gap-3">
                <h4 className="text-base font-medium text-foreground">{title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed font-light m-0">{body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Reflection */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-border/50 pb-4 mb-8">
            Reflection
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed font-light mb-4">
            A genuinely good internal tool doesn't stay internal. It gets requested by name, ported across verticals, paired with AI tooling, turned into a curriculum, and eventually proposed as a hiring bar.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed font-light">
            Every major improvement to the map came from watching someone else try to use it — the missing value-proposition dimension, the pitch refinements, the Challenge's "wait, this part's confusing" moments. The bar for a framework that scales isn't "people liked it"; it's showing up in someone else's work as the obvious way to do things.
          </p>
        </motion.section>

        {/* Links */}
        <div className="border-t border-border/50 pt-8 flex flex-wrap gap-6">
          <a
            href="https://aampe.com/blog/the-bigger-picture-how-aampe-s-content-maps-redefine-content-strategy"
            target="_blank"
            rel="noreferrer"
            className="text-foreground border-b border-foreground/30 pb-0.5 hover:text-primary hover:border-primary transition-colors text-sm font-medium"
          >
            Content Maps blog ↗
          </a>
          <a
            href="https://aampe.com/blog/message-structures-giving-agents-more-choice"
            target="_blank"
            rel="noreferrer"
            className="text-foreground border-b border-foreground/30 pb-0.5 hover:text-primary hover:border-primary transition-colors text-sm font-medium"
          >
            Message Structures blog ↗
          </a>
        </div>

      </div>
    </motion.article>
  );
}
