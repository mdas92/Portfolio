import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";

export function Navbar() {
  const [isHome] = useRoute("/");
  const [isWork, params] = useRoute("/work/*?");

  return (
    <nav className="w-full px-6 md:px-16 py-8 flex justify-between items-start z-50 sticky top-0 bg-[#FAFAFA]/90 backdrop-blur-sm border-b border-transparent transition-all">
      <Link href="/" className="text-2xl italic font-semibold tracking-tight font-serif text-foreground hover:text-primary transition-colors">
        Mohana Das
      </Link>
      <ul className="flex flex-row gap-6 md:gap-10 text-sm font-medium tracking-wide font-sans uppercase text-[11px] tracking-[0.2em]">
        <li className="relative group">
          <Link href="/" className={`transition-colors duration-300 ${isHome ? "text-primary" : "text-foreground hover:text-primary"}`}>
            About
          </Link>
          {isHome && (
            <motion.div layoutId="nav-indicator" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary" />
          )}
        </li>
        <li className="relative group">
          <Link href="/work" className={`transition-colors duration-300 ${(isWork || params) ? "text-primary" : "text-foreground hover:text-primary"}`}>
            Work
          </Link>
          {(isWork || params) && (
            <motion.div layoutId="nav-indicator" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary" />
          )}
        </li>
      </ul>
    </nav>
  );
}
