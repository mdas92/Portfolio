const C = {
  cream: '#FFFCF0',
  green: '#0D3B2E',
  sienna: '#C45C26',
  lime: '#C5F135',
};

export function FintechVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.green, height: compact ? 110 : 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      {/* back card */}
      <div style={{
        position: 'absolute', borderRadius: compact ? 6 : 10,
        width: compact ? 160 : 290, height: compact ? 44 : 78,
        background: C.cream, opacity: 0.25,
        top: compact ? 12 : 22, left: '50%', transform: 'translateX(-50%) rotate(-2.5deg)',
      }} />
      {/* mid card */}
      <div style={{
        position: 'absolute', borderRadius: compact ? 6 : 10,
        width: compact ? 160 : 290, height: compact ? 44 : 78,
        background: C.cream, opacity: 0.5,
        top: compact ? 20 : 36, left: '50%', transform: 'translateX(-50%) rotate(-0.8deg)',
      }} />
      {/* front card */}
      <div style={{
        position: 'absolute', borderRadius: compact ? 6 : 10,
        width: compact ? 160 : 290, height: compact ? 45 : 80,
        background: C.cream,
        top: compact ? 28 : 50, left: '50%', transform: 'translateX(-50%)',
        padding: compact ? '6px 8px' : '12px 14px',
        display: 'flex', flexDirection: 'column', gap: compact ? 4 : 7,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: compact ? 4 : 8 }}>
          <div style={{ width: compact ? 5 : 8, height: compact ? 5 : 8, borderRadius: '50%', background: C.sienna, flexShrink: 0 }} />
          <div style={{ height: compact ? 5 : 8, borderRadius: 3, width: compact ? 60 : 120, background: C.green, opacity: 0.65 }} />
        </div>
        <div style={{ height: compact ? 4 : 6, borderRadius: 2, width: '85%', background: C.green, opacity: 0.25 }} />
        {!compact && (
          <div style={{ display: 'flex', gap: 5, marginTop: 1 }}>
            <span style={{ background: C.lime, color: C.green, fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 3, letterSpacing: '0.04em', fontFamily: 'Space Grotesk, sans-serif' }}>SAVE MORE</span>
            <span style={{ background: C.sienna, color: C.cream, fontSize: 9, fontWeight: 600, padding: '2px 8px', borderRadius: 3, fontFamily: 'Space Grotesk, sans-serif' }}>EARN REWARDS</span>
            <span style={{ border: `1.5px solid ${C.green}`, color: C.green, fontSize: 9, padding: '2px 8px', borderRadius: 3, opacity: 0.45, fontFamily: 'Space Grotesk, sans-serif' }}>REDUCE DEBT</span>
          </div>
        )}
      </div>
      {!compact && (
        <div style={{ position: 'absolute', bottom: 14, left: 16, fontSize: 10, color: C.lime, letterSpacing: '0.14em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, opacity: 0.8 }}>
          15 MESSAGE GROUPS · VALUE PROP FRAMEWORK
        </div>
      )}
    </div>
  );
}

