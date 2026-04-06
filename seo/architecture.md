# FinMark.ai — Site Architecture for Topical Authority

> **Goal:** Move FinMark.ai from a single-page site to a hub-and-spoke information architecture that earns topical authority across 8 pillar topics in AI-powered financial & operational automation.

## Why this architecture

Google ranks websites for topical authority, not isolated keywords. The hub-and-spoke (pillar/cluster) model is the most reliable way to build it:

```
            ┌─────────────────────┐
            │   HOMEPAGE (/)      │
            └──────────┬──────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
   ┌────▼────┐   ┌─────▼────┐   ┌─────▼────┐
   │ Pillar 1│   │ Pillar 2 │ … │ Pillar 8 │   ← 8 broad topic hubs
   └────┬────┘   └─────┬────┘   └─────┬────┘
        │              │              │
   ┌────┼────┐    ┌────┼────┐    ┌────┼────┐
   │    │    │    │    │    │    │    │    │
  C1   C2   C3   C1   C2   C3   C1   C2   C3   ← Cluster pages (subtopics)
   │    │    │
   B1   B2   B3                                ← Supporting blog posts
```

**Critical rule:** Every cluster links *up* to its pillar. Every blog post links *up* to its closest cluster. Pillars cross-link to *related* pillars (not all pillars). This creates a directed flow of link equity into the pillars — which then rank for the highest-volume terms.

---

## URL Structure Conventions

| Type | Pattern | Example |
|---|---|---|
| Homepage | `/` | `/` |
| Pillar | `/{pillar-slug}` | `/ai-financial-automation` |
| Cluster | `/{pillar-slug}/{cluster-slug}` | `/ai-financial-automation/financial-automation-software` |
| Blog post | `/blog/{post-slug}` | `/blog/benefits-of-ai-in-finance` |
| Solution | `/solutions/{solution-slug}` | `/solutions/for-cfo` |
| Static | `/{slug}` | `/about`, `/pricing`, `/contact` |

**Slug rules:**
- Lowercase, hyphenated, no stop words unless they change meaning
- Match the primary keyword exactly (or very close) — avoid keyword stuffing
- Never change a slug after launch — set up 301 redirects if you must
- Cluster slugs do **not** repeat the pillar topic in the path (e.g. NOT `/ai-financial-automation/ai-financial-automation-software`)

---

## The 8 Pillars

### Pillar 1 — AI Financial Automation
- **URL:** `/ai-financial-automation`
- **Primary keyword:** `ai financial automation`
- **Page intent:** Hub explaining what AI-powered financial automation is, what it covers, and which FinMark.ai products solve it. Brand-defining page — second-most-important page after the homepage.
- **Word count target:** 2,500–3,500
- **Sections:** What it is → Core capabilities → Industries → Use cases → How FinMark.ai delivers it → FAQ
- **Cluster pages (8):**
  1. `ai for finance` → `/ai-financial-automation/ai-for-finance`
  2. `financial automation software` → `/ai-financial-automation/financial-automation-software`
  3. `ai finance platform` → `/ai-financial-automation/ai-finance-platform`
  4. `intelligent finance automation` → `/ai-financial-automation/intelligent-finance-automation`
  5. `ai accounting automation` → `/ai-financial-automation/ai-accounting-automation`
  6. `ai finance tools` → `/ai-financial-automation/ai-finance-tools`
  7. `ai for cfo` → `/solutions/ai-for-cfo` *(lives under Solutions, but counts toward this pillar)*
  8. `intelligent finance automation` → `/ai-financial-automation/intelligent-finance-automation`

### Pillar 2 — Compliance Automation / RegTech
- **URL:** `/compliance-automation`
- **Primary keyword:** `compliance automation software`
- **Page intent:** Hub for compliance, KYC, AML, regulatory reporting. High commercial intent — these queries indicate someone evaluating tools.
- **Word count target:** 2,500–3,500
- **Cluster pages (9):**
  1. `regulatory compliance automation`
  2. `regtech platform`
  3. `kyc automation`
  4. `aml compliance software`
  5. `automated kyc aml`
  6. `continuous compliance monitoring`
  7. `regulatory reporting automation`
  8. `audit automation`
  9. `compliance management system`

