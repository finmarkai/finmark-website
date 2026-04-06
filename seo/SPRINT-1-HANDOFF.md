# Sprint 1 — Engineering Foundation — HANDOFF

> Sprint 1 is **code-complete**. I couldn't run `npm install` from this shell (npm/node not in PATH), so the install + build verification is on you. Instructions below.

## What was built

### Dependencies (added to package.json — not yet installed)
- `vite-react-ssg@^0.8.7` — pre-renders every route to static HTML at build time
- `react-router-dom@^7.9.1` — routing
- `react-helmet-async@^2.0.5` — per-route metadata

### New scripts
- `npm run build` → runs `prebuild` (sitemap generator) then `vite-react-ssg build` → outputs static HTML for every route in `dist/`
- `npm run build:csr` → fallback CSR build using vanilla `vite build` if SSG breaks for any reason

### New files (35 total)

**Routing & entry**
- `src/main.jsx` (rewritten — exports `createRoot` from `ViteReactSSG`)
- `src/routes.jsx` (new — full route table with all 13 Phase 0 pages)
- `src/App.jsx` (refactored — `HelmetProvider` + `Outlet`, scroll-to-top on route change)

**SEO infrastructure**
- `src/lib/site.js` — site constants (`SITE_URL`, `SITE_NAME`, founders, social)
- `src/lib/schema.js` — JSON-LD generators (Organization, WebSite, WebPage, BreadcrumbList, FAQPage, Article)
- `src/components/seo/SEO.jsx` — reusable Helmet wrapper

**Reusable pillar page components**
- `src/components/seo/Breadcrumb.jsx`
- `src/components/seo/PillarHero.jsx`
- `src/components/seo/PillarSection.jsx`
- `src/components/seo/PillarHubList.jsx`
- `src/components/seo/SiblingPillarsBar.jsx`
- `src/components/seo/PillarFAQ.jsx`
- `src/components/seo/PillarCTA.jsx`

**Content config (single source of truth for all 8 pillars)**
- `src/content/pillars.js` — ~900 lines of pillar metadata, sections, cluster lists, sibling links, FAQs. Each pillar has 7-9 cluster cards, 3 sibling cross-links, 6-8 FAQ entries.

**Pages**
- `src/pages/HomePage.jsx` — wraps existing landing sections in SEO + schema
- `src/pages/AboutPage.jsx` — wraps existing About component with SEO/breadcrumb
- `src/pages/PricingPage.jsx` — new — 3 plans (Starter/Growth/Enterprise) + FAQ + schema
- `src/pages/DemoPage.jsx` — new — split-screen pitch + form (form is local-state, not wired to a backend)
- `src/pages/ContactPage.jsx` — new — form + email link
- `src/pages/PillarPage.jsx` — new — data-driven, renders any of the 8 pillars from `pillars.js`
- `src/pages/NotFoundPage.jsx` — new — 404 fallback (noindexed)

**Build infrastructure**
- `scripts/generate-sitemap.js` — generates `public/sitemap.xml` from `pillars.js` + static page list
- `public/robots.txt` — allows crawling, points to sitemap

**Updated existing components**
- `src/components/Navbar.jsx` — full rewrite: react-router `<Link>`, Platform dropdown listing all 8 pillars, mobile menu with all routes
- `src/components/Footer.jsx` — full rewrite: 4-column layout (Brand / Platform / Company / Legal), all `<Link>` routes
- `src/components/Hero.jsx` — wraps "Get Started Free" button in `<Link to="/demo">`
- `src/components/CTA.jsx` — wraps buttons in `<Link>` (one to /demo, one to /pricing)
- `src/lib/constants.js` — adds `PLATFORM_LINKS` array (used by Navbar dropdown + Footer)

## How to run it (2 commands)

```bash
cd "/Users/arinsoni/Library/Mobile Documents/com~apple~CloudDocs/Finmark/website"
npm install
npm run build
```

Then verify the dist directory:

```bash
ls dist/                              # should show: index.html + 12 pillar/static page directories
ls dist/ai-financial-automation/      # should contain index.html
ls dist/pricing/                      # should contain index.html
cat public/sitemap.xml | head -20    # should list 13 URLs
```

To preview the built site locally:

```bash
npm run preview
# Open http://localhost:4173
```

## Expected outcomes

After `npm run build` succeeds, you should have **13 pre-rendered HTML pages** in `dist/`:
- `dist/index.html` — Homepage
- `dist/about/index.html`
- `dist/pricing/index.html`
- `dist/demo/index.html`
- `dist/contact/index.html`
- `dist/ai-financial-automation/index.html`
- `dist/compliance-automation/index.html`
- `dist/ai-fraud-detection/index.html`
- `dist/payment-processing-automation/index.html`
- `dist/ai-financial-reporting/index.html`
- `dist/unified-financial-data-platform/index.html`
- `dist/predictive-financial-forecasting/index.html`
- `dist/financial-workflow-automation/index.html`

