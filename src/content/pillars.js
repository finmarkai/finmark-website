// Pillar content config — single source of truth for pillar pages.
//
// FinMark.ai is a single-product company building AI-powered Accounts Payable
// automation. The site has ONE pillar that owns the topical authority for AP.
// Cluster pages live under /accounts-payable-automation/* and provide depth.
//
// To add a new pillar (when you ship more products): append a new entry.
// PillarPage.jsx renders any pillar from this config — no per-page component needed.
//
// IMPORTANT: Keep claims honest. Don't promise capabilities you don't ship.
// TODO comments mark spots where the user should fill in real specifics.

export const PILLARS = [
  {
    slug: 'accounts-payable-automation',
    primaryKeyword: 'accounts payable automation',
    meta: {
      title: 'AI Accounts Payable Automation Software | FinMark.ai',
      description:
        'AI-powered accounts payable automation that takes invoice processing from days to minutes. Capture, code, approve, and pay — automatically. Built for modern finance teams.',
    },
    hero: {
      badge: 'Accounts Payable Automation',
      h1: 'AI Accounts Payable Automation, From Invoice to Payment',
      subhead:
        'Capture invoices in any format, code them automatically, route them through approval, and pay vendors on time — all in one intelligent platform built for modern finance teams.',
      primaryCta: { label: 'Get a demo', href: '/demo' },
      secondaryCta: { label: 'See pricing', href: '/pricing' },
    },
    sections: [
      {
        kicker: 'The AP problem',
        heading: 'Why manual accounts payable is broken at scale',
        body: [
          'Manual accounts payable is one of the most expensive workflows in finance. Industry benchmarks put the cost at $9-15 per invoice once you account for capture, coding, approval routing, payment execution, and reconciliation. For a company processing 5,000 invoices a month, that adds up to half a million dollars a year just to pay your vendors.',
          'It is also slow. Manual AP cycles average 10-25 days from invoice receipt to payment. The result is missed early-pay discounts, frustrated vendors, late-fee penalties, and a finance team that spends most of its week chasing approvals and tracking down exceptions instead of doing actual financial analysis.',
          'The tools that promised to fix this — basic OCR, rules-based workflow engines, generic RPA — broke the moment something unexpected happened. A new vendor invoice format. A field mismatch. A pop-up that the script did not anticipate. AP teams ended up babysitting bots that were supposed to free them up.',
        ],
      },
      {
        kicker: 'What it is',
        heading: 'What AI accounts payable automation actually does',
        body: [
          'Accounts payable automation is software that handles the full invoice-to-payment lifecycle automatically. AI-powered AP automation goes further: it reads invoices in any format (PDF, image, email, EDI), predicts the right GL coding from your history, runs them through your approval policy, screens for fraud and duplicates, and executes the payment on the right rail — without the hand-coded scripts that older AP tools depend on.',
          'The difference between rule-based AP automation and AI-powered AP automation is what happens at the edges. A rule-based system breaks the moment something unfamiliar shows up. An AI system handles it natively — it learns from the exception and gets better the next time. That difference compounds over thousands of invoices a month into a system that actually holds up in production.',
        ],
      },
      {
        kicker: 'How it works',
        heading: 'The full AP workflow, automated end to end',
        body: [
          'Stage 1 is capture. Invoices arrive via email, vendor portal, EDI, or direct upload. AI extracts the line items, vendor info, dates, amounts, and tax fields automatically — including from messy PDFs and scanned documents. Stage 2 is coding. Machine learning predicts the right GL account, cost center, project, and tax codes based on your history. Stage 3 is matching. Three-way match against the PO and goods receipt happens automatically; only true mismatches go to a human. Stage 4 is approval. Routing follows your policy (auto-approve under threshold, route by amount and category). Stage 5 is screening. Fraud detection catches duplicate invoices, vendor impersonation, and BEC patterns before payment. Stage 6 is execution. The right rail (ACH, wire, card, RTP, or check) is selected and the payment runs. Stage 7 is reconciliation. The payment posts to the GL and matches against bank statements automatically.',
          'Each step is logged with a full audit trail. Exceptions are handled by humans, but with full context attached so they take minutes to resolve instead of hours.',
        ],
      },
      {
        kicker: 'Why FinMark.ai',
        heading: 'How FinMark.ai approaches AP automation differently',
        body: [
          // TODO: Replace with your real differentiators. Below are generic
          // category-leading claims that any solid AP product should be able
          // to make. Replace these with the things YOUR product does that
          // others don't — pricing, market focus, specific integration, etc.
          'FinMark.ai is built around AI from the start, not bolted on top of a legacy AP product. Every step in the workflow uses machine learning where it helps — and falls back to deterministic logic where determinism matters. The result is an AP system that handles real-world messiness without breaking and that improves the more you use it.',
          'We also believe that AP automation should be fast to deploy and easy to operate. Most customers go from contract to first automated invoice in under two weeks. There is no per-user fee, so the whole finance team can use the platform without worrying about seat costs as you grow.',
        ],
      },
      {
        kicker: 'ROI',
        heading: 'The ROI math on AP automation',
        body: [
          'AP automation typically reduces processing costs from $9-15 per invoice to $2-3 per invoice — a 70-80% reduction on the labor side alone. For 5,000 invoices a month, that is $400,000-$700,000 in annual savings on processing costs. Add the captured early-pay discounts (typically 1-2% of total spend) and the reduction in late-payment penalties, and most customers see payback within 4-6 months.',
          'The harder-to-measure benefits often matter more. Faster close cycles. Better vendor relationships. Catching duplicate invoices and BEC fraud before they cost you. Freeing your AP team to do strategic work instead of data entry. None of these show up cleanly in a payback calculation but they drive most of the long-term value.',
        ],
      },
    ],
    clusterHubHeading: 'AP Automation Capabilities',
    clusters: [
      {
        slug: 'invoice-processing-automation',
        title: 'Invoice Processing Automation',
        description:
          'Capture invoices in any format and turn them into structured GL-ready data automatically — PDFs, scans, emails, EDI.',
      },
      {
        slug: 'invoice-ocr-data-extraction',
        title: 'Invoice OCR & Data Extraction',
        description:
          'Modern document AI that goes beyond basic OCR to extract structured invoice data with 95%+ accuracy on real documents.',
      },
      {
        slug: '3-way-matching',
        title: '3-Way Matching Automation',
        description:
          'Automatic three-way match against PO and goods receipt. Only true mismatches go to a human for review.',
      },
      {
        slug: 'ap-approval-workflows',
        title: 'AP Approval Workflows',
        description:
          'Configurable approval routing that auto-approves under threshold and escalates by amount, category, vendor, or department.',
      },
      {
        slug: 'vendor-payment-automation',
        title: 'Vendor Payment Automation',
        description:
          'Pay vendors on the right rail automatically — ACH, wire, card, RTP, or check. Multi-currency support included.',
      },
      {
        slug: 'ap-automation-software',
        title: 'AP Automation Software',
        description:
          'How to evaluate AP automation software in 2026. Buying criteria, common traps, and what separates real tools from demos.',
      },
      {
        slug: 'invoice-fraud-detection',
        title: 'Invoice Fraud Detection',
        description:
          'AI-powered detection of duplicate invoices, vendor impersonation, BEC attacks, and inflated amounts — caught before payment.',
      },
      {
        slug: 'ap-erp-integration',
        title: 'AP & ERP Integration',
        description:
          'Direct integrations with NetSuite, QuickBooks, Xero, SAP, and the ERP systems finance teams actually use.',
      },
      {
        slug: 'accounts-payable-software',
        title: 'Accounts Payable Software',
        description:
          'A buyer\'s guide to modern accounts payable software — categories, criteria, and the gap between AP modules and dedicated platforms.',
      },
      {
        slug: 'bill-pay-automation',
        title: 'Bill Pay Automation',
        description:
          'End-to-end bill pay automation for finance teams that want to stop scheduling payments by hand.',
      },
    ],
    siblings: [],
    faqs: [
      {
        q: 'What is accounts payable automation?',
        a: 'Accounts payable automation is software that handles the full invoice-to-payment workflow automatically — capture, coding, approval routing, payment, and reconciliation. AI-powered AP automation goes further by handling exceptions and learning from your specific invoice patterns over time.',
      },
      {
        q: 'How is FinMark.ai different from other AP automation tools?',
        // TODO: Replace with your real differentiators
        a: 'FinMark.ai is built around AI from day one, not bolted onto a legacy AP product. Every step uses machine learning where it helps and deterministic logic where determinism matters. We also have a no-per-user pricing model, so the whole finance team can use the platform without seat-cost penalties as you grow.',
      },
      {
        q: 'How accurate is AI invoice processing in 2026?',
        a: 'Modern document AI extracts structured data from invoices with 95%+ accuracy across formats, including handwritten line items, scanned PDFs, and non-standard layouts. Edge cases are flagged for human review with full context attached so resolution takes minutes, not hours.',
      },
      {
        q: 'What ERPs and accounting systems does FinMark.ai integrate with?',
        // TODO: Update this list to reflect what you ACTUALLY integrate with today
        a: 'FinMark.ai integrates with the major modern accounting and ERP systems including NetSuite, QuickBooks, Xero, and others. For systems without a direct integration, we support generic API connectors and CSV/SFTP fallback. Talk to sales for specifics on your stack.',
      },
      {
        q: 'How long does AP automation take to implement?',
        a: 'Most customers go from contract to first automated invoice in 2-4 weeks. Full deployment across your AP workflow takes 4-8 weeks. The biggest variable is ERP integration complexity — modern ERPs are faster than legacy or custom systems.',
      },
      {
        q: 'What is the typical ROI of AP automation?',
        a: 'Customers typically see 70-80% reductions in invoice processing costs (from ~$11 per invoice to ~$2), 50-70% reductions in cycle time, captured early-pay discounts of 1-2% of spend, and reduced late-payment penalties. Payback is usually within 4-6 months for companies processing more than 5,000 invoices per month.',
      },
      {
        q: 'Can AP automation prevent invoice fraud?',
        a: 'Yes. AI-based anomaly detection catches duplicate invoices, inflated amounts, vendor impersonation, and business email compromise (BEC) attacks before payment runs. This is often a hidden value of AP automation that exceeds the direct labor savings.',
      },
      {
        q: 'Is FinMark.ai SOC 2 and PCI compliant?',
        // TODO: Update with your real compliance status. If you don't have
        // these certifications yet, change the answer or remove the question.
        a: 'FinMark.ai is built around enterprise-grade security and compliance practices. Specific certification status is available on request — talk to sales for the most current details on SOC 2, ISO 27001, and other compliance frameworks.',
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
 * Will become useful when more products ship.
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
