// Cluster page content config — single source of truth for all cluster pages.
//
// All clusters are children of the accounts-payable-automation pillar.
// FinMark.ai builds AP automation specifically for African enterprise running
// Microsoft Dynamics NAV. The cluster set reflects what the product ACTUALLY
// does in production with TGI Group, not generic AP feature taxonomy.
//
// Real product features (from internal vault):
//   - Claude Opus 4.6 2-pass extraction (98% confidence)
//   - SHA-256 dedup
//   - 2-way / 3-way matching against POs and GRNs from Microsoft Dynamics NAV
//   - 10 sanity checks
//   - Nigerian Withholding Tax (WHT) computation per 2024 regulations
//   - SharePoint integration (read invoices, write portal uploads back)
//   - Multi-tenant subdomain architecture
//   - NO payment execution — approved invoices push to NAV
//   - NO multi-currency — single currency
//
// Each cluster has:
//   - pillar: parent pillar slug (must match a slug in pillars.js)
//   - slug: cluster URL segment
//   - primaryKeyword
//   - meta: { title, description }
//   - hero: { badge, h1, subhead }
//   - sections: ordered array of content sections
//   - relatedSiblings: 2-3 sibling cluster slugs
//   - crossPillarLink: null (one pillar)
//   - faqs: FAQ items
//
// TODO comments mark spots where the user should verify or fill in details.

