# FinMark.ai — SEO Plan

This folder contains the complete SEO plan for FinMark.ai. Read these in order:

| # | File | What's in it |
|---|---|---|
| 1 | [`keywords.md`](./keywords.md) | 135 keywords organized into 8 pillars + Solutions + Brand. Human-readable. |
| 2 | [`keywords.csv`](./keywords.csv) | Same data, machine-readable. Import into Sheets/Notion/Airtable. |
| 3 | [`architecture.md`](./architecture.md) | The pillar/cluster site architecture. URL structure, page briefs, phasing. |
| 4 | [`internal-linking-plan.md`](./internal-linking-plan.md) | Page-to-page linking matrix, anchor text rules, equity flow. |
| 5 | [`implementation-guide.md`](./implementation-guide.md) | Step-by-step React + Vite implementation. Code samples. |

## Companion: Obsidian Vault

The `/seo-vault/` folder is an Obsidian vault of the same plan, but designed for visual exploration. Open it in Obsidian to see:
- Graph view of pillar/cluster/blog relationships
- Canvas view of the topical authority map
- Wiki-linked notes per pillar/cluster with full briefs
- Templates for adding new pages

**To open:** Obsidian → Open Folder as Vault → select `website/seo-vault/`

## TL;DR

> FinMark.ai is currently a single-page React app. To rank in Google for competitive financial automation keywords, the site needs to expand into ~137 distinct URLs organized into 8 topical pillars, each with cluster pages and supporting blog content. Build the pillars first, then the clusters, then the blog. Link bottom-up (cluster → pillar) to concentrate equity on the highest-value pages.

## Current state (audited)

- **Routing:** None. All content lives at `/`
- **Title tag:** "FinMark.ai — AI-Powered Financial Automation"
- **Meta description:** Generic
- **Sitemap:** Missing
- **robots.txt:** Missing
- **Structured data:** Missing
- **Open Graph:** Missing

## Target state

- 137 distinct, indexable URLs
- 8 pillar pages, 73 cluster pages, 39 blog posts, 9 solution pages, 7 static pages
- Per-route metadata, canonical tags, JSON-LD schema
- Auto-generated `sitemap.xml` and `robots.txt`
- Pre-rendered static HTML via `vite-react-ssg` (no SSR overhead)
- Internal linking matrix enforcing equity flow upward to pillars

## Phasing (don't ship 137 pages at once)

| Phase | Pages | Goal |
|---|---|---|
| 0 | 8 pillars + homepage + about + pricing + demo + contact | Establish hub structure |
| 1 | All P0 cluster pages (~24) + 2 persona pages | Begin earning rankings |
| 2 | All P1 cluster pages (~30) + remaining persona/industry | Expand surface area |
| 3 | All P2 cluster pages + 20 supporting blogs | Build long-tail equity |
| 4 | Remaining blogs + comparisons + alternatives | Saturate the topical space |
