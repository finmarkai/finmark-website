# FinMark.ai — SEO Implementation Guide (React + Vite)

> **Goal:** Turn the single-page React app into a multi-page, crawlable, SEO-optimized site that can support the 137-page topical authority architecture.

## Current state vs. target state

| Aspect | Current | Target |
|---|---|---|
| Routing | None (single page) | React Router with 137 routes |
| Rendering | CSR (client-side) | Pre-rendered or SSG (Static Site Generation) |
| URLs | 1 (`/`) with anchors | 137 distinct, indexable URLs |
| `<title>` | Static | Per-route, dynamic |
| Meta description | Static | Per-route, dynamic |
| Open Graph | None | Per-route |
| JSON-LD schema | None | Organization (homepage), Article (blogs), FAQPage (clusters), BreadcrumbList (everywhere) |
| Sitemap | None | Generated `sitemap.xml` |
| robots.txt | None | Present |
| Canonical tags | None | Per-route |

---

## Critical decision: Rendering strategy

You have three options. **Pick one before writing any code.**

### Option A — Add React Router only (CSR)
- ✅ Simplest, just `npm install react-router-dom`
- ❌ **DEAL-BREAKER**: Google sees a blank `<div id="root"></div>` and your meta tags don't change per route
- ❌ Indexing is unreliable; competitive SEO becomes very hard
- **Verdict: Don't do this for an SEO project.**

### Option B — Vite SSG (vite-plugin-ssr / vike, or vite-react-ssg)
- ✅ Pre-renders every route at build time → Google gets fully-rendered HTML
- ✅ Stays in your existing Vite tooling
- ✅ Best for static content (which is exactly what SEO pages are)
- ⚠️ Setup complexity: medium
- **Verdict: Recommended for FinMark.ai.**

### Option C — Migrate to Next.js
- ✅ Best-in-class SEO/SSR/SSG
- ✅ App Router, Server Components, automatic image optimization
- ❌ Full migration — rewrites the build pipeline
- ❌ Loses Vite-specific config (Tailwind v4 plugin, etc.)
- **Verdict: Only if you're comfortable rebuilding the toolchain. Long-term it's the strongest option.**

**My recommendation: Option B (Vite SSG) for now**, with Option C as a Phase 4 migration if traffic justifies it.

---

## Step 1 — Add Vite SSG

Install:

```bash
npm install vite-react-ssg react-router-dom react-helmet-async
```

> `vite-react-ssg` is a thin SSG wrapper around React Router. It pre-renders every defined route into static HTML at build time.

Update `package.json` scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite-react-ssg build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

Update `src/main.jsx`:

```jsx
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './index.css'

export const createRoot = ViteReactSSG({ routes })
```

Create `src/routes.jsx`:

```jsx
import App from './App'
import HomePage from './pages/HomePage'
// Pillars
import AIFinancialAutomation from './pages/pillars/AIFinancialAutomation'
import ComplianceAutomation from './pages/pillars/ComplianceAutomation'
// ... import all 8 pillars

// Clusters (these will be generated programmatically — see Step 4)
import * as clusters from './pages/clusters'

// Solutions
import ForCFO from './pages/solutions/ForCFO'
// ...

// Blog
import BlogIndex from './pages/blog/BlogIndex'
import BlogPost from './pages/blog/BlogPost'

// Static
import About from './pages/About'
import Pricing from './pages/Pricing'
import Demo from './pages/Demo'
import Contact from './pages/Contact'

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },

      // Pillar routes
      { path: 'ai-financial-automation', element: <AIFinancialAutomation /> },
      { path: 'compliance-automation', element: <ComplianceAutomation /> },
      // ... 6 more pillars

      // Cluster routes (one per cluster keyword)
      // Generated from a content config — see Step 4

      // Solutions
      { path: 'solutions/for-cfo', element: <ForCFO /> },
      // ...

      // Blog
      { path: 'blog', element: <BlogIndex /> },
      { path: 'blog/:slug', element: <BlogPost /> },

      // Static
      { path: 'about', element: <About /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'demo', element: <Demo /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]
```

---

## Step 2 — Per-route metadata with `react-helmet-async`

