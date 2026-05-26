import React from 'react';

export function ConceptC() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Space+Grotesk:wght@300..700&display=swap" />
      <div className="min-h-screen w-full bg-[#f8f7f5] text-[#0a192f] flex flex-col font-['Space_Grotesk',sans-serif]">
        {/* Nav */}
        <nav className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-6 border-b border-[#0a192f]/20">
          <div className="flex items-baseline gap-4 mb-4 md:mb-0">
            <span className="font-['Playfair_Display',serif] text-2xl italic tracking-wider">Jane Doe</span>
            <div className="w-12 h-[1px] bg-[#e07a5f]"></div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#e07a5f]">Design Systems</span>
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-[#e07a5f] transition-colors relative group">
              Index
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e07a5f] transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-[#e07a5f] transition-colors relative group">
              Information
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e07a5f] transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-[#e07a5f] transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e07a5f] transition-all group-hover:w-full"></span>
            </a>
          </div>
        </nav>

        {/* Main */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 px-8 py-16 gap-8">
          {/* Left Column - Structural Typography */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h1 className="text-[12vw] lg:text-[6rem] xl:text-[7rem] leading-[0.9] font-bold text-[#0a192f] uppercase tracking-tighter">
              Structured
              <br />
              <span className="font-['Playfair_Display',serif] italic font-normal text-[#e07a5f] normal-case tracking-normal text-[13vw] lg:text-[6.5rem] xl:text-[7.5rem]">Intelligence</span>
              <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #0a192f' }}>By Design</span>
            </h1>
            
            <div className="mt-12 max-w-xl text-lg leading-relaxed text-[#0a192f]/80 font-light">
              I am a digital designer and creative technologist based in New York. I build systematic, grid-forward interfaces that don't sacrifice soul for scalability.
            </div>

            <div className="mt-16">
              <a href="#" className="inline-flex items-center gap-4 text-[#0a192f] font-bold text-sm uppercase tracking-widest group">
                <span className="border-b border-[#e07a5f] pb-1 group-hover:border-[#0a192f] transition-colors">Explore the Archive</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform text-[#e07a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Secondary Info / Image */}
          <div className="lg:col-span-4 flex flex-col justify-between lg:border-l border-[#0a192f]/20 lg:pl-8 pt-12 lg:pt-0">
            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-[#0a192f]/50 mb-4 font-bold">Current Status</h3>
                <p className="text-sm font-medium leading-snug">Available for freelance opportunities starting Q4 2023.</p>
              </div>
              
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-[#0a192f]/50 mb-4 font-bold">Selected Clients</h3>
                <ul className="text-sm font-medium leading-relaxed space-y-1">
                  <li className="flex justify-between border-b border-[#0a192f]/10 pb-2"><span>Acne Studios</span> <span className="font-mono text-xs opacity-60">2023</span></li>
                  <li className="flex justify-between border-b border-[#0a192f]/10 pb-2 pt-2"><span>SSENSE</span> <span className="font-mono text-xs opacity-60">2022</span></li>
                  <li className="flex justify-between border-b border-[#0a192f]/10 pb-2 pt-2"><span>Vogue</span> <span className="font-mono text-xs opacity-60">2021</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 h-[300px] w-full bg-[#0a192f] relative overflow-hidden group">
              <img 
                src="/__mockup/images/editorial-abstract.jpg" 
                alt="Editorial Abstract" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-[#e07a5f] m-4 pointer-events-none opacity-50"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
