import React from "react";

export function MinimalistA() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Inter:wght@300;400;500&display=swap"
      />
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#FFFFFF",
          fontFamily: "'Inter', sans-serif",
          color: "#111111",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Nav */}
        <nav
          style={{
            width: "100%",
            padding: "32px 56px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 18,
              letterSpacing: "-0.02em",
            }}
          >
            MD
          </span>
          <div style={{ display: "flex", gap: 40 }}>
            {["Work", "About", "Contact"].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#666",
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
            padding: "0 56px 80px",
          }}
        >
          <div style={{ maxWidth: 900 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 48,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 2,
                  backgroundColor: "#1A6B4A",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#1A6B4A",
                }}
              >
                Content Strategist
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: 104,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                margin: 0,
                marginBottom: 56,
              }}
            >
              <span style={{ display: "block" }}>Mohana</span>
              <span style={{ display: "block", fontStyle: "italic", fontWeight: 700 }}>
                Das.
              </span>
            </h1>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                alignItems: "end",
              }}
            >
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "#444",
                  margin: 0,
                }}
              >
                I make complex ideas clear — through content strategy,
                UX writing, and the kind of words that actually move people.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end" }}>
                <button
                  style={{
                    backgroundColor: "#1A6B4A",
                    color: "#fff",
                    border: "none",
                    padding: "14px 32px",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    borderRadius: 2,
                  }}
                >
                  View my work →
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer strip */}
        <div
          style={{
            padding: "24px 56px",
            borderTop: "1px solid #E8E8E8",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.06em" }}>
            AAMPE · LAZYPAY · GOIBIBO
          </span>
          <span style={{ fontSize: 11, color: "#1A6B4A", fontWeight: 500 }}>
            Open to new opportunities
          </span>
        </div>
      </div>
    </>
  );
}