### Pillar 3 — AI Fraud Detection & Risk Management
- **URL:** `/ai-fraud-detection`
- **Primary keyword:** `ai fraud detection`
- **Page intent:** Covers fraud detection, transaction monitoring, AI-driven risk modeling. Highly competitive but high-intent.
- **Word count target:** 2,500–3,500
- **Cluster pages (9):**
  1. `fraud detection software`
  2. `machine learning fraud detection`
  3. `real time fraud detection`
  4. `transaction monitoring software`
  5. `payment fraud prevention`
  6. `ai risk management`
  7. `risk management software`
  8. `credit risk modeling`
  9. `enterprise risk management software`

### Pillar 4 — Payment Processing Automation
- **URL:** `/payment-processing-automation`
- **Primary keyword:** `payment processing automation`
- **Page intent:** Covers AP/AR automation, payment orchestration, multi-currency. Strong B2B fintech intent.
- **Word count target:** 2,500–3,000
- **Cluster pages (9):**
  1. `automated payment processing`
  2. `payment orchestration platform`
  3. `multi currency payment processing`
  4. `accounts payable automation`
  5. `accounts receivable automation`
  6. `ap automation software`
  7. `ar automation software`
  8. `global payment infrastructure`
  9. `intelligent payment routing`

### Pillar 5 — AI Financial Reporting & Analytics
- **URL:** `/ai-financial-reporting`
- **Primary keyword:** `ai financial reporting`
- **Page intent:** Reporting automation, real-time financial analytics, dashboards, financial close.
- **Word count target:** 2,500–3,000
- **Cluster pages (9):**
  1. `automated financial reporting`
  2. `real time financial analytics`
  3. `financial analytics software`
  4. `financial dashboard software`
  5. `ai powered analytics`
  6. `self service finance analytics`
  7. `natural language financial reporting`
  8. `financial close automation`
  9. `management reporting automation`

### Pillar 6 — Unified Financial Data Platform
- **URL:** `/unified-financial-data-platform`
- **Primary keyword:** `unified data platform for finance`
- **Page intent:** Data integration, single source of truth, ERP/API integration, financial data warehouse. Lower volume but anchor for the platform story.
- **Word count target:** 2,000–2,800
- **Cluster pages (9):**
  1. `financial data integration`
  2. `finance data platform`
  3. `single source of truth finance`
  4. `etl for financial data`
  5. `financial data warehouse`
  6. `erp data integration`
  7. `finance api integration`
  8. `master data management finance`
  9. *(reserved for future growth)*

### Pillar 7 — Predictive Financial Forecasting
- **URL:** `/predictive-financial-forecasting`
- **Primary keyword:** `predictive financial forecasting`
- **Page intent:** AI cash-flow forecasting, FP&A automation, scenario planning. CFO-targeted.
- **Word count target:** 2,500–3,000
- **Cluster pages (9):**
  1. `ai cash flow forecasting`
  2. `ml forecasting finance`
  3. `revenue forecasting ai`
  4. `demand forecasting software`
  5. `scenario planning software`
  6. `fp&a automation`
  7. `financial planning and analysis software`
  8. `driver based forecasting`
  9. `rolling forecast software`

### Pillar 8 — Workflow Automation for Finance & Ops
- **URL:** `/financial-workflow-automation`
- **Primary keyword:** `financial workflow automation`
- **Page intent:** Captures the "operational" side of FinMark.ai's positioning. RPA, intelligent process automation, P2P/O2C/R2R.
- **Word count target:** 2,500–3,000
- **Cluster pages (9):**
  1. `finance process automation`
  2. `rpa in finance`
  3. `intelligent process automation`
  4. `back office automation`
  5. `operations automation software`
  6. `procure to pay automation`
  7. `order to cash automation`
  8. `record to report automation`

