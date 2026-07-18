import React from "react";

export function MinimalistB() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Outfit:wght@300;400;500&display=swap"
      />
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#FFFFFF",
          fontFamily: "'Outfit', sans-serif",
          color: "#111111",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Nav */}
        <nav
          style={{
            width: "100%",
            padding: "36px 60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: 22,
              letterSpacing: "0.04em",
              fontStyle: "italic",
            }}
          >
            Mohana Das
          </span>
          <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {["Work", "About"].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#555",
                  cursor: "pointer",
                }}
              >
                {item}
              </span>
            ))}
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#C45A00",
                borderBottom: "1px solid #C45A00",
                paddingBottom: 1,
                cursor: "pointer",
              }}
            >
              Contact
            </span>
          </div>
        </nav>

        {/* Hero */}
        <main
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            padding: "0 60px",
          }}
        >
          <div style={{ width: "100%", maxWidth: 1000 }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 13,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C45A00",
                marginBottom: 28,
                fontWeight: 600,
              }}
            >
              Content Strategy & UX Writing
            </p>

            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: 118,
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
                margin: "0 0 52px",
              }}
            >
              <span style={{ display: "block" }}>Words</span>
              <span
                style={{
                  display: "block",
                  fontStyle: "italic",
                  fontWeight: 600,
                  color: "#C45A00",
                }}
              >
                that work.
              </span>
            </h1>

            <div
              style={{
                display: "flex",
                gap: 80,
                alignItems: "flex-start",
                borderTop: "1px solid #E2E2E2",
                paddingTop: 40,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "#555",
                  margin: 0,
                  maxWidth: 380,
                }}
              >
                I turn tangled systems and complex ideas into content
                that moves people — and teaches machines what to say.
              </p>

              <div style={{ display: "flex", gap: 24, flexShrink: 0 }}>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "#111",
                    border: "1px solid #111",
                    padding: "12px 28px",
                    fontSize: 13,
                    fontWeight: 400,
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                  }}
                >
                  View work
                </button>
                <button
                  style={{
                    backgroundColor: "#C45A00",
                    color: "#fff",
                    border: "none",
                    padding: "12px 28px",
                    fontSize: 13,
                    fontWeight: 400,
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                  }}
                >
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Ticker / stats */}
        <div
          style={{
            padding: "20px 60px",
            borderTop: "1px solid #EBEBEB",
            display: "flex",
            gap: 56,
          }}
        >
          {[
            { n: "8+", label: "Years experience" },
            { n: "$90K", label: "Deal attributed" },
            { n: "15+", label: "Accounts managed" },
            { n: "3", label: "Companies" },
          ].map(({ n, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: 28,
                  color: "#C45A00",
                  lineHeight: 1,
                }}
              >
                {n}
              </div>
              <div style={{ fontSize: 11, color: "#888", marginTop: 4, letterSpacing: "0.06em" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
