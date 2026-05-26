import React from "react";

export default function QuirkyB() {
  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden flex flex-col selection:bg-[#E8352A] selection:text-[#F2EDE4]"
      style={{ backgroundColor: "#F2EDE4", color: "#0A0A0A", fontFamily: "'Courier Prime', monospace" }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

      {/* Top Nav */}
      <nav className="w-full flex justify-between items-center p-6 md:p-8 border-b-[3px] border-[#0A0A0A]">
        <div className="font-bold tracking-widest text-sm uppercase">M.D. Vol. 1</div>
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hover:bg-[#0A0A0A] hover:text-[#FFE500] px-2 py-1 transition-colors">About</a>
          <a href="#" className="hover:bg-[#0A0A0A] hover:text-[#FFE500] px-2 py-1 transition-colors">Work</a>
        </div>
      </nav>

      {/* Main Grid Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 relative">
        
        {/* Left Column: Masthead & Bio */}
        <div className="lg:col-span-8 flex flex-col border-r-[3px] border-[#0A0A0A]">
          <div className="p-6 md:p-12 pb-0 flex-1 flex flex-col justify-center relative">
            <h2 className="text-[#E8352A] text-lg md:text-2xl font-bold uppercase tracking-widest mb-4">
              Content Strategist & Product Thinker
            </h2>
            
            {/* Huge Name */}
            <h1 
              className="text-[15vw] leading-[0.8] m-0 -ml-1 text-[#0A0A0A] mix-blend-multiply whitespace-nowrap"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              MOHANA DAS
            </h1>
            
            {/* Graphic element overlapping */}
            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-[#0A0A0A] -z-10 transform -translate-y-1/2"></div>
          </div>

          <div className="border-t-[3px] border-[#0A0A0A] p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FFE500]">
            <div>
              <p className="text-xl md:text-2xl font-bold uppercase leading-snug">
                I make sense of complex systems through words.
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg leading-relaxed">
                10+ years shaping product narratives across fintech, travel, and beyond. 
                Currently untangling human behavior at Aampe (Tokyo). 
                Previously making things click at PayU, GoIbibo, and Adobe.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: CTA & Details */}
        <div className="lg:col-span-4 flex flex-col bg-[#F2EDE4]">
          <div className="p-8 border-b-[3px] border-[#0A0A0A] h-full flex flex-col justify-between items-start">
            <div className="w-full">
              <div className="text-xs uppercase font-bold border-b-2 border-[#0A0A0A] pb-2 mb-6 w-full flex justify-between">
                <span>Location</span>
                <span>Tokyo, JP</span>
              </div>
              <div className="text-xs uppercase font-bold border-b-2 border-[#0A0A0A] pb-2 mb-6 w-full flex justify-between">
                <span>Status</span>
                <span>Available for freelance</span>
              </div>
            </div>

            {/* Sticker CTA */}
            <div className="mt-12 self-center md:self-end transform rotate-[-4deg] hover:rotate-0 transition-transform">
              <a 
                href="#" 
                className="inline-block bg-[#0A0A0A] text-[#FFE500] px-8 py-6 text-xl md:text-3xl font-bold uppercase tracking-wider relative group"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Let's Talk
                {/* Sticker effect shadow */}
                <div className="absolute top-2 left-2 w-full h-full bg-[#E8352A] -z-10 group-hover:top-1 group-hover:left-1 transition-all"></div>
              </a>
            </div>
          </div>
          
          <div className="p-8 flex items-end justify-center bg-[#0A0A0A] text-[#F2EDE4] overflow-hidden relative min-h-[200px]">
             {/* Decorative repeated text */}
             <div 
              className="absolute -right-4 -bottom-4 text-[120px] leading-none opacity-20 whitespace-nowrap"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
             >
                WORDS
             </div>
             <p className="text-sm font-bold uppercase z-10 text-center">
               Not your average designer copy.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