---

## Solutions Hub

A separate `/solutions/` parent that holds **persona pages** (CFO, controller, finance team) and **industry pages** (banks, fintech, SaaS, ecommerce, enterprise). These pages compete for navigational/long-tail commercial intent and link laterally to *all 8 pillars*.

### Persona pages
| URL | Primary keyword |
|---|---|
| `/solutions/for-cfo` | `ai finance for cfo` |
| `/solutions/for-controllers` | `ai finance for controllers` |
| `/solutions/for-finance-teams` | `ai finance for finance teams` |

### Industry pages
| URL | Primary keyword |
|---|---|
| `/solutions/banks` | `ai finance for banks` |
| `/solutions/fintech-startups` | `ai finance for fintech startups` |
| `/solutions/saas` | `ai finance for saas companies` |
| `/solutions/ecommerce` | `ai finance for ecommerce` |
| `/solutions/enterprises` | `ai finance for enterprises` |
| `/solutions/small-business` | `finance automation for small business` |

---

## Blog (`/blog/...`)

39 supporting posts spread across the 8 pillars. Each post:
- Targets ONE long-tail keyword (informational intent)
- Links UP to its parent cluster (and sometimes to its parent pillar)
- Uses "related posts" to interlink with 2-3 other blog posts in the *same* pillar

The blog is the **link-equity feeder** for pillars and clusters. Every blog post should pass equity upward.

---

## Static / Conversion pages

| URL | Purpose |
|---|---|
| `/` | Homepage — links to all 8 pillars |
| `/about` | Brand, founders, mission (already partially built) |
| `/pricing` | P0 — required for `finmark ai pricing` brand query |
| `/contact` | Lead form, sales contact |
| `/demo` | Demo request — primary CTA destination |
| `/customers` | Logos, social proof |
| `/case-studies` | One per industry, links to industry solution pages |
| `/resources` | Hub for blog + downloadable assets |

---

## URL & Page Inventory (Total)

| Type | Count |
|---|---|
| Homepage | 1 |
| Pillars | 8 |
| Clusters | 73 |
| Supporting (blog) | 39 |
| Persona/Industry/Solution | 9 |
| Static | 7 |
| **Total pages** | **137** |

---

## Phasing — Don't Build All 137 At Once

| Phase | Pages | Keywords (priority) | Goal |
|---|---|---|---|
| **Phase 0** | 8 pillars + Homepage + About + Pricing + Demo + Contact | All P0 pillar terms | Establish hub structure, capture brand + commercial intent |
| **Phase 1** | All P0 cluster pages (~24) + 2 persona pages + 1 case study | High-priority commercial keywords | Begin earning rankings, prove the model works |
| **Phase 2** | All P1 cluster pages (~30) + remaining persona/industry pages | Mid-priority commercial keywords | Expand surface area |
| **Phase 3** | All P2 cluster pages + ~20 supporting blog posts | Long-tail informational | Earn link equity, attract backlinks |
| **Phase 4** | Remaining blog posts + comparison pages + alternative pages | Long-tail + competitive | Saturate the topical space |

**Recommended cadence:** Don't compress this. Pillars first (Phase 0). Then ship 4–6 new pages per week through Phase 1–4. Quality > quantity.

---

## Anti-patterns to avoid

1. **Don't build orphan pages** — every page MUST be linked from at least one other page in the site (ideally its pillar or breadcrumb)
2. **Don't duplicate cluster content across pillars** — if two pillars want to claim a cluster, pick one and make the other link to it contextually
3. **Don't link every page to every other page** — that dilutes link equity. Be intentional.
4. **Don't optimize a cluster for the same keyword as its pillar** — that's keyword cannibalization
5. **Don't change URL slugs after launch** — every change costs link equity. Lock the slugs in `keywords.csv` before publishing
6. **Don't write thin pages** — Google's Helpful Content System penalizes <500 word pages on commercial topics. Pillars: 2,500+ words. Clusters: 1,200+ words. Blog: 1,000+ words.
