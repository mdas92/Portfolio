import { motion } from "framer-motion";
import { journey } from "../data/portfolio";

export default function Journey() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 flex flex-col px-6 md:px-16 lg:px-24 py-12 md:py-24 max-w-5xl mx-auto w-full"
    >
      <div className="mb-20">
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-4">
          Career
        </span>
        <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">My Journey</h1>
        <p className="text-xl md:text-2xl text-foreground/70 font-light max-w-2xl">
          Engineering to design to writing. Here's how the path unfolded.
        </p>
      </div>

      <div className="flex flex-col border-t border-border/50">
        {journey.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-12 border-b border-border/50 group"
          >
            <div className="md:col-span-4 relative">
              <div className="hidden md:block absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-foreground z-10" />
              <div className="text-foreground font-sans font-bold text-xs uppercase tracking-[0.2em]">
                {item.date}
              </div>
            </div>
            <div className="md:col-span-8 flex flex-col gap-2">
              <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                {item.role}
              </h3>
              <div className="text-muted-foreground font-medium mb-2">
                {item.company}
              </div>
              <p className="text-foreground/80 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
