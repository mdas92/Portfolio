const C = {
  white:        '#FFFFFF',
  bg:           '#F5F3FF',
  dark:         '#09090B',
  violet:       '#6D28D9',
  violetLight:  '#EDE9FE',
  muted:        '#C4B5FD',
  mutedDark:    '#7C3AED',
};

// ─── Active projects ──────────────────────────────────────────────────────────

export function ProductTaxonomyVisual({ compact }: { compact?: boolean }) {
  const renames = compact
    ? [['Component', 'Formula'], ['Tag', 'Topic'], ['Journey', 'Combination']]
    : [['Component', 'Formula'], ['Tag', 'Topic'], ['Journey', 'Combination'], ['Label', 'Segment'], ['Group', 'Audience']];
  return (
    <div style={{
      background: C.white,
      height: compact ? 110 : 192,
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: compact ? '0 20px' : '0 32px',
      gap: compact ? 0 : 4,
    }}>
      <div style={{
        fontSize: 9,
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 600,
        letterSpacing: '0.14em',
        color: C.muted,
        marginBottom: compact ? 8 : 12,
        textTransform: 'uppercase',
      }}>
        Product Language
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 6 : 10 }}>
        {renames.map(([before, after], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: compact ? 10 : 14 }}>
            <span style={{
              fontSize: compact ? 11 : 13,
              fontFamily: 'DM Sans, sans-serif',
              color: C.dark,
              opacity: 0.28,
              textDecoration: 'line-through',
              minWidth: compact ? 76 : 100,
            }}>
              {before}
            </span>
            <svg width={12} height={8} viewBox="0 0 12 8" fill="none" style={{ flexShrink: 0 }}>
              <path d="M0 4h10M7 1l3 3-3 3" stroke={C.muted} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{
              fontSize: compact ? 12 : 14,
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              color: C.violet,
            }}>
              {after}
            </span>
          </div>
        ))}
      </div>
      {!compact && (
        <div style={{
          position: 'absolute',
          bottom: 16,
          right: 24,
          fontSize: 9,
          fontFamily: 'DM Sans, sans-serif',
          color: C.muted,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}>
          9 entities · Aampe 2025
        </div>
      )}
    </div>
  );
}

