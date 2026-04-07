// Pillar content config — single source of truth for pillar pages.
//
// FinMark.ai is a Financial Automation company for African enterprise.
// Today's product is AI Accounts Payable automation built for Microsoft
// Dynamics NAV. AP is the first product in the platform; more will follow
// once each one is real, shipping, and proven at a paying customer.
//
// All copy is OUTCOME-FOCUSED — what the buyer gets, not how the system
// is built internally. No "SOAP middleware", no "every 5 minutes", no
// "SHA-256 fingerprinting", no "2-pass extraction", no internal field counts.
// We don't name the underlying LLM provider — the model is the moat and
// stays opaque. Sophisticated buyers can ask under NDA if they want.
//
// Real product context (sourced from internal vault, NOT promised on website):
//   - Live with TGI Group (Nigerian conglomerate). 2 subsidiaries (TGID + WACube)
//   - Multi-subsidiary support with subdomain isolation
//   - High AI extraction accuracy sustained in production
//   - Direct on-premise Microsoft Dynamics NAV integration
//   - Nigerian WHT computation per current regulations
//   - SharePoint integration for document repositories
//   - AWS eu-west-1 hosting, encrypted at rest and in transit
//   - Internal security audit + pentest complete
//
// TODO comments mark spots where the user should verify or expand details
// before they get indexed by Google.

