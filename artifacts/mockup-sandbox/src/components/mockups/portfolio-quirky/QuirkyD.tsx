import React, { useEffect, useState } from 'react';

export function QuirkyD() {
  const [visitorCount, setVisitorCount] = useState("00847");

  useEffect(() => {
    // fake counter effect
    const interval = setInterval(() => {
      setVisitorCount(prev => {
        const num = parseInt(prev, 10);
        return String(num + 1).padStart(5, '0');
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="min-h-screen text-white overflow-x-hidden font-sans pb-20"
      style={{
        backgroundColor: '#000010',
        backgroundImage: `radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
                          radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
                          radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px)`,
        backgroundSize: '550px 550px, 350px 350px, 250px 250px',
        backgroundPosition: '0 0, 40px 60px, 130px 270px',
        fontFamily: '"Comic Sans MS", "Comic Sans", cursive'
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .blink { animation: blink 1s infinite; }
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }

        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .rainbow-hr {
          height: 5px;
          background: linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF);
          background-size: 200% 200%;
          animation: rainbow 3s ease infinite;
          border: none;
        }
        
        .font-vt323 { font-family: 'VT323', monospace; }
        .font-impact { font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif; }
      `}} />

      <header className="w-full bg-[#00BFFF] text-black text-center py-2 border-b-4 border-[#39FF14] relative">
        <h1 className="font-vt323 text-2xl md:text-3xl tracking-widest font-bold">
          ★ ★ ★ WELCOME TO MY HOMEPAGE <span className="blink">_</span> ★ ★ ★
        </h1>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-8 space-y-12">
        <section className="text-center space-y-6">
          <h2 
            className="text-6xl md:text-8xl font-impact tracking-wider"
            style={{ 
              color: '#FF2D9B', 
              textShadow: '3px 3px 0 #39FF14, 6px 6px 0 #00BFFF' 
            }}
          >
            MOHANA DAS
          </h2>
          <div className="font-vt323 text-2xl md:text-4xl text-[#39FF14] bg-black inline-block px-4 py-2 border-2 border-dashed border-[#00BFFF]">
            ⭐ CONTENT STRATEGIST & PRODUCT THINKER ⭐
          </div>
          
          <div className="overflow-hidden border-y-2 border-[#FF2D9B] py-1 bg-black text-[#00BFFF] font-vt323 text-xl w-full">
            <div className="animate-marquee min-w-full">
              Welcome to my cyber-abode! Best viewed in Netscape Navigator at 800x600 resolution. Don't forget to sign the guestbook! ★ Currently surviving in Tokyo (Aampe) ★ Previously: PayU, GoIbibo, Adobe ★
            </div>
          </div>
        </section>

        <hr className="rainbow-hr my-8" />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section className="bg-black border-4 border-[#39FF14] p-6 shadow-[8px_8px_0_#FF2D9B]">
              <h3 className="font-impact text-3xl text-[#00BFFF] mb-4 underline decoration-[#FF2D9B]">ABOUT ME</h3>
              <p className="text-lg leading-relaxed mb-4">
                Hey there, web surfer! 🏄‍♀️ I'm Mohana. I've been shaping digital experiences for over 10 years. I turn messy product ideas into crisp, human-centered content!
              </p>
              <ul className="space-y-2 text-[#39FF14] font-bold text-xl">
                <li><span className="text-[#FF2D9B]">►</span> 10+ years across fintech, travel & products</li>
                <li><span className="text-[#FF2D9B]">►</span> Currently hacking the mainframe at Aampe (Tokyo)</li>
                <li><span className="text-[#FF2D9B]">►</span> Ex-PayU/LazyPay, GoIbibo, Adobe</li>
              </ul>
            </section>

            <section className="bg-black border-4 border-[#00BFFF] p-6 shadow-[8px_8px_0_#39FF14]">
              <h3 className="font-impact text-3xl text-[#FF2D9B] mb-4 underline decoration-[#00BFFF]">MY COOL LINKS</h3>
              <div className="flex flex-wrap gap-4 font-vt323 text-2xl">
                <a href="#" className="bg-[#39FF14] text-black px-4 py-2 hover:bg-[#FF2D9B] hover:text-white border-2 border-white transition-colors">
                  [ ABOUT_ME.HTML ]
                </a>
                <a href="#" className="bg-[#00BFFF] text-black px-4 py-2 hover:bg-[#FF2D9B] hover:text-white border-2 border-white transition-colors">
                  [ MY_WORK.HTML ]
                </a>
                <a href="#" className="bg-yellow-400 text-black px-4 py-2 hover:bg-[#FF2D9B] hover:text-white border-2 border-white transition-colors blink">
                  [ EMAIL_ME.EXE ]
                </a>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="border-4 border-[#FF2D9B] bg-black p-4 text-center space-y-4 shadow-[4px_4px_0_#00BFFF]">
              <h4 className="font-vt323 text-2xl text-[#39FF14]">SITE STATUS</h4>
              <div className="bg-[#00BFFF] text-black font-impact py-2 px-4 animate-bounce">
                🚧 UNDER CONSTRUCTION 🚧
              </div>
              <p className="text-sm">Pardon the dust!</p>
            </div>

            <div className="border-4 border-white bg-black p-4 text-center shadow-[4px_4px_0_#FF2D9B]">
              <h4 className="font-vt323 text-xl text-[#00BFFF] mb-2">YOU ARE VISITOR NUMBER:</h4>
              <div className="bg-black border-2 border-[#39FF14] font-vt323 text-4xl text-[#FF2D9B] py-2 tracking-[0.5em] inline-block px-4">
                {visitorCount}
              </div>
            </div>

            <div className="border-4 border-yellow-400 bg-black p-4 text-center shadow-[4px_4px_0_#39FF14]">
              <h4 className="font-vt323 text-xl text-yellow-400 mb-2">WEB RINGS</h4>
              <div className="text-xs space-y-2">
                <p>This <span className="text-[#39FF14]">Content Strategist</span> Ring site is owned by Mohana.</p>
                <div className="flex justify-center gap-2 font-vt323 text-lg text-[#00BFFF]">
                  <a href="#" className="hover:text-[#FF2D9B]">[Prev]</a> 
                  <a href="#" className="hover:text-[#FF2D9B]">[Next]</a> 
                  <a href="#" className="hover:text-[#FF2D9B]">[Random]</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="rainbow-hr my-8" />
        
        <footer className="text-center font-vt323 text-xl space-y-4 pb-8">
          <p className="text-[#39FF14]">© 1999-2024 Mohana Das. All rights reserved.</p>
          <a href="#" className="inline-block border-2 border-[#FF2D9B] px-4 py-1 hover:bg-[#FF2D9B] hover:text-black transition-colors">
            Sign My Guestbook
          </a>
        </footer>
      </main>
    </div>
  );
}
