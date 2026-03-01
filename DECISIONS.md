# Decisions

## 2026-03-01: Use Astro over React or plain HTML
**Context:** Needed to choose a tech stack for portfolio site on GitHub Pages.
**Decision:** Astro — ships zero JS by default, component-based DX, excellent static site performance. React was overkill (SPA for a static portfolio). Plain HTML lacked component reuse.
**Don't revisit unless:** Need significant client-side interactivity (unlikely for a portfolio).

## 2026-03-01: Plain CSS over Tailwind or CSS frameworks
**Context:** Needed a styling approach.
**Decision:** Plain CSS with scoped styles in Astro components. Keeps the project simple, no extra dependencies, full control over the minimal aesthetic.
**Don't revisit unless:** Site grows to 10+ pages and style consistency becomes hard to maintain.

## 2026-03-01: Single-page design over multi-page
**Context:** Portfolio could be one scrolling page or multiple routes.
**Decision:** Single page with anchor-link navigation. All content fits naturally on one page, reduces navigation friction, simpler to maintain.
**Don't revisit unless:** Adding a blog or other content-heavy sections that warrant separate pages.
