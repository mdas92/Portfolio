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
        <span key={item} style={{ fontSize: 13, fontWeight: 500, color: item === "About" ? ACCENT : MUTED, cursor: "pointer" }}>{item}</span>
      ))}
    </div>
  </nav>
);

const roles = [
  { co: "Aampe", title: "Sr. Content Strategist", period: "2025–present", desc: "Built Content Maps (credited in $90K deal), led Product Taxonomy project, authored Content Playbook adopted company-wide." },
  { co: "PayU / LazyPay", title: "UX Writer & Content Strategist", period: "2021–2024", desc: "Led content for LazyCard, Expense Management, and In-App Chat. Drove measurable repayment rate improvements." },
  { co: "GoIbibo", title: "Content Designer", period: "2019–2021", desc: "Designed content for homescreen, chatbot, and GoTribe loyalty program on a high-scale consumer travel app." },
];

export function M3About() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" />
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", color: INK, display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* Full-width headline */}
        <section style={{ padding: "24px 56px 32px", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <h1 style={{ fontWeight: 700, fontSize: 60, lineHeight: 0.92, letterSpacing: "-0.04em", margin: 0 }}>
              I make the<br />
              <span style={{ color: ACCENT }}>complex</span><br />
              <span style={{ WebkitTextStroke: `2px ${INK}`, color: "transparent" }}>simple.</span>
            </h1>
            <div>
              <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: MUTED, margin: "0 0 16px" }}>
                8 years building content systems for AI, fintech, and consumer apps. I specialize in turning tangled product logic into language that works — for users and for machines.
              </p>
              <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: MUTED, margin: 0 }}>
                At Aampe I originated the Content Maps methodology, resolved a 3-year taxonomy problem, and wrote the Content Playbook used company-wide and in live sales demos.
              </p>
            </div>
          </div>
        </section>

        {/* Horizontal timeline */}
        <section style={{ padding: "28px 56px 24px", borderBottom: `1px solid ${BORDER}` }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>Experience</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {roles.map((r, i) => (
              <div key={r.co} style={{ backgroundColor: i === 0 ? ACCENT2 : "#FAFAFA", border: `1px solid ${i === 0 ? "#D8C5FF" : BORDER}`, borderRadius: 12, padding: "20px 22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <p style={{ fontWeight: 700, fontSize: 15, margin: 0, letterSpacing: "-0.02em" }}>{r.co}</p>
                  <span style={{ fontSize: 10, color: MUTED, fontWeight: 400, whiteSpace: "nowrap" }}>{r.period}</span>
                </div>
                <p style={{ fontSize: 12, color: ACCENT, fontWeight: 600, margin: "0 0 10px", letterSpacing: "-0.01em" }}>{r.title}</p>
                <p style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.65, color: "#555", margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section style={{ padding: "20px 56px" }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: MUTED, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Skills</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Content Strategy", "UX Writing", "Messaging Systems", "AI Content", "Information Architecture", "0→1 Frameworks", "Taxonomy Design", "Workshop Facilitation"].map(s => (
              <span key={s} style={{ fontSize: 12, fontWeight: 500, padding: "7px 16px", backgroundColor: ACCENT2, color: ACCENT, border: `1px solid #D8C5FF`, borderRadius: 100 }}>{s}</span>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
