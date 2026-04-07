---
type: moc
status: living-document
last_updated: 2026-04-07
---

# 🗺️ FinMark.ai SEO — Map of Content

> Your home base. Start here. Every important note in this vault is reachable from this MOC.

## TL;DR — The Plan

FinMark.ai is a **Financial Automation** company for African enterprise. Today's product is **AI-powered Accounts Payable automation** for finance teams running Microsoft Dynamics NAV. The product is live in production with **TGI Group** (Nigerian conglomerate) across two subsidiaries (TGI Distri Limited and West Africa Cube Limited). High AI extraction accuracy sustained, Nigerian Withholding Tax automation built in.

The site has **1 pillar + 10 clusters** organized as a deeply-interlinked hub-and-spoke for the AP automation topical space — narrow + deep, not wide + shallow.

## 🏛️ The Pillar

| Pillar | Primary Keyword | Status |
|---|---|---|
| [[Accounts Payable Automation]] | `accounts payable automation` | Published |

## 🔗 The 10 Clusters

| # | Cluster | Primary Keyword | Strategic Value |
|---|---|---|---|
| 1 | [[invoice-processing-automation]] | `invoice processing automation` | High volume general entry |
| 2 | [[ai-invoice-extraction]] | `ai invoice extraction` | Technical buyer differentiator (provider-agnostic) |
| 3 | [[3-way-matching]] | `3 way matching nav` | NAV-specific buyer query |
| 4 | [[nigerian-withholding-tax-automation]] | `nigerian withholding tax automation` | 🔥 **KILLER SEO PLAY** |
| 5 | [[microsoft-dynamics-nav-integration]] | `microsoft dynamics nav ap integration` | NAV-specific buyer query |
| 6 | [[sharepoint-invoice-integration]] | `sharepoint invoice integration` | Microsoft-shop niche |
| 7 | [[multi-tenant-ap-platform]] | `multi tenant ap platform` | Group company differentiator |
| 8 | [[ap-approval-workflows]] | `ap approval workflows` | Standard buyer query |
| 9 | [[duplicate-invoice-detection]] | `duplicate invoice detection` | Standard buyer query |
| 10 | [[ap-automation-software]] | `ap automation software` | High volume buyer's guide |

## 🔥 The Killer SEO Play: Nigerian WHT

> **[[nigerian-withholding-tax-automation]]** is the highest-leverage page on the entire site.
>
> Search competition is essentially zero (no major US-built AP tool covers Nigerian WHT). Search intent is brutally commercial. FinMark.ai has a real, defensible differentiator. Expected outcome: **top 5 ranking within 4-8 weeks of indexing**.
>
> If only one page on the site ever ranks, this should be the one. Treat it as the SEO crown jewel.

## 🧭 Quick navigation

- **Strategy**
  - [[SEO Strategy]] — single-product narrow-and-deep rationale
  - [[Phasing & Rollout]] — how the cluster set was sequenced
  - [[Phase 0 Checklist]] — engineering foundation (now complete)
- **Internal Linking**
  - [[Linking Matrix]] — page-to-page link plan
- **Keywords**
  - [[Master Keyword List]] — all real AP keywords
- **Visualization**
  - [[Topic Map.canvas|Topic Map (Canvas)]] — open in Obsidian Canvas

## 🏗️ What's been built

| Phase | What | Status |
|---|---|---|
| **Phase 0** | Engineering foundation: vite-react-ssg, routing, SEO components, sitemap | ✅ Complete |
| **Phase 1** | 8 fake pillar pages (later removed) | ✅ Complete then deleted |
| **Phase 2** | 14 fake cluster pages (later removed) | ✅ Complete then deleted |
| **Phase 3** | Refocus to single AP pillar with generic copy | ✅ Complete |
| **Phase 4** | Refocus to real product copy from internal vault | ✅ **You are here** |
| **Phase 5** | Vault sync to match real product | ✅ In progress (this update) |
| **Phase 6** | First indexed by Google + GSC submission | ⏳ Pending |
| **Phase 7** | First rankings + content iteration | ⏳ Pending |

## 🏷️ Tags

- `#pillar` — Pillar pages
- `#cluster` — Cluster pages
- `#killer-play` — Highest-leverage SEO opportunities
- `#priority/p0` — Build/ship first
- `#status/published` — Live in production
- `#intent/commercial` — Buyer-intent pages
- `#real-product` — Pages describing actual shipped capabilities

## 📁 Folder structure

```
seo-vault/
├── 00 - MOC/                    ← You are here
├── 01 - Pillars/                ← The 1 AP pillar
├── 02 - Clusters/               ← 10 real-product cluster briefs
├── 03 - Solutions/              ← (empty for now — single product)
├── 03 - Supporting Content/     ← (empty for now — no blog yet)
├── 04 - Keywords/               ← Master keyword reference
├── 05 - Internal Linking/       ← Linking matrix
├── 06 - Canvas/                 ← Visual topic map
└── Templates/                   ← Reusable templates for new clusters
```

## 🔁 Workflow

1. Open this MOC every time you start work
2. To add a new cluster: copy [[Templates/Cluster Template]], fill it in, then add the matching entry to `src/content/clusters.js` in the website code
3. To verify a page is live: check the URL on `https://finmark.ai/accounts-payable-automation/<slug>`
4. Update the `status` frontmatter as content moves from idea → published

## ⚠️ Important reality check

Everything in this vault NOW reflects what FinMark.ai actually ships. The previous version of this vault (8 pillars, 67 clusters) was aspirational and has been deleted. The git history preserves it if anyone needs to look back.

The TODO markers in the cluster notes flag spots where claims should be verified before they get indexed by Google. The most urgent: **TGI Group naming permission** — confirm TGI is OK being named publicly as a customer.
