// Cluster page content config — single source of truth for all cluster pages.
//
// All clusters are children of the accounts-payable-automation pillar.
// FinMark.ai builds AP automation specifically for Nigerian enterprise running
// Microsoft Dynamics NAV.
//
// COPY RULES (apply to every cluster):
//   1. OUTCOMES, not implementation. What the buyer gets, not how it's built.
//   2. NO LLM provider names. The model is the moat — keep it opaque.
//   3. NO internal architecture details (SOAP, webhooks, polling intervals,
//      fingerprinting algorithms, internal field counts, pipeline stage numbers).
//   4. PROOF over claims. Reference TGI Group as the production customer.
//   5. HONEST scope. Don't promise what isn't shipping.
//
// Each cluster has:
//   - pillar: parent pillar slug
//   - slug: cluster URL segment
//   - primaryKeyword
//   - meta: { title, description }
//   - hero: { badge, h1, subhead }
//   - sections: ordered array of content sections
//   - relatedSiblings: 2-3 sibling cluster slugs
//   - crossPillarLink: null (one pillar)
//   - faqs: FAQ items

export const CLUSTERS = [
  // ─────────────────────────────────────────────────────────────────
  // 1. Invoice Processing Automation
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'invoice-processing-automation',
    primaryKeyword: 'invoice processing automation',
    meta: {
      title: 'Invoice Processing Automation for NAV | FinMark.ai',
      description:
        'End-to-end invoice processing for Nigerian enterprise running Microsoft Dynamics NAV. From PDF arrival to NAV posting, hands-free.',
    },
    hero: {
      badge: 'Invoice Processing',
      h1: 'Invoice Processing, From PDF to NAV',
      subhead:
        'The full AP workflow in one platform — capture, extraction, matching, validation, tax computation, approval, and ERP push. Live in production at TGI Group.',
    },
    sections: [
      {
        kicker: 'What it does',
        heading: 'What invoice processing automation actually delivers',
        body: [
          'Invoice processing automation takes invoices from arrival all the way to NAV posting without humans touching them — except to handle the small percentage of true exceptions. The version that actually works in production has to handle every step: intake, reading, matching, validation, tax computation, approval, and ERP push. Most "AP automation" tools handle one or two steps well and leave the rest to integrations and manual handoffs.',
          'FinMark.ai is built around the full pipeline. Vendors send invoices and an end-to-end automated workflow does the rest. The AP team stops rekeying invoices into NAV and starts reviewing exceptions. The same workflow runs every working day at TGI Group across two subsidiaries.',
        ],
      },
      {
        kicker: 'How it feels',
        heading: 'What this looks like for the AP team',
        body: [
          'Before automation: An AP clerk opens an invoice from the SharePoint folder, reads it, types the line items into NAV, looks up the matching PO, manually verifies the goods receipt, calculates the WHT in a spreadsheet, walks the approval up the chain, and finally posts the invoice. Multiply by 200 invoices a week and you have a department that exists primarily to do data entry.',
          'After automation: The AP clerk opens FinMark.ai, sees a queue of fully-processed invoices ready for review, scans the small handful of flagged exceptions with full context attached, clicks approve, and the invoices land in NAV. The same work that used to take all week takes a morning. The clerk\'s job changes from data entry to actual financial review — which is what they were hired to do.',
        ],
      },
      {
        kicker: 'In production',
        heading: 'Live at TGI Group',
        body: [
          'FinMark.ai is currently running this exact workflow in production at TGI Group across two subsidiaries — TGI Distri Limited and West Africa Cube Limited. AP teams in both subsidiaries process vendor invoices through the platform every working day. The pipeline has been running for months without breaking.',
          'This is not a sandbox or a curated demo. It is the actual production AP workflow for a real Nigerian conglomerate, processing real invoices into real NAV instances.',
        ],
      },
      {
        kicker: 'What it replaces',
        heading: 'What invoice processing automation replaces',
        body: [
          'It replaces the manual invoice data entry that consumes most of an AP clerk\'s week. It replaces the spreadsheet WHT computation that finance teams do separately from NAV. It replaces the back-and-forth with vendors over invoice format issues. It replaces the duplicate payments that nobody catches until the next quarterly review. It replaces the chasing of approvals that delays vendor payments past their due dates.',
          'What it does not replace is the AP team\'s judgment. Genuine exceptions still need a human. The point of automation is to make sure the human only sees the cases that actually need them — and to make those cases easy to resolve when they appear.',
        ],
      },
    ],
    relatedSiblings: ['ai-invoice-extraction', '3-way-matching', 'duplicate-invoice-detection'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is invoice processing automation?',
        a: 'Invoice processing automation is software that handles the full invoice-to-ERP workflow — from receipt to extraction, matching, validation, approval, and ERP push — automatically. FinMark.ai\'s version is currently running in production at TGI Group.',
      },
      {
        q: 'How accurate is the extraction?',
        a: 'High enough to run in production at TGI Group across thousands of invoices over months. Edge cases get flagged for human review with the AI predictions pre-filled, so confirmation takes seconds.',
      },
      {
        q: 'What happens to exceptions?',
        a: 'Exceptions are flagged for human review with full context — the original document, the extraction, the matching POs and GRNs, the failed validation rules, and the suggested resolution. Reviewers resolve them in minutes, and the system learns from every resolution.',
      },
      {
        q: 'What ERP does it push to?',
        a: 'Microsoft Dynamics NAV is the production-supported ERP. Approved invoices flow back into NAV with all relevant fields populated, ready for the AP team to post.',
      },
      {
        q: 'How do I get started?',
        a: 'Book a 30-minute call. We will walk you through the platform live, show you how it runs at TGI Group, and tell you what implementation looks like for your specific NAV setup.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 2. AI Invoice Extraction (renamed from claude-ai-invoice-extraction)
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'ai-invoice-extraction',
    primaryKeyword: 'ai invoice extraction',
    meta: {
      title: 'AI Invoice Extraction That Reads Any Format | FinMark.ai',
      description:
        'AI invoice extraction that reads any vendor invoice format — PDFs, scanned documents, photos, emails — without per-vendor template setup. Live in production at TGI Group.',
    },
    hero: {
      badge: 'AI Invoice Extraction',
      h1: 'AI Invoice Extraction That Reads Any Format',
      subhead:
        'Reads any invoice format your vendors send — PDFs, scans, photos, emails. No per-vendor template setup. High accuracy on real-world invoices, sustained in production.',
    },
    sections: [
      {
        kicker: 'What it does',
        heading: 'What AI invoice extraction actually does',
        body: [
          'Vendor invoices come in every imaginable format. PDFs from clean cloud accounting systems. Scanned documents with stamps and signatures. Photos taken on a phone and forwarded by email. Multi-page bundles with line items split awkwardly across pages. Layouts that change every quarter because the vendor\'s designer felt creative.',
          'AI invoice extraction reads them all. The output is structured data — vendor, invoice number, date, amounts, line items, taxes, due dates — ready to flow into the rest of your AP workflow. No per-vendor template setup, no per-format configuration, no engineer-maintained mapping table.',
        ],
      },
      {
        kicker: 'Why this matters',
        heading: 'Why this is fundamentally different from OCR',
        body: [
          'Traditional OCR reads characters one at a time and tries to guess where the fields are. It works on clean, structured documents and breaks on the messy ones — exactly the documents that AP teams actually need help with. The fix has historically been per-vendor templates, which require constant maintenance and break the moment a vendor changes their layout.',
          'AI invoice extraction is a different category. The model understands the document the way a human does — reading the layout, understanding the context, handling new formats it has never seen before. It does not need templates. It does not need per-vendor setup. It handles new vendors on day one.',
        ],
      },
      {
        kicker: 'In production',
        heading: 'How it performs in production',
        body: [
          'FinMark.ai\'s extraction runs every working day at TGI Group across two subsidiaries. The model has processed thousands of real production invoices over months — including the messy edge cases that break demo systems. The accuracy holds up in production at the level you need to actually trust the output and let it flow through the rest of the pipeline without manual review of every field.',
          'The remaining edge cases get flagged for human review with the model\'s predictions pre-filled. The reviewer sees the original document and the extracted fields side by side and confirms or corrects in seconds — not minutes.',
        ],
      },
      {
        kicker: 'What stays opaque',
        heading: 'Why we don\'t talk about the model architecture',
        body: [
          'The specific model we use, the number of inference passes, and the internal extraction architecture are deliberately not on this page. The model is one of the things that makes FinMark.ai work and we treat it as proprietary. Sophisticated buyers can ask under NDA. Most buyers do not care — they care whether it works on their invoices, which the production deployment at TGI Group already proves.',
        ],
      },
    ],
    relatedSiblings: ['invoice-processing-automation', 'duplicate-invoice-detection'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is AI invoice extraction?',
        a: 'AI invoice extraction reads vendor invoice documents and extracts the structured data — vendor, line items, amounts, dates, taxes — directly. It replaces traditional OCR with a model that understands documents the way a human does, which means it handles new formats without templates.',
      },
      {
        q: 'How accurate is it on real invoices?',
        a: 'High enough to run in production at TGI Group across thousands of invoices over months. Edge cases get flagged for human review with predictions pre-filled.',
      },
      {
        q: 'Does it work on scanned PDFs and photos?',
        a: 'Yes. Modern AI extraction handles scanned PDFs, photos of paper invoices, and even handwritten line items. Accuracy is highest on digital-native PDFs but the model handles real-world messiness well.',
      },
      {
        q: 'Do I need to set up templates per vendor?',
        a: 'No. The model handles any vendor format on day one without templates. It gets better over time as it sees more invoices from your specific vendor mix.',
      },
      {
        q: 'What happens when the model is wrong?',
        a: 'Uncertain extractions get routed to a review queue with the original document, the model\'s predictions, and a one-click confirmation flow. Reviewers resolve them in seconds, and the corrections inform future extractions.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 3. 3-Way Matching
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: '3-way-matching',
    primaryKeyword: '3 way matching nav',
    meta: {
      title: '3-Way Matching Against NAV | FinMark.ai',
      description:
        'Automated 3-way matching of invoices against POs and GRNs from Microsoft Dynamics NAV. Handles lump-sum and ratio-based matching for telecom and marketing categories.',
    },
    hero: {
      badge: '3-Way Matching',
      h1: 'Automated 3-Way Matching Against NAV',
      subhead:
        'Match invoices against POs and GRNs from your Microsoft Dynamics NAV instance automatically. Handles the messy real-world cases — telecom invoices, marketing line items, partial receipts — without manual workarounds.',
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What 3-way matching actually does',
        body: [
          '3-way matching compares three documents before an invoice gets paid: the purchase order (what was ordered), the goods receipt note (what was received), and the vendor invoice (what they are billing you for). All three need to agree within tolerance. If they do, the invoice can move forward. If they do not, the discrepancy is surfaced for review.',
          'Manual 3-way matching is one of the most expensive things an AP team does. It is also one of the most important controls — it is how you catch overcharges, short shipments, vendor billing errors, and outright fraud. Automating it does not remove the control; it makes the control work at scale.',
        ],
      },
      {
        kicker: 'NAV integration',
        heading: 'Matching against your live NAV data',
        body: [
          'FinMark.ai pulls purchase orders and goods receipt notes directly from your Microsoft Dynamics NAV instance. When an invoice arrives, the matching engine has access to your live PO and GRN data without any manual upload or sync delay. The match runs automatically, the result is logged, and the invoice moves forward — or gets flagged for review.',
          'The integration is bidirectional. POs and GRNs flow in. Approved invoices flow back into NAV with all the relevant fields populated, ready to post.',
        ],
      },
      {
        kicker: 'Real-world cases',
        heading: 'How we handle the cases that break generic matching',
        body: [
          'Standard 3-way matching assumes one invoice line per PO line. Reality is messier. Telecom invoices have one PO line that says "Telephone" and a hundred invoice lines for calls, SMS, data, and bundles. Marketing invoices come with line items that do not map cleanly to specific PO lines at all. Partial deliveries leave you with quantity mismatches that are correct but flagged anyway by naive matching engines.',
          'FinMark.ai handles two special cases that come up constantly in production. Lump-sum matching: a single PO line plus N invoice lines passes if the totals match within tolerance — this is how telecom invoices flow through. Ratio-based matching: when invoice lines do not map cleanly, amounts are split proportionally across the relevant PO lines. Both are real production patterns at TGI Group, not theoretical edge cases.',
        ],
      },
      {
        kicker: 'Tolerances',
        heading: 'Configurable tolerances per company and vendor',
        body: [
          'Tolerances are configurable per company, per vendor, and per category. Trusted long-term vendors can have looser tolerances. New or risk-flagged vendors can have tighter ones. High-value invoices can require tighter matching. The point is that human attention focuses only on the variances that actually warrant it, not on every minor mismatch.',
        ],
      },
    ],
    relatedSiblings: ['microsoft-dynamics-nav-integration', 'invoice-processing-automation', 'ap-approval-workflows'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is 3-way matching?',
        a: '3-way matching compares the purchase order, the goods receipt, and the vendor invoice before approving payment. All three need to agree within tolerance. It catches overcharges, short shipments, billing errors, and vendor fraud.',
      },
      {
        q: 'Does FinMark.ai sync POs and GRNs from NAV?',
        a: 'Yes. POs and GRNs sync directly from your Microsoft Dynamics NAV instance. The matching engine has access to your live data without any manual upload.',
      },
      {
        q: 'What about telecom invoices with one PO line and many invoice lines?',
        a: 'Lump-sum matching handles this directly. A single PO line plus N invoice lines passes if the totals match within tolerance. This is a real production pattern at TGI Group.',
      },
      {
        q: 'Can I configure tolerances per vendor?',
        a: 'Yes. Tolerances are configurable per company, per vendor, and per category. You decide how tight or loose each one is.',
      },
      {
        q: 'Does 3-way matching require an existing procurement workflow?',
        a: 'Yes — for true 3-way matching you need POs and GRNs in NAV. For services and recurring charges where you do not have POs, 2-way matching against the invoice and an approver decision is supported.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 4. Nigerian Withholding Tax Automation (the killer)
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'nigerian-withholding-tax-automation',
    primaryKeyword: 'nigerian withholding tax automation',
    meta: {
      title: 'Nigerian Withholding Tax (WHT) Automation | FinMark.ai',
      description:
        'Nigerian Withholding Tax computed automatically per current regulations and pushed back into Microsoft Dynamics NAV with every approved invoice. Built into the AP workflow.',
    },
    hero: {
      badge: 'Nigerian WHT Automation',
      h1: 'Nigerian Withholding Tax, Computed Automatically',
      subhead:
        'WHT computed automatically per the current Nigerian regulations and pushed back into Microsoft Dynamics NAV alongside the standard invoice fields. Built into the AP workflow, not a separate spreadsheet.',
    },
    sections: [
      {
        kicker: 'The problem',
        heading: 'Why Nigerian WHT breaks generic AP tools',
        body: [
          'Nigerian Withholding Tax is a real compliance burden for any business operating in Nigeria. The regulations specify rate variations by vendor type (registered companies vs individuals vs foreign entities), by service category (consulting, construction, supply, technical services, rent, royalties, and more), and by TIN registration status. Computing WHT correctly requires looking up the right rate for each invoice line, applying it to the right base amount, and producing the supporting fields needed for the tax filing.',
          'Generic AP automation tools — built for the US, the UK, or the EU — do none of this. They treat tax as a single sales tax field, which is the wrong model entirely for Nigerian WHT. The result is that finance teams running Nigerian operations either compute WHT by hand outside the tool (defeating most of the automation value) or hire local consultants to do it for them (expensive, slow, doesn\'t scale).',
        ],
      },
      {
        kicker: 'How we handle it',
        heading: 'How FinMark.ai computes WHT',
        body: [
          'When an invoice flows through the FinMark.ai pipeline, the WHT engine evaluates whether WHT applies, which rate to use, and what the tax base should be. The decision uses the vendor type, the service category mapped from the invoice line items, the TIN status, and the current Nigerian regulation table. The engine applies the right rate, computes the tax amount, and produces the supporting fields needed for the certificate.',
          'All of this runs automatically as part of the invoice processing workflow. By the time an invoice reaches the approval step, the WHT has already been computed, the rate applied is visible in the audit trail, and the supporting fields are ready to flow back into NAV with the rest of the invoice.',
        ],
      },
      {
        kicker: 'NAV integration',
        heading: 'WHT lands in NAV alongside the invoice',
        body: [
          'When an approved invoice pushes back into Microsoft Dynamics NAV, the WHT fields are populated alongside the standard invoice fields. NAV then has everything it needs to post the invoice with WHT correctly captured for the tax filing. Your AP team does not have to copy WHT numbers from one system to another. They do not have to maintain a parallel WHT spreadsheet. The numbers are right, the fields are populated, and the audit trail traces every computation back to the rule that was applied.',
        ],
      },
      {
        kicker: 'Why this matters',
        heading: 'Why this is the killer differentiator',
        body: [
          'There is no major AP automation tool — Bill.com, Stampli, Tipalti, AvidXchange, Coupa — that handles Nigerian WHT this way. The reason is simple: they are all built for the US or Europe, and Nigeria is not on their roadmap. Any African enterprise that wants AP automation has historically had to either accept the limitation (compute WHT outside the tool) or build their own.',
          'FinMark.ai is built for this specific reality. WHT is a first-class feature, integrated into every step of the pipeline, pushed automatically to NAV. For African enterprise finance teams running NAV, this single feature makes FinMark.ai the AP automation that actually works end-to-end without manual workarounds.',
        ],
      },
    ],
    relatedSiblings: ['microsoft-dynamics-nav-integration', 'invoice-processing-automation'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is Nigerian Withholding Tax?',
        a: 'Nigerian Withholding Tax is a tax deducted at source from payments to vendors, with rate variations by vendor type, service category, and TIN registration status. Compliance is governed by the Federal Inland Revenue Service (FIRS) under the current Nigerian regulations.',
      },
      {
        q: 'Does FinMark.ai handle WHT automatically?',
        a: 'Yes. Every applicable invoice gets WHT computed automatically per the current regulations, with the right rate applied based on vendor type, service category, and TIN status. The computation happens before the invoice reaches approval.',
      },
      {
        q: 'Where does the WHT data end up?',
        a: 'WHT is pushed back into Microsoft Dynamics NAV alongside the standard invoice fields. NAV then has everything it needs to post the invoice with WHT correctly captured for the tax filing. No parallel spreadsheet.',
      },
      {
        q: 'What if a vendor is exempt from WHT?',
        a: 'WHT exemption is configurable per vendor and per service category. Exempt invoices skip the WHT computation step but still log the exemption reason for audit purposes.',
      },
      {
        q: 'Can it handle WHT for foreign vendors?',
        a: 'Yes — foreign vendor WHT is part of the regulation set the engine handles. Rates and rules vary by vendor type and service category as per the current Nigerian regulations.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 5. Microsoft Dynamics NAV Integration
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'microsoft-dynamics-nav-integration',
    primaryKeyword: 'microsoft dynamics nav ap integration',
    meta: {
      title: 'Microsoft Dynamics NAV AP Integration | FinMark.ai',
      description:
        'Direct AP automation integration with on-premise Microsoft Dynamics NAV. Built for the African enterprise reality that cloud-first AP vendors do not handle well.',
    },
    hero: {
      badge: 'NAV Integration',
      h1: 'Direct Microsoft Dynamics NAV Integration',
      subhead:
        'POs, GRNs, vendor master, and approved invoices flow between FinMark.ai and your Microsoft Dynamics NAV instance automatically. Built for the on-premise NAV reality that cloud-first AP tools do not handle well.',
    },
    sections: [
      {
        kicker: 'The problem',
        heading: 'Why most AP tools cannot integrate with NAV well',
        body: [
          'Microsoft Dynamics NAV is one of the most widely deployed ERPs in mid-market and enterprise organizations across Africa, the Middle East, and parts of Europe. It is also one of the hardest ERPs to integrate with from a modern AP automation tool. Most NAV deployments are on-premise, behind corporate firewalls. The cloud-first AP vendors built for SaaS-era ERPs (NetSuite, Xero, QuickBooks Online) simply do not have the integration story for on-premise NAV.',
          'The result is that NAV-based finance teams have been stuck — using AP tools that integrate well with cloud systems but not with the actual NAV instance that holds their financial data, or running AP entirely on top of NAV with all the manual workflow problems that come with it.',
        ],
      },
      {
        kicker: 'How we handle it',
        heading: 'How FinMark.ai integrates with NAV',
        body: [
          'FinMark.ai is built specifically for the on-premise NAV reality. The integration handles the firewall realities, the authentication patterns, and the bidirectional sync that on-premise NAV deployments need. Once configured, POs and GRNs flow from NAV into FinMark.ai automatically, and approved invoices flow back into NAV with all the relevant fields populated.',
          'The integration is in production today at TGI Group across two subsidiaries, each with their own NAV instance. The setup is repeatable for the next customer running NAV — we have already done the hard part of figuring out how on-premise NAV integration actually works.',
        ],
      },
      {
        kicker: 'What syncs',
        heading: 'What flows between FinMark.ai and NAV',
        body: [
          'From NAV into FinMark.ai: purchase orders, goods receipt notes, vendor master data, and chart of accounts references. From FinMark.ai into NAV: approved invoices with all the standard fields plus the Nigerian Withholding Tax fields populated. The integration is bidirectional, automated, and audited end to end.',
          'Once an invoice is in NAV, the AP team posts it like any other invoice — except the validation, the matching, and the tax computation have already been done. The whole loop runs without humans rekeying data between systems.',
        ],
      },
      {
        kicker: 'Production',
        heading: 'In production today',
        body: [
          'The NAV integration is currently running in production at TGI Group across two subsidiaries (TGI Distri Limited and West Africa Cube Limited). Each subsidiary has its own NAV instance and its own FinMark.ai subdomain. The integration runs continuously and has been verified end-to-end including the round-trip ERP push-back.',
        ],
      },
    ],
    relatedSiblings: ['nigerian-withholding-tax-automation', '3-way-matching', 'multi-tenant-ap-platform'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'Does FinMark.ai integrate with Microsoft Dynamics NAV?',
        a: 'Yes — directly. NAV is the production-supported ERP integration. POs, GRNs, and vendor data sync from NAV automatically. Approved invoices push back with both standard and WHT fields populated.',
      },
      {
        q: 'Does it work with on-premise NAV?',
        a: 'Yes. FinMark.ai is built specifically for the on-premise NAV reality, including the firewall and authentication patterns that on-premise deployments need.',
      },
      {
        q: 'What about NAV cloud / Business Central?',
        a: 'Current production is on-premise Microsoft Dynamics NAV. Business Central support is not in scope today. We will tell you on the first call rather than letting you find out after you sign.',
      },
      {
        q: 'How long does NAV integration take to set up?',
        a: 'Most customers go from contract to first automated invoice in 2-4 weeks. The biggest variable is your specific NAV configuration and the access we need from your IT team.',
      },
      {
        q: 'Can I run AP automation without NAV?',
        a: 'No. FinMark.ai is built specifically for Microsoft Dynamics NAV. If you run a different ERP, we are not the right tool for you today.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 6. SharePoint Invoice Integration
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'sharepoint-invoice-integration',
    primaryKeyword: 'sharepoint invoice integration',
    meta: {
      title: 'SharePoint Invoice Integration for AP | FinMark.ai',
      description:
        'Use SharePoint as your AP document repository. FinMark.ai reads invoices from your SharePoint folders automatically and writes portal uploads back. Single source of truth for documents.',
    },
    hero: {
      badge: 'SharePoint Integration',
      h1: 'SharePoint as Your AP Document Repository',
      subhead:
        'If your vendors send to SharePoint, FinMark.ai picks up new invoices automatically. If you upload through the portal, the documents go back to SharePoint. One source of truth, no migration.',
    },
    sections: [
      {
        kicker: 'Why SharePoint',
        heading: 'Why SharePoint is the right document repository for African enterprise',
        body: [
          'For Microsoft-shop enterprises, SharePoint is already the document repository for everything else. It has the access controls, the retention policies, the audit logs, and the compliance posture that finance teams need. Asking the AP team to move invoice documents into a separate AP-tool-specific storage layer fights the existing IT governance — and usually loses.',
          'The right pattern is to let SharePoint stay as the document repository and have the AP automation tool read from and write to SharePoint as needed. FinMark.ai is built around exactly this pattern.',
        ],
      },
      {
        kicker: 'How it works',
        heading: 'How FinMark.ai integrates with SharePoint',
        body: [
          'Vendors send invoices to a designated SharePoint folder — organized however your AP team already organizes them. FinMark.ai watches the folder and picks up new invoices automatically as they arrive. The original document stays in SharePoint where it always was; FinMark.ai just processes the data.',
          'For invoices that are uploaded directly through the FinMark.ai portal as the alternative intake channel, the platform writes them back to the same SharePoint folder. SharePoint stays as the single source of truth for AP documents regardless of how the invoice arrived.',
        ],
      },
      {
        kicker: 'Permissions',
        heading: 'What access we need',
        body: [
          'FinMark.ai accesses SharePoint via standard Microsoft Graph permissions — read access to the designated folders so we can pick up invoices, and write access if you want portal uploads to flow back. Permissions are scoped per tenant and require admin consent on your end. There are no broad tenant-wide privileges beyond what Microsoft Graph requires for this kind of integration.',
          // TODO: Confirm exact scopes for current TGI deployment
          'For TGI Group, the SharePoint integration is configured but currently waiting on TGI providing the Tenant ID and admin consent. The technical implementation is ready; it is the governance approval on the customer side that is the gating item.',
        ],
      },
      {
        kicker: 'Read-only option',
        heading: 'Read-only mode if you want it',
        body: [
          'If you do not want FinMark.ai writing back to SharePoint, the integration can run read-only. Invoices come in via SharePoint, but portal uploads stay in FinMark.ai\'s own storage. Many customers run this way until they trust the tool, then enable write-back later.',
        ],
      },
    ],
    relatedSiblings: ['invoice-processing-automation', 'multi-tenant-ap-platform'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'How does FinMark.ai integrate with SharePoint?',
        a: 'FinMark.ai watches designated SharePoint folders and picks up new invoices automatically as they arrive. Portal uploads can also write back to SharePoint to keep one source of truth.',
      },
      {
        q: 'What permissions does FinMark.ai need on SharePoint?',
        a: 'Read access to the designated folders, and write access if you want portal uploads to flow back. Permissions are scoped per tenant and require admin consent on your end.',
      },
      {
        q: 'Can the SharePoint integration run read-only?',
        a: 'Yes. If you do not want FinMark.ai writing back to SharePoint, invoices flow in but portal uploads stay in FinMark.ai\'s own storage. Many customers run this way until they trust the tool.',
      },
      {
        q: 'How quickly does FinMark.ai pick up new invoices from SharePoint?',
        a: 'Usually within minutes of the invoice landing in the folder. The integration is designed for real-time pickup with a backup polling mechanism so nothing gets missed.',
      },
      {
        q: 'Can I organize my SharePoint folders however I want?',
        a: 'Yes. We can watch one folder per company, multiple folders per category, or whatever structure your AP team already uses. The folder layout is configurable, not enforced.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 7. Multi-Tenant AP Platform (For Group Companies)
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'multi-tenant-ap-platform',
    primaryKeyword: 'multi tenant ap platform',
    meta: {
      title: 'AP Automation for Group Companies | FinMark.ai',
      description:
        'Run multiple subsidiaries on one AP platform with full data isolation. Designed for African enterprise group structures with multiple legal entities and NAV instances.',
    },
    hero: {
      badge: 'For Group Companies',
      h1: 'One AP Platform, Multiple Subsidiaries',
      subhead:
        'Run all your subsidiaries on one platform with full data isolation between them and a cross-company admin view for the parent group. Built around real African enterprise group structures.',
    },
    sections: [
      {
        kicker: 'The problem',
        heading: 'Why group companies need multi-tenant AP',
        body: [
          'Group company structures are everywhere in African enterprise. A parent holding company runs multiple operating subsidiaries, each with its own NAV instance, its own vendor base, its own approval policy, and its own tax obligations. The parent group needs visibility across all of them; the subsidiaries need independence within them.',
          'Most AP automation tools either force you to deploy a separate instance per subsidiary (expensive, fragmented, hard to govern) or run everything in one instance with weak data isolation (governance nightmare, audit risk). Neither works for a group structure where the subsidiaries genuinely need to operate independently AND the parent needs cross-company oversight.',
        ],
      },
      {
        kicker: 'How we handle it',
        heading: 'How FinMark.ai handles group companies',
        body: [
          'Each subsidiary gets its own dedicated environment on FinMark.ai with its own users, its own NAV integration, its own vendor base, and its own approval workflows. Data isolation between subsidiaries is enforced at the platform level — there is no way for one subsidiary to accidentally see another subsidiary\'s data, even with deliberate URL manipulation.',
          'Above the subsidiaries, the parent group gets a cross-company admin view. Group CFOs and internal audit teams can see invoices, approvals, audit trails, and key metrics across every subsidiary in one place — without losing the per-subsidiary isolation that the subsidiaries themselves need to operate independently.',
        ],
      },
      {
        kicker: 'In production',
        heading: 'Live with TGI Group',
        body: [
          'TGI Group is currently running on the multi-tenant architecture across two subsidiaries — TGI Distri Limited (TGID) and West Africa Cube Limited (WACube). Each has its own NAV instance, its own AP team, its own vendor base, and its own subdomain on FinMark.ai. The parent TGI group has cross-company admin access for oversight.',
          'The architecture is designed for groups that add subsidiaries one at a time. Adding a new subsidiary spins up a new environment, a new NAV configuration, and a new vendor base without affecting the existing tenants. We are ready to onboard the third TGI subsidiary as soon as the parent decides to add it.',
        ],
      },
      {
        kicker: 'Per-tenant NAV',
        heading: 'Per-subsidiary NAV integration',
        body: [
          'Each subsidiary can have its own Microsoft Dynamics NAV instance — and usually does, because group companies typically run separate NAV deployments per legal entity. FinMark.ai handles this by maintaining a separate NAV integration configuration per subsidiary. Each tenant\'s data flows to and from the right NAV without crossing wires.',
        ],
      },
    ],
    relatedSiblings: ['microsoft-dynamics-nav-integration', 'sharepoint-invoice-integration'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is multi-tenant AP automation?',
        a: 'It is software that runs multiple companies (typically subsidiaries of a parent group) on a single deployment with full data isolation between them. Each subsidiary operates independently while the parent group gets cross-company oversight.',
      },
      {
        q: 'How is data isolated between subsidiaries?',
        a: 'Data isolation is enforced at the platform level. There is no way for one subsidiary to access another subsidiary\'s data, even with deliberate URL manipulation. The isolation is built into the architecture, not bolted on as access control.',
      },
      {
        q: 'Can each subsidiary have its own NAV instance?',
        a: 'Yes. Each tenant gets its own NAV integration configuration. Group companies typically run separate NAV deployments per legal entity and FinMark.ai handles this directly.',
      },
      {
        q: 'How does the cross-company admin work?',
        a: 'A separate admin view runs above the subsidiary tenants. Super admins (typically group CFOs and internal audit) can see invoices, approvals, and key metrics across every subsidiary in one place without losing the per-tenant isolation.',
      },
      {
        q: 'Can subsidiaries be added one at a time?',
        a: 'Yes. The architecture is designed for groups that onboard subsidiaries incrementally. Adding a new subsidiary does not affect existing tenants.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 8. AP Approval Workflows
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'ap-approval-workflows',
    primaryKeyword: 'ap approval workflows',
    meta: {
      title: 'AP Approval Workflows With Vendor-Approver Mapping | FinMark.ai',
      description:
        'Configurable AP approval routing with vendor-approver mapping, role-based access, and full audit trail for SOX and external audit. Built for the way Nigerian finance teams actually approve.',
    },
    hero: {
      badge: 'AP Approval Workflows',
      h1: 'Approval Workflows That Match Your Real Policy',
      subhead:
        'Configurable approval routing with vendor-approver mapping, role-based access, and full audit trail. Built for the way Nigerian finance teams actually approve invoices.',
    },
    sections: [
      {
        kicker: 'What it does',
        heading: 'What good approval workflows actually do',
        body: [
          'Approval workflows are the rules that determine who approves which invoices and in what order before payment is released. A working approval workflow auto-approves the routine cases (matched POs from known vendors under threshold), routes the rest by amount or category to the right person, escalates large invoices to the right approver level, and produces an audit trail for everything.',
          'Most AP teams hate their approval workflows because they are either too rigid (every invoice goes through the same five-step process whether it is $50 or $50,000) or too loose (high-value invoices slip through with the same quick-click approval as routine ones). The right system adapts to your actual policy without forcing you to change it.',
        ],
      },
      {
        kicker: 'Vendor-approver mapping',
        heading: 'Vendor-approver mapping',
        body: [
          'FinMark.ai treats vendor-approver mapping as a first-class feature. Specific vendors can be tied to specific approvers — the marketing department head approves marketing vendor invoices, the IT manager approves IT vendor invoices, and so on. This mirrors how real finance teams actually delegate approval authority and removes the routing ambiguity that slows down generic approval systems.',
          'Vendor-approver mappings can be combined with amount thresholds, category rules, and escalation paths. The result is routing that matches your real policy, not a vendor-imposed one.',
        ],
      },
      {
        kicker: 'Role-based access',
        heading: 'Role-based access for the whole team',
        body: [
          'Roles are designed for how AP teams actually work. Super admins see everything across all subsidiaries. Company admins see everything within a single subsidiary. AP team members process invoices, code them, and route them for approval. Viewers can see what is happening without changing anything. Permissions are enforced at the platform level.',
        ],
      },
      {
        kicker: 'Audit trail',
        heading: 'Every approval action audited',
        body: [
          'Every approval action is logged with timestamp, approver identity, the invoice details at time of approval, and any rejection comments. The audit trail is immutable and queryable. Auditors love this because it makes evidence-of-control easy to demonstrate. Compliance officers love it because the regulatory expectations around approval audit trails are increasingly strict.',
        ],
      },
    ],
    relatedSiblings: ['invoice-processing-automation', '3-way-matching', 'multi-tenant-ap-platform'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'How are AP approval workflows configured?',
        a: 'Workflows are configured per company by amount thresholds, category rules, vendor-approver mappings, and role-based access. The combination supports almost any real-world approval policy without forcing you to change it.',
      },
      {
        q: 'Can I auto-approve routine invoices?',
        a: 'Yes. Invoices from known vendors that match a PO and fall under a configured threshold can auto-approve. The risk is low because the validation steps (vendor verification, PO matching, sanity checks, WHT computation) have already run before the approval step.',
      },
      {
        q: 'What if an approver is unavailable?',
        a: 'Delegation rules let you specify a backup approver per role. When the primary is out of office, invoices route to the backup automatically.',
      },
      {
        q: 'How is the approval audit trail captured?',
        a: 'Every approval action is logged with timestamp, approver identity, invoice details at time of approval, and any rejection comments. The trail is immutable and queryable, and exports cleanly for SOX or external audit requirements.',
      },
      {
        q: 'Can approvers approve from mobile?',
        a: 'Approval is currently portal-based with one-click flows. Mobile-optimized approval is on the roadmap.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 9. Duplicate Invoice Detection & Sanity Checks
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'duplicate-invoice-detection',
    primaryKeyword: 'duplicate invoice detection',
    meta: {
      title: 'Duplicate Invoice Detection & Sanity Checks | FinMark.ai',
      description:
        'Catch duplicate invoices before they reach approval, and the silent errors AI alone would miss. Automated validation built into every stage of the AP pipeline.',
    },
    hero: {
      badge: 'Duplicate Detection',
      h1: 'Catch Duplicates and Silent Errors Before They Reach Approval',
      subhead:
        'Duplicate invoice detection at the door, plus rule-based sanity checks that catch the things AI alone would miss. The validation layer that turns AP automation into AP automation you can actually trust.',
    },
    sections: [
      {
        kicker: 'Duplicates',
        heading: 'How FinMark.ai catches duplicate invoices',
        body: [
          'Every invoice that enters FinMark.ai is checked against history before any other processing happens. If the same invoice has been seen before, it gets flagged immediately and never enters the workflow. This catches the obvious duplicate cases — a vendor sending the same invoice twice, an AP clerk uploading the same file twice, an automated email forward triggering twice. These cases happen constantly in real AP workflows and they are the easiest fraud and error category to prevent.',
          'It also catches near-duplicates: invoices with slightly different invoice numbers, amounts off by a few dollars, or split invoices that add up to the same total. These are the cases human reviewers miss because the volume is too high and the differences are too subtle.',
        ],
      },
      {
        kicker: 'Sanity checks',
        heading: 'The sanity checks that catch what AI misses',
        body: [
          'AI extraction is great, but no AI is perfect. The small percentage of cases where the extraction is slightly off — a date misread, a tax amount off by a digit, a vendor name almost right — would cause real problems if they made it into NAV. Rule-based sanity checks catch these as a second line of defense.',
          'The checks cover the categories that matter: date sanity (is the invoice date plausible), amount sanity (does the invoice total fall within historical norms for this vendor), vendor verification (is the vendor in the master, is the TIN valid), line-item totals (do the line items sum to the invoice total), tax math (does the tax match the rate and base), currency consistency, PO and GRN reference sanity, near-duplicate detection, and bank detail change detection.',
        ],
      },
      {
        kicker: 'Fraud prevention',
        heading: 'How sanity checks prevent fraud',
        body: [
          'The sanity checks are not just about catching extraction errors. They are also a fraud prevention layer. Bank detail change detection catches the most common Business Email Compromise (BEC) pattern. Vendor master verification catches vendor impersonation. Line-item math verification catches inflated invoices. Each check is a small control, but together they make a substantial difference in the fraud rate that reaches the approval stage.',
        ],
      },
      {
        kicker: 'What\'s next',
        heading: 'What is and is not in scope today',
        body: [
          'The current implementation focuses on duplicate detection and rule-based sanity checks. ML-based anomaly detection for fraud — looking at vendor history patterns, unusual amounts, timing anomalies — is on the roadmap but not in production today. The deterministic checks above handle the highest-impact fraud categories and are production-tested at TGI Group.',
        ],
      },
    ],
    relatedSiblings: ['invoice-processing-automation', 'ai-invoice-extraction', 'ap-approval-workflows'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'How does FinMark.ai detect duplicate invoices?',
        a: 'Every invoice is checked against history before any other processing. Exact duplicates are blocked at the door. Near-duplicates (slightly different invoice numbers, amounts off by a few dollars) are caught by the sanity check layer.',
      },
      {
        q: 'What kinds of errors do sanity checks catch?',
        a: 'Date errors, amount errors, vendor verification problems, line-item math errors, tax math errors, currency inconsistencies, missing PO references, duplicate near-matches, and unusual bank detail changes that could signal BEC fraud.',
      },
      {
        q: 'Does FinMark.ai have ML-based fraud detection?',
        a: 'Not today. Current fraud prevention is built on duplicate detection and rule-based sanity checks, which handle the highest-impact categories. ML-based anomaly detection is on the roadmap.',
      },
      {
        q: 'How does it catch Business Email Compromise (BEC)?',
        a: 'Bank detail change detection — if a vendor\'s bank details have changed recently, the system flags any invoice paid to the new account for explicit human verification. Combined with vendor master controls, this catches the most common BEC pattern.',
      },
      {
        q: 'What happens to flagged invoices?',
        a: 'Flagged invoices go to a review queue with the failed check, the relevant context, and a recommended action. Reviewers either confirm and proceed, reject and notify the vendor, or escalate.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 10. AP Automation Software (buyer's guide)
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'ap-automation-software',
    primaryKeyword: 'ap automation software',
    meta: {
      title: 'AP Automation Software for Nigerian Enterprise | FinMark.ai',
      description:
        'How to evaluate AP automation software for Nigerian enterprise running Microsoft Dynamics NAV. The criteria that actually matter, the traps to avoid, and what US-built tools usually miss.',
    },
    hero: {
      badge: 'AP Automation Software',
      h1: 'AP Automation Software for Nigerian Enterprise',
      subhead:
        'A buyer\'s guide focused on what actually matters for Nigerian enterprise running Microsoft Dynamics NAV. The features US-built AP tools miss, the criteria that matter most, and how to evaluate honestly.',
    },
    sections: [
      {
        kicker: 'The category',
        heading: 'Why most AP automation software is built for the wrong market',
        body: [
          'The AP automation category is dominated by tools built for US and European mid-market companies. Bill.com, Stampli, Tipalti, AvidXchange, and the rest were designed for clean cloud ERPs (NetSuite, QuickBooks, Xero), simple sales tax models (US sales tax, EU VAT), and single-currency single-entity finance teams. They are excellent at what they do — but what they do is not what Nigerian enterprise finance teams actually need.',
          'The mismatch shows up in three places. First, the ERP integration: most Nigerian enterprise runs Microsoft Dynamics NAV, often on-premise, which the cloud-first AP vendors do not handle well. Second, the tax model: Nigerian Withholding Tax is more complex than US sales tax and is handled by exactly zero major AP tools. Third, the entity model: Nigerian groups typically run multiple subsidiaries with separate NAV instances, and most AP tools treat that as an awkward edge case rather than a primary use case.',
        ],
      },
      {
        kicker: 'Substitutes',
        heading: 'Your real alternatives',
        body: [
          'Be honest about what you are choosing between. If you do not buy FinMark.ai, your real alternatives are: keep doing AP manually with Excel and NAV (the most common starting point); hire a Nigerian WHT consultant plus more AP clerks (the most common scaling answer); use Bill.com or Tipalti for the easy 70% of invoices and run WHT manually in spreadsheets for the hard 30% (the most common compromise); or hire a Nigerian systems integrator to build something custom on top of NAV (the most common large-enterprise default).',
          'Each of these has costs and tradeoffs. The most common one — doing nothing — has the highest hidden cost because the labor and the audit risk and the missed early-pay discounts and the WHT compliance exposure all compound silently. The most expensive one — the custom SI build — locks you into a single vendor and a multi-month delivery cycle. The compromise (US tool plus manual WHT) defeats most of the automation value because the WHT step is where the most expensive labor lives.',
        ],
      },
      {
        kicker: 'Criteria',
        heading: 'The criteria that actually matter',
        body: [
          'Six criteria separate AP automation tools that work for Nigerian enterprise from the ones that do not. Direct Microsoft Dynamics NAV integration including on-premise. Nigerian Withholding Tax computation built in, not bolted on. Multi-tenant architecture for group companies. SharePoint integration if your document repository is SharePoint. Document AI accuracy on real-world (not curated) invoices. Audit trail that satisfies external audit and regulatory expectations.',
          'A seventh criterion that matters more than people realize: how the vendor handles the messy reality of African enterprise — the on-premise systems, the firewall realities, the local tax regulations, the multi-subsidiary structures. Generic global AP tools usually do not handle these well because they were never designed for them.',
        ],
      },
      {
        kicker: 'Traps',
        heading: 'Common evaluation traps',
        body: [
          'The biggest trap is letting a US AP vendor demo set your expectations. Their demo will look great on a clean QuickBooks integration with simple sales tax — and tell you nothing about how the tool handles your real NAV, your real WHT regulations, your real subsidiaries. The right evaluation is a paid pilot on your actual data, not a 30-minute click-through.',
          'The second trap is checklist-buying. Long feature lists are misleading because most teams use 20% of any tool. Focus on the specific gaps the tool will fill in your existing workflow, not the long list of features you might use someday. The third trap is buying based on price alone without considering total cost of ownership: implementation effort, integration work, ongoing maintenance, and the cost of running fundamental gaps manually outside the tool.',
        ],
      },
    ],
    relatedSiblings: ['invoice-processing-automation', 'microsoft-dynamics-nav-integration', 'nigerian-withholding-tax-automation'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is AP automation software?',
        a: 'AP automation software handles the accounts payable workflow automatically — from invoice capture through approval and ERP push. The category is dominated by US-built tools that work well for cloud ERPs and simple tax models but struggle with the African enterprise reality.',
      },
      {
        q: 'Why does Nigerian enterprise need different AP automation?',
        a: 'Three reasons. ERP: most Nigerian enterprise runs Microsoft Dynamics NAV, often on-premise, which cloud-first AP vendors handle poorly. Tax: Nigerian Withholding Tax is more complex than US sales tax and is not supported by major AP tools. Entity: Nigerian groups run multiple subsidiaries with separate NAV instances, which most tools treat as an edge case.',
      },
      {
        q: 'Can I use Bill.com or Tipalti for Nigerian operations?',
        a: 'You can use them for parts of the workflow, but you will end up running Nigerian WHT computation manually outside the tool, which defeats most of the automation value. None of the major US AP tools handle Nigerian WHT this deeply.',
      },
      {
        q: 'How do I evaluate AP software for Nigerian enterprise?',
        a: 'Write down your specific requirements (NAV setup, WHT obligations, subsidiary count, document repository), evaluate vendors against your specific list, and run paid pilots on your real data — including the problematic invoices. The pilot is the only honest evaluation.',
      },
      {
        q: 'How is FinMark.ai different from US-built AP automation?',
        a: 'FinMark.ai is built specifically for Nigerian enterprise. Direct Microsoft Dynamics NAV integration, Nigerian WHT as a first-class feature, multi-tenant for group companies, SharePoint integration. None of these are bolted-on adaptations — they are the core design. Live in production today at TGI Group.',
      },
    ],
  },
]

/**
 * Lookup helper used by ClusterPage.jsx
 */
export function getClusterByPath(pillarSlug, clusterSlug) {
  return CLUSTERS.find(
    (c) => c.pillar === pillarSlug && c.slug === clusterSlug
  )
}

/**
 * Get all clusters for a given pillar (used for sibling linking)
 */
export function getClustersForPillar(pillarSlug) {
  return CLUSTERS.filter((c) => c.pillar === pillarSlug)
}

/**
 * Resolve a sibling cluster slug into the data needed for related cards
 */
export function resolveClusterSiblings(pillarSlug, siblingSlugs) {
  return siblingSlugs
    .map((slug) => {
      const c = CLUSTERS.find((c) => c.pillar === pillarSlug && c.slug === slug)
      if (!c) return null
      return {
        slug: c.slug,
        title: c.hero.badge || c.primaryKeyword,
        description: c.meta.description.split('.')[0] + '.',
        path: `/${c.pillar}/${c.slug}`,
      }
    })
    .filter(Boolean)
}
