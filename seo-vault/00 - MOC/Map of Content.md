---
type: moc
status: living-document
---

# 🗺️ FinMark.ai SEO — Map of Content

> Your home base. Start here. Every important note in this vault is reachable from this MOC.

## TL;DR — The Plan

FinMark.ai is currently a single-page React app at one URL. To rank in Google for competitive financial automation keywords, we need **137 distinct pages** organized into **8 topical pillars**, each with cluster pages and supporting blog content. Build the pillars first, then the clusters, then the blog. Always link bottom-up from clusters → pillars to concentrate equity.

## 📊 The 8 Pillars

| # | Pillar | Primary Keyword | Status |
|---|---|---|---|
| 1 | [[01 - Pillars/P1 - AI Financial Automation]] | `ai financial automation` | Idea |
| 2 | [[01 - Pillars/P2 - Compliance Automation]] | `compliance automation software` | Idea |
| 3 | [[01 - Pillars/P3 - AI Fraud Detection]] | `ai fraud detection` | Idea |
| 4 | [[01 - Pillars/P4 - Payment Processing Automation]] | `payment processing automation` | Idea |
| 5 | [[01 - Pillars/P5 - AI Financial Reporting]] | `ai financial reporting` | Idea |
| 6 | [[01 - Pillars/P6 - Unified Financial Data Platform]] | `unified data platform for finance` | Idea |
| 7 | [[01 - Pillars/P7 - Predictive Financial Forecasting]] | `predictive financial forecasting` | Idea |
| 8 | [[01 - Pillars/P8 - Workflow Automation]] | `financial workflow automation` | Idea |

## 🧭 Quick navigation

- **Strategy**
  - [[00 - MOC/SEO Strategy]] — high-level plan and rationale
  - [[00 - MOC/Phasing & Rollout]] — Phase 0 → 4
  - [[00 - MOC/Phase 0 Checklist]] — what to ship first
- **Internal Linking**
  - [[05 - Internal Linking/Linking Matrix]] — page-to-page link plan
  - [[05 - Internal Linking/Anchor Text Diversity Rules]]
  - [[05 - Internal Linking/Pillar Cross-Link Map]]
- **Keywords**
  - [[04 - Keywords/Master Keyword List]] — all 135 keywords
  - [[04 - Keywords/By Intent]] — grouped by commercial/info/transactional
  - [[04 - Keywords/Priority P0]] — what to write first
- **Visualization**
  - [[06 - Canvas/Topic Map.canvas|Topic Map (Canvas)]] — open this in Obsidian Canvas

## 🎯 Phase 0 — Build these first

The 8 pillar pages + homepage + 4 static pages = 13 pages total. Ship Phase 0 before any clusters.

- [ ] [[01 - Pillars/P1 - AI Financial Automation]]
- [ ] [[01 - Pillars/P2 - Compliance Automation]]
- [ ] [[01 - Pillars/P3 - AI Fraud Detection]]
- [ ] [[01 - Pillars/P4 - Payment Processing Automation]]
- [ ] [[01 - Pillars/P5 - AI Financial Reporting]]
- [ ] [[01 - Pillars/P6 - Unified Financial Data Platform]]
- [ ] [[01 - Pillars/P7 - Predictive Financial Forecasting]]
- [ ] [[01 - Pillars/P8 - Workflow Automation]]
- [ ] Homepage refactor
- [ ] `/about` (already partially exists)
- [ ] `/pricing`
- [ ] `/demo`
- [ ] `/contact`

## 🔗 Pillar Cross-Link Map

```
P1 ──→ P2, P5, P8
P2 ──→ P3, P4, P5
P3 ──→ P2, P4, P6
P4 ──→ P3, P2, P8
P5 ──→ P7, P6, P1
P6 ──→ P5, P7, P3
P7 ──→ P5, P6, P1
P8 ──→ P1, P4, P5
```

See [[05 - Internal Linking/Pillar Cross-Link Map]] for the rationale.

## 🏷️ Tags

- `#pillar` — Pillar pages
- `#cluster` — Cluster pages
- `#supporting` — Blog posts
- `#solution` — Industry/persona pages
- `#priority/p0` `#priority/p1` `#priority/p2` — Build order
- `#status/idea` `#status/drafted` `#status/written` `#status/published`
- `#intent/commercial` `#intent/informational` `#intent/transactional`

## 📁 Folder structure

```
seo-vault/
├── 00 - MOC/                    ← You are here
├── 01 - Pillars/                ← 8 pillar briefs
├── 02 - Clusters/               ← 73 cluster briefs (organized by pillar)
├── 03 - Supporting Content/     ← Blog post briefs
├── 04 - Keywords/               ← Master keyword reference
├── 05 - Internal Linking/       ← The linking matrix
├── 06 - Canvas/                 ← Visual topic maps
└── Templates/                   ← Reusable templates
```

## 🔁 Workflow

1. Open this MOC every time you start work
2. Pick a pillar/cluster from the Phase 0/1 checklist
3. Open its note → fill in the brief from the template
4. Update the `status` frontmatter as you progress (idea → drafted → written → published)
5. When publishing, verify the internal linking checklist on the note
