import type { ReactNode } from "react";
import { projects } from "../../data/portfolio";

const GRAY = "#d4d0c8";
const DG = "#808080";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**")
          ? <strong key={i}>{part.slice(2, -2)}</strong>
          : <span key={i}>{part}</span>
      )}
    </>
  );
}

function DocSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ fontSize: 14, fontWeight: "bold", fontFamily: "Arial,sans-serif", color: "#0a246a", marginBottom: 8, borderBottom: "1px solid #ccd", paddingBottom: 4, margin: 0 }}>
        {title}
      </h2>
      <div style={{ marginTop: 10 }}>{children}</div>
    </div>
  );
}

export function XPWord({ slug }: { slug: string }) {
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div style={{ padding: 24, fontFamily: "Times New Roman, serif", color: "#c00" }}>
        Document not found: {slug}.doc
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "Tahoma,sans-serif" }}>
      {/* Menu bar */}
      <div style={{ background: GRAY, borderBottom: `1px solid ${DG}`, height: 22, display: "flex", alignItems: "center", flexShrink: 0 }}>
        {["File","Edit","View","Insert","Format","Tools","Table","Window","Help"].map(m => (
          <button key={m} style={{ padding: "1px 5px", background: "none", border: "none", cursor: "default", fontSize: 11, fontFamily: "Tahoma,sans-serif" }}>{m}</button>
        ))}
      </div>

      {/* Toolbar */}
      <div style={{ background: GRAY, borderBottom: `1px solid ${DG}`, height: 28, display: "flex", alignItems: "center", gap: 1, padding: "0 4px", flexShrink: 0 }}>
        {["💾","🖨️","👁️","✂️","📋","↩️","↪️"].map((ic, i) => (
          <button key={i} style={{ width: 22, height: 22, background: "none", border: "1px solid transparent", borderRadius: 2, cursor: "default", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>{ic}</button>
        ))}
        <div style={{ width: 1, height: 18, background: "#aaa", margin: "0 3px" }} />
        <select style={{ height: 20, fontSize: 11, fontFamily: "Tahoma,sans-serif", border: "1px solid #aaa", background: "white", width: 140 }}>
          <option>Times New Roman</option>
        </select>
        <select style={{ height: 20, fontSize: 11, border: "1px solid #aaa", background: "white", width: 44 }}>
          <option>12</option>
        </select>
        <div style={{ width: 1, height: 18, background: "#aaa", margin: "0 3px" }} />
        {[
          { l: "B", fw: "bold" as const, fi: "normal" as const, td: "none" as const },
          { l: "I", fw: "normal" as const, fi: "italic" as const, td: "none" as const },
          { l: "U", fw: "normal" as const, fi: "normal" as const, td: "underline" as const },
        ].map(b => (
          <button key={b.l} style={{ width: 22, height: 22, background: "none", border: "1px solid transparent", cursor: "default", fontWeight: b.fw, fontStyle: b.fi, textDecoration: b.td, fontFamily: "Tahoma,sans-serif", fontSize: 12 }}>{b.l}</button>
        ))}
      </div>

      {/* Ruler */}
      <div style={{ background: GRAY, height: 16, borderBottom: `1px solid ${DG}`, flexShrink: 0, display: "flex", alignItems: "center", paddingLeft: 160, overflow: "hidden" }}>
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} style={{ width: 48, flexShrink: 0, borderLeft: "1px solid #aaa", height: i % 2 === 0 ? 8 : 5, fontSize: 9, color: "#666", display: "flex", alignItems: "flex-end", paddingLeft: 2 }}>
            {i % 2 === 0 ? i / 2 + 1 : ""}
          </div>
        ))}
      </div>

      {/* Document area */}
      <div style={{ flex: 1, overflow: "auto", background: "#808080", padding: "20px 0" }}>
        <div style={{
          width: 700,
          minHeight: 990,
          margin: "0 auto",
          background: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
          padding: "64px 72px",
          fontFamily: "Times New Roman, serif",
          fontSize: 13,
          lineHeight: 1.75,
          color: "#000",
        }}>
          {/* Running head */}
          <p style={{ fontSize: 10, color: "#999", fontFamily: "Tahoma,sans-serif", marginBottom: 24, borderBottom: "1px solid #eee", paddingBottom: 8 }}>
            Mohana Das — Portfolio Case Study &nbsp;|&nbsp; {project.context} &nbsp;|&nbsp; {project.year}
          </p>

          {/* Tag */}
          <p style={{ fontSize: 10, color: "#666", fontFamily: "Tahoma,sans-serif", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            {project.tag}
          </p>

          {/* Title */}
          <h1 style={{ fontSize: 24, fontWeight: "bold", fontFamily: "Arial,sans-serif", color: "#0a246a", lineHeight: 1.25, marginBottom: 8, marginTop: 0 }}>
            {project.title}
          </h1>

          {/* Meta line */}
          <p style={{ fontSize: 11, color: "#555", fontFamily: "Tahoma,sans-serif", borderBottom: "2px solid #0a246a", paddingBottom: 10, marginBottom: 20 }}>
            {project.role} &nbsp;·&nbsp; {project.context} &nbsp;·&nbsp; {project.year}
            {project.duration ? ` · ${project.duration}` : ""}
          </p>

          {/* Summary callout */}
          <div style={{ background: "#f0f4ff", border: "1px solid #b0c4de", borderLeft: "4px solid #0a246a", padding: "10px 14px", marginBottom: 28 }}>
            <p style={{ margin: 0, fontStyle: "italic" }}>{project.summary}</p>
          </div>

          {/* Challenge */}
          <DocSection title="The Challenge">
            <p style={{ margin: 0 }}><RichText text={project.challenge} /></p>
          </DocSection>

          {/* What I Did */}
          <DocSection title="What I Did">
            <ul style={{ paddingLeft: 22, margin: 0 }}>
              {project.whatIDid.map((item, i) => (
                <li key={i} style={{ marginBottom: 5 }}><RichText text={item} /></li>
              ))}
            </ul>
          </DocSection>

          {/* Extra sections (rich case studies like Repayments) */}
          {project.sections?.map((sec, i) => (
            <DocSection key={i} title={sec.heading}>
              {sec.content && <p style={{ margin: "0 0 8px" }}><RichText text={sec.content} /></p>}
              {sec.bullets && (
                <ul style={{ paddingLeft: 22, margin: 0 }}>
                  {sec.bullets.map((b, j) => (
                    <li key={j} style={{ marginBottom: 4 }}><RichText text={b} /></li>
                  ))}
                </ul>
              )}
              {sec.note && (
                <p style={{ fontStyle: "italic", color: "#555", fontSize: 11, marginTop: 8 }}>
                  <RichText text={sec.note} />
                </p>
              )}
            </DocSection>
          ))}

          {/* Result */}
          <DocSection title="Result">
            <div style={{ background: "#f0fff4", border: "1px solid #b0d4b0", borderLeft: "4px solid #2e7d32", padding: "10px 14px" }}>
              <p style={{ margin: 0 }}><RichText text={project.result} /></p>
            </div>
          </DocSection>

          {/* Quote */}
          {project.quote && (
            <div style={{ marginTop: 20, borderLeft: "3px solid #0a246a", paddingLeft: 14, fontStyle: "italic", color: "#444", fontSize: 13 }}>
              &ldquo;{project.quote}&rdquo;
            </div>
          )}

          {/* Page footer */}
          <div style={{ marginTop: 48, borderTop: "1px solid #eee", paddingTop: 10, textAlign: "center", fontSize: 10, color: "#bbb", fontFamily: "Tahoma,sans-serif" }}>
            — 1 — &nbsp;|&nbsp; Mohana Das Portfolio &nbsp;|&nbsp; Confidential
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div style={{ background: GRAY, borderTop: `1px solid ${DG}`, height: 20, display: "flex", alignItems: "center", padding: "0 8px", fontSize: 11, flexShrink: 0, gap: 16 }}>
        <span>Page 1 of 2</span>
        <span>Words: {project.whatIDid.reduce((a, s) => a + s.split(" ").length, 0)}</span>
        <span>English (UK)</span>
        <span style={{ marginLeft: "auto" }}>100%</span>
      </div>
    </div>
  );
}