export function ContentMapsVisual({ compact }: { compact?: boolean }) {
  const rows = ['Power', 'New', 'Lapsed'];
  const cols = compact ? ['Email', 'Push', 'In-app'] : ['Email', 'Push', 'SMS', 'In-app'];
  const filled = compact
    ? [[true, false, true], [false, true, false], [true, true, false]]
    : [[true, false, true, false], [false, true, false, true], [true, true, false, false]];
  const cellW = compact ? 52 : 68;
  const cellH = compact ? 24 : 32;
  const labelW = compact ? 36 : 48;

  return (
    <div style={{
      background: C.white,
      height: compact ? 110 : 192,
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: compact ? '0 20px' : '0 28px',
    }}>
      <div style={{
        fontSize: 9,
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 600,
        letterSpacing: '0.14em',
        color: C.muted,
        marginBottom: compact ? 8 : 12,
        textTransform: 'uppercase',
      }}>
        Content Map
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Column headers */}
        <div style={{ display: 'flex', gap: 2, marginLeft: labelW + 2 }}>
          {cols.map((col) => (
            <div key={col} style={{
              width: cellW, textAlign: 'center',
              fontSize: 8, fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
              color: C.dark, opacity: 0.35, letterSpacing: '0.06em',
              marginBottom: 2,
            }}>
              {col}
            </div>
          ))}
        </div>

        {/* Rows */}
        {rows.map((row, ri) => (
          <div key={row} style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <div style={{
              width: labelW, fontSize: 8.5,
              fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
              color: C.dark, opacity: 0.35, letterSpacing: '0.04em',
              paddingRight: 4,
              textAlign: 'right',
            }}>
              {row}
            </div>
            {cols.map((_, ci) => (
              <div key={ci} style={{
                width: cellW, height: cellH,
                background: filled[ri][ci] ? C.violet : 'transparent',
                border: `1.5px solid ${filled[ri][ci] ? C.violet : C.dark + '18'}`,
                borderRadius: 3,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {filled[ri][ci] && (
                  <svg width={10} height={8} viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l2.5 2.5L9 1" stroke={C.white} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {!compact && (
        <div style={{
          position: 'absolute', bottom: 16, right: 24,
          fontSize: 9, fontFamily: 'DM Sans, sans-serif',
          color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          Aampe · 2025
        </div>
      )}
    </div>
  );
}

export function PlaybookVisual({ compact }: { compact?: boolean }) {
  const slides = compact ? [
    { rotate: -8, opacity: 0.18, offsetX: -30 },
    { rotate: -4, opacity: 0.35, offsetX: -10 },
    { rotate: -1, opacity: 0.6,  offsetX:  10 },
    { rotate:  2, opacity: 0.82, offsetX:  28 },
    { rotate:  4, opacity: 1.0,  offsetX:  46 },
  ] : [
    { rotate: -8, opacity: 0.18, offsetX: -30 },
    { rotate: -5, opacity: 0.32, offsetX: -10 },
    { rotate: -2, opacity: 0.52, offsetX:  10 },
    { rotate:  1, opacity: 0.75, offsetX:  30 },
    { rotate:  3, opacity: 1.0,  offsetX:  50 },
  ];
  return (
    <div style={{ background: C.dark, height: compact ? 110 : 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {slides.map(({ rotate, opacity, offsetX }, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: compact ? 80 : 170, height: compact ? 60 : 126,
            background: C.white,
            borderRadius: 4,
            opacity,
            transform: `rotate(${rotate}deg) translateX(${offsetX}px)`,
            padding: compact ? '6px 6px' : '14px 14px',
            display: 'flex', flexDirection: 'column', gap: compact ? 3 : 6,
          }}>
            {i === slides.length - 1 && (
              <>
                <div style={{ height: compact ? 5 : 9, borderRadius: 2, background: C.dark, width: '75%' }} />
                <div style={{ height: compact ? 3 : 5, borderRadius: 2, background: C.dark, opacity: 0.2, width: '100%' }} />
                <div style={{ height: compact ? 3 : 5, borderRadius: 2, background: C.violet, width: '60%' }} />
                {!compact && (
                  <>
                    <div style={{ height: 5, borderRadius: 2, background: C.dark, opacity: 0.15, width: '88%' }} />
                    <div style={{ height: 5, borderRadius: 2, background: C.dark, opacity: 0.15, width: '70%' }} />
                  </>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      {!compact && (
        <div style={{ position: 'absolute', bottom: 14, left: 16, fontSize: 10, color: C.muted, letterSpacing: '0.14em', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, textTransform: 'uppercase' }}>
          Company-wide · Figma resource
        </div>
      )}
    </div>
  );
}

export function ChatbotVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.dark, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <svg viewBox="0 0 64 64" style={{ width: '100%', height: '100%', padding: 22 }} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16H52V42H32L20 50V42H12V16Z" stroke={C.white} strokeWidth="2" opacity="0.25" />
        <circle cx="24" cy="29" r="2.5" fill={C.violet} />
        <circle cx="32" cy="29" r="2.5" fill={C.violet} />
        <circle cx="40" cy="29" r="2.5" fill={C.violet} />
      </svg>
    </div>
  );
}

export function LazycardVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.violet, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%) rotate(-10deg)',
        width: 60, height: 38, background: C.white, borderRadius: 4, padding: 6,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      }}>
        <div style={{ width: 10, height: 8, background: C.violetLight, borderRadius: 1.5, marginBottom: 8 }} />
        <div style={{ width: '100%', height: 3, background: C.dark, opacity: 0.12, borderRadius: 1 }} />
      </div>
    </div>
  );
}

export function ExpenseMgmtVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.white, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 5, padding: '20px 15px' }}>
        <div style={{ width: 9, height: '40%', background: C.dark, opacity: 0.12, borderRadius: '2px 2px 0 0' }} />
        <div style={{ width: 9, height: '70%', background: C.violet, borderRadius: '2px 2px 0 0' }} />
        <div style={{ width: 9, height: '55%', background: C.muted, borderRadius: '2px 2px 0 0' }} />
        <div style={{ width: 9, height: '90%', background: C.violetLight, border: `1.5px solid ${C.violet}`, borderRadius: '2px 2px 0 0' }} />
      </div>
    </div>
  );
}

export function RepaymentsVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.dark, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', padding: 22 }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke={C.white} strokeWidth="8" fill="none" opacity="0.08" />
        <circle cx="50" cy="50" r="40" stroke={C.violet} strokeWidth="8" fill="none"
          strokeDasharray="251" strokeDashoffset="60" strokeLinecap="round" />
        <text x="50" y="58" textAnchor="middle" fill={C.white} fontSize="20" fontWeight="bold" fontFamily="DM Sans, sans-serif" opacity="0.85">₹</text>
      </svg>
    </div>
  );
}

// ─── Archived / legacy projects (palette updated) ────────────────────────────

export function FintechVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.dark, height: compact ? 110 : 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{
        position: 'absolute', borderRadius: compact ? 6 : 10,
        width: compact ? 160 : 290, height: compact ? 44 : 78,
        background: C.white, opacity: 0.08,
        top: compact ? 12 : 22, left: '50%', transform: 'translateX(-50%) rotate(-2.5deg)',
      }} />
      <div style={{
        position: 'absolute', borderRadius: compact ? 6 : 10,
        width: compact ? 160 : 290, height: compact ? 44 : 78,
        background: C.white, opacity: 0.2,
        top: compact ? 20 : 36, left: '50%', transform: 'translateX(-50%) rotate(-0.8deg)',
      }} />
      <div style={{
        position: 'absolute', borderRadius: compact ? 6 : 10,
        width: compact ? 160 : 290, height: compact ? 45 : 80,
        background: C.white,
        top: compact ? 28 : 50, left: '50%', transform: 'translateX(-50%)',
        padding: compact ? '6px 8px' : '12px 14px',
        display: 'flex', flexDirection: 'column', gap: compact ? 4 : 7,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: compact ? 4 : 8 }}>
          <div style={{ width: compact ? 5 : 8, height: compact ? 5 : 8, borderRadius: '50%', background: C.violet, flexShrink: 0 }} />
          <div style={{ height: compact ? 5 : 8, borderRadius: 3, width: compact ? 60 : 120, background: C.dark, opacity: 0.55 }} />
        </div>
        <div style={{ height: compact ? 4 : 6, borderRadius: 2, width: '85%', background: C.dark, opacity: 0.12 }} />
        {!compact && (
          <div style={{ display: 'flex', gap: 5, marginTop: 1 }}>
            <span style={{ background: C.violet, color: C.white, fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 3, letterSpacing: '0.04em', fontFamily: 'DM Sans, sans-serif' }}>SAVE MORE</span>
            <span style={{ background: C.violetLight, color: C.violet, fontSize: 9, fontWeight: 600, padding: '2px 8px', borderRadius: 3, fontFamily: 'DM Sans, sans-serif' }}>EARN REWARDS</span>
            <span style={{ border: `1.5px solid ${C.muted}`, color: C.muted, fontSize: 9, padding: '2px 8px', borderRadius: 3, fontFamily: 'DM Sans, sans-serif' }}>REDUCE DEBT</span>
          </div>
        )}
      </div>
      {!compact && (
        <div style={{ position: 'absolute', bottom: 14, left: 16, fontSize: 10, color: C.muted, letterSpacing: '0.14em', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, textTransform: 'uppercase' }}>
          15 message groups · value prop framework
        </div>
      )}
    </div>
  );
}

