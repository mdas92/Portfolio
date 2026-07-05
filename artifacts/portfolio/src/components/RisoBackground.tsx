export function RisoBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        className="absolute rounded-full mix-blend-multiply blur-[2px]"
        style={{
          width: "40vw",
          height: "40vw",
          backgroundColor: "#C5F135",
          top: "-12%",
          right: "-8%",
          opacity: 0.35,
        }}
      />

      <div
        className="absolute mix-blend-multiply blur-[1px] rotate-12"
        style={{
          width: "28vw",
          height: "40vw",
          backgroundColor: "#C45C26",
          top: "35%",
          right: "-10%",
          opacity: 0.18,
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
        }}
      />

      <div
        className="absolute rounded-full mix-blend-multiply blur-[2px]"
        style={{
          width: "22vw",
          height: "22vw",
          backgroundColor: "#C5F135",
          bottom: "-6%",
          left: "6%",
          opacity: 0.25,
        }}
      />
    </div>
  );
}
