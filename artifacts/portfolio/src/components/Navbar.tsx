import { Link, useRoute } from "wouter";

export function Navbar() {
  const [isHome] = useRoute("/");
  const [isWork] = useRoute("/work");
  const [isWorkDetail] = useRoute("/work/:slug");
  const onWork = isWork || isWorkDetail;

  return (
    <nav className="w-full px-8 md:px-14 py-6 flex justify-between items-center z-50 sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Logo mark */}
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-primary-foreground" style={{ backgroundColor: "hsl(var(--primary))" }}>
          <span className="font-serif text-sm leading-none">M</span>
        </div>
        <span className="font-sans font-semibold text-sm text-foreground tracking-tight">Mohana Das</span>
      </Link>

      {/* Pill nav */}
      <div className="flex gap-1 p-1 rounded-full" style={{ backgroundColor: "hsl(var(--muted))" }}>
        {[
          { label: "Work", href: "/work", active: onWork },
          { label: "About", href: "/", active: isHome && !onWork },
        ].map(({ label, href, active }) => (
          <Link
            key={label}
            href={href}
            className="px-5 py-2 rounded-full text-xs font-medium transition-colors no-underline"
            style={{
              backgroundColor: active ? "hsl(var(--primary))" : "transparent",
              color: active ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