Wrap your app:

```jsx
// src/App.jsx
import { HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <HelmetProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </HelmetProvider>
  )
}
```

Use `<Helmet>` in every page component:

```jsx
// src/pages/pillars/AIFinancialAutomation.jsx
import { Helmet } from 'react-helmet-async'

export default function AIFinancialAutomation() {
  return (
    <>
      <Helmet>
        <title>AI Financial Automation Platform | FinMark.ai</title>
        <meta name="description" content="FinMark.ai is the AI financial automation platform for modern finance teams. Automate compliance, forecasting, reporting, and fraud detection in one unified system." />
        <link rel="canonical" href="https://finmark.ai/ai-financial-automation" />
        {/* Open Graph */}
        <meta property="og:title" content="AI Financial Automation Platform | FinMark.ai" />
        <meta property="og:description" content="The AI financial automation platform for modern finance teams." />
        <meta property="og:url" content="https://finmark.ai/ai-financial-automation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://finmark.ai/og/ai-financial-automation.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI Financial Automation Platform",
            "url": "https://finmark.ai/ai-financial-automation",
            "isPartOf": { "@id": "https://finmark.ai/#website" },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://finmark.ai/" },
                { "@type": "ListItem", "position": 2, "name": "AI Financial Automation", "item": "https://finmark.ai/ai-financial-automation" }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* Page content */}
      <PillarHero />
      <CoreCapabilities />
      <ClusterHubList />
      <FAQ />
      <CTA />
    </>
  )
}
```

---

## Step 3 — Build a reusable `<SEO>` component

Don't repeat the Helmet boilerplate 137 times. Create:

```jsx
// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://finmark.ai'

export default function SEO({
  title,
  description,
  path,
  image = '/og/default.png',
  type = 'website',
  schema = null,
  noindex = false,
}) {
  const fullUrl = `${SITE_URL}${path}`
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="FinMark.ai" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
```

Then in any page:

```jsx
import SEO from '../components/SEO'
import { breadcrumbSchema } from '../lib/schema'

export default function AIFinancialAutomation() {
  return (
    <>
      <SEO
        title="AI Financial Automation Platform | FinMark.ai"
        description="The AI financial automation platform for modern finance teams. Automate compliance, forecasting, reporting, and fraud detection."
        path="/ai-financial-automation"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'AI Financial Automation', path: '/ai-financial-automation' },
        ])}
      />
      {/* page content */}
    </>
  )
}
```

---

## Step 4 — Content as data (don't hand-write 137 page components)

Build cluster pages from a single JSON/JS config. This is the only sane way to manage 137 pages.

Create `src/content/clusters.js`:

```js
export const CLUSTERS = [
  {
    pillar: 'ai-financial-automation',
    slug: 'financial-automation-software',
    title: 'Financial Automation Software',
    primaryKeyword: 'financial automation software',
    metaTitle: 'Financial Automation Software for Modern Finance Teams | FinMark.ai',
    metaDescription: 'Compare the best financial automation software. See how FinMark.ai...',
    h1: 'Financial Automation Software That Actually Scales',
    intro: '...',
    sections: [
      { heading: '...', body: '...' },
      // ...
    ],
    relatedClusters: [
      'ai-financial-automation/ai-for-finance',
      'ai-financial-automation/ai-finance-platform',
    ],
    crossPillarLink: {
      pillar: 'compliance-automation',
      anchor: 'compliance automation',
    },
    relatedBlogPosts: [
      'best-ai-financial-automation-tools',
    ],
    faq: [
      { q: 'What is financial automation software?', a: '...' },
      // ...
    ],
  },
  // 72 more clusters
]
```

Create `src/pages/ClusterPage.jsx` (one component, parameterized):

