import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function QuirkyC() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet" />

      <div 
        className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col selection:bg-[#F0A500] selection:text-[#2C1654]"
        style={{ backgroundColor: '#EBE4F7', color: '#2C1654', fontFamily: '"Inter", sans-serif' }}
      >
        {/* Decorative Background Shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[60vh] rounded-full mix-blend-multiply opacity-60 blur-3xl" style={{ backgroundColor: '#D4877A', transform: 'rotate(-15deg)' }} />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply opacity-50 blur-3xl" style={{ backgroundColor: '#F0A500' }} />
        <div className="absolute top-[30%] left-[20%] w-[20vw] h-[20vw] rounded-full mix-blend-multiply opacity-40 blur-2xl" style={{ backgroundColor: '#7FAF7B' }} />
        
        {/* Crisp overlapping shapes */}
        <div className="absolute top-[15%] right-[15%] w-32 h-64 rounded-full border-2 opacity-30" style={{ borderColor: '#2C1654', transform: 'rotate(15deg)' }} />
        <div className="absolute top-[18%] right-[18%] w-32 h-64 rounded-full border-2 opacity-20" style={{ borderColor: '#F0A500', transform: 'rotate(25deg)' }} />
        
        <div className="absolute bottom-[20%] left-[10%] w-48 h-24 rounded-full opacity-80" style={{ backgroundColor: '#7FAF7B', transform: 'rotate(-10deg)' }} />
        <div className="absolute bottom-[18%] left-[15%] w-48 h-24 rounded-full opacity-90 backdrop-blur-sm" style={{ backgroundColor: '#D4877A', transform: 'rotate(-5deg)' }} />
        
        {/* Navigation */}
        <nav className="relative z-10 w-full px-8 py-8 flex justify-between items-center max-w-screen-2xl mx-auto">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>Mohana Das</span>
            <span className="text-xs uppercase tracking-widest font-semibold opacity-60 mt-1">Content & Product</span>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Work</a>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ backgroundColor: 'rgba(240, 165, 0, 0.15)' }}>
              <Sparkles size={14} style={{ color: '#F0A500' }} />
              <span className="text-sm font-medium">Content Strategist & Product Thinker</span>
            </div>
            
            <h1 
              className="text-6xl md:text-8xl lg:text-[7rem] leading-[1.05] mb-8" 
              style={{ fontFamily: '"Playfair Display", serif', fontWeight: 500 }}
            >
              Making sense of <span className="italic" style={{ color: '#D4877A' }}>complex</span> products through words.
            </h1>
            
            <p className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-12 opacity-80 font-light">
              10+ years across fintech, travel, and product. Currently shaping narratives at Aampe (Tokyo). Previously making things clear at PayU, GoIbibo, and Adobe.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <button 
                className="group flex items-center gap-3 px-8 py-4 rounded-full text-[#2C1654] font-semibold transition-transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: '#F0A500' }}
              >
                See my work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 rounded-full font-semibold transition-colors hover:bg-black/5">
                Say hello
              </button>
            </div>
          </div>
        </main>
        
        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] rounded-tl-full opacity-10 pointer-events-none" style={{ backgroundColor: '#2C1654' }} />
      </div>
    </>
  );
}

export default QuirkyC;