Each HTML file should contain:
- Unique `<title>` and `<meta description>`
- Canonical tag
- Open Graph tags
- Multiple `<script type="application/ld+json">` blocks (Organization + WebPage + BreadcrumbList + FAQPage)
- Fully rendered HTML body (not an empty `<div id="root"></div>`)

## Known risks (the things that might break)

I'll be honest: I could not test the build, so any of these may surface. Here's how to handle each.

### Risk 1: `vite-react-ssg` + React 19 incompatibility
**Symptom:** Build errors mentioning `renderToString`, hydration mismatches, or `useId` issues.
**Fix:**
1. Try a newer version: `npm install vite-react-ssg@latest`
2. If that fails, fall back to CSR build temporarily: `npm run build:csr`. The site will still work — it just won't be pre-rendered, which means the SEO benefit is gone until we resolve.
3. Alternative: switch to `vike` (`vike@^0.4.x`), which is a more actively maintained SSG framework. Costs ~1 hour of refactoring.

### Risk 2: `react-helmet-async` + React 19 strict mode warnings
**Symptom:** Console warnings about `useLayoutEffect` during SSR.
**Fix:** These are warnings only — they don't break the build. If they're noisy, swap `react-helmet-async` for `@unhead/react` (drop-in replacement, then update SEO.jsx imports).

### Risk 3: 3D scenes (`HeroScene`, `FloatingShapes`) error during SSG
**Symptom:** Build error mentioning `THREE`, `Canvas`, or browser globals like `window`.
**Mitigation already in place:** All 3D scenes are loaded via `React.lazy()` inside a `<Suspense fallback={null}>` wrapper. During SSG, the fallback (`null`) is rendered; the 3D scene only loads on the client after hydration.
**If it still breaks:** Add a `useHasMounted` guard to wrap the 3D imports:
```jsx
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])
if (!mounted) return null
```

### Risk 4: Lenis smooth scroll fights with route changes
**Symptom:** New page doesn't scroll to top properly on navigation.
**Mitigation already in place:** `App.jsx` has a `useEffect` that calls `window.scrollTo(0, 0)` on `location.pathname` change.

### Risk 5: Mobile menu in Navbar shows wrong height after route change
**Symptom:** Navbar mobile menu stays open after clicking a link.
**Mitigation already in place:** Every Link in the mobile menu has `onClick={() => setMobileOpen(false)}`.

### Risk 6: vite-react-ssg can't find routes export
**Symptom:** Build error like "no routes exported from main.jsx".
**Fix:** vite-react-ssg expects `main.jsx` to export `createRoot` (not the routes themselves). I've set this up correctly. If it still complains, check vite-react-ssg's docs for the version you installed — the API may have changed.

### Risk 7: Tailwind v4 + vite-react-ssg interaction
**Symptom:** CSS classes missing in pre-rendered HTML.
**Mitigation:** This should work because Tailwind v4 with the `@tailwindcss/vite` plugin processes CSS at build time, not at runtime. If classes are missing, run `npm run build:csr` and compare — if CSR has the classes, it's an SSG-specific issue.

## What's NOT in Sprint 1 (deliberately)

These are next sprints, not regressions:
- Cluster pages (`/ai-financial-automation/financial-automation-software` etc.) — Phase 1
- Solution pages (`/solutions/for-cfo` etc.) — Phase 1-2
- Blog posts — Phase 3
- Real backend wiring for the demo + contact forms — separate ticket
- Privacy / Terms pages — link in footer points to `/privacy` and `/terms` which will 404 until built (low priority)
- Image assets for Open Graph (`/og/*.png`) — currently uses default placeholder; create branded OG images later
- Google Search Console verification — happens after first deploy

## Validation checklist (after `npm run build`)

- [ ] Build completes without errors
- [ ] `dist/` contains 13 directories (one per route + index.html for homepage)
- [ ] Open `dist/ai-financial-automation/index.html` in a text editor — verify `<title>` is "AI Financial Automation Platform | FinMark.ai" and there are JSON-LD scripts in the head
- [ ] `npm run preview` works and you can navigate between pages
- [ ] Click "Platform" dropdown in navbar — verify all 8 pillar links work
- [ ] Visit `/pricing` directly in the URL bar (not via navigation) — verify it loads correctly (this confirms SSG worked)
- [ ] `public/sitemap.xml` exists and lists all 13 URLs
- [ ] Navigate to a non-existent URL like `/foo` — verify the 404 page renders

## After validation passes

1. Commit the changes
2. Deploy to your hosting (Netlify is already configured per `netlify.toml`)
3. Once live, submit `https://finmark.ai/sitemap.xml` to Google Search Console
4. Move to **Sprint 2: cluster pages** — see `seo/architecture.md` for the priority list

---

**TL;DR:** Run `npm install && npm run build`. If it works, you have 13 pre-rendered SEO-ready pages. If something breaks, the most likely culprit is vite-react-ssg + React 19 compatibility — fall back to `npm run build:csr` while we investigate.