export function SportsVisual({ compact }: { compact?: boolean }) {
  const widths = [72, 90, 55, 88, 65, 80, 48, 95, 70, 58, 84, 62, 76, 50, 88, 68];
  return (
    <div style={{ background: C.cream, height: compact ? 110 : 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: 16, bottom: 16, left: compact ? 60 : 148, right: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: compact ? 3 : 5 }}>
        {widths.slice(0, compact ? 10 : 16).map((w, i) => (
          <div key={i} style={{
            height: compact ? 3 : 5, borderRadius: 2,
            background: i % 5 === 0 ? C.sienna : C.green,
            opacity: i % 5 === 0 ? 0.7 : i % 3 === 0 ? 0.55 : 0.25,
            width: `${w}%`,
          }} />
        ))}
      </div>
      <div style={{ position: 'absolute', left: compact ? 12 : 20, top: '50%', transform: 'translateY(-50%)' }}>
        <div style={{ fontSize: compact ? 32 : 54, fontWeight: 700, color: C.sienna, lineHeight: 1, fontFamily: 'DM Serif Display, serif' }}>800+</div>
        <div style={{ fontSize: compact ? 7 : 9, color: C.green, opacity: 0.55, letterSpacing: '0.16em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, marginTop: compact ? 2 : 5 }}>ALTERNATES</div>
      </div>
      {!compact && (
        <div style={{ position: 'absolute', bottom: 14, left: 20, fontSize: 10, color: C.green, letterSpacing: '0.14em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, opacity: 0.45 }}>
          CO-WRITTEN IN 15 MIN · NYC
        </div>
      )}
    </div>
  );
}

export function TaxVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.cream, height: compact ? 110 : 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      {/* Tax document */}
      <div style={{
        position: 'absolute', left: compact ? 12 : 52, top: compact ? 12 : 20, width: compact ? 50 : 130, height: compact ? 86 : 152,
        border: `1.5px solid ${C.green}`, borderRadius: 4,
        background: C.cream, padding: compact ? '6px 6px' : '14px 12px',
        display: 'flex', flexDirection: 'column', gap: compact ? 3 : 7,
      }}>
        <div style={{ height: compact ? 4 : 8, borderRadius: 2, background: C.green, width: '80%' }} />
        <div style={{ height: compact ? 3 : 6, borderRadius: 2, background: C.green, opacity: 0.3, width: '100%' }} />
        <div style={{ height: compact ? 3 : 6, borderRadius: 2, background: C.green, opacity: 0.3, width: '90%' }} />
        <div style={{ height: compact ? 1 : 1, background: C.green, opacity: 0.15, margin: compact ? '1px 0' : '3px 0' }} />
        <div style={{ height: compact ? 3 : 6, borderRadius: 2, background: C.lime, width: '65%' }} />
        <div style={{ height: compact ? 3 : 6, borderRadius: 2, background: C.lime, width: '80%', opacity: 0.7 }} />
      </div>
      {/* Speedometer */}
      <svg style={{ position: 'absolute', right: compact ? 6 : 28, top: compact ? 18 : 24 }} width={compact ? 45 : 130} height={compact ? 45 : 110} viewBox="0 0 130 110">
        <path d="M 18 95 A 58 58 0 0 1 112 95" fill="none" stroke={C.green} strokeWidth="3" opacity="0.15" />
        <path d="M 18 95 A 58 58 0 0 1 112 95" fill="none" stroke={C.lime} strokeWidth="3.5"
          strokeDasharray="182" strokeDashoffset="22" strokeLinecap="round" />
        <line x1="65" y1="95" x2="92" y2="46" stroke={C.sienna} strokeWidth="4" strokeLinecap="round" />
        <circle cx="65" cy="95" r="8" fill={C.sienna} />
      </svg>
      {!compact && (
        <div style={{ position: 'absolute', bottom: 14, left: 20, fontSize: 10, color: C.green, letterSpacing: '0.14em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, opacity: 0.45 }}>
          €102K DEAL · FASTEST ONBOARDING
        </div>
      )}
    </div>
  );
}

export function SuperappVisual({ compact }: { compact?: boolean }) {
  const bubbles = compact ? [
    { label: 'EN', x: 10,  y: 15 },
    { label: 'ID', x: 60, y: 15 },
    { label: 'TH', x: 10,  y: 60 },
    { label: 'MY', x: 60, y: 60 },
  ] : [
    { label: 'EN', x: 56,  y: 28 },
    { label: 'ID', x: 168, y: 28 },
    { label: 'TH', x: 56,  y: 108 },
    { label: 'MY', x: 168, y: 108 },
  ];
  return (
    <div style={{ background: C.green, height: compact ? 110 : 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      {bubbles.map(({ label, x, y }) => (
        <div key={label} style={{
          position: 'absolute', left: x, top: y,
          width: compact ? 40 : 72, height: compact ? 32 : 52,
          background: C.cream, borderRadius: compact ? '6px 6px 6px 2px' : '10px 10px 10px 2px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: compact ? 2 : 4,
          opacity: 0.92,
        }}>
          <span style={{ fontSize: compact ? 9 : 13, fontWeight: 700, color: C.green, fontFamily: 'Space Grotesk, sans-serif' }}>{label}</span>
          <div style={{ height: compact ? 3 : 5, borderRadius: 2, background: C.green, opacity: 0.25, width: compact ? 24 : 42 }} />
        </div>
      ))}
      {!compact && (
        <div style={{ position: 'absolute', bottom: 14, left: 16, fontSize: 10, color: C.lime, letterSpacing: '0.14em', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500, opacity: 0.8 }}>
          4+ MARKETS · MULTI-LANGUAGE PUSH
        </div>
      )}
    </div>
  );
}

export function ContentMapsVisual({ compact }: { compact?: boolean }) {
  const rowsArr = compact ? ['A', 'B'] : ['Users', 'Power', 'Lapsed'];
  const colsArr = compact ? ['X', 'Y', 'Z'] : ['Audiences', 'Features', 'Channels'];
  return (
    <div style={{ background: C.cream, height: compact ? 110 : 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: compact ? 12 : 20, left: compact ? 12 : 20, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {rowsArr.map((row, ri) => (
          <div key={ri} style={{ display: 'flex', gap: 2 }}>
            {colsArr.map((_, ci) => (
              <div key={ci} style={{
                width: compact ? 28 : 62, height: compact ? 28 : 46,
                border: `1.5px solid ${C.green}33`,
                borderRadius: 4,
                background: (ri + ci) % 2 === 0 ? C.lime : 'transparent',
                opacity: 0.85,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {(ri + ci) % 2 === 0 && <span style={{ fontSize: compact ? 10 : 14, color: C.green, fontWeight: 800 }}>✓</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', right: compact ? 10 : 20, top: compact ? 10 : 20 }}>
        <div style={{ fontSize: compact ? 24 : 38, fontWeight: 700, color: C.sienna, lineHeight: 1, fontFamily: 'DM Serif Display, serif' }}>$90K</div>
      </div>
    </div>
  );
}

export function ProductTaxonomyVisual({ compact }: { compact?: boolean }) {
  const chain = compact ? ['Formulas', 'Messages', 'Alts'] : ['Formulas', 'Message Groups', 'Messages', 'Alt. Messages', 'Combinations'];
  return (
    <div style={{ background: C.green, height: compact ? 110 : 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: compact ? 4 : 8, padding: '0 10px' }}>
        {chain.map((label, i) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{
              background: i === 0 ? C.sienna : 'transparent',
              color: C.cream,
              border: i === 0 ? 'none' : `1px solid ${C.cream}33`,
              borderRadius: 4,
              padding: compact ? '2px 6px' : '4px 10px',
              fontSize: compact ? 9 : 10.5,
              fontWeight: 600,
              fontFamily: 'Space Grotesk, sans-serif',
            }}>
              {label}
            </span>
            {i < chain.length - 1 && <span style={{ color: C.lime, fontSize: 10, opacity: 0.6 }}>↕</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PlaybookVisual({ compact }: { compact?: boolean }) {
  const slides = compact ? [
    { rotate: -5, opacity: 0.4, offsetX: -10 },
    { rotate: 0, opacity: 0.7, offsetX: 5 },
    { rotate: 5, opacity: 1.0, offsetX: 20 },
  ] : [
    { rotate: -8, opacity: 0.18, offsetX: -30 },
    { rotate: -5, opacity: 0.32, offsetX: -10 },
    { rotate: -2, opacity: 0.52, offsetX:  10 },
    { rotate:  1, opacity: 0.75, offsetX:  30 },
    { rotate:  3, opacity: 1.0,  offsetX:  50 },
  ];
  return (
    <div style={{ background: C.sienna, height: compact ? 110 : 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {slides.map(({ rotate, opacity, offsetX }, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: compact ? 80 : 170, height: compact ? 60 : 126,
            background: C.cream,
            borderRadius: 4,
            opacity,
            transform: `rotate(${rotate}deg) translateX(${offsetX}px)`,
            padding: compact ? '6px 6px' : '14px 14px',
            display: 'flex', flexDirection: 'column', gap: compact ? 3 : 6,
          }}>
            {i === slides.length - 1 && (
              <>
                <div style={{ height: compact ? 5 : 9, borderRadius: 2, background: C.green, width: '75%' }} />
                <div style={{ height: compact ? 3 : 6, borderRadius: 2, background: C.green, opacity: 0.35, width: '100%' }} />
                <div style={{ height: compact ? 3 : 6, borderRadius: 2, background: C.lime, width: '60%' }} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChatbotVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.green, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
       <svg viewBox="0 0 64 64" style={{ width: '100%', height: '100%', padding: 25 }} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16H52V42H32L20 50V42H12V16Z" stroke={C.cream} strokeWidth="2.5" />
        <circle cx="24" cy="29" r="2.5" fill={C.lime} />
        <circle cx="32" cy="29" r="2.5" fill={C.lime} />
        <circle cx="40" cy="29" r="2.5" fill={C.lime} />
      </svg>
    </div>
  );
}

export function LazycardVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.sienna, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ 
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-10deg)',
        width: 60, height: 38, background: C.cream, borderRadius: 4, padding: 6,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'
      }}>
        <div style={{ width: 10, height: 8, background: C.lime, borderRadius: 1.5, marginBottom: 8 }} />
        <div style={{ width: '100%', height: 3, background: C.green, opacity: 0.2, borderRadius: 1 }} />
      </div>
    </div>
  );
}

export function ExpenseMgmtVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.cream, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 4, padding: '20px 15px' }}>
        <div style={{ width: 8, height: '40%', background: C.green, opacity: 0.3, borderRadius: '2px 2px 0 0' }} />
        <div style={{ width: 8, height: '70%', background: C.sienna, borderRadius: '2px 2px 0 0' }} />
        <div style={{ width: 8, height: '55%', background: C.lime, borderRadius: '2px 2px 0 0' }} />
        <div style={{ width: 8, height: '90%', background: C.green, borderRadius: '2px 2px 0 0' }} />
      </div>
    </div>
  );
}

export function RepaymentsVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.green, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', padding: 25 }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke={C.cream} strokeWidth="8" fill="none" opacity="0.2" />
        <circle cx="50" cy="50" r="40" stroke={C.lime} strokeWidth="8" fill="none" strokeDasharray="251" strokeDashoffset="60" strokeLinecap="round" />
        <text x="50" y="58" textAnchor="middle" fill={C.cream} fontSize="20" fontWeight="bold" fontFamily="Space Grotesk">₹</text>
      </svg>
    </div>
  );
}

export function BarbershopVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.sienna, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <div style={{ width: 30, height: 30, border: `2.5px solid ${C.cream}`, borderRadius: '50% 50% 0 0', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: -6, right: -6, height: 3, background: C.lime, transform: 'rotate(45deg)' }} />
          <div style={{ position: 'absolute', top: '50%', left: -6, right: -6, height: 3, background: C.lime, transform: 'rotate(-45deg)' }} />
        </div>
        <div style={{ width: 15, height: 3, background: C.cream, borderRadius: 1.5 }} />
      </div>
    </div>
  );
}

export function TravelVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.green, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.lime} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>
    </div>
  );
}

export function RunningVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.cream, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', padding: 25 }} viewBox="0 0 24 24" fill="none" stroke={C.sienna} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 4v16M17 4v16M9 4v16M5 4v16M21 4v16M3 12h18" strokeOpacity="0.2" />
        <path d="M18 8a3 3 0 1 0-3 3 3 3 0 0 1-3 3 3 3 0 1 0-3 3" stroke={C.green} strokeWidth="3" />
      </svg>
    </div>
  );
}

export function MusicVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.green, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
        {[0.4, 0.7, 1, 0.6, 0.8, 0.5].map((h, i) => (
          <div key={i} style={{ width: 3, height: `${h * 40}%`, background: C.lime, borderRadius: 1.5 }} />
        ))}
      </div>
    </div>
  );
}

export function RewardsVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.sienna, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 36, height: 36, background: C.lime, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: C.green, fontSize: 20, fontWeight: 900, fontFamily: 'serif' }}>★</span>
      </div>
    </div>
  );
}

export function GreetingVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.cream, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(5deg)', width: 40, height: 56, border: `2px solid ${C.green}`, borderRadius: 3, background: C.cream, padding: 5 }}>
        <div style={{ width: '100%', height: '40%', background: C.sienna, opacity: 0.1, borderRadius: 1.5, marginBottom: 3 }} />
        <div style={{ width: '80%', height: 2, background: C.green, opacity: 0.2, borderRadius: 1, marginBottom: 2 }} />
        <div style={{ width: '60%', height: 2, background: C.green, opacity: 0.2, borderRadius: 1 }} />
      </div>
    </div>
  );
}

export function ShoppingVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.green, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={C.lime} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      </div>
    </div>
  );
}
