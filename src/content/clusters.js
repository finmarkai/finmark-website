// Cluster page content config — single source of truth for all cluster pages.
//
// All clusters are children of the accounts-payable-automation pillar — FinMark.ai
// is a single-product company and the site reflects that.
//
// Each cluster has:
//   - pillar: parent pillar slug (must match a slug in pillars.js)
//   - slug: cluster URL segment
//   - primaryKeyword
//   - meta: { title, description }
//   - hero: { badge, h1, subhead }
//   - sections: ordered array of content sections (renders via PillarSection)
//   - relatedSiblings: 2-3 sibling cluster slugs (within same pillar)
//   - crossPillarLink: optional — { pillarSlug, anchor } — currently null
//     because we have one pillar
//   - faqs: FAQ items
//
// To add a new cluster: append a new entry. ClusterPage.jsx renders any cluster
// from this config — no per-page component needed.
//
// IMPORTANT: Keep claims honest. Don't promise capabilities you don't ship.
// TODO comments mark spots where the user should fill in real specifics.

export const CLUSTERS = [
  // ─────────────────────────────────────────────────────────────────
  // 1. Invoice Processing Automation
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'invoice-processing-automation',
    primaryKeyword: 'invoice processing automation',
    meta: {
      title: 'Invoice Processing Automation: A Practical Guide | FinMark.ai',
      description:
        'How invoice processing automation actually works in 2026. AI-powered capture, coding, matching, and approval — without the brittle scripts of legacy AP tools.',
    },
    hero: {
      badge: 'Invoice Processing',
      h1: 'Invoice Processing Automation That Actually Works',
      subhead:
        'Capture, code, and approve invoices automatically — across every format your vendors send and every accounting system you run. Built for the messiness of real AP, not just clean demo data.',
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What invoice processing automation actually means',
        body: [
          'Invoice processing automation is software that takes invoices from receipt all the way to GL posting without humans touching them — except to handle the small percentage of true exceptions. It covers four steps: capture (getting the invoice into the system), extraction (pulling out the structured data), validation (checking it matches the PO and the vendor record), and routing (sending it to the right approver and posting to the right account).',
          'The version of invoice processing automation that worked five years ago was rule-based: hand-coded templates for each vendor format, brittle scripts to handle each system. The version that works today is AI-based: machine learning models that read any format, learn from your specific patterns, and handle exceptions natively. The difference is whether your AP team spends its week processing invoices or babysitting a tool that was supposed to process them.',
        ],
      },
      {
        kicker: 'Capture',
        heading: 'How modern invoice capture works',
        body: [
          'Modern invoice capture pulls invoices from every channel your vendors actually use: email (forwarded to a dedicated address), vendor portals, EDI feeds, direct API uploads, and even photos taken on a phone. The capture layer normalizes everything into a single processing queue regardless of where it came from.',
          'Once the invoice is in the queue, document AI extracts the structured fields: vendor, invoice number, line items, amounts, taxes, due date. Modern document AI is dramatically more accurate than the OCR tools of five years ago because it uses large language models that understand context, not just character recognition. A well-tuned system handles 95%+ of invoices fully automatically and routes the rest to a human reviewer with the extracted fields pre-filled for fast confirmation.',
        ],
      },
      {
        kicker: 'Coding & matching',
        heading: 'Automated coding and matching',
        body: [
          'After capture, the system codes the invoice — assigning the right GL account, cost center, project, and tax codes. Machine learning predicts these from your historical patterns: this vendor always codes to this account, this line item type always goes to this cost center. New vendors and unfamiliar items get flagged for human review on the first occurrence and then learned for future runs.',
          'Three-way matching against the PO and goods receipt happens automatically. If the invoice matches the PO and the receipt within tolerance, it auto-posts. If there is a discrepancy — quantity off, price changed, missing receipt — the exception is routed to a human with full context attached: the original PO, the receipt, the invoice, and the specific mismatch highlighted.',
        ],
      },
      {
        kicker: 'Approval & posting',
        heading: 'Approval routing and GL posting',
        body: [
          'Approval routing follows the policy you configure. Most policies have multiple paths: auto-approve under a threshold, route to a department head between thresholds, route to a VP above. Routing can also depend on category, vendor, project, or any other field. Approvers get notified by email or Slack with everything they need to decide in one click.',
          'Once approved, the invoice posts to your GL automatically. The audit trail captures every step: who saw it, who touched it, who approved it, when it posted. Finance teams running automated invoice processing typically see month-end close get easier as a side effect — the data is already clean, coded, and posted by the time the period closes.',
        ],
      },
    ],
    relatedSiblings: ['invoice-ocr-data-extraction', '3-way-matching', 'ap-approval-workflows'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is invoice processing automation?',
        a: 'Invoice processing automation is software that handles invoices from capture to GL posting automatically. Modern systems use AI to extract structured data from any invoice format, predict the right coding, match against POs, and route through approval — without hand-coded templates per vendor.',
      },
      {
        q: 'How accurate is automated invoice processing?',
        a: 'Modern document AI extracts structured invoice data with 95%+ accuracy across formats. The remaining cases get flagged for human review with the AI predictions pre-filled, so confirmation takes seconds instead of minutes.',
      },
      {
        q: 'Can it handle invoices from new vendors?',
        a: 'Yes. Unlike rule-based systems that need a template per vendor, AI-based invoice processing handles any format on day one. Accuracy improves over time as the model sees more invoices from each vendor.',
      },
      {
        q: 'How long does invoice processing automation take to implement?',
        a: 'Most teams go live in 2-4 weeks. The biggest variables are how clean your existing vendor master data is and how complex your approval policy is.',
      },
      {
        q: 'What happens to exceptions and errors?',
        a: 'Exceptions are flagged for human review with full context attached — the original invoice, the AI predictions, the matching PO, and the specific reason for the flag. Reviewers resolve them in minutes instead of hours, and the system learns from each resolution.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 2. Invoice OCR & Data Extraction
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'invoice-ocr-data-extraction',
    primaryKeyword: 'invoice ocr',
    meta: {
      title: 'Invoice OCR & Data Extraction: Beyond Legacy OCR | FinMark.ai',
      description:
        'How modern document AI replaces legacy OCR for invoice data extraction. 95%+ accuracy on real-world invoices, no per-vendor templates required.',
    },
    hero: {
      badge: 'Invoice OCR',
      h1: 'Invoice OCR and Data Extraction, Built on Document AI',
      subhead:
        'Modern document AI extracts structured data from any invoice format with 95%+ accuracy — no templates, no per-vendor configuration, no babysitting.',
    },
    sections: [
      {
        kicker: 'OCR vs document AI',
        heading: 'Why legacy OCR is no longer enough',
        body: [
          'Optical character recognition has been around for decades. The classic version recognized characters one at a time and stitched them into text. For clean, structured documents it worked fine. For real-world invoices — with logos, table layouts, mixed fonts, scanner artifacts, and the endless variety of how vendors format their bills — it failed constantly. Companies spent more time fixing OCR errors than they would have spent typing the invoices themselves.',
          'Modern document AI is a different category. It uses large language models and computer vision together to understand documents the way a human does — reading the layout, understanding the context, and extracting the structured fields directly. It handles formats it has never seen before because it understands what an invoice IS, not just what specific invoices look like.',
        ],
      },
      {
        kicker: 'How it works',
        heading: 'How document AI extracts invoice data',
        body: [
          'When an invoice arrives, the document AI model first identifies the document type (is this an invoice, a receipt, a credit memo). Then it extracts the header fields (vendor, invoice number, date, due date, total) and the line items (description, quantity, unit price, total per line). It handles tables, multi-page documents, and the layout variations that confuse older OCR.',
          'The output is structured data ready to flow into your AP system. Confidence scores are attached to every field so the system knows when to trust the extraction and when to flag for human review. Over time, the model learns from corrections and gets better on your specific vendor mix.',
        ],
      },
      {
        kicker: 'Accuracy',
        heading: 'How accurate is modern invoice OCR in 2026',
        body: [
          'Production document AI achieves 95%+ field-level accuracy on typical invoices and 98%+ on header fields like invoice number, date, and total. The remaining 2-5% are messy edge cases — handwritten line items, severely damaged scans, unusual formats — which get flagged for human review with the AI predictions pre-filled.',
          'The key metric is not raw accuracy but human touch rate. A system that achieves 99% accuracy but flags 30% of invoices for review is worse than a system that achieves 95% accuracy but only flags 5%. FinMark.ai is tuned to maximize the percentage of invoices that need zero human intervention while keeping confidence thresholds high enough that errors do not slip through.',
        ],
      },
      {
        kicker: 'Edge cases',
        heading: 'Handling the long tail of edge cases',
        body: [
          'No invoice OCR system handles every case automatically. Handwritten line items, photos taken at angles, scanned documents with bleed-through, multi-currency invoices with non-standard symbols — these all require special handling. The difference between a good and great system is how well it surfaces these cases for human review without losing them entirely.',
          'FinMark.ai routes every uncertain extraction to a review queue with the source document, the AI predictions, the confidence scores, and a one-click confirmation flow. Human review takes seconds, not minutes, and the model learns from every correction.',
        ],
      },
    ],
    relatedSiblings: ['invoice-processing-automation', '3-way-matching'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is invoice OCR?',
        a: 'Invoice OCR is software that extracts structured data (vendor, line items, amounts, dates) from invoice documents automatically. Modern invoice OCR uses document AI — large language models combined with computer vision — instead of legacy character recognition.',
      },
      {
        q: 'How accurate is invoice OCR in 2026?',
        a: 'Production document AI achieves 95%+ field-level accuracy on typical invoices. Header fields like invoice number, date, and total are usually 98%+. Edge cases get flagged for human review with predictions pre-filled.',
      },
      {
        q: 'Does it work on scanned PDFs?',
        a: 'Yes. Modern document AI handles scanned PDFs, photos of paper invoices, and even handwritten line items — though accuracy is highest on digital-native PDFs.',
      },
      {
        q: 'Do I need to set up templates per vendor?',
        a: 'No. Unlike legacy OCR, document AI handles any vendor format on day one without templates. The model gets more accurate over time as it sees more invoices from each vendor, but you do not need to configure anything.',
      },
      {
        q: 'What languages does invoice OCR support?',
        // TODO: Update this with actual supported languages
        a: 'Modern document AI supports the major languages used in international business invoices including English, Spanish, French, German, Portuguese, and others. Talk to sales for specifics on languages relevant to your vendor mix.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 3. 3-Way Matching Automation
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: '3-way-matching',
    primaryKeyword: '3 way matching',
    meta: {
      title: '3-Way Matching Automation in AP | FinMark.ai',
      description:
        'How automated 3-way matching catches invoice errors and fraud before payment. Match invoices to POs and goods receipts automatically.',
    },
    hero: {
      badge: '3-Way Matching',
      h1: 'Automated 3-Way Matching for Modern AP',
      subhead:
        'Match invoices to POs and goods receipts automatically. Auto-approve clean matches, route real exceptions to a human with full context — and stop the wrong invoices from getting paid.',
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What 3-way matching actually is',
        body: [
          '3-way matching is the AP control that compares three documents before an invoice gets paid: the purchase order (what was supposed to be ordered), the goods receipt (what was actually received), and the vendor invoice (what they are billing you for). All three need to agree within tolerance for the invoice to be approved automatically. If any of them disagree, the invoice gets flagged.',
          'It is one of the most basic financial controls in AP — and one of the most expensive to do by hand. Manual three-way matching means an AP clerk pulling up each document, comparing line items, calculating tolerance, and documenting the result. For high-volume AP teams it consumes a brutal amount of time and is the slowest part of the workflow.',
        ],
      },
      {
        kicker: 'Why it matters',
        heading: 'Why 3-way matching is non-negotiable for AP control',
        body: [
          'The reason 3-way matching exists is fraud prevention and error catching. Without it, finance teams pay invoices for goods they never ordered, for quantities they never received, or at prices that were never agreed. These errors are usually small individually but enormous in aggregate. A medium-sized company processing tens of thousands of invoices a year without proper matching can lose millions to overcharges, duplicate billing, and outright vendor fraud.',
          'Three-way matching also catches the kind of mistakes that look innocent: a vendor who quietly raises prices below the radar, a clerk who enters the wrong PO number, a delivery that came in 10% short but was invoiced in full. Manual reviewers miss these constantly because the volume is too high to spot patterns.',
        ],
      },
      {
        kicker: 'Automation',
        heading: 'How automated 3-way matching works',
        body: [
          'The automated version does what a human would do, but faster and more consistently. When an invoice arrives, the system finds the matching PO by number, vendor, or fuzzy match. It pulls the goods receipt for that PO. It compares line items, quantities, and prices across all three documents. If they match within your configured tolerances (price within 2%, quantity within 5%, etc.), the invoice auto-approves and posts to the GL. If they do not, it routes to a human with the exact discrepancy highlighted.',
          'Tolerances are configurable per vendor, category, or amount. A trusted long-term vendor might have looser tolerances than a new one. High-value invoices might have tighter ones. The whole point is to focus human attention only on the cases that actually warrant it.',
        ],
      },
      {
        kicker: 'Exceptions',
        heading: 'How exceptions get handled',
        body: [
          'When 3-way matching fails, the exception goes to a review queue with the three documents, the highlighted discrepancy, and a recommended action. Most exceptions are easy to resolve — a missing receipt, a price update that was approved but not communicated, a quantity short-shipment. The reviewer either approves the variance, rejects the invoice, or escalates to procurement.',
          'The valuable property of automated matching is that it surfaces patterns. If one vendor consistently invoices for more than was received, that is a vendor relationship problem. If a particular GL account has unusually high variance rates, that is a procurement process problem. Patterns that were invisible in manual workflows become obvious when the system tracks every match and exception.',
        ],
      },
    ],
    relatedSiblings: ['invoice-processing-automation', 'invoice-fraud-detection', 'ap-approval-workflows'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is 3-way matching in accounts payable?',
        a: '3-way matching is the AP control that compares the purchase order, goods receipt, and vendor invoice before approving payment. All three must agree within tolerance for the invoice to auto-approve. It catches overcharges, duplicate billing, short shipments, and vendor fraud.',
      },
      {
        q: 'What is the difference between 2-way and 3-way matching?',
        a: '2-way matching compares only the PO and the invoice. 3-way matching adds the goods receipt, which catches cases where the invoice matches the PO but the goods never arrived (or arrived short). 3-way is the standard for inventory-heavy businesses; 2-way is sometimes used for services and recurring expenses.',
      },
      {
        q: 'Can 3-way matching be automated for all invoices?',
        a: 'Most invoices can be matched automatically with the right tolerances. The exceptions are cases where one of the three documents is missing or where the variance exceeds tolerance — these get routed to humans for review.',
      },
      {
        q: 'What tolerances should I configure?',
        a: 'Tolerances depend on your business. Common starting points: price tolerance of 2-5%, quantity tolerance of 5%, total tolerance of 10% or $100 (whichever is smaller). Tighter tolerances catch more errors but flag more exceptions. Most teams iterate over the first few months.',
      },
      {
        q: 'Does 3-way matching require a procurement system?',
        a: 'Yes — for true 3-way matching you need POs and goods receipts somewhere. Most modern ERPs handle this. If you do not have a procurement system and only have invoices, the right control is 2-way matching (PO and invoice) or invoice-only review with strong fraud detection.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 4. AP Approval Workflows
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'ap-approval-workflows',
    primaryKeyword: 'ap approval workflows',
    meta: {
      title: 'AP Approval Workflows: Configurable & Auditable | FinMark.ai',
      description:
        'Configurable AP approval workflows that route invoices by amount, category, vendor, or department. Auto-approve where safe, escalate where needed.',
    },
    hero: {
      badge: 'AP Approval Workflows',
      h1: 'AP Approval Workflows That Actually Match Your Policy',
      subhead:
        'Configurable approval routing with auto-approve under threshold, multi-level escalation, vendor-specific rules, and one-click decisions for approvers — all logged for audit.',
    },
    sections: [
      {
        kicker: 'The problem',
        heading: 'Why most AP approval workflows are broken',
        body: [
          'Approval workflows are the part of AP that finance teams are most often unhappy with. Either they are too rigid (every invoice goes through the same five-step process whether it is $50 or $50,000) or too loose (high-value invoices slip through with the same quick-click approval as routine ones). The first is slow and frustrating. The second is dangerous.',
          'The other failure mode is approval queues that nobody actually monitors. Invoices pile up waiting for a manager who is on vacation or who has too many other notifications. The AP team chases approvals manually, sends reminder emails, and watches due dates slip — defeating the whole point of having an approval system in the first place.',
        ],
      },
      {
        kicker: 'What good looks like',
        heading: 'What a working AP approval workflow looks like',
        body: [
          'A good approval workflow has five properties. First, it auto-approves the routine cases that do not need human attention (recurring vendors, expected amounts, matched POs). Second, it routes non-routine cases by the right criteria (amount, category, project, GL account). Third, it has multi-level escalation when amounts are large. Fourth, it handles delegation when an approver is unavailable. Fifth, it makes the approval action itself frictionless — one click from an email or Slack message, on mobile or desktop, with all context attached.',
          'Behind all of this, every action is logged with full context for audit. Who approved what, when, on what device, with what justification. Auditors love this; AP managers love it more.',
        ],
      },
      {
        kicker: 'Configuration',
        heading: 'How to configure approval workflows that actually work',
        body: [
          'The right configuration depends on your company, but a few patterns hold across most teams. Auto-approve under $1,000 for matched POs from known vendors. Route $1,000-$10,000 to the department head. Route $10,000-$100,000 to the VP. Route above $100,000 to the CFO or CEO. Add vendor-specific rules where needed (a strategic vendor might bypass certain steps; a new vendor might add an extra one).',
          'Configurability matters because no two finance teams have the same policy. The wrong approach is a tool that imposes its own workflow and forces you to adapt. The right approach is a tool that adapts to your policy — including the parts of your policy that exist for political or historical reasons that are not going away.',
        ],
      },
      {
        kicker: 'Mobile & Slack',
        heading: 'Approve from anywhere, in seconds',
        body: [
          'The most common bottleneck in approval workflows is approver attention. Managers are busy, they travel, they get hundreds of emails a day, and a multi-step web form is not going to win their attention. The solution is to bring approval to where they already are: their inbox or their Slack.',
          'A good AP system sends approvers a single message with everything they need to decide — the invoice, the amount, the GL coding, the matching PO, the vendor history. They click approve or reject in one tap from their phone, and the action is logged with full audit trail. Approval times go from days to hours.',
        ],
      },
    ],
    relatedSiblings: ['invoice-processing-automation', '3-way-matching', 'vendor-payment-automation'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What are AP approval workflows?',
        a: 'AP approval workflows are the rules that determine who approves which invoices and in what sequence before payment is released. Modern AP approval workflows are configurable by amount, category, vendor, project, or any other field, with auto-approval for routine cases.',
      },
      {
        q: 'Should we auto-approve invoices?',
        a: 'For routine cases, yes. Invoices from known vendors that match a PO and fall under a configured threshold can be auto-approved safely. The risk is low because the controls (vendor verification, PO matching, fraud screening) have already run. Auto-approval is what makes the human review of non-routine cases actually possible.',
      },
      {
        q: 'How does delegation work when an approver is unavailable?',
        a: 'Delegation rules let you specify a backup approver for each role. When the primary approver is on vacation or out of office, invoices route to the backup automatically. Delegation can be time-bound or category-specific.',
      },
      {
        q: 'Can approvers approve from mobile or Slack?',
        a: 'Yes. Modern AP tools integrate with email, Slack, and mobile apps. Approvers see all the context they need in one message and can approve or reject with one tap. This dramatically reduces approval cycle times.',
      },
      {
        q: 'How is the approval audit trail captured?',
        a: 'Every approval action is logged with timestamp, approver identity, the invoice details at time of approval, and any comments. The audit trail is immutable and queryable, and exports cleanly for SOX or external audit requirements.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 5. Vendor Payment Automation
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'vendor-payment-automation',
    primaryKeyword: 'vendor payment automation',
    meta: {
      title: 'Vendor Payment Automation Across Every Rail | FinMark.ai',
      description:
        'Automate vendor payments across ACH, wire, card, RTP, and check. Multi-currency, intelligent routing, and reconciliation that posts to the GL automatically.',
    },
    hero: {
      badge: 'Vendor Payments',
      h1: 'Vendor Payment Automation Across Every Rail',
      subhead:
        'Pay vendors automatically on whatever rail makes sense — ACH, wire, card, RTP, check, or international. Multi-currency support, intelligent routing, and reconciliation handled.',
    },
    sections: [
      {
        kicker: 'The problem',
        heading: 'Why vendor payments are still painful',
        body: [
          'Even after the invoice is approved, the actual payment step is often where AP automation falls apart. Different vendors want different payment methods — some take ACH, some require wire, some only accept check, some prefer corporate card, some are international and need cross-border handling. Coordinating this across hundreds or thousands of vendors by hand is slow, error-prone, and expensive.',
          'The legacy solution was a separate banking platform that the AP team logged into to schedule each payment. The modern solution is a vendor payment layer integrated with the AP workflow itself — so once an invoice is approved, the payment runs automatically on the right rail without anyone having to switch tools.',
        ],
      },
      {
        kicker: 'Multi-rail',
        heading: 'How multi-rail vendor payment routing works',
        body: [
          'A modern vendor payment system maintains a payment profile for each vendor: their preferred rail, their bank details, their tax ID, their payment terms, their currency. When an invoice is approved, the system selects the right rail automatically based on the vendor profile and the invoice characteristics. ACH for most domestic vendors. Wire for high-value or urgent payments. Card for vendors that accept it (and where you want the rebate). Check for the vendors that still insist on paper. RTP for instant payments where supported. International rails for cross-border.',
          'The point of multi-rail is not just convenience — it is cost optimization. Different rails have different fees, different settlement times, and different fraud risks. A good system picks the rail that optimizes for your priorities (cost, speed, security) on each individual payment, instead of forcing every vendor onto the same rail.',
        ],
      },
      {
        kicker: 'Multi-currency',
        heading: 'Multi-currency payments without the FX headache',
        body: [
          // TODO: Update this if you do not currently support multi-currency
          'For companies with international vendors, multi-currency payment automation removes one of the most painful manual workflows in AP. The system holds vendor bank details in their local currency, calculates FX at mid-market rates, and executes the payment via the right international rail (SWIFT, SEPA, local clearing networks, or fintech-powered cross-border products). FX exposure can be hedged automatically based on your treasury policy.',
          'The alternative — managing FX yourself, getting individual quotes from your bank, manually scheduling each international wire — is a tax on every cross-border payment that compounds into a real cost over time.',
        ],
      },
      {
        kicker: 'Reconciliation',
        heading: 'Automated reconciliation against the GL',
        body: [
          'After the payment runs, reconciliation happens automatically. The payment posts to the GL against the right account. Bank statements come in and get matched against expected payments. Confirmations and remittances get filed against the right vendor record. Any mismatches get surfaced for review with full context.',
          'This is the part of AP automation that finance teams underrate the most. Manual reconciliation is one of the slowest parts of close. Automating it changes the rhythm of the whole month: the books are clean by the time the period ends, instead of being the bottleneck that delays close.',
        ],
      },
    ],
    relatedSiblings: ['ap-approval-workflows', 'invoice-fraud-detection', 'bill-pay-automation'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is vendor payment automation?',
        a: 'Vendor payment automation is software that executes payments to vendors automatically once an invoice is approved — on the right rail (ACH, wire, card, RTP, check), in the right currency, with reconciliation back to the GL handled automatically.',
      },
      {
        q: 'What payment rails does FinMark.ai support?',
        // TODO: Update with the rails you actually support
        a: 'ACH for domestic US, wire for high-value and international, card for vendors that accept it, RTP for instant payments where supported, and check fallback for vendors that still require paper. International payments via SWIFT and other cross-border rails.',
      },
      {
        q: 'How are vendor bank details secured?',
        a: 'Vendor bank details are encrypted at rest and in transit, with access restricted to authorized users. Modern AP platforms include vendor verification flows to confirm bank details before payments execute, which is a key control against business email compromise (BEC) attacks.',
      },
      {
        q: 'Can it handle multi-currency vendor payments?',
        // TODO: Update if multi-currency is not supported yet
        a: 'Yes. Multi-currency is supported with FX at mid-market rates and direct settlement via international rails. FX exposure can be hedged based on your treasury policy.',
      },
      {
        q: 'How does reconciliation work?',
        a: 'Payments post to the GL automatically against the right account. Bank statements get matched against expected payments. Any mismatches surface for review with full context attached.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 6. AP Automation Software (buyer's guide)
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'ap-automation-software',
    primaryKeyword: 'ap automation software',
    meta: {
      title: 'AP Automation Software: Buyer\'s Guide for 2026 | FinMark.ai',
      description:
        'How to evaluate AP automation software in 2026. Categories, criteria, common traps, and what separates real AP platforms from glorified OCR tools.',
    },
    hero: {
      badge: 'AP Automation Software',
      h1: 'How to Evaluate AP Automation Software in 2026',
      subhead:
        'A practical buyer\'s guide for finance teams evaluating AP automation software. The categories, the criteria that actually matter, and the common traps to avoid.',
    },
    sections: [
      {
        kicker: 'The category',
        heading: 'What "AP automation software" actually means',
        body: [
          'The label "AP automation software" gets stretched to cover everything from basic OCR tools to full-platform AP suites. That makes evaluation hard, because two tools described the same way can differ by 10x in scope and capability. Before anything else, you need to be precise about what category of tool you are buying.',
          'There are four broad categories. (1) OCR-only tools that just extract data from invoices. (2) AP modules inside a broader ERP that handle the workflow but with limited intelligence. (3) Standalone AP automation platforms that handle the full lifecycle as their core product. (4) AP-as-a-feature inside a finance super-app. Each is appropriate for different team sizes and stages.',
        ],
      },
      {
        kicker: 'Criteria',
        heading: 'The criteria that actually matter',
        body: [
          'Eight criteria separate the AP automation tools that work in production from the ones that look good in demos. (1) Document AI accuracy on real-world (not curated) invoices. (2) Pre-built integrations with your specific ERP and accounting system. (3) Configurable approval workflows that match your real policy, not a vendor-imposed one. (4) Audit trail that satisfies SOX and external auditors. (5) Time-to-value measured in weeks, not months. (6) Pricing that does not penalize you for scaling users. (7) Built-in fraud detection. (8) A roadmap that aligns with your direction.',
          'A ninth criterion that matters more than people realize: how the vendor handles edge cases. Demo data is clean. Your real vendor mix is not. Ask for a proof-of-concept on your real invoices, including the messy ones, before signing.',
        ],
      },
      {
        kicker: 'Traps',
        heading: 'Common traps to avoid',
        body: [
          'The biggest trap in AP software buying is letting the demo dictate the decision. Demos are designed to show clean cases that work. Your reality is exception-heavy. The right evaluation is a paid pilot on your actual invoices, not a 30-minute click-through of a curated demo flow.',
          'The second trap is overweighting features you do not need. Every AP vendor has a long feature list, but most teams only use 20% of it. Focus on the 20% you actually need and ignore the rest. The third trap is buying based on price alone without considering total cost of ownership: implementation effort, integration work, ongoing maintenance, and the cost of switching if it does not work out.',
        ],
      },
      {
        kicker: 'Decision framework',
        heading: 'A decision framework for AP automation software',
        body: [
          'Start by writing down what you actually want to automate. Be specific: capture, coding, approval, payment, reconciliation. Then write down the constraints: ERP, volume, team size, budget, timeline. Then evaluate 3-5 vendors against your specific list, not against a generic comparison matrix.',
          'Run paid pilots with the top 2 candidates on your real data. The pilot is the only honest evaluation. Anything less is buying based on marketing.',
        ],
      },
    ],
    relatedSiblings: ['accounts-payable-software', 'invoice-processing-automation', 'ap-erp-integration'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is AP automation software?',
        a: 'AP automation software handles the accounts payable workflow automatically — from invoice capture to payment to reconciliation. The category includes OCR-only tools, AP modules in ERPs, standalone AP platforms, and AP-as-a-feature inside broader finance products.',
      },
      {
        q: 'How much does AP automation software cost?',
        a: 'Pricing varies widely by category and volume. Basic OCR tools start at a few hundred dollars per month. Full AP platforms typically charge based on transaction volume rather than seats. Total cost of ownership depends on implementation effort, integration work, and ongoing maintenance — not just the license fee.',
      },
      {
        q: 'How do I evaluate AP automation software?',
        a: 'Write down what you want to automate, list your constraints (ERP, volume, budget), evaluate 3-5 vendors against your specific needs, and run paid pilots with the top 2 on your real invoice data. Demo data is misleading; pilots on real data are the only honest evaluation.',
      },
      {
        q: 'What is the difference between AP automation and an ERP AP module?',
        a: 'An ERP AP module handles the workflow but typically has limited document AI and weaker integrations to capture and payment. A dedicated AP automation platform is built specifically for AP and is usually more capable in extraction, fraud detection, and approval flexibility — but requires integrating with your ERP rather than living inside it.',
      },
      {
        q: 'What ROI should I expect from AP automation software?',
        a: 'Most teams see 70-80% reductions in processing cost per invoice, 50-70% reductions in cycle time, and payback within 4-6 months. The hidden value (faster close, better vendor relationships, fraud prevention) often exceeds the direct labor savings.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 7. Invoice Fraud Detection
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'invoice-fraud-detection',
    primaryKeyword: 'invoice fraud detection',
    meta: {
      title: 'Invoice Fraud Detection: Stop Duplicate, BEC, and Vendor Fraud | FinMark.ai',
      description:
        'AI-powered invoice fraud detection catches duplicate invoices, vendor impersonation, BEC attacks, and inflated amounts before payment runs.',
    },
    hero: {
      badge: 'Invoice Fraud Detection',
      h1: 'Invoice Fraud Detection That Catches the Bad Ones',
      subhead:
        'AI screens every invoice for duplicate charges, vendor impersonation, business email compromise patterns, and inflated amounts — before payment goes out.',
    },
    sections: [
      {
        kicker: 'The threat',
        heading: 'Why invoice fraud is the most costly AP risk',
        body: [
          'Invoice fraud is one of the largest financial losses companies face from outside attackers, and it gets worse every year. The categories are well known: duplicate invoices submitted by vendors hoping you will pay both. Inflated invoices where prices or quantities are quietly raised. Vendor impersonation where an attacker poses as a known vendor and submits a fake invoice. Business email compromise (BEC) where attackers redirect payment instructions for legitimate invoices to their own accounts.',
          'The reason it works is that AP is a high-volume, low-attention process. An AP clerk processing 100 invoices a day is going to miss the patterns that distinguish a real invoice from a fake. Even diligent reviewers cannot mentally cross-reference every invoice against every other invoice from the same vendor for the last six months. Software can.',
        ],
      },
      {
        kicker: 'Duplicates',
        heading: 'How AI catches duplicate invoices',
        body: [
          'Duplicate invoice fraud is the easiest fraud to commit and one of the easiest to catch with the right tooling. The naive version is a vendor sending the same invoice twice. The smarter version uses slightly different invoice numbers, amounts off by a few dollars, or split invoices that add up to the same total. Manual reviewers miss most of these because they only look at the invoice in front of them.',
          'AI duplicate detection compares every incoming invoice against history using fuzzy matching across vendor, amount, line items, dates, and PO references. It catches exact matches obviously, but also near-duplicates that humans would have missed. False positives get flagged for human review with the suspected duplicates highlighted side by side.',
        ],
      },
      {
        kicker: 'BEC',
        heading: 'How to defend against BEC and vendor impersonation',
        body: [
          'Business email compromise is the single most expensive AP fraud category. The attack is simple: an attacker gains access to a vendor email account (or spoofs it convincingly), then sends a "we have new bank details" message to your AP team along with a real-looking invoice. The AP team updates the vendor record, pays the next legitimate invoice to the new account, and the money is gone before anyone notices.',
          'Defending against BEC requires three controls in combination. First, vendor master data must be locked down — bank detail changes require multi-factor verification, not just an email. Second, every payment must be screened against the vendor profile, with anomalies (new bank account, unusual amount, unusual rail) flagged. Third, the system must learn what normal vendor behavior looks like and surface deviations. AI is essential for the third control because the patterns are too subtle for rules.',
        ],
      },
      {
        kicker: 'Inflated invoices',
        heading: 'Catching inflated invoices and vendor overcharging',
        body: [
          'The hardest fraud to catch is the slow inflation: a vendor who quietly raises prices or adds line items below your radar. Each individual instance looks normal. The pattern only shows up when you compare to history at scale. AI is well-suited to this because it can baseline what normal looks like for each vendor and surface deviations even when no individual invoice would trigger a manual review.',
          'The other valuable property is that the system learns from your feedback. When you confirm fraud or dismiss a false positive, the model updates. Over time, it gets dramatically better at catching the patterns specific to your vendor mix.',
        ],
      },
    ],
    relatedSiblings: ['3-way-matching', 'vendor-payment-automation', 'ap-approval-workflows'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is invoice fraud detection?',
        a: 'Invoice fraud detection is software that screens incoming invoices for fraud patterns — duplicates, inflated amounts, vendor impersonation, BEC attacks — before payment runs. Modern systems use AI to catch patterns that manual reviewers miss.',
      },
      {
        q: 'What types of invoice fraud can be detected automatically?',
        a: 'Duplicate invoices (exact and near-duplicate), inflated amounts vs vendor history, unusual changes to vendor bank details, anomalous payment patterns, and business email compromise (BEC) attacks. Each type uses a different detection approach but they all run on the same invoice screening pipeline.',
      },
      {
        q: 'How does AI detection compare to rules-based fraud screening?',
        a: 'Rules-based screening catches the cases the rules anticipate. AI screening catches both the anticipated cases AND the novel patterns that did not exist when the rules were written. Most production systems use both: rules for known patterns, AI for the long tail.',
      },
      {
        q: 'What is BEC and how is it different from regular invoice fraud?',
        a: 'Business email compromise (BEC) is a fraud where an attacker poses as a known vendor (often by compromising the vendor email) and redirects payments to their own account. It is different from regular invoice fraud because the invoice itself looks legitimate — only the payment destination is wrong. Defending against BEC requires locking down vendor master data changes, not just screening invoice content.',
      },
      {
        q: 'How does fraud detection learn from feedback?',
        a: 'When you confirm a fraud detection or dismiss a false positive, the model updates on that signal. Over time, the system becomes calibrated to your specific vendor mix and the patterns that actually predict fraud in your business.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 8. AP & ERP Integration
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'ap-erp-integration',
    primaryKeyword: 'ap erp integration',
    meta: {
      title: 'AP & ERP Integration: NetSuite, QuickBooks, Xero, SAP | FinMark.ai',
      description:
        'How AP automation integrates with NetSuite, QuickBooks, Xero, SAP, and other ERPs. Real-time sync, GL posting, vendor master, and audit trail.',
    },
    hero: {
      badge: 'ERP Integration',
      h1: 'AP and ERP Integration That Actually Works',
      subhead:
        'Direct integrations with NetSuite, QuickBooks, Xero, SAP, and the ERP systems finance teams actually use. Real-time sync, automatic GL posting, and a single source of truth.',
    },
    sections: [
      {
        kicker: 'The problem',
        heading: 'Why most AP-ERP integrations are broken',
        body: [
          'Integration is where most AP automation projects die. The vendor sells you a great-looking AP product. You buy it. Then implementation begins, and you discover that the integration to your ERP is brittle, partial, or requires custom development. Vendor master data does not sync. Payment posts do not match. The AP team ends up reconciling between the two systems by hand — which is exactly what they were trying to avoid.',
          'The reason this happens is that integration is hard and most AP vendors treat it as an afterthought. They have a generic API connector and call it done. Real ERP integration requires deep, system-specific work: handling NetSuite\'s SuiteScript quirks, dealing with QuickBooks Online\'s rate limits, mapping Xero\'s unique chart of accounts logic, navigating SAP\'s schema. There is no shortcut.',
        ],
      },
      {
        kicker: 'What good looks like',
        heading: 'What a real ERP integration covers',
        body: [
          'A working AP-ERP integration covers six things. (1) Vendor master sync — vendors created in either system appear in the other within minutes. (2) Chart of accounts sync — your GL accounts, cost centers, and dimensions are available for AP coding. (3) PO sync — purchase orders flow from the ERP into AP for matching. (4) Receipt sync — goods receipts flow in for 3-way matching. (5) Payment posting — approved payments post to the GL automatically. (6) Bank reconciliation — bank transactions match against AP payments without manual work.',
          'If any of these six is missing or partial, the integration is incomplete and the AP team will end up filling the gap by hand. A good vendor will tell you exactly which of these are supported on your specific ERP version and which are not.',
        ],
      },
      {
        kicker: 'Major ERPs',
        heading: 'How FinMark.ai integrates with major ERPs',
        body: [
          // TODO: Update with your real integration coverage. The list below
          // describes typical integration patterns for these systems but you
          // should confirm what FinMark.ai actually supports today.
          'FinMark.ai integrates directly with the major modern ERPs and accounting systems: NetSuite (via SuiteTalk and SuiteScript), QuickBooks Online (via REST API with OAuth), Xero (via OAuth API), and Microsoft Dynamics 365 Business Central. For SAP and Oracle, the integration is via standard middleware patterns. For ERPs without a direct integration, we support generic API connectors and CSV/SFTP fallback.',
          'The integrations cover the full six-point checklist above for the major modern ERPs. For legacy or custom systems, integration depth depends on what APIs are available — talk to sales for specifics on your stack.',
        ],
      },
      {
        kicker: 'Migration',
        heading: 'How to migrate to an AP automation tool without breaking your ERP',
        body: [
          'Migration is the riskiest part of AP automation adoption because it touches your live financial data. The right approach is incremental: connect the new AP tool to the ERP in read-only mode first, validate the data flow, then enable write-back for one workflow at a time. Most teams start with new invoices going through the new system while in-flight invoices finish in the old workflow.',
          'The wrong approach is a hard cutover where everything switches on day one. Always-on cutovers cause cascading failures because edge cases that were never tested only show up in production.',
        ],
      },
    ],
    relatedSiblings: ['ap-automation-software', 'invoice-processing-automation', 'accounts-payable-software'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What ERPs does FinMark.ai integrate with?',
        // TODO: Update with your real integration list
        a: 'NetSuite, QuickBooks Online, Xero, Microsoft Dynamics 365 Business Central directly. SAP and Oracle via middleware. Other ERPs via generic API connectors or CSV/SFTP fallback. Talk to sales for specifics on your stack.',
      },
      {
        q: 'How long does ERP integration take?',
        a: 'For modern ERPs with direct integrations (NetSuite, QuickBooks, Xero), integration is usually configured in days, not weeks. For legacy or custom systems, integration depth depends on what APIs are available and may require custom work.',
      },
      {
        q: 'Does the integration sync vendor master data?',
        a: 'Yes. Vendors created in either system appear in the other within minutes. Vendor updates flow both ways with conflict resolution rules you can configure.',
      },
      {
        q: 'How are payment posts handled?',
        a: 'Approved payments post to the GL automatically against the right account. Bank reconciliation matches the bank statement transactions against expected payments without manual work.',
      },
      {
        q: 'Can I use AP automation without an ERP?',
        a: 'Yes, but with reduced functionality. Without an ERP, you lose 3-way matching (no PO source) and have to handle GL posting manually. For very small companies without an ERP, AP automation still helps with capture, approval, and payment execution.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 9. Accounts Payable Software (alt commercial query)
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'accounts-payable-software',
    primaryKeyword: 'accounts payable software',
    meta: {
      title: 'Accounts Payable Software: 2026 Buyer\'s Guide | FinMark.ai',
      description:
        'A buyer\'s guide to modern accounts payable software. Categories, pricing models, evaluation criteria, and what separates real platforms from glorified OCR.',
    },
    hero: {
      badge: 'Accounts Payable Software',
      h1: 'Accounts Payable Software for Modern Finance Teams',
      subhead:
        'A buyer\'s guide to choosing accounts payable software in 2026. The categories, the pricing models, the evaluation criteria, and the questions that matter.',
    },
    sections: [
      {
        kicker: 'The category',
        heading: 'What "accounts payable software" actually covers',
        body: [
          'Accounts payable software is a broad category. At one end, it covers basic tools that just store and track invoices for manual processing. At the other end, it covers full automation platforms that handle the entire invoice-to-payment lifecycle. Both get marketed as "AP software" — but they are radically different products at different price points solving different problems.',
          'Before evaluating vendors, it helps to be clear which subcategory you actually need. A 10-person startup processing 100 invoices a month does not need the same tool as a 500-person company processing 10,000 invoices a month. The features that matter for one are noise for the other.',
        ],
      },
      {
        kicker: 'Categories',
        heading: 'The four categories of accounts payable software',
        body: [
          'Category 1: AP modules inside accounting software. QuickBooks, Xero, and NetSuite all have built-in AP functionality. Fine for low volume; limited automation.',
          'Category 2: Bill pay tools. Bill.com is the canonical example. Focus is on payment scheduling and execution, with basic invoice capture and approval. Strong on the payment side, weaker on document AI.',
          'Category 3: Full AP automation platforms. Standalone products that handle the full invoice lifecycle with strong AI. Examples include Tipalti, Stampli, AvidXchange, and FinMark.ai. Generally more capable and more expensive than bill pay tools.',
          'Category 4: AP modules inside enterprise procurement suites. Coupa, SAP Ariba, Oracle Procurement Cloud. Built for large enterprises with complex procurement; overkill for most mid-market companies.',
        ],
      },
      {
        kicker: 'Pricing',
        heading: 'How accounts payable software pricing actually works',
        body: [
          'Most modern AP software prices on transaction volume — typically a per-invoice fee or a tiered monthly fee based on volume bands. Some vendors add per-user fees on top, which gets expensive as the team grows. A few price purely on volume with no user fees, which scales better for growing finance teams.',
          'When comparing prices, look at total cost: license + implementation + integration + ongoing support. Cheap licenses with expensive implementation often cost more than higher-licensed products with included implementation. Get the full picture before deciding.',
        ],
      },
      {
        kicker: 'Buying criteria',
        heading: 'How to evaluate accounts payable software',
        body: [
          'Five criteria that matter most. (1) Document AI accuracy on real (not curated) invoices. (2) Direct integration with your specific ERP. (3) Configurable approval workflows. (4) Built-in fraud detection. (5) Time-to-value measured in weeks. A sixth criterion that is often underweighted: how the vendor handles the messy edge cases. Always run a paid pilot on your real invoices, not just a demo on theirs.',
        ],
      },
    ],
    relatedSiblings: ['ap-automation-software', 'ap-erp-integration', 'bill-pay-automation'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is accounts payable software?',
        a: 'Accounts payable software helps finance teams manage the AP workflow — invoice receipt, coding, approval, payment, and reconciliation. The category ranges from basic AP modules in accounting software to full AP automation platforms.',
      },
      {
        q: 'How much does accounts payable software cost?',
        a: 'Pricing varies enormously by category. Basic AP modules in accounting software are often included. Bill pay tools start at ~$50/month per user. Full AP automation platforms typically charge based on transaction volume, often $500-$5000+ per month depending on volume.',
      },
      {
        q: 'What is the best AP software for small businesses?',
        a: 'For small businesses, the AP module inside QuickBooks or Xero is often sufficient. As volume grows past a few hundred invoices a month, dedicated AP automation tools become cost-effective.',
      },
      {
        q: 'What is the best AP software for mid-market companies?',
        a: 'Mid-market companies (50-500 employees) typically benefit most from full AP automation platforms — Tipalti, Stampli, AvidXchange, FinMark.ai. The break-even point is usually 1,000+ invoices per month.',
      },
      {
        q: 'How long does AP software take to implement?',
        a: 'Modern AP automation goes live in 4-8 weeks for typical companies. The biggest variable is ERP integration complexity. Legacy or heavily customized ERPs add weeks to implementation.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 10. Bill Pay Automation
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'accounts-payable-automation',
    slug: 'bill-pay-automation',
    primaryKeyword: 'bill pay automation',
    meta: {
      title: 'Bill Pay Automation for Finance Teams | FinMark.ai',
      description:
        'End-to-end bill pay automation that schedules payments, executes them on the right rail, and reconciles to the GL automatically.',
    },
    hero: {
      badge: 'Bill Pay Automation',
      h1: 'Bill Pay Automation for Finance Teams That Want to Stop Scheduling Payments by Hand',
      subhead:
        'Schedule, execute, and reconcile vendor payments automatically. ACH, wire, card, RTP, and check — all from one workflow with full audit trail.',
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What bill pay automation actually does',
        body: [
          'Bill pay automation is software that handles the payment side of accounts payable: scheduling vendor payments, executing them on the right rail, sending remittance information, and reconciling against the GL. It overlaps with broader AP automation but is often sold as a focused product for teams that already handle invoice capture and approval elsewhere.',
          'The line between bill pay and full AP automation is blurry and getting blurrier. A few years ago, bill pay tools focused only on payment execution. Today, most also handle approval workflows and basic invoice capture. The distinction now is mostly about depth: bill pay tools optimize for payment execution; full AP automation optimizes for the end-to-end workflow.',
        ],
      },
      {
        kicker: 'Why automate bill pay',
        heading: 'Why finance teams automate bill pay',
        body: [
          'Manual bill pay has three failure modes. First, slow payment execution — finance teams that schedule payments by hand often miss early-pay discounts and incur late fees. Second, error-prone reconciliation — matching bank transactions to AP records by hand is the slowest part of close. Third, fraud exposure — manual payment workflows are vulnerable to BEC attacks and vendor impersonation because there is no automated screening.',
          'Bill pay automation solves all three. Payments execute on schedule automatically. Reconciliation happens in real time. Fraud screening runs on every payment before it goes out.',
        ],
      },
      {
        kicker: 'Multi-rail',
        heading: 'How multi-rail bill pay works',
        body: [
          'Modern bill pay automation maintains a payment profile for each vendor and routes payments to the right rail automatically. Most vendors take ACH (cheap, fast for domestic). High-value or urgent payments go via wire. Vendors that accept cards may get paid that way for the rebate. Some vendors only take checks (still common in certain industries). International vendors need cross-border rails. The system picks the right one for each payment based on vendor profile, amount, urgency, and your treasury policy.',
        ],
      },
      {
        kicker: 'vs full AP',
        heading: 'Bill pay vs full AP automation — when each makes sense',
        body: [
          'If you already have a working invoice capture and approval flow (whether through your ERP, a separate tool, or manual processes you are happy with), a focused bill pay tool may be all you need. If you want to automate the full lifecycle from invoice receipt to payment to reconciliation, you want a full AP automation platform.',
          'The math usually tilts toward full AP automation as volume grows past 1,000-2,000 invoices per month, because the integration cost of running multiple tools starts to outweigh the savings from picking the best-of-breed for each step.',
        ],
      },
    ],
    relatedSiblings: ['vendor-payment-automation', 'ap-automation-software', 'accounts-payable-software'],
    crossPillarLink: null,
    faqs: [
      {
        q: 'What is bill pay automation?',
        a: 'Bill pay automation is software that schedules, executes, and reconciles vendor payments automatically. It handles the payment side of AP — usually paired with separate tools for invoice capture and approval, or as part of a full AP automation platform.',
      },
      {
        q: 'How is bill pay different from full AP automation?',
        a: 'Bill pay focuses on payment execution; full AP automation handles the entire invoice-to-payment lifecycle. Bill pay tools are simpler and cheaper but require you to handle invoice capture and approval elsewhere. Full AP automation is more capable but more comprehensive.',
      },
      {
        q: 'What payment methods does bill pay automation support?',
        // TODO: Update with rails you actually support
        a: 'ACH, wire, card, RTP, and check for domestic payments. International payments via SWIFT and other cross-border rails. Multi-currency support included.',
      },
      {
        q: 'How does bill pay automation handle reconciliation?',
        a: 'Payments post to the GL automatically when executed. Bank transactions match against expected payments in real time. Mismatches surface for review with full context attached.',
      },
      {
        q: 'Is bill pay automation safe?',
        a: 'Yes — when configured properly. Modern bill pay automation includes fraud screening on every payment, vendor master controls (multi-factor approval for bank detail changes), and full audit trails. The combination is dramatically safer than manual bill pay, which is vulnerable to BEC attacks and human error.',
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
