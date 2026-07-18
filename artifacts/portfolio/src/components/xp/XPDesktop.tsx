import { useState, useCallback, useEffect } from "react";
import { XPWindow } from "./XPWindow";
import { XPExplorer } from "./XPExplorer";
import { XPNotepad } from "./XPNotepad";
import { XPWord } from "./XPWord";

type WinType = "explorer" | "about" | "contact" | "word" | "welcome";

interface WinState {
  id: string;
  type: WinType;
  title: string;
  icon: string;
  x: number;
  y: number;
  width: number;
  height: number;
  z: number;
  minimized: boolean;
  maximized: boolean;
  slug?: string;
}

let Z = 20;

const SKY = "linear-gradient(180deg,#1a5fb4 0%,#3584d4 25%,#5ba0de 50%,#88c0ec 75%,#b8d8f4 100%)";
const TASKBAR_BG = "linear-gradient(180deg,#245edb 0%,#1f5ad6 4%,#1a52ca 50%,#1248b8 95%,#0e3ea8 100%)";
const START_BG = "linear-gradient(180deg,#5ec03e 0%,#4ab030 8%,#3aa020 50%,#2d9018 90%,#268012 100%)";

function XPLogo({ size = 18 }: { size?: number }) {
  return (
    <img src="/xp-logo.png" width={size} height={size} style={{ flexShrink: 0, display: "block" }} alt="" />
  );
}

function DesktopIcon({
  emoji, label, selected, onSelect, onOpen,
}: {
  emoji: string; label: string; selected: boolean;
  onSelect: () => void; onOpen: () => void;
}) {
  return (
    <div
      style={{ width: 72, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "6px 4px", borderRadius: 4, cursor: "default", userSelect: "none" }}
      onClick={e => { e.stopPropagation(); onSelect(); }}
      onDoubleClick={e => { e.stopPropagation(); onOpen(); }}
    >
      <div style={{ fontSize: 40, lineHeight: 1, filter: selected ? "drop-shadow(0 0 4px rgba(255,255,255,0.9))" : "none" }}>
        {emoji}
      </div>
      <span style={{
        color: "white",
        fontSize: 11,
        fontFamily: "Tahoma,sans-serif",
        textShadow: "1px 1px 3px rgba(0,0,0,0.95), 0 0 6px rgba(0,0,0,0.8)",
        textAlign: "center",
        lineHeight: 1.3,
        background: selected ? "rgba(49,106,197,0.85)" : "transparent",
        padding: selected ? "1px 4px" : 0,
        borderRadius: 2,
        display: "block",
        maxWidth: 70,
        wordBreak: "break-word",
      }}>{label}</span>
    </div>
  );
}

