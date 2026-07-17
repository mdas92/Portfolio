import { useState } from "react";
import { projects } from "../../data/portfolio";

const GRAY = "#d4d0c8";
const DG = "#808080";

interface Props {
  onOpenProject: (slug: string, title: string) => void;
  mobile?: boolean;
}

function WordDocIcon({ selected }: { selected: boolean }) {
  return (
    <svg width="44" height="54" viewBox="0 0 44 54" style={{ display: "block", flexShrink: 0 }}>
      <defs>
        <linearGradient id="pageGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0f0f0" />
        </linearGradient>
      </defs>
      {/* Page body */}
      <path d="M2,2 L30,2 L42,14 L42,52 L2,52 Z" fill="url(#pageGrad)" stroke={selected ? "#316ac5" : "#8a8a8a"} strokeWidth="1.2" />
      {/* Folded corner */}
      <path d="M30,2 L30,14 L42,14 Z" fill={selected ? "#b0c8ea" : "#d0d0d0"} stroke={selected ? "#316ac5" : "#8a8a8a"} strokeWidth="1.2" />
      {/* Blue "W" strip at top */}
      <rect x="2" y="2" width="28" height="9" rx="0" fill="#2b5fb7" />
      <rect x="2" y="2" width="28" height="9" rx="0" fill="#2b5fb7" />
      {/* "W" letterform */}
      <text x="9" y="10" fontFamily="Arial" fontWeight="bold" fontSize="9" fill="white" letterSpacing="-0.5">Word</text>
      {/* Document lines */}
      <line x1="8" y1="22" x2="36" y2="22" stroke="#c8c8c8" strokeWidth="1" />
      <line x1="8" y1="27" x2="36" y2="27" stroke="#c8c8c8" strokeWidth="1" />
      <line x1="8" y1="32" x2="36" y2="32" stroke="#c8c8c8" strokeWidth="1" />
      <line x1="8" y1="37" x2="28" y2="37" stroke="#c8c8c8" strokeWidth="1" />
      <line x1="8" y1="42" x2="32" y2="42" stroke="#c8c8c8" strokeWidth="1" />
    </svg>
  );
}

function SidebarSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 2 }}>
      <div style={{
        background: "linear-gradient(90deg, #3a6dc5 0%, #2355a8 100%)",
        color: "white",
        fontSize: 11,
        fontWeight: "bold",
        fontFamily: "Tahoma,sans-serif",
        padding: "4px 8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "default",
      }}>
        <span>{heading}</span>
        <span style={{ fontSize: 9 }}>▾</span>
      </div>
      <div style={{ background: "#dfe9f5", padding: "4px 0" }}>
        {children}
      </div>
    </div>
  );
}

function SideLink({ icon, label }: { icon: string; label: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 6,
      padding: "3px 10px", cursor: "default",
      fontFamily: "Tahoma,sans-serif", fontSize: 11,
      color: "#00008b",
    }}>
      <span style={{ fontSize: 16 }}>{icon}</span>
      <span style={{ textDecoration: "underline" }}>{label}</span>
    </div>
  );
}

