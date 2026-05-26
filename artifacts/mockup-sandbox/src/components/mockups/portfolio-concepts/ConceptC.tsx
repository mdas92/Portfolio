import React from 'react';

export function ConceptC() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Space+Grotesk:wght@300;400;500;600&display=swap" />
      <div className="min-h-screen w-full bg-[#FFFFFF] text-[#000000] font-['Space_Grotesk',sans-serif] selection:bg-[#0040FF] selection:text-white flex flex-col overflow-hidden relative">
        
        {/* Giant structural background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] leading-none font-['Dela_Gothic_One',cursive] text-[#000000] opacity-[0.03] pointer-events-none select-none z-0">
          *
        </div>

        {/* Navigation */}
        <nav className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between px-6 py-5 border-b-2 border-[#000000]">
          <div className="font-['Dela_Gothic_One',cursive] text-2xl tracking-tighter uppercase mb-4 sm:mb-0">
            ALEX<span className="text-[#0040FF]">.</span>
          </div>
          <div className="flex items-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-[#0040FF] transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0040FF]"></span>
              Index
            </a>
            <a href="#" className="hover:text-[#0040FF] transition-colors">Manifesto</a>
            <a href="#" className="hover:text-[#0040FF] transition-colors">Archive</a>
            <a href="#" className="text-[#0040FF] hover:text-[#000000] transition-colors">Connect</a>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-[1600px] mx-auto px-6 py-12 md:py-24">
          
          {/* Typographic Hero */}
          <div className="w-full mb-16 md:mb-32">
            <h1 className="font-['Dela_Gothic_One',cursive] text-[16vw] lg:text-[14rem] leading-[0.8] uppercase tracking-tighter break-words">
              SYSTEM
              <br />
              <span className="text-[#0040FF] md:ml-[15vw]">DESIGN</span>
            </h1>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 w-full">
            <div className="md:col-span-3 border-t-2 border-[#000000] pt-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-[#0040FF]">Role & Location</h2>
              <p className="text-lg font-medium leading-snug">
                Senior Interface Architect<br />
                San Francisco, CA
              </p>
            </div>
            
            <div className="md:col-span-4 md:col-start-5 border-t-2 border-[#000000] pt-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-[#0040FF]">The Practice</h2>
              <p className="text-base font-light leading-relaxed">
                Constructing digital environments with unapologetic scale and brutal precision. I believe the internet should feel solid, intentional, and dangerously sharp. Less decoration, more structure.
              </p>
            </div>

            <div className="md:col-span-3 md:col-start-10 border-t-2 border-[#000000] pt-4 flex flex-col items-start">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#0040FF]">Status</h2>
              <div className="flex items-center gap-2 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0040FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0040FF]"></span>
                </span>
                <span className="text-sm font-medium">Accepting Inquiries</span>
              </div>
              <a href="#" className="inline-block border-2 border-[#000000] text-[#000000] font-bold uppercase tracking-widest text-sm px-6 py-3 hover:bg-[#0040FF] hover:border-[#0040FF] hover:text-[#FFFFFF] transition-colors">
                View Archive
              </a>
            </div>
          </div>
        </main>
        
        {/* Footer Marquee / Bar */}
        <div className="relative z-10 border-t-2 border-[#000000] py-4 px-6 flex justify-between items-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
          <span>© 2024 / EDITION 001</span>
          <span className="hidden sm:inline-block">NO COMPROMISE</span>
          <span className="text-[#0040FF]">INITIATE SEQUENCE →</span>
        </div>
      </div>
    </>
  );
}
