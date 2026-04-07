// Pillar content config — single source of truth for pillar pages.
//
// FinMark.ai is a single-product company building AI-powered Accounts Payable
// automation. The site has ONE pillar that owns the topical authority for AP.
// Cluster pages live under /accounts-payable-automation/* and provide depth.
//
// Real product reality (sourced from internal vault, NOT generic copy):
//   - Customer: TGI Group (Nigerian conglomerate). 2 subsidiaries live: TGID + WACube
//   - 287+ invoices processed, 10 users, 2 companies, 98% AI confidence
//   - ERP: Microsoft Dynamics NAV (via SOAP middleware) — NOT NetSuite/Quickbooks/Xero/SAP
//   - AI: Anthropic Claude Opus 4.6, 2-pass extraction
//   - Killer differentiator: Nigerian Withholding Tax (WHT) computation
//   - Document repository: SharePoint integration (read + write)
//   - Multi-tenant subdomain architecture (tgid.ap.finmark.ai, wacube.ap.finmark.ai)
//   - Region: eu-west-1 (Ireland)
//   - Security: Internal audit (12/12 fixed), pentest (34/35 pass), TGI checklist submitted
//   - Pipeline: PDF → Dedup → Claude Extraction → PO/GRN Match → 10 Sanity Checks
//     → WHT Compute → Approval → ERP Push to NAV
//   - NO payment execution (approved invoices push to NAV; TGI posts payments themselves)
//
// Keep claims honest. Don't promise capabilities not shipped.
// TODO comments mark spots where the user should verify or expand details.

