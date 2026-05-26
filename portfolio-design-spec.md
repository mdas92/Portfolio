# Portfolio Website — Design Specification
**Approved Direction: Concept B — Fraunces + Vivid Coral**
*Version 1.0 · May 2026*

---

## 1. Branding

### Palette

| Role | Name | Hex |
|---|---|---|
| Background | Off-white | `#FAFAFA` |
| Primary Text | Near-black | `#111111` |
| Muted Text | Near-black 70% | `rgba(17,17,17,0.7)` |
| Accent | Vivid Coral | `#FF4530` |
| Accent Hover | Coral Dark | `#E03D2A` |
| White (overlays/buttons) | Pure White | `#FFFFFF` |

### Typography

**Google Fonts import URL:**
```
https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap
```

| Role | Family | Weight | Style | Size | Notes |
|---|---|---|---|---|---|
| Hero line 1 | Fraunces | 500 medium | Normal | `clamp(4rem, 10vw, 11rem)` | Upright, fills width |
| Hero line 2 | Fraunces | 300 light | Italic | `clamp(4rem, 10vw, 11rem)` | Wonky italic — lean into it |
| Hero accent word | Fraunces | 400 normal | Normal | Inherits hero | Coral `#FF4530`, not-italic override |
| Brand logotype | Fraunces | 600 semibold | Italic | `1.5rem` | Nav — e.g. "Your Name." |
| Body / bio | DM Sans | 300 light | Normal | `1.125rem–1.25rem` | Paragraphs, descriptions |
| Labels / nav links | DM Sans | 500 medium | Normal | `0.75rem–0.875rem` | All-caps, `letter-spacing: 0.2em` |
| CTA button | DM Sans | 500 medium | Normal | `0.875rem` | — |

**Critical type settings:**
- Hero `line-height: 0.85` — tighter than default, essential for the stacked look
- Hero `letter-spacing: -0.04em` — negative tracking makes display text feel intentional
- Label `letter-spacing: 0.2em` — wide-spaced small caps provide structural contrast
- Body `line-height: 1.625` (Tailwind `leading-relaxed`)

**Fraunces variable font axes** (`font-variation-settings` for max optical character):
```css
.hero-text-italic {
  font-variation-settings: 'opsz' 144, 'wght' 300;
  font-style: italic;
}
.hero-text-upright {
  font-variation-settings: 'opsz' 144, 'wght' 500;
}
```

---

## 2. Signature Motifs

These recurring elements create visual consistency across the site:

| Motif | Spec |
|---|---|
| **Coral dash separator** | `8px wide × 2px tall` coral bar (`#FF4530`), inline-flex with spaced uppercase DM Sans label. Used before every section label. |
| **Nav hover dot** | `6px` coral circle, `opacity: 0` → `opacity: 1` on hover, positioned `-12px` left of link text |
| **Curved SVG underline** | SVG arc under the hero accent word: `<path d="M0 10 Q 50 20 100 10">`, stroke `#FF4530`, width `4px`, `strokeLinecap: round` |
| **Rounded pill CTA** | `border-radius: 9999px`, coral fill, white text, `padding: 1rem 2rem`. Hover: darker coral + `scale(1.05)` |
| **Opacity muting** | Secondary/body text uses `#111111` at 70% opacity — not a separate grey hex, keeping the palette strict |

---

## 3. Site Map

```
/                   Home — hero + featured work preview + about teaser
/work               Work index — filterable project grid
/work/[slug]        Project detail — full case study
/about              About — bio, skills, process
/contact            Contact — form + social links
/journal            (Optional) Writing / notes
```

---

## 4. Page-by-Page Layout

### 4.1 Home (`/`)

**Navigation**
- Full-width, `padding: 2rem 4rem` (fluid), flex row `justify-between items-start`
- Left: brand logotype — Fraunces semibold italic, 1.5rem, e.g. "Jane Smith." or initials
- Right: 3–4 DM Sans medium links, `font-size: 0.875rem`, gap `2.5rem`
- Hover state: coral dot appears left of link + text color → `#FF4530`
- No border, no background — nav floats over the hero

