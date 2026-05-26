import React from "react";
import { ArrowRight } from "lucide-react";

export function ConceptB() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300..400&display=swap" />
      <div 
        className="min-h-screen w-full flex flex-col relative text-[#2D2A26] overflow-hidden selection:bg-[#E3E0D8] selection:text-[#2D2A26]"
        style={{ 
          backgroundColor: "#F9F8F6",
          fontFamily: "'DM Sans', sans-serif" 
        }}
      >
        {/* Subtle background texture/gradient */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#EAE7DF] via-transparent to-transparent" />
        
        {/* Navigation */}
        <nav className="w-full max-w-6xl mx-auto px-8 md:px-12 py-10 flex justify-between items-center z-10">
          <div 
            className="text-lg tracking-widest uppercase font-semibold"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            E.W.
          </div>
          <ul className="hidden md:flex gap-12 text-[13px] tracking-widest uppercase text-[#5A5753]">
            <li><a href="#" className="hover:text-[#2D2A26] transition-colors duration-500 pb-1 border-b border-transparent hover:border-[#2D2A26]">Work</a></li>
            <li><a href="#" className="hover:text-[#2D2A26] transition-colors duration-500 pb-1 border-b border-transparent hover:border-[#2D2A26]">About</a></li>
            <li><a href="#" className="hover:text-[#2D2A26] transition-colors duration-500 pb-1 border-b border-transparent hover:border-[#2D2A26]">Journal</a></li>
            <li><a href="#" className="hover:text-[#2D2A26] transition-colors duration-500 pb-1 border-b border-transparent hover:border-[#2D2A26]">Contact</a></li>
          </ul>
        </nav>

        {/* Hero Content */}
        <main className="flex-1 flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-8 md:px-12 z-10 pb-20">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight text-[#2D2A26]"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Elena Wright
              <span className="block mt-4 md:mt-6 text-2xl md:text-3xl lg:text-4xl text-[#7B856A] italic">
                Digital Product Designer
              </span>
            </h1>
            
            <div className="w-[1px] h-16 bg-[#D4D0C5] mx-auto my-12" />

            <p className="text-lg md:text-xl text-[#5A5753] font-light max-w-2xl mx-auto leading-relaxed">
              Crafting calm, intuitive digital experiences that bring clarity to complex systems. Currently exploring the intersection of typography and interaction.
            </p>

            <div className="pt-12">
              <a 
                href="#" 
                className="inline-flex items-center gap-4 text-sm tracking-widest uppercase text-[#2D2A26] group"
              >
                <span className="pb-1 border-b border-[#D4D0C5] group-hover:border-[#2D2A26] transition-colors duration-500">
                  View Selected Works
                </span>
                <ArrowRight className="w-4 h-4 text-[#7B856A] group-hover:translate-x-1 transition-transform duration-500" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ConceptB;
