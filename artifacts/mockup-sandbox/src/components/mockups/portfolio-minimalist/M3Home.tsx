import React from "react";

// Concept 3 — Space Grotesk + Violet
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
        <span key={item} style={{ fontSize: 13, fontWeight: 500, color: item === "Work" ? ACCENT : MUTED, cursor: "pointer", letterSpacing: "-0.01em" }}>{item}</span>
      ))}
    </div>
  </nav>
);

export function M3Home() {
  const projects = [
    { tag: "Fintech · UX Writing", title: "Boosting Repayment Rates for LazyPay", year: "2023" },
    { tag: "Content Strategy · AI", title: "Content Maps", year: "2025" },
    { tag: "Systems · Taxonomy", title: "Product Taxonomy & Terminology", year: "2025" },
  ];

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" />
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", color: INK, display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* Big type hero */}
        <section style={{ padding: "24px 56px 40px", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
            <h1 style={{ fontWeight: 700, fontSize: 96, lineHeight: 0.88, letterSpacing: "-0.05em", margin: 0, maxWidth: 700 }}>
              Content<br />
              <span style={{ WebkitTextStroke: `2px ${INK}`, color: "transparent" }}>Strategist</span><br />
              <span style={{ color: ACCENT }}>& Writer.</span>
            </h1>
            <div style={{ textAlign: "right", paddingTop: 8 }}>
              <div style={{ backgroundColor: ACCENT2, border: `1px solid #D8C5FF`, borderRadius: 10, padding: "12px 18px", marginBottom: 12 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 2px" }}>Available</p>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, fontWeight: 400 }}>Open to new roles</p>
              </div>
              <p style={{ fontSize: 14, color: MUTED, fontWeight: 300, lineHeight: 1.6, maxWidth: 260, marginLeft: "auto", textAlign: "right" }}>
                I'm Mohana Das — I build content systems for AI-powered products and fintech teams.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button style={{ backgroundColor: ACCENT, color: "#fff", border: "none", padding: "13px 28px", fontSize: 13, fontWeight: 600, borderRadius: 8, cursor: "pointer", letterSpacing: "-0.01em" }}>See my work →</button>
            <button style={{ backgroundColor: ACCENT2, color: ACCENT, border: `1px solid #D8C5FF`, padding: "13px 28px", fontSize: 13, fontWeight: 600, borderRadius: 8, cursor: "pointer" }}>About me</button>
            <span style={{ fontSize: 12, color: MUTED, fontWeight: 400, marginLeft: 8 }}>8 years · 3 companies · $90K deal attributed</span>
          </div>
        </section>

        {/* Work preview */}
        <section style={{ padding: "28px 56px 36px", flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 18 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>Selected work</p>
            <p style={{ fontSize: 12, color: ACCENT, fontWeight: 600, margin: 0, cursor: "pointer" }}>All projects →</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {projects.map((p, i) => (
              <div key={p.title} style={{ border: `1px solid ${i === 0 ? "#D8C5FF" : BORDER}`, backgroundColor: i === 0 ? ACCENT2 : "#FAFAFA", borderRadius: 12, padding: "20px 20px 18px", cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase" }}>{p.tag.split(" · ")[0]}</span>
                  <span style={{ fontSize: 10, color: MUTED }}>{p.year}</span>
                </div>
                <p style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.3, letterSpacing: "-0.02em", margin: "0 0 12px", color: INK }}>{p.title}</p>
                <span style={{ fontSize: 11, fontWeight: 600, color: ACCENT }}>Read →</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
