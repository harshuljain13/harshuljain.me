# harshuljain.me

Personal site. Astro + Tailwind + Substack RSS at build time.

## Run

```bash
npm install
npm run dev     # http://127.0.0.1:4321
npm run build
```

## Structure

- `src/pages/index.astro` — single landing page, 9 sections
- `src/data/content.ts` — talks, papers, projects, bio
- `src/lib/substack.ts` — RSS pull from harshuljain.substack.com at build time
- `src/layouts/BaseLayout.astro` — fonts, theme toggle
- `src/styles/global.css` — design tokens, marquee, fade-up

## Design

- Type: Fraunces (display) + Inter (UI) + JetBrains Mono (code)
- Palette: paper `#FAFAF7`, ink `#111`, accent burnt-orange `#C2410C`
- Dark mode via `class` strategy, persisted to localStorage

## Deploy

Vercel or Netlify. Point `harshuljain.me` DNS at the deploy.