```jsx
import { useParams } from 'react-router-dom'
import { CLUSTERS } from '../content/clusters'
import SEO from '../components/SEO'
import { clusterSchema, faqSchema, breadcrumbSchema } from '../lib/schema'
import { PILLARS } from '../content/pillars'

export default function ClusterPage() {
  const { pillar, cluster } = useParams()
  const data = CLUSTERS.find(c => c.pillar === pillar && c.slug === cluster)
  if (!data) return <NotFound />

  const pillarData = PILLARS.find(p => p.slug === pillar)
  const path = `/${pillar}/${cluster}`

  return (
    <>
      <SEO
        title={data.metaTitle}
        description={data.metaDescription}
        path={path}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: pillarData.title, path: `/${pillar}` },
            { name: data.title, path },
          ]),
          faqSchema(data.faq),
        ]}
      />

      <Breadcrumb items={[
        { name: 'Home', href: '/' },
        { name: pillarData.title, href: `/${pillar}` },
        { name: data.title },
      ]} />

      <h1>{data.h1}</h1>
      <ClusterIntro
        body={data.intro}
        pillarLink={{ href: `/${pillar}`, anchor: pillarData.primaryKeyword }}
      />

      {data.sections.map((s, i) => (
        <Section key={i} heading={s.heading} body={s.body} />
      ))}

      <RelatedClusters clusters={data.relatedClusters} />
      <CrossPillarCTA link={data.crossPillarLink} />
      <FAQ items={data.faq} />
      <ConclusionWithPillarLink pillar={pillarData} />
      <RelatedBlogPosts posts={data.relatedBlogPosts} />
    </>
  )
}
```

Add the dynamic route in `routes.jsx`:

```jsx
{ path: ':pillar/:cluster', element: <ClusterPage /> },
```

For SSG pre-rendering, `vite-react-ssg` needs to know the static paths. Add a `getStaticPaths` export to `ClusterPage.jsx`:

```jsx
export async function entry() {
  const { CLUSTERS } = await import('../content/clusters')
  return CLUSTERS.map(c => `/${c.pillar}/${c.slug}`)
}
```

Now `vite-react-ssg build` will generate one HTML file per cluster. **One component, 73 pre-rendered HTML pages.**

Do the same for blog posts.

---

## Step 5 — Sitemap.xml generation

Add a build script `scripts/generate-sitemap.js`:

```js
import { writeFileSync } from 'node:fs'
import { CLUSTERS } from '../src/content/clusters.js'
import { PILLARS } from '../src/content/pillars.js'
import { BLOG_POSTS } from '../src/content/blog.js'
import { SOLUTIONS } from '../src/content/solutions.js'

const SITE_URL = 'https://finmark.ai'

const STATIC_PAGES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/pricing', priority: 0.9, changefreq: 'monthly' },
  { path: '/demo', priority: 0.9, changefreq: 'monthly' },
  { path: '/contact', priority: 0.5, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
]

const urls = [
  ...STATIC_PAGES,
  ...PILLARS.map(p => ({ path: `/${p.slug}`, priority: 0.9, changefreq: 'weekly' })),
  ...CLUSTERS.map(c => ({ path: `/${c.pillar}/${c.slug}`, priority: 0.7, changefreq: 'monthly' })),
  ...SOLUTIONS.map(s => ({ path: `/solutions/${s.slug}`, priority: 0.7, changefreq: 'monthly' })),
  ...BLOG_POSTS.map(b => ({ path: `/blog/${b.slug}`, priority: 0.6, changefreq: 'monthly', lastmod: b.publishedAt })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${SITE_URL}${u.path}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`

writeFileSync('public/sitemap.xml', xml)
console.log(`Generated sitemap with ${urls.length} URLs`)
```

Add to `package.json`:

```json
{
  "scripts": {
    "build": "node scripts/generate-sitemap.js && vite-react-ssg build"
  }
}
```

---

## Step 6 — robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://finmark.ai/sitemap.xml
```

---

## Step 7 — Schema helpers

Create `src/lib/schema.js`:

```js
const SITE_URL = 'https://finmark.ai'

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": "FinMark.ai",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo-full.png`,
    "sameAs": [
      "https://twitter.com/finmark_ai",
      "https://linkedin.com/company/finmark-ai",
    ],
    "founder": [
      { "@type": "Person", "name": "Arin Soni" },
      { "@type": "Person", "name": "Aditi Agarwal" },
    ],
  }
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.path}`,
    })),
  }
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  }
}

export function articleSchema({ title, description, path, publishedAt, updatedAt, author, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `${SITE_URL}${image}`,
    "datePublished": publishedAt,
    "dateModified": updatedAt || publishedAt,
    "author": { "@type": "Person", "name": author },
    "publisher": { "@type": "Organization", "name": "FinMark.ai", "logo": `${SITE_URL}/logo-full.png` },
    "mainEntityOfPage": `${SITE_URL}${path}`,
  }
}
```

