import { useState } from "react";
import type { ReactNode } from "react";
import { projects } from "../../data/portfolio";
import type { ProjectImage } from "../../data/portfolio";
import {
  AliasChainVisual,
  MisreadObjectsVisual,
  HierarchyVisual,
  TerminologySessionVisual,
  ThreeActsVisual,
} from "../ProductTaxonomyVisuals";

const VISUALS: Record<string, () => React.ReactElement> = {
  AliasChainVisual,
  MisreadObjectsVisual,
  HierarchyVisual,
  TerminologySessionVisual,
  ThreeActsVisual,
};

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

function DocImage({ img, onZoom }: { img: ProjectImage; onZoom?: (src: string, alt: string) => void }) {
  const isFullWidth = img.display === "full-width";
  const isInline = img.display === "inline";

  const imgEl = (
    <img
      src={img.src}
      alt={img.alt}
      onClick={() => onZoom?.(img.src, img.alt)}
      style={{
        display: "block",
        maxWidth: "100%",
        width: isFullWidth ? "100%" : isInline ? "min(420px, 100%)" : "100%",
        height: "auto",
        margin: "0 auto",
        borderRadius: 2,
        cursor: onZoom ? "zoom-in" : "default",
      }}
    />
  );

  if (img.phoneFrame) {
    const PW = 230;
    const SW = PW - 10;
    const SH = Math.round(SW * (19.5 / 9));
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
        <div style={{ position: "relative" }}>
          <div style={{
            position: "relative",
            width: PW,
            background: "linear-gradient(160deg, #3c3c3e 0%, #1c1c1e 55%, #2c2c2e 100%)",
            borderRadius: 46,
            padding: "10px 5px",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.13)," +
              "inset 0 0 0 1px rgba(0,0,0,0.6)," +
              "0 24px 64px rgba(0,0,0,0.65)",
            cursor: onZoom ? "zoom-in" : "default",
          }}
            onClick={() => onZoom?.(img.src, img.alt)}
          >
            <div style={{
              width: SW,
              height: SH,
              background: "#000",
              borderRadius: 38,
              overflow: "hidden",
              position: "relative",
            }}>
              <div style={{
                position: "absolute",
                top: 13,
                left: "50%",
                transform: "translateX(-50%)",
                width: 88,
                height: 30,
                background: "#000",
                borderRadius: 20,
                zIndex: 2,
                boxShadow: "0 0 0 3px #111",
              }} />
              <div style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", right: -3, top: 108, width: 3, height: 62, background: "#3a3a3c", borderRadius: "0 2px 2px 0" }} />
          <div style={{ position: "absolute", left: -3, top: 84,  width: 3, height: 28, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
          <div style={{ position: "absolute", left: -3, top: 124, width: 3, height: 48, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
          <div style={{ position: "absolute", left: -3, top: 180, width: 3, height: 48, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ margin: "12px 0", textAlign: "center" }}>
      {imgEl}
      {img.caption && (
        <p style={{ margin: "6px 0 0", fontSize: 10, color: "#777", fontStyle: "italic", textAlign: "center", fontFamily: "Tahoma,sans-serif" }}>
          {img.caption}
        </p>
      )}
    </div>
  );
}

function DocSection({ title, children, noRule, hideTitle }: { title: string; children: ReactNode; noRule?: boolean; hideTitle?: boolean }) {
  return (
    <div style={{ marginBottom: 28 }}>
      {!hideTitle && (
        <h2 style={{ fontSize: 14, fontWeight: "bold", fontFamily: "Arial,sans-serif", color: "#0a246a", borderBottom: noRule ? "none" : "1px solid #ccd", paddingBottom: noRule ? 0 : 4, marginBottom: 10, marginTop: 0 }}>
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

export function XPWord({ slug, mobile = false }: { slug: string; mobile?: boolean }) {
  const project = projects.find(p => p.slug === slug);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const zoom = (src: string, alt: string) => setLightbox({ src, alt });

  if (!project) {
    return (
      <div style={{ padding: 24, fontFamily: "Times New Roman, serif", color: "#c00" }}>
        Document not found: {slug}.doc
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "Tahoma,sans-serif", position: "relative" }}>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              top: 16,
              right: 20,
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: 28,
              cursor: "pointer",
              lineHeight: 1,
              zIndex: 10000,
            }}
          >
            ×
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 4,
              boxShadow: "0 8px 48px rgba(0,0,0,0.6)",
            }}
          />
        </div>
      )}

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
      <div style={{ flex: 1, overflow: "auto", background: "#808080", padding: mobile ? "0" : "20px 0" }}>
        <div style={{
          width: mobile ? "100%" : 700,
          minHeight: mobile ? "100%" : 990,
          margin: "0 auto",
          background: "white",
          boxShadow: mobile ? "none" : "0 2px 10px rgba(0,0,0,0.4)",
          padding: mobile ? "24px 20px" : "64px 72px",
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
          <p style={{ fontSize: 10, color: "#666", fontFamily: "Tahoma,sans-serif", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>
            {project.tag}
          </p>

          {/* Title */}
          <h1 style={{ fontSize: 24, fontWeight: "bold", fontFamily: "Arial,sans-serif", color: "#0a246a", lineHeight: 1.25, marginBottom: 8, marginTop: 0 }}>
            {project.title}
          </h1>

          {/* Meta line */}
          <p style={{ fontSize: 11, color: "#555", fontFamily: "Tahoma,sans-serif", borderBottom: "2px solid #0a246a", paddingBottom: 10, marginBottom: 20, marginTop: 0 }}>
            {project.role} &nbsp;·&nbsp; {project.context} &nbsp;·&nbsp; {project.year}
            {project.duration ? ` · ${project.duration}` : ""}
          </p>

          {/* Summary callout */}
          <div style={{ background: "#f0f4ff", border: "1px solid #b0c4de", borderLeft: "4px solid #0a246a", padding: "10px 14px", marginBottom: 24 }}>
            <p style={{ margin: 0, fontStyle: "italic" }}>{project.summary}</p>
          </div>

          {/* Challenge */}
          {project.challenge && (
            <DocSection title="The Challenge">
              <p style={{ margin: 0 }}><RichText text={project.challenge} /></p>
            </DocSection>
          )}

          {/* What I Did */}
          {project.whatIDid.length > 0 && (
            <DocSection title="What I Did">
              <ul style={{ paddingLeft: 22, margin: 0 }}>
                {project.whatIDid.map((item, i) => (
                  <li key={i} style={{ marginBottom: 5 }}><RichText text={item} /></li>
                ))}
              </ul>
            </DocSection>
          )}

          {/* Rich sections (case studies) */}
          {project.sections?.map((sec, i) => (
            <DocSection key={i} title={sec.heading} noRule={sec.imagePlacement === "beside"} hideTitle={sec.imagePlacement === "beside"}>
              {sec.imagePlacement === "beside" && sec.image ? (
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: 14, fontWeight: "bold", fontFamily: "Arial,sans-serif", color: "#0a246a", marginTop: 0, marginBottom: 8 }}>{sec.heading}</h2>
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
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <DocImage img={sec.image} onZoom={zoom} />
                  </div>
                </div>
              ) : (
                <>
                  {sec.content && <p style={{ margin: "0 0 8px" }}><RichText text={sec.content} /></p>}
                  {sec.image && <DocImage img={sec.image} onZoom={zoom} />}
                  {sec.visual && (() => { const V = VISUALS[sec.visual!]; return V ? <div style={{ margin: "10px 0" }}><V /></div> : null; })()}
                  {sec.bullets && (
                    <ul style={{ paddingLeft: 22, margin: "8px 0 0" }}>
                      {sec.bullets.map((b, j) => (
                        <li key={j} style={{ marginBottom: 4 }}><RichText text={b} /></li>
                      ))}
                    </ul>
                  )}
                  {sec.images && (
                    <div style={{ display: "flex", gap: 12, margin: "12px 0", justifyContent: "center", flexWrap: "wrap" }}>
                      {sec.images.map((img, j) => (
                        <div key={j} style={{ textAlign: "center" }}>
                          <img
                            src={img.src}
                            alt={img.alt}
                            onClick={() => zoom(img.src, img.alt)}
                            style={{
                              display: "block",
                              maxWidth: img.scale ? `${img.scale * 200}px` : 200,
                              height: "auto",
                              borderRadius: 2,
                              cursor: "zoom-in",
                            }}
                            onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
                          />
                          {img.caption && (
                            <p style={{ margin: "4px 0 0", fontSize: 10, color: "#777", fontStyle: "italic", fontFamily: "Tahoma,sans-serif" }}>
                              {img.caption}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {sec.note && (
                    <p style={{ fontStyle: "italic", color: "#555", fontSize: 11, marginTop: 8 }}>
                      <RichText text={sec.note} />
                    </p>
                  )}
                  {sec.heading === "Solution Strategy" && (project.thumbnail || project.image) && (
                    <div style={{ marginTop: 16, textAlign: "center" }}>
                      <img
                        src={project.thumbnail || project.image}
                        alt={project.title}
                        onClick={() => zoom(project.thumbnail || project.image || "", project.title)}
                        style={{ maxWidth: "100%", maxHeight: 320, height: "auto", display: "block", margin: "0 auto", borderRadius: 2, cursor: "zoom-in" }}
                        onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                    </div>
                  )}
                </>
              )}
            </DocSection>
          ))}

          {/* Quote */}
          {project.quote && (
            <div style={{ marginTop: 20, borderLeft: "3px solid #0a246a", paddingLeft: 14, fontStyle: "italic", color: "#444", fontSize: 13 }}>
              &ldquo;{project.quote}&rdquo;
            </div>
          )}

          {/* Footer */}
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