export function SportsVisual({ compact }: { compact?: boolean }) {
  const widths = [72, 90, 55, 88, 65, 80, 48, 95, 70, 58, 84, 62, 76, 50, 88, 68];
  return (
    <div style={{ background: C.white, height: compact ? 110 : 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: 16, bottom: 16, left: compact ? 60 : 148, right: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: compact ? 3 : 5 }}>
        {widths.slice(0, compact ? 10 : 16).map((w, i) => (
          <div key={i} style={{
            height: compact ? 3 : 5, borderRadius: 2,
            background: i % 5 === 0 ? C.violet : C.dark,
            opacity: i % 5 === 0 ? 0.85 : i % 3 === 0 ? 0.15 : 0.08,
            width: `${w}%`,
          }} />
        ))}
      </div>
      <div style={{ position: 'absolute', left: compact ? 12 : 20, top: '50%', transform: 'translateY(-50%)' }}>
        <div style={{ fontSize: compact ? 32 : 54, fontWeight: 700, color: C.violet, lineHeight: 1, fontFamily: 'Londrina Solid, sans-serif' }}>800+</div>
        <div style={{ fontSize: compact ? 7 : 9, color: C.dark, opacity: 0.35, letterSpacing: '0.16em', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, marginTop: compact ? 2 : 5, textTransform: 'uppercase' }}>Alternates</div>
      </div>
      {!compact && (
        <div style={{ position: 'absolute', bottom: 14, left: 20, fontSize: 10, color: C.dark, letterSpacing: '0.14em', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, opacity: 0.3, textTransform: 'uppercase' }}>
          Co-written in 15 min · NYC
        </div>
      )}
    </div>
  );
}

