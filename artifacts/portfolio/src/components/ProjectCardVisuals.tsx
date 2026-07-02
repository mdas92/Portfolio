const C = {
  cream: '#FFFCF0',
  green: '#0D3B2E',
  sienna: '#C45C26',
  lime: '#C5F135',
};

export function FintechVisual() {
  return (
    <div style={{ background: C.green, height: 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      {/* back card */}
      <div style={{
        position: 'absolute', borderRadius: 10,
        width: 290, height: 78,
        background: C.cream, opacity: 0.25,
        top: 22, left: '50%', transform: 'translateX(-50%) rotate(-2.5deg)',
      }} />
      {/* mid card */}
      <div style={{
        position: 'absolute', borderRadius: 10,
        width: 290, height: 78,
        background: C.cream, opacity: 0.5,
        top: 36, left: '50%', transform: 'translateX(-50%) rotate(-0.8deg)',
      }} />
      {/* front card */}
      <div style={{
        position: 'absolute', borderRadius: 10,
        width: 290, height: 80,
        background: C.cream,
        top: 50, left: '50%', transform: 'translateX(-50%)',
        padding: '12px 14px',
        display: 'flex', flexDirection: 'column', gap: 7,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.sienna, flexShrink: 0 }} />
          <div style={{ height: 8, borderRadius: 4, width: 120, background: C.green, opacity: 0.65 }} />
        </div>
        <div style={{ height: 6, borderRadius: 4, width: '85%', background: C.green, opacity: 0.25 }} />
        <div style={{ display: 'flex', gap: 5, marginTop: 1 }}>
          <span style={{ background: C.lime, color: C.green, fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 3, letterSpacing: '0.04em', fontFamily: 'Space Grotesk, sans-serif' }}>SAVE MORE</span>
          <span style={{ background: C.sienna, color: C.cream, fontSize: 9, fontWeight: 600, padding: '2px 8px', borderRadius: 3, fontFamily: 'Space Grotesk, sans-serif' }}>EARN REWARDS</span>
          <span style={{ border: `1.5px solid ${C.green}`, color: C.green, fontSize: 9, padding: '2px 8px', borderRadius: 3, opacity: 0.45, fontFamily: 'Space Grotesk, sans-serif' }}>REDUCE DEBT</span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 14, left: 16, fontSize: 10, color: C.lime, letterSpacing: '0.14em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, opacity: 0.8 }}>
        15 MESSAGE GROUPS · VALUE PROP FRAMEWORK
      </div>
    </div>
  );
}

export function SportsVisual() {
  const widths = [72, 90, 55, 88, 65, 80, 48, 95, 70, 58, 84, 62, 76, 50, 88, 68];
  return (
    <div style={{ background: C.cream, height: 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: 16, bottom: 16, left: 148, right: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5 }}>
        {widths.map((w, i) => (
          <div key={i} style={{
            height: 5, borderRadius: 3,
            background: i % 5 === 0 ? C.sienna : C.green,
            opacity: i % 5 === 0 ? 0.7 : i % 3 === 0 ? 0.55 : 0.25,
            width: `${w}%`,
          }} />
        ))}
      </div>
      <div style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)' }}>
        <div style={{ fontSize: 54, fontWeight: 700, color: C.sienna, lineHeight: 1, fontFamily: 'DM Serif Display, serif' }}>800+</div>
        <div style={{ fontSize: 9, color: C.green, opacity: 0.55, letterSpacing: '0.16em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, marginTop: 5 }}>ALTERNATES</div>
      </div>
      <div style={{ position: 'absolute', bottom: 14, left: 20, fontSize: 10, color: C.green, letterSpacing: '0.14em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, opacity: 0.45 }}>
        CO-WRITTEN IN 15 MIN · NYC
      </div>
    </div>
  );
}

export function TaxVisual() {
  return (
    <div style={{ background: C.cream, height: 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      {/* Tax document */}
      <div style={{
        position: 'absolute', left: 52, top: 20, width: 130, height: 152,
        border: `2px solid ${C.green}`, borderRadius: 6,
        background: C.cream, padding: '14px 12px',
        display: 'flex', flexDirection: 'column', gap: 7,
      }}>
        <div style={{ height: 8, borderRadius: 3, background: C.green, width: '80%' }} />
        <div style={{ height: 6, borderRadius: 3, background: C.green, opacity: 0.3, width: '100%' }} />
        <div style={{ height: 6, borderRadius: 3, background: C.green, opacity: 0.3, width: '90%' }} />
        <div style={{ height: 6, borderRadius: 3, background: C.green, opacity: 0.3, width: '70%' }} />
        <div style={{ height: 1, background: C.green, opacity: 0.15, margin: '3px 0' }} />
        <div style={{ height: 6, borderRadius: 3, background: C.lime, width: '65%' }} />
        <div style={{ height: 6, borderRadius: 3, background: C.lime, width: '80%', opacity: 0.7 }} />
        <div style={{ height: 6, borderRadius: 3, background: C.lime, width: '55%', opacity: 0.5 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
          <div style={{ width: 18, height: 18, borderRadius: '50%', background: C.lime, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ color: C.green, fontSize: 11, fontWeight: 800, lineHeight: 1 }}>✓</span>
          </div>
          <div style={{ height: 6, width: 64, borderRadius: 3, background: C.green, opacity: 0.4 }} />
        </div>
      </div>
      {/* Speedometer */}
      <svg style={{ position: 'absolute', right: 28, top: 24 }} width="130" height="110" viewBox="0 0 130 110">
        <path d="M 18 95 A 58 58 0 0 1 112 95" fill="none" stroke={C.green} strokeWidth="3" opacity="0.15" />
        <path d="M 18 95 A 58 58 0 0 1 112 95" fill="none" stroke={C.lime} strokeWidth="3.5"
          strokeDasharray="182" strokeDashoffset="22" strokeLinecap="round" />
        <line x1="65" y1="95" x2="92" y2="46" stroke={C.sienna} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="65" cy="95" r="5.5" fill={C.sienna} />
        <text x="65" y="34" textAnchor="middle" fontSize="9" fill={C.green} fontFamily="Space Grotesk, sans-serif" fontWeight="600" opacity="0.55" letterSpacing="1">FAST</text>
      </svg>
      <div style={{ position: 'absolute', bottom: 14, left: 20, fontSize: 10, color: C.green, letterSpacing: '0.14em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, opacity: 0.45 }}>
        €102K DEAL · FASTEST ONBOARDING
      </div>
    </div>
  );
}

export function SuperappVisual() {
  const bubbles = [
    { label: 'EN', x: 56,  y: 28 },
    { label: 'ID', x: 168, y: 28 },
    { label: 'TH', x: 56,  y: 108 },
    { label: 'MY', x: 168, y: 108 },
  ];
  return (
    <div style={{ background: C.green, height: 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      {/* Connecting lines */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <line x1="128" y1="67" x2="168" y2="67" stroke={C.sienna} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.55" />
        <line x1="92"  y1="80" x2="92"  y2="108" stroke={C.sienna} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.55" />
        <line x1="204" y1="80" x2="204" y2="108" stroke={C.sienna} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.55" />
        <line x1="128" y1="147" x2="168" y2="147" stroke={C.sienna} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.55" />
        <line x1="128" y1="67"  x2="128" y2="108" stroke={C.lime}   strokeWidth="1"   strokeDasharray="3 4" opacity="0.3" />
      </svg>
      {bubbles.map(({ label, x, y }) => (
        <div key={label} style={{
          position: 'absolute', left: x, top: y,
          width: 72, height: 52,
          background: C.cream, borderRadius: '10px 10px 10px 2px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4,
          opacity: 0.92,
        }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: C.green, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em' }}>{label}</span>
          <div style={{ height: 5, borderRadius: 3, background: C.green, opacity: 0.25, width: 42 }} />
          <div style={{ height: 5, borderRadius: 3, background: C.green, opacity: 0.15, width: 32 }} />
        </div>
      ))}
      <div style={{ position: 'absolute', bottom: 14, left: 16, fontSize: 10, color: C.lime, letterSpacing: '0.14em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, opacity: 0.8 }}>
        4+ MARKETS · MULTI-LANGUAGE PUSH
      </div>
    </div>
  );
}

export function ContentMapsVisual() {
  const cols = ['Audiences', 'Features', 'Channels'];
  const rows = ['Users', 'Power', 'Lapsed'];
  const filled: Record<string, string> = {
    '0-0': C.lime, '0-1': C.sienna, '0-2': C.lime,
    '1-0': C.sienna, '1-1': C.lime, '1-2': C.cream,
    '2-0': C.cream, '2-1': C.sienna, '2-2': C.lime,
  };
  return (
    <div style={{ background: C.cream, height: 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      {/* grid */}
      <div style={{ position: 'absolute', top: 20, left: 20, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* header row */}
        <div style={{ display: 'flex', gap: 2, marginLeft: 52 }}>
          {cols.map((c) => (
            <div key={c} style={{ width: 62, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 7.5, fontWeight: 700, color: C.green, opacity: 0.5, letterSpacing: '0.06em', fontFamily: 'Space Grotesk, sans-serif', textTransform: 'uppercase' }}>{c}</span>
            </div>
          ))}
        </div>
        {/* data rows */}
        {rows.map((row, ri) => (
          <div key={row} style={{ display: 'flex', gap: 2 }}>
            <div style={{ width: 50, height: 46, display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 8, fontWeight: 700, color: C.green, opacity: 0.45, letterSpacing: '0.06em', fontFamily: 'Space Grotesk, sans-serif', textTransform: 'uppercase' }}>{row}</span>
            </div>
            {cols.map((_, ci) => {
              const color = filled[`${ri}-${ci}`];
              const isEmpty = color === C.cream;
              return (
                <div key={ci} style={{
                  width: 62, height: 46,
                  border: `1.5px solid ${C.green}`,
                  borderColor: isEmpty ? `${C.green}22` : `${C.green}55`,
                  borderRadius: 4,
                  background: isEmpty ? 'transparent' : color,
                  opacity: isEmpty ? 0.4 : 0.85,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {!isEmpty && (
                    <span style={{ fontSize: 14, color: isEmpty ? 'transparent' : (color === C.lime ? C.green : C.cream), fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif' }}>✓</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {/* label */}
      <div style={{ position: 'absolute', bottom: 14, right: 16, fontSize: 10, color: C.green, letterSpacing: '0.14em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, opacity: 0.45 }}>
        CONTENT MAP · METHODOLOGY
      </div>
      {/* stat */}
      <div style={{ position: 'absolute', right: 20, top: 20 }}>
        <div style={{ fontSize: 38, fontWeight: 700, color: C.sienna, lineHeight: 1, fontFamily: 'DM Serif Display, serif' }}>$90K</div>
        <div style={{ fontSize: 8, color: C.green, opacity: 0.5, letterSpacing: '0.14em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, marginTop: 4 }}>DEAL CREDITED</div>
      </div>
    </div>
  );
}

export function PlaybookVisual() {
  const slides = [
    { rotate: -8, opacity: 0.18, offsetX: -30 },
    { rotate: -5, opacity: 0.32, offsetX: -10 },
    { rotate: -2, opacity: 0.52, offsetX:  10 },
    { rotate:  1, opacity: 0.75, offsetX:  30 },
    { rotate:  3, opacity: 1.0,  offsetX:  50 },
  ];
  return (
    <div style={{ background: C.sienna, height: 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {slides.map(({ rotate, opacity, offsetX }, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: 170, height: 126,
            background: C.cream,
            borderRadius: 6,
            opacity,
            transform: `rotate(${rotate}deg) translateX(${offsetX}px)`,
            padding: '14px 14px',
            display: 'flex', flexDirection: 'column', gap: 6,
          }}>
            {i === 4 && (
              <>
                <div style={{ height: 9, borderRadius: 3, background: C.green, width: '75%' }} />
                <div style={{ height: 6, borderRadius: 3, background: C.green, opacity: 0.35, width: '100%' }} />
                <div style={{ height: 6, borderRadius: 3, background: C.green, opacity: 0.35, width: '90%' }} />
                <div style={{ height: 1, background: C.green, opacity: 0.15, margin: '3px 0' }} />
                <div style={{ height: 6, borderRadius: 3, background: C.lime, width: '60%' }} />
                <div style={{ height: 6, borderRadius: 3, background: C.lime, width: '78%', opacity: 0.7 }} />
                <div style={{ height: 6, borderRadius: 3, background: C.lime, width: '50%', opacity: 0.5 }} />
                <div style={{ height: 1, background: C.green, opacity: 0.15, margin: '3px 0' }} />
                <div style={{ height: 6, borderRadius: 3, background: C.green, opacity: 0.25, width: '85%' }} />
              </>
            )}
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: 14, left: 16, fontSize: 10, color: C.cream, letterSpacing: '0.14em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, opacity: 0.7 }}>
        COMPANY-WIDE TRAINING RESOURCE · FIGMA DECK
      </div>
    </div>
  );
}
