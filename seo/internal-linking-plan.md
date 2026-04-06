# FinMark.ai — Internal Linking Plan

> **Purpose:** Define exactly which pages link to which, with what anchor text, in what context, and why. This is the blueprint that turns the architecture into actual link equity flow.

## Linking philosophy

Internal links serve **three purposes**:

1. **Pass link equity (PageRank)** — links from authoritative pages flow value to less-authoritative pages
2. **Define topical relationships** — Google uses link clusters to understand which pages are about which topics
3. **Help users discover related content** — UX matters; Google measures it

A good internal link is:
- **Contextual** (in the body text, surrounded by relevant content)
- **Descriptive anchor text** (matches or relates to the target's primary keyword)
- **One-way directional** (cluster → pillar; blog → cluster; not the reverse)
- **Editorial** (manually placed, not auto-generated from a tag cloud)

---

## Link types & where they live

| Link Type | Location | Equity Value | Purpose |
|---|---|---|---|
| **Body / Contextual** | Inside paragraph text | ⭐⭐⭐⭐⭐ Highest | Topical signal + UX |
| **Hub list** | "Explore [topic]" boxes on pillar pages | ⭐⭐⭐⭐ High | Cluster discovery |
| **Breadcrumb** | Top of cluster/blog pages | ⭐⭐⭐ Med | Navigation + crawl |
| **Related posts** | Bottom of blog posts | ⭐⭐ Med-Low | UX + crawl depth |
| **Footer** | Site-wide footer | ⭐ Low | Crawl backup, NOT for ranking |
| **Top nav** | Persistent header | ⭐⭐⭐ Med | Crawl + UX, but every nav link dilutes equity — keep it small |

**Rule:** A link in the body text is worth ~10x a link in the footer. Spend your "link budget" on contextual body links to your most important pages.

---

## Equity flow rules (the 5 commandments)

### 1. Cluster pages MUST link UP to their pillar
Every cluster page links to its pillar at least 2× (once early in the body, once near the bottom). This is the single most important rule.

```
Cluster: /ai-financial-automation/financial-automation-software
  → 2 contextual links to /ai-financial-automation
  → Anchor text variations: "AI financial automation", "AI-powered financial automation platform"
```

### 2. Pillar pages link DOWN to their clusters via a hub list
Each pillar has an "Explore [topic]" section listing all its clusters with descriptive anchor text. This is a navigational hub list — high crawl value, moderate equity flow.

### 3. Pillars cross-link to RELATED pillars (not all)
A pillar links to 2–3 *related* pillars contextually. Example:
- `compliance-automation` ↔ `ai-fraud-detection` (compliance & fraud are tightly coupled)
- `ai-financial-reporting` ↔ `predictive-financial-forecasting` (reporting feeds forecasting)

### 4. Blog posts link UP to their parent cluster, NOT directly to the pillar
This creates a tiered flow: blog → cluster → pillar. Skipping cluster wastes the cluster's equity boost.

### 5. Solution pages (CFO, Banks, etc.) link to ALL pillars relevant to that persona/industry
A "Banks" page links to all pillars (compliance, fraud, payments, reporting). This makes solution pages high-equity nodes with lots of outgoing links — they're hubs, not destinations.

---

## Pillar-to-Pillar Cross-Link Map

This is which pillars link to which other pillars contextually (NOT exhaustively).

```
P1 AI Fin Automation
  ├─→ P2 Compliance         (compliance is a category of automation)
  ├─→ P5 Reporting & Analytics (analytics is a category of automation)
  └─→ P8 Workflow Automation  (deepest related topic)

P2 Compliance Automation
  ├─→ P3 Fraud & Risk        (KYC/AML overlap with fraud)
  ├─→ P4 Payments            (payment compliance)
  └─→ P5 Reporting           (regulatory reporting)

P3 Fraud Detection & Risk
  ├─→ P2 Compliance          (KYC/AML)
  ├─→ P4 Payments            (payment fraud)
  └─→ P6 Data Platform       (fraud needs unified data)

P4 Payment Processing
  ├─→ P3 Fraud Detection     (payment fraud prevention)
  ├─→ P2 Compliance          (cross-border compliance)
  └─→ P8 Workflow Automation (P2P automation)

P5 Financial Reporting
  ├─→ P7 Predictive Forecasting (reporting → forecasting pipeline)
  ├─→ P6 Data Platform       (reporting needs unified data)
  └─→ P1 AI Fin Automation   (parent topic)

P6 Unified Data Platform
  ├─→ P5 Reporting           (data → reports)
  ├─→ P7 Forecasting         (data → forecasts)
  └─→ P3 Fraud               (data → fraud detection)

P7 Predictive Forecasting
  ├─→ P5 Reporting           (forecasting needs reporting)
  ├─→ P6 Data Platform       (forecasting needs unified data)
  └─→ P1 AI Fin Automation   (parent topic)

P8 Workflow Automation
  ├─→ P1 AI Fin Automation   (parent topic)
  ├─→ P4 Payments            (P2P, O2C)
  └─→ P5 Reporting           (R2R)
```

**Each pillar gets 3 inbound links from sibling pillars** — a balanced ring topology that distributes equity evenly without creating any orphan pillars.

---

## Detailed Linking Matrix

### Pillar 1 — `/ai-financial-automation`

**Outbound links (this page links TO these):**

| Target | Type | Anchor text | Where in page |
|---|---|---|---|
| `/ai-financial-automation/financial-automation-software` | Cluster | "financial automation software" | "Core capabilities" section |
| `/ai-financial-automation/ai-for-finance` | Cluster | "AI for finance" | "What it is" section |
| `/ai-financial-automation/ai-finance-platform` | Cluster | "the FinMark.ai finance platform" | "How FinMark.ai delivers it" |
| `/ai-financial-automation/intelligent-finance-automation` | Cluster | "intelligent finance automation" | Subsection in "Core capabilities" |
| `/ai-financial-automation/ai-accounting-automation` | Cluster | "AI accounting automation" | "Use cases" |
| `/ai-financial-automation/ai-finance-tools` | Cluster | "AI finance tools" | "Use cases" |
| `/solutions/ai-for-cfo` | Solution | "AI tools for CFOs" | "Who it's for" |
| `/compliance-automation` | Sibling Pillar | "compliance automation" | Body text |
| `/ai-financial-reporting` | Sibling Pillar | "AI financial reporting" | Body text |
| `/financial-workflow-automation` | Sibling Pillar | "financial workflow automation" | Body text |
| All 8 clusters | Hub list | (anchor = cluster's primary keyword) | "Explore AI Financial Automation" hub block |

**Inbound links (these pages link TO this page):**

| Source | Anchor text | Context |
|---|---|---|
| All 8 clusters of P1 | "AI financial automation" / "AI-powered financial automation" | 2× in body |
| Homepage | "AI Financial Automation" | Hero CTA + "What we do" section |
| `/about` | "AI financial automation platform" | Mission paragraph |
| All P1 blog posts | "AI financial automation" | 1× in body, 1× in conclusion |
| `/solutions/for-cfo` | "AI financial automation for CFOs" | Body text |
| Sibling pillars (P2, P5, P8) | "broader AI financial automation strategy" | Body text |

### Pillar 2 — `/compliance-automation`

**Outbound links:**

| Target | Type | Anchor |
|---|---|---|
| `/compliance-automation/regulatory-compliance-automation` | Cluster | "regulatory compliance automation" |
| `/compliance-automation/regtech-platform` | Cluster | "RegTech platform" |
| `/compliance-automation/kyc-automation` | Cluster | "KYC automation" |
| `/compliance-automation/aml-compliance-software` | Cluster | "AML compliance software" |
| `/compliance-automation/automated-kyc-aml` | Cluster | "automated KYC and AML workflows" |
| `/compliance-automation/continuous-compliance-monitoring` | Cluster | "continuous compliance monitoring" |
| `/compliance-automation/regulatory-reporting-automation` | Cluster | "regulatory reporting automation" |
| `/compliance-automation/audit-automation` | Cluster | "audit automation" |
| `/compliance-automation/compliance-management-system` | Cluster | "compliance management system" |
| `/ai-fraud-detection` | Sibling Pillar | "AI fraud detection" |
| `/payment-processing-automation` | Sibling Pillar | "payment processing compliance" |
| `/ai-financial-reporting` | Sibling Pillar | "regulatory reporting workflows" |

### Pillar 3 — `/ai-fraud-detection`

**Outbound:** 9 cluster links + 3 sibling pillar links (`/compliance-automation`, `/payment-processing-automation`, `/unified-financial-data-platform`)

**Inbound:** All 9 of its clusters (2× each), homepage, 3 sibling pillars, all P3 blog posts, `/solutions/banks`, `/solutions/fintech-startups`

### Pillar 4 — `/payment-processing-automation`

**Outbound:** 9 cluster links + 3 sibling pillar links (`/ai-fraud-detection`, `/compliance-automation`, `/financial-workflow-automation`)

### Pillar 5 — `/ai-financial-reporting`

**Outbound:** 9 cluster links + 3 sibling pillar links (`/predictive-financial-forecasting`, `/unified-financial-data-platform`, `/ai-financial-automation`)

### Pillar 6 — `/unified-financial-data-platform`

**Outbound:** 8 cluster links + 3 sibling pillar links (`/ai-financial-reporting`, `/predictive-financial-forecasting`, `/ai-fraud-detection`)

### Pillar 7 — `/predictive-financial-forecasting`

**Outbound:** 9 cluster links + 3 sibling pillar links (`/ai-financial-reporting`, `/unified-financial-data-platform`, `/ai-financial-automation`)

### Pillar 8 — `/financial-workflow-automation`

**Outbound:** 8 cluster links + 3 sibling pillar links (`/ai-financial-automation`, `/payment-processing-automation`, `/ai-financial-reporting`)

---

## Cluster Page Linking Pattern (template)

Every cluster page follows this exact internal linking pattern. Use it as a checklist when writing cluster content.

**A typical cluster page MUST contain:**

| Position | Link Type | Target | Anchor (example) |
|---|---|---|---|
| Breadcrumb | Navigational | Pillar | `Pillar Topic` |
| Intro paragraph (1st link) | Contextual | Parent pillar | "broader [pillar topic] strategy" |
| Body — middle section | Contextual | Sibling cluster #1 (related subtopic) | "[sibling cluster's primary keyword]" |
| Body — middle section | Contextual | Sibling cluster #2 | "[sibling cluster's primary keyword]" |
| Body — late section | Contextual | A different pillar's relevant cluster (cross-pillar link, optional but powerful) | descriptive |
| Conclusion | Contextual | Parent pillar (2nd time) | "[pillar primary keyword]" |
| "Related" sidebar | Hub list | 2-3 sibling clusters | (cluster primary keywords) |
| "Read more" CTA | Navigational | 1-2 supporting blog posts | (blog post titles) |

**Total internal links per cluster: 8-12** (sweet spot for both SEO and UX). Don't exceed 15 — diminishing returns and reader fatigue.

**Anchor text variation rule:** Don't use the exact same anchor text twice on the same page pointing to the same target. Vary it: "AI financial automation", "AI-powered financial automation", "intelligent finance automation". Google penalizes over-optimized exact-match anchors.

---

## Blog Post Linking Pattern (template)

Every blog post follows this pattern:

| Position | Link Type | Target |
|---|---|---|
| Intro paragraph | Contextual | Parent cluster (the most-related cluster within the same pillar) |
| Body — 2-3 contextual links | Contextual | Other blog posts in the same pillar |
| Body — 1 contextual link | Contextual | Another cluster (sibling within same pillar) |
| CTA at end | Conversion | Parent pillar OR `/demo` |
| Related posts module | Hub list | 3 other blog posts (algorithmically pulled by tag/pillar) |

**Total internal links per blog post: 5-8.**

---

## Homepage Linking Plan

The homepage is the highest-equity page on the site. Every link from the homepage is a major equity boost.

| Link target | Link type | Where on the page |
|---|---|---|
| `/ai-financial-automation` | Featured | Hero CTA + "What we do" card |
| `/compliance-automation` | Featured | "What we do" card |
| `/ai-fraud-detection` | Featured | "What we do" card |
| `/payment-processing-automation` | Featured | "What we do" card |
| `/ai-financial-reporting` | Featured | "What we do" card |
| `/unified-financial-data-platform` | Featured | "What we do" card |
| `/predictive-financial-forecasting` | Featured | "What we do" card |
| `/financial-workflow-automation` | Featured | "What we do" card |
| `/solutions/for-cfo` | Persona section | "Built for finance leaders" |
| `/solutions/banks`, `/solutions/fintech-startups`, `/solutions/saas`, `/solutions/enterprises` | Industry section | "Industries we serve" |
| `/blog/[latest 3]` | Content card | "Latest from our blog" |
| `/about`, `/pricing`, `/demo`, `/contact` | Standard | Top nav + footer |
| `/case-studies`, `/customers` | Social proof | Logo strip + case study card |

**Homepage outbound link count: ~25-30.** That's healthy. The homepage exists to distribute equity to pillars.

**What the homepage MUST NOT do:**
- Link directly to cluster pages or blog posts in the body (let pillars do that)
- Link to legal pages from the body (footer-only)
- Link to things that don't exist yet — broken links cost equity

---

## Top Navigation (header)

Persistent across the whole site. Each link is a sitewide vote of importance.

```
[FinMark.ai logo]   Platform ▼   Solutions ▼   Resources ▼   Pricing   [Demo CTA]
                       │             │              │
                       │             │              └── Blog
                       │             │                  Case Studies
                       │             │                  Customers
                       │             │
                       │             ├── For CFOs
                       │             ├── For Controllers
                       │             ├── For Finance Teams
                       │             ├── ─────────────
                       │             ├── Banks
                       │             ├── Fintech Startups
                       │             ├── SaaS
                       │             └── Enterprises
                       │
                       ├── AI Financial Automation       ← P1
                       ├── Compliance Automation         ← P2
                       ├── AI Fraud Detection            ← P3
                       ├── Payment Processing            ← P4
                       ├── Financial Reporting           ← P5
                       ├── Unified Data Platform         ← P6
                       ├── Predictive Forecasting        ← P7
                       └── Workflow Automation           ← P8
```

**Why this nav structure:**
- All 8 pillars are reachable in 1 click from any page → maximum crawl depth
- Solutions are 1 click → captures persona/industry intent
- Pricing is top-level → high commercial intent, separate dropdown would bury it
- Blog/Resources is grouped → reduces nav clutter

---

## Footer

Footer links are low equity but high crawl coverage. Use it as a sitemap proxy.

| Column 1: Platform | Column 2: Solutions | Column 3: Company | Column 4: Resources |
|---|---|---|---|
| AI Financial Automation | For CFOs | About | Blog |
| Compliance Automation | For Controllers | Customers | Case Studies |
| AI Fraud Detection | For Finance Teams | Pricing | Help Center |
| Payment Processing | Banks | Contact | API Docs |
| Financial Reporting | Fintech Startups | Careers | Security |
| Unified Data Platform | SaaS | Privacy | Status |
| Predictive Forecasting | Enterprises | Terms | |
| Workflow Automation | | | |

**Total footer links: ~30.** Don't go higher.

---

## Anchor Text Diversity — The 60/20/20 Rule

For each target page, distribute anchor text across all incoming links roughly like this:

| Anchor type | Share | Example (target = `/ai-fraud-detection`) |
|---|---|---|
| Exact match | 20% | "AI fraud detection" |
| Partial match / variation | 60% | "AI-powered fraud detection", "machine learning fraud detection", "intelligent fraud detection" |
| Branded + descriptive | 15% | "FinMark.ai's fraud detection platform" |
| Generic / contextual | 5% | "see how it works", "learn more" |

**Why:** 100% exact-match anchors look manipulative to Google and trigger penalty filters. 60% partial-match is the natural distribution.

---

## Implementation checklist (per page)

Before publishing any new page, verify:

- [ ] Page has a breadcrumb linking to its parent (pillar or `/blog`)
- [ ] Page has at least 1 contextual link UP to its parent (pillar/cluster)
- [ ] Page has at least 2 contextual links to sibling pages in the same pillar
- [ ] Page has at least 1 cross-pillar contextual link (where relevant)
- [ ] Page is linked FROM at least 1 other published page (no orphans)
- [ ] All anchor texts are descriptive, not "click here"
- [ ] No more than 15 internal links total (clusters/blogs)
- [ ] Page is included in `/sitemap.xml`
- [ ] Canonical tag set
- [ ] JSON-LD schema added (Article, FAQPage, Organization, BreadcrumbList as appropriate)

---

## Tracking & maintenance

**Monthly audit:**
1. Crawl the site with Screaming Frog (or Sitebulb) — find orphan pages and broken internal links
2. Check Search Console "Internal links" report — verify pillars receive the most internal links
3. Verify no page receives <2 internal links (low crawl value)
4. Verify no page has >15 outbound internal links (equity dilution)

**Quarterly:**
- Re-evaluate the cross-pillar link map (P1 ↔ P2 ↔ P3 etc.) — has the topical landscape shifted?
- Check rankings per pillar — if a pillar is underperforming, increase inbound links from siblings

---

## TL;DR

> **Pillars** are the destinations. **Clusters** are the funnels. **Blog posts** are the fuel. **Internal links** are the pipes that route equity from fuel → funnels → destinations. Build the pillars first, then the clusters, then the fuel. Link bottom-up always.