function StartMenu({
  onOpen,
  onClose,
}: {
  onOpen: (type: WinType, extra?: Partial<WinState>) => void;
  onClose: () => void;
}) {
  const items = [
    { icon: "📁", label: "My Work", type: "explorer" as WinType },
    { icon: "📝", label: "About Me", type: "about" as WinType },
    { icon: "📧", label: "Contact", type: "contact" as WinType },
  ];

  return (
    <div
      style={{
        position: "fixed", bottom: 38, left: 0,
        width: 300, background: "white",
        border: "2px solid #0a3494",
        boxShadow: "4px -4px 14px rgba(0,0,0,0.45)",
        zIndex: 99999, fontFamily: "Tahoma,sans-serif",
        borderRadius: "8px 8px 0 0", overflow: "hidden",
      }}
      onClick={e => e.stopPropagation()}
    >
      {/* Header */}
      <div style={{ background: "linear-gradient(90deg,#0a3494 0%,#1248b0 100%)", padding: "10px 14px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#c45c26,#0d3b2e)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>👩</div>
        <div>
          <div style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>Mohana Das</div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>Content Strategist</div>
        </div>
      </div>

      {/* Programs */}
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, borderRight: "1px solid #ddd", padding: "4px 0" }}>
          <div style={{ fontSize: 9, color: "#888", padding: "4px 12px 2px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "bold" }}>Programs</div>
          {items.map(it => (
            <button
              key={it.type}
              onClick={() => { onOpen(it.type); onClose(); }}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: 10,
                padding: "6px 12px", background: "none", border: "none",
                cursor: "default", fontSize: 12, textAlign: "left",
                fontFamily: "Tahoma,sans-serif",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#316ac5"; (e.currentTarget as HTMLElement).style.color = "white"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "none"; (e.currentTarget as HTMLElement).style.color = ""; }}
            >
              <span style={{ fontSize: 22 }}>{it.icon}</span>
              <span>{it.label}</span>
            </button>
          ))}
          <div style={{ height: 1, background: "#ccc", margin: "4px 8px" }} />
          <button
            style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "6px 12px", background: "none", border: "none", cursor: "default", fontSize: 12, textAlign: "left", fontFamily: "Tahoma,sans-serif" }}
          >
            <span style={{ fontSize: 22 }}>🔍</span>
            <span>All Programs ▶</span>
          </button>
        </div>
        <div style={{ width: 100, background: "linear-gradient(180deg,#dde8f8 0%,#c0d4ec 100%)", padding: "4px 0" }}>
          {["My Documents","My Computer","Control Panel","Help & Support"].map(l => (
            <div key={l} style={{ fontSize: 10, padding: "5px 8px", cursor: "default", color: "#003", borderBottom: "1px solid rgba(0,0,0,0.05)", lineHeight: 1.3 }}>{l}</div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #ccc", padding: "5px 10px", display: "flex", justifyContent: "flex-end", gap: 4, background: "#f0f0f0" }}>
        <button style={{ fontSize: 11, padding: "2px 10px", border: "1px solid #999", background: "#fff", cursor: "default", fontFamily: "Tahoma,sans-serif" }}>Log Off</button>
        <button style={{ fontSize: 11, padding: "2px 10px", border: "1px solid #999", background: "#fff", cursor: "default", fontFamily: "Tahoma,sans-serif" }}>Shut Down</button>
      </div>
    </div>
  );
}

const WIN_DEFAULTS: Record<WinType, Omit<WinState, "id" | "z" | "minimized" | "maximized" | "slug">> = {
  explorer: { type: "explorer", title: "Mohana Das\\Work - Windows Explorer", icon: "📁", x: 60,  y: 24, width: 780, height: 520 },
  about:    { type: "about",    title: "About Mohana.txt - Notepad",          icon: "📝", x: 180, y: 50, width: 700, height: 520 },
  contact:  { type: "contact",  title: "Contact.txt - Notepad",               icon: "📧", x: 260, y: 70, width: 500, height: 360 },
  word:     { type: "word",     title: "Project.doc - Microsoft Word",        icon: "📄", x: 140, y: 36, width: 880, height: 660 },
  welcome:  { type: "welcome",  title: "Welcome!",                            icon: "🪟", x: 380, y: 140, width: 440, height: 260 },
};

export function XPDesktop() {
  const [windows, setWindows] = useState<WinState[]>(() => {
    const def = WIN_DEFAULTS.welcome;
    const cx = Math.max(0, Math.round((window.innerWidth  - def.width)  / 2));
    const cy = Math.max(0, Math.round((window.innerHeight - def.height) / 2));
    return [{ ...def, id: "welcome", z: ++Z, minimized: false, maximized: false, x: cx, y: cy }];
  });
  const [selIcon, setSelIcon] = useState<string | null>(null);
  const [startOpen, setStartOpen] = useState(false);
  const [clock, setClock] = useState(() => new Date());
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const taskbarH = isMobile ? 48 : 38;
  const maxZ = windows.reduce((m, w) => Math.max(m, w.z), 0);

  const openWin = useCallback((type: WinType, extra?: Partial<WinState>) => {
    const id = type === "word" && extra?.slug ? `word-${extra.slug}` : type;
    setWindows(ws => {
      const existing = ws.find(w => w.id === id);
      if (existing) {
        return ws.map(w => w.id === id ? { ...w, minimized: false, z: ++Z } : w);
      }
      const def = WIN_DEFAULTS[type];
      const title = type === "word" && extra?.slug
        ? `${(extra.slug || "Project").replace(/-/g, " ")}.doc - Microsoft Word`
        : def.title;
      return [...ws, { ...def, id, z: ++Z, minimized: false, maximized: false, title, ...extra }];
    });
  }, []);

  const focusWin = useCallback((id: string) => {
    setWindows(ws => ws.map(w => w.id === id ? { ...w, z: ++Z } : w));
  }, []);

  const moveWin = useCallback((id: string, x: number, y: number) => {
    setWindows(ws => ws.map(w => w.id === id ? { ...w, x, y } : w));
  }, []);

  const closeWin = useCallback((id: string) => {
    setWindows(ws => ws.filter(w => w.id !== id));
  }, []);

  const minWin = useCallback((id: string) => {
    setWindows(ws => ws.map(w => w.id === id ? { ...w, minimized: true } : w));
  }, []);

  const maxWin = useCallback((id: string) => {
    setWindows(ws => ws.map(w => w.id === id ? { ...w, maximized: !w.maximized } : w));
  }, []);

  const ICONS = [
    { id: "work",    emoji: "📁", label: "My Work",           type: "explorer" as WinType },
    { id: "about",   emoji: "📝", label: "About Me",          type: "about" as WinType },
    { id: "contact", emoji: "📧", label: "Contact",           type: "contact" as WinType },
    { id: "recycle", emoji: "🗑️", label: "Recycle Bin",       type: null },
  ];

  return (
    <div
      style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", userSelect: "none",
        backgroundImage: "url(/bliss.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      onClick={() => { setSelIcon(null); setStartOpen(false); }}
    >

      {/* Desktop icons - vertical column on desktop, horizontal row on mobile */}
      <div style={{
        position: "absolute",
        top: isMobile ? "auto" : 10,
        bottom: isMobile ? taskbarH + 8 : "auto",
        left: isMobile ? "50%" : 10,
        transform: isMobile ? "translateX(-50%)" : "none",
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        gap: isMobile ? 8 : 2,
        zIndex: 5,
      }}>
        {ICONS.map(ic => (
          <DesktopIcon
            key={ic.id}
            emoji={ic.emoji}
            label={ic.label}
            selected={selIcon === ic.id}
            onSelect={() => setSelIcon(ic.id)}
            onOpen={() => ic.type && openWin(ic.type)}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map(win => (
        <XPWindow
          key={win.id}
          id={win.id}
          title={win.title}
          icon={win.icon}
          x={win.x}
          y={win.y}
          width={win.width}
          height={win.height}
          zIndex={win.z}
          minimized={win.minimized}
          maximized={win.maximized}
          active={win.z === maxZ}
          mobile={isMobile}
          taskbarH={taskbarH}
          onFocus={() => focusWin(win.id)}
          onMove={(x, y) => moveWin(win.id, x, y)}
          onClose={() => win.id === "welcome" ? minWin(win.id) : closeWin(win.id)}
          onMinimize={() => minWin(win.id)}
          onToggleMaximize={() => maxWin(win.id)}
        >
          {win.type === "explorer" && (
            <XPExplorer
              mobile={isMobile}
              onOpenProject={(slug, title) =>
                openWin("word", { slug, title: `${title}.doc - Microsoft Word`, icon: "📄" })
              }
            />
          )}
          {win.type === "about" && <XPNotepad type="about" />}
          {win.type === "contact" && <XPNotepad type="contact" />}
          {win.type === "word" && win.slug && <XPWord slug={win.slug} mobile={isMobile} />}
          {win.type === "welcome" && (
            <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "Tahoma,sans-serif", background: "#ece9d8" }}>
              <div style={{ display: "flex", gap: 16, padding: "20px 20px 16px", flex: 1, alignItems: "flex-start" }}>
                <img src="/xp-logo.png" width={52} height={52} alt="" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: "#000" }}>
                  No, you haven't gone back in time.{" "}
                  <strong>I'm Mohana</strong>, and this is my portfolio!{" "}
                  Enjoy a splash of nostalgia back from a time when I first
                  discovered the magic of technology and fell in love with it.
                  Click around, explore, and most importantly -
                  <strong> have fun!</strong>
                  {isMobile && (
                    <>
                      <br /><br />
                      <em>This site is best experienced on a Desktop screen, so if you're on mobile I highly recommend opening this on a larger screen :)</em>
                    </>
                  )}
                </p>
              </div>
              <div style={{ borderTop: "1px solid #aca899", padding: "8px 16px", display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() => minWin("welcome")}
                  style={{
                    width: 80, height: 24, background: "#ece9d8",
                    border: "2px solid #0a246a", borderRadius: 3,
                    fontFamily: "Tahoma,sans-serif", fontSize: 11,
                    cursor: "default", fontWeight: "bold",
                    boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.8)",
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </XPWindow>
      ))}

      {/* Start Menu */}
      {startOpen && (
        <StartMenu
          onOpen={(type) => openWin(type)}
          onClose={() => setStartOpen(false)}
        />
      )}

      {/* Taskbar */}
      <div
        style={{
          position: "fixed", bottom: 0, left: 0, right: 0, height: taskbarH,
          background: TASKBAR_BG,
          boxShadow: "0 -2px 0 #0a2a8a, inset 0 2px 0 rgba(255,255,255,0.18)",
          zIndex: 9000, display: "flex", alignItems: "center", gap: 3, padding: "0 3px",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Start button */}
        <button
          onClick={() => setStartOpen(s => !s)}
          style={{
            display: "flex", alignItems: "center", gap: 5,
            padding: "2px 12px 2px 8px", height: 30,
            background: START_BG, border: "1px solid #1a5a00", borderRadius: 4,
            color: "white", fontWeight: "bold", fontStyle: "italic",
            fontFamily: "Tahoma,sans-serif", fontSize: 14,
            cursor: "default", flexShrink: 0,
            boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.35)",
          }}
        >
          <XPLogo size={18} />
          start
        </button>

        <div style={{ width: 1, height: 26, background: "rgba(255,255,255,0.15)", margin: "0 2px" }} />

        {/* Open window buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, overflow: "hidden" }}>
          {windows.map(win => {
            const isActive = win.z === maxZ && !win.minimized;
            return (
              <button
                key={win.id}
                onClick={() => {
                  if (win.minimized) {
                    setWindows(ws => ws.map(w => w.id === win.id ? { ...w, minimized: false, z: ++Z } : w));
                  } else if (isActive) {
                    minWin(win.id);
                  } else {
                    focusWin(win.id);
                  }
                }}
                style={{
                  height: 26, padding: "0 10px",
                  display: "flex", alignItems: "center", gap: 5,
                  background: isActive
                    ? "linear-gradient(180deg,#1a52cc 0%,#0e3ea8 100%)"
                    : "linear-gradient(180deg,#4a88dc 0%,#2e6ccc 100%)",
                  border: isActive ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(0,0,0,0.25)",
                  borderRadius: 3, color: "white", fontSize: 11,
                  fontFamily: "Tahoma,sans-serif", cursor: "default",
                  maxWidth: 200, overflow: "hidden",
                  boxShadow: isActive ? "inset 1px 1px 0 rgba(0,0,0,0.2)" : "inset 1px 1px 0 rgba(255,255,255,0.2)",
                  flexShrink: 0,
                }}
              >
                <span style={{ flexShrink: 0 }}>{win.icon}</span>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {win.title.split(" - ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* System tray */}
        <div style={{
          background: "linear-gradient(180deg,#0e3ea8 0%,#1248c8 50%,#0e3ea8 100%)",
          border: "1px solid rgba(255,255,255,0.08)", borderRadius: 2,
          padding: "2px 10px", height: 28,
          display: "flex", alignItems: "center", gap: 8,
          fontSize: 14, flexShrink: 0,
        }}>
          <span title="Volume">🔊</span>
          <span title="Network">📶</span>
          <span style={{ color: "white", fontSize: 11, fontFamily: "Tahoma,sans-serif", marginLeft: 4, whiteSpace: "nowrap" }}>
            {clock.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
      </div>
    </div>
  );
}
