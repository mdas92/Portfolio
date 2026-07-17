import { useState } from "react";
import { projects } from "../../data/portfolio";
import {
  ContentMapsVisual, FintechVisual, SportsVisual, TaxVisual,
  SuperappVisual, PlaybookVisual, ProductTaxonomyVisual, ChatbotVisual,
  LazycardVisual, ExpenseMgmtVisual, RepaymentsVisual, BarbershopVisual,
  TravelVisual, RunningVisual, MusicVisual, RewardsVisual,
  GreetingVisual, ShoppingVisual,
} from "../ProjectCardVisuals";

const GRAY = "#d4d0c8";
const DG = "#808080";

const VISUALS: Record<string, JSX.Element> = {
  "product-taxonomy": <ProductTaxonomyVisual compact />,
  "content-maps": <ContentMapsVisual compact />,
  "fintech-overhaul": <FintechVisual compact />,
  "sports-training": <SportsVisual compact />,
  "tax-onboarding": <TaxVisual compact />,
  "superapp-l10n": <SuperappVisual compact />,
  "playbook": <PlaybookVisual compact />,
  "chatbot": <ChatbotVisual compact />,
  "lazycard": <LazycardVisual compact />,
  "expense-mgmt": <ExpenseMgmtVisual compact />,
  "repayments": <RepaymentsVisual compact />,
  "barbershop-booking": <BarbershopVisual compact />,
  "travel-superapp": <TravelVisual compact />,
  "running-app": <RunningVisual compact />,
  "music-streaming": <MusicVisual compact />,
  "financial-rewards": <RewardsVisual compact />,
  "greeting-card-app": <GreetingVisual compact />,
  "shopping-rewards": <ShoppingVisual compact />,
};

interface Props {
  onOpenProject: (slug: string, title: string) => void;
}

const SIDE_BTN: React.CSSProperties = {
  display: "flex", alignItems: "center", gap: 6,
  padding: "3px 6px", fontSize: 11, cursor: "default",
  color: "#00008b", background: "none", border: "none",
  width: "100%", textAlign: "left", textDecoration: "underline",
  fontFamily: "Tahoma,sans-serif",
};