export function TaxVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.white, height: compact ? 110 : 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{
        position: 'absolute', left: compact ? 12 : 52, top: compact ? 12 : 20,
        width: compact ? 50 : 130, height: compact ? 86 : 152,
        border: `1.5px solid ${C.dark}1A`, borderRadius: 4,
        background: C.white, padding: compact ? '6px 6px' : '14px 12px',
        display: 'flex', flexDirection: 'column', gap: compact ? 3 : 7,
      }}>
        <div style={{ height: compact ? 4 : 8, borderRadius: 2, background: C.dark, opacity: 0.65, width: '80%' }} />
        <div style={{ height: compact ? 3 : 6, borderRadius: 2, background: C.dark, opacity: 0.15, width: '100%' }} />
        <div style={{ height: compact ? 3 : 6, borderRadius: 2, background: C.dark, opacity: 0.15, width: '90%' }} />
        <div style={{ height: compact ? 1 : 1, background: C.dark, opacity: 0.08, margin: compact ? '1px 0' : '3px 0' }} />
        <div style={{ height: compact ? 3 : 6, borderRadius: 2, background: C.violet, width: '65%' }} />
        <div style={{ height: compact ? 3 : 6, borderRadius: 2, background: C.muted, width: '80%' }} />
      </div>
      <svg style={{ position: 'absolute', right: compact ? 6 : 28, top: compact ? 18 : 24 }} width={compact ? 45 : 130} height={compact ? 45 : 110} viewBox="0 0 130 110">
        <path d="M 18 95 A 58 58 0 0 1 112 95" fill="none" stroke={C.dark} strokeWidth="3" opacity="0.08" />
        <path d="M 18 95 A 58 58 0 0 1 112 95" fill="none" stroke={C.violet} strokeWidth="3.5"
          strokeDasharray="182" strokeDashoffset="22" strokeLinecap="round" />
        <line x1="65" y1="95" x2="92" y2="46" stroke={C.dark} strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        <circle cx="65" cy="95" r="8" fill={C.violet} />
      </svg>
      {!compact && (
        <div style={{ position: 'absolute', bottom: 14, left: 20, fontSize: 10, color: C.dark, letterSpacing: '0.14em', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, opacity: 0.3, textTransform: 'uppercase' }}>
          €102K deal · Fastest onboarding
        </div>
      )}
    </div>
  );
}

export function SuperappVisual({ compact }: { compact?: boolean }) {
  const bubbles = compact ? [
    { label: 'EN', x: 10,  y: 15 },
    { label: 'ID', x: 60,  y: 15 },
    { label: 'TH', x: 10,  y: 60 },
    { label: 'MY', x: 60,  y: 60 },
  ] : [
    { label: 'EN', x: 56,  y: 28 },
    { label: 'ID', x: 168, y: 28 },
    { label: 'TH', x: 56,  y: 108 },
    { label: 'MY', x: 168, y: 108 },
  ];
  return (
    <div style={{ background: C.dark, height: compact ? 110 : 192, position: 'relative', overflow: 'hidden', width: '100%' }}>
      {bubbles.map(({ label, x, y }) => (
        <div key={label} style={{
          position: 'absolute', left: x, top: y,
          width: compact ? 40 : 72, height: compact ? 32 : 52,
          background: C.bg, borderRadius: compact ? '6px 6px 6px 2px' : '10px 10px 10px 2px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: compact ? 2 : 4,
        }}>
          <span style={{ fontSize: compact ? 9 : 13, fontWeight: 700, color: C.violet, fontFamily: 'DM Sans, sans-serif' }}>{label}</span>
          <div style={{ height: compact ? 3 : 5, borderRadius: 2, background: C.dark, opacity: 0.18, width: compact ? 24 : 42 }} />
        </div>
      ))}
      {!compact && (
        <div style={{ position: 'absolute', bottom: 14, left: 16, fontSize: 10, color: C.muted, letterSpacing: '0.14em', fontFamily: 'DM Sans, sans-serif', fontWeight: 500, textTransform: 'uppercase' }}>
          4+ markets · multi-language push
        </div>
      )}
    </div>
  );
}

