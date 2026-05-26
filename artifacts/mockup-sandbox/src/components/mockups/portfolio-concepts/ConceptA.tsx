import React from "react";
import { ArrowRight } from "lucide-react";

export function ConceptA() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&family=Space+Grotesk:wght@300..700&display=swap"
      />
      <div 
        className="min-h-screen w-full bg-[#050505] text-[#f4f4f4] flex flex-col relative overflow-hidden selection:bg-[#ccff00] selection:text-black"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ccff00]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        {/* Navigation */}
        <nav className="w-full flex items-center justify-between px-8 py-8 md:px-12 relative z-10">
          <div className="text-xl font-bold tracking-tighter uppercase flex items-center gap-2">
            <span className="w-3 h-3 bg-[#ccff00] rounded-sm block" />
            V.A.
          </div>
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-neutral-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">Work</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Hero Content */}
        <main className="flex-1 flex flex-col justify-center px-8 md:px-12 relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="max-w-5xl">
            <p className="text-[#ccff00] font-medium tracking-widest uppercase mb-6 text-sm flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#ccff00]" />
              Creative Technologist
            </p>
            
            <h1 
              className="text-[4rem] md:text-[7rem] lg:text-[8rem] font-extrabold leading-[0.9] tracking-tighter mb-8"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              DESIGNER.<br />
              <span className="text-neutral-500">DEVELOPER.</span><br />
              CREATOR.
            </h1>
            
            <div className="max-w-xl">
              <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed mb-12 font-light">
                I build digital experiences that live at the intersection of stark minimalism and raw engineering.
              </p>
              
              <button className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-semibold text-lg hover:bg-[#ccff00] transition-colors duration-300">
                View Selected Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </main>
        
        {/* Decorative Grid / Lines */}
        <div className="absolute inset-0 border-l border-r border-white/5 w-[1px] left-1/2 -translate-x-1/2 pointer-events-none hidden md:block" />
        <div className="absolute bottom-12 right-12 flex flex-col gap-2 text-xs text-neutral-600 font-mono items-end pointer-events-none">
          <span>LAT_34.0522° N</span>
          <span>LNG_118.2437° W</span>
          <span>EST_2025</span>
        </div>
      </div>
    </>
  );
}

export default ConceptA;