---

## Step 8 — Internal linking helpers

Create `src/components/seo/InternalLink.jsx`:

```jsx
import { Link } from 'react-router-dom'

/**
 * SEO-aware internal link.
 * - Tracks anchor text variations (helpful for diversity audits)
 * - Always uses descriptive anchors (the Link component itself does nothing fancy,
 *   but having a wrapper lets you instrument it later)
 */
export default function InternalLink({ to, children, ...rest }) {
  return <Link to={to} {...rest}>{children}</Link>
}
```

Create `src/components/seo/PillarHubList.jsx`:

```jsx
import InternalLink from './InternalLink'

/**
 * The "Explore [topic]" hub block on every pillar page.
 * Lists all clusters with their primary keyword as anchor text.
 */
export default function PillarHubList({ pillarSlug, pillarTitle, clusters }) {
  return (
    <section className="pillar-hub-list">
      <h2>Explore {pillarTitle}</h2>
      <div className="cluster-grid">
        {clusters.map(c => (
          <InternalLink key={c.slug} to={`/${pillarSlug}/${c.slug}`}>
            <article>
              <h3>{c.title}</h3>
              <p>{c.shortDescription}</p>
            </article>
          </InternalLink>
        ))}
      </div>
    </section>
  )
}
```

Create `src/components/seo/Breadcrumb.jsx`:

```jsx
import InternalLink from './InternalLink'

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol>
        {items.map((item, i) => (
          <li key={i}>
            {item.href ? (
              <InternalLink to={item.href}>{item.name}</InternalLink>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
            {i < items.length - 1 && <span> / </span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

---

## Step 9 — File structure

After implementation, your `src/` should look like:

```
src/
├── App.jsx                       (HelmetProvider + layout)
├── main.jsx                      (vite-react-ssg entry)
├── routes.jsx                    (all route definitions)
│
├── pages/
│   ├── HomePage.jsx
│   ├── About.jsx
│   ├── Pricing.jsx
│   ├── Demo.jsx
│   ├── Contact.jsx
│   ├── pillars/
│   │   ├── AIFinancialAutomation.jsx
│   │   ├── ComplianceAutomation.jsx
│   │   └── ... (8 total)
│   ├── ClusterPage.jsx           (1 component, 73 routes)
│   ├── solutions/
│   │   ├── ForCFO.jsx
│   │   └── ...
│   └── blog/
│       ├── BlogIndex.jsx
│       └── BlogPost.jsx           (1 component, 39 routes)
│
├── content/                      (data, NOT components)
│   ├── pillars.js
│   ├── clusters.js
│   ├── blog.js
│   └── solutions.js
│
├── components/
│   ├── seo/
│   │   ├── SEO.jsx
│   │   ├── InternalLink.jsx
│   │   ├── Breadcrumb.jsx
│   │   ├── PillarHubList.jsx
│   │   └── RelatedPosts.jsx
│   ├── (existing components: Hero, Features, etc.)
│   └── ui/
│
├── lib/
│   ├── schema.js                 (JSON-LD generators)
│   └── (existing libs)
│
└── index.css

scripts/
└── generate-sitemap.js

