import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

const sectionAnim = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
} as const;

const V = "rgb(109,40,217)";
const SF = "DM Sans, sans-serif";

function IconUser() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={V} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconBot() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={V} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <path d="M8 15h.01M12 15h.01M16 15h.01" />
    </svg>
  );
}

function IconTag() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={V} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function Plus() {
  return <span style={{ fontFamily: SF, color: "rgba(0,0,0,0.3)", fontSize: 18, lineHeight: 1 }}>+</span>;
}

function AgentScaleVisual() {
  const N = 7;
  return (
    <div className="border border-border/10 p-8 flex flex-col gap-6 h-full">
      <div className="flex items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.18em] font-sans font-semibold text-muted-foreground w-14 shrink-0">Users</span>
        <div className="flex gap-2 flex-wrap items-center">
          {Array.from({ length: N }).map((_, i) => (
            <div key={i} style={{ width: 30, height: 30, borderRadius: "50%", border: "1.5px solid rgba(109,40,217,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(109,40,217,0.35)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          ))}
          <span className="text-xs font-sans text-muted-foreground">× 1M</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-14 shrink-0" />
        <div className="flex gap-[13px]">
          {Array.from({ length: N }).map((_, i) => (
            <svg key={i} width="2" height="20" viewBox="0 0 2 20"><line x1="1" y1="0" x2="1" y2="20" stroke="rgba(109,40,217,0.2)" strokeWidth="1.5" strokeDasharray="3 3" /></svg>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.18em] font-sans font-semibold text-primary/70 w-14 shrink-0">Agents</span>
        <div className="flex gap-2 flex-wrap items-center">
          {Array.from({ length: N }).map((_, i) => (
            <div key={i} style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(109,40,217,0.09)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={V} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><path d="M8 15h.01M12 15h.01M16 15h.01" />
              </svg>
            </div>
          ))}
          <span className="text-xs font-sans text-primary/60">× 1M</span>
        </div>
      </div>

      <p className="text-[11px] font-sans text-muted-foreground leading-relaxed border-t border-border/30 pt-5 mt-1">
        Each user gets a dedicated agent. The agent determines the optimal message, timing, and content - for that individual, at scale.
      </p>
    </div>
  );
}

function MessageAnatomyVisual() {
  return (
    <div className="border border-border/10 overflow-hidden">
      <div className="bg-muted/20 px-5 py-3 border-b border-border/10">
        <span className="text-[9px] uppercase tracking-[0.16em] font-sans font-semibold text-muted-foreground">Message Anatomy</span>
      </div>
      <div className="p-6 flex flex-col gap-6">
        <div>
          <div className="text-[8px] uppercase tracking-[0.15em] font-sans font-semibold text-muted-foreground mb-2">Message Header</div>
          <div className="border border-border/40 rounded-sm px-3 py-2 flex items-center gap-2">
            <span className="text-xs font-sans text-foreground/50 bg-muted/50 px-2 py-0.5 rounded-sm">What's for dinner?</span>
            <div className="ml-auto w-5 h-5 bg-primary/10 rounded-sm flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={V} strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[8px] uppercase tracking-[0.15em] font-sans font-semibold text-muted-foreground mb-2">Message</div>
          <div className="border border-border/40 rounded-sm px-3 py-3 flex items-center flex-wrap gap-x-1 gap-y-2 text-xs font-sans">
            <span className="text-foreground/40">Get</span>
            <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-sm font-medium">15% discount</span>
            <span className="text-foreground/40">on the</span>
            <span className="bg-violet-100 text-violet-700 px-2 py-0.5 rounded-sm font-medium">most asked for</span>
            <span className="text-foreground/40">Tap here</span>
            <span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded-sm font-medium">burgers</span>
            <span className="text-foreground/40">in town</span>
          </div>
        </div>
        <p className="text-[11px] font-sans text-muted-foreground leading-relaxed">
          Each highlighted block is a semantic label - the signal agents use to learn what resonates with each individual user over time.
        </p>
      </div>
    </div>
  );
}

function PushNotifVisual() {
  return (
    <div className="flex items-center justify-center py-16 px-8">
      <div style={{ position: "relative", width: "100%", maxWidth: 300 }}>
        <div style={{ position: "absolute", top: -30, left: "18%", fontSize: 11, color: "#10B981", fontFamily: SF, fontWeight: 700, whiteSpace: "nowrap" }}>Greeting</div>
        <div style={{ position: "absolute", top: -10, right: -10, fontSize: 11, color: "#8B5CF6", fontFamily: SF, fontWeight: 700, whiteSpace: "nowrap" }}>Value Proposition</div>
        <div style={{ position: "absolute", bottom: -30, left: -10, fontSize: 11, color: "#F59E0B", fontFamily: SF, fontWeight: 700, whiteSpace: "nowrap" }}>Incentive</div>
        <div style={{ position: "absolute", bottom: -30, right: -10, fontSize: 11, color: "#3B82F6", fontFamily: SF, fontWeight: 700, whiteSpace: "nowrap" }}>Call to action</div>
        <div style={{ background: "#1C1C1E", borderRadius: 16, padding: "14px 16px", boxShadow: "0 24px 64px rgba(0,0,0,0.28)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: "#2D2D30", flexShrink: 0 }} />
            <span style={{ fontSize: 10, color: "#888", fontFamily: SF }}>Your Travel App</span>
          </div>
          <div style={{ fontSize: 12.5, fontFamily: SF, lineHeight: 1.75, color: "white", display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ background: "rgba(16,185,129,0.22)", borderRadius: 4, padding: "1px 6px" }}>Planning to go to Tokyo? 🗺️</span>
            <span style={{ background: "rgba(139,92,246,0.22)", borderRadius: 4, padding: "1px 6px" }}>Explore top-rated hotels in Shibuya.</span>
            <span>
              <span style={{ background: "rgba(245,158,11,0.28)", borderRadius: 4, padding: "1px 6px" }}>Enjoy 20% on select hotels.</span>{" "}
              <span style={{ background: "rgba(59,130,246,0.28)", borderRadius: 4, padding: "1px 6px" }}>Book now!</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LabelChain({ items, variant }: { items: string[]; variant: "good" | "bad" }) {
  const good = variant === "good";
  const color = good ? "#166534" : "#991B1B";
  const bg = good ? "#F0FDF4" : "#FEF2F2";
  const border = good ? "#BBF7D0" : "#FECACA";
  const arrowColor = good ? "#4ADE80" : "#F87171";
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {items.map((label, i) => (
        <div key={i} className="flex items-center gap-2">
          <span style={{ background: bg, border: `1px solid ${border}`, color, fontFamily: SF, fontSize: 13, fontWeight: 500, padding: "6px 14px", borderRadius: 4, whiteSpace: "nowrap" as const }}>
            {label}
          </span>
          {i < items.length - 1 && (
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M0 6h14M10 1l6 5-6 5" stroke={arrowColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div
      className="w-full border border-dashed border-border/40 bg-muted/10 flex items-center justify-center"
      style={{ height: 280 }}
    >
      <span className="text-xs font-sans text-muted-foreground/40 uppercase tracking-widest">{label}</span>
    </div>
  );
}

const AREA_ICONS = [
  <svg key="a" width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 5c4 6 4 12 0 19-4-7-4-13 0-19Z" />
    <path d="M43 24c-6 4-12 4-19 0 7-4 13-4 19 0Z" />
    <path d="M24 43c-4-6-4-12 0-19 4 7 4 13 0 19Z" />
    <path d="M5 24c6-4 12-4 19 0-7 4-13 4-19 0Z" />
    <path d="M37.5 10.5c-1 7-5 11.5-13.5 13.5 2-8.5 6.5-12.5 13.5-13.5Z" />
    <path d="M10.5 37.5c1-7 5-11.5 13.5-13.5-2 8.5-6.5 12.5-13.5 13.5Z" />
  </svg>,
  <svg key="b" width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 6 41 16v16L24 42 7 32V16L24 6Z" />
    <path d="M24 6v13" /><path d="M41 16 24 26 7 16" /><path d="M24 26v16" />
    <circle cx="24" cy="6" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="41" cy="16" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="7" cy="16" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="24" cy="42" r="2.5" fill="currentColor" stroke="none" />
  </svg>,
  <svg key="c" width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 17h20a8 8 0 0 1 8 8v0a8 8 0 0 1-8 8H9z" />
    <path d="M9 17V9h19a11 11 0 0 1 11 11" />
    <path d="M9 33v6h20a14 14 0 0 0 14-14" />
    <path d="M16 24h16" /><path d="M24 16v16" />
  </svg>,
];

const AREA_TITLES = [
  "Content Strategy for Agentic Systems",
  "Label Frameworks for Semantic Strategy",
  "Content Generation at Scale",
];

type Impact = "High" | "Med" | "Low";
type Status = "In Progress" | "Not Started" | "Done" | "Blocked";
type CMRow = { ct: string; topic: string; example: string; impact: Impact; status: Status };
type CMGroup = { subfeature: string; rows: CMRow[] };

const CM_DATA: CMGroup[] = [
  {
    subfeature: "Onboarding",
    rows: [
      { ct: "contextual-behavioural", topic: "Enable location sharing", example: "See what's hot near your location", impact: "Med", status: "In Progress" },
      { ct: "contextual-attribute", topic: "Select your country", example: "Where are we delivering to?", impact: "Med", status: "In Progress" },
      { ct: "contextual-attribute", topic: "Registration", example: "Why sign up", impact: "Med", status: "In Progress" },
      { ct: "contextual-behavioural", topic: "Notifications opt-in", example: "Turn on notifications for real time updates", impact: "Med", status: "In Progress" },
    ],
  },
  {
    subfeature: "Account",
    rows: [
      { ct: "foundational-general", topic: "Take Control of Your Experience", example: "Update your addresses, preferences, and notifications anytime - you're in control.", impact: "High", status: "Not Started" },
      { ct: "contextual-attribute", topic: "Subscribe to newsletter", example: "Never miss a deal - subscribe to our newsletter for offers, updates, and more.", impact: "Low", status: "Done" },
      { ct: "contextual-lifecycle", topic: "Change country", example: "Moving or traveling? Here's how to switch your country and explore local offers.", impact: "Low", status: "Done" },
    ],
  },
  {
    subfeature: "Rewards",
    rows: [
      { ct: "foundational-general", topic: "Rewards explained", example: "The more you order, the more points you earn.", impact: "High", status: "Done" },
      { ct: "foundational-feature-education", topic: "Rewards", example: "It awards points for every transaction on the platform, redeemable for discounts across various categories including restaurants, grocery stores, fashion, beauty, and travel.", impact: "High", status: "Done" },
      { ct: "foundational-feature-education", topic: "Rewards", example: "You can participate in raffles to win prizes such as credits and all-expense-paid trips.", impact: "High", status: "Done" },
      { ct: "contextual-attribute", topic: "Earned points", example: "See how many points you've earned so far.", impact: "High", status: "Done" },
      { ct: "contextual-attribute", topic: "Spent points", example: "You got x order for free by spending your reward points.", impact: "High", status: "Done" },
      { ct: "contextual-datafeed", topic: "Rewards - Earn Points as You Order", example: "Earn 100 points toward Silver with your next Order - every bite counts.", impact: "High", status: "In Progress" },
    ],
  },
  {
    subfeature: "Vouchers",
    rows: [
      { ct: "foundational-thematic", topic: "Your Vouchers, Ready to Use", example: "You've saved them - now's the time to use them. Tap to apply your voucher at checkout.", impact: "High", status: "Not Started" },
      { ct: "foundational-feature-education", topic: "Get vouchers by redeeming points", example: "You can get vouchers by redeeming your rewards points.", impact: "Low", status: "Blocked" },
    ],
  },
];

const CT_COLORS: Record<string, string> = {
  "contextual-behavioural": "bg-violet-100 text-violet-700",
  "contextual-attribute": "bg-blue-100 text-blue-700",
  "contextual-lifecycle": "bg-indigo-100 text-indigo-700",
  "contextual-datafeed": "bg-sky-100 text-sky-800",
  "foundational-general": "bg-emerald-100 text-emerald-700",
  "foundational-feature-education": "bg-green-100 text-green-700",
  "foundational-thematic": "bg-teal-100 text-teal-700",
};

const IMPACT_COLORS: Record<Impact, string> = {
  High: "bg-orange-100 text-orange-700",
  Med: "bg-amber-100 text-amber-700",
  Low: "bg-green-100 text-green-700",
};

const STATUS_COLORS: Record<Status, string> = {
  "In Progress": "bg-violet-100 text-violet-700",
  "Not Started": "bg-orange-50 text-orange-600",
  Done: "bg-emerald-100 text-emerald-700",
  Blocked: "bg-red-100 text-red-700",
};

function Pill({ label, cls }: { label: string; cls: string }) {
  return (
    <span className={`text-[10px] font-sans font-medium px-2 py-0.5 rounded-sm whitespace-nowrap ${cls}`}>
      {label}
    </span>
  );
}

function ContentMapFlowchart() {
  const STEPS = [
    {
      kind: "start" as const,
      label: "Build a Content Map for Brand XYZ",
    },
    {
      kind: "step" as const,
      step: "Step 1",
      label: "Map out all Features & Sub-features",
      desc: "Go through the product or app exhaustively. List every feature, sub-feature, and optional touchpoint you encounter.",
      tags: [
        { label: "Feature", cls: "bg-muted/40 text-foreground/60 border-border/30" },
        { label: "Sub-feature", cls: "bg-muted/40 text-foreground/60 border-border/30" },
        { label: "Touchpoint (optional)", cls: "bg-muted/40 text-foreground/60 border-border/30" },
      ],
    },
    {
      kind: "step" as const,
      step: "Step 2",
      label: "Add Global Touchpoints",
      desc: "Zoom out and capture platform-wide flows that sit across all features - subscriptions, onboarding, navigation, support.",
      tags: [
        { label: "Onboarding", cls: "bg-muted/40 text-foreground/60 border-border/30" },
        { label: "Account", cls: "bg-muted/40 text-foreground/60 border-border/30" },
        { label: "Activity", cls: "bg-muted/40 text-foreground/60 border-border/30" },
        { label: "Blogs", cls: "bg-muted/40 text-foreground/60 border-border/30" },
        { label: "Help Center", cls: "bg-muted/40 text-foreground/60 border-border/30" },
        { label: "FAQs", cls: "bg-muted/40 text-foreground/60 border-border/30" },
      ],
    },
    {
      kind: "step" as const,
      step: "Step 3",
      label: "Define Topics using Content Types",
      desc: "Translate product architecture into content opportunities. Use content types as creative lenses - one feature can generate many topics.",
      tags: [
        { label: "Foundational", cls: "bg-blue-50 text-blue-700 border-blue-200" },
        { label: "Contextual", cls: "bg-violet-50 text-violet-700 border-violet-200" },
        { label: "Seasonal", cls: "bg-orange-50 text-orange-700 border-orange-200" },
        { label: "Recommender", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
        { label: "Transactional", cls: "bg-slate-100 text-slate-600 border-slate-200" },
      ],
    },
    {
      kind: "step" as const,
      step: "Step 4",
      label: "Add Channels, Events & Audience",
      desc: "Map each topic to its delivery channel, entry/exit events that trigger it, and a rough audience type.",
      tags: [
        { label: "Push", cls: "bg-muted/40 text-foreground/60 border-border/30" },
        { label: "Email", cls: "bg-muted/40 text-foreground/60 border-border/30" },
        { label: "SMS", cls: "bg-muted/40 text-foreground/60 border-border/30" },
        { label: "In-App", cls: "bg-muted/40 text-foreground/60 border-border/30" },
        { label: "WhatsApp", cls: "bg-muted/40 text-foreground/60 border-border/30" },
      ],
    },
    {
      kind: "step" as const,
      step: "Step 5",
      label: "Assign Impact & Prioritize",
      desc: "Decide which topics should go first to accelerate agent learning in the first 3 months.",
      tags: [
        { label: "High - wide reach, fast to implement", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
        { label: "Med - narrower but valuable", cls: "bg-amber-50 text-amber-700 border-amber-200" },
        { label: "Low - technical lift or tiny audience", cls: "bg-muted/30 text-foreground/50 border-border/20" },
      ],
    },
    {
      kind: "end" as const,
      label: "Content Map ready - agents can learn",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
      {STEPS.map((s, i) => (
        <div key={i} className="flex flex-col items-center w-full">
          {/* Node */}
          {s.kind === "start" && (
            <div className="w-full bg-primary px-8 py-5 text-center">
              <span className="font-serif text-xl text-white">{s.label}</span>
            </div>
          )}
          {s.kind === "end" && (
            <div className="w-full bg-foreground px-8 py-5 text-center">
              <span className="font-serif text-xl text-background">{s.label}</span>
            </div>
          )}
          {s.kind === "step" && (
            <div className="w-full border border-border/40 bg-background px-7 py-6">
              <div className="flex items-start gap-6">
                <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-bold text-primary/50 whitespace-nowrap mt-0.5 min-w-[44px]">{s.step}</span>
                <div className="flex-1">
                  <p className="font-serif text-lg leading-snug mb-2 text-foreground">{s.label}</p>
                  <p className="text-xs font-sans text-foreground/55 leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t.label} className={`text-[10px] font-sans px-2.5 py-1 border leading-none ${t.cls}`}>{t.label}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Connector */}
          {i < STEPS.length - 1 && (
            <div className="flex flex-col items-center">
              <div className="w-px h-5 bg-border/60" />
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-40">
                <path d="M5 6L0 0h10L5 6z" fill="currentColor" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ContentMapVisual() {
  return (
    <div className="border border-border/10 overflow-hidden">
      <img
        src="/content-map.png"
        alt="Content map sample - feature, content type, topic, example, impact, and status columns"
        className="w-full h-auto"
      />
    </div>
  );
}

function PanelContentMap() {
  return (
    <div className="flex flex-col gap-14">
      {/* What is it / What was done - summary */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-[9px] uppercase tracking-[0.18em] font-sans font-bold text-foreground/50 mb-3">What is it?</p>
          <p className="text-foreground/70 font-sans leading-relaxed">
            Marketers were stuck in a one-campaign-one-topic mindset, while products had far richer stories to tell. I created the Content Map to help teams see the full product and journey landscape, then turn it into content opportunities agents could learn from.
          </p>
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-[0.18em] font-sans font-bold text-foreground/50 mb-3">What was done?</p>
          <ul className="text-foreground/70 font-sans leading-relaxed flex flex-col gap-2 list-disc list-outside pl-4">
            <li>Mapped product features, flows, lifecycle moments, channels, triggers, audiences, and priorities into one strategic artifact.</li>
            <li>Helped teams move from campaign planning to journey planning: what users can do, where they are, and how the brand can meet them there.</li>
            <li>Turned the map into an evolving roadmap, coverage report, and input system for agentic content generation.</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/30" />

      {/* Slides 1 + 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h4 className="font-serif text-2xl mb-4 leading-snug">Marketers were stuck in campaign thinking</h4>
          <p className="text-foreground/70 font-sans leading-relaxed">
            Most CRM teams were used to starting with one campaign, one topic, one audience, and one intended path. But products are much richer than that. Every app has features, flows, user states, behaviors, moments, benefits, and contexts that could become meaningful communication. The problem was that marketing often sat disconnected from that full product inventory.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-2xl mb-4 leading-snug">The content map made the product speakable</h4>
          <p className="text-foreground/70 font-sans leading-relaxed">
            I created the Content Map to help teams ask two simple but powerful questions: what are all the things a user can do in this product, and what are all the ways we could talk to them about it? The map translated product architecture into content opportunities: features, sub-features, journeys, topics, channels, triggers, audiences, and priorities.
          </p>
        </div>
      </div>

      <ContentMapVisual />

      {/* Slides 3 + 4 */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h4 className="font-serif text-2xl mb-4 leading-snug">It helped teams design for individual journeys</h4>
          <p className="text-foreground/70 font-sans leading-relaxed">
            The goal was not to make a sheet of campaign ideas. The goal was to help teams imagine many possible user journeys at once: new users, active users, stuck users, curious users, price-sensitive users, power users, returning users. Instead of forcing everyone through the same message path, the map helped teams plan content that could meet people where they were.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-2xl mb-4 leading-snug">It became a roadmap and coverage system</h4>
          <p className="text-foreground/70 font-sans leading-relaxed">
            Teams could use it to see what had been covered, what was missing, what could be repurposed, what needed new content, and what should be prioritized first. It turned content strategy into an evolving roadmap: part planning tool, part production tracker, part coverage report.
          </p>
        </div>
      </div>

      {/* Slide 5 - full width */}
      <div className="border-l-2 border-primary/30 pl-6">
        <h4 className="font-serif text-2xl mb-4 leading-snug">It gave agents better material to learn from</h4>
        <p className="text-foreground/70 font-sans leading-relaxed max-w-2xl">
          For Aampe, this mattered because agents can only explore from the content they are given. A richer map meant a richer content portfolio: more topics, more contexts, more value propositions, and more ways to test what resonates. The bigger achievement was creating a repeatable strategy system that helped humans plan more holistically and helped agents learn from better inputs.
        </p>
      </div>

      <ContentMapFlowchart />
      {/* Impact */}
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-bold text-primary/70 block mb-6">Impact</span>
          {/* Stat highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { stat: "$90K", label: "Credited in a closed-won deal" },
              { stat: "~15", label: "People trained company-wide" },
              { stat: "15+", label: "Accounts with deployed maps" },
              { stat: "60-day", label: "Proposed certification for new hires" },
            ].map(({ stat, label }) => (
              <div key={stat} className="border border-border/30 p-5">
                <div className="font-serif text-3xl text-foreground mb-2">{stat}</div>
                <div className="text-xs font-sans text-foreground/55 leading-snug">{label}</div>
              </div>
            ))}
          </div>
          {/* Outcome cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                type: "Commercial",
                body: "Credited as a key session in the $90K Mintos closed-won deal. A prospect called the map-led deck 'the selling point of the session.'",
              },
              {
                type: "Operational",
                body: "Went from 'doesn't exist on accounts a year in' to a standard expected at onboarding and QBRs, embedded in the 4-session onboarding methodology.",
              },
              {
                type: "Organizational",
                body: "~15 people across every function built full end-to-end maps; proposed as a 60-day certification for all new hires.",
              },
              {
                type: "Technical",
                body: "Designed a repeatable Content Map creation workflow, with LLMs used to automate the process.",
              },
            ].map(({ type, body }) => (
              <div key={type} className="border border-border/30 p-5 flex flex-col gap-2">
                <span className="text-[9px] uppercase tracking-[0.18em] font-sans font-bold text-foreground/40">{type}</span>
                <p className="text-sm font-sans text-foreground/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Blog link */}
      <div className="border-t border-border/30 pt-8">
        <p className="text-sm font-sans text-foreground/60">
          To know more about content maps, check out{" "}
          <a
            href="https://aampe.com/blog/the-bigger-picture-how-aampe-s-content-maps-redefine-content-strategy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium underline underline-offset-4 hover:text-primary/70 transition-colors"
          >
            The Bigger Picture: How Aampe's Content Maps Redefine Content Strategy
          </a>
        </p>
      </div>
    </div>
  );
}

function PanelLabelFramework() {
  return (
    <div className="flex flex-col gap-14">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h4 className="font-serif text-2xl mb-4 leading-snug">Labels were not just tags</h4>
          <p className="text-foreground/70 font-sans leading-relaxed">
            They were the meaning layer that helped brands define what to say, how it should vary, and how AI should judge relevance. Every message in the system carried labels that agents could learn from - and bad labels compounded into bad learning at scale.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-2xl mb-4 leading-snug">What was done</h4>
          <ul className="text-foreground/70 font-sans leading-relaxed flex flex-col gap-2 list-disc list-outside pl-4">
            <li>Built a framework for labels around intent, value propositions, tone, context, and decision moments.</li>
            <li>Moved teams from ad hoc taxonomy work to a semantic strategy brands could understand and extend.</li>
            <li>Made labels usable across generation, validation, analysis, and agent learning loops.</li>
          </ul>
        </div>
      </div>
      <Placeholder label="Label framework diagram - coming soon" />
    </div>
  );
}

function PanelGenerationScale() {
  return (
    <div className="flex flex-col gap-14">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h4 className="font-serif text-2xl mb-4 leading-snug">The bottleneck shifted from writing to orchestration</h4>
          <p className="text-foreground/70 font-sans leading-relaxed">
            As generation expanded to thousands of copy lines, teams needed fast tools to generate, modify, review, and validate content safely. Manual strategy work couldn't keep up with the pace agents required.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-2xl mb-4 leading-snug">What was done</h4>
          <ul className="text-foreground/70 font-sans leading-relaxed flex flex-col gap-2 list-disc list-outside pl-4">
            <li>Shaped and vibe-coded AI tools like Relay and Label Buddy to accelerate production.</li>
            <li>Designed flows for components, context profiles, modifiers, semantic checks, and review queues.</li>
            <li>Turned manual strategy work into repeatable systems teams could test with customers live.</li>
          </ul>
        </div>
      </div>
      <Placeholder label="Tool walkthrough - coming soon" />
    </div>
  );
}

const PANELS = [<PanelContentMap key={0} />, <PanelLabelFramework key={1} />, <PanelGenerationScale key={2} />];

export default function AampeStrategy() {
  const [activeArea, setActiveArea] = useState(0);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex flex-col pb-24 w-full"
    >
      {/* ── Header ── */}
      <div className="px-6 md:px-16 lg:px-24 py-8 md:py-16 max-w-5xl mx-auto w-full">
        <Link
          href="/work"
          className="inline-flex items-center text-sm font-sans font-semibold uppercase tracking-wider px-4 py-2 border-2 border-foreground bg-background transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] mb-12"
        >
          ← Back to Work
        </Link>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-tight leading-tight">
          Content Strategy for a Million Agents
        </h1>

        <p className="text-lg md:text-xl font-sans text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          How I Turned Content Strategy into Infrastructure and built the Strategic Semantic Layer for an Agentic World
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-border/50 text-sm">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Role</div>
            <div className="font-medium text-foreground">Content Strategist &amp; Methodology Owner</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Context</div>
            <div className="font-medium text-foreground">Aampe - AI-powered lifecycle marketing platform</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Year</div>
            <div className="font-medium text-foreground">2025</div>
          </div>
        </div>
      </div>

      {/* ── Hero placeholder ── */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-16 md:mb-24">
        <div
          className="w-full border border-dashed border-border/40 bg-muted/10 flex items-center justify-center"
          style={{ height: 320 }}
        >
          <span className="text-xs font-sans text-muted-foreground/40 uppercase tracking-widest">
            Hero visual - coming soon
          </span>
        </div>
      </div>

      {/* ──────────────────────────────────────────
          Section 1 - About Aampe
      ────────────────────────────────────────── */}
      <motion.section {...sectionAnim} className="border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-muted-foreground block mb-8">
                Context
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-snug">About Aampe</h2>
              <div className="flex items-center gap-3 mb-6">
                <IconUser />
                <Plus />
                <IconBot />
              </div>
              <p className="text-xs font-sans font-bold uppercase tracking-widest text-foreground mb-4">
                One agent for every user, scaling to millions.
              </p>
              <p className="text-foreground/70 font-sans leading-relaxed">
                When a customer brings on 1 million users, Aampe assigns a dedicated agent for each end user. This agent determines the optimal message to send, the timing, and the content that best suits each individual.
              </p>
            </div>
            <AgentScaleVisual />
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────
          Section 2 - How agents learn at scale
      ────────────────────────────────────────── */}
      <motion.section {...sectionAnim} className="border-t border-border/50 bg-foreground/[0.02]">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-snug">
                How can a million agents learn effectively at scale?
              </h2>
              <p className="text-foreground/70 font-sans leading-relaxed mb-5">
                Agents don't learn directly from users; instead, they learn from labels - the taxonomy linked to each message variant in the system.
              </p>
              <p className="text-foreground/70 font-sans leading-relaxed mb-10">
                To create and deliver content at scale, a machine learning product requires these labels.
              </p>
              <div className="flex items-center gap-3">
                <IconUser />
                <Plus />
                <IconBot />
                <Plus />
                <IconTag />
              </div>
            </div>
            <MessageAnatomyVisual />
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────
          Section 3 - Push notification labeling
      ────────────────────────────────────────── */}
      <motion.section {...sectionAnim} className="border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-snug">
                In a push notification, content would be labeled this way
              </h2>
              <p className="text-foreground/70 font-sans leading-relaxed mb-10">
                Labels serve as the framework for every message - Greeting, Value Proposition, Call to Action, and Tone. Agents utilise these labels to understand what resonates with each user over time. The label acts as a crucial signal; if it's inaccurate, the learning process is flawed.
              </p>
              <div className="flex items-center gap-3">
                <IconUser />
                <Plus />
                <IconBot />
                <Plus />
                <IconTag />
              </div>
            </div>
            <PushNotifVisual />
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────
          Section 4 - Effective labels
      ────────────────────────────────────────── */}
      <motion.section {...sectionAnim} className="border-t border-border/50 bg-foreground/[0.02]">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-14 leading-snug max-w-3xl">
            Effective labels lead to improved agent performance and allows for better learning across surfaces.
          </h2>
          <div className="flex flex-col gap-5">
            <LabelChain
              variant="good"
              items={["Greeting / Friendly", "Value Prop / Discovery", "CTA / Direct", "Agent learns correctly ✓"]}
            />
            <LabelChain
              variant="bad"
              items={["Greeting / Urgency ✗", "Wrong signal", "Agent learns wrong", "Compounds at 100k/day"]}
            />
          </div>
        </div>
      </motion.section>

      {/* ──────────────────────────────────────────
          Section 5 - 3 ways I shaped AI content strategy
      ────────────────────────────────────────── */}
      <motion.section {...sectionAnim} className="border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-20">
          <h2 className="text-3xl md:text-4xl font-serif mb-2 leading-snug">
            3 ways I shaped AI content strategy for Aampe
          </h2>
          <p className="text-sm font-sans text-muted-foreground mb-10">Click each card for details</p>

          {/* Tab triggers - 3-col card row */}
          <div className="grid md:grid-cols-3 gap-4 mb-0">
            {AREA_TITLES.map((title, i) => {
              const active = activeArea === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveArea(i)}
                  className={[
                    "text-left border flex flex-col gap-4 p-5 transition-all duration-200 cursor-pointer",
                    active
                      ? "border-primary bg-primary/5 shadow-[0_2px_0_0_rgb(109,40,217)]"
                      : "border-border/40 hover:border-border/70 bg-transparent",
                  ].join(" ")}
                >
                  <span style={{ color: active ? V : "rgba(0,0,0,0.3)" }} className="transition-colors duration-200">
                    {AREA_ICONS[i]}
                  </span>
                  <span
                    className={[
                      "font-serif text-lg leading-snug",
                      active ? "text-foreground" : "text-foreground/50",
                    ].join(" ")}
                  >
                    {title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content panel - fades on tab change */}
          <div className="border border-t-0 border-border/30 p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22 }}
              >
                {PANELS[activeArea]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </motion.article>
  );
}
