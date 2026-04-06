---
type: checklist
phase: 0
---

# ✅ Phase 0 Checklist

> Ship these 13 pages before any cluster work begins.

## Engineering setup

- [ ] Install dependencies: `vite-react-ssg`, `react-router-dom`, `react-helmet-async`
- [ ] Refactor `App.jsx` to wrap with `<HelmetProvider>` and use `<Outlet />`
- [ ] Create `src/routes.jsx` with all Phase 0 routes
- [ ] Create `src/main.jsx` with `ViteReactSSG`
- [ ] Build `src/components/seo/SEO.jsx`
- [ ] Build `src/lib/schema.js` (Organization, Breadcrumb, FAQ generators)
- [ ] Build `src/components/seo/Breadcrumb.jsx`
- [ ] Build `src/components/seo/PillarHubList.jsx`
- [ ] Update `package.json` build script
- [ ] Update top nav with full pillar dropdown
- [ ] Create `public/robots.txt`
- [ ] Create `scripts/generate-sitemap.js`
- [ ] Add `prebuild` script to regenerate sitemap automatically

## Page builds (13 pages)

### Pillar pages (8)
- [ ] [[01 - Pillars/P1 - AI Financial Automation]]
- [ ] [[01 - Pillars/P2 - Compliance Automation]]
- [ ] [[01 - Pillars/P3 - AI Fraud Detection]]
- [ ] [[01 - Pillars/P4 - Payment Processing Automation]]
- [ ] [[01 - Pillars/P5 - AI Financial Reporting]]
- [ ] [[01 - Pillars/P6 - Unified Financial Data Platform]]
- [ ] [[01 - Pillars/P7 - Predictive Financial Forecasting]]
- [ ] [[01 - Pillars/P8 - Workflow Automation]]

### Static pages (5)
- [ ] Homepage refactor (move existing landing into `HomePage.jsx`)
- [ ] `/about` (already partially built — add structured data + linking)
- [ ] `/pricing` (NEW — required for `finmark ai pricing` brand query)
- [ ] `/demo` (NEW — primary CTA destination)
- [ ] `/contact` (NEW)

## Per-page validation

For each pillar page, verify:

- [ ] Unique `<title>` ≤60 chars
- [ ] Unique `<meta description>` ≤160 chars
- [ ] Canonical tag set
- [ ] H1 contains primary keyword
- [ ] Word count ≥2,500
- [ ] FAQ section with 5+ questions
- [ ] FAQPage JSON-LD schema
- [ ] BreadcrumbList JSON-LD schema
- [ ] Cluster hub list section (even if cluster pages aren't built yet — they'll 404 until Phase 1)
- [ ] Links to 3 sibling pillars (contextually)
- [ ] Linked from homepage
- [ ] Linked from top nav

## Post-launch validation

- [ ] `npm run build` produces 13 HTML files in `dist/`
- [ ] Open each HTML file in a browser, view source — verify `<title>`, meta, JSON-LD all present
- [ ] Crawl with Screaming Frog → 0 errors, 0 broken links, 13 indexable pages
- [ ] Submit `https://finmark.ai/sitemap.xml` to Google Search Console
- [ ] Verify Google has indexed at least the homepage and 1 pillar within 7 days
- [ ] Set up GSC weekly email alerts for indexing errors

## Success criteria

Phase 0 is **complete** when:
- All 13 pages are live and indexable
- All pages pass Lighthouse SEO score ≥95
- Google Search Console shows zero indexing errors
- Sitemap submitted and processed

Phase 0 is NOT complete if any of:
- Pre-rendered HTML is missing meta tags
- Any page returns 404 from a sitemap URL
- Any page has the same `<title>` as another page
- Any page has fewer than 1,500 words (pillar pages should aim for 2,500+)
