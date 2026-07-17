import { useState } from "react";

const XP = {
  titleBarGrad: "linear-gradient(180deg, #4e9de1 0%, #4e9de1 3%, #2c6fce 8%, #1a57bf 40%, #1248b0 60%, #0e3ea8 90%, #0a3494 100%)",
  titleBarInactive: "linear-gradient(180deg, #9db5c8 0%, #7a96b0 8%, #6888a0 40%, #5f7c94 60%, #587088 90%, #506880 100%)",
  taskbar: "linear-gradient(180deg, #245edb 0%, #1f5ad6 4%, #1a52ca 50%, #1248b8 95%, #0e3ea8 100%)",
  startBtn: "linear-gradient(180deg, #5ec03e 0%, #4ab030 8%, #3aa020 50%, #2d9018 90%, #268012 100%)",
  windowBorder: "#0a3494",
  windowBody: "#ece9d8",
  gray: "#d4d0c8",
  darkGray: "#808080",
  blissTop: "#3a8fd4",
  blissMid: "#6ab8e8",
};

const projects = [
  { name: "Product Taxonomy", year: "2025", context: "Aampe" },
  { name: "Content Maps", year: "2025", context: "Aampe" },
  { name: "Improving Repayment Rates", year: "2023", context: "LazyPay" },
  { name: "Fintech Content Overhaul", year: "2025", context: "US Fintech" },
  { name: "Sports League Training", year: "2025", context: "US Sports" },
  { name: "Tax App Onboarding", year: "2025", context: "EU Fintech" },
];

const aboutText = `Mohana Das - About Me
=====================

Hi, I'm Mohana 👋

writer. content strategist. product thinker.

With 12 years of experience across engineering,
design and writing, I help craft a holistic
customer experience through content strategy,
product positioning, and value frameworks.

Based in Tokyo, JP (fully remote)

---------------------------------------------

WHAT I DO
---------
- Content Strategy
- UX Writing & Product Copy
- Product Positioning
- Value Frameworks
- Client Onboarding & Training

EXPERIENCE
----------
Content Strategist @ Aampe (2024–present)
Content Designer @ LazyPay/PayU (2022–2024)
UI/UX Writer @ OYO (2021–2022)
Senior Copywriter @ Mirum India (2019–2021)

---------------------------------------------

"Customers understand the mental model —
messages, parts, variants, labels — but
not the vocabulary."

---------------------------------------------

[Download Resume]        [Contact Me]
`;