public/
├── robots.txt
├── sitemap.xml                   (generated at build time)
└── og/                           (Open Graph images per page)
```

---

## Step 10 — Phased rollout

You don't ship 137 pages on day one. Follow this sequence:

### Sprint 1 (Week 1) — Foundation
- [ ] Install vite-react-ssg, react-router-dom, react-helmet-async
- [ ] Create `routes.jsx`, refactor `App.jsx` to use `<Outlet />`
- [ ] Move existing landing page sections into `HomePage.jsx`
- [ ] Build `<SEO>` component + schema helpers
- [ ] Create `robots.txt`, sitemap generator script
- [ ] Verify the existing site still works at `/`

### Sprint 2 (Week 2) — 8 pillar pages + static pages
- [ ] Build `<PillarHero>`, `<PillarHubList>`, `<FAQ>` components (reusable)
- [ ] Write content for all 8 pillar pages
- [ ] Build `/about`, `/pricing`, `/demo`, `/contact`
- [ ] Update top nav with full pillar dropdown
- [ ] Verify sitemap includes all 8 pillars + static pages
- [ ] Submit sitemap to Google Search Console

### Sprint 3 (Week 3) — Content infrastructure
- [ ] Build `ClusterPage.jsx` + `clusters.js` content config
- [ ] Build `BlogPost.jsx` + `blog.js` content config
- [ ] Build `<Breadcrumb>`, `<RelatedClusters>`, `<RelatedPosts>`
- [ ] Verify dynamic routes pre-render correctly with `npm run build`

### Sprint 4–6 (Weeks 4–6) — Cluster content (P0 priority)
- [ ] Write 24 P0 cluster pages (~4 per pillar × 8 pillars × 0.75 avg priority = 24)
- [ ] Verify internal links match the linking matrix
- [ ] Submit updated sitemap

### Sprint 7+ (Weeks 7+) — Phase 2/3/4 from architecture.md
Ship 4–6 new pages per week. Don't compress.

---

## Validation checklist (run before each deploy)

```bash
# Build the site
npm run build

# Verify all routes pre-rendered
ls dist/

# You should see directories like:
# dist/ai-financial-automation/index.html
# dist/ai-financial-automation/financial-automation-software/index.html
# dist/blog/best-ai-financial-automation-tools/index.html
```

Crawl the built site locally to verify SEO basics:

```bash
npx serve dist
# Then run Screaming Frog or Sitebulb against http://localhost:3000
```

Check:
- [ ] Every URL returns 200
- [ ] Every page has a unique `<title>` and `<meta description>`
- [ ] Every page has a canonical tag
- [ ] No duplicate H1s across pages
- [ ] Sitemap includes all pages
- [ ] No orphan pages (every page is internally linked from at least 1 other page)
- [ ] No broken internal links

---

## Common pitfalls

| Pitfall | Fix |
|---|---|
| Routes work in dev but pre-rendered HTML is empty | Verify `entry()` function exports static paths in dynamic route components |
| Helmet tags missing in pre-rendered HTML | Use `react-helmet-async`, NOT `react-helmet`; ensure `HelmetProvider` wraps everything |
| Duplicate canonical tags | Only set canonical in `<SEO>` component, never in nested components |
| Sitemap missing routes | Re-run `node scripts/generate-sitemap.js` after every content change; consider adding to `prebuild` |
| Google indexes the JS bundle | Make sure `index.html` doesn't redirect to a JS shell — pre-rendering must produce real HTML per route |
| Slow First Contentful Paint | Pre-render is static HTML; FCP should be excellent. If it's not, audit your CSS/JS bundle size |

---

## What to measure (post-launch)

**Week 1 after launch:**
- Submit sitemap to Google Search Console
- Verify Google has indexed at least the 8 pillars + homepage (`site:finmark.ai`)
- Verify no crawl errors in GSC

**Month 1:**
- Track impressions per pillar URL in GSC (target: each pillar earning impressions for its primary keyword by week 4)
- Monitor average position improvements

**Month 3:**
- Pillars should be ranking in the top 50 for their primary keyword
- Clusters should be earning long-tail impressions
- First backlinks should appear (track with Ahrefs)

**Month 6:**
- Pillars top 20 for primary keywords
- Total organic traffic 5–10× from baseline (if baseline is near zero, this is easy)

**Month 12:**
- Pillars top 10 for primary keywords
- Topical authority established
- Cluster pages earning featured snippets for FAQ schema

---

## TL;DR — what to do tomorrow

1. `npm install vite-react-ssg react-router-dom react-helmet-async`
2. Create `src/routes.jsx` and move existing landing page into `src/pages/HomePage.jsx`
3. Build the `<SEO>` component
4. Build the `/ai-financial-automation` pillar page using the architecture in `architecture.md`
5. Verify it pre-renders to static HTML with `npm run build`
6. Iterate.
