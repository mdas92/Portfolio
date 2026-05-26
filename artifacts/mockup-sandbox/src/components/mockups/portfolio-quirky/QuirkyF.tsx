import React, { useEffect, useState } from "react";
import { Link } from "wouter";

export default function QuirkyF() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((b) => !b);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="min-h-[100dvh] w-full overflow-hidden relative selection:bg-black selection:text-white"
      style={{ backgroundColor: "#5C94FC", fontFamily: "'Press Start 2P', monospace" }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />

      {/* Top HUD */}
      <div 
        className="w-full text-white p-4 flex justify-between md:justify-around items-start text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed z-50 relative"
        style={{ textShadow: "2px 2px 0 #000" }}
      >
        <div className="flex flex-col gap-2">
          <span>MOHANA</span>
          <span>&#x25CB; &#x00D7; 00</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>WORLD</span>
          <span>10-1</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>TIME</span>
          <span>999</span>
        </div>
      </div>

      {/* Clouds */}
      <div className="absolute top-20 left-10 opacity-80" style={{ transform: "scale(2)" }}>
        <Cloud />
      </div>
      <div className="absolute top-40 right-20 opacity-80" style={{ transform: "scale(1.5)" }}>
        <Cloud />
      </div>
      <div className="absolute top-64 left-1/3 opacity-80" style={{ transform: "scale(2.5)" }}>
        <Cloud />
      </div>

      {/* Main Container */}
      <div className="relative w-full h-[calc(100vh-140px)] flex flex-col items-center justify-center pt-10 z-10">
        
        {/* Floating Role Score */}
        <div 
          className="text-white text-sm md:text-xl mb-4 animate-bounce"
          style={{ textShadow: "2px 2px 0 #000" }}
        >
          1000 PTS: CONTENT STRATEGIST
        </div>

        {/* The ? Block & Name */}
        <div className="flex flex-col items-center relative mb-16">
          <h1 
            className="text-2xl md:text-5xl lg:text-7xl text-white mb-8"
            style={{ textShadow: "4px 4px 0 #000" }}
          >
            MOHANA DAS
          </h1>
          <div className="flex gap-1 mb-8">
            <BrickBlock />
            <QuestionBlock />
            <BrickBlock />
            <QuestionBlock />
            <BrickBlock />
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-16 text-white text-xs md:text-sm text-center" style={{ textShadow: "2px 2px 0 #000" }}>
          <div>COINS: 10 YRS XP</div>
          <div>WORLD: AAMPE</div>
          <div>LIVES: &infin;</div>
        </div>

        {/* CTA */}
        <button 
          className={`text-white text-lg md:text-2xl mt-4 focus:outline-none hover:scale-110 transition-transform ${blink ? 'opacity-100' : 'opacity-0'}`}
          style={{ textShadow: "3px 3px 0 #000" }}
        >
          &rarr; PRESS START &larr;
        </button>

      </div>

      {/* Pipes */}
      <div className="absolute bottom-[64px] left-10 md:left-32 z-20">
        <WarpPipe height={120} />
      </div>
      <div className="absolute bottom-[64px] right-10 md:right-40 z-20 hidden sm:block">
        <WarpPipe height={80} />
      </div>

      {/* Ground */}
      <div 
        className="absolute bottom-0 w-full h-[64px] flex z-30 overflow-hidden"
        style={{ backgroundColor: "#C84B0C" }}
      >
        <div className="w-full h-full flex repeat-ground">
           {/* We use a repeating gradient to simulate ground tiles */}
           <div 
             className="w-full h-full border-t-4 border-black"
             style={{ 
               backgroundImage: `linear-gradient(45deg, #00A800 25%, transparent 25%, transparent 75%, #00A800 75%, #00A800), linear-gradient(45deg, #00A800 25%, transparent 25%, transparent 75%, #00A800 75%, #00A800)`,
               backgroundSize: `32px 32px`,
               backgroundPosition: `0 0, 16px 16px`,
               backgroundColor: `#FAC000` 
             }}
           />
        </div>
      </div>
    </div>
  );
}

function QuestionBlock() {
  return (
    <div 
      className="w-10 h-10 md:w-16 md:h-16 border-4 border-black flex items-center justify-center relative shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
      style={{ backgroundColor: "#FAC000" }}
    >
      {/* Corner dots */}
      <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-[#C84B0C]" />
      <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#C84B0C]" />
      <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-[#C84B0C]" />
      <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-[#C84B0C]" />
      <span className="text-[#C84B0C] text-xl md:text-3xl font-bold" style={{ textShadow: "2px 2px 0 #000" }}>?</span>
    </div>
  );
}

function BrickBlock() {
  return (
    <div 
      className="w-10 h-10 md:w-16 md:h-16 border-4 border-black relative overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
      style={{ backgroundColor: "#C84B0C" }}
    >
      <div className="absolute top-1/2 left-0 w-full h-1 bg-black opacity-50" />
      <div className="absolute top-0 left-1/2 w-1 h-1/2 bg-black opacity-50" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1/2 bg-black opacity-50" />
      <div className="absolute top-1/2 left-[75%] w-1 h-1/2 bg-black opacity-50" />
    </div>
  );
}

function WarpPipe({ height }: { height: number }) {
  return (
    <div className="flex flex-col items-center">
      {/* Pipe Top */}
      <div 
        className="w-20 md:w-28 h-8 md:h-12 border-4 border-black relative"
        style={{ 
          background: "linear-gradient(to right, #00A800 0%, #00A800 20%, #FCFCFC 25%, #00A800 30%, #006400 80%, #00A800 100%)"
        }}
      />
      {/* Pipe Body */}
      <div 
        className="w-16 md:w-24 border-4 border-t-0 border-black relative"
        style={{ 
          height: `${height}px`,
          background: "linear-gradient(to right, #00A800 0%, #00A800 20%, #FCFCFC 25%, #00A800 30%, #006400 80%, #00A800 100%)"
        }}
      />
    </div>
  );
}

function Cloud() {
  return (
    <div className="relative w-16 h-6">
      <div className="absolute bottom-0 left-2 w-12 h-4 bg-[#FCFCFC] border-2 border-transparent" />
      <div className="absolute bottom-2 left-4 w-8 h-4 bg-[#FCFCFC]" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FCFCFC]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FCFCFC]" />
    </div>
  );
}