**Hero Section**
- Outer container: fluid horizontal padding, vertically centred, `max-width: 64rem`
- **Role label row** (above headline): coral 8px dash + uppercase DM Sans label, `margin-bottom: 3rem`
- **`<h1>` headline**: two-line stacked Fraunces
  - Line 1: medium upright — e.g. "Making"
  - Line 2: light italic — e.g. "things *pop*." — accent word in `#FF4530` with curved SVG underline
- **Below-fold info row** (12-col grid, `margin-top: 6rem`):
  - Cols 1–5: Bio sentence — DM Sans light, `opacity: 0.7`
  - Cols 6–12: Coral pill CTA right-aligned — "Start a project ↗"

**Featured Work**
- Section label: coral dash + "Selected Work"
- 2-column `ProjectCard` grid (see §5)
- "View all work →" coral text link

**About Teaser**
- 2–3 sentence who-I-am block in DM Sans light
- Link to `/about`

---

### 4.2 Work Index (`/work`)

- Page title: Fraunces medium, `4rem–6rem`
- Filter tabs: DM Sans small caps — All / Brand / Web / Motion / Print
  - Active: coral underline or coral text
- Project grid: 2 columns desktop, 1 mobile, `gap: 2rem–3rem`
- Each card: thumbnail + Fraunces italic project name + DM Sans caps category tag
- Hover: image scales `1.03`, coral accent mark appears

---

### 4.3 Project Detail (`/work/[slug]`)

- Hero: full-bleed project image or video
- Meta row: client · year · category (DM Sans caps, coral dash separators)
- Body: DM Sans light, `max-width: 40rem`, comfortable measure
- Image gallery: full-width or 2-column depending on content
- Footer: "Next: *Project Name* →" — Fraunces italic, coral accent

---

### 4.4 About (`/about`)

- Headline: Fraunces, `4rem+` — "About me" or a one-liner statement
- Portrait photo: positioned asymmetrically (right col on desktop)
- Bio: 2–3 paragraphs DM Sans light
- Disciplines list: coral dash + category name
- Process steps (optional): numbered with coral numerals in Fraunces

---

### 4.5 Contact (`/contact`)

- Headline: Fraunces italic — "Let's make something."
- Sub-copy: DM Sans light, 1–2 lines
- Form fields: name, email, message — underline-only border, coral focus state
- Submit: coral pill button
- Below form: email address as coral text link, social icon row

---

## 5. Component Inventory

### `Nav`
```tsx
interface NavProps {
  links: { label: string; href: string }[];
  brandName: string;
}
// Logotype: Fraunces semibold italic
// Links: DM Sans medium, coral hover dot + text transition
// Mobile: hamburger → full-screen overlay (optional for v1)
```

### `Hero`
```tsx
interface HeroProps {
  roleLabel: string;     // "Creative Director & Designer"
  headlineL1: string;    // "Making"
  headlineL2: string;    // "things"
  accentWord: string;    // "pop"  — gets coral color + SVG underline
  bio: string;
  ctaLabel: string;      // "Start a project"
  ctaHref: string;
}
```

### `SectionLabel`
```tsx
interface SectionLabelProps {
  text: string;
}
// Renders: [coral dash] [UPPERCASE DM SANS LABEL]
// Used before every section heading site-wide
```

### `ProjectCard`
```tsx
interface ProjectCardProps {
  title: string;
  category: string;
  thumbnail: string;   // /public path or absolute URL
  href: string;
  year?: number;
}
// Title: Fraunces italic
// Category: DM Sans caps 0.75rem, coral or muted
// Hover: image scale-103, coral accent
```

### `ProjectGrid`
```tsx
interface ProjectGridProps {
  projects: ProjectCardProps[];
  columns?: 1 | 2 | 3;   // default: 2
}
```

