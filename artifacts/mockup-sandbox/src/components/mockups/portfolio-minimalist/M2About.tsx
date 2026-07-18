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
        <span key={item} style={{ fontSize: 13, fontWeight: 500, color: item === "About" ? "#fff" : MUTED, backgroundColor: item === "About" ? ACCENT : "transparent", padding: "8px 20px", borderRadius: 100, cursor: "pointer" }}>{item}</span>
      ))}
    </div>
  </nav>
);

const roles = [
  { co: "Aampe", title: "Sr. Content Strategist", period: "2025–present", tags: ["Content Maps", "Taxonomy", "AI Messaging"] },
  { co: "PayU / LazyPay", title: "UX Writer & Content Strategist", period: "2021–2024", tags: ["UX Writing", "Repayments", "LazyCard"] },
  { co: "GoIbibo", title: "Content Designer", period: "2019–2021", tags: ["Consumer App", "Chatbot", "Loyalty"] },
];

export function M2About() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" />
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#FFFFFF", fontFamily: "'Plus Jakarta Sans', sans-serif", color: INK, display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* About hero */}
        <section style={{ padding: "32px 60px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, borderBottom: `1px solid ${BORDER}` }}>
          <div>
            <div style={{ backgroundColor: ACCENT2, borderRadius: 100, display: "inline-flex", padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.08em", textTransform: "uppercase" }}>About</span>
            </div>
            <h1 style={{ fontWeight: 800, fontSize: 52, lineHeight: 1.0, letterSpacing: "-0.04em", margin: "0 0 24px" }}>
              I build the systems<br />behind good words.
            </h1>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: MUTED, margin: "0 0 16px" }}>
              8 years across AI, fintech, and consumer apps. I specialize in taking complex, tangled systems and turning them into clear, purposeful language — whether that's a company-wide messaging methodology or a single critical UX flow.
            </p>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: MUTED, margin: 0 }}>
              At Aampe I built the Content Maps methodology (credited in a $90K deal), resolved a 3-year product taxonomy problem, and authored the Content Playbook used company-wide.
            </p>
          </div>
          <div style={{ backgroundColor: ACCENT2, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 220 }}>
            <div style={{ width: 140, height: 180, backgroundColor: "#B8DDD7", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 10, color: "#4A9589", letterSpacing: "0.08em", textTransform: "uppercase" }}>Photo</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section style={{ padding: "32px 60px 0" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: MUTED, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Experience</p>
          {roles.map((r, i) => (
            <div key={r.co} style={{ display: "grid", gridTemplateColumns: "180px 1fr auto", gap: 24, alignItems: "start", padding: "18px 0", borderTop: `1px solid ${BORDER}` }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: 14, margin: "0 0 3px", letterSpacing: "-0.01em" }}>{r.co}</p>
                <p style={{ fontSize: 12, color: MUTED, margin: 0, fontWeight: 400 }}>{r.period}</p>
              </div>
              <p style={{ fontSize: 13, color: ACCENT, fontWeight: 600, margin: 0 }}>{r.title}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
                {r.tags.map(t => (
                  <span key={t} style={{ fontSize: 10, fontWeight: 600, backgroundColor: ACCENT2, color: ACCENT, padding: "4px 10px", borderRadius: 100, letterSpacing: "0.04em" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <div style={{ padding: "20px 60px", borderTop: `1px solid ${BORDER}`, marginTop: "auto", display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["Content Strategy", "UX Writing", "Messaging Systems", "AI Content", "Information Architecture", "0→1 Frameworks"].map(s => (
            <span key={s} style={{ fontSize: 11, fontWeight: 500, padding: "5px 14px", border: `1px solid ${BORDER}`, borderRadius: 100, color: "#444" }}>{s}</span>
          ))}
        </div>
      </div>
    </>
  );
}
