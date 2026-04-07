---
type: linking-matrix
last_updated: 2026-04-07
---

# 🔗 Internal Linking Matrix (Single Pillar)

> The page-to-page link plan. Much simpler than the previous 8-pillar version because the site is now narrow + deep around one pillar.

## The 4 commandments of internal linking (single-pillar version)

1. **Every cluster MUST link UP to the AP pillar twice** — once in the intro link block, once in the closing CTA. Anchor text variation matters.
2. **Every cluster MUST link to 2-3 sibling clusters** within the same pillar via the "Related capabilities" section.
3. **The pillar MUST link DOWN to all 10 clusters** via the cluster hub list section.
4. **Homepage MUST link to the pillar** prominently (Hero CTA, Navbar Product dropdown, Footer Product column).

## The link graph (10 clusters → 1 pillar → homepage)

```
                       ┌──────────────────────────┐
                       │      Homepage (/)         │
                       │                          │
                       │  Hero CTA → AP Pillar    │
                       │  Nav dropdown → Pillar   │
                       │  Footer → Pillar         │
                       └────────────┬─────────────┘
                                    │
                                    ▼
                       ┌──────────────────────────┐
                       │  AP Automation Pillar    │
                       │  /accounts-payable-      │
                       │   automation             │
                       │                          │
                       │  Hub list → 10 clusters  │
                       └─┬──┬──┬──┬──┬──┬──┬──┬──┬─┬──┘
                         │  │  │  │  │  │  │  │  │ │
        ┌────────────────┘  │  │  │  │  │  │  │  │ └──────────────┐
        │      ┌────────────┘  │  │  │  │  │  │  └───────────┐    │
        │      │      ┌────────┘  │  │  │  │  └────────┐    │    │
        ▼      ▼      ▼           ▼  ▼  ▼  ▼           ▼    ▼    ▼
       C1     C2     C3          C4 C5 C6 C7          C8   C9   C10
       │      │      │           │  │  │  │           │    │    │
       └──────┴──────┴───────────┴──┴──┴──┴───────────┴────┴────┘
                         all 10 link UP to pillar
                         + 2-3 sibling links each
```

Where C1-C10 are:
1. invoice-processing-automation
2. ai-invoice-extraction
3. 3-way-matching
4. nigerian-withholding-tax-automation
5. microsoft-dynamics-nav-integration
6. sharepoint-invoice-integration
7. multi-tenant-ap-platform
8. ap-approval-workflows
9. duplicate-invoice-detection
10. ap-automation-software

## Sibling cluster relationships (programmatically rendered)

Each cluster's `relatedSiblings` array in `src/content/clusters.js` defines its sibling links. Below is the canonical mapping:

| Cluster | Sibling 1 | Sibling 2 | Sibling 3 |
|---|---|---|---|
| invoice-processing-automation | ai-invoice-extraction | 3-way-matching | duplicate-invoice-detection |
| ai-invoice-extraction | invoice-processing-automation | duplicate-invoice-detection | — |
| 3-way-matching | microsoft-dynamics-nav-integration | ap-approval-workflows | invoice-processing-automation |
| nigerian-withholding-tax-automation | microsoft-dynamics-nav-integration | invoice-processing-automation | — |
| microsoft-dynamics-nav-integration | nigerian-withholding-tax-automation | 3-way-matching | multi-tenant-ap-platform |
| sharepoint-invoice-integration | invoice-processing-automation | multi-tenant-ap-platform | — |
| multi-tenant-ap-platform | microsoft-dynamics-nav-integration | sharepoint-invoice-integration | — |
| ap-approval-workflows | invoice-processing-automation | 3-way-matching | multi-tenant-ap-platform |
| duplicate-invoice-detection | invoice-processing-automation | ai-invoice-extraction | ap-approval-workflows |
| ap-automation-software | invoice-processing-automation | microsoft-dynamics-nav-integration | nigerian-withholding-tax-automation |

## Inbound link counts (post Phase 4 deploy)

| Page | Inbound from clusters | Inbound from nav/footer | Inbound from homepage | Total |
|---|---|---|---|---|
| AP Automation Pillar | 20 (10 clusters × 2 contextual links) | 2 (nav dropdown + footer column) | 3 (Hero, About, Services CTA) | **25+** |
| invoice-processing-automation | 5 (sibling refs) | 1 (footer) | 0 | 6 |
| nigerian-withholding-tax-automation | 4 (sibling refs) | 1 (footer) | 0 | 5 |
| microsoft-dynamics-nav-integration | 5 (sibling refs) | 1 (footer) | 0 | 6 |
| ... other clusters | ~3-5 | 1 | 0 | 4-6 |

The pillar gets the most inbound link equity, which is exactly what we want. The pillar should rank for the highest-volume terms; clusters rank for their long-tail.

## Anchor text rules (60/20/20)

For each target page, distribute anchor text roughly:

| Anchor type | Share | Example for AP pillar |
|---|---|---|
| Exact match | 20% | "accounts payable automation" |
| Variation | 60% | "AP automation", "AI accounts payable", "the AP pillar", "FinMark.ai's AP platform" |
| Branded + descriptive | 15% | "FinMark.ai's accounts payable platform" |
| Generic | 5% | "see how it works" |

For the killer page ([[nigerian-withholding-tax-automation]]):
- Exact match: "Nigerian withholding tax automation"
- Variations: "WHT automation", "Nigerian WHT compliance", "automated WHT computation"
- Branded: "FinMark.ai's WHT engine"
- Generic: "explore WHT capabilities"

## Cluster page link checklist (template)

Every cluster page MUST contain:

- [x] Breadcrumb (Home > AP Automation > [Cluster])
- [x] Intro paragraph or PillarLinkBlock — 1st contextual link to AP pillar
- [x] Body section with 2-3 sibling cluster links
- [x] Related Capabilities section (sibling cards) — 2-3 sibling links
- [x] Conclusion / PillarCTA — 2nd contextual link to AP pillar
- [x] FAQ schema (FAQPage JSON-LD)

This pattern is enforced by `src/pages/ClusterPage.jsx` — it renders the layout from data, so as long as `relatedSiblings` is populated correctly in `clusters.js`, the linking is automatic.

## Cross-pillar links (none)

The `crossPillarLink` field on every cluster is `null` because the site has only one pillar. When more pillars ship in the future (likely never since FinMark.ai is single-product), this field will activate.

## Auditing internal links

To verify the link structure is intact:

```bash
cd "/Users/arinsoni/Library/Mobile Documents/com~apple~CloudDocs/Finmark/website/dist"
grep -o 'href="/accounts-payable-automation[^"]*"' accounts-payable-automation.html | sort -u | wc -l
# Should show ~10 unique cluster links
```

For each cluster page:
```bash
grep -o 'href="/accounts-payable-automation[^"]*"' accounts-payable-automation/<cluster>.html | sort -u
# Should show: pillar (twice), 2-3 siblings, plus the breadcrumb
```

## Linked notes
- [[Map of Content]]
- [[SEO Strategy]]
- [[Master Keyword List]]
- [[Accounts Payable Automation]]
