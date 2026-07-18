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
        <span key={item} style={{ fontSize: 13, fontWeight: 500, color: item === "Work" ? ACCENT : MUTED, cursor: "pointer", letterSpacing: "0.01em" }}>{item}</span>
      ))}
    </div>
  </nav>
);

export function MinimalistA() {
  const projects = [
    { tag: "UX Writing · Fintech", title: "Boosting Repayment Rates for LazyPay", year: "2023" },
    { tag: "Content Strategy · Methodology", title: "Content Maps", year: "2025" },
    { tag: "Taxonomy · Systems", title: "Product Taxonomy & Terminology", year: "2025" },
    { tag: "Internal · Company-Wide", title: "Content Playbook", year: "2025" },
    { tag: "UX Writing · Fintech", title: "UX Writing for LazyCard", year: "2022" },
    { tag: "UX Writing · Fintech", title: "Expense Management", year: "2022" },
  ];

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,700;12..96,800&display=swap" />
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#fff", fontFamily: "'Bricolage Grotesque', sans-serif", color: INK, display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* Hero */}
        <section style={{ padding: "64px 56px 56px", borderBottom: `1px solid ${BORDER}` }}>
          <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: ACCENT, marginBottom: 24 }}>
            Content Strategist & UX Writer
          </p>
          <h1 style={{ fontWeight: 800, fontSize: 80, lineHeight: 0.92, letterSpacing: "-0.04em", margin: "0 0 36px", maxWidth: 780 }}>
            Words that make systems work.
          </h1>
          <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.65, color: MUTED, maxWidth: 520, marginBottom: 40 }}>
            I'm Mohana Das — I build content systems for AI, fintech, and product teams. 8 years of turning complexity into clarity.
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <button style={{ backgroundColor: ACCENT, color: "#fff", border: "none", padding: "13px 30px", fontSize: 13, fontWeight: 600, borderRadius: 4, cursor: "pointer", letterSpacing: "0.02em" }}>See my work</button>
            <button style={{ backgroundColor: "transparent", color: INK, border: `1.5px solid ${BORDER}`, padding: "13px 30px", fontSize: 13, fontWeight: 500, borderRadius: 4, cursor: "pointer" }}>Get in touch</button>
          </div>
        </section>

        {/* Selected work */}
        <section style={{ padding: "40px 56px 48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 28 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED }}>Selected work</span>
            <span style={{ fontSize: 12, color: ACCENT, fontWeight: 500, cursor: "pointer" }}>View all →</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, backgroundColor: BORDER }}>
            {projects.slice(0, 3).map(p => (
              <div key={p.title} style={{ backgroundColor: "#fff", padding: "24px 24px 28px" }}>
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: ACCENT, marginBottom: 10 }}>{p.tag}</p>
                <p style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.35, color: INK, margin: 0, letterSpacing: "-0.01em" }}>{p.title}</p>
                <p style={{ fontSize: 11, color: MUTED, marginTop: 10, fontWeight: 400 }}>{p.year}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
