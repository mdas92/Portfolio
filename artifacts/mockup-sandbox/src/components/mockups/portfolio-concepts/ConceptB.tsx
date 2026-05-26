import React from "react";
import { ArrowUpRight } from "lucide-react";

export function ConceptB() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" />
      <div 
        className="min-h-screen w-full flex flex-col relative text-[#111111] overflow-hidden selection:bg-[#FF4530] selection:text-white"
        style={{ 
          backgroundColor: "#FAFAFA",
          fontFamily: "'DM Sans', sans-serif" 
        }}
      >
        {/* Navigation */}
        <nav className="w-full px-6 md:px-16 py-8 flex justify-between items-start z-10">
          <div 
            className="text-2xl italic font-semibold tracking-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Aura.
          </div>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-sm font-medium tracking-wide">
            <li className="relative group cursor-pointer">
              <span className="hover:text-[#FF4530] transition-colors duration-300">Index</span>
              <span className="absolute -left-3 top-2 w-1.5 h-1.5 rounded-full bg-[#FF4530] opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
            <li className="relative group cursor-pointer">
              <span className="hover:text-[#FF4530] transition-colors duration-300">Archive</span>
              <span className="absolute -left-3 top-2 w-1.5 h-1.5 rounded-full bg-[#FF4530] opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
            <li className="relative group cursor-pointer">
              <span className="hover:text-[#FF4530] transition-colors duration-300">Info</span>
              <span className="absolute -left-3 top-2 w-1.5 h-1.5 rounded-full bg-[#FF4530] opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
          </ul>
        </nav>

        {/* Hero Content */}
        <main className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 z-10 pb-20 mt-12 md:mt-0">
          <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
            
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <div className="w-8 h-[2px] bg-[#FF4530]" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#111111]">
                Creative Director & Designer
              </span>
            </div>

            <h1 
              className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-[-0.04em] text-[#111111]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              <span className="block font-medium">Making</span>
              <span className="block italic font-light">things <span className="text-[#FF4530] font-normal not-italic relative">pop<svg className="absolute -bottom-4 left-0 w-full h-4 text-[#FF4530]" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 50 20 100 10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg></span>.</span>
            </h1>
            
            <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-5 lg:col-span-4">
                <p className="text-lg md:text-xl text-[#111111]/70 leading-relaxed font-light">
                  I design digital experiences that feel human, look sharp, and don't take themselves too seriously.
                </p>
              </div>
              <div className="md:col-span-7 lg:col-span-8 flex justify-start md:justify-end">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center gap-2 bg-[#FF4530] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#e03d2a] transition-all duration-300 hover:scale-105 group"
                >
                  Start a project
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}

export default ConceptB;
