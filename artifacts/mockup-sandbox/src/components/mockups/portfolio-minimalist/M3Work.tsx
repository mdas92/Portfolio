import React from "react";

const ACCENT = "#6D28D9";
const ACCENT2 = "#F3EEFF";
const INK = "#0A0A0A";
const MUTED = "#666";
const BORDER = "#EAEAEA";

const Nav = () => (
  <nav style={{ padding: "28px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: "-0.04em", color: INK }}>
      M<span style={{ color: ACCENT }}>.</span>
    </span>
    <div style={{ display: "flex", gap: 32 }}>
      {["Work", "About", "Contact"].map(item => (
        <span key={item} style={{ fontSize: 13, fontWeight: 500, color: item === "Work" ? ACCENT : MUTED, cursor: "pointer" }}>{item}</span>
      ))}
    </div>
  </nav>
);

const projects = [
  { n: "01", tag: "Fintech · UX Writing", title: "Boosting Repayment Rates for LazyPay", year: "2023", featured: true, desc: "End-to-end copy rewrite — flow hierarchy, nudge strategy, microcopy. Measurable uplift in on-time repayments." },
  { n: "02", tag: "Content Strategy · AI", title: "Content Maps", year: "2025", featured: true, desc: "Company-wide methodology credited in a $90K closed-won deal. Trained 15 people across all functions." },
  { n: "03", tag: "Systems · Taxonomy", title: "Product Taxonomy & Terminology", year: "2025", featured: false },
  { n: "04", tag: "Internal · Training", title: "Content Playbook", year: "2025", featured: false },
  { n: "05", tag: "Fintech · UX Writing", title: "UX Writing for LazyCard", year: "2022", featured: false },
  { n: "06", tag: "Fintech · UX Writing", title: "Exploring Expense Management", year: "2022", featured: false },
];

export function M3Work() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" />
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", color: INK, display: "flex", flexDirection: "column" }}>
        <Nav />

        <section style={{ padding: "24px 56px 28px", borderBottom: `1px solid ${BORDER}` }}>
          <h1 style={{ fontWeight: 700, fontSize: 72, lineHeight: 0.9, letterSpacing: "-0.05em", margin: "0 0 16px" }}>
            Work<span style={{ color: ACCENT }}>.</span>
          </h1>
          <p style={{ fontSize: 15, fontWeight: 300, color: MUTED, margin: 0 }}>8 years · AI, fintech, consumer product · from 0→1 systems to shipped UX copy.</p>
        </section>

        {/* Featured — big cards */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: "16px 56px" }}>
          {projects.filter(p => p.featured).map(p => (
            <div key={p.title} style={{ backgroundColor: ACCENT2, border: `1px solid #D8C5FF`, borderRadius: 14, padding: "24px 26px 20px", cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <span style={{ fontWeight: 700, fontSize: 32, color: ACCENT, letterSpacing: "-0.04em", lineHeight: 1 }}>{p.n}</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{p.year}</span>
              </div>
              <p style={{ fontSize: 10, fontWeight: 600, color: "#9B5CF6", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px" }}>{p.tag}</p>
              <h2 style={{ fontWeight: 700, fontSize: 17, lineHeight: 1.25, letterSpacing: "-0.02em", color: INK, margin: "0 0 10px" }}>{p.title}</h2>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.6, color: "#4A3575", margin: "0 0 12px" }}>{p.desc}</p>
              <span style={{ fontSize: 12, fontWeight: 700, color: ACCENT }}>Read case study →</span>
            </div>
          ))}
        </section>

        {/* Other work — numbered list */}
        <section style={{ padding: "0 56px 32px" }}>
          {projects.filter(p => !p.featured).map((p) => (
            <div key={p.title} style={{ display: "grid", gridTemplateColumns: "56px 1fr 60px", alignItems: "center", padding: "15px 0", borderTop: `1px solid ${BORDER}`, cursor: "pointer" }}>
              <span style={{ fontWeight: 700, fontSize: 20, color: "#D8C5FF", letterSpacing: "-0.04em" }}>{p.n}</span>
              <div>
                <span style={{ fontSize: 9, fontWeight: 700, color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", marginRight: 12 }}>{p.tag.split(" · ")[1] || p.tag.split(" · ")[0]}</span>
                <span style={{ fontWeight: 600, fontSize: 14, letterSpacing: "-0.02em" }}>{p.title}</span>
              </div>
              <span style={{ fontSize: 11, color: MUTED, textAlign: "right", fontWeight: 400 }}>{p.year}</span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