export function XPExplorer({ onOpenProject }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const visible = projects
    .filter(p => !p.archived)
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));

  const selProject = visible.find(p => p.slug === selected);

  const SideSection = ({ heading, items }: { heading: string; items: { icon: string; label: string }[] }) => (
    <div style={{ padding: "6px 8px 4px" }}>
      <div style={{ background: "linear-gradient(90deg,#4e9de1,#2c6fce)", color: "white", fontSize: 10, fontWeight: "bold", padding: "3px 6px", borderRadius: 2, marginBottom: 4 }}>
        {heading}
      </div>
      {items.map(it => (
        <button key={it.label} style={SIDE_BTN}>
          <span style={{ fontSize: 14 }}>{it.icon}</span>
          <span>{it.label}</span>
        </button>
      ))}
    </div>
  );

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
        {["← Back","→ Forward","↑ Up"].map(b => (
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
          C:\Users\Visitor\Desktop\Mohana Das Portfolio\Work
        </div>
        <button style={{ height: 20, padding: "0 10px", background: GRAY, border: "1px solid #aaa", fontSize: 11, cursor: "default" }}>Go</button>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Sidebar */}
        <div style={{ width: 172, background: "#ECE9D8", borderRight: `1px solid ${DG}`, overflowY: "auto", flexShrink: 0, paddingTop: 6 }}>
          <SideSection heading="File and Folder Tasks" items={[
            { icon: "📁", label: "Make a new folder" },
            { icon: "🌐", label: "Publish this folder" },
            { icon: "📤", label: "Share this folder" },
          ]} />
          <SideSection heading="Other Places" items={[
            { icon: "💻", label: "My Computer" },
            { icon: "📄", label: "My Documents" },
            { icon: "🌐", label: "Network Places" },
            { icon: "🗑️", label: "Recycle Bin" },
          ]} />

          {/* Details */}
          <div style={{ padding: "6px 8px 4px" }}>
            <div style={{ background: "linear-gradient(90deg,#4e9de1,#2c6fce)", color: "white", fontSize: 10, fontWeight: "bold", padding: "3px 6px", borderRadius: 2, marginBottom: 6 }}>
              Details
            </div>
            {selProject ? (
              <div style={{ padding: "0 4px", fontSize: 11 }}>
                <div style={{ fontWeight: "bold", marginBottom: 2, fontSize: 12, wordBreak: "break-word" }}>
                  {selProject.title.length > 32 ? selProject.title.substring(0, 32) + "…" : selProject.title}
                </div>
                <div style={{ color: "#555", marginBottom: 4 }}>Microsoft Word Document</div>
                <div style={{ fontSize: 10, color: "#777", marginBottom: 2 }}>{selProject.context}</div>
                <div style={{ fontSize: 10, color: "#777", marginBottom: 10 }}>{selProject.year}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <button
                    onClick={() => onOpenProject(selProject.slug, selProject.title)}
                    style={{ fontSize: 11, padding: "2px 8px", background: GRAY, border: "1px solid #aaa", cursor: "default", textAlign: "left", fontFamily: "Tahoma,sans-serif" }}
                  >Open</button>
                  <button style={{ fontSize: 11, padding: "2px 8px", background: GRAY, border: "1px solid #aaa", cursor: "default", textAlign: "left", fontFamily: "Tahoma,sans-serif" }}>View Details</button>
                  <button style={{ fontSize: 11, padding: "2px 8px", background: GRAY, border: "1px solid #aaa", cursor: "default", textAlign: "left", fontFamily: "Tahoma,sans-serif" }}>Add to Favorites</button>
                </div>
              </div>
            ) : (
              <div style={{ padding: "0 4px", fontSize: 11 }}>
                <div style={{ fontWeight: "bold", marginBottom: 2 }}>Work</div>
                <div style={{ color: "#555", marginBottom: 4 }}>File Folder</div>
                <div style={{ fontSize: 10, color: "#777" }}>Name: Mohana Das</div>
                <div style={{ fontSize: 10, color: "#777" }}>Role: Content Strategist</div>
                <div style={{ fontSize: 10, color: "#777", marginTop: 4 }}>{visible.length} items</div>
              </div>
            )}
          </div>
        </div>

        {/* File list */}
        <div style={{ flex: 1, overflowY: "auto", background: "white" }} onClick={() => setSelected(null)}>
          {/* Column headers */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 180px 200px 56px", borderBottom: "1px solid #ddd", padding: "2px 8px", background: "#f0f0f0", position: "sticky", top: 0 }}>
            {["Name ▲","Type","Context","Year"].map(h => (
              <div key={h} style={{ fontSize: 11, fontWeight: "bold", color: "#333", fontFamily: "Tahoma,sans-serif", cursor: "default" }}>{h}</div>
            ))}
          </div>

          {visible.map(p => {
            const isSel = selected === p.slug;
            return (
              <div
                key={p.slug}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 180px 200px 56px",
                  padding: "3px 8px",
                  cursor: "default",
                  background: isSel ? "#316ac5" : "white",
                  color: isSel ? "white" : "#000",
                  alignItems: "center",
                  borderBottom: "1px solid #f8f8f8",
                  userSelect: "none",
                }}
                onClick={e => { e.stopPropagation(); setSelected(p.slug); }}
                onDoubleClick={() => onOpenProject(p.slug, p.title)}
              >
                {/* Name + thumbnail */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, overflow: "hidden" }}>
                  <div style={{ width: 40, height: 40, flexShrink: 0, overflow: "hidden", borderRadius: 2, position: "relative" }}>
                    {VISUALS[p.slug] ? (
                      <div style={{ position: "absolute", top: 0, left: 0, transform: "scale(0.36)", transformOrigin: "top left", width: 110, height: 110, overflow: "hidden", pointerEvents: "none" }}>
                        {VISUALS[p.slug]}
                      </div>
                    ) : (
                      <div style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>📄</div>
                    )}
                  </div>
                  <span style={{ fontSize: 11, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {p.title}
                  </span>
                </div>
                <span style={{ fontSize: 11 }}>Microsoft Word Document</span>
                <span style={{ fontSize: 11, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: isSel ? "white" : "#555" }}>{p.context}</span>
                <span style={{ fontSize: 11 }}>{p.year}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Status bar */}
      <div style={{ background: GRAY, borderTop: `1px solid ${DG}`, height: 20, display: "flex", alignItems: "center", padding: "0 8px", fontSize: 11, flexShrink: 0, gap: 16 }}>
        <span>{visible.length} objects</span>
        {selected && <span>1 selected</span>}
        <span style={{ marginLeft: "auto" }}>Disk space free: ∞</span>
      </div>
    </div>
  );
}
