const P = {
  cream: '#FFFCF0',
  green: '#0D3B2E',
  sienna: '#C45C26',
  lime: '#C5F135',
  muted: '#7D7A74',
  border: 'rgba(13,59,46,0.12)',
  altRow: 'rgba(13,59,46,0.028)',
};

function Frame({ children, label, note }: { children: React.ReactNode; label?: string; note?: string }) {
  return (
    <div style={{
      borderRadius: 10,
      border: `1px solid ${P.border}`,
      overflow: 'hidden',
      boxShadow: '0 4px 24px rgba(13,59,46,0.07), 0 1px 4px rgba(13,59,46,0.05)',
      fontFamily: 'Space Grotesk, ui-sans-serif, sans-serif',
    }}>
      <div style={{
        background: 'rgba(13,59,46,0.05)',
        borderBottom: `1px solid ${P.border}`,
        padding: '9px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(13,59,46,0.18)' }} />
          ))}
        </div>
        {label && (
          <span style={{ fontSize: 10, color: P.muted, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginLeft: 4 }}>
            {label}
          </span>
        )}
        {note && (
          <span style={{ fontSize: 10, color: 'rgba(13,59,46,0.3)', marginLeft: 'auto' }}>
            {note}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function ImpactBadge({ level }: { level: 'High' | 'Med' | 'Low' }) {
  const styles: Record<string, { bg: string; color: string; border: string }> = {
    High: { bg: `${P.sienna}18`, color: P.sienna, border: `${P.sienna}35` },
    Med:  { bg: `${P.lime}35`,   color: '#4a5a00', border: `${P.lime}60` },
    Low:  { bg: 'transparent',   color: P.muted,   border: P.border },
  };
  const s = styles[level];
  return (
    <span style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}`, padding: '3px 10px', borderRadius: 99, fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap' as const }}>
      {level}
    </span>
  );
}

function TypeChip({ label }: { label: string }) {
  return (
    <span style={{ background: `${P.green}10`, color: P.green, padding: '2px 8px', borderRadius: 99, fontSize: 10, fontWeight: 500, whiteSpace: 'nowrap' as const, opacity: 0.75 }}>
      {label}
    </span>
  );
}

/* ─── 1. Hero Map - Full Grid Overview ─── */
export function HeroMapVisual() {
  const headers = ['Feature', 'Sub-feature', 'Topic', 'Content type', 'Channels', 'Impact'];
  const rows: { cells: string[]; impact: 'High' | 'Med' | 'Low' }[] = [
    { cells: ['Onboarding',    'Account setup',  'Welcome & orientation',          'foundational-feature-education', 'Push, Email'],   impact: 'High' },
    { cells: ['Core Feature',  'Discovery',      'What to do first',               'foundational-thematic',          'Push, In-app'],  impact: 'High' },
    { cells: ['Retention',     'At-risk users',  "Remind them what they're missing",'contextual-lifecycle',           'Push, Email'],   impact: 'High' },
    { cells: ['Cross-feature', 'Premium tier',   'Upgrade at the right moment',    'contextual-lifecycle',           'Email, In-app'], impact: 'Med'  },
    { cells: ['Community',     'Referral',       'Bring a friend',                 'social',                         'Push'],          impact: 'Med'  },
    { cells: ['Seasonal',      'Events',         'Timely moments',                 'seasonal',                       'Push, Email'],   impact: 'Low'  },
  ];

  return (
    <Frame label="Content Map - Overview" note="6 of 28 topics shown">
      <div style={{ background: P.cream, overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, minWidth: 640 }}>
          <thead>
            <tr>
              {headers.map(h => (
                <th key={h} style={{
                  background: P.green, color: P.cream, textAlign: 'left',
                  padding: '9px 12px', fontWeight: 600, fontSize: 10,
                  letterSpacing: '0.08em', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const,
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} style={{ borderBottom: `1px solid ${P.border}` }}>
                {row.cells.map((cell, ci) => (
                  <td key={ci} style={{
                    padding: '9px 12px',
                    background: ri % 2 === 1 ? P.altRow : P.cream,
                    verticalAlign: 'top',
                    whiteSpace: ci < 2 ? 'nowrap' as const : 'normal' as const,
                    color: ci === 3 ? P.muted : P.green,
                    fontWeight: ci === 0 ? 600 : 400,
                  }}>
                    {ci === 3 ? <TypeChip label={cell} /> : cell}
                  </td>
                ))}
                <td style={{ padding: '9px 12px', background: ri % 2 === 1 ? P.altRow : P.cream, whiteSpace: 'nowrap' as const }}>
                  <ImpactBadge level={row.impact} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: '10px 14px', borderTop: `1px solid ${P.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 10, color: P.muted }}>Showing 6 rows · Sorted by Impact</span>
          <div style={{ display: 'flex', gap: 12 }}>
            {(['High', 'Med', 'Low'] as const).map(l => (
              <span key={l} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10, color: P.muted }}>
                <ImpactBadge level={l} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ─── 2. First Map - Work in Progress ─── */
export function FirstMapVisual() {
  const rows: { feature: string; sub: string; topic: string; channels: string; impact: 'High' | 'Med' | 'Low' | null; done: boolean }[] = [
    { feature: 'Core Feature', sub: 'Discovery',      topic: 'Getting started guide',  channels: 'Push, Email',  impact: 'High', done: true  },
    { feature: 'Core Feature', sub: 'Key actions',    topic: 'Making the most of it',  channels: 'Push, In-app', impact: 'High', done: true  },
    { feature: 'Core Feature', sub: 'Advanced use',   topic: '',                        channels: '',             impact: null,   done: false },
    { feature: 'Onboarding',   sub: 'Welcome',        topic: 'Your first week',         channels: 'Email',        impact: 'High', done: true  },
    { feature: 'Onboarding',   sub: 'Activation',     topic: '',                        channels: '',             impact: null,   done: false },
    { feature: 'Engagement',   sub: 'Habit building', topic: 'Daily value reminder',    channels: 'Push',         impact: 'Med',  done: true  },
    { feature: 'Engagement',   sub: 'Social proof',   topic: '',                        channels: '',             impact: null,   done: false },
    { feature: 'Global',       sub: 'Re-engagement',  topic: 'We miss you',             channels: 'Push, Email',  impact: 'Med',  done: true  },
    { feature: 'Global',       sub: 'Milestones',     topic: '',                        channels: '',             impact: null,   done: false },
  ];

  const filled = rows.filter(r => r.done).length;
  const pct = Math.round((filled / rows.length) * 100);

  let lastFeature = '';
  return (
    <Frame label="Content Map - v1 draft" note={`${filled} of ${rows.length} topics mapped`}>
      <div style={{ background: P.cream }}>
        {/* Progress bar */}
        <div style={{ padding: '10px 14px 8px', borderBottom: `1px solid ${P.border}`, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1, height: 5, borderRadius: 99, background: `${P.green}12` }}>
            <div style={{ width: `${pct}%`, height: '100%', borderRadius: 99, background: P.sienna }} />
          </div>
          <span style={{ fontSize: 10, color: P.muted, whiteSpace: 'nowrap' as const, fontWeight: 600 }}>{pct}% mapped</span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, minWidth: 560 }}>
            <thead>
              <tr>
                {['Feature', 'Sub-feature', 'Topic', 'Channels', 'Impact', ''].map(h => (
                  <th key={h} style={{
                    background: P.green, color: P.cream, textAlign: 'left',
                    padding: '8px 12px', fontWeight: 600, fontSize: 10,
                    letterSpacing: '0.08em', textTransform: 'uppercase' as const,
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => {
                const showFeature = row.feature !== lastFeature;
                if (showFeature) lastFeature = row.feature;
                const empty = !row.done;
                return (
                  <tr key={ri} style={{ borderBottom: `1px solid ${P.border}`, opacity: empty ? 0.45 : 1 }}>
                    <td style={{ padding: '8px 12px', background: ri % 2 === 1 ? P.altRow : P.cream, fontWeight: 600, color: P.green, whiteSpace: 'nowrap' as const }}>
                      {showFeature ? row.feature : ''}
                    </td>
                    <td style={{ padding: '8px 12px', background: ri % 2 === 1 ? P.altRow : P.cream, color: P.green, whiteSpace: 'nowrap' as const }}>{row.sub}</td>
                    <td style={{ padding: '8px 12px', background: ri % 2 === 1 ? P.altRow : P.cream, color: empty ? P.muted : P.green, fontStyle: empty ? 'italic' as const : 'normal' as const }}>
                      {empty ? '-' : row.topic}
                    </td>
                    <td style={{ padding: '8px 12px', background: ri % 2 === 1 ? P.altRow : P.cream, color: P.muted, whiteSpace: 'nowrap' as const }}>{row.channels || '-'}</td>
                    <td style={{ padding: '8px 12px', background: ri % 2 === 1 ? P.altRow : P.cream, whiteSpace: 'nowrap' as const }}>
                      {row.impact ? <ImpactBadge level={row.impact} /> : <span style={{ color: P.border, fontSize: 10 }}>-</span>}
                    </td>
                    <td style={{ padding: '8px 12px', background: ri % 2 === 1 ? P.altRow : P.cream, textAlign: 'center' as const }}>
                      {row.done
                        ? <span style={{ color: P.lime, fontWeight: 800, fontSize: 13 }}>✓</span>
                        : <span style={{ color: P.border, fontSize: 11 }}>○</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Frame>
  );
}

/* ─── 3. Challenge - Constellation of Verticals ─── */
export function ChallengeConstellationVisual() {
  const cx = 300;
  const cy = 178;
  const r  = 120;

  type Node = {
    label: string;
    count: string;
    angle: number;
    color: string;
    textAnchor: 'middle' | 'start' | 'end';
    lx: number;
    ly: number;
    cy2: number;
  };

  const nodes: Node[] = [
    { label: 'Financial Services', count: '4 maps', angle: 270, color: P.sienna,   textAnchor: 'middle', lx: cx,       ly: 20, cy2: 34  },
    { label: 'Sports & Media',     count: '3 maps', angle: 330, color: P.green,    textAnchor: 'start',  lx: 433,     ly: 112, cy2: 126 },
    { label: 'Travel & Mobility',  count: '3 maps', angle: 30,  color: '#4e5c00',  textAnchor: 'start',  lx: 433,     ly: 230, cy2: 244 },
    { label: 'Health & Fitness',   count: '2 maps', angle: 90,  color: P.sienna,   textAnchor: 'middle', lx: cx,      ly: 318, cy2: 332 },
    { label: 'Consumer Apps',      count: '2 maps', angle: 150, color: P.green,    textAnchor: 'end',    lx: 167,     ly: 230, cy2: 244 },
    { label: 'Marketplace',        count: '1 map',  angle: 210, color: P.muted,    textAnchor: 'end',    lx: 167,     ly: 112, cy2: 126 },
  ];

  const toRad = (d: number) => (d * Math.PI) / 180;
  const pos   = (a: number) => ({ x: cx + r * Math.cos(toRad(a)), y: cy + r * Math.sin(toRad(a)) });

  return (
    <Frame label="Content Map Challenge - verticals covered">
      <div style={{ background: P.cream, padding: '8px 4px 12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px 6px', alignItems: 'center' }}>
          <span style={{ fontSize: 10, color: P.muted, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.06em' }}>
            ~15 participants · 6 verticals · 2 weeks
          </span>
          <span style={{ fontSize: 10, color: P.sienna, fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>
            15 maps built
          </span>
        </div>

        <svg viewBox="0 0 600 348" style={{ width: '100%', height: 'auto', display: 'block' }}>
          {/* Subtle radial grid rings */}
          <circle cx={cx} cy={cy} r={r * 0.5} fill="none" stroke={P.green} strokeWidth="0.5" opacity="0.06" />
          <circle cx={cx} cy={cy} r={r}         fill="none" stroke={P.green} strokeWidth="0.5" opacity="0.06" />

          {/* Spokes */}
          {nodes.map((n, i) => {
            const p = pos(n.angle);
            return (
              <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y}
                stroke={P.green} strokeWidth="1" strokeDasharray="4 5" opacity="0.18" />
            );
          })}

          {/* Outer nodes */}
          {nodes.map((n, i) => {
            const p = pos(n.angle);
            return (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="28" fill={n.color} opacity="0.1" />
                <circle cx={p.x} cy={p.y} r="17" fill={n.color} opacity="0.22" />
                <circle cx={p.x} cy={p.y} r="9"  fill={n.color} />
                <text x={n.lx} y={n.ly}  textAnchor={n.textAnchor} fill={P.green}  fontSize="11" fontWeight="600" fontFamily="Space Grotesk, sans-serif">{n.label}</text>
                <text x={n.lx} y={n.cy2} textAnchor={n.textAnchor} fill={P.muted}  fontSize="10" fontFamily="Space Grotesk, sans-serif">{n.count}</text>
              </g>
            );
          })}

          {/* Center node */}
          <circle cx={cx} cy={cy} r="48" fill={P.green} />
          <circle cx={cx} cy={cy} r="48" fill="none" stroke={P.lime} strokeWidth="2" opacity="0.4" />
          <text x={cx} y={cy - 10} textAnchor="middle" fill={P.cream}  fontSize="11" fontWeight="700" fontFamily="Space Grotesk, sans-serif" letterSpacing="0.06em">CONTENT</text>
          <text x={cx} y={cy + 4}  textAnchor="middle" fill={P.cream}  fontSize="11" fontWeight="700" fontFamily="Space Grotesk, sans-serif" letterSpacing="0.06em">MAP</text>
          <text x={cx} y={cy + 20} textAnchor="middle" fill={P.lime}   fontSize="9"  fontFamily="Space Grotesk, sans-serif" letterSpacing="0.14em">CHALLENGE</text>
        </svg>
      </div>
    </Frame>
  );
}

/* ─── 4. Closed-Won - Slack message mockup ─── */
export function ClosedWonVisual() {
  return (
    <Frame label="#team-wins">
      <div style={{ background: P.cream }}>
        {/* Channel subheader */}
        <div style={{
          borderBottom: `1px solid ${P.border}`,
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: P.green, opacity: 0.6 }}>#team-wins</span>
          <span style={{ fontSize: 10, color: P.muted }}>·</span>
          <span style={{ fontSize: 10, color: P.muted }}>Celebrating wins across the team</span>
        </div>

        {/* Message */}
        <div style={{ padding: '20px 20px 8px', display: 'flex', gap: 14 }}>
          {/* Avatar */}
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: P.green, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: P.cream, fontSize: 12, fontWeight: 700 }}>SM</span>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
              <span style={{ fontWeight: 700, color: P.green, fontSize: 14 }}>Sam M.</span>
              <span style={{ color: P.muted, fontSize: 11 }}>Today at 3:42 PM</span>
            </div>

            <p style={{ margin: '0 0 10px', color: '#3a3530', fontSize: 13.5, lineHeight: 1.55 }}>
              🎉 <strong>Key Account - Closed Won!</strong> The Content Map session on-site was the turning point - the team walked away with a clear roadmap and the confidence to sign.
            </p>
            <p style={{ margin: '0 0 14px', color: '#3a3530', fontSize: 13.5, lineHeight: 1.55 }}>
              "Thank you for all of your work on the content map!! This was a key session."
            </p>

            {/* Stat badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, marginBottom: 16 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: `${P.sienna}12`, border: `1px solid ${P.sienna}30`,
                borderRadius: 6, padding: '7px 12px',
              }}>
                <span style={{ color: P.sienna, fontWeight: 700, fontSize: 14 }}>$90K TCV</span>
              </span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: `${P.green}08`, border: `1px solid ${P.border}`,
                borderRadius: 6, padding: '7px 12px',
              }}>
                <span style={{ color: P.green, fontSize: 12, opacity: 0.7 }}>📍 On-site session</span>
              </span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: `${P.green}08`, border: `1px solid ${P.border}`,
                borderRadius: 6, padding: '7px 12px',
              }}>
                <span style={{ color: P.green, fontSize: 12, opacity: 0.7 }}>🗓 Oct 2025</span>
              </span>
            </div>

            {/* Reactions */}
            <div style={{ display: 'flex', gap: 6 }}>
              {[{ e: '🎉', n: 12 }, { e: '💪', n: 8 }, { e: '🔥', n: 5 }].map(({ e, n }) => (
                <span key={e} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  background: `${P.green}08`, border: `1px solid ${P.border}`,
                  borderRadius: 99, padding: '3px 9px',
                  fontSize: 12, color: P.green,
                }}>
                  {e} <span style={{ fontWeight: 700, fontSize: 11 }}>{n}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ height: 12 }} />
      </div>
    </Frame>
  );
}
