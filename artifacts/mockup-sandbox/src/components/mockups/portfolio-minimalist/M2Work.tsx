import React from "react";

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
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, color: INK }}>Mohana Das</span>
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
  {
    tag: "Information Architecture · Product Language",
    title: "What's in a Name? Defining Product Taxonomy for Aampe",
    summary: "Drove the evidence, framework, and decision session that ratified nine renamed product entities — then shipped the glossary and rollout plan for a product that never stops running.",
    year: "2025",
  },
  {
    tag: "Content Strategy · Methodology",
    title: "Content Maps: Building the Shared Language for Agentic Content Strategy",
    summary: "Turned a one-off planning habit into Aampe's standard strategic artifact — defined, templated, named, taught, paired with AI tooling, and credited in closed-won deals.",
    year: "2025",
  },
  {
    tag: "Internal · Company-Wide",
    title: "Content Playbook — Company-Wide Training Resource",
    summary: "Comprehensive Figma deck covering label strategy, message architecture, and best practices. Distributed to all active clients.",
    year: "2025",
  },
  {
    tag: "Conversation Design · Fintech",
    title: "Building an In-App Chat Assistant",
    summary: "End-to-end conversation design for a support bot resolving 50,000+ monthly queries — from research to a 5-product decision tree.",
    year: "2022",
  },
  {
    tag: "Content Strategy · Fintech",
    title: "Boosting Repayment Rates for LazyPay",
    summary: "LazyPay is a buy-now-pay-later product by PayU Finance. When data showed 45% of new users were missing repayments, I redesigned the content and touchpoints across the entire repayment journey.",
    year: "2022",
  },
  {
    tag: "UX Writing · Fintech",
    title: "UX Writing Review for LazyCard",
    summary: "Full content audit and rewrite for a new physical and digital credit card — first project as LazyPay's first UX Writer.",
    year: "2021",
  },
  {
    tag: "Content Strategy · Fintech",
    title: "Exploring Expense Management",
    summary: "Research-driven IA, content strategy, and terminology framework for a new expense tracking feature — built before a single screen was designed.",
    year: "2022",
  },
];

export function M2Work() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap" />
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#fff", fontFamily: "'DM Sans', sans-serif", color: INK, display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* Page header */}
        <section style={{ padding: "12px 56px 28px", borderBottom: `1px solid ${BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={{ display: "inline-flex", backgroundColor: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}`, borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: ACCENT, letterSpacing: "0.06em", textTransform: "uppercase" }}>Selected work</span>
            </div>
            <h1 style={{ fontFamily: "'Londrina Solid', cursive", fontWeight: 400, fontSize: 72, lineHeight: 1.0, letterSpacing: "0.01em", margin: 0, color: INK }}>
              Work<span style={{ color: ACCENT }}>.</span>
            </h1>
          </div>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.65, color: MUTED, maxWidth: 320, margin: 0, textAlign: "right" }}>
            Content strategy, UX writing, and product language across fintech, AI, and consumer apps.
          </p>
        </section>

        {/* 2-column grid */}
        <section style={{ padding: "24px 56px 40px", flex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {projects.map((p, i) => (
              <div key={p.title} style={{
                backgroundColor: i === 0 || i === 1 ? ACCENT_LIGHT : "#FAFAFA",
                border: `1px solid ${i === 0 || i === 1 ? ACCENT_BORDER : BORDER}`,
                borderRadius: 14,
                padding: "22px 24px 20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: ACCENT, letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.4, maxWidth: "70%" }}>{p.tag}</span>
                  <span style={{ fontSize: 11, fontFamily: "'DM Sans', sans-serif", color: MUTED, fontWeight: 400, whiteSpace: "nowrap" }}>{p.year}</span>
                </div>
                <h2 style={{ fontFamily: "'Londrina Solid', cursive", fontWeight: 400, fontSize: 20, lineHeight: 1.15, letterSpacing: "0.01em", color: INK, margin: 0 }}>{p.title}</h2>
                <p style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.65, color: "#555", margin: 0, flexGrow: 1 }}>{p.summary}</p>
                <span style={{ fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: ACCENT }}>Read case study →</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
