// Generates public/sitemap.xml from the SEO content config.
//
// Run automatically as a `prebuild` step in package.json. You can also run it
// manually with `node scripts/generate-sitemap.js` whenever you add new pages.
//
// The sitemap includes:
//   - Static pages (homepage, about, pricing, demo, contact)
//   - All 8 pillar pages from src/content/pillars.js
//   - All cluster pages declared inside each pillar (when those pages exist)
//
// Update PRIORITIES below if you want to weight some pages higher.

import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { PILLARS } from '../src/content/pillars.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = resolve(__dirname, '..')

const SITE_URL = 'https://finmark.ai'

const STATIC_PAGES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/pricing', priority: 0.9, changefreq: 'monthly' },
  { path: '/demo', priority: 0.9, changefreq: 'monthly' },
  { path: '/contact', priority: 0.5, changefreq: 'monthly' },
]

const PILLAR_PAGES = PILLARS.map((p) => ({
  path: `/${p.slug}`,
  priority: 0.9,
  changefreq: 'weekly',
}))

// Cluster pages are declared inside each pillar but only get added to the
// sitemap once you've actually built ClusterPage.jsx in a future sprint.
// Until then, leaving them out keeps Google from getting 404s.
const INCLUDE_CLUSTERS = false
const CLUSTER_PAGES = INCLUDE_CLUSTERS
  ? PILLARS.flatMap((p) =>
      (p.clusters || []).map((c) => ({
        path: `/${p.slug}/${c.slug}`,
        priority: 0.7,
        changefreq: 'monthly',
      }))
    )
  : []

const urls = [...STATIC_PAGES, ...PILLAR_PAGES, ...CLUSTER_PAGES]

const today = new Date().toISOString().split('T')[0]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const publicDir = resolve(ROOT, 'public')
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true })
}

const outPath = resolve(publicDir, 'sitemap.xml')
writeFileSync(outPath, xml, 'utf-8')

console.log(`✓ Generated sitemap with ${urls.length} URLs → ${outPath}`)
