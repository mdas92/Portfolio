import React from "react";

// Londrina Solid (display) + DM Sans (body) + Violet #6D28D9
const ACCENT = "#6D28D9";
const ACCENT_LIGHT = "#F3EEFF";
const ACCENT_BORDER = "#D8C5FF";
const INK = "#0C0C0C";
const MUTED = "#666666";
const BORDER = "#E8E8E8";

const Nav = () => (
  <nav style={{ padding: "28px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 30, height: 30, backgroundColor: ACCENT, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#fff", fontFamily: "'Londrina Solid', cursive", fontSize: 14 }}>M</span>
      </div>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, color: INK, letterSpacing: "-0.01em" }}>Mohana Das</span>
    </div>
    <div style={{ display: "flex", gap: 4, backgroundColor: "#F5F5F5", borderRadius: 100, padding: "4px" }}>
      {["Work", "About", "Contact"].map(item => (
        <span key={item} style={{
          fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
          color: item === "Work" ? "#fff" : MUTED,
          backgroundColor: item === "Work" ? ACCENT : "transparent",
          padding: "8px 22px", borderRadius: 100, cursor: "pointer"
        }}>{item}</span>
      ))}
    </div>
  </nav>
);

const projects = [
  { tag: "Information Architecture · Product Language", title: "What's in a Name? Defining Product Taxonomy for Aampe", year: "2025" },
  { tag: "Content Strategy · Methodology", title: "Content Maps: Building the Shared Language for Agentic Content Strategy", year: "2025" },
  { tag: "Internal · Company-Wide", title: "Content Playbook — Company-Wide Training Resource", year: "2025" },
];

export function M2Home() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap" />
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#fff", fontFamily: "'DM Sans', sans-serif", color: INK, display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* Hero */}
        <section style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 0, padding: "12px 56px 48px", flex: 1 }}>
          <div style={{ paddingRight: 48, paddingTop: 8 }}>
            <div style={{ display: "inline-flex", backgroundColor: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}`, borderRadius: 100, padding: "6px 16px", marginBottom: 28 }}>
              <span style={{ fontSize: 11, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", color: ACCENT, letterSpacing: "0.06em", textTransform: "uppercase" }}>Content Strategist & UX Writer</span>
            </div>
            <h1 style={{ fontFamily: "'Londrina Solid', cursive", fontWeight: 400, fontSize: 80, lineHeight: 1.0, letterSpacing: "0.01em", margin: "0 0 28px", color: INK }}>
              writer.<br />
              content<br />
              strategist.<br />
              <span style={{ color: ACCENT }}>product thinker.</span>
            </h1>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: MUTED, marginBottom: 36, maxWidth: 400 }}>
              With 12 years of experience across engineering, design and writing, I help craft a holistic customer experience through content strategy, product positioning, and value frameworks.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button style={{ backgroundColor: ACCENT, color: "#fff", border: "none", padding: "13px 28px", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, borderRadius: 10, cursor: "pointer" }}>View work →</button>
              <button style={{ backgroundColor: "transparent", color: INK, border: `1.5px solid ${BORDER}`, padding: "13px 28px", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, borderRadius: 10, cursor: "pointer" }}>About me</button>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 8 }}>
            <p style={{ fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: MUTED, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>Selected work</p>
            {projects.map((p, i) => (
              <div key={p.title} style={{
                backgroundColor: i === 0 ? ACCENT_LIGHT : "#FAFAFA",
                border: `1px solid ${i === 0 ? ACCENT_BORDER : BORDER}`,
                borderRadius: 12, padding: "18px 20px", cursor: "pointer"
              }}>
                <p style={{ fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: ACCENT, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>{p.tag}</p>
                <p style={{ fontSize: 14, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: INK, margin: "0 0 8px", lineHeight: 1.35, letterSpacing: "-0.01em" }}>{p.title}</p>
                <p style={{ fontSize: 11, fontFamily: "'DM Sans', sans-serif", color: MUTED, margin: 0, fontWeight: 400 }}>{p.year}</p>
              </div>
            ))}
            <p style={{ fontSize: 12, fontFamily: "'DM Sans', sans-serif", color: ACCENT, fontWeight: 600, textAlign: "right", marginTop: 4, cursor: "pointer" }}>All projects →</p>
          </div>
        </section>

        <div style={{ padding: "18px 56px", borderTop: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 12, fontFamily: "'DM Sans', sans-serif", color: MUTED }}>Based in Tokyo, JP (fully remote)</span>
          <a href="#" style={{ fontSize: 12, fontFamily: "'DM Sans', sans-serif", color: ACCENT, fontWeight: 600, textDecoration: "none" }}>Download Resume ↗</a>
        </div>
      </div>
    </>
  );
}
