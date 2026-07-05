import { Link, useRoute } from "wouter";

export function Navbar() {
  const [isHome] = useRoute("/");
  const [isWork, params] = useRoute("/work/*?");

  return (
    <nav className="w-full px-6 md:px-16 py-8 flex justify-between items-center z-50 sticky top-0 bg-background/90 backdrop-blur-sm border-b border-transparent transition-all">
      <Link href="/" className="font-sans font-bold text-xl tracking-tight uppercase text-foreground hover:text-primary transition-colors">
        Mohana Das
      </Link>
      <ul className="flex flex-row gap-6 md:gap-10 font-sans font-semibold text-[11px] tracking-[0.2em] uppercase">
        <li className="relative group">
          <Link
            href="/"
            className={`underline-offset-4 decoration-2 decoration-primary transition-colors duration-300 ${isHome ? "text-primary underline" : "text-foreground hover:text-primary hover:underline"}`}
          >
            About
          </Link>
        </li>
        <li className="relative group">
          <Link
            href="/work"
            className={`underline-offset-4 decoration-2 decoration-primary transition-colors duration-300 ${(isWork || params) ? "text-primary underline" : "text-foreground hover:text-primary hover:underline"}`}
          >
            Work
          </Link>
        </li>
      </ul>
    </nav>
  );
}