export function BarbershopVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.violet, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <div style={{ width: 30, height: 30, border: `2.5px solid ${C.white}`, borderRadius: '50% 50% 0 0', position: 'relative', opacity: 0.6 }}>
          <div style={{ position: 'absolute', top: '50%', left: -6, right: -6, height: 3, background: C.violetLight, transform: 'rotate(45deg)' }} />
          <div style={{ position: 'absolute', top: '50%', left: -6, right: -6, height: 3, background: C.violetLight, transform: 'rotate(-45deg)' }} />
        </div>
        <div style={{ width: 15, height: 3, background: C.white, borderRadius: 1.5, opacity: 0.5 }} />
      </div>
    </div>
  );
}

export function TravelVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.dark, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.violet} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>
    </div>
  );
}

export function RunningVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.white, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', padding: 25 }} viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 4v16M17 4v16M9 4v16M5 4v16M21 4v16M3 12h18" stroke={C.dark} strokeOpacity="0.08" strokeWidth="2" />
        <path d="M18 8a3 3 0 1 0-3 3 3 3 0 0 1-3 3 3 3 0 1 0-3 3" stroke={C.violet} strokeWidth="3" />
      </svg>
    </div>
  );
}

export function MusicVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.dark, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
        {[0.4, 0.7, 1, 0.6, 0.8, 0.5].map((h, i) => (
          <div key={i} style={{ width: 3, height: `${h * 40}%`, background: C.violet, borderRadius: 1.5 }} />
        ))}
      </div>
    </div>
  );
}

export function RewardsVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.violet, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 36, height: 36, background: C.violetLight, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: C.violet, fontSize: 20, fontWeight: 900, fontFamily: 'serif' }}>★</span>
      </div>
    </div>
  );
}

export function GreetingVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.white, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(5deg)', width: 40, height: 56, border: `2px solid ${C.dark}1A`, borderRadius: 3, background: C.white, padding: 5 }}>
        <div style={{ width: '100%', height: '40%', background: C.violetLight, borderRadius: 1.5, marginBottom: 3 }} />
        <div style={{ width: '80%', height: 2, background: C.dark, opacity: 0.12, borderRadius: 1, marginBottom: 2 }} />
        <div style={{ width: '60%', height: 2, background: C.dark, opacity: 0.12, borderRadius: 1 }} />
      </div>
    </div>
  );
}

export function ShoppingVisual({ compact }: { compact?: boolean }) {
  return (
    <div style={{ background: C.dark, height: 110, position: 'relative', overflow: 'hidden', width: '100%' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={C.violet} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      </div>
    </div>
  );
}

export function AampeStrategyVisual({ compact }: { compact?: boolean }) {
  const h = compact ? 110 : 192;
  const COLS = 20;
  const ROWS = compact ? 6 : 10;
  const DOT = compact ? 4 : 6;
  const GAP = compact ? 15 : 17;
  // A diagonal band of highlighted dots representing the "semantic layer"
  const highlighted = new Set([
    22, 23, 38, 39, 40, 55, 56, 57, 58, 72, 73, 74, 75, 91, 92, 93, 110, 111,
  ]);

  return (
    <div style={{ background: C.white, height: h, width: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Dot matrix */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        {Array.from({ length: ROWS }, (_, r) =>
          Array.from({ length: COLS }, (_, c) => {
            const idx = r * COLS + c;
            const hi = highlighted.has(idx);
            return (
              <circle
                key={idx}
                cx={8 + c * GAP}
                cy={8 + r * GAP}
                r={hi ? DOT / 2 + 1 : DOT / 2}
                fill={hi ? C.violet : C.violetLight}
                opacity={hi ? 0.8 : 0.28}
              />
            );
          })
        )}
      </svg>
      {/* Scale label — bottom right */}
      <div style={{ position: 'absolute', bottom: compact ? 10 : 18, right: compact ? 12 : 18, textAlign: 'right' }}>
        <div style={{ fontSize: compact ? 26 : 38, fontFamily: 'Londrina Solid, serif', color: C.dark, lineHeight: 1 }}>
          1M+
        </div>
        <div style={{ fontSize: 8, fontFamily: 'DM Sans, sans-serif', fontWeight: 600, color: C.muted, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginTop: 2 }}>
          Agents
        </div>
      </div>
      {/* Layer label — top left */}
      <div style={{ position: 'absolute', top: compact ? 10 : 16, left: compact ? 10 : 16, fontSize: 8, fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: C.violet, letterSpacing: '0.14em', textTransform: 'uppercase' as const, opacity: 0.7 }}>
        Semantic Layer
      </div>
    </div>
  );
}
