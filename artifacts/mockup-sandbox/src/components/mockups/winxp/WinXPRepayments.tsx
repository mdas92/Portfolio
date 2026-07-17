import type { ReactNode } from "react";

const XP = {
  titleBarGrad: "linear-gradient(180deg, #4e9de1 0%, #4e9de1 3%, #2c6fce 8%, #1a57bf 40%, #1248b0 60%, #0e3ea8 90%, #0a3494 100%)",
  taskbar: "linear-gradient(180deg, #245edb 0%, #1f5ad6 4%, #1a52ca 50%, #1248b8 95%, #0e3ea8 100%)",
  startBtn: "linear-gradient(180deg, #5ec03e 0%, #4ab030 8%, #3aa020 50%, #2d9018 90%, #268012 100%)",
  gray: "#d4d0c8",
  darkGray: "#808080",
  windowBorder: "#0a3494",
};

function XPLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ flexShrink: 0 }}>
      <path d="M4,2 C20,0 44,4 47,22 C44,28 28,32 4,28 Z" fill="#F25022" />
      <path d="M53,20 C56,4 72,-2 96,2 L96,28 C72,32 56,28 53,20 Z" fill="#7FBA00" />
      <path d="M4,72 C28,68 44,72 47,78 C44,96 20,100 4,98 Z" fill="#00A4EF" />
      <path d="M53,80 C56,72 72,68 96,72 L96,98 C72,100 56,96 53,80 Z" fill="#FFB900" />
    </svg>
  );
}

