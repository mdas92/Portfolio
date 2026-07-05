const P = {
  cream: '#FFFCF0',
  green: '#0D3B2E',
  sienna: '#C45C26',
  lime: '#C5F135',
  muted: '#7D7A74',
  border: 'rgba(13,59,46,0.12)',
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

/* ─── 1. Hero — The alias problem: one object, five names ─── */
export function AliasChainVisual() {
  const names = ['Formulas', 'Message Groups', 'Messages', 'Alternate Messages', 'Message Combinations'];
  return (
    <Frame label="One object — five names in circulation" note="Aliasing audit, 2025">
      <div style={{ background: P.cream, padding: '28px 20px 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          {names.map((n, i) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                background: i === 0 ? P.sienna : `${P.green}0d`,
                color: i === 0 ? P.cream : P.green,
                border: i === 0 ? 'none' : `1px solid ${P.border}`,
                borderRadius: 8,
                padding: '9px 14px',
                fontSize: 12.5,
                fontWeight: 600,
                whiteSpace: 'nowrap' as const,
              }}>
                {n}
              </span>
              {i < names.length - 1 && (
                <span style={{ color: P.muted, fontSize: 14, opacity: 0.5 }}>↔</span>
              )}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 22, textAlign: 'center' as const }}>
          <span style={{ fontSize: 11, color: P.muted, letterSpacing: '0.06em' }}>
            Multiply by every object in the platform · 20+ live client programs
          </span>
        </div>
      </div>
    </Frame>
  );
}

/* ─── 2. Misread objects table ─── */
export function MisreadObjectsVisual() {
  const rows = [
    { object: 'Component', what: 'A slot inside one message that agents fill with variants (Greeting, Value Prop, Offering, Incentive, CTA).', misread: 'Global blocks the AI swaps across unrelated messages.' },
    { object: 'Label', what: 'A semantic tag stating what content expresses, so agents learn which expressions work per user.', misread: 'Category and value at once, with no clear hierarchy.' },
    { object: 'Topic', what: 'The organizing layer that groups related formulas under one use case or goal.', misread: 'Interchangeable with tags; one client used Topics and ignored Tags entirely.' },
  ];
  return (
    <Frame label="Terms coined ad hoc, read three different ways">
      <div style={{ background: P.cream, overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5, minWidth: 600 }}>
          <thead>
            <tr>
              {['Object', 'What it is', 'Misread as'].map(h => (
                <th key={h} style={{
                  background: P.green, color: P.cream, textAlign: 'left',
                  padding: '9px 12px', fontWeight: 600, fontSize: 10,
                  letterSpacing: '0.08em', textTransform: 'uppercase' as const,
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.object} style={{ borderBottom: `1px solid ${P.border}` }}>
                <td style={{ padding: '11px 12px', background: i % 2 === 1 ? 'rgba(13,59,46,0.028)' : P.cream, fontWeight: 700, color: P.green, verticalAlign: 'top', whiteSpace: 'nowrap' as const }}>{r.object}</td>
                <td style={{ padding: '11px 12px', background: i % 2 === 1 ? 'rgba(13,59,46,0.028)' : P.cream, color: P.green, verticalAlign: 'top' }}>{r.what}</td>
                <td style={{ padding: '11px 12px', background: i % 2 === 1 ? 'rgba(13,59,46,0.028)' : P.cream, color: P.sienna, verticalAlign: 'top', fontStyle: 'italic' as const }}>{r.misread}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Frame>
  );
}

/* ─── 3. Naming hierarchy: Atomic → System ─── */
export function HierarchyVisual() {
  const steps = ['Alternate', 'Component', 'Message', 'Formula', 'Topic'];
  return (
    <Frame label="Respect the hierarchy" note="Atomic → modular → system">
      <div style={{ background: P.cream, padding: '26px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' as const, gap: 4 }}>
          {steps.map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{
                  width: 14 + i * 7,
                  height: 14 + i * 7,
                  borderRadius: '50%',
                  background: i === steps.length - 1 ? P.sienna : P.green,
                  opacity: 0.15 + i * 0.18,
                }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: P.green }}>{s}</span>
              </div>
              {i < steps.length - 1 && (
                <span style={{ color: P.muted, fontSize: 13, margin: '0 8px 22px', opacity: 0.5 }}>→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ─── 4. Terminology Session — Taiwan offsite ─── */
export function TerminologySessionVisual() {
  const entities = [
    { before: 'Label', after: 'Tag' },
    { before: 'Component Type', after: 'Tag Group' },
    { before: 'Message Group', after: 'Formula' },
    { before: 'Message Combination', after: 'Message' },
    { before: 'Audience', after: 'Eligibility Criteria' },
  ];
  return (
    <Frame label="Terminology Session — Taiwan offsite" note="10 people incl. CEO & co-founder · live polls">
      <div style={{ background: P.cream, padding: '18px 18px 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {entities.map(({ before, after }) => (
            <div key={before} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                flex: 1, textAlign: 'right' as const,
                fontSize: 12.5, color: P.muted, textDecoration: 'line-through',
                fontWeight: 500,
              }}>
                {before}
              </span>
              <span style={{ color: P.sienna, fontSize: 13, flexShrink: 0 }}>→</span>
              <span style={{
                flex: 1, fontSize: 13, color: P.green, fontWeight: 700,
                background: `${P.lime}45`, borderRadius: 6, padding: '4px 10px', display: 'inline-block', width: 'fit-content',
              }}>
                {after}
              </span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${P.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 10, color: P.muted, letterSpacing: '0.06em' }}>9 entities ratified · sentence test on every one</span>
          <span style={{ fontSize: 10, color: P.sienna, fontWeight: 700 }}>Jan–Apr 2026</span>
        </div>
      </div>
    </Frame>
  );
}

/* ─── 5. Three acts timeline ─── */
export function ThreeActsVisual() {
  const acts = [
    { n: '01', label: 'Act I', time: '2025', title: 'The problem keeps introducing itself', color: P.muted },
    { n: '02', label: 'Act II', time: 'Oct–Dec 2025', title: 'Making it a product problem', color: P.sienna },
    { n: '03', label: 'Act III', time: 'Jan–Apr 2026', title: 'Decide, ratify, ship', color: P.green },
  ];
  return (
    <Frame label="Three acts">
      <div style={{ background: P.cream, padding: '4px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {acts.map((a, i) => (
            <div key={a.n} style={{
              padding: '20px 16px',
              borderRight: i < 2 ? `1px solid ${P.border}` : 'none',
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: a.color, letterSpacing: '0.14em', textTransform: 'uppercase' as const }}>{a.label}</span>
              <span style={{ fontSize: 10, color: P.muted }}>{a.time}</span>
              <span style={{ fontSize: 12.5, fontWeight: 600, color: P.green, lineHeight: 1.35 }}>{a.title}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}
