---
type: checklist
phase: 0
last_updated: 2026-04-07
status: complete
---

# ✅ Phase 0 Checklist (COMPLETE)

> Engineering foundation is done. This file is preserved as historical reference. For current state see [[Phasing & Rollout]].

## Engineering setup ✅

- [x] Install dependencies: `vite-react-ssg`, `react-router-dom`, `react-helmet-async` (later removed in favor of vite-react-ssg's `<Head>`)
- [x] Refactor `App.jsx` to use `<Outlet />`
- [x] Create `src/routes.jsx` with all routes
- [x] Create `src/main.jsx` with `ViteReactSSG`
- [x] Build `src/components/seo/SEO.jsx` (using vite-react-ssg `<Head>`)
- [x] Build `src/lib/schema.js` (Organization, Breadcrumb, FAQ, WebPage generators)
- [x] Build `src/components/seo/Breadcrumb.jsx`
- [x] Build `src/components/seo/PillarHubList.jsx`
- [x] Update `package.json` build script
- [x] Update top nav with route-based Links
- [x] Create `public/robots.txt`
- [x] Create `scripts/generate-sitemap.js`
- [x] Add `prebuild` script to regenerate sitemap automatically

## Page builds ✅

### Single AP pillar
- [x] [[Accounts Payable Automation]] — published, live on production

### Static pages
- [x] Homepage — refactored with AP-focused copy
- [x] `/about` — preserved, founder bios intact
- [x] `/pricing` — built with 3 plans + FAQ schema
- [x] `/demo` — built with form (TODO: wire to real backend)
- [x] `/contact` — built with form (TODO: wire to real backend)

## Build infrastructure ✅

- [x] vite-react-ssg pre-rendering working
- [x] sitemap.xml generated automatically on every build
- [x] robots.txt deployed
- [x] Per-route metadata via `<Head>` component
- [x] JSON-LD schema (Organization, WebPage, BreadcrumbList, FAQPage)
- [x] Open Graph + Twitter Card metadata
- [x] Canonical tags
- [x] _redirects file with 301s for old URLs

## Deployment ✅

- [x] Committed to git
- [x] Pushed to origin/main
- [x] Netlify auto-deploy working
- [x] `https://finmark.ai/robots.txt` confirmed live
- [x] All 16 pages pre-rendered to static HTML

## What's NOT in Phase 0 (intentional)

- Cluster page content (Phase 1, then refocused multiple times)
- Real product specifics (Phase 4)
- Vault sync (Phase 5 — current)
- Google Search Console submission (Phase 6 — pending)
- First rankings (Phase 7 — pending)

## Linked notes
- [[Map of Content]]
- [[Phasing & Rollout]]
- [[SEO Strategy]]