export function WinXPRepayments() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: "100vh",
        fontFamily: "'Tahoma', 'MS Sans Serif', sans-serif",
        fontSize: "11px",
        userSelect: "none",
        cursor: "default",
        background: "linear-gradient(180deg,#2172c2 0%,#4a9fd8 35%,#74bde8 60%,#a8d8f0 100%)",
      }}
    >
      {/* Green hills background */}
      <svg viewBox="0 0 1280 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute bottom-0 w-full" style={{ height: "40%" }}>
        <defs>
          <linearGradient id="h1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6dbf4e" /><stop offset="100%" stopColor="#3a9020" /></linearGradient>
        </defs>
        <rect x="0" y="0" width="1280" height="300" fill="#4aa830" />
        <path d="M0,180 C120,140 280,80 480,110 C640,135 720,70 900,95 C1060,115 1180,160 1280,145 L1280,300 L0,300 Z" fill="url(#h1)" />
      </svg>

      {/* Main document window — open, maximised feel */}
      <div
        className="absolute flex flex-col"
        style={{
          top: 20,
          left: 60,
          right: 60,
          bottom: 50,
          border: `3px solid ${XP.windowBorder}`,
          borderRadius: "8px 8px 4px 4px",
          boxShadow: "4px 4px 16px rgba(0,0,0,0.6)",
          overflow: "hidden",
          zIndex: 20,
        }}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-2" style={{ background: XP.titleBarGrad, minHeight: 28, flexShrink: 0 }}>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 40 48">
              <path d="M2,2 L26,2 L38,14 L38,46 L2,46 Z" fill="white" stroke="#bbb" strokeWidth="2" />
              <path d="M26,2 L26,14 L38,14 Z" fill="#ddd" />
              <rect x="4" y="18" width="32" height="22" rx="1" fill="#2b5eb8" />
              <text x="20" y="34" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial">W</text>
            </svg>
            <span className="font-bold text-white" style={{ fontSize: 12, textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}>
              Improving Repayment Rates.doc — Microsoft Word
            </span>
          </div>
          <div className="flex items-center gap-0.5">
            {(["─","□","✕"] as const).map((icon, i) => (
              <button key={i} className="flex items-center justify-center font-bold text-white" style={{ width: 21, height: 21, background: i === 2 ? "linear-gradient(180deg,#d84040 0%,#b02020 100%)" : "linear-gradient(180deg,#4a9de8 0%,#2870cc 100%)", border: "1px solid rgba(0,0,0,0.4)", borderRadius: 3, fontSize: 12, cursor: "default", boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.4)" }}>{icon}</button>
            ))}
          </div>
        </div>

        {/* Word-style menu bar */}
        <div className="flex items-center px-1" style={{ background: XP.gray, borderBottom: `1px solid ${XP.darkGray}`, height: 22, flexShrink: 0 }}>
          {["File","Edit","View","Insert","Format","Tools","Table","Window","Help"].map(m => (
            <button key={m} style={{ padding: "1px 6px", background: "none", border: "none", cursor: "default", fontSize: 11, fontFamily: "Tahoma,sans-serif" }}>{m}</button>
          ))}
        </div>

        {/* Word-style toolbar */}
        <div className="flex items-center gap-1 px-2" style={{ background: XP.gray, borderBottom: `1px solid ${XP.darkGray}`, height: 28, flexShrink: 0 }}>
          {["💾","🖨️","👁️","✂️","📋","↩️","↪️"].map((ic, i) => (
            <button key={i} style={{ width: 22, height: 22, background: "none", border: "1px solid transparent", borderRadius: 2, cursor: "default", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>{ic}</button>
          ))}
          <div style={{ width: 1, height: 18, background: "#aaa", margin: "0 2px" }} />
          <select style={{ height: 20, fontSize: 11, fontFamily: "Tahoma,sans-serif", border: "1px solid #aaa", background: "white" }}>
            <option>Tahoma</option>
          </select>
          <select style={{ height: 20, fontSize: 11, border: "1px solid #aaa", background: "white", width: 40 }}>
            <option>12</option>
          </select>
          <div style={{ width: 1, height: 18, background: "#aaa", margin: "0 2px" }} />
          <button style={{ width: 22, height: 22, background: "none", border: "1px solid transparent", cursor: "default", fontWeight: "bold", fontFamily: "Tahoma,sans-serif", fontSize: 12 }}>B</button>
          <button style={{ width: 22, height: 22, background: "none", border: "1px solid transparent", cursor: "default", fontStyle: "italic", fontFamily: "Tahoma,sans-serif", fontSize: 12 }}>I</button>
          <button style={{ width: 22, height: 22, background: "none", border: "1px solid transparent", cursor: "default", textDecoration: "underline", fontFamily: "Tahoma,sans-serif", fontSize: 12 }}>U</button>
        </div>

        {/* Ruler */}
        <div style={{ background: XP.gray, height: 16, borderBottom: `1px solid ${XP.darkGray}`, flexShrink: 0, display: "flex", alignItems: "center", paddingLeft: 200, overflow: "hidden" }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} style={{ width: 48, flexShrink: 0, borderLeft: "1px solid #aaa", height: i % 2 === 0 ? 8 : 5, fontSize: 9, color: "#666", display: "flex", alignItems: "flex-end", paddingLeft: 2 }}>
              {i % 2 === 0 ? i / 2 + 1 : ""}
            </div>
          ))}
        </div>

        {/* Document body */}
        <div className="flex-1 overflow-auto" style={{ background: "#888", padding: "24px 0" }}>
          <div
            style={{
              width: 740,
              minHeight: 1000,
              margin: "0 auto",
              background: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
              padding: "72px 80px",
              fontFamily: "Times New Roman, serif",
              fontSize: 13,
              lineHeight: 1.7,
              color: "#000",
            }}
          >
            {/* Document header */}
            <p style={{ fontSize: 10, color: "#888", fontFamily: "Tahoma,sans-serif", marginBottom: 32, borderBottom: "1px solid #ddd", paddingBottom: 8 }}>
              Mohana Das — Portfolio Case Study &nbsp;|&nbsp; LazyPay (PayU Finance) &nbsp;|&nbsp; 2022–2023
            </p>

            {/* Title */}
            <h1 style={{ fontSize: 26, fontWeight: "bold", fontFamily: "Arial, sans-serif", marginBottom: 6, color: "#0a246a", lineHeight: 1.2 }}>
              Improving Repayment Rates
            </h1>
            <p style={{ fontSize: 12, color: "#555", fontFamily: "Tahoma,sans-serif", marginBottom: 28, borderBottom: "2px solid #0a246a", paddingBottom: 12 }}>
              Content Strategy · Fintech &nbsp;·&nbsp; Content Strategist — Problem Identification, Multi-level Solution Design &nbsp;·&nbsp; 1 month · L project
            </p>

            {/* Summary box */}
            <div style={{ background: "#f0f4ff", border: "1px solid #b0c4de", padding: "12px 16px", marginBottom: 28, borderLeft: "4px solid #0a246a" }}>
              <p style={{ margin: 0, fontStyle: "italic" }}>
                Content and design interventions to drive on-time repayments — a three-pronged strategy targeting discoverability, urgency, and transparency.
              </p>
            </div>

            <DocSection title="The Challenge">
              <p>High repayment rates signal user trust and reduce risk for the business. The rate was especially poor among <strong>new users — 45% were not repaying on time.</strong> Of these, 23% were opening the app during the repayment window but still not paying, while the rest were not opening the app at all.</p>
            </DocSection>

            <DocSection title="Defining the Problem">
              <p>Through research and data analysis, the team identified several root causes behind late repayment:</p>
              <ul style={{ paddingLeft: 24, marginTop: 8 }}>
                <li>Users <strong>lacked awareness of late fees</strong> — the cost of not paying wasn't visible upfront.</li>
                <li>They knew repayment was important, but <strong>it never felt urgent.</strong></li>
                <li>Reminders were perceived as <strong>boring and robotic,</strong> easy to tune out.</li>
                <li><strong>New users had the same experience as mature users,</strong> despite being unfamiliar with the process.</li>
              </ul>
              <p style={{ marginTop: 12, fontStyle: "italic", color: "#555", fontSize: 11 }}>
                I mapped the problem to four core questions any repayment touchpoint needed to answer: how much to pay, when to pay, why to pay, and the level of urgency.
              </p>
            </DocSection>

            <DocSection title="Solution Strategy">
              <p>I reviewed the existing UI screens and notifications, then designed a <strong>three-pronged strategy</strong> covering every touchpoint in the user's repayment journey:</p>
              <ul style={{ paddingLeft: 24, marginTop: 8 }}>
                <li><strong>Discoverability</strong> — Many users claimed not to be aware of their dues and due dates. The current in-app notification was very missable, blending into the rest of the UI.</li>
                <li><strong>Urgency</strong> — Some users reported having seen reminders, yet ignored them or put them off for later. There was also no noticeable difference in UI after missing the due date.</li>
                <li><strong>Transparency</strong> — Late fees and consequences of not repaying were not given upfront. The information hierarchy on the repayment page was vague, with no clear call to action.</li>
              </ul>
            </DocSection>

            <DocSection title="A Content-First Design Approach">
              <p>First, we rethought the notification displayed on the homescreen. I applied a content design approach to determine what information users actually need, and in what order. The key change was surfacing consequences plainly once a due date was breached:</p>
              <div style={{ background: "#fffbe6", border: "1px solid #e0c840", padding: "10px 16px", margin: "12px 0", fontFamily: "Tahoma,sans-serif", fontSize: 12 }}>
                <div style={{ fontWeight: "bold", color: "#c84000", marginBottom: 4 }}>DUE SINCE 3 AUG · ₹2,464.7 overdue</div>
                <div style={{ color: "#333" }}>⚠ Late fee: ₹150 &nbsp;·&nbsp; ⚠ Credit score impact &nbsp;·&nbsp; ⚠ Transactions blocked</div>
                <div style={{ marginTop: 8 }}><button style={{ background: "#c84000", color: "white", border: "none", padding: "4px 16px", fontFamily: "Tahoma,sans-serif", fontSize: 12, cursor: "default" }}>Pay Now</button></div>
              </div>
            </DocSection>

            <DocSection title="Before & After">
              <p>The redesign moved from a <strong>low-contrast dark homescreen</strong> where dues were easy to miss, to a <strong>content-led light UI</strong> that leads with the due amount, date, and consequences.</p>
              <div style={{ display: "flex", gap: 24, marginTop: 16, padding: 16, background: "#f5f5f5", border: "1px solid #ddd" }}>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ background: "#222", height: 160, borderRadius: 4, display: "flex", alignItems: "flex-end", padding: 8 }}>
                    <div style={{ background: "#333", width: "100%", padding: 6, borderRadius: 2, color: "#aaa", fontSize: 10, fontFamily: "Tahoma,sans-serif" }}>Activity tab · dues buried below</div>
                  </div>
                  <p style={{ fontSize: 10, fontFamily: "Tahoma,sans-serif", color: "#666", marginTop: 6 }}>BEFORE — Dark homescreen, dues missable</p>
                </div>
                <div style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ background: "#f8f8f8", border: "1px solid #ddd", height: 160, borderRadius: 4, display: "flex", flexDirection: "column", alignItems: "flex-start", padding: 8, gap: 6 }}>
                    <div style={{ background: "#e8f0ff", width: "100%", padding: "6px 8px", borderRadius: 2, borderLeft: "3px solid #0a246a", fontSize: 10, fontFamily: "Tahoma,sans-serif", color: "#0a246a", fontWeight: "bold" }}>DUE BY 3 AUG · ₹7,540 due</div>
                    <div style={{ fontSize: 9, fontFamily: "Tahoma,sans-serif", color: "#555", padding: "0 4px" }}>Avoid ₹150 late fee. Repay now →</div>
                  </div>
                  <p style={{ fontSize: 10, fontFamily: "Tahoma,sans-serif", color: "#666", marginTop: 6 }}>AFTER — Light UI, dues impossible to miss</p>
                </div>
              </div>
            </DocSection>

            <DocSection title="Result">
              <p>Delivered a full three-strategy solution across all repayment touchpoints, with a primary success target of a <strong>10% improvement in on-time repayment rate</strong> based on analyst modelling.</p>
            </DocSection>

            {/* Page number */}
            <div style={{ marginTop: 48, textAlign: "center", fontSize: 10, color: "#aaa", fontFamily: "Tahoma,sans-serif", borderTop: "1px solid #eee", paddingTop: 12 }}>
              — 1 — &nbsp;|&nbsp; Mohana Das Portfolio &nbsp;|&nbsp; Confidential
            </div>
          </div>
        </div>

        {/* Word status bar */}
        <div style={{ background: XP.gray, borderTop: `1px solid ${XP.darkGray}`, height: 20, display: "flex", alignItems: "center", padding: "0 8px", fontSize: 11, color: "#333", flexShrink: 0, gap: 16 }}>
          <span>Page 1 of 2</span>
          <span>Words: 312</span>
          <span>English (UK)</span>
          <span style={{ marginLeft: "auto" }}>🔍 100% &nbsp; ⬛⬛⬜⬜⬜</span>
        </div>
      </div>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-1 px-1" style={{ height: 38, background: XP.taskbar, boxShadow: "0 -2px 0 #0a2a8a, inset 0 2px 0 rgba(255,255,255,0.18)", zIndex: 100 }}>
        <button style={{ display: "flex", alignItems: "center", gap: 5, padding: "2px 12px 2px 8px", height: 30, background: XP.startBtn, border: "1px solid #1a5a00", borderRadius: 4, color: "white", fontWeight: "bold", fontStyle: "italic", fontFamily: "Tahoma,sans-serif", fontSize: 14, cursor: "default", boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.35)", flexShrink: 0 }}>
          <XPLogo size={18} />
          start
        </button>
        <div style={{ width: 1, height: 26, background: "rgba(255,255,255,0.15)", margin: "0 2px" }} />
        <div className="flex items-center gap-1 flex-1 px-2">
          <button style={{ height: 26, padding: "0 10px", display: "flex", alignItems: "center", gap: 6, background: "linear-gradient(180deg,#1a52cc 0%,#0e3ea8 100%)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 3, color: "white", fontSize: 11, fontFamily: "Tahoma,sans-serif", cursor: "default", boxShadow: "inset 1px 1px 0 rgba(0,0,0,0.2)", textShadow: "0 1px 1px rgba(0,0,0,0.5)" }}>
            <span>📄</span><span>Improving Repayment Rates.doc — Microsoft Word</span>
          </button>
          <button style={{ height: 26, padding: "0 10px", display: "flex", alignItems: "center", gap: 6, background: "linear-gradient(180deg,#4a88dc 0%,#2e6ccc 100%)", border: "1px solid rgba(0,0,0,0.25)", borderRadius: 3, color: "white", fontSize: 11, fontFamily: "Tahoma,sans-serif", cursor: "default", boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.2)", textShadow: "0 1px 1px rgba(0,0,0,0.5)" }}>
            <span>📂</span><span>Work - Mohana Das Portfolio</span>
          </button>
        </div>
        <div style={{ background: "linear-gradient(180deg,#0e3ea8 0%,#1248c8 50%,#0e3ea8 100%)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 2, padding: "2px 8px", height: 28, display: "flex", alignItems: "center", gap: 8, fontSize: 14, flexShrink: 0 }}>
          <span>🔊</span><span>📶</span>
          <span style={{ color: "white", fontSize: 11, fontFamily: "Tahoma,sans-serif", marginLeft: 4, whiteSpace: "nowrap" }}>{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
        </div>
      </div>
    </div>
  );
}

function DocSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ fontSize: 14, fontWeight: "bold", fontFamily: "Arial,sans-serif", color: "#0a246a", marginBottom: 8, borderBottom: "1px solid #ccd", paddingBottom: 4 }}>{title}</h2>
      {children}
    </div>
  );
}