### `ContactForm`
```tsx
interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}
// Fields: underline-only border, coral :focus ring
// Submit: coral pill button
// Errors: inline coral text
```

### `Footer`
```tsx
interface FooterProps {
  name: string;
  year: number;
  socialLinks: { platform: string; href: string }[];
  email: string;
}
// Left: copyright — DM Sans light, muted
// Right: social links, coral hover
```

### `Tag`
```tsx
interface TagProps {
  label: string;
  active?: boolean;
}
// Default: grey border + muted text
// Active: coral text + coral border
```

---

## 6. File Structure (Next.js 15 App Router)

```
my-portfolio/
├── app/
│   ├── layout.tsx            # Root layout — font link, global CSS, metadata
│   ├── page.tsx              # Home
│   ├── work/
│   │   ├── page.tsx          # Work index
│   │   └── [slug]/
│   │       └── page.tsx      # Project detail
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── journal/              # Optional
│       └── page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Footer.tsx
│   ├── SectionLabel.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   ├── ContactForm.tsx
│   └── Tag.tsx
├── data/
│   └── projects.ts
├── public/
│   └── images/
│       └── projects/
├── styles/
│   └── globals.css
├── tailwind.config.ts
└── next.config.ts
```

### `data/projects.ts`
```ts
export interface Project {
  slug: string;
  title: string;
  category: string;
  year: number;
  thumbnail: string;
  description: string;
  images: string[];
  tags: string[];
  client?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    slug: "brand-identity-acme",
    title: "Brand Identity — Acme Co.",
    category: "Brand",
    year: 2025,
    thumbnail: "/images/projects/acme-thumb.jpg",
    description: "A complete visual identity system for a consumer tech startup.",
    images: ["/images/projects/acme-1.jpg"],
    tags: ["Brand", "Identity", "Typography"],
    client: "Acme Co.",
  },
];
```

---

## 7. CSS Design Tokens

### `styles/globals.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

:root {
  --color-bg:           #FAFAFA;
  --color-text:         #111111;
  --color-text-muted:   rgba(17, 17, 17, 0.7);
  --color-accent:       #FF4530;
  --color-accent-dark:  #E03D2A;
  --color-white:        #FFFFFF;

  --font-display:       'Fraunces', serif;
  --font-body:          'DM Sans', sans-serif;

  --section-px:         clamp(1.5rem, 6vw, 6rem);
  --section-gap:        clamp(4rem, 10vw, 8rem);
  --transition-base:    all 0.3s ease;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background-color: var(--color-accent);
  color: var(--color-white);
}
```

### `tailwind.config.ts`
```ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:            "#FAFAFA",
        ink:           "#111111",
        accent:        "#FF4530",
        "accent-dark": "#E03D2A",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body:    ["DM Sans", "sans-serif"],
      },
      letterSpacing: {
        label: "0.2em",
      },
      lineHeight: {
        hero: "0.85",
      },
    },
  },
} satisfies Config;
```

---

## 8. Implementation Notes

### Stack
- **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS v4**
- Deploy on **Vercel** — zero-config, auto-deploys on push to `main`

### Bootstrap commands
```bash
npx create-next-app@latest my-portfolio \
  --typescript --tailwind --app --eslint --src-dir=false
cd my-portfolio
npm install lucide-react
```

### Responsive breakpoints (Tailwind defaults)
| Breakpoint | Min-width | Notes |
|---|---|---|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet — nav goes horizontal |
| `lg` | 1024px | Desktop — full hero scale |
| `xl` | 1280px | Widescreen — apply `max-w` containers |

### Fluid hero type
```css
font-size: clamp(4rem, 10vw, 11rem);
```
Or in Tailwind 4: `text-[clamp(4rem,10vw,11rem)]`

### GitHub → Vercel connection
1. `git init && git add . && git commit -m "init"`
2. Create a repo on GitHub, push
3. Import repo in Vercel dashboard → auto-deploys on every push to `main`
