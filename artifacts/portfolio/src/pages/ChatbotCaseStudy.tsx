import { motion } from "framer-motion";
import { Link } from "wouter";

function AssetPlaceholder({
  id,
  aspectRatio = "16/9",
  description = "",
  className = "",
}: {
  id: string;
  aspectRatio?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-primary/20 bg-primary/5 ${className}`}
      style={{ aspectRatio }}
    >
      <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">{id}</span>
      {description && (
        <span className="text-[11px] text-muted-foreground text-center max-w-[200px] px-4 leading-snug">{description}</span>
      )}
    </div>
  );
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <span>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

function StepHeading({ emoji, title }: { emoji: string; title: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="text-4xl mb-4">{emoji}</div>
      <h2 className="text-3xl md:text-4xl font-serif text-foreground">{title}</h2>
    </div>
  );
}

const sectionAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export default function ChatbotCaseStudy() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-1 bg-background"
    >
      {/* ── Back link ── */}
      <div className="px-6 md:px-16 lg:px-24 pt-10 max-w-6xl mx-auto">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/50 px-4 py-2"
        >
          ← Back to Work
        </Link>
      </div>

      {/* ──────────────────────────────────────────
          Section 1 — Hero
      ────────────────────────────────────────── */}
      <motion.section {...sectionAnim} className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 pt-12 pb-20">
        {/* Two-layer hero: image right, card left overlapping */}
        <div className="relative flex flex-col md:block">
          {/* Hero image — right 65% on desktop */}
          <div className="md:absolute md:right-0 md:top-0 md:w-[65%] w-full">
            <AssetPlaceholder
              id="IMG-HERO-3D"
              aspectRatio="4/3"
              description="3D chatbot robot illustration on dark background, ~1200×900px"
            />
          </div>

          {/* Content card — left 55% overlapping image edge */}
          <div className="relative z-10 md:w-[55%] bg-background border-2 border-foreground p-8 md:p-10 mt-6 md:mt-8 md:mb-8 flex flex-col gap-6">
            <div className="w-28">
              <AssetPlaceholder id="LOGO-LAZYPAY" aspectRatio="5/1" description="LazyPay logo" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight">
              Building an in-app Chat Assistant
            </h1>
            <p className="text-foreground/70 leading-relaxed font-sans text-lg">
              Conversation Design and IA for an in-app automated Help and Support bot that can
              provide quicker factual resolutions for users and increase customer satisfaction
            </p>
          </div>

          {/* Spacer so the section has height for the absolute image on desktop */}
          <div className="hidden md:block" style={{ paddingTop: "calc(65% * 3/4 * 0.5)" }} />
        </div>

        {/* Meta row — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border/50 pt-10 mt-2">
          {[
            {
              emoji: "📓",
              label: "Project Brief",
              text: "Design the entire end-to-end conversation flow, information architecture, and category tree for an in-app support chatbot",
            },
            { emoji: "⏳", label: "Duration / Size", text: "2 months / XL" },
            {
              emoji: "👩‍🔧",
              label: "My Role",
              text: "Took ownership of formulating the information architecture, content strategy, and end-to-end conversation design, with support from the designer and PM",
            },
          ].map(({ emoji, label, text }) => (
            <div key={label} className="flex flex-col gap-3">
              <span className="text-3xl">{emoji}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">{label}</span>
              <p className="text-sm text-foreground/80 leading-relaxed font-sans">{text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────
          Section 2 — Problem, Impact, Rationale
      ────────────────────────────────────────── */}
      <motion.section
        {...sectionAnim}
        className="border-t border-border/50"
      >
        <div className="max-w-3xl mx-auto px-6 md:px-16 lg:px-24 py-20 flex flex-col gap-20 text-center">
          {/* Problem Statement */}
          <div>
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-2xl md:text-3xl font-serif mb-6">Problem Statement</h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-sans">
              <strong className="font-semibold text-foreground">82%</strong> of queries (
              <strong className="font-semibold text-foreground">&gt;50K per month on avg.</strong>) received by our call
              center can be resolved with factual information. Our objective is to reduce total number of incoming calls
              to customer care executives, as well as increase CSAT with a better support experience.
            </p>
          </div>

          {/* Business Impact */}
          <div>
            <div className="text-4xl mb-4">💰</div>
            <h2 className="text-2xl md:text-3xl font-serif mb-6">Business Impact</h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-sans">
              Targeting even a <strong className="font-semibold text-foreground">60% resolution rate</strong> via chat
              would lead to a monthly savings of at least{" "}
              <strong className="font-semibold text-primary">Rs. 700K</strong> (INR).
            </p>
          </div>

          {/* Why a chatbot */}
          <div>
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl md:text-3xl font-serif mb-6">Why a chatbot and not something else?</h2>
            <ul className="text-left flex flex-col gap-4 text-lg text-foreground/80 font-sans max-w-xl mx-auto">
              {[
                "**One-time build cost:** Reduced cost of labour force",
                "**Cross-sell benefits:** added incentive for users to download our app",
                "**Instant resolutions** vs Wait time on phone call / email",
                "**Easier data gathering:** to track and analyse conversations for future improvement",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary shrink-0 mt-1">•</span>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────
          Section 3 — Constraints for Phase I
      ────────────────────────────────────────── */}
      <motion.section
        {...sectionAnim}
        className="border-t border-border/50 bg-foreground/[0.02]"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-20">
          <h2 className="text-2xl md:text-3xl font-serif mb-2">Constraints for Phase I</h2>
          <p className="text-muted-foreground font-sans mb-14">
            Based on our timelines, all stakeholders collectively decided on the following
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6">
            {[
              { n: "01.", text: "Capabilities limited only to Help & Support" },
              { n: "02.", text: "Use a simple decision tree logic, not NLP" },
              { n: "03.", text: "Bot has a persona, but no name or avatar" },
              { n: "04.", text: "Use a third-party vendor, not native" },
              { n: "05.", text: "Every new chat carries same context" },
            ].map(({ n, text }) => (
              <div key={n} className="flex flex-col gap-3">
                <span className="text-3xl font-serif font-bold text-primary">{n}</span>
                <p className="text-sm text-foreground/80 font-sans leading-snug">{text}</p>
                <div className="w-8 h-[2px] bg-foreground/25 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────
          Section 4 — The Process
      ────────────────────────────────────────── */}
      <motion.section
        {...sectionAnim}
        className="border-t border-border/50"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-20">
          <div className="text-center mb-14">
            <div className="text-4xl mb-4">🧪</div>
            <h2 className="text-2xl md:text-3xl font-serif">The Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "Gather Research & Data",
                text: "I first collated all the available data in the system, analysed the results, and used that as the foundation for the next step.",
              },
              {
                title: "Create Guidelines",
                text: "Decisions were made with stakeholders to create rules and frameworks for building the tree and common components in the flow.",
              },
              {
                title: "Test Initial Prototypes",
                text: "In the spirit of build fast, fail fast I made prototypes for select user queries and tested out the conversation flows.",
              },
              {
                title: "Build Tree & Final Design",
                text: "After collecting feedback from the tests, I designed the entire conversation tree, along with the app screens to ensure discovery.",
              },
            ].map(({ title, text }, i) => (
              <div key={i} className="border border-foreground p-6 flex flex-col gap-3">
                <span className="text-xs font-mono text-primary/50 mb-1">0{i + 1}</span>
                <h3 className="font-serif text-lg text-foreground">{title}</h3>
                <p className="text-sm text-foreground/65 font-sans leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────
          Section 5 — Step 1: Research & Data
      ────────────────────────────────────────── */}
      <motion.section
        {...sectionAnim}
        className="border-t border-border/50"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-20">
          <StepHeading emoji="1️⃣" title="Gather Research & Data" />

          <p className="text-center text-lg text-foreground/70 font-sans mb-10 max-w-2xl mx-auto">
            Collected quantitative & qualitative resources from the UX research team and customer care team, through
            various methods including:
          </p>

          <ul className="max-w-2xl mx-auto flex flex-col gap-4 mb-20">
            {[
              "Going through **user interviews**, **customer care recordings**, and **transcripts**",
              "**Monthly customer care reports** to identify top issues & their distribution",
              "**Competitor analysis** of other fintech apps and the language used in their Help & Support sections",
              "Mapping the user journey and creating **mind maps** with the designer and PM",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-foreground/80 font-sans leading-relaxed">
                <span className="text-primary shrink-0 mt-1">—</span>
                <RichText text={item} />
              </li>
            ))}
          </ul>

          {/* Insights */}
          <div className="border-t border-border/50 pt-14">
            <div className="text-center mb-10">
              <span className="text-3xl block mb-3">🧠</span>
              <h3 className="text-xl font-serif">Insights</h3>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground mb-6">Top Issues</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  pct: "21.1%",
                  category: "Account related",
                  queries: ["I want to delete my account", "Unable to log in", "My account is blocked"],
                },
                {
                  pct: "14.6%",
                  category: "Loans and EMIs",
                  queries: ["What's the status of my loan", "How many EMIs are left", "About loan foreclosure"],
                },
                {
                  pct: "6.14%",
                  category: "Charges and fees",
                  queries: ["What is the latest fee structure", "Why was I charged interest", "Need late fee waiver"],
                },
              ].map(({ pct, category, queries }) => (
                <div key={category} className="border border-border/50 p-7 flex flex-col gap-3">
                  <span className="text-4xl font-serif font-bold text-primary">{pct}</span>
                  <span className="font-semibold text-foreground font-sans">{category}</span>
                  <ul className="flex flex-col gap-1 mt-1">
                    {queries.map((q) => (
                      <li key={q} className="text-sm text-muted-foreground font-sans">
                        "{q}"
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────
          Section 6 — Step 2: Guidelines & Framework
      ────────────────────────────────────────── */}
      <motion.section
        {...sectionAnim}
        className="border-t border-border/50 bg-foreground/[0.02]"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-20">
          <StepHeading emoji="2️⃣" title="Guidelines and Framework" />
          <div className="flex flex-col divide-y divide-border/50">
            {[
              {
                icon: "😊",
                left: ["Our bot's tone is ", "empathetic", ""],
                body: "Users who reach out to Help & Support are not usually in a positive state of mind. Emotions can range from slightly annoyed to angry. Hence, the ideal tone for a helpful and reassuring chatbot is warm, friendly, and empathetic, maintaining a professional yet approachable demeanor to create a positive and supportive user experience.",
              },
              {
                icon: "⚡",
                left: ["Our bot should be ", "co-operative", " and follow turn-taking"],
                body: "The information provided by the bot should be relevant, truthful, unambiguous, and just as much as is necessary. The bot must take turns in the same way a real conversation progresses.",
              },
              {
                icon: "⭐",
                left: ["Each node should have ", "at most 3 options", ""],
                body: "Simplify decision-making for a user, while also presenting them with enough choices. This rule applies to every node except the first level of choices (our main menu).",
              },
              {
                icon: "🌐",
                left: ["The user must ", "always be in control", ""],
                body: "Only the user gets to end the conversation, not the bot. They always have the option to exit, go back, or restart the flow at any given time.",
              },
            ].map(({ icon, left, body }, i) => (
              <div key={i} className="grid md:grid-cols-[2fr_3fr] gap-8 py-10 items-start">
                <div className="flex gap-4 items-start">
                  <span className="text-3xl shrink-0">{icon}</span>
                  <p className="text-xl font-serif text-foreground leading-snug">
                    {left[0]}
                    <span className="text-primary">{left[1]}</span>
                    {left[2]}
                  </p>
                </div>
                <p className="text-foreground/70 font-sans leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────
          Section 7 — Step 3: Prototype & Test
      ────────────────────────────────────────── */}
      <motion.section
        {...sectionAnim}
        className="border-t border-border/50"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-20">
          <StepHeading emoji="3️⃣" title="Prototype and Test" />

          <p className="text-center text-lg text-foreground/70 font-sans mb-12 max-w-2xl mx-auto">
            Before building the entire tree, it was essential to prototype and test our basic hypotheses and insights. We
            tested the top 3 queries for:
          </p>

          {/* Prototype image + IA card */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <AssetPlaceholder
              id="IMG-PROTOTYPE-TEST"
              aspectRatio="4/3"
              description="Prototype screenshot of the test chatbot — portrait, ~800×600px"
            />
            <div className="border border-border/50 p-8 flex flex-col justify-center gap-4">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                Information Architecture
              </h3>
              <p className="text-foreground/80 font-sans leading-relaxed">
                What is the user's mental model? Do they seek help based on Use cases or based on Products? What should
                our top-level categories look like?
              </p>
            </div>
          </div>

          {/* Results intro */}
          <div className="border-t border-border/50 pt-14">
            <p className="text-center text-foreground/70 font-sans mb-14 max-w-2xl mx-auto">
              We tested 2 prototypes: One with Use Case categories, one with Product categories. Both contained flows for
              top customer issues. A total of{" "}
              <strong className="font-semibold text-foreground">10 user sessions</strong> were conducted.
            </p>

            {/* Findings grid: 3 left | phone | 3 right */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] lg:grid-cols-[1fr_220px_1fr] gap-6 items-start">
              {/* Left findings: 1, 3, 5 */}
              <div className="flex flex-col gap-5">
                {[
                  { n: "1", text: "Users found use case categorisation more intuitive", outcome: "Finalised this categorisation", positive: true },
                  { n: "3", text: "Some users wanted the option to type freely (NLP)", outcome: "Added to Phase II scope", positive: false },
                  { n: "5", text: "Some users wanted more visual cues along with text", outcome: "Added rich media like PDFs, images, videos to answers", positive: false },
                ].map(({ n, text, outcome, positive }) => (
                  <div key={n} className="border border-border/50 p-5 flex flex-col gap-3">
                    <span className="text-2xl font-serif font-bold text-primary/25">{n}</span>
                    <p className="text-sm text-foreground/80 font-sans leading-relaxed">{text}</p>
                    <span className={`self-start text-xs font-medium px-3 py-1 ${positive ? "text-primary bg-primary/10" : "text-muted-foreground bg-foreground/5"}`}>
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>

              {/* Central phone mockup */}
              <div className="hidden md:block">
                <AssetPlaceholder
                  id="IMG-TEST-PHONE"
                  aspectRatio="9/16"
                  description="Tested chatbot prototype on phone frame"
                />
              </div>

              {/* Right findings: 2, 4, 6 */}
              <div className="flex flex-col gap-5">
                {[
                  { n: "2", text: 'Users like the "Top questions" section', outcome: "Positive feedback", positive: true },
                  { n: "4", text: "Suggested an option to raise ticket within app instead of just sharing customer care no.", outcome: "Added to Phase II scope", positive: false },
                  { n: "6", text: "Users were comfortable with the interface and format", outcome: "Positive feedback", positive: true },
                ].map(({ n, text, outcome, positive }) => (
                  <div key={n} className="border border-border/50 p-5 flex flex-col gap-3">
                    <span className="text-2xl font-serif font-bold text-primary/25">{n}</span>
                    <p className="text-sm text-foreground/80 font-sans leading-relaxed">{text}</p>
                    <span className={`self-start text-xs font-medium px-3 py-1 ${positive ? "text-primary bg-primary/10" : "text-muted-foreground bg-foreground/5"}`}>
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile phone — shown only on small screens */}
            <div className="md:hidden mt-8 max-w-[200px] mx-auto">
              <AssetPlaceholder id="IMG-TEST-PHONE" aspectRatio="9/16" description="Phone mockup" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────
          Section 8 — Step 4: Final Tree & Designs
      ────────────────────────────────────────── */}
      <motion.section
        {...sectionAnim}
        className="border-t border-border/50 bg-foreground/[0.02]"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-20">
          <StepHeading emoji="4️⃣" title="Final tree and designs" />

          <p className="text-center text-lg text-foreground/70 font-sans mb-3 max-w-2xl mx-auto">
            The entire decision tree spanned{" "}
            <strong className="font-semibold text-foreground">5 product lines</strong> with interconnected flows, and
            covers everything from transactions to repayments, and more (image shown to scale).
          </p>
          <p className="text-center text-muted-foreground font-sans mb-14">A sample conversation is added below.</p>

          {/* Decision tree + zoom overlay */}
          <div className="relative mb-20">
            <AssetPlaceholder
              id="IMG-DECISION-TREE"
              aspectRatio="8/3"
              description="Full decision tree flowchart — very wide landscape, ~2400×900px"
            />
            <div className="md:absolute md:bottom-[-28px] md:left-6 md:w-72 mt-4 md:mt-0 bg-background border border-border/50 shadow-lg overflow-hidden">
              <AssetPlaceholder
                id="IMG-TREE-ZOOM"
                aspectRatio="7/5"
                description="Zoomed-in branch of the decision tree, ~700×500px"
              />
            </div>
          </div>

          {/* Sample conversation — 4 chat cards */}
          <div className="md:pt-8">
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground text-center mb-8">
              Sample Conversation
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Card 1 — Greeting */}
              <div className="border border-border/50 bg-background flex flex-col text-sm font-sans">
                <div className="bg-foreground/5 border-b border-border/50 px-4 py-2">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Greeting</span>
                </div>
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <p className="bg-primary/10 text-foreground/90 p-3 text-xs leading-relaxed">
                    Hey there! I'm your LazyPay Assistant, always ready to assist you with anything.
                    <br /><br />What can I help you with?
                  </p>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Top Questions</span>
                    {[
                      "What is the status of my XpressLoan application?",
                      "How many EMIs left for my loan?",
                      "I need help with repayments",
                      "Unable to repay my dues",
                      "Unable to transact with LazyPay limit",
                    ].map((opt) => (
                      <div
                        key={opt}
                        className={`text-[11px] px-2.5 py-1.5 border rounded-sm leading-snug ${opt === "I need help with repayments" ? "bg-foreground text-background border-foreground font-medium" : "border-border/50 text-foreground/55"}`}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2 — Repayments */}
              <div className="border border-border/50 bg-background flex flex-col text-sm font-sans">
                <div className="bg-foreground/5 border-b border-border/50 px-4 py-2">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Repayments</span>
                </div>
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <p className="bg-primary/10 text-foreground/90 p-3 text-xs leading-relaxed">
                    Of course, we're happy to help. What do you need help with?
                  </p>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Choose an option</span>
                    {["Repaying dues and EMIs", "Auto-payments", "Late fees and charges"].map((opt) => (
                      <div
                        key={opt}
                        className={`text-[11px] px-2.5 py-1.5 border rounded-sm ${opt === "Auto-payments" ? "bg-foreground text-background border-foreground font-medium" : "border-border/50 text-foreground/55"}`}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border/50 px-4 py-2 flex gap-2">
                  <span className="text-[10px] border border-border/50 px-2 py-1 text-muted-foreground">Go back</span>
                  <span className="text-[10px] border border-border/50 px-2 py-1 text-muted-foreground">Start over</span>
                </div>
              </div>

              {/* Card 3 — Auto-payments */}
              <div className="border border-border/50 bg-background flex flex-col text-sm font-sans">
                <div className="bg-foreground/5 border-b border-border/50 px-4 py-2">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Auto-payments</span>
                </div>
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <p className="bg-primary/10 text-foreground/90 p-3 text-xs leading-relaxed">
                    Understood. What would you like to know about auto-payments?
                  </p>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Choose an option</span>
                    {["How to set up auto-pay", "Check status of auto-pay setup", "Cancel auto-pay setup"].map((opt) => (
                      <div
                        key={opt}
                        className={`text-[11px] px-2.5 py-1.5 border rounded-sm ${opt === "How to set up auto-pay" ? "bg-foreground text-background border-foreground font-medium" : "border-border/50 text-foreground/55"}`}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border/50 px-4 py-2 flex gap-2">
                  <span className="text-[10px] border border-border/50 px-2 py-1 text-muted-foreground">Go back</span>
                  <span className="text-[10px] border border-border/50 px-2 py-1 text-muted-foreground">Start over</span>
                </div>
              </div>

              {/* Card 4 — Resolution */}
              <div className="border border-border/50 bg-background flex flex-col text-sm font-sans">
                <div className="bg-foreground/5 border-b border-border/50 px-4 py-2">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Resolution</span>
                </div>
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <p className="bg-primary/10 text-foreground/90 p-3 text-xs leading-relaxed">
                    Setting up auto-pay for your dues and EMIs is super easy 🎉 Here's how:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Go to Dues → Setup Auto-pay and follow the instructions",
                      "You'll need a bank account with net-banking enabled. Keep the login details handy",
                      "Once the setup is complete, it is sent to your bank for verification",
                      "We'll notify you once your setup is approved by your bank. It is usually done in a few minutes.",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 text-[11px] text-foreground/70 leading-snug">
                        <span className="text-primary shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-foreground/70">Here's a quick demo 👇</p>
                  <AssetPlaceholder id="VID-AUTOPAY-DEMO" aspectRatio="16/9" description="Auto-pay setup demo video" />
                </div>
                <div className="border-t border-border/50 px-4 py-2 flex gap-2 flex-wrap">
                  <span className="text-[10px] border border-primary/40 px-2 py-1 text-primary">Go to Dues</span>
                  <span className="text-[10px] border border-border/50 px-2 py-1 text-muted-foreground">Thanks, I'm done</span>
                  <span className="text-[10px] border border-border/50 px-2 py-1 text-muted-foreground">Go back</span>
                  <span className="text-[10px] border border-border/50 px-2 py-1 text-muted-foreground">Start over</span>
                </div>
              </div>
            </div>
          </div>

          {/* App UI Gallery */}
          <div className="mt-24">
            <p className="text-center text-foreground/70 font-sans mb-12">
              The app UI was also finalised by me and the product designer, with a focus on{" "}
              <strong className="font-semibold text-foreground">discoverability</strong> and{" "}
              <strong className="font-semibold text-foreground">comprehension</strong>.
            </p>
            {/* Contour background wrapper */}
            <div className="relative">
              <div className="absolute inset-0 border-2 border-dashed border-primary/10 bg-primary/[0.02] flex items-center justify-center">
                <span className="text-[9px] font-mono text-primary/20 tracking-widest">BG-CONTOUR</span>
              </div>
              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-4">
                {[
                  { id: "IMG-APPUI-1", description: "Entry point — LazyPay home screen with chatbot tooltip" },
                  { id: "IMG-APPUI-2", description: "Help & Support bottom sheet over home screen" },
                  { id: "IMG-APPUI-3", description: "Chat screen with category list" },
                  { id: "IMG-APPUI-4", description: "Chat screen showing EMI/repayment status" },
                ].map(({ id, description }) => (
                  <AssetPlaceholder key={id} id={id} aspectRatio="9/16" description={description} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────
          Section 9 — Closing
      ────────────────────────────────────────── */}
      <section className="border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Thanks for reading!</h2>
          <Link
            href="/work"
            className="text-muted-foreground hover:text-foreground transition-colors font-sans text-sm underline underline-offset-4"
          >
            ← Back to projects
          </Link>
        </div>
      </section>
    </motion.article>
  );
}