export const CLUSTERS = [
  // ─────────────────────────────────────────────────────────────────
  // 1. Invoice Processing Automation (the full pipeline)
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'invoice-processing-automation',
    primaryKeyword: 'invoice processing automation',
    meta: {
      title: 'Invoice Processing Automation: The Full Pipeline | FinMark.ai',
      description:
        'How FinMark.ai\'s 8-stage invoice processing pipeline works — from PDF capture through Claude AI extraction, PO/GRN matching, sanity checks, WHT computation, approval, and ERP push.',
    },
    hero: {
      badge: 'Invoice Processing',
      h1: 'Invoice Processing Automation: The Full Pipeline',
      subhead:
        'How FinMark.ai turns invoices into ERP-ready records automatically — through eight stages of capture, extraction, matching, validation, tax computation, approval, and ERP push.',
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What invoice processing automation actually means',
        body: [
          'Invoice processing automation is software that takes invoices from receipt all the way to ERP posting without humans touching them — except to handle the small percentage of true exceptions. The version that actually works in production has to handle every step in the pipeline, not just the easy parts.',
          'Most "AP automation" tools handle one step well (usually extraction) and leave the rest to integrations and manual handoffs. FinMark.ai is built around the full pipeline: PDF intake → dedup → AI extraction → ERP matching → sanity checks → tax computation → approval → ERP push. Every step happens in one platform with one audit trail.',
        ],
      },
      {
        kicker: 'The 8 stages',
        heading: 'The complete 8-stage processing pipeline',
        body: [
          'Stage 1: Intake. Invoices arrive via portal upload, SharePoint folder, or vendor email forwarding. Stage 2: Deduplication. Every PDF is fingerprinted with SHA-256 and checked against history. Duplicates get blocked at the door. Stage 3: AI extraction. Anthropic Claude Opus 4.6 runs a 2-pass extraction process — first pass for structure, second pass for verification. Real-world confidence sits at 98%.',
          'Stage 4: Matching. The platform pulls POs and GRNs from Microsoft Dynamics NAV (via the staging API, refreshed every 5 minutes) and runs 2-way or 3-way matching with configurable tolerances. Lump-sum matching handles telecom-style invoices where one PO line covers multiple invoice lines. Stage 5: Sanity checks. Ten rule-based checks catch the things AI alone can miss — date sanity, amount sanity, vendor verification, line-item totals, tax math, currency consistency, and more.',
          'Stage 6: Withholding Tax computation. Nigerian WHT rates are applied automatically per 2024 regulations, including the variations by vendor type and service category. Stage 7: Approval routing. Configurable workflows route invoices to the right approver. Stage 8: ERP push. Approved invoices flow back into Microsoft Dynamics NAV with both the standard Finmark fields and the WHT fields populated, ready to post.',
        ],
      },
      {
        kicker: 'Audit trail',
        heading: 'Every step logged for audit',
        body: [
          'Every stage produces audit trail entries. Who uploaded the invoice. What Claude extracted. Which PO it matched against. Which sanity checks passed or failed. What WHT rate applied and why. Who approved it. When it was pushed to NAV. Auditors can reproduce any decision after the fact, which makes audit prep dramatically faster.',
          'The audit trail is immutable and queryable. For TGI Group, the platform has accumulated ~2,993 audit trail entries across the 287+ invoices processed so far — every single state change captured.',
        ],
      },
    ],
    relatedSiblings: ['claude-ai-invoice-extraction', '3-way-matching', 'duplicate-invoice-detection'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is invoice processing automation?',
        a: 'Invoice processing automation is software that handles the full invoice-to-ERP-posting workflow automatically — from intake to extraction, matching, validation, approval, and ERP push. FinMark.ai\'s pipeline runs in 8 stages and is currently processing 287+ invoices for TGI Group.',
      },
      {
        q: 'How accurate is the extraction step?',
        a: 'FinMark.ai uses Anthropic Claude Opus 4.6 with a 2-pass extraction process. Real-world confidence on TGI Group production invoices is 98%. Edge cases get flagged for human review with predictions pre-filled.',
      },
      {
        q: 'How does it handle exceptions?',
        a: 'Exceptions are flagged for human review with full context: the original invoice, the AI extraction, the matching POs/GRNs, the failed sanity checks, and the suggested resolution. Reviewers resolve them in seconds and the system learns from the resolution.',
      },
      {
        q: 'What ERP does it push to?',
        a: 'Microsoft Dynamics NAV is the production ERP target. Approved invoices push back into NAV with 4 standard Finmark fields (vendor verification, dedup, approval, sanity result) and 7 WHT fields populated.',
      },
      {
        q: 'Is the system live in production?',
        a: 'Yes — currently running for TGI Group across two subsidiaries (TGID and WACube). 287+ invoices processed, 10 active users, 2,993+ audit trail entries.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 2. Claude AI Invoice Extraction
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'claude-ai-invoice-extraction',
    primaryKeyword: 'claude ai invoice extraction',
    meta: {
      title: 'Claude AI Invoice Extraction at 98% Confidence | FinMark.ai',
      description:
        'How FinMark.ai uses Anthropic Claude Opus 4.6 with 2-pass extraction to read any invoice format at 98% confidence — no per-vendor templates, no traditional OCR.',
    },
    hero: {
      badge: 'Claude AI Extraction',
      h1: 'Claude AI Invoice Extraction at 98% Confidence',
      subhead:
        'Anthropic Claude Opus 4.6 reads invoices in any format with a 2-pass extraction process that sustains 98% confidence on real-world production invoices. No OCR templates, no per-vendor configuration.',
    },
    sections: [
      {
        kicker: 'Why Claude',
        heading: 'Why FinMark.ai is built on Anthropic Claude',
        body: [
          'Document AI is the hardest part of accounts payable automation. Vendor invoices come in every imaginable format — PDFs, scans, photos, multi-page bundles, handwritten annotations, non-standard layouts, and the endless variety of how real companies bill each other. The legacy answer was OCR with per-vendor templates, which broke constantly and required someone to maintain a template library.',
          'The modern answer is large language models trained to understand documents end-to-end. FinMark.ai uses Anthropic Claude Opus 4.6 — the most capable LLM for document extraction in 2026 — running a 2-pass extraction pattern designed specifically for invoice accuracy. The result is 98% confidence on real-world invoices with zero per-vendor configuration.',
        ],
      },
      {
        kicker: '2-pass extraction',
        heading: 'How the 2-pass extraction works',
        body: [
          'Pass 1 is structure. Claude reads the invoice and identifies the document type, the header fields (vendor, invoice number, dates, totals, tax), and the line items (description, quantity, unit price, line total). The output is a structured representation of what the document contains. Pass 2 is verification. Claude re-reads the invoice with the extraction in hand and checks it against itself — does the math add up, does the tax look right, are line items consistent with the totals, are dates plausible. This second pass is where the accuracy gain comes from.',
          'The two-pass approach catches the kinds of errors that single-pass extraction misses: a vendor name that was almost right, a line item that was off by one, a tax rate that was misread. Each pass alone is good. Together they hit 98% confidence on real invoices that have been tried in production.',
        ],
      },
      {
        kicker: 'Why not OCR',
        heading: 'Why this is not "AI-powered OCR"',
        body: [
          'A lot of AP vendors describe their extraction as "AI-powered OCR." That phrase usually means they wrap a legacy OCR engine in a small ML model that tries to clean up the output. It works on clean documents and breaks on the messy ones — exactly the documents that AP teams actually need help with.',
          'FinMark.ai does not use traditional OCR at all. The extraction layer is Claude reading the document directly, the way a human would — understanding the context, the layout, the relationships between fields. This is why the system handles new vendor formats on day one without templates and gets more accurate as Claude\'s underlying capabilities improve.',
        ],
      },
      {
        kicker: 'Edge cases',
        heading: 'How the long tail gets handled',
        body: [
          'No extraction system is perfect on every document. The 2% that does not hit confidence threshold gets routed to human review with all of Claude\'s predictions pre-filled. The reviewer sees the original document, the extracted fields, and the confidence scores — and confirms or corrects in seconds. The corrections inform the next batch of extractions.',
          'For TGI Group in production, the human-touch rate has stabilized at well under 5%. Most invoices flow through fully automated. The ones that need human attention get it fast.',
        ],
      },
    ],
    relatedSiblings: ['invoice-processing-automation', 'duplicate-invoice-detection'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is Claude AI invoice extraction?',
        a: 'Claude AI invoice extraction uses Anthropic\'s Claude Opus 4.6 large language model to read invoice documents and extract structured data — vendor, line items, amounts, dates, taxes — directly. It replaces traditional OCR with a model that understands documents the way a human does.',
      },
      {
        q: 'How accurate is Claude on real invoices?',
        a: 'FinMark.ai\'s 2-pass extraction process running on Claude Opus 4.6 achieves 98% confidence on real production invoices for TGI Group. The remaining 2% get flagged for human review with predictions pre-filled.',
      },
      {
        q: 'Why a 2-pass process?',
        a: 'Single-pass extraction catches most fields but misses subtle errors — almost-right vendor names, off-by-one line items, misread tax rates. The second pass re-reads the document with the extraction in hand and verifies it against itself, catching errors that the first pass missed.',
      },
      {
        q: 'Do I need to set up templates per vendor?',
        a: 'No. Claude handles any vendor format on day one without templates. This is the fundamental difference between modern document AI and legacy OCR.',
      },
      {
        q: 'What languages and currencies does extraction support?',
        // TODO: Confirm — currently single currency, English-language Nigerian invoices
        a: 'Currently optimized for English-language invoices and Nigerian Naira pricing. The underlying Claude model supports the major business languages, but production tuning has focused on the TGI Group use case to date. Other languages and currencies are on the roadmap.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 3. 3-Way Matching (against NAV POs and GRNs)
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: '3-way-matching',
    primaryKeyword: '3 way matching nav',
    meta: {
      title: '3-Way Matching Against Microsoft Dynamics NAV | FinMark.ai',
      description:
        'Automated 3-way matching of invoices against POs and GRNs synced from Microsoft Dynamics NAV. Tolerance-based, lump-sum aware, and built for African enterprise.',
    },
    hero: {
      badge: '3-Way Matching',
      h1: 'Automated 3-Way Matching Against Microsoft Dynamics NAV',
      subhead:
        'Match invoices against POs and GRNs synced live from Microsoft Dynamics NAV. Tolerance-based auto-approval, lump-sum support for telecom and marketing invoices, and full audit trail.',
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What 3-way matching actually does',
        body: [
          '3-way matching is the AP control that compares three documents before an invoice gets paid: the purchase order (what was supposed to be ordered), the goods receipt (what was actually received), and the vendor invoice (what they are billing you for). All three need to agree within tolerance for the invoice to be approved automatically. If any disagree, the invoice is flagged for review.',
          'The reason 3-way matching exists is to catch the errors that humans miss at scale — overcharges, duplicate billing, short shipments, vendor fraud. Every enterprise finance team wants it. Most cannot do it manually because the volume is too high.',
        ],
      },
      {
        kicker: 'NAV integration',
        heading: 'Live sync from Microsoft Dynamics NAV',
        body: [
          'For TGI Group, FinMark.ai pulls POs and GRNs directly from Microsoft Dynamics NAV through the staging API. The sync runs every 5 minutes. Currently the platform holds ~9,500 PO lines and ~1,100 GRN lines for TGID alone, with WACube on the same architecture. When an invoice arrives, the matching engine has access to the full PO and GRN history without any manual upload.',
          'The integration is bidirectional. POs and GRNs flow in. Approved invoices flow back into NAV with the standard Finmark fields and the WHT fields populated, ready to post. The whole loop runs without humans touching it except for the approval click.',
        ],
      },
      {
        kicker: 'Tolerances',
        heading: 'Configurable matching tolerances',
        body: [
          'Tolerances are configurable per company, per vendor, and per category. The defaults: price within 2-5%, quantity within 5%, total within 10% or a configurable absolute amount. Trusted long-term vendors can have looser tolerances; new or risk-flagged vendors can have tighter ones. The whole point is to focus human attention only on the variances that actually warrant it.',
          'When matching succeeds within tolerance, the invoice auto-approves and posts. When it fails, the variance is highlighted for the reviewer with the three documents side by side: PO, GRN, invoice, with the exact mismatch shown.',
        ],
      },
      {
        kicker: 'Lump-sum',
        heading: 'Lump-sum and ratio-based matching',
        body: [
          'Standard 3-way matching assumes one invoice line per PO line. Reality is messier. Telecom invoices have one PO line that says "Telephone" and a hundred invoice lines for calls, SMS, data, and bundles. Marketing invoices come with line items that do not map to specific PO lines at all.',
          'FinMark.ai handles two special cases. Lump-sum matching: a single PO line + N invoice lines passes if the total matches. Ratio-based matching for marketing: if the invoice has multiple lines and no description matching is possible, the system splits the amounts proportionally across PO lines. Both are real production use cases at TGI Group, not theoretical.',
        ],
      },
    ],
    relatedSiblings: ['invoice-processing-automation', 'microsoft-dynamics-nav-integration', 'ap-approval-workflows'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is 3-way matching in AP?',
        a: '3-way matching compares the purchase order, goods receipt, and vendor invoice before approving payment. All three must agree within tolerance. It catches overcharges, duplicate billing, short shipments, and vendor fraud.',
      },
      {
        q: 'Does FinMark.ai sync POs and GRNs from NAV?',
        a: 'Yes. POs and GRNs sync from Microsoft Dynamics NAV every 5 minutes via the staging API. For TGI Group the platform holds ~9,500 PO lines and ~1,100 GRN lines.',
      },
      {
        q: 'Can it handle 2-way matching too?',
        a: 'Yes — for invoices where 3-way matching is not appropriate (services, recurring charges, marketing), 2-way matching against the PO alone is supported.',
      },
      {
        q: 'What about telecom invoices with one PO line and many invoice lines?',
        a: 'Lump-sum matching is supported. A single PO line plus N invoice lines passes if the totals match within tolerance — this handles the telecom case directly without manual workarounds.',
      },
      {
        q: 'What about marketing invoices that do not map to PO lines?',
        a: 'Ratio-based matching: the invoice amounts are split proportionally across PO lines. Production-tested at TGI Group.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 4. Nigerian Withholding Tax Automation (THE killer differentiator)
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'nigerian-withholding-tax-automation',
    primaryKeyword: 'nigerian withholding tax automation',
    meta: {
      title: 'Nigerian Withholding Tax (WHT) Automation | FinMark.ai',
      description:
        'Automated Nigerian Withholding Tax computation per 2024 regulations — applied to every applicable invoice automatically and pushed to Microsoft Dynamics NAV with all 7 WHT fields populated.',
    },
    hero: {
      badge: 'Nigerian WHT Automation',
      h1: 'Nigerian Withholding Tax Automation, Built In',
      subhead:
        'Automated WHT computation per Nigerian 2024 regulations — applied to every applicable invoice with rate variations by vendor type and service category. 7 WHT fields pushed to Microsoft Dynamics NAV with every invoice.',
    },
    sections: [
      {
        kicker: 'The problem',
        heading: 'Why Nigerian WHT breaks generic AP tools',
        body: [
          'Nigerian Withholding Tax is a non-trivial compliance burden for any business operating in Nigeria. The 2024 regulations specify rate variations by vendor type (companies, individuals, foreign entities), by service category (consulting, construction, supply, technical services, rent, royalties, and more), and by TIN registration status. A correct WHT computation requires looking up the right rate for each invoice line, applying it to the right base amount, generating the right tax certificate references, and reporting the right fields to the tax authority.',
          'Generic AP tools — built for the US, the UK, or the EU — do none of this. They treat tax as a single sales tax field, which is the wrong model entirely for Nigerian WHT. The result is that finance teams running Nigerian operations either compute WHT by hand (slow, error-prone, audit risk) or hire local consultants to do it for them (expensive, slow, doesn\'t scale).',
        ],
      },
      {
        kicker: 'How it works',
        heading: 'How FinMark.ai computes WHT',
        body: [
          'When an invoice flows through the FinMark.ai pipeline, the WHT engine evaluates whether WHT applies, which rate to use, and what the tax base should be. The decision uses the vendor type (registered company vs individual vs foreign), the service category (mapped from the invoice line item), the TIN status, and the relevant 2024 regulation table. The engine applies the right rate, computes the tax amount, and produces the supporting fields needed for the tax certificate.',
          'All of this runs automatically as part of the invoice processing pipeline. By the time an invoice reaches the approval stage, the WHT has already been computed, the rate applied is visible in the audit trail, and the supporting fields are ready to push to NAV.',
        ],
      },
      {
        kicker: 'NAV integration',
        heading: 'WHT fields pushed to Microsoft Dynamics NAV',
        body: [
          'When an approved invoice pushes back into Microsoft Dynamics NAV, FinMark.ai populates 7 WHT fields alongside the standard invoice fields. The exact field set is configured for the TGI NAV instance and includes the WHT rate applied, the WHT base amount, the WHT tax amount, the certificate number reference, the vendor TIN, and the regulation category. NAV then has everything it needs to post the invoice with WHT correctly captured for tax filing.',
          'The integration is the part that makes the WHT automation actually useful. Computing WHT is one thing; having it land cleanly in NAV with all the right fields is what saves the AP team hours per invoice.',
        ],
      },
      {
        kicker: 'Why this matters',
        heading: 'Why this is the killer differentiator',
        body: [
          'There is no major AP automation tool — Bill.com, Stampli, Tipalti, AvidXchange, Coupa — that handles Nigerian WHT this way. The reason is simple: they are all built for the US or Europe and Nigerian WHT is not on their roadmap. Any African enterprise that wants AP automation has historically had to either accept the limitation (compute WHT by hand outside the tool) or build their own.',
          'FinMark.ai is built for this specific reality. WHT is a first-class feature, integrated into every step of the pipeline, pushed automatically to NAV. For African enterprise finance teams running NAV, this single feature makes FinMark.ai the only AP automation option that actually works end-to-end without manual workarounds.',
        ],
      },
    ],
    relatedSiblings: ['microsoft-dynamics-nav-integration', 'invoice-processing-automation'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is Nigerian Withholding Tax (WHT)?',
        a: 'Nigerian Withholding Tax is a tax deducted at source from payments to vendors, with rate variations by vendor type, service category, and TIN registration status. Compliance is governed by the Federal Inland Revenue Service (FIRS) and the rates were updated in the 2024 regulations.',
      },
      {
        q: 'Does FinMark.ai handle WHT automatically?',
        a: 'Yes. Every applicable invoice gets WHT computed automatically per the 2024 regulations, with the right rate applied based on vendor type, service category, and TIN status. The computation happens as Stage 6 of the pipeline before the invoice reaches approval.',
      },
      {
        q: 'What WHT fields get pushed to Microsoft Dynamics NAV?',
        a: '7 WHT fields are populated in NAV alongside the 4 standard Finmark fields: WHT rate applied, WHT base amount, WHT tax amount, certificate number reference, vendor TIN, regulation category, and audit trail link.',
      },
      {
        q: 'What if a vendor is exempt from WHT?',
        a: 'WHT exemption is configurable per vendor and per service category. Exempt invoices skip the WHT computation step but still log the exemption reason for audit purposes.',
      },
      {
        q: 'Can it handle WHT for foreign vendors and double tax treaties?',
        // TODO: Confirm — this may not be implemented yet
        a: 'Foreign vendor WHT is part of the 2024 regulation set the engine handles. Double tax treaty handling is on the roadmap as the customer base expands beyond TGI Group.',
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
        'Direct AP automation integration with on-premise Microsoft Dynamics NAV via SOAP middleware. PO/GRN sync every 5 minutes, approved invoice push-back, and WHT field support.',
    },
    hero: {
      badge: 'NAV Integration',
      h1: 'Direct Microsoft Dynamics NAV Integration for AP',
      subhead:
        'PO and GRN sync from on-premise Microsoft Dynamics NAV every 5 minutes. Approved invoices push back into NAV with both standard and Nigerian WHT fields populated. Built around real production NAV deployments.',
    },
    sections: [
      {
        kicker: 'The problem',
        heading: 'Why most AP tools cannot integrate with on-premise NAV',
        body: [
          'Microsoft Dynamics NAV is one of the most widely deployed ERPs in mid-market and enterprise organizations across Africa, the Middle East, and parts of Europe. It is also one of the hardest ERPs to integrate with from a modern AP automation tool. Most NAV deployments are on-premise, behind corporate firewalls, talking SOAP, and not exposed to the public internet. The cloud-first AP vendors built for SaaS-era ERPs (NetSuite, Xero, QuickBooks Online) simply do not have the integration story for on-premise NAV.',
          'The result is that NAV-based finance teams have been stuck — either using AP tools that integrate well with their cloud systems but not with the actual NAV system that holds their financial data, or running AP entirely on top of NAV with all the manual workflow problems that come with it.',
        ],
      },
      {
        kicker: 'How FinMark.ai integrates',
        heading: 'How FinMark.ai actually integrates with NAV',
        body: [
          'FinMark.ai uses a SOAP middleware layer (built specifically for the NAV integration) to bridge between the cloud-hosted FinMark.ai platform and on-premise Microsoft Dynamics NAV. The middleware handles the SOAP envelope handling, the WSDL contract, the authentication (NTLM where required), and the rate limiting that makes on-premise NAV integration manageable.',
          'POs and GRNs flow from NAV into FinMark.ai every 5 minutes via the middleware. Approved invoices flow back into NAV through the same channel with both the standard 4 Finmark fields and the 7 Nigerian WHT fields populated. The integration is bidirectional, scheduled, audited, and stable in production with TGI Group.',
        ],
      },
      {
        kicker: 'What syncs',
        heading: 'What gets synced between FinMark.ai and NAV',
        body: [
          'From NAV into FinMark.ai: Purchase orders (header + lines), Goods Receipt Notes (header + lines), vendor master data (when changes happen), and chart of accounts references for the GL coding step. The sync is incremental — only changed records flow on each cycle, which keeps the load on NAV manageable.',
          'From FinMark.ai into NAV: Approved invoices with all standard fields (vendor, dates, amounts, line items, GL coding) plus the FinMark-specific fields (vendor verification status, dedup result, approval state, sanity check pass/fail) plus the 7 Nigerian WHT fields. Once an invoice is in NAV, the AP team can post it like any other invoice — but with all the validation and tax computation already done.',
        ],
      },
      {
        kicker: 'Production reality',
        heading: 'What this looks like in production',
        body: [
          'For TGI Group today, the NAV integration handles two subsidiaries on a multi-tenant architecture. TGI Distri Limited (TGID) and West Africa Cube Limited (WACube) each have their own NAV instance, their own PO/GRN line counts, and their own subdomain on FinMark.ai. The middleware routes each subsidiary\'s sync independently and pushes approved invoices back to the right NAV instance.',
          'Currently TGID alone has ~9,589 PO lines and ~1,127 GRN lines synced and queryable by the matching engine. The integration runs continuously and has been verified end-to-end including the round-trip ERP push-back.',
        ],
      },
    ],
    relatedSiblings: ['nigerian-withholding-tax-automation', '3-way-matching', 'multi-tenant-ap-platform'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'Does FinMark.ai integrate with Microsoft Dynamics NAV?',
        a: 'Yes — directly. NAV is the production-supported ERP integration. POs, GRNs, and vendor data sync from NAV every 5 minutes. Approved invoices push back with both standard and WHT fields populated.',
      },
      {
        q: 'Does it work with on-premise NAV?',
        a: 'Yes. The integration uses a SOAP middleware layer specifically built to handle on-premise NAV deployments — including NTLM authentication where required and the firewall realities of on-premise systems.',
      },
      {
        q: 'How often does PO/GRN sync run?',
        a: 'Every 5 minutes by default. The sync is incremental so only changed records flow on each cycle.',
      },
      {
        q: 'What fields get pushed back to NAV?',
        a: '4 standard Finmark fields (vendor verification, dedup status, approval state, sanity result) plus 7 Nigerian WHT fields (rate, base, tax amount, certificate reference, vendor TIN, regulation category, audit link). Standard invoice fields (vendor, amounts, line items) are pushed alongside.',
      },
      {
        q: 'What about NAV cloud (Business Central)?',
        // TODO: Confirm — current production is on-premise NAV
        a: 'Current production is on-premise Dynamics NAV. Microsoft Dynamics 365 Business Central integration is on the roadmap as customers running BC come on board.',
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
        'Use SharePoint as your AP document repository. FinMark.ai reads invoices from SharePoint folders, processes them through Claude AI extraction, and writes portal uploads back to SharePoint.',
    },
    hero: {
      badge: 'SharePoint Integration',
      h1: 'SharePoint as Your AP Document Repository',
      subhead:
        'Read invoices from SharePoint folders automatically, run them through the FinMark.ai pipeline, and have portal uploads write back to SharePoint as your single source of truth for AP documents.',
    },
    sections: [
      {
        kicker: 'Why SharePoint',
        heading: 'Why SharePoint as the document repository',
        body: [
          'For Microsoft-shop enterprises, SharePoint is already the document repository for everything else. It has the access controls, the retention policies, the audit logs, and the compliance posture that finance teams need. Asking the AP team to move invoice documents into a separate AP-tool-specific storage layer fights the existing IT governance — and usually loses.',
          'The right pattern is to let SharePoint stay as the document repository and have the AP automation tool read from and write to SharePoint as needed. FinMark.ai is built around exactly this pattern.',
        ],
      },
      {
        kicker: 'How it works',
        heading: 'How FinMark.ai integrates with SharePoint',
        body: [
          'Vendors send invoices to a designated SharePoint folder (or multiple folders, organized by entity, vendor, or project). FinMark.ai watches the folder via Microsoft Graph webhooks and delta polling, picks up new invoices automatically, and runs them through the standard 8-stage pipeline. The original document stays in SharePoint where it always was; FinMark.ai just processes the data.',
          'For invoices that are uploaded directly through the FinMark.ai portal (the alternative intake channel), the platform writes them back to the same SharePoint folder. SharePoint stays as the single source of truth for AP documents regardless of how the invoice arrived.',
        ],
      },
      {
        kicker: 'Permissions',
        heading: 'What permissions FinMark.ai needs',
        body: [
          'FinMark.ai uses Microsoft Graph with the Sites.Read.All and Files.ReadWrite.All scopes to read invoices from designated folders and write portal uploads back. Permissions are scoped per tenant via Azure AD admin consent. There are no tenant-wide privileges beyond what Microsoft Graph already requires for SharePoint integration.',
          // TODO: Confirm exact scopes for current TGI deployment
          'For TGI Group, the SharePoint integration is configured but currently blocked on TGI providing the Azure AD Tenant ID and admin consent. The technical implementation is ready; the governance approval is the holdup.',
        ],
      },
      {
        kicker: 'Webhook + delta',
        heading: 'Why webhook + delta polling, not just webhook',
        body: [
          'Microsoft Graph webhooks fire when files change, but they have known reliability issues — missed events, delayed delivery, throttling under load. FinMark.ai uses webhooks as the primary signal AND runs delta polling on a schedule as a backup. Delta polling means we periodically ask Graph for everything that changed since the last check, which catches anything the webhook missed.',
          'The combination is more resilient than either alone. New invoices show up in FinMark.ai within minutes of landing in SharePoint, even if Graph webhooks are having a bad day.',
        ],
      },
    ],
    relatedSiblings: ['invoice-processing-automation', 'multi-tenant-ap-platform'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'How does FinMark.ai integrate with SharePoint?',
        a: 'Microsoft Graph webhooks + delta polling. FinMark.ai watches designated SharePoint folders, picks up new invoices automatically, and runs them through the 8-stage processing pipeline. Portal uploads also write back to SharePoint.',
      },
      {
        q: 'What permissions does FinMark.ai need on SharePoint?',
        a: 'Microsoft Graph Sites.Read.All and Files.ReadWrite.All, scoped to the designated folders via Azure AD admin consent. No tenant-wide privileges beyond what Graph requires for SharePoint integration.',
      },
      {
        q: 'Can the SharePoint integration work read-only?',
        a: 'Yes. If you do not want FinMark.ai writing back to SharePoint, the integration can run read-only — invoices come in via SharePoint, but portal uploads stay in FinMark.ai\'s own storage.',
      },
      {
        q: 'What happens if Microsoft Graph webhooks fail?',
        a: 'Delta polling runs on a schedule as a backup. Anything the webhook misses gets caught by the next polling cycle, typically within minutes.',
      },
      {
        q: 'Is there an audit trail of SharePoint events?',
        a: 'Yes. Every SharePoint event (file added, file modified, file deleted) that FinMark.ai processes is logged in the audit trail with timestamp, user, and resulting action.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 7. Multi-Tenant AP Platform
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'multi-tenant-ap-platform',
    primaryKeyword: 'multi tenant ap platform',
    meta: {
      title: 'Multi-Tenant AP Platform for Group Companies | FinMark.ai',
      description:
        'Run multiple subsidiaries on one AP platform with full data isolation. Subdomain-based multi-tenancy, per-company NAV integration, and a cross-company admin dashboard for group oversight.',
    },
    hero: {
      badge: 'Multi-Tenant Platform',
      h1: 'One AP Platform, Multiple Subsidiaries',
      subhead:
        'Multi-tenant by design. Each subsidiary gets its own subdomain, its own NAV integration, and full data isolation — with a single cross-company admin view for group-level oversight. Built around real group company structures.',
    },
    sections: [
      {
        kicker: 'The problem',
        heading: 'Why multi-tenancy matters for group companies',
        body: [
          'Group company structures are everywhere in African enterprise. A parent holding company runs multiple operating subsidiaries, each with its own NAV instance, its own vendor base, its own approval policy, and its own compliance reality. The parent group needs visibility across all of them; the subsidiaries need independence within them.',
          'Most AP automation tools either force you to deploy a separate instance per subsidiary (expensive, fragmented, hard to govern) or run everything in one instance with weak data isolation (governance nightmare, regulatory risk). Neither works for a group structure where the subsidiaries genuinely need to operate independently AND the parent needs cross-company oversight.',
        ],
      },
      {
        kicker: 'Subdomain architecture',
        heading: 'How FinMark.ai handles multi-tenancy',
        body: [
          'FinMark.ai uses a subdomain-based multi-tenancy pattern. Each subsidiary gets its own subdomain — for TGI Group, those are tgid.ap.finmark.ai for TGI Distri Limited and wacube.ap.finmark.ai for West Africa Cube Limited. Each subdomain routes to the same FinMark.ai platform but loads only that subsidiary\'s data, users, vendors, NAV integration, and approval workflows.',
          'Data isolation runs at the query level. Every database query is filtered by company_id automatically — there is no way for a TGID user to accidentally see WACube data, even with deliberate URL manipulation. The architecture is enforced at the application boundary, not just by access control.',
        ],
      },
      {
        kicker: 'Cross-company admin',
        heading: 'Cross-company admin for group oversight',
        body: [
          'For the parent group, FinMark.ai includes a separate admin dashboard (admin.ap.finmark.ai) that runs above the subsidiaries. Super admins can see invoices, approvals, audit trails, and key metrics across every subsidiary on the platform. This is where group-level CFOs and internal audit teams work — getting the consolidated view without losing the per-subsidiary isolation.',
          'There is also a separate "Pulse" dashboard (pulse.ap.finmark.ai) for monitoring AI usage, tenant metrics, and platform health across the whole deployment. Together with the cross-company admin, the group has full visibility into how the platform is performing.',
        ],
      },
      {
        kicker: 'Per-tenant NAV',
        heading: 'Per-tenant ERP integration',
        body: [
          'Each subsidiary can have its own Microsoft Dynamics NAV instance — and usually does, since group companies typically run separate NAV deployments per legal entity. FinMark.ai handles this by maintaining a separate NAV integration configuration per tenant. TGID syncs to TGID\'s NAV; WACube syncs to WACube\'s NAV. The middleware routes each tenant\'s sync to the right backend.',
          'This means a subsidiary added to the platform later can plug in its own NAV without affecting the existing tenants. The architecture is built for the reality of group companies onboarding subsidiaries one at a time.',
        ],
      },
    ],
    relatedSiblings: ['microsoft-dynamics-nav-integration', 'sharepoint-invoice-integration'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is a multi-tenant AP platform?',
        a: 'A multi-tenant AP platform runs multiple companies (typically subsidiaries of a parent group) on a single deployment with full data isolation between them. FinMark.ai uses subdomain-based multi-tenancy with per-tenant NAV integration and a cross-company admin view.',
      },
      {
        q: 'How is data isolated between tenants?',
        a: 'Data isolation runs at the query level. Every database query is filtered by company_id automatically. There is no way for one tenant to access another tenant\'s data even with URL manipulation — the isolation is enforced at the application boundary, not just by access control.',
      },
      {
        q: 'Can each subsidiary have its own NAV instance?',
        a: 'Yes. Each tenant gets its own NAV integration configuration. Group companies typically run separate NAV deployments per legal entity and FinMark.ai handles this directly — TGID syncs to TGID\'s NAV, WACube syncs to WACube\'s NAV, and the platform routes each tenant\'s data accordingly.',
      },
      {
        q: 'How does the cross-company admin work?',
        a: 'A separate admin dashboard runs above the subsidiary tenants. Super admins (typically group CFOs and internal audit) can see invoices, approvals, and key metrics across every subsidiary in one place — without losing the per-tenant isolation that the subsidiaries need.',
      },
      {
        q: 'Can subsidiaries be added or removed independently?',
        a: 'Yes. The architecture is designed for group companies onboarding subsidiaries one at a time. Adding a new subsidiary spins up a new subdomain, new NAV configuration, and new vendor base without affecting existing tenants.',
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
        'Configurable AP approval routing with vendor-approver mapping, role-based access, and one-click approve from the portal. Full audit trail for SOX and external audit.',
    },
    hero: {
      badge: 'AP Approval Workflows',
      h1: 'AP Approval Workflows That Match Your Real Policy',
      subhead:
        'Configurable approval routing with vendor-approver mappings, role-based access control, and one-click approve from the portal. Every action logged for full audit trail.',
    },
    sections: [
      {
        kicker: 'What it does',
        heading: 'What approval workflows actually do',
        body: [
          'Approval workflows are the rules that determine who approves which invoices and in what order before payment is released. A working approval workflow auto-approves the routine cases (matched POs from known vendors under threshold), routes the rest by amount or category, escalates large invoices to the right approver level, and produces an audit trail for everything.',
          'Most AP teams hate their approval workflows because they are either too rigid (every invoice goes through the same process) or too loose (high-value invoices get the same quick approval as routine ones). The right system adapts to your actual policy without forcing you to change it.',
        ],
      },
      {
        kicker: 'Vendor-approver mapping',
        heading: 'Vendor-approver mapping',
        body: [
          'FinMark.ai supports vendor-approver mapping as a first-class feature. Specific vendors can be tied to specific approvers — the marketing department head approves all marketing vendor invoices, the IT manager approves all IT vendor invoices, and so on. This mirrors how real finance teams actually delegate approval authority and removes the routing ambiguity that slows down generic approval systems.',
          'Vendor-approver mappings can be combined with amount thresholds, category rules, and escalation paths. The result is routing that matches your real policy, not a vendor-imposed one.',
        ],
      },
      {
        kicker: 'Role-based access',
        heading: 'Role-based access control',
        body: [
          'FinMark.ai has four built-in roles: super_admin (cross-company access for group oversight), admin (full access within a single company), ap_team (process invoices, code, route for approval), and viewer (read-only). Permissions are enforced at the application boundary — including the cross-company isolation in the multi-tenant architecture.',
          'For TGI Group, the role assignments span both subsidiaries: super admins see TGID + WACube, company admins see only their subsidiary, AP team members process invoices for their assigned company. The access matrix is configurable per deployment.',
        ],
      },
      {
        kicker: 'Audit trail',
        heading: 'Every approval action audited',
        body: [
          'Every approval action is logged with timestamp, approver identity, the invoice details at time of approval, and any rejection comments. The audit trail is immutable and queryable. For TGI Group, the platform has accumulated 2,993+ audit trail entries across the 287+ invoices processed — every single state change captured.',
          'Auditors love this because it makes evidence-of-control easy to demonstrate. Compliance officers love it because the regulatory expectations around approval audit trails are increasingly strict.',
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
        a: 'Yes. Invoices from known vendors that match a PO and fall under a configured threshold can auto-approve. The risk is low because the controls (vendor verification, PO matching, sanity checks, WHT computation) have already run before the approval step.',
      },
      {
        q: 'What approval roles are supported?',
        a: 'Four built-in roles: super_admin (cross-company), admin (full access within one company), ap_team (process invoices), viewer (read-only). Permissions are enforced at the application boundary including the cross-company isolation in multi-tenant deployments.',
      },
      {
        q: 'How is the audit trail captured?',
        a: 'Every approval action is logged with timestamp, approver identity, invoice details at time of approval, and any rejection comments. The trail is immutable and queryable. For TGI Group, 2,993+ audit trail entries across 287+ invoices.',
      },
      {
        q: 'Can approvers approve from mobile?',
        // TODO: Confirm — current production is portal-based, mobile may not be ready
        a: 'Approval is currently portal-based with one-click approve flows. Mobile-optimized approval flows are on the roadmap.',
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
      title: 'Duplicate Invoice Detection & 10 Sanity Checks | FinMark.ai',
      description:
        'SHA-256 deduplication catches every duplicate invoice. 10 rule-based sanity checks catch the errors AI alone would miss — date, amount, tax math, vendor verification, and more.',
    },
    hero: {
      badge: 'Duplicate Detection',
      h1: 'Duplicate Invoice Detection and 10 Sanity Checks',
      subhead:
        'SHA-256 deduplication catches every duplicate before it enters the workflow. 10 rule-based sanity checks catch the errors that AI alone cannot — date, amount, tax math, vendor sanity, line-item totals, and more.',
    },
    sections: [
      {
        kicker: 'Dedup',
        heading: 'How SHA-256 deduplication works',
        body: [
          'Every invoice that enters FinMark.ai gets fingerprinted with SHA-256 — a cryptographic hash of the file contents that uniquely identifies the document. The fingerprint is checked against history before any other processing happens. If the same file has been uploaded before, the duplicate is flagged immediately and never enters the workflow.',
          'SHA-256 fingerprinting catches the obvious duplicate case: a vendor sends the same invoice twice, an AP clerk uploads the same file twice, an automated email forward triggers twice. These cases happen constantly in real AP workflows and they are the easiest fraud and error category to prevent. FinMark.ai catches them at the door.',
        ],
      },
      {
        kicker: 'Sanity checks',
        heading: 'The 10 sanity checks that catch the rest',
        body: [
          'AI extraction is great, but no AI is perfect. The 2% of cases where Claude\'s extraction is slightly off — a date misread, a tax amount off by a digit, a vendor name almost right — would cause real problems if they made it into NAV. Rule-based sanity checks catch these cases as a second line of defense.',
          'FinMark.ai runs 10 sanity checks on every invoice after extraction. The checks cover: date sanity (is the invoice date plausible, within reasonable range), amount sanity (does the invoice total fall within historical norms for this vendor), vendor verification (is the vendor in the master, is the TIN valid), line-item totals (do the line items sum to the invoice total), tax math (does the tax amount match the rate and base), currency consistency (does the invoice currency match the vendor expectation), PO reference sanity (does the referenced PO exist and is it open), GRN reference sanity (does the GRN exist and match), duplicate near-match (is this an almost-duplicate of a recent invoice), and bank detail change detection (is this a vendor whose bank details changed recently — a BEC red flag).',
        ],
      },
      {
        kicker: 'Fraud prevention',
        heading: 'How sanity checks prevent fraud',
        body: [
          'The sanity checks are not just about catching extraction errors. They are also a fraud prevention layer. Bank detail change detection catches the most common Business Email Compromise (BEC) pattern. Vendor master verification catches vendor impersonation. Line-item math verification catches inflated invoices. Each check is a small control, but together they make a substantial difference in the fraud rate that reaches the approval stage.',
          'These controls do not replace explicit fraud detection (which would require dedicated ML models), but for the categories of fraud that have clear signals — duplicates, impersonation, math errors, BEC — they catch the vast majority before payment.',
        ],
      },
      {
        kicker: 'What\'s next',
        heading: 'What is and is not in scope today',
        body: [
          // TODO: This section is honest about scope. Update if/when ML fraud is added.
          'The current FinMark.ai implementation focuses on dedup and rule-based sanity checks. ML-based anomaly detection for fraud — looking at vendor history patterns, unusual amounts, timing anomalies — is on the roadmap but not in production today. The deterministic checks above handle the highest-impact fraud categories and are production-tested at TGI Group.',
        ],
      },
    ],
    relatedSiblings: ['invoice-processing-automation', 'claude-ai-invoice-extraction', 'ap-approval-workflows'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'How does FinMark.ai detect duplicate invoices?',
        a: 'Every invoice gets a SHA-256 fingerprint of the file contents. The fingerprint is checked against history before any other processing. Exact duplicates are blocked immediately. Near-duplicates (slightly different invoice numbers, amounts off by a few dollars) are caught by the sanity check layer.',
      },
      {
        q: 'What are the 10 sanity checks?',
        a: 'Date sanity, amount sanity, vendor verification, line-item totals, tax math, currency consistency, PO reference sanity, GRN reference sanity, near-duplicate detection, and bank detail change detection. They run after extraction as a second line of defense before approval.',
      },
      {
        q: 'Does FinMark.ai have ML-based fraud detection?',
        a: 'Not today. Current fraud prevention is built on dedup + 10 rule-based sanity checks, which catch the highest-impact categories (duplicates, BEC, impersonation, inflated invoices, math errors). ML-based anomaly detection is on the roadmap for the next phase.',
      },
      {
        q: 'How does it catch Business Email Compromise (BEC)?',
        a: 'Bank detail change detection: if a vendor\'s bank details have changed recently, the system flags any invoice paid to the new account for explicit human verification. Combined with vendor master controls, this catches the most common BEC pattern.',
      },
      {
        q: 'What happens to flagged invoices?',
        a: 'Flagged invoices go to a review queue with the failed check, the relevant context, and a recommended action. Reviewers either confirm and proceed, reject and notify the vendor, or escalate.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 10. AP Automation Software (buyer's guide — keeps generic SEO target)
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'ap-automation-software',
    primaryKeyword: 'ap automation software',
    meta: {
      title: 'AP Automation Software for African Enterprise | FinMark.ai',
      description:
        'How to evaluate AP automation software for African enterprise. The criteria most US-built tools fail — Microsoft Dynamics NAV integration, Nigerian WHT, multi-subsidiary support.',
    },
    hero: {
      badge: 'AP Automation Software',
      h1: 'AP Automation Software for African Enterprise',
      subhead:
        'A buyer\'s guide focused on what actually matters for African enterprise finance teams — the features US-built AP tools usually miss, the criteria that matter most, and how to evaluate honestly.',
    },
    sections: [
      {
        kicker: 'The category',
        heading: 'Why most AP automation software is built for the wrong market',
        body: [
          'The AP automation category is dominated by tools built for US and European mid-market companies. Bill.com, Stampli, Tipalti, AvidXchange, and the rest were designed for clean cloud ERPs (NetSuite, QuickBooks, Xero), simple sales tax models (US sales tax, EU VAT), and single-currency single-entity finance teams. They are excellent at what they do — but what they do is not what African enterprise finance teams actually need.',
          'The mismatch shows up in three places. First, the ERP integration: most African enterprise runs Microsoft Dynamics NAV, often on-premise, which the cloud-first AP vendors do not handle well. Second, the tax model: Nigerian Withholding Tax is more complex than US sales tax and is handled by exactly zero major AP tools. Third, the entity model: African groups typically run multiple subsidiaries with separate NAV instances, and most AP tools treat that as an awkward edge case rather than a primary use case.',
        ],
      },
      {
        kicker: 'Criteria',
        heading: 'The buying criteria that actually matter',
        body: [
          'Six criteria separate the AP automation tools that work for African enterprise from the ones that do not. (1) Microsoft Dynamics NAV integration — direct, ideally on-premise, with bidirectional sync. (2) Nigerian Withholding Tax computation — built in, not bolted on, with proper field push to NAV. (3) Multi-tenant architecture for group companies running multiple subsidiaries. (4) SharePoint integration for the Microsoft-shop document repository pattern. (5) Document AI accuracy on real (not curated) invoices. (6) Audit trail that satisfies external audit and regulatory expectations.',
          'A seventh criterion that matters more than people realize: how the vendor handles the messy reality of African enterprise — the on-premise systems, the firewall realities, the local tax regulations, the multi-subsidiary structures. Generic global AP tools usually do not handle these well because they were never designed for them.',
        ],
      },
      {
        kicker: 'Traps',
        heading: 'Common evaluation traps',
        body: [
          'The biggest trap is letting a US AP vendor demo set your expectations. Their demo will look great on a clean QuickBooks integration with simple sales tax — and tell you nothing about how the tool handles your real NAV, your real WHT regulations, your real subsidiaries. The right evaluation is a paid pilot on your actual data, not a 30-minute click-through.',
          'The second trap is checklist-buying. Long feature lists are misleading because most teams use 20% of any tool. Focus on the specific gaps the tool will fill in your existing workflow, not the long list of features you might use someday. The third trap is buying based on price alone without considering total cost of ownership: implementation effort, integration work, ongoing maintenance, the cost of running fundamental gaps manually outside the tool.',
        ],
      },
      {
        kicker: 'Decision framework',
        heading: 'How to actually evaluate AP software for African enterprise',
        body: [
          'Start by writing down what you need to automate that your current process does badly. Be specific about your ERP (NAV version, on-premise vs cloud), your tax obligations (WHT rates, exemptions, certificate requirements), your entity structure (how many subsidiaries, do they share AP or have separate teams), and your document repository (SharePoint, file shares, email).',
          'Then evaluate vendors against your specific list, not against a generic comparison matrix. Run paid pilots with the top candidates on your real data — including invoices that you know are problematic. The pilot is the only honest evaluation. Anything less is buying based on marketing.',
        ],
      },
    ],
    relatedSiblings: ['invoice-processing-automation', 'microsoft-dynamics-nav-integration', 'nigerian-withholding-tax-automation'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is AP automation software?',
        a: 'AP automation software handles the accounts payable workflow automatically — capture, extraction, matching, sanity checks, approval, and ERP integration. The category is dominated by US-built tools that work well for cloud ERPs and simple tax models but struggle with African enterprise reality.',
      },
      {
        q: 'Why does African enterprise need different AP automation software?',
        a: 'Three reasons. ERP: most African enterprise runs Microsoft Dynamics NAV, often on-premise, which cloud-first AP vendors handle poorly. Tax: Nigerian Withholding Tax is more complex than US sales tax and is not supported by major AP tools. Entity: African groups run multiple subsidiaries with separate NAV instances, which most tools treat as an edge case.',
      },
      {
        q: 'Can I use Bill.com / Stampli / Tipalti for Nigerian operations?',
        a: 'You can use them for parts of the workflow, but you will end up running Nigerian WHT computation manually outside the tool, which defeats most of the automation value. None of the major US AP tools handle Nigerian WHT this deeply.',
      },
      {
        q: 'How do I evaluate AP software for African enterprise?',
        a: 'Write down your specific requirements (NAV version, WHT obligations, subsidiary count, document repository), evaluate vendors against your specific list, and run paid pilots on your real data — including the problematic invoices. The pilot is the only honest evaluation.',
      },
      {
        q: 'How is FinMark.ai different from US-built AP automation?',
        a: 'FinMark.ai is built specifically for African enterprise: direct Microsoft Dynamics NAV integration (including on-premise), Nigerian WHT as a first-class feature, multi-tenant architecture for group companies, SharePoint integration for the Microsoft-shop pattern, and Claude Opus 4.6 as the AI engine. None of these are bolted-on adaptations — they are the core design.',
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
