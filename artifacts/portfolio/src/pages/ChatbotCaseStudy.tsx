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
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col pb-24 w-full"
    >
      {/* ── Header — matches ProjectDetail standard ── */}
      <div className="px-6 md:px-16 lg:px-24 py-8 md:py-16 max-w-5xl mx-auto w-full">
        <Link
          href="/work"
          className="inline-flex items-center text-sm font-sans font-semibold uppercase tracking-wider px-4 py-2 border-2 border-foreground bg-background transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] mb-12"
        >
          ← Back to Work
        </Link>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-12 tracking-tight leading-tight">
          Building an in-app Chat Assistant
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-border/50 text-sm">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Role</div>
            <div className="font-medium text-foreground">Sole Content Owner — IA, Content Strategy, Conversation Design</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Context</div>
            <div className="font-medium text-foreground">LazyPay (PayU Finance)</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Duration</div>
            <div className="font-medium text-foreground">2 months · XL project</div>
          </div>
        </div>
      </div>

      {/* ── Hero image — full width, matches ProjectDetail ── */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full overflow-hidden border border-border/10"
          style={{ maxHeight: 520 }}
        >
          <img
            src="/chatbot-hero.avif"
            alt="Building an in-app Chat Assistant — LazyPay"
            className="w-full object-cover"
            style={{ maxHeight: 520 }}
          />
        </motion.div>
      </div>

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
          <div className="w-full overflow-hidden border border-border/10 rounded-sm mb-12">
            <img
              src="/chatbot-common.avif"
              alt="Common chatbot UI components and framework"
              className="w-full h-auto"
            />
          </div>

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
            <div className="overflow-hidden border border-border/10 rounded-sm">
              <img
                src="/chatbot-ia.avif"
                alt="Information Architecture prototype test — chatbot"
                className="w-full h-full object-cover"
              />
            </div>
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

            {/* Findings grid: 3 left | prototype phone | 3 right */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_200px_1fr] lg:grid-cols-[1fr_220px_1fr] gap-6 items-start">
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

              {/* Centre — Figma prototype clipped to phone only */}
              <div className="hidden md:flex flex-col items-center gap-2">
                <div
                  style={{
                    width: 220,
                    height: 440,
                    overflow: "hidden",
                    position: "relative",
                    borderRadius: 8,
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <iframe
                    style={{
                      border: "none",
                      width: 800,
                      height: 450,
                      position: "absolute",
                      left: -290,
                      top: -5,
                      pointerEvents: "auto",
                    }}
                    src="https://embed.figma.com/proto/G9TSv7GD9azB5LZ1Z9JFKZ/Chatbot?kind=proto&node-id=27-5401&page-id=0%3A1&scaling=min-zoom&starting-point-node-id=27%3A5401&type=design&viewport=-1562%2C1815%2C0.39&embed-host=share"
                    allowFullScreen
                  />
                </div>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground">Try the prototype</span>
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

            {/* Mobile: full-width prototype embed */}
            <div className="md:hidden mt-8">
              <div className="w-full overflow-hidden border border-border/20 rounded-sm" style={{aspectRatio: "16/9"}}>
                <iframe
                  style={{border: "none"}}
                  width="100%"
                  height="100%"
                  src="https://embed.figma.com/proto/G9TSv7GD9azB5LZ1Z9JFKZ/Chatbot?kind=proto&node-id=27-5401&page-id=0%3A1&scaling=min-zoom&starting-point-node-id=27%3A5401&type=design&viewport=-1562%2C1815%2C0.39&embed-host=share"
                  allowFullScreen
                />
              </div>
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

          {/* Decision tree */}
          <div className="relative mb-20">
            <div className="w-full overflow-hidden border border-border/10 rounded-sm">
              <img
                src="/chatbot-sample.avif"
                alt="Decision tree spanning 5 product lines — LazyPay chatbot"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Sample conversation — 4 iPhone screens */}
          <div className="md:pt-8">
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground text-center mb-10">
              Sample Conversation
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

              {/* iPhone 1 — Greeting */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-full bg-[#1C1C1E] rounded-[2.2rem] p-[3px] shadow-2xl ring-1 ring-white/10">
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-10" />
                  <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between px-5 pt-4 pb-1">
                      <span className="text-[9px] font-semibold text-black">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex items-end gap-[1.5px]">
                          {[3,5,7,9].map(h => <div key={h} className="w-[2.5px] bg-black rounded-[1px]" style={{height: h}} />)}
                        </div>
                        <svg width="11" height="8" viewBox="0 0 12 9" fill="black"><path d="M6 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3.54-1.96a5 5 0 0 1 7.08 0l1.06-1.06a6.5 6.5 0 0 0-9.2 0zm-1.42-1.42A7.5 7.5 0 0 1 11.96 3.12l1.04-1.04A9 9 0 0 0 .04 2.08z"/></svg>
                        <div className="flex items-center">
                          <div className="w-[16px] h-[8px] rounded-[2px] border border-black/60 relative flex items-center px-[1.5px]">
                            <div className="w-[80%] h-[5px] bg-black rounded-[1px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 border-b border-gray-100 flex items-center gap-2 bg-white">
                      <div className="w-5 h-5 rounded-full bg-[#E5477D] flex items-center justify-center">
                        <span className="text-[7px] text-white font-bold">LP</span>
                      </div>
                      <span className="text-[9px] font-semibold text-black">LazyPay Assistant</span>
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 bg-gray-50 px-2.5 py-2.5 flex flex-col gap-2 min-h-[240px]">
                      <div className="bg-[#E5477D]/15 rounded-xl rounded-tl-sm px-2.5 py-2 self-start max-w-[85%]">
                        <p className="text-[9px] text-gray-800 leading-relaxed">Hey there! I'm your LazyPay Assistant, always ready to help.<br/><br/>What can I help you with?</p>
                      </div>
                      <p className="text-[7.5px] uppercase tracking-wider text-gray-400 mt-1">Top Questions</p>
                      <div className="flex flex-col gap-1">
                        {["What is the status of my XpressLoan?","How many EMIs left?","I need help with repayments","Unable to repay my dues","Unable to transact"].map((opt) => (
                          <div key={opt} className={`text-[8px] px-2 py-1.5 rounded-lg border leading-snug ${opt === "I need help with repayments" ? "bg-[#1C1C1E] text-white border-[#1C1C1E] font-medium" : "border-gray-200 text-gray-600 bg-white"}`}>
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground">Greeting</span>
              </div>

              {/* iPhone 2 — Repayments */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-full bg-[#1C1C1E] rounded-[2.2rem] p-[3px] shadow-2xl ring-1 ring-white/10">
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-10" />
                  <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between px-5 pt-4 pb-1">
                      <span className="text-[9px] font-semibold text-black">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex items-end gap-[1.5px]">
                          {[3,5,7,9].map(h => <div key={h} className="w-[2.5px] bg-black rounded-[1px]" style={{height: h}} />)}
                        </div>
                        <svg width="11" height="8" viewBox="0 0 12 9" fill="black"><path d="M6 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3.54-1.96a5 5 0 0 1 7.08 0l1.06-1.06a6.5 6.5 0 0 0-9.2 0zm-1.42-1.42A7.5 7.5 0 0 1 11.96 3.12l1.04-1.04A9 9 0 0 0 .04 2.08z"/></svg>
                        <div className="flex items-center">
                          <div className="w-[16px] h-[8px] rounded-[2px] border border-black/60 relative flex items-center px-[1.5px]">
                            <div className="w-[80%] h-[5px] bg-black rounded-[1px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 border-b border-gray-100 flex items-center gap-2 bg-white">
                      <div className="w-5 h-5 rounded-full bg-[#E5477D] flex items-center justify-center">
                        <span className="text-[7px] text-white font-bold">LP</span>
                      </div>
                      <span className="text-[9px] font-semibold text-black">LazyPay Assistant</span>
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 bg-gray-50 px-2.5 py-2.5 flex flex-col gap-2 min-h-[240px]">
                      <div className="self-end bg-[#1C1C1E] text-white rounded-xl rounded-tr-sm px-2.5 py-2 max-w-[85%]">
                        <p className="text-[9px] leading-relaxed">I need help with repayments</p>
                      </div>
                      <div className="bg-[#E5477D]/15 rounded-xl rounded-tl-sm px-2.5 py-2 self-start max-w-[85%]">
                        <p className="text-[9px] text-gray-800 leading-relaxed">Of course, we're happy to help. What do you need help with?</p>
                      </div>
                      <p className="text-[7.5px] uppercase tracking-wider text-gray-400 mt-1">Choose an option</p>
                      <div className="flex flex-col gap-1">
                        {["Repaying dues and EMIs","Auto-payments","Late fees and charges"].map((opt) => (
                          <div key={opt} className={`text-[8px] px-2 py-1.5 rounded-lg border leading-snug ${opt === "Auto-payments" ? "bg-[#1C1C1E] text-white border-[#1C1C1E] font-medium" : "border-gray-200 text-gray-600 bg-white"}`}>
                            {opt}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-1 mt-auto pt-2 border-t border-gray-100">
                        <button className="text-[8px] border border-gray-300 rounded-md px-2 py-1 text-gray-500">Go back</button>
                        <button className="text-[8px] border border-gray-300 rounded-md px-2 py-1 text-gray-500">Start over</button>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground">Repayments</span>
              </div>

              {/* iPhone 3 — Auto-payments */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-full bg-[#1C1C1E] rounded-[2.2rem] p-[3px] shadow-2xl ring-1 ring-white/10">
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-10" />
                  <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between px-5 pt-4 pb-1">
                      <span className="text-[9px] font-semibold text-black">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex items-end gap-[1.5px]">
                          {[3,5,7,9].map(h => <div key={h} className="w-[2.5px] bg-black rounded-[1px]" style={{height: h}} />)}
                        </div>
                        <svg width="11" height="8" viewBox="0 0 12 9" fill="black"><path d="M6 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3.54-1.96a5 5 0 0 1 7.08 0l1.06-1.06a6.5 6.5 0 0 0-9.2 0zm-1.42-1.42A7.5 7.5 0 0 1 11.96 3.12l1.04-1.04A9 9 0 0 0 .04 2.08z"/></svg>
                        <div className="flex items-center">
                          <div className="w-[16px] h-[8px] rounded-[2px] border border-black/60 relative flex items-center px-[1.5px]">
                            <div className="w-[80%] h-[5px] bg-black rounded-[1px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 border-b border-gray-100 flex items-center gap-2 bg-white">
                      <div className="w-5 h-5 rounded-full bg-[#E5477D] flex items-center justify-center">
                        <span className="text-[7px] text-white font-bold">LP</span>
                      </div>
                      <span className="text-[9px] font-semibold text-black">LazyPay Assistant</span>
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 bg-gray-50 px-2.5 py-2.5 flex flex-col gap-2 min-h-[240px]">
                      <div className="self-end bg-[#1C1C1E] text-white rounded-xl rounded-tr-sm px-2.5 py-2 max-w-[85%]">
                        <p className="text-[9px] leading-relaxed">Auto-payments</p>
                      </div>
                      <div className="bg-[#E5477D]/15 rounded-xl rounded-tl-sm px-2.5 py-2 self-start max-w-[85%]">
                        <p className="text-[9px] text-gray-800 leading-relaxed">Understood. What would you like to know about auto-payments?</p>
                      </div>
                      <p className="text-[7.5px] uppercase tracking-wider text-gray-400 mt-1">Choose an option</p>
                      <div className="flex flex-col gap-1">
                        {["How to set up auto-pay","Check status of auto-pay","Cancel auto-pay setup"].map((opt) => (
                          <div key={opt} className={`text-[8px] px-2 py-1.5 rounded-lg border leading-snug ${opt === "How to set up auto-pay" ? "bg-[#1C1C1E] text-white border-[#1C1C1E] font-medium" : "border-gray-200 text-gray-600 bg-white"}`}>
                            {opt}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-1 mt-auto pt-2 border-t border-gray-100">
                        <button className="text-[8px] border border-gray-300 rounded-md px-2 py-1 text-gray-500">Go back</button>
                        <button className="text-[8px] border border-gray-300 rounded-md px-2 py-1 text-gray-500">Start over</button>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground">Auto-payments</span>
              </div>

              {/* iPhone 4 — Resolution */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-full bg-[#1C1C1E] rounded-[2.2rem] p-[3px] shadow-2xl ring-1 ring-white/10">
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-10" />
                  <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between px-5 pt-4 pb-1">
                      <span className="text-[9px] font-semibold text-black">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex items-end gap-[1.5px]">
                          {[3,5,7,9].map(h => <div key={h} className="w-[2.5px] bg-black rounded-[1px]" style={{height: h}} />)}
                        </div>
                        <svg width="11" height="8" viewBox="0 0 12 9" fill="black"><path d="M6 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3.54-1.96a5 5 0 0 1 7.08 0l1.06-1.06a6.5 6.5 0 0 0-9.2 0zm-1.42-1.42A7.5 7.5 0 0 1 11.96 3.12l1.04-1.04A9 9 0 0 0 .04 2.08z"/></svg>
                        <div className="flex items-center">
                          <div className="w-[16px] h-[8px] rounded-[2px] border border-black/60 relative flex items-center px-[1.5px]">
                            <div className="w-[80%] h-[5px] bg-black rounded-[1px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 border-b border-gray-100 flex items-center gap-2 bg-white">
                      <div className="w-5 h-5 rounded-full bg-[#E5477D] flex items-center justify-center">
                        <span className="text-[7px] text-white font-bold">LP</span>
                      </div>
                      <span className="text-[9px] font-semibold text-black">LazyPay Assistant</span>
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 bg-gray-50 px-2.5 py-2.5 flex flex-col gap-2 min-h-[240px]">
                      <div className="self-end bg-[#1C1C1E] text-white rounded-xl rounded-tr-sm px-2.5 py-2 max-w-[85%]">
                        <p className="text-[9px] leading-relaxed">How to set up auto-pay</p>
                      </div>
                      <div className="bg-[#E5477D]/15 rounded-xl rounded-tl-sm px-2.5 py-2 self-start max-w-[90%]">
                        <p className="text-[9px] text-gray-800 leading-relaxed">Setting up auto-pay is super easy 🎉 Here's how:</p>
                      </div>
                      <ul className="flex flex-col gap-1.5">
                        {[
                          "Go to Dues → Setup Auto-pay",
                          "Keep net-banking login handy",
                          "Sent to your bank for verification",
                          "We'll notify you once approved",
                        ].map((item) => (
                          <li key={item} className="flex gap-1.5 text-[8px] text-gray-600 leading-snug">
                            <span className="text-[#E5477D] shrink-0">✓</span>{item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-1 mt-auto pt-2 border-t border-gray-100 flex-wrap">
                        <button className="text-[8px] bg-[#E5477D] text-white rounded-md px-2 py-1">Go to Dues</button>
                        <button className="text-[8px] border border-gray-300 rounded-md px-2 py-1 text-gray-500">Done</button>
                        <button className="text-[8px] border border-gray-300 rounded-md px-2 py-1 text-gray-500">Go back</button>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground">Resolution</span>
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
            <div className="w-full overflow-hidden border border-border/10 rounded-sm">
              <img
                src="/chatbot-screens.avif"
                alt="LazyPay chatbot app UI screens — entry point, Help & Support, chat screens"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </motion.section>

    </motion.article>
  );
}
