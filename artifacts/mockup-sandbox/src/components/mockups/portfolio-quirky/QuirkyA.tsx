import React from 'react';
import { ArrowRight } from 'lucide-react';

export function QuirkyA() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden selection:bg-[#C5F135] selection:text-[#0D3B2E]"
      style={{ 
        backgroundColor: '#FFFCF0', 
        color: '#0D3B2E',
        fontFamily: '"DM Serif Display", serif'
      }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Space+Grotesk:wght@400;600;700&display=swap" 
        rel="stylesheet" 
      />

      {/* Grain overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-multiply z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Riso shapes */}
      <div 
        className="absolute rounded-full mix-blend-multiply blur-[2px]"
        style={{
          width: '45vw',
          height: '45vw',
          backgroundColor: '#C5F135',
          top: '-10%',
          right: '-5%',
          opacity: 0.85
        }}
      ></div>
      
      <div 
        className="absolute mix-blend-multiply blur-[1px] rotate-12"
        style={{
          width: '35vw',
          height: '50vw',
          backgroundColor: '#C45C26',
          top: '20%',
          right: '15%',
          opacity: 0.75,
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'
        }}
      ></div>

      <div 
        className="absolute rounded-full mix-blend-multiply blur-[2px]"
        style={{
          width: '25vw',
          height: '25vw',
          backgroundColor: '#C5F135',
          bottom: '-5%',
          left: '10%',
          opacity: 0.8
        }}
      ></div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 md:p-12">
        <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="font-bold text-xl tracking-tight uppercase">
          Mohana Das
        </div>
        <div className="flex gap-8" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          <a href="#" className="font-semibold text-lg hover:underline underline-offset-4 decoration-2 decoration-[#C45C26]">Work</a>
          <a href="#" className="font-semibold text-lg hover:underline underline-offset-4 decoration-2 decoration-[#C45C26]">About</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col justify-center min-h-[75vh] px-6 md:px-12 max-w-7xl mx-auto">
        
        <div 
          className="inline-block px-4 py-2 border-2 border-[#0D3B2E] mb-8 w-fit rotate-[-2deg] bg-[#FFFCF0]"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          <span className="font-bold uppercase tracking-wider text-sm">Content Strategist & Product Thinker</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8 max-w-5xl relative z-10">
          Making sense of <br />
          <span className="relative inline-block">
            <span className="relative z-10 italic">messy products.</span>
            <span 
              className="absolute inset-0 bg-[#C5F135] -z-10 mix-blend-multiply" 
              style={{ transform: 'rotate(1deg) scale(1.05) translateY(10%)' }}
            ></span>
          </span>
        </h1>

        <p 
          className="text-xl md:text-2xl max-w-2xl mb-12 font-medium"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          10+ years shaping the way fintech and travel products speak, behave, and scale. Currently untangling knots at Aampe, Tokyo.
        </p>

        <button 
          className="group relative inline-flex items-center gap-4 bg-[#C45C26] text-[#FFFCF0] px-8 py-5 text-xl w-fit overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0D3B2E] border-2 border-[#0D3B2E]"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          <span className="font-bold relative z-10">See the work</span>
          <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
        </button>

      </main>
    </div>
  );
}
