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
          color: item === "About" ? "#fff" : MUTED,
          backgroundColor: item === "About" ? ACCENT : "transparent",
          padding: "8px 22px", borderRadius: 100, cursor: "pointer"
        }}>{item}</span>
      ))}
    </div>
  </nav>
);

const journey = [
  { date: "Nov 2024 – Present", role: "Content Strategist", company: "Aampe", description: "Building message content for consumer apps across fintech, sports, travel, food delivery, and fitness — designing label architectures, value proposition frameworks, and message variants to help clients unlock agentic optimisation. Alongside client work, translating practitioner insight into formal product pitches and UX feedback." },
  { date: "Jan 2022 – Oct 2024 · 3 years", role: "Lead UX Writer", company: "PayU · LazyPay, PayU Finance", description: "Spearheading content strategy and design for LazyPay across touchpoints." },
  { date: "Oct 2021 – Dec 2021 · 3 months", role: "Senior UX Writer", company: "PayU Finance", description: "First and only UX Writer at PayU Finance. Owned UX writing for LazyPay, defined content guidelines, and advocated for content design across the org." },
  { date: "Oct 2020 – Sep 2021 · 1 year", role: "UX Writer & Copywriter", company: "Freelance · Spotdraft (part-time)", description: "Transitioned into UX writing. Worked on copywriting and social media content with various agencies." },
  { date: "Jul 2019 – Sep 2020 · 1 year", role: "Senior UX Designer", company: "GoIbibo", description: "Designed end-to-end user experience for GoIbibo's homescreen, chatbot, and loyalty program GoTribe." },
  { date: "Jul 2014 – Jul 2019 · 5 years", role: "Software Engineer → UX Designer", company: "Adobe", description: "Started as a Quality Engineer straight out of college. After 3.5 years, moved laterally into a UX Design role — singlehandedly taking over design for a new B2B e-learning product." },
];

export function M2About() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap" />
      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#fff", fontFamily: "'DM Sans', sans-serif", color: INK, display: "flex", flexDirection: "column" }}>
        <Nav />

        {/* About hero */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, padding: "12px 56px 40px", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ paddingRight: 48 }}>
            <div style={{ display: "inline-flex", backgroundColor: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}`, borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: ACCENT, letterSpacing: "0.06em", textTransform: "uppercase" }}>hi, i'm mohana 👋</span>
            </div>
            <h1 style={{ fontFamily: "'Londrina Solid', cursive", fontWeight: 400, fontSize: 64, lineHeight: 1.0, letterSpacing: "0.01em", margin: "0 0 24px", color: INK }}>
              writer<span style={{ color: ACCENT }}>.</span> content<br />
              strategist<span style={{ color: ACCENT }}>.</span><br />
              <span style={{ fontFamily: "'Londrina Solid', cursive", fontWeight: 100 }}>product thinker</span><span style={{ color: ACCENT }}>.</span>
            </h1>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: MUTED, margin: "0 0 12px" }}>
              With 12 years of experience across engineering, design and writing, I help craft a holistic customer experience through content strategy, product positioning, and value frameworks.
            </p>
            <p style={{ fontSize: 14, fontWeight: 400, color: MUTED, margin: "0 0 24px" }}>Based in Tokyo, JP (fully remote)</p>
            <a href="#" style={{ display: "inline-block", backgroundColor: ACCENT, color: "#fff", padding: "12px 26px", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, borderRadius: 10, cursor: "pointer", textDecoration: "none" }}>Download Resume ↗</a>
          </div>
          <div style={{ backgroundColor: ACCENT_LIGHT, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 150, height: 190, backgroundColor: "#C8B2F0", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 10, fontFamily: "'DM Sans', sans-serif", color: "#7C4DB8", letterSpacing: "0.08em", textTransform: "uppercase" }}>Photo</span>
            </div>
          </div>
        </section>

        {/* What I do */}
        <section style={{ padding: "28px 56px 24px", borderBottom: `1px solid ${BORDER}`, display: "grid", gridTemplateColumns: "160px 1fr", gap: 32 }}>
          <span style={{ fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: MUTED, letterSpacing: "0.16em", textTransform: "uppercase", paddingTop: 3 }}>What I do</span>
          <div>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: "#444", margin: "0 0 12px" }}>
              I work at an AI-powered lifecycle marketing platform, building content strategy for consumer apps across fintech, sports, travel, food delivery, and fitness. My work spans designing label architectures, value proposition frameworks, and thousands of message variants — helping brands unlock the full potential of agentic optimisation.
            </p>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: "#444", margin: 0 }}>
              Alongside client work, I build internal tools, create training resources, and translate practitioner insights into formal product pitches. Before this, I was the first and only UX Writer at LazyPay (PayU Finance), where I built the content design practice from the ground up — owning conversation design, information architecture, and microcopy across a fintech product reaching millions of users across India.
            </p>
          </div>
        </section>

        {/* Career */}
        <section style={{ padding: "24px 56px 32px" }}>
          <span style={{ fontSize: 10, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: MUTED, letterSpacing: "0.16em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>Career</span>
          {journey.slice(0, 3).map((j, i) => (
            <div key={j.company + j.date} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, padding: "14px 0", borderTop: `1px solid ${BORDER}` }}>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, margin: "0 0 2px", color: INK }}>{j.company}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: ACCENT, fontWeight: 500, margin: "0 0 2px" }}>{j.role}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: MUTED, margin: 0 }}>{j.date}</p>
              </div>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.65, color: "#555", margin: 0 }}>{j.description}</p>
            </div>
          ))}
          <p style={{ fontSize: 12, color: ACCENT, fontWeight: 600, marginTop: 12, cursor: "pointer" }}>Full career history →</p>
        </section>
      </div>
    </>
  );
}
