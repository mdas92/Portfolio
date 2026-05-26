import { motion } from "framer-motion";
import { Link } from "wouter";
import { projects } from "../data/portfolio";

export default function Work() {
  const currentProjects = projects.filter((p) => p.year === "2025");
  const olderProjects = projects.filter((p) => p.year !== "2025");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 flex flex-col px-6 md:px-16 lg:px-24 py-12 md:py-24 max-w-7xl mx-auto w-full"
    >
      <div className="mb-20">
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-4">
          Selected Work
        </span>
        <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">Projects</h1>
        <p className="text-xl md:text-2xl text-foreground/70 font-light max-w-2xl">
          A selection of content strategy, UX writing, and product thinking work.
        </p>
      </div>

      {/* Current Work */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 mb-24">
        {currentProjects.map((project, i) => {
          const isFullWidth = project.slug === "playbook";
          const classes = `bg-background p-8 md:p-12 flex flex-col justify-between group hover:bg-muted/30 transition-colors ${
            isFullWidth ? "md:col-span-2" : ""
          }`;

          return (
            <Link key={project.slug} href={`/work/${project.slug}`} className={classes}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-6">
                    {project.tag}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground">{project.summary}</p>
                </div>
                <div className="mt-12 flex items-center text-sm font-medium hover:text-primary relative self-start">
                  <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">View Project ↗</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-foreground/20 group-hover:bg-primary transition-colors" />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Older Projects */}
      <div className="mb-10">
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-2">
          Older Work
        </span>
        <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-tight">LazyPay · PayU Finance</h2>
        <p className="text-lg text-foreground/60 font-light max-w-2xl">
          UX Writing and content strategy work from 2021–2024, as the first and only UX Writer at PayU Finance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
        {olderProjects.map((project, i) => {
          const classes = `bg-background flex flex-col group transition-colors ${
            project.comingSoon ? "opacity-50" : "hover:bg-muted/30"
          }`;

          if (project.comingSoon) {
            return (
              <div key={project.slug} className={classes}>
                {project.thumbnail && (
                  <div className="w-full overflow-hidden" style={{ maxHeight: 200 }}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full object-cover"
                      style={{ maxHeight: 200 }}
                    />
                  </div>
                )}
                <div className="p-8 md:p-12 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-6">
                      {project.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{project.summary}</p>
                  </div>
                  <div className="mt-8">
                    <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs uppercase tracking-wider font-medium">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link key={project.slug} href={`/work/${project.slug}`} className={classes}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="h-full flex flex-col"
              >
                {project.thumbnail && (
                  <div className="w-full overflow-hidden" style={{ maxHeight: 220 }}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      style={{ maxHeight: 220 }}
                    />
                  </div>
                )}
                <div className="p-8 md:p-12 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground block mb-4">
                      {project.tag}
                      {project.duration && (
                        <span className="ml-3 text-foreground/30">·</span>
                      )}
                      {project.duration && (
                        <span className="ml-3">{project.duration}</span>
                      )}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif mb-3 leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.summary}</p>
                  </div>
                  <div className="mt-8 flex items-center text-sm font-medium relative self-start">
                    <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">View Project ↗</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-foreground/20 group-hover:bg-primary transition-colors" />
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
