import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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

const LP_PINK = "#E5477D";
const SF = "system-ui, -apple-system, sans-serif";

function HeroVisual() {
  const H = 480;
  const W = 1400;
  const V = "#6D28D9";

  const levels = [
    { x: 40,   count: 1,  nodeH: 20,  nodeW: 72  },
    { x: 192,  count: 5,  nodeH: 16,  nodeW: 90  },
    { x: 360,  count: 13, nodeH: 13,  nodeW: 78  },
    { x: 510,  count: 28, nodeH: 10,  nodeW: 68  },
    { x: 648,  count: 50, nodeH: 7,   nodeW: 58  },
    { x: 776,  count: 75, nodeH: 5,   nodeW: 50  },
    { x: 895,  count: 90, nodeH: 4,   nodeW: 44  },
    { x: 1008, count: 95, nodeH: 4,   nodeW: 38  },
    { x: 1116, count: 90, nodeH: 3.5, nodeW: 32  },
    { x: 1220, count: 80, nodeH: 3,   nodeW: 26  },
    { x: 1316, count: 68, nodeH: 3,   nodeW: 22  },
  ];

  const getYs = (count: number, nodeH: number): number[] => {
    if (count === 1) return [H / 2 - nodeH / 2];
    const gap = (H - count * nodeH) / (count - 1);
    return Array.from({ length: count }, (_, i) => i * (nodeH + gap));
  };

  const opacities = [0.14, 0.12, 0.10, 0.085, 0.072, 0.058, 0.046, 0.036, 0.028, 0.022, 0.016];

  const computed = levels.map((lvl, li) => ({
    ...lvl,
    ys: getYs(lvl.count, lvl.nodeH),
    op: opacities[li] ?? 0.015,
  }));

  return (
    <div style={{ position: "relative", width: "100%", height: H, background: "#ffffff", overflow: "hidden" }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="hv-fl" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="12%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hv-fr" x1="0" y1="0" x2="1" y2="0">
            <stop offset="88%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="hv-ft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="10%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hv-fb" x1="0" y1="0" x2="0" y2="1">
            <stop offset="90%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Lines: iterate children, draw back to proportional parent */}
        {computed.slice(0, -1).map((lvl, li) => {
          const next = computed[li + 1];
          return next.ys.map((cy, ci) => {
            const prop = next.count > 1 ? ci / (next.count - 1) : 0.5;
            const pi = Math.round(prop * (lvl.count - 1));
            const py = lvl.ys[pi];
            return (
              <line
                key={`l${li}-${ci}`}
                x1={lvl.x + lvl.nodeW}
                y1={py + lvl.nodeH / 2}
                x2={next.x}
                y2={cy + next.nodeH / 2}
                stroke={V}
                strokeWidth={0.4}
                opacity={lvl.op * 0.55}
              />
            );
          });
        })}

        {/* Nodes */}
        {computed.map((lvl, li) =>
          lvl.ys.map((y, ni) => (
            <rect
              key={`n${li}-${ni}`}
              x={lvl.x}
              y={y}
              width={lvl.nodeW}
              height={lvl.nodeH}
              rx={Math.max(1.5, lvl.nodeH * 0.35)}
              fill={V}
              opacity={lvl.op}
            />
          ))
        )}

        {/* Edge fades */}
        <rect x="0" y="0" width={W} height={H} fill="url(#hv-fl)" />
        <rect x="0" y="0" width={W} height={H} fill="url(#hv-fr)" />
        <rect x="0" y="0" width={W} height={H} fill="url(#hv-ft)" />
        <rect x="0" y="0" width={W} height={H} fill="url(#hv-fb)" />
      </svg>

      {/* Conversation card */}
      <div style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 288,
        background: "white",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 14,
        boxShadow: "0 4px 32px rgba(0,0,0,0.11), 0 1px 4px rgba(0,0,0,0.05)",
        overflow: "hidden",
        fontFamily: SF,
      }}>
        {/* Header */}
        <div style={{ padding: "10px 14px", borderBottom: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: LP_PINK, flexShrink: 0 }} />
          <span style={{ fontSize: 10, fontWeight: 700, color: "#111", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>LazyPay Assistant</span>
        </div>

        {/* Messages */}
        <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: 8, background: "#FAFAFA" }}>
          <div style={{ maxWidth: "84%", alignSelf: "flex-start" }}>
            <div style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", padding: "8px 11px", borderRadius: "3px 10px 10px 10px", fontSize: 11.5, lineHeight: 1.5, color: "#222" }}>
              Hey there! I'm your LazyPay Assistant, always ready to help.
            </div>
          </div>
          <div style={{ maxWidth: "84%", alignSelf: "flex-start" }}>
            <div style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", padding: "8px 11px", borderRadius: 10, fontSize: 11.5, lineHeight: 1.5, color: "#222" }}>
              What can I help you with?
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 5, paddingLeft: 1 }}>
            {["Account", "Repayments", "Loans & EMIs", "Charges"].map(o => (
              <span key={o} style={{ border: `1px solid ${LP_PINK}`, color: LP_PINK, padding: "3px 9px", borderRadius: 99, fontSize: 10, whiteSpace: "nowrap" as const }}>{o}</span>
            ))}
          </div>
          <div style={{ maxWidth: "78%", alignSelf: "flex-end" }}>
            <div style={{ background: LP_PINK, color: "white", padding: "8px 11px", borderRadius: "10px 3px 10px 10px", fontSize: 11.5, lineHeight: 1.5 }}>
              I need help with repayments
            </div>
          </div>
          <div style={{ maxWidth: "84%", alignSelf: "flex-start" }}>
            <div style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", padding: "8px 11px", borderRadius: 10, fontSize: 11.5, lineHeight: 1.5, color: "#222" }}>
              Of course! What do you need help with?
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 4, paddingLeft: 1 }}>
            {["Auto-payments", "Repayment history", "Failed repayment"].map(o => (
              <span key={o} style={{ border: "1px solid rgba(0,0,0,0.10)", color: "#444", padding: "4px 10px", borderRadius: 6, fontSize: 10.5, display: "inline-block", width: "fit-content" }}>{o}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px 0", height: 50, flexShrink: 0 }}>
      <span style={{ fontSize: 11, fontWeight: 600, color: "black", fontFamily: SF }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 1.5 }}>
          {[3,5,7,9].map(h => <div key={h} style={{ width: 2.5, height: h, background: "black", borderRadius: 1 }} />)}
        </div>
        <svg width="13" height="10" viewBox="0 0 14 11" fill="black">
          <path d="M7 9a1.3 1.3 0 1 1 0 2.6A1.3 1.3 0 0 1 7 9zm-3-3.1a4.2 4.2 0 0 1 6 0l1.1-1.1a5.8 5.8 0 0 0-8.2 0zm-2.7-2.7A8 8 0 0 1 7 1.1a8 8 0 0 1 5.7 2.1L14 2A9.7 9.7 0 0 0 7-.1 9.7 9.7 0 0 0 0 2z" />
        </svg>
        <div style={{ width: 20, height: 10, borderRadius: 2.5, border: "1px solid rgba(0,0,0,0.45)", position: "relative", display: "flex", alignItems: "center", padding: 1.5 }}>
          <div style={{ width: "80%", height: "100%", background: "black", borderRadius: 1.5 }} />
        </div>
      </div>
    </div>
  );
}

