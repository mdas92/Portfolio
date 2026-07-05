export function Footer() {
  return (
    <footer className="w-full px-6 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center z-10 mt-auto border-t border-border/50 text-[11px] tracking-[0.15em] uppercase font-sans font-semibold text-muted-foreground">
      <div>
        Mohana Das ·{" "}
        <a
          href="mailto:mohanadas.dsi@gmail.com"
          className="normal-case tracking-normal hover:text-primary hover:underline underline-offset-4 decoration-2 decoration-primary transition-colors"
        >
          mohanadas.dsi@gmail.com
        </a>
      </div>
      <div className="mt-4 md:mt-0">
        <a
          href="https://www.linkedin.com/in/mohanadsi/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary hover:underline underline-offset-4 decoration-2 decoration-primary transition-colors flex items-center gap-1"
        >
          LinkedIn <span className="text-[10px] normal-case">↗</span>
        </a>
      </div>
    </footer>
  );
}
