export function WinXPPortfolio() {
  const projects = [
    {
      title: "Product Taxonomy: Renaming an AI Product While It Runs",
      tag: "Information Architecture · Product Language",
      context: "Aampe — AI-powered lifecycle marketing platform",
      year: "2025",
      summary: "Drove the evidence, framework, and decision session that ratified nine renamed product entities — then shipped the glossary and rollout plan for a product that never stops running.",
      icon: "📁",
    },
    {
      title: "Content Maps: Building the Shared Language for Agentic Content Strategy",
      tag: "Content Strategy · Methodology",
      context: "Aampe — AI-powered lifecycle marketing platform",
      year: "2025",
      summary: "Turned a one-off planning habit into Aampe's standard strategic artifact — credited in a $90K closed-won deal and proposed as a 60-day certification for every new hire.",
      icon: "📁",
    },
    {
      title: "Improving Repayment Rates",
      tag: "Content Strategy · Fintech · UX Writing",
      context: "LazyPay (PayU Finance)",
      year: "2023",
      summary: "Redesigned in-app repayment notifications and navigation — content-first approach that made dues impossible to miss and measurably lifted click-through rates.",
      icon: "📁",
    },
    {
      title: "End-to-End Content Overhaul for a Major Fintech App",
      tag: "Content Strategy · Fintech",
      context: "Leading personal finance app (US)",
      year: "2025",
      summary: "Push notification overhaul — value props, 15 new message groups, legal review.",
      icon: "📁",
    },
    {
      title: "In-Person Training for a Major Sports League",
      tag: "Training · Content Co-Creation",
      context: "Premier professional sports league (US)",
      year: "2025",
      summary: "NYC-based content workshop — co-wrote 800+ message alternates in under 15 minutes.",
      icon: "📁",
    },
  ];

  return (
    <div
      className="min-h-screen w-full flex flex-col overflow-hidden select-none"
      style={{
        background: "linear-gradient(180deg, #1a6b3c 0%, #3a9a5c 30%, #5ab87a 60%, #7dd4a0 100%)",
        fontFamily: "'Tahoma', 'MS Sans Serif', system-ui, sans-serif",
        fontSize: "11px",
      }}
    >
      {/* Desktop icons */}
      <div className="flex-1 flex flex-col p-4 gap-6 pt-6 pr-6 items-end" style={{ pointerEvents: "none" }}>
        <DesktopIcon label="My Computer" icon="🖥️" />
        <DesktopIcon label="My Documents" icon="🗂️" />
        <DesktopIcon label="Recycle Bin" icon="🗑️" />
        <DesktopIcon label="Internet Explorer" icon="🌐" />
      </div>

      {/* Main window — centered on desktop */}
      <div
        className="absolute"
        style={{ top: 20, left: 40, right: 40, bottom: 52 }}
      >
        {/* Window chrome */}
        <div
          className="flex flex-col h-full"
          style={{
            border: "2px solid #0a246a",
            borderRadius: "8px 8px 0 0",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.5), inset 1px 1px 0 rgba(255,255,255,0.3)",
          }}
        >
          {/* Title bar */}
          <div
            className="flex items-center justify-between px-2 py-1 rounded-t-md"
            style={{
              background: "linear-gradient(180deg, #2e6bce 0%, #1245a8 50%, #0a3a9a 100%)",
              minHeight: 28,
            }}
          >
            <div className="flex items-center gap-2">
              <span style={{ fontSize: 14 }}>🗂️</span>
              <span className="text-white font-bold" style={{ fontSize: 12, textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }}>
                Mohana Das — Portfolio — [Work]
              </span>
            </div>
            <div className="flex gap-1">
              <WinBtn label="—" color="#f8c400" hoverColor="#ffd700" />
              <WinBtn label="❐" color="#1a8a1a" hoverColor="#22aa22" />
              <WinBtn label="✕" color="#c0392b" hoverColor="#e74c3c" />
            </div>
          </div>

          {/* Menu bar */}
          <div
            className="flex items-center gap-1 px-2 py-0.5"
            style={{ background: "#d4d0c8", borderBottom: "1px solid #a0a0a0" }}
          >
            {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((m) => (
              <button
                key={m}
                className="px-2 py-0.5 hover:bg-blue-600 hover:text-white rounded-sm"
                style={{ fontSize: 11, background: "none", border: "none", cursor: "default" }}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Toolbar */}
          <div
            className="flex items-center gap-2 px-2 py-1"
            style={{ background: "#d4d0c8", borderBottom: "1px solid #a0a0a0" }}
          >
            <ToolbarBtn label="← Back" />
            <ToolbarBtn label="→ Forward" />
            <ToolbarBtn label="↑ Up" />
            <div style={{ width: 1, height: 20, background: "#a0a0a0", margin: "0 4px" }} />
            <ToolbarBtn label="🔍 Search" />
            <ToolbarBtn label="📁 Folders" />
            <div className="flex-1 ml-2">
              <div
                className="flex items-center px-2 py-0.5 rounded-sm"
                style={{
                  background: "white",
                  border: "1px solid #7f9db9",
                  fontSize: 11,
                  color: "#333",
                }}
              >
                <span style={{ color: "#888", marginRight: 4 }}>Address:</span>
                <span>C:\Users\Visitor\Desktop\Mohana Das Portfolio\Work</span>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex flex-1 overflow-hidden" style={{ background: "white" }}>
            {/* Sidebar */}
            <div
              className="flex flex-col gap-0 overflow-y-auto"
              style={{
                width: 180,
                background: "linear-gradient(180deg, #7db3e3 0%, #5a9fd4 100%)",
                borderRight: "1px solid #7f9db9",
                flexShrink: 0,
              }}
            >
              <SidebarSection title="File and Folder Tasks">
                <SidebarLink icon="📄" label="Make a new folder" />
                <SidebarLink icon="🌐" label="Publish this folder" />
                <SidebarLink icon="📧" label="Share this folder" />
              </SidebarSection>

              <SidebarSection title="Other Places">
                <SidebarLink icon="🖥️" label="My Computer" />
                <SidebarLink icon="🗂️" label="My Documents" />
                <SidebarLink icon="🌐" label="Network Places" />
                <SidebarLink icon="🗑️" label="Recycle Bin" />
              </SidebarSection>

              <SidebarSection title="Details">
                <div className="px-3 py-2 text-xs" style={{ color: "#003580", lineHeight: "1.6" }}>
                  <div className="font-bold">Work</div>
                  <div>File Folder</div>
                  <div style={{ marginTop: 6, color: "#004080" }}>
                    <span className="font-bold">Name: </span>Mohana Das
                  </div>
                  <div>
                    <span className="font-bold">Role: </span>Content Strategist
                  </div>
                  <div style={{ marginTop: 6 }}>5 items</div>
                </div>
              </SidebarSection>
            </div>

            {/* File listing area */}
            <div className="flex-1 overflow-y-auto p-4" style={{ background: "white" }}>
              {/* Breadcrumb info bar */}
              <div
                className="mb-3 px-3 py-2 rounded"
                style={{
                  background: "#fffbe6",
                  border: "1px solid #e6d87a",
                  fontSize: 11,
                  color: "#555",
                }}
              >
                📂 <strong>Mohana Das\Work</strong> — 5 items
              </div>

              {/* View: Details list */}
              <table className="w-full" style={{ borderCollapse: "collapse", fontSize: 11 }}>
                <thead>
                  <tr style={{ background: "#d4d0c8" }}>
                    {["Name", "Type", "Context", "Year"].map((h) => (
                      <th
                        key={h}
                        className="text-left px-3 py-1"
                        style={{
                          border: "1px solid #a0a0a0",
                          fontWeight: "bold",
                          cursor: "default",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {h} {h === "Name" ? "▲" : ""}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {projects.map((p, i) => (
                    <ProjectRow key={i} project={p} index={i} />
                  ))}
                </tbody>
              </table>

              {/* Selected project detail pane */}
              <div
                className="mt-4 p-3 rounded"
                style={{
                  background: "#f0f4ff",
                  border: "1px solid #bcd",
                  fontSize: 11,
                  lineHeight: 1.6,
                }}
              >
                <div className="flex items-start gap-3">
                  <span style={{ fontSize: 32 }}>📁</span>
                  <div>
                    <div className="font-bold" style={{ fontSize: 13, color: "#003580" }}>
                      Product Taxonomy: Renaming an AI Product While It Runs
                    </div>
                    <div style={{ color: "#777", marginBottom: 6 }}>
                      Information Architecture · Product Language · 2025
                    </div>
                    <div style={{ color: "#333", maxWidth: 600 }}>
                      Drove the evidence, framework, and decision session that ratified nine renamed product entities — then shipped the glossary and rollout plan for a product that never stops running.
                    </div>
                    <div className="flex gap-2 mt-3">
                      <XPButton label="Open" primary />
                      <XPButton label="View Details" />
                      <XPButton label="Add to Favorites" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Status bar info */}
              <div
                className="mt-4 px-2 py-1"
                style={{ color: "#555", fontSize: 10, borderTop: "1px solid #ddd" }}
              >
                5 objects | 1 selected | Disk space free: ∞
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div
            className="flex items-center gap-2 px-2 py-1"
            style={{
              background: "#d4d0c8",
              borderTop: "1px solid #a0a0a0",
              fontSize: 10,
              color: "#333",
            }}
          >
            <span>5 objects</span>
            <span style={{ marginLeft: "auto" }}>🔒 Trusted site</span>
          </div>
        </div>
      </div>

      {/* Taskbar */}
      <div
        className="flex items-center px-1 gap-1"
        style={{
          height: 52,
          background: "linear-gradient(180deg, #245edb 0%, #1a4fcc 5%, #1a4fcc 90%, #0d3da8 100%)",
          boxShadow: "0 -1px 0 #0a2a8a, inset 0 1px 0 rgba(255,255,255,0.2)",
          position: "relative",
          zIndex: 50,
          flexShrink: 0,
        }}
      >
        {/* Start button */}
        <button
          className="flex items-center gap-1 px-3 font-bold rounded-sm"
          style={{
            height: 40,
            background: "linear-gradient(180deg, #5aac34 0%, #3d8f18 50%, #2d7a0a 100%)",
            border: "1px solid #1a5a00",
            color: "white",
            fontSize: 14,
            boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.3), 1px 1px 3px rgba(0,0,0,0.4)",
            cursor: "default",
            borderRadius: 4,
          }}
        >
          <span style={{ fontSize: 20 }}>⊞</span>
          <span style={{ fontStyle: "italic", fontFamily: "Tahoma, sans-serif", letterSpacing: 0.5 }}>start</span>
        </button>

        {/* Quick launch */}
        <div
          className="flex items-center gap-1 px-2"
          style={{ borderLeft: "1px solid rgba(255,255,255,0.2)", borderRight: "1px solid rgba(255,255,255,0.2)", height: 36 }}
        >
          <TaskbarIcon label="🌐" />
          <TaskbarIcon label="📧" />
          <TaskbarIcon label="🗂️" />
        </div>

        {/* Active windows */}
        <div className="flex items-center gap-1 flex-1 px-2">
          <button
            className="flex items-center gap-1 px-2"
            style={{
              height: 36,
              background: "linear-gradient(180deg, #1245a8 0%, #1a5fcc 100%)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              fontSize: 11,
              borderRadius: 3,
              cursor: "default",
              fontFamily: "Tahoma, sans-serif",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
              maxWidth: 240,
            }}
          >
            <span style={{ fontSize: 13 }}>🗂️</span>
            <span className="truncate">Mohana Das — Portfolio</span>
          </button>
        </div>

        {/* System tray */}
        <div
          className="flex items-center gap-2 px-3"
          style={{
            background: "linear-gradient(180deg, #0e3da8 0%, #1245c8 50%, #0e3da8 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 3,
            height: 36,
            fontSize: 14,
          }}
        >
          <span title="Volume">🔊</span>
          <span title="Network">📶</span>
          <span
            className="text-white"
            style={{ fontSize: 10, fontFamily: "Tahoma, sans-serif", marginLeft: 4 }}
          >
            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
      </div>
    </div>
  );
}

function DesktopIcon({ label, icon }: { label: string; icon: string }) {
  return (
    <div
      className="flex flex-col items-center gap-1 cursor-default p-1 rounded"
      style={{ width: 64, textAlign: "center" }}
    >
      <span style={{ fontSize: 36, filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.5))" }}>{icon}</span>
      <span
        className="text-white text-center leading-tight"
        style={{
          fontSize: 11,
          fontFamily: "Tahoma, sans-serif",
          textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
          wordBreak: "break-word",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function WinBtn({ label, color, hoverColor }: { label: string; color: string; hoverColor: string }) {
  return (
    <button
      className="flex items-center justify-center font-bold text-white rounded-sm"
      style={{
        width: 21,
        height: 21,
        background: color,
        border: "1px solid rgba(0,0,0,0.3)",
        fontSize: 11,
        boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.3)",
        cursor: "default",
        fontFamily: "Tahoma, sans-serif",
      }}
    >
      {label}
    </button>
  );
}

function ToolbarBtn({ label }: { label: string }) {
  return (
    <button
      className="px-2 py-0.5 rounded-sm hover:bg-blue-100"
      style={{
        background: "none",
        border: "1px solid transparent",
        fontSize: 11,
        cursor: "default",
        fontFamily: "Tahoma, sans-serif",
        color: "#003",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-2">
      <div
        className="px-3 py-1 font-bold text-white"
        style={{
          background: "linear-gradient(180deg, #4a8fd4 0%, #3a7fca 100%)",
          fontSize: 11,
          textShadow: "0 1px 1px rgba(0,0,0,0.4)",
          borderBottom: "1px solid #2a6ab0",
        }}
      >
        {title}
      </div>
      <div
        className="py-1"
        style={{ background: "rgba(255,255,255,0.15)" }}
      >
        {children}
      </div>
    </div>
  );
}

function SidebarLink({ icon, label }: { icon: string; label: string }) {
  return (
    <button
      className="flex items-center gap-2 px-3 py-1 w-full text-left hover:underline"
      style={{
        background: "none",
        border: "none",
        cursor: "default",
        color: "#003580",
        fontSize: 11,
        fontFamily: "Tahoma, sans-serif",
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function ProjectRow({ project, index }: { project: any; index: number }) {
  const selected = index === 0;
  return (
    <tr
      style={{
        background: selected ? "#316ac5" : index % 2 === 0 ? "white" : "#f5f5f5",
        color: selected ? "white" : "#333",
        cursor: "default",
      }}
    >
      <td className="px-3 py-1" style={{ border: "1px solid #e0e0e0", maxWidth: 340 }}>
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 14 }}>{project.icon}</span>
          <span
            className="truncate"
            style={{ maxWidth: 300, display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          >
            {project.title}
          </span>
        </div>
      </td>
      <td className="px-3 py-1" style={{ border: "1px solid #e0e0e0", whiteSpace: "nowrap" }}>
        File Folder
      </td>
      <td className="px-3 py-1" style={{ border: "1px solid #e0e0e0", whiteSpace: "nowrap", maxWidth: 180 }}>
        <span className="truncate" style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis" }}>
          {project.context}
        </span>
      </td>
      <td className="px-3 py-1" style={{ border: "1px solid #e0e0e0", whiteSpace: "nowrap" }}>
        {project.year}
      </td>
    </tr>
  );
}

function XPButton({ label, primary }: { label: string; primary?: boolean }) {
  return (
    <button
      className="px-3 py-1 rounded-sm"
      style={{
        background: primary
          ? "linear-gradient(180deg, #e8f0ff 0%, #d0ddf0 100%)"
          : "linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%)",
        border: primary ? "1px solid #3169c6" : "1px solid #aaa",
        fontSize: 11,
        fontFamily: "Tahoma, sans-serif",
        cursor: "default",
        boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.8), 1px 1px 2px rgba(0,0,0,0.15)",
        color: "#003",
      }}
    >
      {label}
    </button>
  );
}

function TaskbarIcon({ label }: { label: string }) {
  return (
    <button
      className="flex items-center justify-center rounded"
      style={{
        width: 24,
        height: 24,
        background: "none",
        border: "none",
        cursor: "default",
        fontSize: 16,
      }}
    >
      {label}
    </button>
  );
}