function AnimatedChatPrototype() {
  const [loopKey, setLoopKey] = useState(0);
  const [step, setStep] = useState(0);
  const [tapping, setTapping] = useState<string | null>(null);
  const [fading, setFading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const T: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => { T.push(setTimeout(fn, ms)); };
    setStep(0); setTapping(null); setFading(false);
    at(600,   () => setStep(1));
    at(1600,  () => setStep(2));
    at(3000,  () => setTapping("I need help with repayments"));
    at(3600,  () => { setTapping(null); setStep(3); });
    at(4200,  () => setStep(4));
    at(5000,  () => setStep(5));
    at(6300,  () => setTapping("Auto-payments"));
    at(6900,  () => { setTapping(null); setStep(6); });
    at(7500,  () => setStep(7));
    at(8300,  () => setStep(8));
    at(9600,  () => setTapping("How to set up auto-pay"));
    at(10200, () => { setTapping(null); setStep(9); });
    at(10800, () => setStep(10));
    at(11800, () => setStep(11));
    at(12100, () => setStep(12));
    at(12400, () => setStep(13));
    at(12700, () => setStep(14));
    at(14500, () => setFading(true));
    at(15500, () => setLoopKey(k => k + 1));
    return () => T.forEach(clearTimeout);
  }, [loopKey]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [step]);

  const bub = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35 } } as const;
  const PW = 300;
  const PH = Math.round(PW * 852 / 393);

  const renderOptions = (label: string, items: string[], visible: boolean) =>
    visible ? (
      <motion.div {...bub} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <p style={{ fontSize: 8, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: "#bbb", margin: 0, fontFamily: SF }}>{label}</p>
        {items.map(opt => (
          <div key={opt} style={{
            fontSize: 10, padding: "7px 10px", borderRadius: 10, fontFamily: SF,
            border: tapping === opt ? "none" : "1px solid #e8e8e8",
            background: tapping === opt ? "#1C1C1E" : "white",
            color: tapping === opt ? "white" : "#555",
            position: "relative" as const,
            transition: "background 0.25s, color 0.25s, border 0.25s",
          }}>
            {opt}
            {tapping === opt && (
              <motion.div
                initial={{ opacity: 0.5 }} animate={{ opacity: 0 }} transition={{ duration: 0.5 }}
                style={{ position: "absolute", inset: 0, borderRadius: 10, background: "rgba(255,255,255,0.25)" }}
              />
            )}
          </div>
        ))}
      </motion.div>
    ) : null;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <p style={{ fontSize: 10, textTransform: "uppercase" as const, letterSpacing: "0.2em", color: "var(--muted-foreground)", fontFamily: SF, margin: 0 }}>
        Sample Conversation
      </p>

      {/* iPhone 17 frame */}
      <div style={{
        width: PW, height: PH, flexShrink: 0,
        background: "linear-gradient(145deg, #3A3A3C, #2A2A2C)",
        borderRadius: 52, padding: 3,
        boxShadow: "0 30px 70px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 0 0.5px rgba(255,255,255,0.1)",
        position: "relative" as const,
      }}>
        {/* Buttons */}
        <div style={{ position: "absolute", left: -3, top: 98,  width: 3, height: 26, background: "#48484A", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -3, top: 134, width: 3, height: 44, background: "#48484A", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -3, top: 188, width: 3, height: 44, background: "#48484A", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", right: -3, top: 140, width: 3, height: 66, background: "#48484A", borderRadius: "0 2px 2px 0" }} />

        {/* Screen */}
        <div style={{ width: "100%", height: "100%", background: "white", borderRadius: 49, overflow: "hidden", display: "flex", flexDirection: "column", position: "relative" as const }}>
          {/* Dynamic Island */}
          <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 98, height: 30, background: "black", borderRadius: 15, zIndex: 10 }} />

          <StatusBar />

          {/* Chat header */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 14px 8px", borderBottom: "1px solid #f0f0f0", flexShrink: 0 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: LP_PINK, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 9, color: "white", fontWeight: 700, fontFamily: SF }}>LP</span>
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: "black", fontFamily: SF }}>LazyPay Assistant</span>
            <div style={{ marginLeft: "auto", width: 7, height: 7, borderRadius: "50%", background: "#22c55e" }} />
          </div>

          {/* Chat scroll area */}
          <div ref={chatRef} style={{
            flex: 1, overflowY: "hidden" as const, background: "#F7F7F7",
            padding: "10px 10px 8px", display: "flex", flexDirection: "column", gap: 8,
            opacity: fading ? 0 : 1, transition: fading ? "opacity 0.8s ease" : "opacity 0.3s ease",
          }}>
            {/* Bot 1 */}
            {step >= 1 && (
              <motion.div {...bub} style={{ alignSelf: "flex-start", maxWidth: "86%", background: `${LP_PINK}22`, borderRadius: "12px 12px 12px 3px", padding: "8px 10px" }}>
                <p style={{ fontSize: 10, color: "#1a1a1a", lineHeight: 1.55, margin: 0, fontFamily: SF }}>
                  Hey there! I'm your LazyPay Assistant, always ready to help.<br /><br />What can I help you with?
                </p>
              </motion.div>
            )}
            {renderOptions("Top Questions", ["What is the status of my XpressLoan?","How many EMIs left?","I need help with repayments","Unable to repay my dues","Unable to transact"], step >= 2 && step < 3)}
            {step >= 3 && (
              <motion.div {...bub} style={{ alignSelf: "flex-end", background: "#1C1C1E", borderRadius: "12px 12px 3px 12px", padding: "8px 10px", maxWidth: "80%" }}>
                <p style={{ fontSize: 10, color: "white", margin: 0, fontFamily: SF }}>I need help with repayments</p>
              </motion.div>
            )}
            {/* Bot 2 */}
            {step >= 4 && (
              <motion.div {...bub} style={{ alignSelf: "flex-start", maxWidth: "86%", background: `${LP_PINK}22`, borderRadius: "12px 12px 12px 3px", padding: "8px 10px" }}>
                <p style={{ fontSize: 10, color: "#1a1a1a", lineHeight: 1.55, margin: 0, fontFamily: SF }}>Of course, we're happy to help. What do you need help with?</p>
              </motion.div>
            )}
            {renderOptions("Choose an option", ["Repaying dues and EMIs","Auto-payments","Late fees and charges"], step >= 5 && step < 6)}
            {step >= 6 && (
              <motion.div {...bub} style={{ alignSelf: "flex-end", background: "#1C1C1E", borderRadius: "12px 12px 3px 12px", padding: "8px 10px", maxWidth: "80%" }}>
                <p style={{ fontSize: 10, color: "white", margin: 0, fontFamily: SF }}>Auto-payments</p>
              </motion.div>
            )}
            {/* Bot 3 */}
            {step >= 7 && (
              <motion.div {...bub} style={{ alignSelf: "flex-start", maxWidth: "86%", background: `${LP_PINK}22`, borderRadius: "12px 12px 12px 3px", padding: "8px 10px" }}>
                <p style={{ fontSize: 10, color: "#1a1a1a", lineHeight: 1.55, margin: 0, fontFamily: SF }}>Understood. What would you like to know about auto-payments?</p>
              </motion.div>
            )}
            {renderOptions("Choose an option", ["How to set up auto-pay","Check status of auto-pay","Cancel auto-pay setup"], step >= 8 && step < 9)}
            {step >= 9 && (
              <motion.div {...bub} style={{ alignSelf: "flex-end", background: "#1C1C1E", borderRadius: "12px 12px 3px 12px", padding: "8px 10px", maxWidth: "80%" }}>
                <p style={{ fontSize: 10, color: "white", margin: 0, fontFamily: SF }}>How to set up auto-pay</p>
              </motion.div>
            )}
            {/* Bot 4 — resolution */}
            {step >= 10 && (
              <motion.div {...bub} style={{ alignSelf: "flex-start", maxWidth: "90%", background: `${LP_PINK}22`, borderRadius: "12px 12px 12px 3px", padding: "8px 10px" }}>
                <p style={{ fontSize: 10, color: "#1a1a1a", lineHeight: 1.55, margin: 0, fontFamily: SF }}>Setting up auto-pay is super easy 🎉 Here's how:</p>
              </motion.div>
            )}
            {step >= 11 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingLeft: 2 }}>
                {([
                  { text: "Go to Dues → Setup Auto-pay", s: 11 },
                  { text: "Keep net-banking login handy", s: 12 },
                  { text: "Sent to bank for verification", s: 13 },
                  { text: "We'll notify you once approved", s: 14 },
                ] as { text: string; s: number }[]).filter(({ s }) => step >= s).map(({ text }) => (
                  <motion.div key={text}
                    initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}
                    style={{ display: "flex", gap: 6, fontSize: 10, color: "#444", fontFamily: SF, alignItems: "flex-start" }}>
                    <span style={{ color: LP_PINK, flexShrink: 0 }}>✓</span>{text}
                  </motion.div>
                ))}
              </div>
            )}
            {step >= 14 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.3 }}
                style={{ display: "flex", gap: 5, marginTop: 2, flexWrap: "wrap" as const }}>
                <div style={{ fontSize: 9, background: LP_PINK, color: "white", borderRadius: 8, padding: "5px 10px", fontFamily: SF }}>Go to Dues</div>
                <div style={{ fontSize: 9, border: "1px solid #e0e0e0", color: "#666", borderRadius: 8, padding: "5px 10px", fontFamily: SF }}>Done</div>
                <div style={{ fontSize: 9, border: "1px solid #e0e0e0", color: "#666", borderRadius: 8, padding: "5px 10px", fontFamily: SF }}>Go back</div>
              </motion.div>
            )}
          </div>

          {/* Home indicator */}
          <div style={{ height: 24, display: "flex", alignItems: "center", justifyContent: "center", background: "white", flexShrink: 0 }}>
            <div style={{ width: 90, height: 4, background: "black", borderRadius: 2, opacity: 0.12 }} />
          </div>
        </div>
      </div>
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
          <HeroVisual />
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
            <div className="grid grid-cols-1 md:grid-cols-[1fr_275px_1fr] gap-6 items-start">
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

              {/* Centre — animated prototype */}
              <div className="hidden md:flex flex-col items-center">
                <AnimatedChatPrototype />
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

            {/* Mobile: animated prototype */}
            <div className="md:hidden mt-8 flex justify-center">
              <AnimatedChatPrototype />
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
