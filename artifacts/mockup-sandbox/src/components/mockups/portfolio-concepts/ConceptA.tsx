import React from "react";
import { ArrowRight } from "lucide-react";

export function ConceptA() {
  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Bungee&family=Inter:wght@300;400;500;600&display=swap" 
      />
      <div 
        className="min-h-screen w-full bg-[#FFFFFF] text-[#0D0D0D] flex flex-col selection:bg-[#FFE600] selection:text-[#0D0D0D]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Navigation */}
        <nav className="w-full flex items-center justify-between px-6 py-5 md:px-12 border-b border-[#0D0D0D]">
          <div 
            className="text-2xl md:text-3xl flex items-center gap-2 tracking-wide"
            style={{ fontFamily: "'Bungee', cursive" }}
          >
            <span className="w-4 h-4 bg-[#FFE600] block -mt-1" />
            STUDIO
          </div>
          <ul className="hidden md:flex items-center gap-12 text-sm font-semibold tracking-[0.1em] uppercase">
            <li>
              <a href="#" className="hover:text-[#FFE600] transition-colors relative group">
                WORK
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFE600] transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFE600] transition-colors relative group">
                SERVICES
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFE600] transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFE600] transition-colors relative group">
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFE600] transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFE600] transition-colors relative group">
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFE600] transition-all group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Content */}
        <main className="flex-1 flex flex-col justify-center px-6 md:px-12 relative w-full pt-12 pb-24">
          <div className="w-full flex flex-col items-start max-w-7xl mx-auto">
            <h1 
              className="text-[14vw] sm:text-[12vw] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-tight mb-8 break-words uppercase text-left w-full"
              style={{ fontFamily: "'Bungee', cursive" }}
            >
              WE MAKE<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #0D0D0D" }}>THINGS</span><br />
              <span className="relative inline-block">
                HAPPEN
                <span className="absolute bottom-2 md:bottom-4 left-0 w-full h-[12px] md:h-[24px] bg-[#FFE600] -z-10 mix-blend-multiply"></span>
              </span>
            </h1>
            
            <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 items-start mt-8">
              <div className="md:w-1/3">
                <p className="font-semibold tracking-[0.15em] uppercase text-xs md:text-sm border-l-2 border-[#FFE600] pl-4">
                  Creative Direction<br/>
                  Brand Identity<br/>
                  Digital Design
                </p>
              </div>
              
              <div className="md:w-2/3 max-w-2xl">
                <p className="text-xl md:text-2xl leading-relaxed mb-10 font-normal">
                  We are a digital design studio partnering with ambitious founders to build brands that refuse to be ignored. Bold work for brave clients.
                </p>
                
                <button className="group inline-flex items-center gap-3 px-8 py-5 bg-[#0D0D0D] text-[#FFFFFF] font-semibold tracking-widest text-sm uppercase hover:bg-[#FFE600] hover:text-[#0D0D0D] transition-colors duration-200">
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ConceptA;
