# Cynthia Xin — Portfolio

Portfolio site matching the editorial, reading-first aesthetic of rachelchen.tech. Built with Next.js (App Router), TypeScript, Tailwind CSS, and MDX for case studies.

## Tech

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** (design tokens in `tailwind.config.ts`)
- **MDX** for case studies in `/content/projects/*.mdx`
- Ready to deploy on **Vercel**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
├── app/
│   ├── layout.tsx      # Root layout, fonts, metadata
│   ├── page.tsx        # Home (hero + Selected Work list)
│   ├── work/
│   │   ├── page.tsx    # Work index
│   │   └── [slug]/     # Case study (template to be expanded)
│   ├── about/page.tsx
│   └── globals.css
├── components/
│   ├── Container.tsx   # Max-width + gutter
│   ├── ReadingGrid.tsx  # 2-col (560px + 1fr) or 1-col
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectList.tsx
│   └── ProjectRow.tsx
├── content/projects/   # MDX files with frontmatter
├── lib/
│   └── projects.ts     # Load projects from MDX frontmatter
└── tailwind.config.ts  # Colors, type, spacing tokens
```

## Design tokens (Tailwind)

- **Colors:** `primary-offwhite` #FAFCFD, `font-black` #333333, `font-gray` #858E97, `primary-light-gray` #E6E9EC
- **Typography:** Display (H1–H3) via `font-display`, body `font-sans`, labels `font-mono`; sizes `text-h1` (48px), `text-h2` (32px), `text-h3` (24px), `text-body1` (16px, 1.4 line height)
- **Layout:** `max-w-reading` 1800px, `px-gutter` 24px, `px-gutter-mobile` 16px

## Fonts

- **Geist Sans** and **Geist Mono** (from `geist` package) for body and labels.
- **Display (H1–H3):** Uses `--font-martina` (default: Georgia). For exact spec match, use **Martina Plantijn**: add `.woff2` files to `public/fonts/` and switch to `next/font/local` in `app/layout.tsx`.

## Adding projects

Add an MDX file under `content/projects/` with frontmatter:

```yaml
title: "Project Title"
slug: my-project
year: "2025"
role: "Product Designer"
timeline: "2025 - 2026"
team: ""
summary: "One-line descriptor."
tags: ["Product Design", "Research"]
priority: 10   # higher = higher in list
heroImage: "/images/hero.jpg"   # optional
```

Projects are sorted by `priority` (desc), then `year` (desc). Home and `/work` both list them; each row links to `/work/[slug]`.

## Case studies (next step)

When you’re ready to build the case study template, you’ll add:

- `CaseStudyLayout` with 2-column reading grid
- MDX components: `<Figure>`, `<FullBleedFigure>`, `<Callout>`, `<Section>`
- Rendering MDX body in `/work/[slug]/page.tsx`

## Deploy (Vercel)

Connect the repo to Vercel; build command `npm run build`, output defaults. No env vars required for the current setup.