export function XPExplorer({ onOpenProject, mobile = false }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const visible = projects
    .filter(p => !p.archived)
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));

  const selProject = visible.find(p => p.slug === selected);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "Tahoma,sans-serif", fontSize: 11 }}>

      {/* Menu bar */}
      <div style={{ background: GRAY, borderBottom: `1px solid ${DG}`, height: 22, display: "flex", alignItems: "center", flexShrink: 0 }}>
        {["File","Edit","View","Favorites","Tools","Help"].map(m => (
          <button key={m} style={{ padding: "1px 6px", background: "none", border: "none", cursor: "default", fontSize: 11, fontFamily: "Tahoma,sans-serif" }}>{m}</button>
        ))}
      </div>

      {/* Toolbar */}
      <div style={{ background: GRAY, borderBottom: `1px solid ${DG}`, height: 30, display: "flex", alignItems: "center", gap: 2, padding: "0 4px", flexShrink: 0 }}>
        {["← Back","→ Fwd","↑ Up"].map(b => (
          <button key={b} style={{ height: 24, padding: "0 8px", background: "none", border: "1px solid transparent", borderRadius: 2, fontSize: 11, cursor: "default", fontFamily: "Tahoma,sans-serif" }}>{b}</button>
        ))}
        <div style={{ width: 1, height: 20, background: DG, margin: "0 4px" }} />
        <button style={{ height: 24, padding: "0 8px", background: "none", border: "1px solid transparent", fontSize: 11, cursor: "default", fontFamily: "Tahoma,sans-serif" }}>🔍 Search</button>
        <button style={{ height: 24, padding: "0 8px", background: "none", border: "1px solid transparent", fontSize: 11, cursor: "default", fontFamily: "Tahoma,sans-serif" }}>📁 Folders</button>
      </div>

      {/* Address bar */}
      <div style={{ background: GRAY, borderBottom: `1px solid ${DG}`, height: 24, display: "flex", alignItems: "center", gap: 6, padding: "0 8px", flexShrink: 0 }}>
        <span style={{ fontSize: 11, color: "#333" }}>Address</span>
        <div style={{ flex: 1, background: "white", border: "1px solid #aaa", height: 18, display: "flex", alignItems: "center", padding: "0 4px", fontSize: 11, color: "#00008b" }}>
          C:\Users\Visitor\Desktop\My Work
        </div>
        <button style={{ height: 20, padding: "0 10px", background: GRAY, border: "1px solid #aaa", fontSize: 11, cursor: "default" }}>Go</button>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

        {/* Sidebar — hidden on mobile */}
        {!mobile && <div style={{ width: 160, background: "#dfe9f5", borderRight: `1px solid ${DG}`, overflowY: "auto", flexShrink: 0 }}>
          <SidebarSection heading="Other Places">
            <SideLink icon="🖥️" label="My Computer" />
            <SideLink icon="📄" label="My Documents" />
            <SideLink icon="🌐" label="My Network" />
            <SideLink icon="🗑️" label="Recycle Bin" />
          </SidebarSection>

          <SidebarSection heading="Details">
            {selProject ? (
              <div style={{ padding: "6px 10px", fontSize: 11, fontFamily: "Tahoma,sans-serif" }}>
                <WordDocIcon selected={false} />
                <div style={{ marginTop: 6, fontWeight: "bold", wordBreak: "break-word", lineHeight: 1.3 }}>
                  {selProject.title.length > 28 ? selProject.title.slice(0, 28) + "…" : selProject.title}
                </div>
                <div style={{ color: "#555", marginTop: 3 }}>Word Document</div>
                <div style={{ color: "#777", marginTop: 3, fontSize: 10 }}>{selProject.year}</div>
                <div style={{ color: "#777", fontSize: 10, lineHeight: 1.3, marginTop: 2 }}>{selProject.context}</div>
                <button
                  onClick={() => onOpenProject(selProject.slug, selProject.title)}
                  style={{ marginTop: 8, fontSize: 11, padding: "2px 12px", background: GRAY, border: "1px solid #aaa", cursor: "default", fontFamily: "Tahoma,sans-serif", display: "block" }}
                >
                  Open
                </button>
              </div>
            ) : (
              <div style={{ padding: "6px 10px", fontSize: 11, fontFamily: "Tahoma,sans-serif" }}>
                <div style={{ fontWeight: "bold" }}>My Work</div>
                <div style={{ color: "#555", marginTop: 2 }}>File Folder</div>
                <div style={{ color: "#777", fontSize: 10, marginTop: 4 }}>{visible.length} items</div>
              </div>
            )}
          </SidebarSection>
        </div>}

        {/* Icon grid */}
        <div
          style={{ flex: 1, overflowY: "auto", background: "white", padding: "12px 8px" }}
          onClick={() => setSelected(null)}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 4px", alignContent: "flex-start" }}>
            {visible.map(p => {
              const isSel = selected === p.slug;
              return (
                <div
                  key={p.slug}
                  style={{
                    width: 90,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "8px 4px 6px",
                    cursor: "default",
                    borderRadius: 3,
                    background: isSel ? "#316ac5" : "transparent",
                    userSelect: "none",
                  }}
                  onClick={e => { e.stopPropagation(); setSelected(p.slug); }}
                  onDoubleClick={() => onOpenProject(p.slug, p.title)}
                >
                  <WordDocIcon selected={isSel} />
                  <span style={{
                    marginTop: 5,
                    fontSize: 11,
                    fontFamily: "Tahoma,sans-serif",
                    color: isSel ? "white" : "#000",
                    textAlign: "center",
                    lineHeight: 1.3,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    maxWidth: 86,
                    wordBreak: "break-word",
                  }}>
                    {p.title.length > 40 ? p.title.slice(0, 40) + "…" : p.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div style={{ background: GRAY, borderTop: `1px solid ${DG}`, height: 20, display: "flex", alignItems: "center", padding: "0 8px", fontSize: 11, flexShrink: 0, gap: 16 }}>
        <span>{visible.length} objects</span>
        {selected && <span>1 object(s) selected</span>}
      </div>
    </div>
  );
}
