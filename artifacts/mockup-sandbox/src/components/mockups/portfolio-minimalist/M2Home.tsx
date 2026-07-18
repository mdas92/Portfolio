import React from "react";

// Concept 2 — Plus Jakarta Sans + Jade
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
        <span key={item} style={{ fontSize: 13, fontWeight: 500, color: item === "Work" ? "#fff" : MUTED, backgroundColor: item === "Work" ? ACCENT : "transparent", padding: "8px 20px", borderRadius: 100, cursor: "pointer", transition: "all 0.2s" }}>{item}</span>
      ))}
    </div>
  </nav>
);

export function M2Home() {
  const projects = [
    { tag: "Fintech · UX Writing", title: "Boosting Repayment Rates for LazyPay", year: "2023" },
    { tag: "Content Strategy · AI", title: "Content Maps", year: "2025" },
    { tag: "Systems · Taxonomy", title: "Product Taxonomy & Terminology", year: "2025" },
  ];

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" />
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif", color: INK, display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* Hero — asymmetric 2-col */}
        <section style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 0, padding: "20px 60px 60px", flex: 1 }}>
          <div style={{ paddingRight: 48 }}>
            <div style={{ display: "inline-flex", backgroundColor: ACCENT2, borderRadius: 100, padding: "6px 16px", marginBottom: 28 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.08em", textTransform: "uppercase" }}>Open to new roles</span>
            </div>
            <h1 style={{ fontWeight: 800, fontSize: 64, lineHeight: 0.97, letterSpacing: "-0.04em", margin: "0 0 28px" }}>
              Content that moves&nbsp;<span style={{ color: ACCENT }}>people</span> — and&nbsp;<span style={{ fontStyle: "italic", fontWeight: 700 }}>machines.</span>
            </h1>
            <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: MUTED, marginBottom: 36, maxWidth: 400 }}>
              I'm Mohana Das — content strategist & UX writer building systems for AI-powered products and fintech teams.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button style={{ backgroundColor: ACCENT, color: "#fff", border: "none", padding: "14px 28px", fontSize: 13, fontWeight: 600, borderRadius: 10, cursor: "pointer" }}>View work →</button>
              <button style={{ backgroundColor: "transparent", color: INK, border: `1.5px solid ${BORDER}`, padding: "14px 28px", fontSize: 13, fontWeight: 500, borderRadius: 10, cursor: "pointer" }}>About me</button>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 8 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>Selected work</p>
            {projects.map((p, i) => (
              <div key={p.title} style={{ backgroundColor: i === 0 ? ACCENT2 : "#FAFAFA", border: `1px solid ${i === 0 ? "#C5E8E1" : BORDER}`, borderRadius: 12, padding: "18px 20px", cursor: "pointer" }}>
                <p style={{ fontSize: 10, fontWeight: 600, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 6px" }}>{p.tag}</p>
                <p style={{ fontSize: 14, fontWeight: 700, color: INK, margin: "0 0 6px", lineHeight: 1.3, letterSpacing: "-0.01em" }}>{p.title}</p>
                <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{p.year}</p>
              </div>
            ))}
            <p style={{ fontSize: 12, color: ACCENT, fontWeight: 600, textAlign: "right", marginTop: 4, cursor: "pointer" }}>All projects →</p>
          </div>
        </section>

        <div style={{ padding: "18px 60px", borderTop: `1px solid ${BORDER}`, display: "flex", gap: 40 }}>
          {[["8+", "Years"], ["15+", "Accounts"], ["$90K", "Deal attributed"]].map(([n, l]) => (
            <div key={l} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontWeight: 800, fontSize: 22, color: ACCENT }}>{n}</span>
              <span style={{ fontSize: 12, color: MUTED }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
