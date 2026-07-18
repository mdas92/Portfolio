import React from "react";

const ACCENT = "#0B5E4A";
const ACCENT2 = "#E8F5F2";
const INK = "#0C0C0C";
const MUTED = "#6B6B6B";
const BORDER = "#E8E8E8";

const Nav = () => (
  <nav style={{ padding: "30px 60px", display: "flex", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 28, height: 28, backgroundColor: ACCENT, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#fff", fontWeight: 800, fontSize: 11, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>M</span>
      </div>
      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: INK }}>Mohana Das</span>
    </div>
    <div style={{ display: "flex", gap: 4, backgroundColor: "#F5F5F5", borderRadius: 100, padding: "4px" }}>
      {["Work", "About", "Contact"].map(item => (
        <span key={item} style={{ fontSize: 13, fontWeight: 500, color: item === "Work" ? "#fff" : MUTED, backgroundColor: item === "Work" ? ACCENT : "transparent", padding: "8px 20px", borderRadius: 100, cursor: "pointer" }}>{item}</span>
      ))}
    </div>
  </nav>
);

const projects = [
  { tag: "Fintech · UX Writing", title: "Boosting Repayment Rates for LazyPay", year: "2023", featured: true, desc: "End-to-end copy rewrite of the repayment flow — hierarchy, nudge strategy, microcopy. Measurable uplift in on-time repayments." },
  { tag: "Content Strategy · AI", title: "Content Maps", year: "2025", featured: true, desc: "Company-wide methodology credited in a $90K closed-won deal. Trained 15 people; maps across 15+ accounts." },
  { tag: "Systems · Taxonomy", title: "Product Taxonomy & Terminology", year: "2025", featured: false },
  { tag: "Internal · Company-Wide", title: "Content Playbook", year: "2025", featured: false },
  { tag: "Fintech · UX Writing", title: "UX Writing for LazyCard", year: "2022", featured: false },
  { tag: "Fintech · UX Writing", title: "Exploring Expense Management", year: "2022", featured: false },
];

export function M2Work() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" />
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif", color: INK, display: "flex", flexDirection: "column" }}>
        <Nav />

        <section style={{ padding: "32px 60px 28px", borderBottom: `1px solid ${BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={{ backgroundColor: ACCENT2, borderRadius: 100, display: "inline-flex", padding: "6px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.08em", textTransform: "uppercase" }}>Selected work</span>
            </div>
            <h1 style={{ fontWeight: 800, fontSize: 52, lineHeight: 0.97, letterSpacing: "-0.04em", margin: 0 }}>
              8 years of content<br /><span style={{ color: ACCENT }}>that ships.</span>
            </h1>
          </div>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.65, color: MUTED, maxWidth: 280, margin: 0 }}>Fintech, AI, and consumer product — from 0→1 systems to critical UX flows.</p>
        </section>

        {/* Featured grid */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: "20px 60px" }}>
          {projects.filter(p => p.featured).map(p => (
            <div key={p.title} style={{ backgroundColor: ACCENT2, border: `1px solid #C5E8E1`, borderRadius: 14, padding: "28px 28px 24px", cursor: "pointer" }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 10px" }}>{p.tag}</p>
              <h2 style={{ fontWeight: 800, fontSize: 18, lineHeight: 1.25, letterSpacing: "-0.02em", color: INK, margin: "0 0 12px" }}>{p.title}</h2>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.65, color: "#3A5C57", margin: "0 0 14px" }}>{p.desc}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: "#5A8A82" }}>{p.year}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: ACCENT, cursor: "pointer" }}>Read →</span>
              </div>
            </div>
          ))}
        </section>

        {/* Other work list */}
        <section style={{ padding: "0 60px 32px" }}>
          {projects.filter(p => !p.featured).map((p, i) => (
            <div key={p.title} style={{ display: "grid", gridTemplateColumns: "1fr 100px", alignItems: "center", padding: "16px 0", borderTop: `1px solid ${BORDER}`, cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", minWidth: 120 }}>{p.tag.split(" · ")[1]}</span>
                <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em" }}>{p.title}</span>
              </div>
              <span style={{ fontSize: 11, color: MUTED, textAlign: "right" }}>{p.year}</span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
