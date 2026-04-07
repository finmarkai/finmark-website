---
type: pillar
pillar: accounts-payable-automation
keyword: accounts payable automation
intent: commercial
volume: H
difficulty: high
priority: p0
status: published
url: /accounts-payable-automation
word_count_target: 1500-2500
word_count_current: 1733
---

# Accounts Payable Automation (Pillar)

> 🏛️ **The pillar.** FinMark.ai builds AI-powered AP automation specifically for African enterprise. This is the only pillar — the brand is single-product. Cluster pages live under `/accounts-payable-automation/*`.

## Pillar metadata

| Field | Value |
|---|---|
| **Primary keyword** | `accounts payable automation` |
| **URL** | `/accounts-payable-automation` |
| **Intent** | Commercial |
| **Status** | Published, live with TGI Group |
| **Word count** | 1,733 words (current) |

## Why this pillar exists

FinMark.ai is a Financial Automation company for African enterprise. The current (and only) shipping product is AI-powered accounts payable automation for finance teams running Microsoft Dynamics NAV. This pillar establishes topical authority around AP automation generally, then funnels visitors to the cluster pages that cover the specific capabilities (AI extraction, NAV integration, Nigerian WHT, multi-tenant, etc.).

The strategy is **narrow + deep** — own the AP topic completely instead of spreading across multiple unrelated categories. For a single-product startup with one customer (TGI Group, 287+ invoices processed), narrow + deep is the only strategy that makes sense.

## Target keywords

- **Primary:** `accounts payable automation`
- **Secondary:** `ap automation`, `ai accounts payable`, `accounts payable software`, `african ap automation`, `nigerian ap automation`

## Real product summary (sourced from internal vault)

| Aspect | Reality |
|---|---|
| **Customer** | TGI Group (Nigerian conglomerate) |
| **Subsidiaries live** | TGI Distri Limited (TGID) + West Africa Cube Limited (WACube) |
| **Volume** | 287+ invoices processed, 10 users |
| **AI confidence** | 98% sustained on real production invoices |
| **Audit trail** | 2,993+ entries |
| **AI engine** | Anthropic Claude Opus 4.6, 2-pass extraction |
| **ERP** | Microsoft Dynamics NAV (on-premise, via SOAP middleware) |
| **Document repo** | SharePoint (Microsoft Graph webhooks + delta polling) |
| **Killer feature** | Nigerian Withholding Tax automation per 2024 regulations |
| **Architecture** | Multi-tenant subdomain (tgid.ap.finmark.ai, wacube.ap.finmark.ai) |
| **Hosting** | AWS eu-west-1 (Ireland), RDS encrypted, S3 SSE |
| **Security** | Internal audit (12/12 fixed), pentest (34/35 pass), TGI checklist 59 Yes / 10 N/A |

## The 8-stage pipeline (the actual product)

1. **Intake** — Portal upload, SharePoint folder, or vendor email forwarding
2. **Deduplication** — SHA-256 fingerprint check
3. **Extraction** — Claude Opus 4.6, 2-pass extraction process
4. **Matching** — 2-way or 3-way against POs/GRNs synced from NAV every 5 minutes
5. **Sanity checks** — 10 rule-based validations
6. **WHT computation** — Nigerian 2024 regulations applied per vendor type and service category
7. **Approval routing** — Vendor-approver mapping, configurable thresholds
8. **ERP push** — Approved invoices to NAV with 4 standard Finmark fields + 7 WHT fields

## Cluster pages (the 10 children)

| Cluster | Real differentiator | Status |
|---|---|---|
| [[invoice-processing-automation]] | The full 8-stage pipeline | Published |
| [[ai-invoice-extraction]] | Claude Opus 4.6, 2-pass, 98% | Published |
| [[3-way-matching]] | Match against NAV POs/GRNs, lump-sum support | Published |
| [[nigerian-withholding-tax-automation]] | THE killer SEO play | Published |
| [[microsoft-dynamics-nav-integration]] | On-premise NAV via SOAP middleware | Published |
| [[sharepoint-invoice-integration]] | Graph webhooks + delta polling | Published |
| [[multi-tenant-ap-platform]] | Subdomain isolation for group companies | Published |
| [[ap-approval-workflows]] | Vendor-approver mapping | Published |
| [[duplicate-invoice-detection]] | SHA-256 + 10 sanity checks | Published |
| [[ap-automation-software]] | Buyer's guide for African enterprise | Published |

## Internal linking checklist

- [x] Links to all 10 cluster pages (hub list section)
- [x] Linked from homepage (Hero CTA + nav dropdown + footer)
- [x] Linked from Navbar Product dropdown
- [x] Linked from Footer Product column
- [ ] Linked from About page (future addition)
- [ ] Linked from blog posts (no blog yet)

## Schema markup
- WebPage
- BreadcrumbList (Home > Accounts Payable Automation)
- FAQPage (8 questions)
- Organization (sitewide)

## Status notes

- [x] Content written
- [x] Internal links wired
- [x] JSON-LD schema rendering
- [x] Pre-rendered HTML verified
- [x] Published to production
- [ ] Submitted to Google Search Console (pending after Netlify deploy)
- [ ] First indexed by Google (pending — typically 1-3 days after sitemap submission)

## Related notes
- [[Map of Content]]
- [[SEO Strategy]]
- [[Linking Matrix]]
- [[Master Keyword List]]
