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

- Type: Inter (UI) + JetBrains Mono (code)
- Palette: paper `#FAFAF7`, ink `#111`, accent burnt-orange `#C2410C`
- Dark mode via `class` strategy, persisted to localStorage

## Deploy (Netlify)

1. Netlify → Add new site → Import from GitHub → pick this repo. `netlify.toml` sets the build command, publish dir, and Node version.
2. Domain management → add `harshuljain.me` and follow the DNS instructions (Netlify DNS or an `A`/`CNAME` record at your registrar). HTTPS is automatic.
3. Substack posts are fetched at build time. To keep them fresh, create a build hook (Site configuration → Build & deploy → Build hooks) and save its URL as the `NETLIFY_BUILD_HOOK` repository secret. `.github/workflows/rebuild.yml` then triggers a rebuild daily.
