// Pillar content config — single source of truth for pillar pages.
//
// FinMark.ai is a Financial Automation company for African enterprise.
// Today's product is AI Accounts Payable automation built for Microsoft
// ERP. AP is the first product in the platform; more will follow
// once each one is real, shipping, and proven at a paying customer.
//
// All copy is OUTCOME-FOCUSED — what the buyer gets, not how the system
// is built internally. No "SOAP middleware", no "every 5 minutes", no
// "SHA-256 fingerprinting", no "2-pass extraction", no internal field counts.
// We don't name the underlying LLM provider — the model is the moat and
// stays opaque. Sophisticated buyers can ask under NDA if they want.
//
// Real product context (sourced from internal vault, NOT promised on website):
//   - Live with a major enterprise group (Nigerian conglomerate). 2 subsidiaries (the first subsidiary + the second subsidiary)
//   - Multi-subsidiary support with subdomain isolation
//   - High AI extraction accuracy sustained in production
//   - Direct on-premise ERP integration
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
      title: 'AP Automation | FinMark.ai',
      description:
        'AI-powered accounts payable automation for Nigerian enterprise running ERP. Live in production at a major enterprise group. Nigerian Withholding Tax computed automatically.',
    },
    hero: {
      badge: 'Accounts Payable Automation',
      h1: 'AP Automation for ERP',
      subhead:
        'Live in production at a major enterprise group. Nigerian Withholding Tax computed automatically. Approved invoices pushed straight into ERP. Built by Nigerian founders for Nigerian enterprise.',
      primaryCta: { label: 'Book a 30-min call', href: '/demo' },
      secondaryCta: { label: 'See pricing', href: '/pricing' },
    },
    sections: [
      {
        kicker: 'Why we exist',
        heading: 'No AP automation tool was built for Nigerian enterprise running ERP',
        body: [
          'We started building FinMark.ai because a major enterprise group\'s CFO told us no AP automation tool on the market handled Nigerian Withholding Tax inside ERP. The Bill.coms and Tipaltis of the world were built for US sales tax and cloud accounting systems. None of them spoke ERP. None of them computed Nigerian WHT. The Nigerian conglomerates running ERP were stuck doing AP by hand or bending US-built tools into shapes they were never designed for.',
          'So we built it for them. We spent months in the client\'s finance team understanding how invoices actually arrive, how matching breaks down for telecom and marketing categories, how WHT certificates get filed, how the AP team uses ERP day to day. The result is a platform that now runs across multiple subsidiaries in production — solving the AP problem the way Nigerian finance teams actually need it solved.',
        ],
      },
      {
        kicker: 'In production',
        heading: 'Live at a major enterprise group across two subsidiaries',
        body: [
          'FinMark.ai is live in production today at a major enterprise group, one of West Africa\'s largest conglomerates. The platform handles AP for multiple subsidiaries on dedicated subdomains, with full data isolation between entities and a cross-company admin view for group oversight. AP teams across both subsidiaries process invoices through FinMark.ai every working day.',
          'This is not a pilot, not a sandbox, not a curated demo. It is the real production AP workflow for a real Nigerian conglomerate, processing real invoices into real ERP instances. Everything described on this page is something we ship today, not something on a roadmap.',
        ],
      },
      {
        kicker: 'How it works',
        heading: 'From invoice arrival to ERP posting, hands-free',
        body: [
          'Vendors send invoices to your SharePoint folder or upload them through the FinMark.ai portal. Our AI reads the invoice in any format — PDF, scanned document, photo, email — without any per-vendor template setup. Duplicates are caught at the door. The platform pulls your purchase orders and goods receipts directly from ERP and runs the matching automatically, including the messy lump-sum cases that break generic AP tools.',
          'Sanity checks catch the things AI alone would miss — vendor verification, line-item math, plausibility checks, near-duplicate detection. Nigerian Withholding Tax is computed automatically per the current regulations, with the right rate for each vendor type and service category. Approval workflows route the invoice to the right approver with one-click approve. Approved invoices push straight into ERP with both the standard fields and the WHT fields populated, ready for your AP team to post.',
        ],
      },
      {
        kicker: 'Why FinMark.ai',
        heading: 'Why this is different from Bill.com, Tipalti, and the rest',
        body: [
          'The major US AP automation tools are excellent at what they do — but what they do is built for US sales tax and cloud accounting systems. They do not handle on-premise ERP well. They do not handle Nigerian Withholding Tax at all. They do not handle the multi-subsidiary group structures that are standard in African enterprise. For a Nigerian conglomerate running ERP, the choice has historically been: use a US tool and run WHT manually outside it (defeating the automation), or run AP entirely by hand.',
          'FinMark.ai is the third option. Built specifically for the African enterprise context. ERP as the primary integration, not an afterthought. Nigerian WHT as a first-class feature, not a workaround. Multi-tenant by design for group company structures. The same product a major enterprise group runs in production, available to other Nigerian groups with similar AP workflows.',
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
    clusterHubHeading: null,
    clusters: [],
    siblings: [],
    faqs: [
      {
        q: 'What is FinMark.ai?',
        a: 'FinMark.ai is a financial automation platform for enterprise finance teams. It runs the full invoice-to-ERP workflow end to end — capturing vendor invoices in any format, matching them against live ERP data, computing withholding tax automatically, running sanity checks, and posting approved entries back into the ERP. What used to take finance teams days now takes minutes.',
      },
      {
        q: 'Which ERP does FinMark.ai integrate with?',
        a: 'FinMark.ai integrates with the major enterprise ERPs our customers run on. Integrations work against live ERP data — purchase orders, goods-received notes, vendor masters — so matching, tax logic, and posting all happen inside the same source of truth your finance team already operates on. If you run a specific ERP and want to confirm support, request a walkthrough and we\'ll validate against your instance before we talk implementation.',
      },
      {
        q: 'Does FinMark.ai handle withholding tax?',
        a: 'Yes. Withholding tax is not an add-on — it\'s computed automatically inside the core workflow, against current regulations, and written back into the ERP along with every posted invoice. Tax logic is configurable by region, so as regulations change or your operating footprint expands, the platform adapts without your finance team rebuilding spreadsheets.',
      },
      {
        q: 'Does FinMark.ai execute payments?',
        a: 'No. FinMark.ai stops at the ERP. Once invoices are captured, matched, tax-computed, sanity-checked, and approved, they post back into your ERP audit-ready for your existing payment process. Payment execution stays with your bank, your treasury, and the controls your finance and compliance teams already trust — where it belongs.',
      },
      {
        q: 'How accurate is the AI invoice extraction?',
        a: 'High — but we do not rely on AI alone. The platform runs a two-layer approach: AI extracts the invoice, and a sanity-check layer validates the output against purchase orders, goods-received notes, vendor data, and tax logic before anything reaches a human approver. That combination catches the edge cases AI alone would miss — wrong line totals, mismatched currencies, duplicate invoices, miscategorised services. What lands on a finance controller\'s desk is either clean or clearly flagged. Accuracy in production is measured per customer; we\'ll share benchmarks from comparable enterprises on a walkthrough call.',
      },
      {
        q: 'Is FinMark.ai SOC 2 or ISO 27001 certified?',
        a: 'FinMark.ai operates on infrastructure and controls aligned with enterprise-grade security standards — encryption in transit and at rest, least-privilege access, tenant isolation, audit logging, and regular penetration testing. For a full security questionnaire, request one from your point of contact.',
      },
      {
        q: 'Where is the data hosted?',
        a: 'Customer data is hosted on enterprise-grade cloud infrastructure with tenant isolation, encryption in transit and at rest, and regional data residency where required by the customer or regulation.',
      },
      {
        q: 'Who is FinMark.ai built for?',
        a: 'FinMark.ai is built for enterprise finance teams — controllers, finance directors, and CFOs — at organisations large enough that vendor invoice volume, approval hierarchies, and compliance obligations have outgrown spreadsheets and manual ERP entry. If your finance team processes hundreds of vendor invoices a month, operates inside an established ERP, and spends more time keying data than analysing it, you are in the zone FinMark.ai was designed for.',
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
