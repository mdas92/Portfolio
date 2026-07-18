import React from "react";

const ACCENT = "#E05C2F";
const INK = "#0E0E0E";
const MUTED = "#666666";
const BORDER = "#EBEBEB";

const Nav = () => (
  <nav style={{ padding: "28px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${BORDER}` }}>
    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em", color: INK }}>MD</span>
    <div style={{ display: "flex", gap: 36 }}>
      {["Work", "About", "Contact"].map(item => (
        <span key={item} style={{ fontSize: 13, fontWeight: 500, color: item === "Work" ? ACCENT : MUTED, cursor: "pointer" }}>{item}</span>
      ))}
    </div>
  </nav>
);

const projects = [
  { tag: "UX Writing · Fintech", title: "Boosting Repayment Rates for LazyPay", year: "2023", featured: true, desc: "Rewrote the end-to-end repayment flow — copy, hierarchy, nudge strategy — resulting in measurable uplift in on-time repayments." },
  { tag: "Content Strategy · AI", title: "Content Maps", year: "2025", featured: true, desc: "Built a company-wide artifact credited in a $90K closed-won deal. Trained 15 people across every function." },
  { tag: "Taxonomy · Systems", title: "Product Taxonomy & Terminology", year: "2025", featured: false, desc: "Resolved a 3-year alias problem. Designed the naming system and governance framework for Aampe's product taxonomy." },
  { tag: "Internal · Company-Wide", title: "Content Playbook", year: "2025", featured: false, desc: "Comprehensive Figma deck adopted company-wide within days. Distributed to all active clients." },
  { tag: "UX Writing · Fintech", title: "UX Writing for LazyCard", year: "2022", featured: false, desc: "Full copy review across the LazyCard onboarding and activation flow." },
  { tag: "UX Writing · Fintech", title: "Exploring Expense Management", year: "2022", featured: false, desc: "Research-to-IA for an unreleased expense management feature. Confidential." },
];

export function MinimalistC() {
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,700;12..96,800&display=swap" />
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#fff", fontFamily: "'Bricolage Grotesque', sans-serif", color: INK, display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* Header row */}
        <section style={{ padding: "48px 56px 36px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: `1px solid ${BORDER}` }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: MUTED, marginBottom: 14 }}>Selected work</p>
            <h1 style={{ fontWeight: 800, fontSize: 56, lineHeight: 0.95, letterSpacing: "-0.04em", margin: 0 }}>
              What I've<br /><span style={{ color: ACCENT }}>built.</span>
            </h1>
          </div>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.65, color: MUTED, maxWidth: 280, margin: 0 }}>
            8 years of content strategy across AI, fintech, and consumer product — from 0→1 systems to shipped UX copy.
          </p>
        </section>

        {/* Featured projects */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderBottom: `1px solid ${BORDER}`, backgroundColor: BORDER }}>
          {featured.map(p => (
            <div key={p.title} style={{ backgroundColor: "#fff", padding: "32px 40px", display: "flex", flexDirection: "column", gap: 12, borderRight: `1px solid ${BORDER}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: ACCENT }}>{p.tag}</span>
                <span style={{ fontSize: 10, color: MUTED, fontWeight: 400 }}>{p.year}</span>
              </div>
              <h2 style={{ fontWeight: 800, fontSize: 20, lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0 }}>{p.title}</h2>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.65, color: "#555", margin: 0 }}>{p.desc}</p>
              <span style={{ fontSize: 12, fontWeight: 600, color: ACCENT, cursor: "pointer", marginTop: 4 }}>Read case study →</span>
            </div>
          ))}
        </section>

        {/* Other projects list */}
        <section style={{ padding: "0 56px 40px" }}>
          {rest.map((p, i) => (
            <div key={p.title} style={{ display: "grid", gridTemplateColumns: "1fr 120px 80px", gap: 24, alignItems: "center", padding: "18px 0", borderBottom: `1px solid ${BORDER}` }}>
              <div>
                <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: ACCENT, marginRight: 12 }}>{p.tag}</span>
                <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em" }}>{p.title}</span>
              </div>
              <span style={{ fontSize: 12, color: MUTED, fontWeight: 300 }}>{p.desc.slice(0, 40)}…</span>
              <span style={{ fontSize: 11, color: MUTED, fontWeight: 400, textAlign: "right" }}>{p.year}</span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
