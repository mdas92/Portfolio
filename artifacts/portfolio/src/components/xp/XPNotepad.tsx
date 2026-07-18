import type { ReactNode, CSSProperties } from "react";
import { journey } from "../../data/portfolio";

const GRAY = "#d4d0c8";
const DG = "#808080";

const PRE: CSSProperties = {
  margin: 0,
  fontFamily: "Lucida Console, Courier New, monospace",
  fontSize: 13,
  lineHeight: 1.75,
  color: "#111",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
};

const bold: CSSProperties = { fontWeight: "bold", color: "#000" };
const h1: CSSProperties = { fontWeight: "bold", fontSize: 15, color: "#000" };
const h2: CSSProperties = { fontWeight: "bold", fontSize: 13, color: "#000", letterSpacing: "0.04em" };
const dim: CSSProperties = { color: "#333" };
const accent: CSSProperties = { fontWeight: "bold", color: "#0a3494" };
const rule: CSSProperties = { color: "#777" };

function B({ children }: { children: ReactNode }) {
  return <span style={bold}>{children}</span>;
}
function A({ children }: { children: ReactNode }) {
  return <span style={accent}>{children}</span>;
}

function NotepadChrome({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "Tahoma,sans-serif" }}>
      <div style={{ background: GRAY, borderBottom: `1px solid ${DG}`, height: 22, display: "flex", alignItems: "center", flexShrink: 0 }}>
        {["File","Edit","Format","View","Help"].map(m => (
          <button key={m} style={{ padding: "1px 6px", background: "none", border: "none", cursor: "default", fontSize: 11, fontFamily: "Tahoma,sans-serif" }}>{m}</button>
        ))}
      </div>
      <div style={{ flex: 1, overflow: "auto", background: "white", padding: "10px 16px" }}>
        <pre style={PRE}>{children}</pre>
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
      <NotepadChrome>
        <span style={h1}>{"Contact - Mohana Das\n"}</span>
        <span style={rule}>{"══════════════════════════════\n"}</span>
        {"\n"}
        {"📧  "}<A>hello@mohanadascontent.com</A>{"\n"}
        {"\n"}
        {"🔗  "}<A>linkedin.com/in/mohana-das</A>{"\n"}
        {"\n"}
        {"📍  "}<span style={dim}>Tokyo, Japan (fully remote)</span>{"\n"}
        {"\n"}
        <span style={rule}>{"──────────────────────────────\n"}</span>
        <B>Open to:{"\n"}</B>
        <span style={dim}>{"  Content strategy roles,\n"}</span>
        <span style={dim}>{"  UX writing, and consulting\n"}</span>
        <span style={dim}>{"  in fintech, tech, and AI.\n"}</span>
      </NotepadChrome>
    );
  }

  return (
    <NotepadChrome>
      <span style={h1}>{"About Mohana Das\n"}</span>
      <span style={rule}>{"═══════════════════════════════════════════════════\n"}</span>
      {"\n"}
      <B>{"Writer. Content Strategist. Product Thinker.\n"}</B>
      <span style={dim}>{"Based in Tokyo, Japan (fully remote)\n"}</span>
      {"\n"}
      <span style={rule}>{"───────────────────────────────────────────────────\n"}</span>
      <span style={h2}>{"BIO\n"}</span>
      <span style={rule}>{"───────────────────────────────────────────────────\n"}</span>
      {"\n"}
      {"With 12 years of experience across engineering,\n"}
      {"design, and writing, I help craft a holistic customer\n"}
      {"experience through content strategy, product\n"}
      {"positioning, and value frameworks.\n"}
      {"\n"}
      {"Currently at "}<A>Aampe</A>{" - an AI-powered lifecycle marketing\n"}
      {"platform - building content strategy for consumer apps\n"}
      {"across fintech, sports, travel, food delivery, and\n"}
      {"fitness. My work spans designing label architectures,\n"}
      {"value proposition frameworks, and thousands of message\n"}
      {"variants - helping brands unlock the full potential of\n"}
      {"agentic optimisation.\n"}
      {"\n"}
      {"Before this, I was the first and only UX Writer at\n"}
      <A>LazyPay (PayU Finance)</A>{", where I built the content\n"}
      {"design practice from the ground up - owning conversation\n"}
      {"design, information architecture, and microcopy across\n"}
      {"a fintech product reaching millions of users across India.\n"}
      {"\n"}
      <span style={rule}>{"───────────────────────────────────────────────────\n"}</span>
      <span style={h2}>{"CAREER\n"}</span>
      <span style={rule}>{"───────────────────────────────────────────────────\n"}</span>
      {"\n"}
      {journey.map((j, i) => (
        <span key={i}>
          <span style={dim}>{"  "}{j.date}{"\n"}</span>
          {"  "}<B>{j.role}</B>{" @ "}<A>{j.company}</A>{"\n"}
          <span style={dim}>{"  "}{j.description}{"\n"}</span>
          {"\n"}
        </span>
      ))}
      <span style={rule}>{"───────────────────────────────────────────────────\n"}</span>
      <span style={dim}>{"EOF\n"}</span>
    </NotepadChrome>
  );
}