export const PILLARS = [
  {
    slug: 'accounts-payable-automation',
    primaryKeyword: 'accounts payable automation',
    meta: {
      title: 'AP Automation for Microsoft Dynamics NAV | FinMark.ai',
      description:
        'AI-powered accounts payable automation for Nigerian enterprise running Microsoft Dynamics NAV. Live in production at TGI Group. Nigerian Withholding Tax computed automatically.',
    },
    hero: {
      badge: 'Accounts Payable Automation',
      h1: 'AP Automation for Microsoft Dynamics NAV',
      subhead:
        'Live in production at TGI Group. Nigerian Withholding Tax computed automatically. Approved invoices pushed straight into NAV. Built by Nigerian founders for Nigerian enterprise.',
      primaryCta: { label: 'Book a 30-min call', href: '/demo' },
      secondaryCta: { label: 'See pricing', href: '/pricing' },
    },
    sections: [
      {
        kicker: 'Why we exist',
        heading: 'No AP automation tool was built for Nigerian enterprise running NAV',
        body: [
          'We started building FinMark.ai because TGI Group\'s CFO told us no AP automation tool on the market handled Nigerian Withholding Tax inside Microsoft Dynamics NAV. The Bill.coms and Tipaltis of the world were built for US sales tax and cloud accounting systems. None of them spoke NAV. None of them computed Nigerian WHT. The Nigerian conglomerates running NAV were stuck doing AP by hand or bending US-built tools into shapes they were never designed for.',
          'So we built it for them. We spent months in TGI\'s finance team understanding how invoices actually arrive, how matching breaks down for telecom and marketing categories, how WHT certificates get filed, how the AP team uses NAV day to day. The result is a platform that now runs across two TGI subsidiaries in production — solving the AP problem the way Nigerian finance teams actually need it solved.',
        ],
      },
      {
        kicker: 'In production',
        heading: 'Live at TGI Group across two subsidiaries',
        body: [
          'FinMark.ai is live in production today at TGI Group, one of West Africa\'s largest conglomerates. The platform handles AP for TGI Distri Limited (TGID) and West Africa Cube Limited (WACube) on dedicated subdomains, with full data isolation between entities and a cross-company admin view for group oversight. AP teams across both subsidiaries process invoices through FinMark.ai every working day.',
          'This is not a pilot, not a sandbox, not a curated demo. It is the real production AP workflow for a real Nigerian conglomerate, processing real invoices into real NAV instances. Everything described on this page is something we ship today, not something on a roadmap.',
        ],
      },
      {
        kicker: 'How it works',
        heading: 'From invoice arrival to NAV posting, hands-free',
        body: [
          'Vendors send invoices to your SharePoint folder or upload them through the FinMark.ai portal. Our AI reads the invoice in any format — PDF, scanned document, photo, email — without any per-vendor template setup. Duplicates are caught at the door. The platform pulls your purchase orders and goods receipts directly from Microsoft Dynamics NAV and runs the matching automatically, including the messy lump-sum cases that break generic AP tools.',
          'Sanity checks catch the things AI alone would miss — vendor verification, line-item math, plausibility checks, near-duplicate detection. Nigerian Withholding Tax is computed automatically per the current regulations, with the right rate for each vendor type and service category. Approval workflows route the invoice to the right approver with one-click approve. Approved invoices push straight into NAV with both the standard fields and the WHT fields populated, ready for your AP team to post.',
        ],
      },
      {
        kicker: 'Why FinMark.ai',
        heading: 'Why this is different from Bill.com, Tipalti, and the rest',
        body: [
          'The major US AP automation tools are excellent at what they do — but what they do is built for US sales tax and cloud accounting systems. They do not handle on-premise Microsoft Dynamics NAV well. They do not handle Nigerian Withholding Tax at all. They do not handle the multi-subsidiary group structures that are standard in African enterprise. For a Nigerian conglomerate running NAV, the choice has historically been: use a US tool and run WHT manually outside it (defeating the automation), or run AP entirely by hand.',
          'FinMark.ai is the third option. Built specifically for the African enterprise context. Microsoft Dynamics NAV as the primary integration, not an afterthought. Nigerian WHT as a first-class feature, not a workaround. Multi-tenant by design for group company structures. The same product TGI Group runs in production, available to other Nigerian groups with similar AP workflows.',
        ],
      },
      {
        kicker: 'The vision',
        heading: 'AP today. Financial Automation tomorrow.',
        body: [
          'FinMark.ai is the start of a broader Financial Automation platform built for African enterprise. AP automation is the first product because AP is where the pain is loudest — and because building one product really well at one paying customer is the only way to earn the right to build the next one.',
          'More products will follow as the company grows. But not by claiming them on a website before they exist. Every product on FinMark.ai will be real, shipping, and proven at a paying customer first. AP is here today. The rest is what comes after we earn it.',
        ],
      },
    ],
    clusterHubHeading: 'AP Automation Capabilities',
    clusters: [
      {
        slug: 'invoice-processing-automation',
        title: 'Invoice Processing',
        description:
          'From PDF to NAV, hands-free. The full AP workflow in one platform.',
      },
      {
        slug: 'ai-invoice-extraction',
        title: 'AI Invoice Extraction',
        description:
          'Read any invoice format your vendors send. No per-vendor templates required.',
      },
      {
        slug: '3-way-matching',
        title: '3-Way Matching',
        description:
          'Auto-match invoices against POs and GRNs from NAV. Handles lump-sum and ratio-based matching.',
      },
      {
        slug: 'nigerian-withholding-tax-automation',
        title: 'Nigerian WHT Automation',
        description:
          'Withholding Tax computed automatically per the current regulations and pushed to NAV.',
      },
      {
        slug: 'microsoft-dynamics-nav-integration',
        title: 'Microsoft Dynamics NAV Integration',
        description:
          'Direct integration with your on-premise NAV. Built for the African enterprise reality.',
      },
      {
        slug: 'sharepoint-invoice-integration',
        title: 'SharePoint Integration',
        description:
          'Use SharePoint as your AP document repository. We read invoices in and write back.',
      },
      {
        slug: 'ap-approval-workflows',
        title: 'AP Approval Workflows',
        description:
          'Vendor-approver mapping, configurable thresholds, full audit trail for every action.',
      },
      {
        slug: 'multi-tenant-ap-platform',
        title: 'For Group Companies',
        description:
          'Run multiple subsidiaries on one platform with full isolation and cross-company oversight.',
      },
      {
        slug: 'duplicate-invoice-detection',
        title: 'Duplicate Detection & Sanity Checks',
        description:
          'Catch duplicates and the errors AI alone would miss before they reach approval.',
      },
      {
        slug: 'ap-automation-software',
        title: 'AP Automation Software (Buyer\'s Guide)',
        description:
          'How to evaluate AP automation software for African enterprise running NAV.',
      },
    ],
    siblings: [],
    faqs: [
      {
        q: 'What is FinMark.ai?',
        a: "FinMark.ai is a Financial Automation company for African enterprise. Our current product is AI-powered accounts payable automation built for Nigerian enterprise running Microsoft Dynamics NAV. We're live in production at TGI Group across two subsidiaries.",
      },
      {
        q: 'Which ERP does FinMark.ai integrate with?',
        a: 'Microsoft Dynamics NAV (on-premise) is the production-supported integration today. Other ERPs are not currently in scope. If you run a different ERP we will tell you that on the first call instead of letting you find out after you sign.',
      },
      {
        q: 'Does FinMark.ai handle Nigerian Withholding Tax?',
        a: 'Yes — and this is one of our defining features. WHT is computed automatically for every applicable invoice with the right rate based on vendor type and service category, then pushed back into Microsoft Dynamics NAV alongside the standard invoice fields. No major US AP automation tool handles Nigerian WHT this way.',
      },
      {
        q: 'Does FinMark.ai execute payments?',
        a: 'No. FinMark.ai handles invoice processing end-to-end through approval, then pushes the approved invoice into Microsoft Dynamics NAV. Payment execution stays inside NAV with your existing banking setup. This is intentional — the regulated payment side is best handled by your existing NAV controls.',
      },
      {
        q: 'How accurate is the AI invoice extraction?',
        a: 'High accuracy on real production invoices, sustained in production at TGI Group across thousands of documents over months. The remaining edge cases get flagged for human review with the AI predictions pre-filled, so confirmation takes seconds.',
      },
      {
        q: 'Is FinMark.ai SOC 2 or ISO 27001 certified?',
        a: 'Not directly yet. The underlying AWS and AI infrastructure we run on are SOC 2 Type II. We have completed an internal security audit (12 findings, 100% remediated) and an internal penetration test (35 tests, 34 pass). Direct SOC 2 certification for FinMark.ai itself is something we will pursue as the customer base grows. Both reports are available under NDA.',
      },
      {
        q: 'Where is the data hosted?',
        a: 'AWS in eu-west-1 (Ireland). Encrypted at rest, encrypted in transit, with a managed database backed up daily. Vendor TINs are acknowledged as PII and protected accordingly.',
      },
      {
        q: 'Who is FinMark.ai built for?',
        a: 'Nigerian and African enterprise finance teams running Microsoft Dynamics NAV — particularly groups with Withholding Tax obligations and multiple subsidiaries. We are currently in production with TGI Group across two subsidiaries (TGI Distri Limited and West Africa Cube Limited).',
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
