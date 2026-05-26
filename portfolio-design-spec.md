# Portfolio Website — Design Specification

> **Status:** Branding direction pending approval. This document covers all three explored directions (A, B, C). Once you select one, strike through the others or simply reference the chosen section.

---

## Table of Contents

1. [Branding Options](#1-branding-options)
2. [Site Map](#2-site-map)
3. [Page-by-Page Layout Outline](#3-page-by-page-layout-outline)
4. [Component Inventory](#4-component-inventory)
5. [Suggested File Structure](#5-suggested-file-structure)
6. [Implementation Notes](#6-implementation-notes)

---

## 1. Branding Options

### Option A — Dark & Stark

A bold, high-contrast identity that commands attention through near-black backgrounds, a single neon accent, and aggressive display typography.

#### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `color-bg` | `#050505` | Page background |
| `color-surface` | `#0f0f0f` | Card/panel backgrounds |
| `color-text-primary` | `#f4f4f4` | Body text, headings |
| `color-text-secondary` | `#a3a3a3` | Muted/supporting text |
| `color-text-tertiary` | `#737373` | Disabled, decorative labels |
| `color-accent` | `#ccff00` | CTA buttons, highlights, selection |
| `color-border` | `rgba(255,255,255,0.05)` | Subtle dividers |

#### Typography

| Role | Font Family | Weight | Size (desktop) | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Display / Hero H1 | `'Syne', sans-serif` | 800 (ExtraBold) | `7rem–8rem` | `0.9` | `-0.04em` (tighter) |
| Section H2 | `'Syne', sans-serif` | 700 | `3rem` | `1.1` | `-0.02em` |
| H3 / Label | `'Space Grotesk', sans-serif` | 600 | `1rem` | `1.4` | `0.1em` uppercase |
| Body | `'Space Grotesk', sans-serif` | 300 | `1.125rem` | `1.6` | `0` |
| Nav links | `'Space Grotesk', sans-serif` | 500 | `0.875rem` | `1` | `0.05em` |
| Mono / Data | `monospace` | 400 | `0.75rem` | `1.4` | `0` |

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Syne:wght@400..800&family=Space+Grotesk:wght@300..700&display=swap
```

#### Spacing Scale (base-8)

| Token | Value | Usage |
|---|---|---|
| `space-1` | `4px` | Micro gaps |
| `space-2` | `8px` | Icon gaps, tight pairs |
| `space-3` | `16px` | Component inner padding |
| `space-4` | `24px` | Small section gaps |
| `space-6` | `48px` | Nav padding, card padding |
| `space-8` | `64px` | Section vertical rhythm |
| `space-12` | `96px` | Major section breaks |

#### Visual Style Notes

- Background uses large radial gradient blur blobs (`#ccff00` at 5% opacity, white at 5% opacity) for depth without literal imagery
- Vertical hairline divider centered on page (`rgba(255,255,255,0.05)`)
- Selection highlight: `#ccff00` background with black text
- Buttons: solid rectangle (no border-radius), white fill → `#ccff00` on hover, transition 300ms
- Nav links: default `#a3a3a3` → `#f4f4f4` on hover
- Decorative coordinate/metadata label in monospace bottom-right, barely visible

---

### Option B — Soft & Airy

A refined, breathable identity that communicates quality through restraint — warm cream backgrounds, generous whitespace, and classical serif typography paired with a clean sans.

#### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `color-bg` | `#F9F8F6` | Page background |
| `color-surface` | `#F3F1EC` | Card/panel backgrounds |
| `color-text-primary` | `#2D2A26` | Body text, headings |
| `color-text-secondary` | `#5A5753` | Muted/supporting text |
| `color-accent` | `#7B856A` | Italic subtitles, arrow icon, hover underline |
| `color-divider` | `#D4D0C5` | Horizontal rules, hairlines |
| `color-selection` | `#E3E0D8` | Text selection background |
| `color-gradient-subtle` | `#EAE7DF` | Radial gradient top-right accent |

#### Typography

| Role | Font Family | Weight / Style | Size (desktop) | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Display / Hero H1 | `'Libre Baskerville', serif` | 400 (Regular) | `5rem–7rem` | `1.1` | `-0.02em` |
| Subtitle / Italic | `'Libre Baskerville', serif` | 400 Italic | `2rem–3rem` | `1.2` | `0` |
| H2 Section | `'Libre Baskerville', serif` | 700 | `2rem` | `1.2` | `-0.01em` |
| Body | `'DM Sans', sans-serif` | 300 | `1.125rem` | `1.7` | `0` |
| Nav links | `'DM Sans', sans-serif` | 400 | `0.8125rem` | `1` | `0.15em` uppercase |
| CTA link | `'DM Sans', sans-serif` | 400 | `0.875rem` | `1` | `0.15em` uppercase |

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300..400&display=swap
```

#### Spacing Scale (base-8)

Same base-8 scale as Option A, with more liberal use of `space-8` through `space-12` for breathing room between elements. The hero section uses `pb-20` (`80px`) of bottom padding.

#### Visual Style Notes

- Hero: centered layout, max-width `48rem`
- Vertical hairline divider (`1px`, `#D4D0C5`, `4rem` tall) between headline and body copy
- Entrance animation: `fade-in` + `slide-in-from-bottom` (1000ms, triggered on load)
- CTA: text link with animated underline border, arrow in accent color
- Nav links: all-caps, wide tracking, underline border on hover (500ms transition)
- Nav: constrained max-width `72rem`, centered, `10` units top padding

---

### Option C — Modern Editorial

A grid-forward, magazine-style identity with bold typographic mixing — structural sans meets expressive italic serif — in a deep navy and terracotta palette.

#### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `color-bg` | `#f8f7f5` | Page background |
| `color-text-primary` | `#0a192f` | Body text, headings, nav |
| `color-text-secondary` | `rgba(10,25,47,0.5)` | Labels, muted content |
| `color-text-body` | `rgba(10,25,47,0.8)` | Body paragraphs |
| `color-accent` | `#e07a5f` | Terracotta — italic headline, CTA border, nav underline, icon |
| `color-border` | `rgba(10,25,47,0.2)` | Nav bottom border, column divider |
| `color-border-subtle` | `rgba(10,25,47,0.1)` | List item dividers |

#### Typography

| Role | Font Family | Weight / Style | Size (desktop) | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Display Sans | `'Space Grotesk', sans-serif` | 700 | `6rem–7rem` | `0.9` | `-0.04em` uppercase |
| Display Italic | `'Playfair Display', serif` | 400 Italic | `6.5rem–7.5rem` | `0.9` | `0` normal-case |
| Display Outline | `'Space Grotesk', sans-serif` | 700 | `6rem–7rem` | `0.9` | `-0.04em` | `-webkit-text-stroke: 2px` |
| H3 / Eyebrow | `'Space Grotesk', sans-serif` | 700 | `0.625rem` | `1` | `0.15em` uppercase |
| Body | `'Space Grotesk', sans-serif` | 300 | `1.125rem` | `1.6` | `0` |
| Nav name | `'Playfair Display', serif` | 400 Italic | `1.5rem` | `1` | `0.05em` |
| Nav links | `'Space Grotesk', sans-serif` | 500 | `0.75rem` | `1` | `0.15em` uppercase |

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Space+Grotesk:wght@300..700&display=swap
```

#### Layout Grid

- Desktop: 12-column CSS grid (`grid-cols-12`)
- Main content: `col-span-8`, Right panel: `col-span-4`
- Right panel separated by left border (`rgba(10,25,47,0.2)`)
- Right panel content: status block + selected clients list + image

#### Visual Style Notes

- Nav: full-width, bottom border separator, no `max-width` constraint
- Nav left: italic serif name + terracotta divider line + terracotta discipline label (all-caps)
- Hero headline mixes three typographic treatments in one `<h1>`: bold uppercase sans, italic terracotta serif, outlined/stroke-only text
- CTA: uppercase bold link with terracotta underline → navy underline on hover
- Right panel sidebar shows "Current Status" and "Selected Clients" metadata
- Image block: navy background, `mix-blend-luminosity`, terracotta inner-border inset, zoom on hover

---

## 2. Site Map

All three branding directions share the same page structure:

```
/ (Home)
├── /work        (Projects / Selected Work)
│   └── /work/[slug]   (Project detail — optional, add later)
├── /about       (About Me)
├── /contact     (Contact)
└── /journal     (Optional — blog/writing, low priority)
```

| Route | Name | Purpose |
|---|---|---|
| `/` | Home | Hero section establishing identity; teaser of selected work |
| `/work` | Work / Index | Grid of projects with title, year, category, thumbnail |
| `/work/[slug]` | Project Detail | Case study or project deep-dive *(add in v2)* |
| `/about` | About | Bio, skills, experience, current focus |
| `/contact` | Contact | Contact form or email CTA + social links |
| `/journal` | Journal *(optional)* | Writing, notes, process posts |

---

## 3. Page-by-Page Layout Outline

---

### 3.1 Home (`/`)

**Purpose:** Make an immediate visual statement, establish the designer's identity, and direct visitors to work.

#### Sections

**A. Navigation (persistent across all pages)**
- Left: Name or initials (logo mark)
- Right: Nav links — Work, About, Contact (+ Journal if included)
- Behavior: Sticky on scroll or transparent-to-solid transition
- Mobile: Hamburger menu or slide-in drawer

**B. Hero**
- Eyebrow label: Role/discipline (e.g. "Creative Technologist", "Digital Product Designer")
- Headline: Your name or a defining statement (your choice — see branding option for typographic treatment)
- Sub-copy: 1–2 sentences on your approach or current focus (max 25 words)
- Primary CTA: "View Work" → `/work`
- Optional decorative element: background gradient, grid lines, or image (branding-dependent)

**C. Selected Work Teaser** *(optional on home, can omit if /work is 1 click away)*
- 2–3 featured projects as large tiles
- Each tile: project thumbnail, title, year, category tag
- "See all work" link → `/work`

**D. About Snippet** *(optional)*
- 2–3 sentence bio with a link to `/about`
- Profile photo (optional — your call)

**E. Footer**
- Copyright line
- Social links (GitHub, LinkedIn, Dribbble, Twitter/X — as applicable)
- Email link
- Optional: "Available for freelance" status indicator

---

### 3.2 Work (`/work`)

**Purpose:** Showcase projects in a way that communicates range, quality, and process.

#### Sections

**A. Navigation** (same as all pages)

**B. Page Header**
- Section title: "Work" or "Selected Projects" or "Index"
- Optional: project count, year range, or a one-line philosophy statement

**C. Project Grid**
- Layout: 2-column grid on desktop, 1-column on mobile
- Each project card contains:
  - `thumbnail` — image or color block (16:9 or 4:3 ratio)
  - `title` — project name
  - `year` — 4-digit year
  - `category` — tag (e.g. "Brand Identity", "Web App", "Motion")
  - `description` — 1-sentence summary (15 words max)
- Hover state: image scale or overlay reveal

**D. Footer** (same as all pages)

---

### 3.3 About (`/about`)

**Purpose:** Humanize the designer — who you are, how you think, what you're currently doing.

#### Sections

**A. Navigation**

**B. Bio Block**
- Large name or "About" heading
- 2–4 paragraph bio: origin, approach, values, current focus
- Optional: profile photo (square or portrait, full-bleed or inset)

**C. Skills / Tools** *(optional)*
- Simple list or tag cloud of tools and technologies
- Keep it brief — no long skill bars

**D. Experience / Timeline** *(optional)*
- Minimal chronological list: role, company/client, year range
- No need for full resume detail — link to PDF resume instead

**E. What I'm Doing Now** *(optional)*
- 1–2 sentences on current availability, projects, or learning focus
- "Availability" status (e.g. "Open to freelance Q4 2025")

**F. Footer**

---

### 3.4 Contact (`/contact`)

**Purpose:** Make it easy to reach you without friction.

#### Sections

**A. Navigation**

**B. Contact Block**
- Heading: "Get in Touch" or "Let's Work Together" or simply "Contact"
- Primary: Direct email link (mailto) styled as a large CTA
- Secondary: Contact form with fields: Name, Email, Message, Send button
- Form validation: required fields, email format check

**C. Social Links**
- GitHub, LinkedIn, Dribbble, Twitter/X (include only what you actively use)
- Icon + text or text-only depending on branding direction

**D. Footer**

---

### 3.5 Footer (global component)

Appears at the bottom of every page.

| Element | Content |
|---|---|
| Copyright | `© [Year] [Your Name]. All rights reserved.` |
| Nav repeat | Work · About · Contact |
| Social icons | GitHub, LinkedIn, etc. |
| Email | `hello@yourdomain.com` |
| Status *(optional)* | "Currently available for work" |

---

## 4. Component Inventory

### 4.1 Navigation (`<Nav />`)

| Prop | Type | Description |
|---|---|---|
| `currentPath` | `string` | Active route for highlighting current link |
| `scrolled` | `boolean` | Triggers solid background after scroll |

**Variants:**
- Default: transparent background on hero, solid on scroll
- Mobile: collapsed → hamburger toggle → full-screen overlay or slide drawer

**Used on:** All pages

---

### 4.2 Footer (`<Footer />`)

| Prop | Type | Description |
|---|---|---|
| `showStatus` | `boolean` | Whether to show availability status |

**Used on:** All pages

---

### 4.3 Hero (`<Hero />`)

| Prop | Type | Description |
|---|---|---|
| `headline` | `string` | Main display heading |
| `eyebrow` | `string` | Small label above headline (role/discipline) |
| `subCopy` | `string` | Supporting sentence |
| `ctaLabel` | `string` | Button/link text |
| `ctaHref` | `string` | CTA destination |

**Used on:** Home

---

### 4.4 Project Card (`<ProjectCard />`)

| Prop | Type | Description |
|---|---|---|
| `title` | `string` | Project name |
| `year` | `number` | Year completed |
| `category` | `string` | Tag label |
| `description` | `string` | One-line summary |
| `thumbnail` | `string` | Image URL or path |
| `href` | `string` | Link to project detail or external URL |

**Variants:**
- Default grid card
- Featured large card (home teaser — optional)

**Used on:** `/work`, home (teaser)

---

### 4.5 Project Grid (`<ProjectGrid />`)

| Prop | Type | Description |
|---|---|---|
| `projects` | `ProjectCard[]` | Array of project data |
| `columns` | `2 \| 3` | Number of columns (default 2) |

**Used on:** `/work`

---

### 4.6 Section Header (`<SectionHeader />`)

| Prop | Type | Description |
|---|---|---|
| `title` | `string` | Section heading |
| `subtitle` | `string \| undefined` | Optional supporting line |

**Used on:** `/work`, `/about`, `/contact`

---

### 4.7 Contact Form (`<ContactForm />`)

| Field | Type | Validation |
|---|---|---|
| Name | text input | Required |
| Email | email input | Required, valid email format |
| Message | textarea | Required, min 10 chars |
| Submit | button | Disabled until valid |

**States:** Idle → Submitting (loading) → Success → Error

**Used on:** `/contact`

---

### 4.8 Social Links (`<SocialLinks />`)

| Prop | Type | Description |
|---|---|---|
| `links` | `{ platform: string, href: string }[]` | Array of social accounts |
| `variant` | `'icon' \| 'text' \| 'icon-text'` | Display style |

**Used on:** Footer, `/contact`

---

### 4.9 Availability Badge (`<AvailabilityBadge />`)

| Prop | Type | Description |
|---|---|---|
| `status` | `'available' \| 'limited' \| 'unavailable'` | Current availability |
| `label` | `string` | Display text |

**Used on:** Footer, `/about`

---

### 4.10 Tag / Category Label (`<Tag />`)

| Prop | Type | Description |
|---|---|---|
| `label` | `string` | Category name |
| `color` | `string \| undefined` | Optional background override |

**Used on:** Project cards, skills section

---

## 5. Suggested File Structure

Structured for **React + Next.js (App Router)**, but easily adapted to plain React + React Router or Astro.

```
my-portfolio/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout — imports Nav, Footer
│   ├── page.tsx                # Home / Hero
│   ├── work/
│   │   ├── page.tsx            # /work — project grid
│   │   └── [slug]/
│   │       └── page.tsx        # /work/[slug] — project detail
│   ├── about/
│   │   └── page.tsx            # /about
│   ├── contact/
│   │   └── page.tsx            # /contact
│   └── journal/                # Optional
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   └── Hero.tsx
│   ├── work/
│   │   ├── ProjectCard.tsx
│   │   └── ProjectGrid.tsx
│   ├── about/
│   │   └── Bio.tsx
│   ├── contact/
│   │   └── ContactForm.tsx
│   └── ui/                     # Shared primitives
│       ├── SectionHeader.tsx
│       ├── Tag.tsx
│       ├── SocialLinks.tsx
│       ├── AvailabilityBadge.tsx
│       └── Button.tsx
│
├── data/
│   └── projects.ts             # Static project list (or fetch from CMS)
│
├── lib/
│   └── utils.ts                # cn(), formatDate(), etc.
│
├── public/
│   ├── images/
│   │   └── projects/           # Project thumbnails
│   └── fonts/                  # Self-hosted fonts (optional)
│
├── styles/
│   └── globals.css             # CSS custom properties (tokens), font imports
│
├── next.config.ts
├── tailwind.config.ts          # Custom colors, fonts, spacing tokens
├── tsconfig.json
└── package.json
```

### `tailwind.config.ts` — Token Setup

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Replace with your chosen option's hex values
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
      },
      fontFamily: {
        // Replace with your chosen option's fonts
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
};

export default config;
```

### `styles/globals.css` — CSS Custom Properties

Paste whichever option's values you choose here:

```css
/* ── Option A: Dark & Stark ── */
:root {
  --color-bg: #050505;
  --color-surface: #0f0f0f;
  --color-text-primary: #f4f4f4;
  --color-text-secondary: #a3a3a3;
  --color-accent: #ccff00;
  --color-border: rgba(255, 255, 255, 0.05);
  --font-display: 'Syne';
  --font-body: 'Space Grotesk';
}

/* ── Option B: Soft & Airy ── */
:root {
  --color-bg: #F9F8F6;
  --color-surface: #F3F1EC;
  --color-text-primary: #2D2A26;
  --color-text-secondary: #5A5753;
  --color-accent: #7B856A;
  --color-border: #D4D0C5;
  --font-display: 'Libre Baskerville';
  --font-body: 'DM Sans';
}

/* ── Option C: Modern Editorial ── */
:root {
  --color-bg: #f8f7f5;
  --color-surface: #eeece8;
  --color-text-primary: #0a192f;
  --color-text-secondary: rgba(10, 25, 47, 0.5);
  --color-accent: #e07a5f;
  --color-border: rgba(10, 25, 47, 0.2);
  --font-display: 'Playfair Display';
  --font-body: 'Space Grotesk';
}
```

### `data/projects.ts` — Project Data Shape

```ts
export interface Project {
  slug: string;
  title: string;
  year: number;
  category: string;
  description: string;       // 1 sentence, ≤15 words
  thumbnail: string;          // path to /public/images/projects/
  link?: string;              // External project URL (optional)
  featured?: boolean;         // Show on home page teaser
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project Title",
    year: 2025,
    category: "Brand Identity",
    description: "One-sentence description of what this project was and what it achieved.",
    thumbnail: "/images/projects/project-one.jpg",
    featured: true,
  },
  // Add more projects here
];
```

---

## 6. Implementation Notes

### Recommended Stack

| Layer | Recommended | Alternatives |
|---|---|---|
| Framework | Next.js 15 (App Router) | Astro, React + Vite |
| Styling | Tailwind CSS v4 | CSS Modules |
| Animation | Framer Motion | CSS transitions only |
| Forms | React Hook Form + Zod | Native form validation |
| Email (contact form) | Resend / Nodemailer | Formspree (no-backend option) |
| CMS (optional, v2) | Sanity / Contentlayer | MDX files |
| Hosting | Vercel | Netlify, GitHub Pages |

### Getting Started

1. `npx create-next-app@latest my-portfolio --typescript --tailwind --app`
2. Install fonts: add Google Fonts `<link>` in `app/layout.tsx` (use your chosen option)
3. Copy the CSS custom properties into `styles/globals.css`
4. Update `tailwind.config.ts` with the token mappings above
5. Create `data/projects.ts` and add your projects
6. Build components starting with `Nav`, `Footer`, then `Hero`
7. Connect GitHub repo and deploy to Vercel

### Responsive Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | `< 640px` | Single column, nav collapses |
| Tablet | `640px – 1024px` | 2-column work grid still works |
| Desktop | `> 1024px` | Full layout, 12-col grid (Option C) |

### Performance Tips

- Use `next/image` for all project thumbnails (automatic WebP, lazy-load)
- Self-host Google Fonts via `next/font` to avoid render-blocking
- Keep hero section free of heavy JS — CSS animations only
- Lazy-load the contact form component

---

*Generated by Replit Agent — May 26, 2026*