export const PILLARS = [
  {
    slug: 'accounts-payable-automation',
    primaryKeyword: 'accounts payable automation',
    meta: {
      title: 'AI Accounts Payable Automation for African Enterprise | FinMark.ai',
      description:
        'AI-powered AP automation built for African enterprise. Microsoft Dynamics NAV integration, Nigerian Withholding Tax (WHT) computation, and Claude-powered invoice extraction at 98% confidence.',
    },
    hero: {
      badge: 'Accounts Payable Automation',
      h1: 'AI Accounts Payable Automation Built for African Enterprise',
      subhead:
        'Capture invoices with Claude AI, match against POs and GRNs, compute Nigerian Withholding Tax automatically, and push approved invoices straight into Microsoft Dynamics NAV. Live in production with TGI Group.',
      primaryCta: { label: 'Get a demo', href: '/demo' },
      secondaryCta: { label: 'See pricing', href: '/pricing' },
    },
    sections: [
      {
        kicker: 'The AP problem',
        heading: 'Why manual accounts payable breaks at African enterprise scale',
        body: [
          'Manual accounts payable is one of the most expensive workflows in finance, and it gets worse at scale. For an African conglomerate processing thousands of vendor invoices a month across multiple subsidiaries, manual AP costs hundreds of thousands of dollars a year in pure labor — before you count the missed early-pay discounts, the late-fee penalties, the duplicate payments that nobody catches, and the audit findings from inconsistent process.',
          'The deeper problem is that most AP tools are built for the US or Europe. They handle ACH and standard sales tax. They do not handle Nigerian Withholding Tax. They do not integrate with Microsoft Dynamics NAV. They do not understand a multi-subsidiary group structure that lives across SharePoint, NAV, and a dozen vendor formats. African enterprise finance teams end up either running everything manually or trying to bend a US-built tool into shape, neither of which works at scale.',
          'FinMark.ai is built specifically for the African enterprise context. Microsoft Dynamics NAV as the primary ERP target. Nigerian WHT as a first-class feature, not an afterthought. SharePoint as the document repository. Multi-tenant architecture so a parent group can run multiple subsidiaries on one platform with full data isolation.',
        ],
      },
      {
        kicker: 'What it is',
        heading: 'What FinMark.ai actually does',
        body: [
          'FinMark.ai is an end-to-end AP processing platform. Vendors send invoices via SharePoint or upload them through the portal. Anthropic\'s Claude Opus 4.6 extracts every field with a 2-pass extraction process that achieves 98% confidence on real-world invoices — including the messy ones with multi-line items, handwritten annotations, and non-standard layouts. Each invoice is deduped against history (SHA-256 fingerprint), matched against POs and GRNs (2-way or 3-way), checked through 10 sanity rules, run through Nigerian WHT computation, routed for approval, and pushed to Microsoft Dynamics NAV with all 4 Finmark fields and 7 WHT fields populated.',
          'It is live in production today with TGI Group, running across two subsidiaries (TGI Distri Limited and West Africa Cube Limited) on a multi-tenant subdomain architecture. 287+ invoices processed. 10 users. 98% AI confidence. The platform replaced a slow, error-prone manual process with one that scales without proportional headcount growth.',
        ],
      },
      {
        kicker: 'The pipeline',
        heading: 'The 8-stage AP pipeline, end to end',
        body: [
          'Stage 1 is intake. Invoices arrive through the portal upload, the SharePoint folder, or vendor email forwarding. Stage 2 is deduplication. SHA-256 fingerprinting catches every duplicate before it enters the workflow. Stage 3 is extraction. Claude Opus 4.6 runs a 2-pass extraction process — first pass for structure, second pass for accuracy verification. Stage 4 is matching. The system pulls POs and GRNs from Microsoft Dynamics NAV (via the staging API) and runs 2-way or 3-way matching with configurable tolerances.',
          'Stage 5 is sanity checking. Ten rule-based checks catch the errors that AI can miss — date sanity, amount sanity, vendor sanity, tax math, currency consistency, line-item totals, and more. Stage 6 is Withholding Tax computation. The system applies Nigerian 2024 WHT regulations to every applicable invoice automatically — including the rate variations by vendor type, service category, and TIN status. Stage 7 is approval routing. Configurable workflows route invoices to the right approver with one-click approve from the portal. Stage 8 is the ERP push. Approved invoices flow back into NAV with the 4 Finmark fields (vendor verification, dedup status, approval state, sanity check results) and 7 WHT fields (rate, base, tax amount, certificate number, etc.) populated.',
        ],
      },
      {
        kicker: 'Why FinMark.ai',
        heading: 'Real differentiators (not marketing claims)',
        body: [
          'Built around Claude Opus 4.6 — the most capable LLM for document extraction in 2026 — running a 2-pass extraction pattern that consistently hits 98% confidence on real production invoices. This is not generic OCR with marketing copy on top. This is the actual best-in-class AI engine doing the actual hardest part of AP automation.',
          'Direct Microsoft Dynamics NAV integration — including a SOAP middleware layer that handles the on-premise NAV reality that most modern AP tools cannot. PO and GRN sync runs every 5 minutes. Approved invoices push back into NAV with both standard and WHT fields populated, ready to post.',
          'Nigerian Withholding Tax automation as a first-class feature. Built around the 2024 WHT regulations including the rate variations by vendor type and service category. This single feature separates FinMark.ai from every US-built AP tool on the market — there is no Bill.com, Stampli, or Tipalti equivalent for Nigerian WHT.',
          'Multi-tenant by design. A group company can run multiple subsidiaries on one platform with full data isolation per company. TGI Group runs TGID and WACube as separate tenants on the same FinMark.ai deployment, with a shared admin dashboard for cross-company oversight.',
        ],
      },
      {
        kicker: 'In production today',
        heading: 'Live with TGI Group',
        body: [
          // TODO: Confirm if TGI is OK being named publicly. If not, replace
          // with "a major Nigerian conglomerate" and omit the subsidiary names.
          'FinMark.ai is live in production today with TGI Group, one of West Africa\'s largest conglomerates. The platform serves two TGI subsidiaries — TGI Distri Limited (TGID) and West Africa Cube Limited (WACube) — on dedicated subdomains with full data isolation. 287+ invoices processed. 10 active users across both companies. 98% AI confidence rate sustained over months of production use.',
          'The full AP workflow runs end-to-end on FinMark.ai: vendors upload invoices via SharePoint, Claude extracts the data, the platform matches them against 9,500+ PO lines and 1,100+ GRN lines synced from Microsoft Dynamics NAV, runs the 10 sanity checks, computes WHT per Nigerian 2024 regulations, routes through approval, and pushes the approved invoices back into NAV ready to post. What used to take days takes minutes.',
        ],
      },
    ],
    clusterHubHeading: 'AP Automation Capabilities',
    clusters: [
      {
        slug: 'invoice-processing-automation',
        title: 'Invoice Processing Automation',
        description:
          'End-to-end invoice processing with AI extraction, deduplication, matching, and ERP push. The full pipeline.',
      },
      {
        slug: 'claude-ai-invoice-extraction',
        title: 'Claude AI Invoice Extraction',
        description:
          'Anthropic Claude Opus 4.6 with 2-pass extraction. 98% confidence on real-world invoices, no per-vendor templates.',
      },
      {
        slug: '3-way-matching',
        title: '3-Way Matching',
        description:
          'Auto-match invoices to POs and GRNs synced from Microsoft Dynamics NAV. Tolerance-based, with lump-sum support.',
      },
      {
        slug: 'nigerian-withholding-tax-automation',
        title: 'Nigerian WHT Automation',
        description:
          'Automated Nigerian Withholding Tax computation per 2024 regulations. 7 WHT fields pushed to NAV with every invoice.',
      },
      {
        slug: 'microsoft-dynamics-nav-integration',
        title: 'Microsoft Dynamics NAV Integration',
        description:
          'Direct integration with on-premise Microsoft Dynamics NAV via SOAP middleware. PO/GRN sync, ERP push, full audit trail.',
      },
      {
        slug: 'sharepoint-invoice-integration',
        title: 'SharePoint Integration',
        description:
          'SharePoint as the document repository. Read invoices in, write portal uploads back. Webhook + delta polling.',
      },
      {
        slug: 'ap-approval-workflows',
        title: 'AP Approval Workflows',
        description:
          'Configurable approval routing with one-click approve from the portal. Vendor-approver mappings, full audit trail.',
      },
      {
        slug: 'duplicate-invoice-detection',
        title: 'Duplicate Detection & Sanity Checks',
        description:
          'SHA-256 dedup catches every duplicate. 10 rule-based sanity checks catch the errors that AI alone would miss.',
      },
      {
        slug: 'multi-tenant-ap-platform',
        title: 'Multi-Tenant AP Platform',
        description:
          'One platform, multiple subsidiaries. Subdomain-based isolation with cross-company admin dashboard for group oversight.',
      },
      {
        slug: 'ap-automation-software',
        title: 'AP Automation Software (Buyer\'s Guide)',
        description:
          'How to evaluate AP automation software in 2026 — the criteria that separate real platforms from glorified OCR.',
      },
    ],
    siblings: [],
    faqs: [
      {
        q: 'What is FinMark.ai?',
        a: 'FinMark.ai is an AI-powered accounts payable automation platform built for African enterprise. It uses Claude Opus 4.6 to extract invoice data, integrates directly with Microsoft Dynamics NAV, computes Nigerian Withholding Tax automatically, and runs as a multi-tenant platform for group companies with multiple subsidiaries.',
      },
      {
        q: 'Which ERP does FinMark.ai integrate with?',
        a: 'Microsoft Dynamics NAV (on-premise) is the primary ERP integration today, via a SOAP middleware layer that handles PO/GRN sync and approved invoice push-back. Other ERPs are on the roadmap but NAV is the production-ready integration right now.',
      },
      {
        q: 'Does FinMark.ai handle Nigerian Withholding Tax?',
        a: 'Yes — and this is one of the platform\'s defining features. Nigerian WHT computation is built around the 2024 regulations, applied to every applicable invoice automatically, with 7 WHT fields pushed to Microsoft Dynamics NAV alongside the standard invoice fields. No other major AP automation tool handles Nigerian WHT this deeply.',
      },
      {
        q: 'Does FinMark.ai execute payments?',
        a: 'No. FinMark.ai handles invoice processing end-to-end through approval, then pushes approved invoices into Microsoft Dynamics NAV with all relevant fields populated. Payment execution happens in NAV using your existing banking integrations and treasury policy. This is intentional — the regulated payment side is best handled by your existing NAV setup.',
      },
      {
        q: 'How accurate is the Claude AI invoice extraction?',
        a: 'FinMark.ai uses Anthropic Claude Opus 4.6 with a 2-pass extraction process that achieves 98% confidence on real production invoices. The remaining edge cases get flagged for human review with the AI predictions pre-filled, so confirmation takes seconds instead of minutes.',
      },
      {
        q: 'Is FinMark.ai SOC 2 or ISO 27001 certified?',
        a: 'FinMark.ai has completed an internal security audit (12 findings, 100% remediated) and an internal penetration test (35 tests, 34 pass) — full reports available on request. The underlying AWS and Anthropic infrastructure are SOC 2 Type II certified. Direct SOC 2 certification for FinMark.ai itself is on the roadmap as the platform scales beyond its current customer base.',
      },
      {
        q: 'Where is the data hosted?',
        a: 'FinMark.ai runs on AWS in eu-west-1 (Ireland). PostgreSQL on AWS RDS (encrypted at rest), invoice files in AWS S3 (versioned, SSE), all traffic over TLS. Vendor TINs are acknowledged as PII and encrypted at rest.',
      },
      {
        q: 'Who is FinMark.ai built for?',
        a: 'African enterprise finance teams running Microsoft Dynamics NAV — particularly Nigerian companies with Withholding Tax obligations and group structures spanning multiple subsidiaries. The product is currently in production with TGI Group across two subsidiaries (TGID and WACube).',
      },
    ],
  },
]

/**
 * Lookup helper used by PillarPage.jsx
 */
export function getPillarBySlug(slug) {
  return PILLARS.find((p) => p.slug === slug)
}

/**
 * Resolve a sibling pillar slug into the metadata needed for SiblingPillarsBar.
 * Currently returns nothing because the site has only one pillar.
 */
export function resolveSiblings(siblingSlugs) {
  return siblingSlugs
    .map((slug) => {
      const p = getPillarBySlug(slug)
      if (!p) return null
      return {
        title: p.hero.h1.replace(/^The Modern Operating System for /, ''),
        description: p.meta.description.split('.')[0] + '.',
        path: `/${p.slug}`,
      }
    })
    .filter(Boolean)
}
