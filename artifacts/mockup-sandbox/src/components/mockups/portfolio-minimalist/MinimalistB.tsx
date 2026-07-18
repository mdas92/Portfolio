import React from "react";

const ACCENT = "#E05C2F";
const INK = "#0E0E0E";
const MUTED = "#666666";
const BORDER = "#EBEBEB";
const SOFT = "#FDF2EE";

const Nav = () => (
  <nav style={{ padding: "28px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${BORDER}` }}>
    <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em", color: INK }}>MD</span>
    <div style={{ display: "flex", gap: 36 }}>
      {["Work", "About", "Contact"].map(item => (
        <span key={item} style={{ fontSize: 13, fontWeight: 500, color: item === "About" ? ACCENT : MUTED, cursor: "pointer" }}>{item}</span>
      ))}
    </div>
  </nav>
);

const experiences = [
  { co: "Aampe", role: "Senior Content Strategist", period: "2025 – Present", desc: "Built content methodology company-wide. Created Content Maps (credited in $90K deal), led Product Taxonomy project, authored the Content Playbook." },
  { co: "PayU / LazyPay", role: "UX Writer & Content Strategist", period: "2021 – 2024", desc: "Led content for LazyCard, Expense Management, and In-App Chat. Drove measurable repayment rate improvements through UX writing." },
  { co: "GoIbibo", role: "Content Designer", period: "2019 – 2021", desc: "Designed content for homescreen, chatbot, and GoTribe loyalty program across a high-scale consumer travel platform." },
];

export function MinimalistB() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,700;12..96,800&display=swap" />
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#fff", fontFamily: "'Bricolage Grotesque', sans-serif", color: INK, display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* About hero */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ padding: "56px 56px 56px", borderRight: `1px solid ${BORDER}` }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: ACCENT, marginBottom: 20 }}>About</p>
            <h1 style={{ fontWeight: 800, fontSize: 52, lineHeight: 1.0, letterSpacing: "-0.03em", margin: "0 0 28px" }}>
              I make ideas land.
            </h1>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: MUTED, margin: "0 0 20px" }}>
              I'm Mohana Das, a content strategist and UX writer with 8 years building content systems for product, fintech, and AI companies.
            </p>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: MUTED, margin: 0 }}>
              I specialize in turning complex systems into clear language — whether that's a company-wide messaging methodology, a label taxonomy for agentic AI, or copy that moves users through a high-stakes financial flow.
            </p>
          </div>
          <div style={{ backgroundColor: SOFT, display: "flex", alignItems: "center", justifyContent: "center", padding: 48 }}>
            <div style={{ width: 180, height: 220, backgroundColor: "#E8C5B5", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 11, color: "#A0705A", letterSpacing: "0.08em", textTransform: "uppercase" }}>Photo</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section style={{ padding: "40px 56px 48px" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED, marginBottom: 24 }}>Experience</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {experiences.map((e, i) => (
              <div key={e.co} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 32, padding: "20px 0", borderTop: `1px solid ${BORDER}` }}>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, margin: "0 0 4px", letterSpacing: "-0.01em" }}>{e.co}</p>
                  <p style={{ fontSize: 12, color: ACCENT, fontWeight: 500, margin: "0 0 4px" }}>{e.role}</p>
                  <p style={{ fontSize: 11, color: MUTED, margin: 0 }}>{e.period}</p>
                </div>
                <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: "#444", margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills strip */}
        <div style={{ borderTop: `1px solid ${BORDER}`, padding: "20px 56px", display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["Content Strategy", "UX Writing", "Information Architecture", "Messaging Systems", "AI Content", "Taxonomy Design", "0→1 Frameworks"].map(s => (
            <span key={s} style={{ fontSize: 11, fontWeight: 500, padding: "5px 12px", border: `1px solid ${BORDER}`, borderRadius: 100, color: "#333" }}>{s}</span>
          ))}
        </div>
      </div>
    </>
  );
}
