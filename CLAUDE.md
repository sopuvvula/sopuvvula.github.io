# CLAUDE.md

## Project Overview
Personal portfolio website for Mohan Dasari, a Software Engineer. Built with Astro and deployed to GitHub Pages at sopuvvula.github.io. Single-page design with a minimal, clean aesthetic.

## Tech Stack
- **Framework:** Astro 5.x (static site generator)
- **Styling:** Plain CSS (no Tailwind, no CSS frameworks)
- **Language:** TypeScript (strict mode)
- **Package manager:** npm (use package-lock.json)
- **Deployment:** GitHub Pages via GitHub Actions

## Architecture
- `src/layouts/` — Base page layouts (HTML shell, head, nav, footer)
- `src/pages/` — Astro pages (routes). Currently just `index.astro`
- `src/components/` — Reusable Astro components (Hero, About, Skills, etc.)
- `src/styles/` — Global CSS files
- `public/` — Static assets (images, favicon, etc.)

## Code Conventions
- **Naming:** PascalCase for components (`Hero.astro`), kebab-case for CSS files (`global.css`)
- **Styling:** Use scoped `<style>` blocks in Astro components. Global styles go in `src/styles/global.css`
- **No JavaScript shipped to client** unless absolutely necessary. Astro's zero-JS default is intentional
- **Semantic HTML** — use proper heading hierarchy, landmarks, ARIA labels
- **Mobile-first** — write base styles for mobile, use min-width media queries for larger screens

## Commands
- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Preview build:** `npm run preview`

## Rules (Non-negotiable)
- Never ship client-side JavaScript unless a feature absolutely requires it
- All images must have alt text
- Keep the site accessible (WCAG 2.1 AA)
- Never commit node_modules/ or .env files
- Run `npm run build` to verify changes compile before committing
- Maintain the minimal, clean design aesthetic — no clutter, no unnecessary decorations

## Workflow
1. Read relevant code before changing it
2. Make minimal, focused changes
3. Verify build passes after changes
4. Keep components small and single-purpose
