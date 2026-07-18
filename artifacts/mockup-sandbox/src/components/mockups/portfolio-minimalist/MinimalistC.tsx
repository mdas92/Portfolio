import React from "react";

export function MinimalistC() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
      />
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#FFFFFF",
          fontFamily: "'DM Sans', sans-serif",
          color: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Nav */}
        <nav
          style={{
            width: "100%",
            padding: "32px 60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
            borderBottom: "1px solid #F0F0F0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#4338CA",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "-0.01em",
              }}
            >
              Mohana Das
            </span>
          </div>
          <div style={{ display: "flex", gap: 40 }}>
            {["Work", "About", "Contact"].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#444",
                  cursor: "pointer",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </nav>

        {/* Hero */}
        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 60px 80px",
          }}
        >
          <div style={{ maxWidth: 880 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#EEF2FF",
                borderRadius: 4,
                padding: "6px 14px",
                marginBottom: 40,
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#4338CA",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Available for new work
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontWeight: 700,
                fontSize: 88,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                margin: "0 0 48px",
              }}
            >
              Content that
              <br />
              <span style={{ color: "#4338CA" }}>actually</span>
              <span style={{ fontStyle: "italic" }}> works.</span>
            </h1>

            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                lineHeight: 1.65,
                color: "#555",
                marginBottom: 48,
                maxWidth: 560,
              }}
            >
              I'm a content strategist and UX writer who builds systems,
              not just copy — from AI-powered messaging platforms to
              company-wide methodologies.
            </p>

            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <button
                style={{
                  backgroundColor: "#4338CA",
                  color: "#fff",
                  border: "none",
                  padding: "15px 36px",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  borderRadius: 6,
                  letterSpacing: "0.02em",
                }}
              >
                See my work
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#4338CA",
                  border: "1.5px solid #4338CA",
                  padding: "14px 32px",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  borderRadius: 6,
                  letterSpacing: "0.02em",
                }}
              >
                Get in touch
              </button>
            </div>
          </div>
        </main>

        {/* Work tags */}
        <div
          style={{
            padding: "28px 60px",
            borderTop: "1px solid #F0F0F0",
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {[
            "Content Strategy",
            "UX Writing",
            "Messaging Systems",
            "AI Content",
            "Information Architecture",
          ].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 12,
                fontWeight: 400,
                color: "#444",
                backgroundColor: "#F6F6F6",
                padding: "6px 14px",
                borderRadius: 100,
                border: "1px solid #E8E8E8",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
