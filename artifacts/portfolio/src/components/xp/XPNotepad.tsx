import type { ReactNode } from "react";
import { journey } from "../../data/portfolio";

const GRAY = "#d4d0c8";
const DG = "#808080";

function NotepadChrome({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "Tahoma,sans-serif" }}>
      <div style={{ background: GRAY, borderBottom: `1px solid ${DG}`, height: 22, display: "flex", alignItems: "center", flexShrink: 0 }}>
        {["File","Edit","Format","View","Help"].map(m => (
          <button key={m} style={{ padding: "1px 6px", background: "none", border: "none", cursor: "default", fontSize: 11, fontFamily: "Tahoma,sans-serif" }}>{m}</button>
        ))}
      </div>
      <div style={{ flex: 1, overflow: "auto", background: "white", padding: 6 }}>
        <pre style={{ margin: 0, fontFamily: "Lucida Console, Courier New, monospace", fontSize: 12, lineHeight: 1.65, color: "#000", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
          {children}
        </pre>
      </div>
      <div style={{ background: GRAY, borderTop: `1px solid ${DG}`, height: 20, display: "flex", alignItems: "center", padding: "0 6px", fontSize: 11, flexShrink: 0 }}>
        <span>Ln 1, Col 1</span>
      </div>
    </div>
  );
}

export function XPNotepad({ type }: { type: "about" | "contact" }) {
  if (type === "contact") {
    return (
      <NotepadChrome>{`Contact — Mohana Das
══════════════════════════════

📧  hello@mohanadascontent.com

🔗  linkedin.com/in/mohana-das

📍  Tokyo, Japan (fully remote)

──────────────────────────────
Open to:
  Content strategy roles,
  UX writing, and consulting
  in fintech, tech, and AI.
`}</NotepadChrome>
    );
  }

  const careerLines = journey
    .map(j => `  ${j.date}\n  ${j.role} @ ${j.company}\n  ${j.description}\n`)
    .join("\n");

  return (
    <NotepadChrome>{`About Mohana Das
═══════════════════════════════════════════════════

Writer. Content Strategist. Product Thinker.
Based in Tokyo, Japan (fully remote)

───────────────────────────────────────────────────
BIO
───────────────────────────────────────────────────

With 12 years of experience across engineering,
design, and writing, I help craft a holistic customer
experience through content strategy, product
positioning, and value frameworks.

Currently at Aampe — an AI-powered lifecycle marketing
platform — building content strategy for consumer apps
across fintech, sports, travel, food delivery, and
fitness. My work spans designing label architectures,
value proposition frameworks, and thousands of message
variants — helping brands unlock the full potential of
agentic optimisation.

Before this, I was the first and only UX Writer at
LazyPay (PayU Finance), where I built the content
design practice from the ground up — owning conversation
design, information architecture, and microcopy across
a fintech product reaching millions of users across
India.

───────────────────────────────────────────────────
CAREER
───────────────────────────────────────────────────

${careerLines}
───────────────────────────────────────────────────
EOF
`}</NotepadChrome>
  );
}
