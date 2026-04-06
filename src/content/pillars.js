// Pillar content config — single source of truth for all 8 pillar pages.
//
// Each pillar has:
//   - meta: SEO metadata (title, description, etc.)
//   - hero: badge / H1 / subhead
//   - sections: ordered array of content sections
//   - clusters: child cluster pages (used by PillarHubList + sitemap)
//   - siblings: 3 sibling pillar slugs (used by SiblingPillarsBar)
//   - faqs: FAQ items (rendered by PillarFAQ + faqSchema)
//
// To add a new pillar: append a new entry. To add a cluster: add to its pillar's
// `clusters` array. PillarPage.jsx renders any pillar from this config — no per-page
// component needed.

export const PILLARS = [
  // ─────────────────────────────────────────────────────────────────
  // P1 — AI Financial Automation (brand-defining pillar)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'ai-financial-automation',
    primaryKeyword: 'ai financial automation',
    meta: {
      title: 'AI Financial Automation Platform | FinMark.ai',
      description:
        'FinMark.ai is the AI financial automation platform for modern finance teams. Automate compliance, forecasting, fraud detection, payments, and reporting in one unified system.',
    },
    hero: {
      badge: 'AI Financial Automation',
      h1: 'The Modern Operating System for AI Financial Automation',
      subhead:
        'One AI-native platform to automate your finance and operations stack — from compliance and fraud detection to forecasting, reporting, and payments. Built for the way modern finance teams actually work.',
      primaryCta: { label: 'Get a demo', href: '/demo' },
      secondaryCta: { label: 'See pricing', href: '/pricing' },
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What is AI financial automation?',
        body: [
          'AI financial automation is the practice of using machine learning, natural language processing, and intelligent decision systems to run finance and operations workflows that used to require humans, spreadsheets, or rules engines. Unlike traditional automation — which executes brittle, predetermined steps — AI financial automation adapts. It learns from your data, handles exceptions, explains its decisions, and gets better the more you use it.',
          "For finance teams, that means closing the books in days instead of weeks, catching fraud at the moment of authorization instead of in the next month's report, forecasting cash flow with model accuracy instead of gut feel, and automating compliance workflows that were previously a tax on every new customer onboarded.",
          'FinMark.ai brings every category of AI financial automation — reporting, forecasting, compliance, fraud detection, payments, workflow automation, and the underlying data layer — into one unified platform, so the finance and operations functions in your business stop running as separate islands.',
        ],
      },
      {
        kicker: 'Why now',
        heading: 'Why every modern finance team needs it',
        body: [
          'Finance teams have hit a wall. Transaction volumes are growing, regulatory requirements are tightening, and the spreadsheet-and-RPA stack that powered the last decade can\'t keep up. Hiring more analysts is expensive, slow, and wasteful: most of the work is repetitive, structured, and well-suited to AI.',
          'AI financial automation solves five concrete problems: it eliminates the manual work that burns out your best analysts, it surfaces insights buried in cross-system data, it catches errors and fraud in real time, it forecasts the future with statistical rigor instead of optimism, and it scales without proportional headcount growth. The companies that adopt it first will run with smaller, smarter finance teams that punch above their weight.',
        ],
      },
    ],
    clusterHubHeading: 'Capabilities of the AI Financial Automation Platform',
    clusters: [
      {
        slug: 'ai-for-finance',
        title: 'AI for Finance',
        description:
          'A practical guide to where AI fits in finance — from forecasting and reporting to fraud detection and compliance.',
      },
      {
        slug: 'financial-automation-software',
        title: 'Financial Automation Software',
        description:
          'How to evaluate financial automation software in 2026, with a buyer\'s checklist and category breakdown.',
      },
      {
        slug: 'ai-finance-platform',
        title: 'AI Finance Platform',
        description:
          'Why a unified AI finance platform beats stitched-together point solutions for cost, accuracy, and time-to-value.',
      },
      {
        slug: 'intelligent-finance-automation',
        title: 'Intelligent Finance Automation',
        description:
          'Beyond rules-based RPA: how intelligent automation handles exceptions, learns from your data, and improves over time.',
      },
      {
        slug: 'ai-accounting-automation',
        title: 'AI Accounting Automation',
        description:
          'Categorization, reconciliation, journal entries, and close — accounting tasks that AI can fully automate today.',
      },
      {
        slug: 'ai-finance-tools',
        title: 'AI Finance Tools',
        description:
          'A category-by-category map of AI finance tools: forecasting, fraud, compliance, reporting, and workflow automation.',
      },
    ],
    siblings: [
      'compliance-automation',
      'ai-financial-reporting',
      'financial-workflow-automation',
    ],
    faqs: [
      {
        q: 'What is AI financial automation?',
        a: 'AI financial automation is the use of machine learning, NLP, and intelligent decision systems to run finance workflows — like reporting, forecasting, fraud detection, and compliance — that previously required manual effort, spreadsheets, or brittle rules engines. Unlike traditional automation, AI systems adapt to your data, handle exceptions, and improve over time.',
      },
      {
        q: 'How is AI financial automation different from RPA?',
        a: 'RPA (Robotic Process Automation) follows hard-coded scripts that break the moment something unexpected happens — a new invoice format, a different vendor name, an edge case. AI financial automation handles those exceptions natively because it learns patterns from data instead of following fixed rules. In practice, the most powerful systems combine RPA for stable steps with AI for the messy parts.',
      },
      {
        q: 'What kinds of finance tasks can be automated with AI?',
        a: 'Reporting, financial close, reconciliation, accounts payable / receivable, KYC and AML compliance, transaction monitoring, fraud detection, cash flow forecasting, revenue forecasting, scenario planning, regulatory reporting, audit prep, and most of what your finance team does on a recurring basis. The unifying pattern: anything that\'s structured, recurring, and currently consuming analyst hours.',
      },
      {
        q: 'Is AI financial automation safe and compliant?',
        a: 'Yes, when implemented correctly. The key is auditability: every AI decision must be explainable and traceable, especially in regulated areas like compliance, fraud, and credit. FinMark.ai is built around explainable AI by default — every model output comes with the features and weights that drove it, so your auditors and regulators always know why a decision was made.',
      },
      {
        q: 'How long does AI financial automation take to implement?',
        a: 'Most customers go live on the first capability within 2-4 weeks — typically reporting or AP automation. Full platform rollout across all 8 capabilities takes 60-90 days. We deliberately design for incremental adoption: you don\'t have to migrate everything at once.',
      },
      {
        q: 'What is the typical ROI?',
        a: 'Customers typically see payback within the first 6 months, driven by three main savings: 40-60% reduction in time spent on manual reporting and reconciliation, 50-80% reduction in fraud losses, and 30-50% faster financial close. The compounding benefit — better forecasting that drives smarter capital allocation — is harder to quantify but usually larger.',
      },
      {
        q: 'Does it integrate with my existing ERP?',
        a: 'Yes. FinMark.ai connects to NetSuite, SAP, Oracle, Workday, Microsoft Dynamics, QuickBooks, Xero, and most modern ERPs out of the box. For unsupported systems, we have a generic API connector and a CSV/SFTP fallback. The platform is designed to layer on top of your existing finance stack — no rip-and-replace required.',
      },
      {
        q: 'How is FinMark.ai different from generic AI tools like ChatGPT?',
        a: 'Generic LLMs are great at language and bad at numbers. They hallucinate, they have no memory of your data, they can\'t read your ERP, and they aren\'t auditable. FinMark.ai is purpose-built for finance: it understands your chart of accounts, connects directly to your source systems, uses specialized models trained on financial data, and produces decisions you can defend in an audit.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P2 — Compliance Automation
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'compliance-automation',
    primaryKeyword: 'compliance automation software',
    meta: {
      title: 'Compliance Automation Software for Finance | FinMark.ai',
      description:
        'KYC, AML, transaction monitoring, regulatory reporting — automated end-to-end with AI you can audit. Compliance automation software built for modern financial services.',
    },
    hero: {
      badge: 'Compliance Automation',
      h1: 'Compliance Automation Software for Modern Finance Teams',
      subhead:
        'KYC, AML, transaction monitoring, and regulatory reporting — automated end-to-end with explainable AI your auditors and regulators will trust.',
      primaryCta: { label: 'Get a demo', href: '/demo' },
      secondaryCta: { label: 'See pricing', href: '/pricing' },
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What is compliance automation?',
        body: [
          'Compliance automation is the practice of replacing manual compliance processes — KYC checks, AML screenings, transaction monitoring, regulatory filings, audit trails — with software that handles them automatically, accurately, and at scale. The best compliance automation systems don\'t just speed up what humans were doing; they fundamentally change how compliance works, moving from periodic reviews to continuous monitoring.',
          'For modern financial services companies, manual compliance is no longer viable. Transaction volumes have outpaced what compliance teams can review by hand, regulatory requirements compound year over year, and the cost of getting it wrong — both in fines and reputational damage — has never been higher. Automation isn\'t a nice-to-have; it\'s the only path to staying compliant as you scale.',
        ],
      },
      {
        kicker: 'How AI changes compliance',
        heading: 'Why AI changes the compliance equation',
        body: [
          'Rules-based compliance systems have a fundamental problem: they generate enormous false positive rates. Most compliance teams spend the majority of their time investigating alerts that turn out to be nothing. AI-based systems use machine learning to identify the patterns that actually predict suspicious activity — dramatically reducing false positives while catching threats that hand-written rules miss entirely.',
          'But the killer feature isn\'t just better alerts. It\'s explainability. Modern AI compliance systems explain every decision they make in terms a compliance officer (or a regulator) can understand. That means you get the accuracy of machine learning without losing the auditability your legal team needs.',
        ],
      },
    ],
    clusterHubHeading: 'Compliance Automation Capabilities',
    clusters: [
      {
        slug: 'regulatory-compliance-automation',
        title: 'Regulatory Compliance Automation',
        description:
          'BSA, OFAC, GDPR, MiFID, Basel, SEC — automate the regulatory regimes that matter for your business.',
      },
      {
        slug: 'regtech-platform',
        title: 'RegTech Platform',
        description:
          'A complete RegTech platform: KYC, AML, transaction monitoring, regulatory reporting, and audit in one place.',
      },
      {
        slug: 'kyc-automation',
        title: 'KYC Automation',
        description:
          'Onboard customers in minutes instead of weeks with AI-powered identity verification, document checks, and risk scoring.',
      },
      {
        slug: 'aml-compliance-software',
        title: 'AML Compliance Software',
        description:
          'AML compliance software with AI-driven false positive reduction, sanctions screening, and SAR-ready audit trails.',
      },
      {
        slug: 'automated-kyc-aml',
        title: 'Automated KYC + AML',
        description:
          'Unified KYC and AML workflows that share data, models, and risk scoring across your onboarding pipeline.',
      },
      {
        slug: 'continuous-compliance-monitoring',
        title: 'Continuous Compliance Monitoring',
        description:
          'Real-time monitoring that catches issues the moment they happen — not in the next quarterly review.',
      },
      {
        slug: 'regulatory-reporting-automation',
        title: 'Regulatory Reporting Automation',
        description:
          'Generate CTR, SAR, FBAR, FATCA, and other regulatory reports automatically from your transaction data.',
      },
      {
        slug: 'audit-automation',
        title: 'Audit Automation',
        description:
          'Always be audit-ready with continuous controls testing, evidence collection, and an immutable audit trail.',
      },
      {
        slug: 'compliance-management-system',
        title: 'Compliance Management System',
        description:
          'A modern CMS combining policy, training, monitoring, and reporting — built for the AI era.',
      },
    ],
    siblings: [
      'ai-fraud-detection',
      'payment-processing-automation',
      'ai-financial-reporting',
    ],
    faqs: [
      {
        q: 'What is compliance automation software?',
        a: 'Compliance automation software replaces manual compliance work — KYC, AML, transaction monitoring, regulatory reporting, audit prep — with systems that run those processes automatically. Modern compliance automation platforms use AI to reduce false positives, surface true threats, and produce audit trails that satisfy regulators.',
      },
      {
        q: 'Is automated KYC accepted by regulators?',
        a: 'Yes. Regulators globally have explicitly endorsed risk-based, technology-driven KYC, including in FATF guidance, the EU\'s 6AMLD, and US BSA/AML rulemaking. The key requirement is that the system be auditable — you must be able to explain every decision after the fact. FinMark.ai\'s KYC automation is built around explainability for exactly this reason.',
      },
      {
        q: 'What\'s the difference between KYC and AML?',
        a: 'KYC (Know Your Customer) is about verifying customer identity at onboarding and on an ongoing basis. AML (Anti-Money Laundering) is the broader program that includes KYC, plus transaction monitoring, sanctions screening, suspicious activity reporting, and recordkeeping. KYC is a subset of AML — you can\'t have an AML program without it.',
      },
      {
        q: 'How does AI handle false positives in transaction monitoring?',
        a: 'Rule-based transaction monitoring routinely produces 95%+ false positive rates because rules can\'t distinguish legitimate edge cases from real threats. AI-based monitoring learns the patterns that actually predict laundering or fraud — typically reducing false positives by 60-80% while catching novel patterns that hand-written rules miss.',
      },
      {
        q: 'Can FinMark.ai integrate with my core banking system?',
        a: 'Yes. We have direct integrations with major core banking platforms (FIS, Fiserv, Jack Henry, Temenos) and a generic real-time event API for proprietary cores. The compliance automation runs on your existing transaction stream — no data migration required.',
      },
      {
        q: 'How does FinMark.ai compliance pricing work?',
        a: 'Pricing is based on monthly transaction volume and the compliance modules you enable (KYC, AML, monitoring, reporting). There\'s no per-user fee. See /pricing for full details and a calculator.',
      },
      {
        q: 'What regulations does FinMark.ai support?',
        a: 'US (BSA, OFAC, FinCEN, FFIEC), EU (5AMLD, 6AMLD, GDPR, MiFID II), UK (FCA, PRA), India (PMLA, RBI), Singapore (MAS), and most major regulatory regimes. Regulatory templates are updated continuously as rules change.',
      },
      {
        q: 'How long does compliance automation take to implement?',
        a: 'KYC automation typically goes live within 2 weeks. Full AML + transaction monitoring + regulatory reporting takes 30-60 days. The biggest variable is data integration — if your transaction data is already in a clean format, implementation is faster.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P3 — AI Fraud Detection & Risk Management
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'ai-fraud-detection',
    primaryKeyword: 'ai fraud detection',
    meta: {
      title: 'AI Fraud Detection & Risk Management | FinMark.ai',
      description:
        'Stop fraud before it costs you. AI fraud detection with real-time machine learning models, explainable decisions, and built-in transaction monitoring for modern finance teams.',
    },
    hero: {
      badge: 'AI Fraud Detection',
      h1: 'AI Fraud Detection That Stops Threats Before They Cost You',
      subhead:
        'Machine learning models trained on billions of transactions detect fraud, money laundering, and financial risk in real time — with explainable decisions your auditors and regulators will trust.',
      primaryCta: { label: 'Get a demo', href: '/demo' },
      secondaryCta: { label: 'See pricing', href: '/pricing' },
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What is AI fraud detection?',
        body: [
          'AI fraud detection uses machine learning models — instead of static rules — to identify fraudulent transactions, suspicious behavior, and financial risk in real time. Where traditional rule engines look for specific patterns (e.g. "flag any transaction over $10k from this country"), AI systems learn what fraudulent behavior actually looks like across thousands of variables and adapt as new fraud patterns emerge.',
          "The result is dramatically better detection at dramatically lower false positive rates. Where rule-based fraud systems often flag 95%+ false positives, well-tuned ML models routinely run at 5-20% false positive rates — letting your fraud team focus on the threats that actually matter.",
        ],
      },
      {
        kicker: 'How it works',
        heading: 'How the ML pipeline detects fraud in milliseconds',
        body: [
          "FinMark.ai's fraud detection runs as a real-time inference pipeline on top of your transaction stream. Every transaction is scored against multiple specialized models — some looking at the transaction itself, some at the customer's recent behavior, some at network-level patterns across your customer base. Decisions are returned in under 100ms, fast enough to block fraudulent payments at authorization.",
          'Critically, every score comes with an explanation: which features drove the decision, how much each contributed, and what the model would have decided differently if certain features had been different. That explainability is what makes AI fraud detection viable for regulated finance — auditors and regulators can verify that the model isn\'t making decisions based on prohibited factors.',
        ],
      },
    ],
    clusterHubHeading: 'AI Fraud Detection Capabilities',
    clusters: [
      {
        slug: 'fraud-detection-software',
        title: 'Fraud Detection Software',
        description:
          'Modern fraud detection software with real-time ML scoring, low false positive rates, and full auditability.',
      },
      {
        slug: 'machine-learning-fraud-detection',
        title: 'Machine Learning Fraud Detection',
        description:
          'How ML models actually detect fraud — supervised, unsupervised, and graph-based approaches explained.',
      },
      {
        slug: 'real-time-fraud-detection',
        title: 'Real-Time Fraud Detection',
        description:
          'Sub-100ms fraud scoring at authorization time, so threats are blocked before money moves.',
      },
      {
        slug: 'transaction-monitoring-software',
        title: 'Transaction Monitoring Software',
        description:
          'AML + fraud transaction monitoring with AI-tuned thresholds and SAR-ready alerting.',
      },
      {
        slug: 'payment-fraud-prevention',
        title: 'Payment Fraud Prevention',
        description:
          'Card fraud, ACH fraud, BEC, and account takeover — prevented across every payment channel.',
      },
      {
        slug: 'ai-risk-management',
        title: 'AI Risk Management',
        description:
          'Apply AI to credit, operational, market, and fraud risk in a single risk management framework.',
      },
      {
        slug: 'risk-management-software',
        title: 'Risk Management Software',
        description:
          'Risk management software for finance teams: GRC, RMIS, ERM, and AI-driven risk scoring.',
      },
      {
        slug: 'credit-risk-modeling',
        title: 'Credit Risk Modeling',
        description:
          'Machine learning credit scoring models that improve approval rates while keeping defaults flat.',
      },
      {
        slug: 'enterprise-risk-management-software',
        title: 'Enterprise Risk Management Software',
        description:
          'Enterprise risk management built for the AI era — strategic, financial, operational, and compliance risk in one view.',
      },
    ],
    siblings: [
      'compliance-automation',
      'payment-processing-automation',
      'unified-financial-data-platform',
    ],
    faqs: [
      {
        q: 'How accurate is AI fraud detection?',
        a: 'On industry-standard benchmarks, modern ML fraud detection achieves precision and recall in the 85-95% range, compared to 30-60% for typical rule-based systems. More importantly, AI models adapt to new fraud patterns automatically — the gap widens over time as fraudsters change tactics.',
      },
      {
        q: 'How does FinMark.ai handle false positives?',
        a: 'Two ways. First, we tune models on your specific transaction data so they learn what normal looks like for your customers — not a generic baseline. Second, we let you set decision thresholds dynamically: a high-value account can have a tighter threshold than a new customer. Most customers see 60-80% reductions in false positive rates within 30 days of going live.',
      },
      {
        q: 'Can I retrain the model on my own data?',
        a: 'Yes. FinMark.ai includes a continuous learning pipeline that retrains models on your fraud feedback (confirmed fraud, false positives, false negatives) on a weekly cadence by default — and immediately when novel fraud patterns are detected.',
      },
      {
        q: 'Is the model auditable?',
        a: 'Every decision the model makes comes with a full explanation: which features contributed, how much, and what the model would have decided if any of those features had been different. This explainability is built in by design and is why FinMark.ai\'s fraud detection is approved for use in regulated finance.',
      },
      {
        q: 'How does it integrate with my payment system?',
        a: 'Real-time fraud scoring is exposed as an HTTPS API that you call inline at authorization. Most customers go live in 2-3 days. We also have direct integrations with Stripe, Adyen, Checkout.com, Braintree, and most major payment processors.',
      },
      {
        q: 'What\'s the latency for real-time decisions?',
        a: 'P50 latency is 25ms; P99 is under 100ms. Fast enough to slot into the authorization flow without affecting customer experience.',
      },
      {
        q: 'How is this different from a fraud rules engine?',
        a: 'Rules engines execute hand-coded "if X then flag" logic. They\'re predictable but they break the moment fraudsters change tactics — which they do constantly. AI fraud detection learns what fraud looks like from data, so it adapts to new patterns without requiring a developer to write new rules. We support both: most customers run AI models alongside a small set of mandatory rules (e.g. sanctions screening).',
      },
      {
        q: 'Does it cover money laundering / AML?',
        a: 'Yes — AML transaction monitoring uses many of the same models as fraud detection, with additional features tuned for typologies like layering, structuring, and integration. See /compliance-automation for the full AML capabilities.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P4 — Payment Processing Automation
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'payment-processing-automation',
    primaryKeyword: 'payment processing automation',
    meta: {
      title: 'Payment Processing Automation Platform | FinMark.ai',
      description:
        'Automate AP, AR, payment orchestration, and multi-currency settlement on a single intelligent platform. Built-in fraud prevention and compliance for global finance teams.',
    },
    hero: {
      badge: 'Payment Processing Automation',
      h1: 'Payment Processing Automation for Global Finance Teams',
      subhead:
        'Automate accounts payable, accounts receivable, payment orchestration, and multi-currency settlement on a single intelligent platform — with fraud prevention and compliance built in.',
      primaryCta: { label: 'Get a demo', href: '/demo' },
      secondaryCta: { label: 'See pricing', href: '/pricing' },
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What is payment processing automation?',
        body: [
          "Payment processing automation is the practice of running every step of the payment lifecycle — initiation, routing, settlement, reconciliation, reporting — through software instead of human hands. Modern payment automation goes beyond simple ACH batching: it includes intelligent routing across processors, multi-currency settlement, automated reconciliation against your GL, exception handling, and built-in fraud and compliance screening at every step.",
          "For B2B finance teams, the impact is compound. AP automation alone typically reduces invoice processing costs from $11 to $2 per invoice. AR automation reduces DSO by 5-15 days. Payment orchestration improves authorization rates by 2-5%. Together, payment automation often pays for itself within the first quarter.",
        ],
      },
      {
        kicker: 'How it works',
        heading: 'The end-to-end automated payment workflow',
        body: [
          "FinMark.ai handles every stage: incoming invoices and outgoing payments are captured automatically (via OCR, email forwarding, EDI, or API), classified and matched to POs, routed through approval workflows tuned to your policies, screened for fraud and compliance, executed across the right payment rail (ACH, wire, card, RTP, local rails), and reconciled against the GL automatically. Exceptions get flagged for human review with full context attached.",
          "Because payments are tightly coupled to fraud detection and compliance — the same transactions need to clear all three systems — running payment processing on the same platform eliminates the data shuttling that breaks point-solution stacks.",
        ],
      },
    ],
    clusterHubHeading: 'Payment Processing Capabilities',
    clusters: [
      {
        slug: 'automated-payment-processing',
        title: 'Automated Payment Processing',
        description:
          'End-to-end automated payment workflows with built-in fraud and compliance screening at every step.',
      },
      {
        slug: 'payment-orchestration-platform',
        title: 'Payment Orchestration Platform',
        description:
          'Smart routing across multiple PSPs to maximize auth rate, minimize cost, and ensure redundancy.',
      },
      {
        slug: 'multi-currency-payment-processing',
        title: 'Multi-Currency Payment Processing',
        description:
          'Accept and settle payments in 100+ currencies with native FX, local rails, and automated treasury management.',
      },
      {
        slug: 'accounts-payable-automation',
        title: 'Accounts Payable Automation',
        description:
          'From invoice capture to payment to reconciliation — AP automation that cuts processing costs by 80%.',
      },
      {
        slug: 'accounts-receivable-automation',
        title: 'Accounts Receivable Automation',
        description:
          'AI-driven collections, cash application, and dispute management to get paid faster and reduce DSO.',
      },
      {
        slug: 'ap-automation-software',
        title: 'AP Automation Software',
        description:
          'How to evaluate AP automation software: integrations, OCR accuracy, approval flexibility, audit trail.',
      },
      {
        slug: 'ar-automation-software',
        title: 'AR Automation Software',
        description:
          'AR automation software for B2B finance teams: invoicing, collections, cash app, and dispute management.',
      },
      {
        slug: 'global-payment-infrastructure',
        title: 'Global Payment Infrastructure',
        description:
          'Banking, FX, local rails, and settlement — the global payment infrastructure for cross-border businesses.',
      },
      {
        slug: 'intelligent-payment-routing',
        title: 'Intelligent Payment Routing',
        description:
          'ML-driven payment routing that optimizes authorization rate, cost, and latency in real time.',
      },
    ],
    siblings: [
      'ai-fraud-detection',
      'compliance-automation',
      'financial-workflow-automation',
    ],
    faqs: [
      {
        q: 'What is payment processing automation?',
        a: 'Payment processing automation is software that handles every step of the payment lifecycle — initiation, routing, settlement, reconciliation, reporting — automatically. It includes accounts payable automation, accounts receivable automation, payment orchestration, multi-currency settlement, and built-in fraud and compliance screening.',
      },
      {
        q: 'How does payment orchestration work?',
        a: 'Payment orchestration sits between your application and multiple payment processors. For each transaction, the orchestration layer decides which processor to send it to based on cost, expected authorization rate, latency, currency, and risk. If the first processor fails or declines, the orchestration layer can automatically retry with a different processor — improving overall auth rates without changing your application code.',
      },
      {
        q: 'Can FinMark.ai handle multi-currency?',
        a: 'Yes. We support 100+ currencies, native FX with mid-market rates, local payment rails in 50+ countries, and automated treasury management to optimize when to convert. Multi-currency reporting is built in.',
      },
      {
        q: 'How does the platform prevent payment fraud?',
        a: 'Every payment is screened in real time by our AI fraud detection system before it executes. The same models that power /ai-fraud-detection run inline on payment authorization, blocking suspicious transactions in under 100ms.',
      },
      {
        q: 'Will it integrate with my ERP?',
        a: 'Yes. Direct integrations with NetSuite, SAP, Oracle, Workday, Microsoft Dynamics, QuickBooks, and Xero. Payments and reconciliations sync to your GL automatically.',
      },
      {
        q: 'Is FinMark.ai PCI compliant?',
        a: 'Yes. PCI DSS Level 1, SOC 2 Type II, and ISO 27001. Card data is tokenized at the edge so it never enters your systems.',
      },
      {
        q: 'What\'s the typical AP automation ROI?',
        a: 'Most customers see 70-80% reduction in invoice processing costs (from ~$11 per invoice to ~$2), 50-70% reduction in invoice processing time, and substantially reduced late payment fees and missed early-pay discounts. Payback is usually within 4-6 months.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P5 — AI Financial Reporting & Analytics
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'ai-financial-reporting',
    primaryKeyword: 'ai financial reporting',
    meta: {
      title: 'AI Financial Reporting & Analytics | FinMark.ai',
      description:
        'Real-time financial reporting and analytics powered by AI. Automated dashboards, auto-generated narratives, and continuous close — built for modern finance teams.',
    },
    hero: {
      badge: 'AI Financial Reporting',
      h1: 'AI Financial Reporting and Analytics for Real-Time Finance',
      subhead:
        'Real-time dashboards, automated close, AI-generated narrative summaries — all on top of your unified financial data. The reporting stack for finance teams that want to move at the speed of the business.',
      primaryCta: { label: 'Get a demo', href: '/demo' },
      secondaryCta: { label: 'See pricing', href: '/pricing' },
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What is AI financial reporting?',
        body: [
          "AI financial reporting is the use of machine learning, natural language generation, and real-time data pipelines to produce financial reports automatically — without analysts spending hours wrangling spreadsheets. The shift isn't just about speed: it changes what's possible. Instead of monthly board packs assembled three weeks after the period closes, finance teams can produce daily (or live) reports that are always current, always reconciled, and always explainable.",
          "Modern AI reporting platforms also generate the narrative — the management discussion and analysis, the variance commentary, the executive summary — automatically. Not as templated boilerplate, but as analyzed insight. The CFO still owns the story; AI just writes the first draft.",
        ],
      },
      {
        kicker: 'The reporting stack',
        heading: 'The four layers of modern financial reporting',
        body: [
          "Modern AI reporting runs on four layers. First, a unified data layer that ingests from every source system in real time (covered in detail at /unified-financial-data-platform). Second, a modeling layer that maps source data to your chart of accounts, currencies, and entity structure. Third, a reporting layer that produces dashboards, statements, and analytical views. Fourth, a distribution layer that pushes the right view to the right person at the right time.",
          "Most legacy reporting tools handle one or two of these layers and force you to glue the rest together. FinMark.ai handles all four in a single platform, which is what makes real-time reporting actually work in production.",
        ],
      },
    ],
    clusterHubHeading: 'AI Financial Reporting Capabilities',
    clusters: [
      {
        slug: 'automated-financial-reporting',
        title: 'Automated Financial Reporting',
        description:
          'P&L, balance sheet, cash flow, MD&A, board pack — all generated automatically from your live financial data.',
      },
      {
        slug: 'real-time-financial-analytics',
        title: 'Real-Time Financial Analytics',
        description:
          'Streaming financial analytics for cash position, liquidity, exposure, and other time-sensitive metrics.',
      },
      {
        slug: 'financial-analytics-software',
        title: 'Financial Analytics Software',
        description:
          'Descriptive, diagnostic, predictive, and prescriptive analytics — in one financial analytics platform.',
      },
      {
        slug: 'financial-dashboard-software',
        title: 'Financial Dashboard Software',
        description:
          'Pre-built dashboards by persona — CFO, controller, FP&A, ops — with the KPIs each role actually cares about.',
      },
      {
        slug: 'ai-powered-analytics',
        title: 'AI-Powered Analytics',
        description:
          'Auto-insights, anomaly detection, and natural language Q&A — analytics that actively surfaces what matters.',
      },
      {
        slug: 'self-service-finance-analytics',
        title: 'Self-Service Finance Analytics',
        description:
          'Empower non-finance teams to answer their own questions without ad-hoc requests to FP&A.',
      },
      {
        slug: 'natural-language-financial-reporting',
        title: 'Natural Language Financial Reporting',
        description:
          'Reports that explain themselves — auto-generated MD&A, conversational finance Q&A, and narrative summaries.',
      },
      {
        slug: 'financial-close-automation',
        title: 'Financial Close Automation',
        description:
          'Close in days instead of weeks with continuous reconciliation, AI-prepped journal entries, and auto-flux analysis.',
      },
      {
        slug: 'management-reporting-automation',
        title: 'Management Reporting Automation',
        description:
          'Automate the monthly board pack and management business review — pull-it-up-on-day-one accurate.',
      },
    ],
    siblings: [
      'predictive-financial-forecasting',
      'unified-financial-data-platform',
      'ai-financial-automation',
    ],
    faqs: [
      {
        q: 'What is AI financial reporting?',
        a: 'AI financial reporting is the use of machine learning and natural language generation to produce financial reports automatically — dashboards, statements, narratives, and management commentary — directly from your transaction data, in real time.',
      },
      {
        q: 'Can AI generate audit-ready reports?',
        a: 'Yes. Every report FinMark.ai produces is fully auditable: every number traces back to the source transactions, every AI-generated narrative cites the data behind it, and the entire reporting pipeline is logged and reproducible. External auditors regularly use FinMark.ai\'s audit trail to accelerate their fieldwork.',
      },
      {
        q: 'How does it integrate with my GL?',
        a: 'Direct integrations with NetSuite, SAP, Oracle, Workday, Microsoft Dynamics, QuickBooks, Xero, and most modern GLs. Reports run on top of your existing GL — no migration, no replication required.',
      },
      {
        q: 'What dashboards come out of the box?',
        a: 'CFO dashboard (cash position, runway, MoM growth, key KPIs), controller dashboard (close status, reconciliation health, journal entries pending), FP&A dashboard (budget vs actual, variance analysis, forecast accuracy), and operations dashboard (working capital, AR aging, AP aging). All are customizable.',
      },
      {
        q: 'Can it handle multi-entity consolidation?',
        a: 'Yes. Native multi-entity support including intercompany elimination, currency translation, and consolidation rules. Built specifically for the complexity of multi-entity reporting at scale.',
      },
      {
        q: 'How fast is "real time"?',
        a: 'Reports refresh within seconds of new transactions hitting your source systems. For most use cases, "real time" means under one minute end-to-end. For low-volume metrics like cash position, it\'s under 10 seconds.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P6 — Unified Financial Data Platform
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'unified-financial-data-platform',
    primaryKeyword: 'unified data platform for finance',
    meta: {
      title: 'Unified Financial Data Platform | FinMark.ai',
      description:
        'One platform that ingests, normalizes, and serves financial data from every system you use — the foundation for AI reporting, forecasting, fraud detection, and compliance.',
    },
    hero: {
      badge: 'Unified Financial Data Platform',
      h1: 'The Unified Financial Data Platform Behind Every FinMark.ai Capability',
      subhead:
        'One platform that ingests, normalizes, and serves financial data from every system you use — the foundation for AI reporting, forecasting, fraud detection, and compliance.',
      primaryCta: { label: 'Get a demo', href: '/demo' },
      secondaryCta: { label: 'See pricing', href: '/pricing' },
    },
    sections: [
      {
        kicker: "Why it matters",
        heading: "Why finance has a data problem",
        body: [
          "Most finance teams don't have a tool problem. They have a data problem. Their numbers live in too many places: the ERP, the banking platform, the payment processor, the billing system, the CRM, half a dozen spreadsheets that nobody owns. The most expensive activity in many finance teams isn't analysis — it's manually reconciling those sources every month so the analysis can begin.",
          "Until you fix the data layer, every other initiative — better reporting, faster forecasting, smarter fraud detection — is held hostage to a fragile, manual integration process. The unified financial data platform exists to solve that root problem once.",
        ],
      },
      {
        kicker: "What it does",
        heading: "What 'unified' actually means",
        body: [
          "A unified financial data platform ingests data continuously from every source system, normalizes it against your chart of accounts and entity structure, applies master data management to deduplicate vendors and customers, stores it in a finance-optimized data model, and serves it to downstream applications in real time. Not nightly. Not weekly. Continuously.",
          "Once you have that foundation, every other capability gets dramatically easier. Reporting becomes fast and accurate because the data is already reconciled. Forecasting becomes credible because the historical data is clean. Fraud detection becomes possible because models can see across channels. Compliance becomes auditable because every number traces back to source.",
        ],
      },
    ],
    clusterHubHeading: 'Unified Data Platform Capabilities',
    clusters: [
      {
        slug: 'financial-data-integration',
        title: 'Financial Data Integration',
        description:
          'Ingest from ERP, banking, payments, billing, CRM, and 100+ other source systems out of the box.',
      },
      {
        slug: 'finance-data-platform',
        title: 'Finance Data Platform',
        description:
          'A purpose-built finance data platform — not a generic warehouse — with finance-aware schema and governance.',
      },
      {
        slug: 'single-source-of-truth-finance',
        title: 'Single Source of Truth for Finance',
        description:
          'Stop reconciling spreadsheets. Build a real single source of truth for your finance data.',
      },
      {
        slug: 'etl-for-financial-data',
        title: 'ETL for Financial Data',
        description:
          'ELT pipelines tuned for financial data: currency, period, account mapping, and audit trail handled automatically.',
      },
      {
        slug: 'financial-data-warehouse',
        title: 'Financial Data Warehouse',
        description:
          'Architecture and best practices for building a financial data warehouse that scales.',
      },
      {
        slug: 'erp-data-integration',
        title: 'ERP Data Integration',
        description:
          'Native integrations with NetSuite, SAP, Oracle, Workday, and Microsoft Dynamics — no middleware required.',
      },
      {
        slug: 'finance-api-integration',
        title: 'Finance API Integration',
        description:
          'A developer\'s guide to integrating finance APIs — Plaid, Stripe, Open Banking, banking-as-a-service.',
      },
      {
        slug: 'master-data-management-finance',
        title: 'Master Data Management for Finance',
        description:
          'Vendors, customers, chart of accounts, cost centers — managed in one place with AI-assisted deduplication.',
      },
    ],
    siblings: [
      'ai-financial-reporting',
      'predictive-financial-forecasting',
      'ai-fraud-detection',
    ],
    faqs: [
      {
        q: 'What is a unified financial data platform?',
        a: 'A unified financial data platform is software that ingests financial data from every source system you use, normalizes it against a single schema, and serves it to downstream applications (reporting, forecasting, fraud, compliance) in real time. It\'s the data foundation that makes everything else possible.',
      },
      {
        q: 'How is this different from a data warehouse?',
        a: 'A generic data warehouse is empty — you have to design the schema, build the pipelines, write the transformations, manage master data, and handle period/currency logic yourself. A finance data platform comes with all of that built in for finance use cases. You get the warehouse layer plus everything that has to live on top of it for finance.',
      },
      {
        q: 'What systems does FinMark.ai connect to?',
        a: 'NetSuite, SAP, Oracle, Workday, Microsoft Dynamics, QuickBooks, Xero, Stripe, Adyen, Plaid, banking APIs (Open Banking, US bank APIs, BaaS providers), HRIS (BambooHR, Rippling, Gusto), and 100+ more out of the box. Plus a generic API connector and CSV/SFTP fallback for anything else.',
      },
      {
        q: 'How long does data integration take?',
        a: 'Most customers connect their first source system within hours. Full multi-system integration typically takes 1-3 weeks depending on system count and complexity.',
      },
      {
        q: 'Is the data secure and compliant?',
        a: 'Yes. SOC 2 Type II, ISO 27001, encrypted at rest (AES-256) and in transit (TLS 1.3), regional data residency options (US, EU, Asia), and full role-based access control. We never train models on your data without explicit consent.',
      },
      {
        q: 'Do I keep ownership of my data?',
        a: 'Yes. You own all data ingested into FinMark.ai. You can export at any time, in standard formats, with no data hostage situation if you ever decide to leave.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P7 — Predictive Financial Forecasting
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'predictive-financial-forecasting',
    primaryKeyword: 'predictive financial forecasting',
    meta: {
      title: 'Predictive Financial Forecasting Powered by AI | FinMark.ai',
      description:
        'AI cash flow forecasting, revenue forecasting, scenario planning, and FP&A automation. Forecasts your board can trust, refreshed continuously from live financial data.',
    },
    hero: {
      badge: 'Predictive Financial Forecasting',
      h1: 'Predictive Financial Forecasting Powered by AI',
      subhead:
        'Forecast cash flow, revenue, and demand with machine learning models that learn from your data. Accurate enough for the boardroom, fast enough for daily decisions.',
      primaryCta: { label: 'Get a demo', href: '/demo' },
      secondaryCta: { label: 'See pricing', href: '/pricing' },
    },
    sections: [
      {
        kicker: "Why it matters",
        heading: "Why traditional FP&A is broken",
        body: [
          "FP&A in most companies still runs on spreadsheets. That works at small scale and breaks at every other size: assumptions go stale, models don't agree across teams, scenario planning takes weeks, and the moment something unexpected happens, the entire forecast is suddenly worthless. The CFO knows it. The board knows it. Everyone pretends otherwise.",
          "Predictive financial forecasting fixes the root issue: instead of relying on hand-built linear extrapolations, AI models learn the actual drivers of your business — seasonality, customer cohorts, churn dynamics, hiring lags, working capital cycles — and produce forecasts with statistically meaningful confidence intervals. The output is something a CFO can actually defend.",
        ],
      },
      {
        kicker: "How AI changes forecasting",
        heading: "How AI changes the forecasting equation",
        body: [
          "Modern ML forecasting brings three things spreadsheets can't: it can fit nonlinear patterns automatically (seasonality, regime shifts, cohort effects), it can run thousands of scenarios in parallel with no extra effort, and it can quantify uncertainty as confidence intervals instead of pretending point estimates are exact.",
          "Critically, AI forecasting doesn't replace finance judgment — it informs it. The CFO still owns the assumptions and the story. The model just makes the numerical legwork faster, more rigorous, and more defensible.",
        ],
      },
    ],
    clusterHubHeading: 'Predictive Forecasting Capabilities',
    clusters: [
      {
        slug: 'ai-cash-flow-forecasting',
        title: 'AI Cash Flow Forecasting',
        description:
          'Cash flow forecasts you can take to the board, refreshed daily from live banking and AR/AP data.',
      },
      {
        slug: 'ml-forecasting-finance',
        title: 'ML Forecasting for Finance',
        description:
          'How modern ML forecasting models work: Prophet, ARIMA, gradient boosting, and neural approaches.',
      },
      {
        slug: 'revenue-forecasting-ai',
        title: 'AI Revenue Forecasting',
        description:
          'Cohort-based and pipeline-based revenue forecasting for subscription, recurring, and B2B businesses.',
      },
      {
        slug: 'demand-forecasting-software',
        title: 'Demand Forecasting Software',
        description:
          'Demand forecasting that informs inventory, hiring, and cash planning — not just supply chain.',
      },
      {
        slug: 'scenario-planning-software',
        title: 'Scenario Planning Software',
        description:
          'Run dozens of scenarios in seconds. Stress test your plan against shocks, expansions, and pivots.',
      },
      {
        slug: 'fpa-automation',
        title: 'FP&A Automation',
        description:
          'End-to-end FP&A automation: planning, forecasting, analysis, reporting — without spreadsheet sprawl.',
      },
      {
        slug: 'financial-planning-and-analysis-software',
        title: 'Financial Planning and Analysis Software',
        description:
          'Modern FP&A software for the AI era — buyer\'s checklist, comparison framework, and capability map.',
      },
      {
        slug: 'driver-based-forecasting',
        title: 'Driver-Based Forecasting',
        description:
          'Forecast what actually drives revenue: identify the operational drivers that matter and model them at scale.',
      },
      {
        slug: 'rolling-forecast-software',
        title: 'Rolling Forecast Software',
        description:
          '18-month forward visibility, always. Replace static budgets with continuously updated rolling forecasts.',
      },
    ],
    siblings: [
      'ai-financial-reporting',
      'unified-financial-data-platform',
      'ai-financial-automation',
    ],
    faqs: [
      {
        q: 'What is predictive financial forecasting?',
        a: 'Predictive financial forecasting uses machine learning models to project future financial outcomes — cash flow, revenue, expenses, demand — based on historical patterns and current drivers. Unlike traditional spreadsheet forecasting, ML models can find nonlinear patterns, run scenarios in parallel, and quantify uncertainty.',
      },
      {
        q: 'How accurate are AI forecasts?',
        a: 'Significantly more accurate than spreadsheet forecasting. On benchmark datasets, ML models routinely cut forecast error (MAPE) by 30-60% compared to typical FP&A spreadsheets. The bigger gain is consistency — the model doesn\'t get optimistic before board meetings.',
      },
      {
        q: 'How is this different from Excel-based forecasting?',
        a: 'Excel forecasts rely on hand-coded formulas: this number times that number plus an assumption. They can\'t learn from data, can\'t run scenarios in parallel, and break the moment the underlying assumptions change. ML forecasting learns patterns from your actual historical data and updates automatically as new data arrives.',
      },
      {
        q: 'Can I trust ML forecasts for board reporting?',
        a: 'Yes — when the model is explainable and the CFO owns the assumptions. FinMark.ai\'s forecasts come with full feature attribution (which drivers contributed to the forecast and by how much) and confidence intervals. Most CFOs present both the model output and their own override commentary, with the model serving as a more rigorous starting point than a spreadsheet.',
      },
      {
        q: 'How does it handle one-off events?',
        a: 'You can override or annotate any specific period (e.g., "this quarter has a one-time legal settlement of $X"). The model treats these as known interventions and adjusts the forecast accordingly. For unknown future shocks, you use scenario planning instead.',
      },
      {
        q: 'Does it support driver-based modeling?',
        a: 'Yes — driver-based forecasting is a first-class feature. Connect operational metrics (MAU, deals closed, hires, units shipped) to financial outcomes, and the model will tell you which drivers actually move the financials and how much.',
      },
      {
        q: 'Can I run scenarios?',
        a: 'Yes. Scenario planning is built in. You can run dozens of "what if" scenarios in parallel — what if we hire 20% slower, what if churn ticks up 100bps, what if we land a $5M deal in Q3 — and see the impact on cash, runway, and key metrics in seconds.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P8 — Financial Workflow Automation
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'financial-workflow-automation',
    primaryKeyword: 'financial workflow automation',
    meta: {
      title: 'Financial Workflow Automation Across Finance & Ops | FinMark.ai',
      description:
        'Automate procure-to-pay, order-to-cash, and record-to-report end-to-end. Intelligent process automation that handles exceptions and learns from your data.',
    },
    hero: {
      badge: 'Financial Workflow Automation',
      h1: 'Financial Workflow Automation Across Finance and Operations',
      subhead:
        'Automate procure-to-pay, order-to-cash, and record-to-report end-to-end with AI that handles exceptions, learns from your data, and connects every step of your finance stack.',
      primaryCta: { label: 'Get a demo', href: '/demo' },
      secondaryCta: { label: 'See pricing', href: '/pricing' },
    },
    sections: [
      {
        kicker: "What it is",
        heading: "What is financial workflow automation?",
        body: [
          "Financial workflow automation is the practice of running end-to-end finance processes — procure-to-pay, order-to-cash, record-to-report, hire-to-retire — through software instead of human handoffs. Where AP automation handles a single step, workflow automation handles the entire chain: from PO creation to invoice receipt to approval to payment to GL posting to reconciliation.",
          "What separates modern workflow automation from old-school RPA is intelligence. RPA executes scripts that break the moment something unexpected happens. Intelligent workflow automation handles exceptions, routes ambiguous cases for human review with full context, and improves over time as it sees more of your specific data.",
        ],
      },
      {
        kicker: "RPA vs IPA vs AI",
        heading: "RPA vs IPA vs AI automation — what's the difference?",
        body: [
          "RPA (Robotic Process Automation) is hard-coded automation: scripts that click buttons and copy fields between systems. It works for stable, structured tasks and breaks at every edge case. IPA (Intelligent Process Automation) layers AI on top of RPA: NLP for unstructured documents, ML for decision automation, computer vision for forms. Pure AI automation skips the script layer entirely and uses models to drive workflows directly.",
          "FinMark.ai combines all three. We use RPA for the stable, well-understood steps where determinism matters; we use ML for the messy parts (categorization, exception handling, decision routing); and we use generative AI for the unstructured edges (extracting data from arbitrary documents, drafting communications, generating audit narratives). The result is automation that holds up under real-world complexity.",
        ],
      },
    ],
    clusterHubHeading: 'Financial Workflow Automation Capabilities',
    clusters: [
      {
        slug: 'finance-process-automation',
        title: 'Finance Process Automation',
        description:
          'A practical roadmap for automating finance processes — where to start, how to sequence, what to skip.',
      },
      {
        slug: 'rpa-in-finance',
        title: 'RPA in Finance',
        description:
          'Where RPA wins, where it fails, and how to combine it with AI for resilient finance automation.',
      },
      {
        slug: 'intelligent-process-automation',
        title: 'Intelligent Process Automation',
        description:
          'IPA for finance: how to combine RPA, ML, NLP, and decision automation in one workflow.',
      },
      {
        slug: 'back-office-automation',
        title: 'Back Office Automation',
        description:
          'Reconciliation, reporting, compliance, treasury — high-leverage targets for back office automation.',
      },
      {
        slug: 'operations-automation-software',
        title: 'Operations Automation Software',
        description:
          'Operations automation software for finance teams: what it covers and how to evaluate it.',
      },
      {
        slug: 'procure-to-pay-automation',
        title: 'Procure-to-Pay (P2P) Automation',
        description:
          'End-to-end P2P: requisition, PO, receipt, invoice, payment — with 3-way matching automated.',
      },
      {
        slug: 'order-to-cash-automation',
        title: 'Order-to-Cash (O2C) Automation',
        description:
          'O2C automation: order, fulfill, invoice, collect, cash app — faster cash, fewer errors, less DSO.',
      },
      {
        slug: 'record-to-report-automation',
        title: 'Record-to-Report (R2R) Automation',
        description:
          'Continuous close, continuous reporting — R2R automation for finance teams that want monthly close in days.',
      },
    ],
    siblings: [
      'ai-financial-automation',
      'payment-processing-automation',
      'ai-financial-reporting',
    ],
    faqs: [
      {
        q: 'What is financial workflow automation?',
        a: 'Financial workflow automation is software that runs end-to-end finance processes — like procure-to-pay, order-to-cash, and record-to-report — automatically. Unlike point-solution automation (which handles a single step), workflow automation handles the full chain from initial trigger to final reconciliation.',
      },
      {
        q: 'How is this different from generic RPA tools?',
        a: 'Generic RPA tools are great at scripting clicks between applications. They\'re brittle the moment anything unexpected happens — a new invoice format, an exception, a missing field. FinMark.ai combines RPA with AI: stable steps run as scripts, messy steps run through ML models that handle exceptions natively. The result is automation that doesn\'t break every time something changes.',
      },
      {
        q: 'Can it handle exceptions?',
        a: 'Yes. Exceptions are flagged, routed to the right human with full context, and used as training data so the system handles similar cases automatically next time. Most customers see exception rates drop 40-60% within the first 90 days.',
      },
      {
        q: 'Does it integrate with my ERP?',
        a: 'Yes. Native integrations with NetSuite, SAP, Oracle, Workday, Microsoft Dynamics, and most modern ERPs. Workflow steps can read from and write to your ERP at any point without separate middleware.',
      },
      {
        q: 'What\'s the implementation timeline?',
        a: 'Most customers go live on the first workflow within 2-4 weeks. Full P2P + O2C + R2R deployment takes 60-90 days, depending on system count and existing process maturity.',
      },
      {
        q: 'What\'s the typical ROI?',
        a: 'Workflow automation customers typically see 50-70% reduction in process cycle times, 40-60% reduction in manual labor on the automated processes, and 30-50% reduction in process errors. Payback is usually within the first 6 months.',
      },
      {
        q: 'Can it automate procure-to-pay end-to-end?',
        a: 'Yes — full P2P automation including requisition, PO generation, receipt matching, invoice processing, approval routing, payment execution, and reconciliation. 3-way matching is automated by default with configurable thresholds for human review.',
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
 * Resolve a sibling pillar slug into the metadata needed for SiblingPillarsBar
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