export function WinXPPortfolio() {
  const [activeWindow, setActiveWindow] = useState<"notepad" | "explorer" | null>("notepad");

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: "100vh",
        fontFamily: "'Tahoma', 'MS Sans Serif', sans-serif",
        fontSize: "11px",
        userSelect: "none",
        cursor: "default",
      }}
    >
      {/* Bliss wallpaper */}
      <Bliss />

      {/* Desktop icons — left side */}
      <div className="absolute top-4 left-4 flex flex-col gap-5">
        <DesktopIcon icon="💻" label="My Computer" />
        <DesktopIcon icon="📁" label="My Documents" />
        <DesktopIcon icon="🌐" label="Internet Explorer" />
        <DesktopIcon icon="🗑️" label="Recycle Bin" />
        <div style={{ marginTop: 16 }}>
          <DesktopIcon icon="📄" label="about.txt" active />
          <div style={{ marginTop: 20 }}>
            <DesktopIcon icon="📂" label="Work" active />
          </div>
        </div>
      </div>

      {/* Notepad window — About */}
      <NotepadWindow
        title="about.txt - Notepad"
        content={aboutText}
        style={{ top: 30, left: 180, width: 420, height: 500 }}
        focused={activeWindow === "notepad"}
        onFocus={() => setActiveWindow("notepad")}
        onClose={() => setActiveWindow("explorer")}
      />

      {/* Explorer window — Work */}
      <ExplorerWindow
        style={{ top: 80, left: 440, width: 700, height: 480 }}
        focused={activeWindow === "explorer"}
        onFocus={() => setActiveWindow("explorer")}
        onClose={() => setActiveWindow("notepad")}
      />

      {/* Taskbar */}
      <Taskbar activeWindow={activeWindow} onSelectWindow={setActiveWindow} />
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */
/* Bliss wallpaper                                           */
/* ────────────────────────────────────────────────────────── */
function Bliss() {
  return (
    <div className="absolute inset-0">
      {/* Sky */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #2172c2 0%, #4a9fd8 35%, #74bde8 60%, #a8d8f0 80%, #c8eaf8 100%)",
        }}
      />
      {/* Clouds */}
      <div className="absolute" style={{ top: "8%", left: "15%", opacity: 0.9 }}>
        <Cloud w={160} h={55} />
      </div>
      <div className="absolute" style={{ top: "5%", left: "60%", opacity: 0.85 }}>
        <Cloud w={220} h={70} />
      </div>
      <div className="absolute" style={{ top: "18%", left: "40%", opacity: 0.75 }}>
        <Cloud w={130} h={42} />
      </div>
      <div className="absolute" style={{ top: "12%", right: "8%", opacity: 0.8 }}>
        <Cloud w={100} h={36} />
      </div>

      {/* Green hills */}
      <svg
        viewBox="0 0 1280 400"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full"
        style={{ height: "55%" }}
      >
        <defs>
          <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6dbf4e" />
            <stop offset="60%" stopColor="#4aa830" />
            <stop offset="100%" stopColor="#3a9020" />
          </linearGradient>
          <linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#82cc60" />
            <stop offset="100%" stopColor="#52a838" />
          </linearGradient>
          <linearGradient id="hillBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4aa830" />
            <stop offset="100%" stopColor="#2a7818" />
          </linearGradient>
        </defs>
        {/* Background fill */}
        <rect x="0" y="0" width="1280" height="400" fill="url(#hillBg)" />
        {/* Main rolling hill */}
        <path
          d="M0,240 C120,180 280,100 480,140 C640,170 720,90 900,120 C1060,145 1180,200 1280,180 L1280,400 L0,400 Z"
          fill="url(#hill1)"
        />
        {/* Secondary hill highlight */}
        <path
          d="M0,280 C80,260 200,230 380,250 C520,265 620,220 780,240 C920,258 1060,270 1280,250 L1280,400 L0,400 Z"
          fill="url(#hill2)"
          opacity="0.6"
        />
        {/* Ground shadow at bottom */}
        <path
          d="M0,340 C200,320 500,310 800,325 C1000,335 1150,340 1280,330 L1280,400 L0,400 Z"
          fill="#2a7818"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

function Cloud({ w, h }: { w: number; h: number }) {
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <ellipse cx={w * 0.5} cy={h * 0.65} rx={w * 0.48} ry={h * 0.35} fill="white" opacity="0.95" />
      <ellipse cx={w * 0.3} cy={h * 0.55} rx={w * 0.28} ry={h * 0.4} fill="white" opacity="0.95" />
      <ellipse cx={w * 0.65} cy={h * 0.5} rx={w * 0.24} ry={h * 0.38} fill="white" opacity="0.95" />
      <ellipse cx={w * 0.5} cy={h * 0.45} rx={w * 0.22} ry={h * 0.32} fill="white" opacity="0.9" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────── */
/* Desktop icon                                              */
/* ────────────────────────────────────────────────────────── */
function DesktopIcon({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1" style={{ width: 72, textAlign: "center" }}>
      <div
        style={{
          fontSize: 36,
          lineHeight: 1,
          filter: "drop-shadow(1px 2px 3px rgba(0,0,0,0.45))",
        }}
      >
        {icon}
      </div>
      <span
        style={{
          color: "white",
          fontSize: 11,
          fontFamily: "Tahoma, sans-serif",
          textShadow: "1px 1px 2px rgba(0,0,0,0.9), -1px -1px 2px rgba(0,0,0,0.6)",
          lineHeight: 1.3,
          padding: active ? "1px 3px" : 0,
          background: active ? "rgba(50,100,200,0.5)" : "transparent",
          border: active ? "1px dotted rgba(255,255,255,0.7)" : "1px solid transparent",
          borderRadius: 1,
          display: "inline-block",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */
/* Window chrome wrapper                                     */
/* ────────────────────────────────────────────────────────── */
function Window({
  title,
  focused,
  onFocus,
  onClose,
  style,
  children,
  iconEmoji = "🪟",
}: {
  title: string;
  focused: boolean;
  onFocus: () => void;
  onClose: () => void;
  style: React.CSSProperties;
  children: React.ReactNode;
  iconEmoji?: string;
}) {
  return (
    <div
      onClick={onFocus}
      className="absolute flex flex-col"
      style={{
        ...style,
        border: `3px solid ${focused ? XP.windowBorder : "#7a8ea0"}`,
        borderRadius: "8px 8px 4px 4px",
        boxShadow: focused
          ? "4px 4px 12px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.15)"
          : "2px 2px 6px rgba(0,0,0,0.3)",
        zIndex: focused ? 20 : 10,
        overflow: "hidden",
        fontFamily: "Tahoma, sans-serif",
        fontSize: 11,
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-2"
        style={{
          background: focused ? XP.titleBarGrad : XP.titleBarInactive,
          minHeight: 28,
          flexShrink: 0,
        }}
      >
        <div className="flex items-center gap-1.5">
          <span style={{ fontSize: 14 }}>{iconEmoji}</span>
          <span
            className="font-bold text-white"
            style={{ fontSize: 12, textShadow: "1px 1px 2px rgba(0,0,0,0.7)" }}
          >
            {title}
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <TitleBtn action="min" focused={focused} />
          <TitleBtn action="max" focused={focused} />
          <TitleBtn action="close" focused={focused} onClick={onClose} />
        </div>
      </div>
      {children}
    </div>
  );
}

function TitleBtn({ action, focused, onClick }: { action: "min" | "max" | "close"; focused: boolean; onClick?: () => void }) {
  const configs = {
    min: { bg: focused ? "linear-gradient(180deg,#4a9de8 0%,#2870cc 100%)" : "linear-gradient(180deg,#9ab 0%,#789 100%)", icon: "─", size: 12 },
    max: { bg: focused ? "linear-gradient(180deg,#4a9de8 0%,#2870cc 100%)" : "linear-gradient(180deg,#9ab 0%,#789 100%)", icon: "□", size: 12 },
    close: { bg: focused ? "linear-gradient(180deg,#d84040 0%,#b02020 100%)" : "linear-gradient(180deg,#9ab 0%,#789 100%)", icon: "✕", size: 12 },
  };
  const c = configs[action];
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick?.(); }}
      className="flex items-center justify-center font-bold text-white"
      style={{
        width: 21,
        height: 21,
        background: c.bg,
        border: "1px solid rgba(0,0,0,0.4)",
        borderRadius: 3,
        fontSize: c.size,
        cursor: "default",
        boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.4), inset -1px -1px 0 rgba(0,0,0,0.2)",
        lineHeight: 1,
      }}
    >
      {c.icon}
    </button>
  );
}

/* ────────────────────────────────────────────────────────── */
/* Notepad window                                            */
/* ────────────────────────────────────────────────────────── */
function NotepadWindow({ title, content, style, focused, onFocus, onClose }: any) {
  return (
    <Window title={title} focused={focused} onFocus={onFocus} onClose={onClose} style={style} iconEmoji="📄">
      {/* Menu bar */}
      <div
        className="flex items-center px-1"
        style={{ background: XP.gray, borderBottom: `1px solid ${XP.darkGray}`, height: 22, flexShrink: 0 }}
      >
        {["File", "Edit", "Format", "View", "Help"].map((m) => (
          <button
            key={m}
            style={{ padding: "1px 6px", background: "none", border: "none", cursor: "default", fontSize: 11, fontFamily: "Tahoma, sans-serif" }}
          >
            {m}
          </button>
        ))}
      </div>
      {/* Text area */}
      <div
        className="flex-1 overflow-auto"
        style={{ background: "white", padding: "4px 6px" }}
      >
        <pre
          style={{
            fontFamily: "'Lucida Console', 'Courier New', monospace",
            fontSize: 12,
            lineHeight: 1.6,
            color: "#000",
            whiteSpace: "pre-wrap",
            margin: 0,
          }}
        >
          {content}
        </pre>
      </div>
      {/* Status bar */}
      <div
        style={{
          background: XP.gray,
          borderTop: `1px solid ${XP.darkGray}`,
          height: 20,
          display: "flex",
          alignItems: "center",
          padding: "0 8px",
          fontSize: 11,
          color: "#333",
          flexShrink: 0,
        }}
      >
        Ln 1, Col 1
      </div>
    </Window>
  );
}

/* ────────────────────────────────────────────────────────── */
/* Explorer window — Work folder                             */
/* ────────────────────────────────────────────────────────── */
function ExplorerWindow({ style, focused, onFocus, onClose }: any) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Window title="Work - Mohana Das Portfolio" focused={focused} onFocus={onFocus} onClose={onClose} style={style} iconEmoji="📂">
      {/* Menu bar */}
      <div
        className="flex items-center px-1"
        style={{ background: XP.gray, borderBottom: `1px solid ${XP.darkGray}`, height: 22, flexShrink: 0 }}
      >
        {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((m) => (
          <button
            key={m}
            style={{ padding: "1px 6px", background: "none", border: "none", cursor: "default", fontSize: 11, fontFamily: "Tahoma, sans-serif" }}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div
        className="flex items-center gap-1 px-2"
        style={{ background: XP.gray, borderBottom: `1px solid ${XP.darkGray}`, height: 30, flexShrink: 0 }}
      >
        {["← Back", "→ Fwd", "↑ Up"].map((b) => (
          <button
            key={b}
            style={{
              padding: "2px 8px",
              background: "linear-gradient(180deg,#f5f5f5 0%,#e0e0e0 100%)",
              border: "1px solid #aaa",
              borderRadius: 2,
              cursor: "default",
              fontSize: 11,
              boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.8)",
              fontFamily: "Tahoma, sans-serif",
            }}
          >
            {b}
          </button>
        ))}
        <div style={{ flex: 1, marginLeft: 8 }}>
          <div
            style={{
              background: "white",
              border: "1px solid #7f9db9",
              borderRadius: 2,
              padding: "1px 6px",
              fontSize: 11,
              color: "#333",
              fontFamily: "Tahoma, sans-serif",
            }}
          >
            📂 My Computer &gt; My Documents &gt; Work
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          style={{
            width: 160,
            background: "linear-gradient(180deg,#7db3e3 0%,#5a9fd4 100%)",
            borderRight: "1px solid #5585b5",
            flexShrink: 0,
            overflowY: "auto",
          }}
        >
          <XPSidebarSection title="File and Folder Tasks">
            <XPSidebarLink label="📄 Make new folder" />
            <XPSidebarLink label="🌐 Publish folder" />
            <XPSidebarLink label="📧 Share folder" />
          </XPSidebarSection>
          <XPSidebarSection title="Other Places">
            <XPSidebarLink label="🖥️ My Computer" />
            <XPSidebarLink label="📁 My Documents" />
            <XPSidebarLink label="🌐 My Network" />
          </XPSidebarSection>
          <XPSidebarSection title="Details">
            <div style={{ padding: "4px 8px", fontSize: 11, color: "#003580", lineHeight: 1.7 }}>
              <div style={{ fontWeight: "bold" }}>Work</div>
              <div>File Folder</div>
              <div style={{ marginTop: 6 }}>
                <b>Items:</b> {projects.length}
              </div>
            </div>
          </XPSidebarSection>
        </div>

        {/* Icon grid */}
        <div
          className="flex-1 overflow-auto"
          style={{ background: "white", padding: 12 }}
          onClick={() => setSelected(null)}
        >
          <div className="flex flex-wrap gap-4">
            {projects.map((p, i) => (
              <FolderIcon
                key={i}
                label={p.name}
                selected={selected === i}
                onClick={(e) => { e.stopPropagation(); setSelected(i); }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div
        style={{
          background: XP.gray,
          borderTop: `1px solid ${XP.darkGray}`,
          height: 20,
          display: "flex",
          alignItems: "center",
          padding: "0 8px",
          fontSize: 11,
          color: "#333",
          flexShrink: 0,
          gap: 8,
        }}
      >
        <div>{selected !== null ? `1 object selected — ${projects[selected].context}, ${projects[selected].year}` : `${projects.length} objects`}</div>
        <div style={{ marginLeft: "auto" }}>🔒 Local intranet</div>
      </div>
    </Window>
  );
}

function FolderIcon({ label, selected, onClick }: { label: string; selected: boolean; onClick: (e: React.MouseEvent) => void }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center gap-1"
      style={{ width: 80, textAlign: "center", cursor: "default", padding: 4, borderRadius: 2 }}
    >
      {/* Folder icon SVG — XP yellow folder */}
      <svg width="48" height="42" viewBox="0 0 48 42" style={{ filter: selected ? "brightness(0.85)" : "none" }}>
        <path d="M2,10 L18,10 L22,6 L44,6 L44,8 L46,8 L46,38 L2,38 Z" fill="#f0c040" stroke="#c89000" strokeWidth="1" />
        <path d="M2,12 L46,12 L46,38 L2,38 Z" fill="#f8d04a" stroke="#c89000" strokeWidth="1" />
        <path d="M2,12 L46,12" stroke="#ffea80" strokeWidth="1.5" />
        <path d="M2,12 L2,38 L46,38 L46,12" fill="none" stroke="#c89000" strokeWidth="1" />
        {selected && <rect x="2" y="6" width="44" height="32" fill="rgba(49,106,197,0.35)" rx="1" />}
      </svg>
      <span
        style={{
          fontSize: 11,
          fontFamily: "Tahoma, sans-serif",
          lineHeight: 1.3,
          padding: selected ? "1px 3px" : "1px 3px",
          background: selected ? "#316ac5" : "transparent",
          color: selected ? "white" : "#000",
          borderRadius: 1,
          border: selected ? "none" : "1px solid transparent",
          maxWidth: 78,
          wordBreak: "break-word",
          display: "inline-block",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function XPSidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 4 }}>
      <div
        style={{
          background: "linear-gradient(180deg,#4a8fd4 0%,#3278c0 100%)",
          padding: "3px 8px",
          fontWeight: "bold",
          fontSize: 11,
          color: "white",
          textShadow: "0 1px 1px rgba(0,0,0,0.4)",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          borderBottom: "1px solid rgba(0,0,0,0.15)",
        }}
      >
        {title}
      </div>
      <div style={{ background: "rgba(255,255,255,0.12)", padding: "3px 0" }}>
        {children}
      </div>
    </div>
  );
}

function XPSidebarLink({ label }: { label: string }) {
  return (
    <button
      style={{
        display: "block",
        width: "100%",
        textAlign: "left",
        padding: "2px 10px",
        background: "none",
        border: "none",
        cursor: "default",
        fontSize: 11,
        fontFamily: "Tahoma, sans-serif",
        color: "#003580",
        textDecoration: "none",
      }}
    >
      {label}
    </button>
  );
}

/* ────────────────────────────────────────────────────────── */
/* Taskbar                                                   */
/* ────────────────────────────────────────────────────────── */
function Taskbar({ activeWindow, onSelectWindow }: { activeWindow: string | null; onSelectWindow: (w: any) => void }) {
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex items-center gap-1 px-1"
      style={{
        height: 38,
        background: XP.taskbar,
        boxShadow: "0 -2px 0 #0a2a8a, inset 0 2px 0 rgba(255,255,255,0.18)",
        zIndex: 100,
      }}
    >
      {/* Start button */}
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          padding: "2px 12px 2px 8px",
          height: 30,
          background: XP.startBtn,
          border: "1px solid #1a5a00",
          borderRadius: "4px",
          color: "white",
          fontWeight: "bold",
          fontStyle: "italic",
          fontFamily: "Tahoma, sans-serif",
          fontSize: 14,
          cursor: "default",
          boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.35), 1px 1px 4px rgba(0,0,0,0.4)",
          letterSpacing: 0.3,
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 18, fontStyle: "normal" }}>⊞</span>
        start
      </button>

      {/* Divider */}
      <div style={{ width: 1, height: 26, background: "rgba(255,255,255,0.15)", margin: "0 2px" }} />

      {/* Quick launch */}
      <div className="flex items-center gap-1 px-1" style={{ borderRight: "1px solid rgba(255,255,255,0.12)" }}>
        {["🌐", "📁", "🎵"].map((ic) => (
          <button
            key={ic}
            style={{ width: 22, height: 22, background: "none", border: "none", cursor: "default", fontSize: 16 }}
          >
            {ic}
          </button>
        ))}
      </div>

      {/* Active window buttons */}
      <div className="flex items-center gap-1 flex-1 px-2">
        <TaskbarWindowBtn
          icon="📄"
          label="about.txt - Notepad"
          active={activeWindow === "notepad"}
          onClick={() => onSelectWindow("notepad")}
        />
        <TaskbarWindowBtn
          icon="📂"
          label="Work - Mohana Das Portfolio"
          active={activeWindow === "explorer"}
          onClick={() => onSelectWindow("explorer")}
        />
      </div>

      {/* System tray */}
      <div
        className="flex items-center gap-2"
        style={{
          background: "linear-gradient(180deg,#0e3ea8 0%,#1248c8 50%,#0e3ea8 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 2,
          padding: "2px 8px",
          height: 28,
          fontSize: 14,
          flexShrink: 0,
        }}
      >
        <span title="Volume">🔊</span>
        <span title="Network">📶</span>
        <span
          style={{
            color: "white",
            fontSize: 11,
            fontFamily: "Tahoma, sans-serif",
            marginLeft: 4,
            whiteSpace: "nowrap",
          }}
        >
          {time}
        </span>
      </div>
    </div>
  );
}

function TaskbarWindowBtn({ icon, label, active, onClick }: { icon: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 truncate"
      style={{
        height: 26,
        maxWidth: 200,
        padding: "0 8px",
        background: active
          ? "linear-gradient(180deg,#1a52cc 0%,#1248b8 50%,#0e3ea8 100%)"
          : "linear-gradient(180deg,#4a88dc 0%,#2e6ccc 100%)",
        border: active ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(0,0,0,0.25)",
        borderRadius: 3,
        color: "white",
        fontSize: 11,
        fontFamily: "Tahoma, sans-serif",
        cursor: "default",
        boxShadow: active
          ? "inset 1px 1px 0 rgba(0,0,0,0.2)"
          : "inset 1px 1px 0 rgba(255,255,255,0.2)",
        textShadow: "0 1px 1px rgba(0,0,0,0.5)",
      }}
    >
      <span style={{ fontSize: 13, flexShrink: 0 }}>{icon}</span>
      <span className="truncate">{label}</span>
    </button>
  );
}
