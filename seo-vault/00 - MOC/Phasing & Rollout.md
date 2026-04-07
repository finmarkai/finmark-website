---
type: strategy
last_updated: 2026-04-07
---

# 📅 Phasing & Rollout

> What got built, in what order, and what's next.

## Where we are today

**Phase 5: Vault sync** — currently in progress. Real product content is shipped on the website (Phase 4 done). The vault is being updated to match.

## Phase history

### Phase 0 — Engineering Foundation ✅ Complete
**Goal:** Convert the single-page React landing into a multi-page, SSG-rendered, SEO-ready architecture.
**Pages:** 13 (homepage refactor + 8 fake pillars + 4 static)
**Outcome:** vite-react-ssg working, sitemap.xml, robots.txt, per-route metadata, JSON-LD schema. Engineering infrastructure is reusable for everything since.

### Phase 1 — Multi-Pillar Cluster Pages ✅ Complete then deleted
**Goal:** Build out cluster depth across the 8 fake pillars to demonstrate topical authority.
**Pages:** 14 cluster pages
**Outcome:** Built and deployed. Site reached 27 pages.
**Why deleted:** The 8 pillars were aspirational. FinMark.ai only builds AP automation. The multi-pillar structure was misleading and strategically wrong.

### Phase 3 — First Refocus to AP-Only ✅ Complete
**Goal:** Drop the 7 fake pillars and consolidate around accounts-payable-automation as the only pillar.
**Pages:** 16 (homepage + about + pricing + demo + contact + 1 AP pillar + 10 clusters)
**Outcome:** Site dropped from 27 to 16 pages, all honest and AP-focused. 1,247 lines of fake content removed.

### Phase 4 — Real Product Refocus ✅ Complete
**Goal:** Replace generic AP copy with the actual product reality from the internal Obsidian vault. Microsoft Dynamics NAV instead of NetSuite/QuickBooks. Nigerian WHT as a first-class feature. Claude Opus 4.6 as the named AI engine. TGI Group as the production customer.
**Pages:** 16 (same count, totally different content)
**Outcome:** Live on production. Every page now describes what FinMark.ai actually ships.

### Phase 5 — Vault Sync 🔄 In Progress
**Goal:** Update the seo-vault to match the real product. Delete obsolete pillar/cluster notes. Write new ones reflecting the real product. Update keyword list, linking matrix, canvas.
**Outcome (target):** Vault and website fully aligned. Single source of truth for SEO planning.

## Phase 6 — First Indexed by Google ⏳ Pending

**Goal:** Get the new content into Google's index and submitted to Search Console.

**Steps:**
- [ ] Wait for Netlify deploy to complete (post-Phase 4 push)
- [ ] Verify all 16 pages load correctly on production
- [ ] Submit https://finmark.ai/sitemap.xml to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify `site:finmark.ai` shows pages in Google within 7 days
- [ ] Set up GSC weekly email alerts

## Phase 7 — First Rankings + Iteration ⏳ Pending

**Goal:** Track the first rankings and iterate on the cluster set based on what works.

**Expected timeline:**
- Week 1-2 after indexing: pages start appearing for long-tail queries
- Week 4-8: "nigerian withholding tax automation" reaches top 50
- Week 8-12: Top 5 for the killer query if expectations hold
- Month 3-6: Cluster pages earning long-tail traffic across the AP topic

**Iteration triggers:**
- A cluster page with high impressions but low CTR → rewrite the title/meta
- A cluster page ranking outside top 50 after 8 weeks → expand content depth
- A query in GSC where FinMark.ai is appearing for unrelated content → add a cluster targeting that query

## Phase 8+ — Future Expansion (NOT YET PLANNED)

These phases come AFTER the first ranking results validate the strategy. Don't plan them in advance.

**Possible next moves once Phase 7 has data:**
- Blog content (long-tail informational queries)
- Customer case studies (TGI Group + others as they come on board)
- Comparison pages (FinMark.ai vs Bill.com, vs Tipalti, etc.)
- Glossary of AP / NAV / WHT terminology
- Free WHT calculator tool (lead magnet)

## Cadence

- **No new content while waiting for indexing.** Adding pages before Google has a chance to index existing pages dilutes the signal.
- **Weekly GSC check** for new queries and crawl errors.
- **Monthly content audit** of top 10 pages for freshness.
- **Quarterly strategy review** to decide whether the niche reframe is working.

## Linked notes
- [[Map of Content]]
- [[SEO Strategy]]
- [[Phase 0 Checklist]]
