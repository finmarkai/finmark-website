---
type: linking-matrix
---

# 🔗 Internal Linking Matrix

> The page-to-page link plan. The full version with anchor text rules lives in `/seo/internal-linking-plan.md`. This vault note is the visual / queryable version.

## The 5 Commandments of Internal Linking

1. **Cluster pages MUST link UP to their pillar** — twice, with anchor text variation
2. **Pillar pages link DOWN to clusters via a hub list** — and 3 sibling pillars contextually
3. **Pillars cross-link to RELATED pillars only** — not all
4. **Blog posts link UP to their parent cluster** — NOT directly to the pillar
5. **Solution pages link to ALL relevant pillars** — solution pages are hubs, not destinations

## Pillar Cross-Link Map

```
P1 (AI Fin Automation) ──→ P2, P5, P8
P2 (Compliance)        ──→ P3, P4, P5
P3 (Fraud)             ──→ P2, P4, P6
P4 (Payments)          ──→ P3, P2, P8
P5 (Reporting)         ──→ P7, P6, P1
P6 (Data Platform)     ──→ P5, P7, P3
P7 (Forecasting)       ──→ P5, P6, P1
P8 (Workflow)          ──→ P1, P4, P5
```

Each pillar has 3 inbound + 3 outbound sibling links → balanced ring topology.

## Per-Pillar Linking Detail

### P1 — AI Financial Automation
- **Outbound clusters:** [[ai-for-finance]], [[financial-automation-software]], [[ai-finance-platform]], [[intelligent-finance-automation]], [[ai-accounting-automation]], [[ai-finance-tools]]
- **Outbound siblings:** [[P2 - Compliance Automation]], [[P5 - AI Financial Reporting]], [[P8 - Workflow Automation]]
- **Inbound clusters:** all 6 above (2× each)
- **Inbound siblings:** P2, P5, P7, P8
- **Other inbound:** Homepage, About, Top nav, all P1 blog posts, [[03 - Solutions/for-cfo]]

### P2 — Compliance Automation
- **Outbound clusters:** [[regulatory-compliance-automation]], [[regtech-platform]], [[kyc-automation]], [[aml-compliance-software]], [[automated-kyc-aml]], [[continuous-compliance-monitoring]], [[regulatory-reporting-automation]], [[audit-automation]], [[compliance-management-system]]
- **Outbound siblings:** [[P3 - AI Fraud Detection]], [[P4 - Payment Processing Automation]], [[P5 - AI Financial Reporting]]
- **Inbound:** Homepage, all 9 clusters, P1 + P3 + P4 (sibling), P2 blog posts, [[03 - Solutions/banks]]

### P3 — AI Fraud Detection
- **Outbound clusters:** [[fraud-detection-software]], [[machine-learning-fraud-detection]], [[real-time-fraud-detection]], [[transaction-monitoring-software]], [[payment-fraud-prevention]], [[ai-risk-management]], [[risk-management-software]], [[credit-risk-modeling]], [[enterprise-risk-management-software]]
- **Outbound siblings:** [[P2 - Compliance Automation]], [[P4 - Payment Processing Automation]], [[P6 - Unified Financial Data Platform]]
- **Inbound:** Homepage, all 9 clusters, P2 + P4 + P6 (sibling), P3 blogs, banks/fintech solutions

### P4 — Payment Processing
- **Outbound clusters:** [[automated-payment-processing]], [[payment-orchestration-platform]], [[multi-currency-payment-processing]], [[accounts-payable-automation]], [[accounts-receivable-automation]], [[ap-automation-software]], [[ar-automation-software]], [[global-payment-infrastructure]], [[intelligent-payment-routing]]
- **Outbound siblings:** [[P3 - AI Fraud Detection]], [[P2 - Compliance Automation]], [[P8 - Workflow Automation]]

### P5 — AI Financial Reporting
- **Outbound clusters:** [[automated-financial-reporting]], [[real-time-financial-analytics]], [[financial-analytics-software]], [[financial-dashboard-software]], [[ai-powered-analytics]], [[self-service-finance-analytics]], [[natural-language-financial-reporting]], [[financial-close-automation]], [[management-reporting-automation]]
- **Outbound siblings:** [[P7 - Predictive Financial Forecasting]], [[P6 - Unified Financial Data Platform]], [[P1 - AI Financial Automation]]

### P6 — Unified Financial Data Platform
- **Outbound clusters:** [[financial-data-integration]], [[finance-data-platform]], [[single-source-of-truth-finance]], [[etl-for-financial-data]], [[financial-data-warehouse]], [[erp-data-integration]], [[finance-api-integration]], [[master-data-management-finance]]
- **Outbound siblings:** [[P5 - AI Financial Reporting]], [[P7 - Predictive Financial Forecasting]], [[P3 - AI Fraud Detection]]

### P7 — Predictive Financial Forecasting
- **Outbound clusters:** [[ai-cash-flow-forecasting]], [[ml-forecasting-finance]], [[revenue-forecasting-ai]], [[demand-forecasting-software]], [[scenario-planning-software]], [[fpa-automation]], [[financial-planning-and-analysis-software]], [[driver-based-forecasting]], [[rolling-forecast-software]]
- **Outbound siblings:** [[P5 - AI Financial Reporting]], [[P6 - Unified Financial Data Platform]], [[P1 - AI Financial Automation]]

### P8 — Workflow Automation
- **Outbound clusters:** [[finance-process-automation]], [[rpa-in-finance]], [[intelligent-process-automation]], [[back-office-automation]], [[operations-automation-software]], [[procure-to-pay-automation]], [[order-to-cash-automation]], [[record-to-report-automation]]
- **Outbound siblings:** [[P1 - AI Financial Automation]], [[P4 - Payment Processing Automation]], [[P5 - AI Financial Reporting]]

## Cluster linking pattern (template)

Every cluster page MUST contain:

1. Breadcrumb → pillar
2. Intro paragraph: contextual link to parent pillar (1st link)
3. Body section: contextual link to sibling cluster #1
4. Body section: contextual link to sibling cluster #2
5. Body section: cross-pillar link (where relevant)
6. Conclusion: contextual link to parent pillar (2nd link)
7. Sidebar: 2-3 sibling cluster cards
8. CTA at end: 1-2 supporting blog posts

**Total: 8-12 internal links per cluster.**

## Anchor text diversity (per target page)

| Anchor type | Share |
|---|---|
| Exact match | 20% |
| Partial match / variation | 60% |
| Branded + descriptive | 15% |
| Generic | 5% |

## Related notes
- [[Anchor Text Diversity Rules]]
- [[Pillar Cross-Link Map]]
- [[Map of Content]]
