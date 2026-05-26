import React, { useState, useEffect } from 'react';

export function QuirkyE() {
  const [cursorBlink, setCursorBlink] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  
  const dialogText = "★ NEW GAME — Content Strategist joins the party! 10+ years of XP. Currently questing at Aampe, Tokyo. Previously: PayU/LazyPay, GoIbibo, Adobe.";
  
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (textIndex < dialogText.length) {
      const timeout = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, dialogText.length]);

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden bg-[#0D0D1A] text-white selection:bg-[#FF00FF] selection:text-white flex flex-col items-center justify-center p-4 md:p-8 font-mono"
      style={{
        fontFamily: "'Courier New', Courier, monospace"
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .pixel-font {
          font-family: 'Press Start 2P', cursive;
        }

        .scanlines {
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.2)
          );
          background-size: 100% 4px;
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 50;
        }
        
        .pixel-border {
          box-shadow: 
            -4px 0 0 white,
            4px 0 0 white,
            0 -4px 0 white,
            0 4px 0 white,
            inset -4px 0 0 white,
            inset 4px 0 0 white,
            inset 0 -4px 0 white,
            inset 0 4px 0 white;
          border: 4px solid #0D0D1A;
        }

        .pixel-button {
          box-shadow: 
            -4px 0 0 #FFD700,
            4px 0 0 #FFD700,
            0 -4px 0 #FFD700,
            0 4px 0 #FFD700;
          border: 4px solid #0D0D1A;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* CRT Overlay */}
      <div className="scanlines"></div>
      
      {/* Vigentte */}
      <div className="absolute inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]"></div>

      <div className="max-w-4xl w-full z-10 flex flex-col gap-8 h-full">
        {/* Header / Title */}
        <div className="text-center mt-8 animate-float">
          <h2 className="text-[#00E5FF] pixel-font text-sm md:text-xl mb-4 tracking-widest">
            LVL 10 — CONTENT STRATEGIST
          </h2>
          <h1 className="text-[#FFD700] pixel-font text-3xl md:text-6xl tracking-widest leading-tight drop-shadow-[0_4px_0_#FF00FF]">
            MOHANA DAS<span className={cursorBlink ? 'opacity-100' : 'opacity-0'}>_</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-4">
          {/* Character Stats */}
          <div className="w-full md:w-1/3 bg-[#0D0D1A] pixel-border p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center border-b-2 border-white pb-2 mb-2">
              <span className="pixel-font text-lg text-[#FF00FF]">STATS</span>
              <span className="pixel-font text-xs text-white">★ x 99</span>
            </div>

            <div className="flex flex-col gap-4">
              {/* HP */}
              <div>
                <div className="flex justify-between pixel-font text-xs mb-2">
                  <span className="text-white">HP</span>
                  <span className="text-white">999/999</span>
                </div>
                <div className="w-full h-4 border-2 border-white bg-[#0D0D1A] p-[2px]">
                  <div className="h-full bg-[#FF00FF] w-full"></div>
                </div>
              </div>

              {/* MP */}
              <div>
                <div className="flex justify-between pixel-font text-xs mb-2">
                  <span className="text-white">MP</span>
                  <span className="text-white">999/999</span>
                </div>
                <div className="w-full h-4 border-2 border-white bg-[#0D0D1A] p-[2px]">
                  <div className="h-full bg-[#00E5FF] w-[95%]"></div>
                </div>
              </div>

              {/* XP */}
              <div>
                <div className="flex justify-between pixel-font text-xs mb-2">
                  <span className="text-white">XP</span>
                  <span className="text-white">MAX</span>
                </div>
                <div className="w-full h-4 border-2 border-white bg-[#0D0D1A] p-[2px]">
                  <div className="h-full bg-[#FFD700] w-full"></div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <div className="flex justify-between items-center">
                <span className="pixel-font text-xs text-[#00E5FF]">STR</span>
                <span className="text-sm">Storytelling (99)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="pixel-font text-xs text-[#00E5FF]">INT</span>
                <span className="text-sm">Info Arch (95)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="pixel-font text-xs text-[#00E5FF]">WIS</span>
                <span className="text-sm">User Rsch (92)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="pixel-font text-xs text-[#00E5FF]">CHA</span>
                <span className="text-sm">Copywriting (98)</span>
              </div>
            </div>
          </div>

          {/* Dialog Box & Action */}
          <div className="w-full md:w-2/3 flex flex-col gap-8 justify-between">
            <div className="bg-[#0D0D1A] pixel-border p-6 min-h-[200px] relative">
              <div className="absolute -top-4 -left-4 text-3xl">⚔️</div>
              <div className="absolute -bottom-4 -right-4 text-3xl">🛡️</div>
              
              <p className="pixel-font text-sm md:text-base leading-relaxed text-white h-full uppercase">
                {dialogText.substring(0, textIndex)}
                {textIndex < dialogText.length && <span className="animate-blink">▼</span>}
              </p>
            </div>

            <div className="flex justify-center mt-auto pb-8">
              <button className="pixel-button bg-[#0D0D1A] text-[#FFD700] pixel-font text-lg md:text-xl py-4 px-8 hover:bg-[#FFD700] hover:text-[#0D0D1A] transition-colors group relative cursor-pointer outline-none focus:bg-[#FFD700] focus:text-[#0D0D1A]">
                <span className="animate-blink mr-4 group-hover:hidden group-focus:hidden">▶</span>
                PRESS START
                <span className="animate-blink ml-4 group-hover:hidden group-focus:hidden">◀</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
