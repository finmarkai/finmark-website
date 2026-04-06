// Cluster page content config — single source of truth for all cluster pages.
//
// Each cluster has:
//   - pillar: parent pillar slug (must match a slug in pillars.js)
//   - slug: cluster URL segment
//   - primaryKeyword
//   - meta: { title, description }
//   - hero: { badge, h1, subhead }
//   - sections: ordered array of content sections (renders via PillarSection)
//   - relatedSiblings: 2-3 sibling cluster slugs (within same pillar)
//   - crossPillarLink: { pillarSlug, anchor } — 1 cross-pillar contextual link
//   - faqs: FAQ items
//
// To add a new cluster: append a new entry. ClusterPage.jsx renders any cluster
// from this config — no per-page component needed.
//
// Linking matrix rules baked in (rendered automatically by ClusterPage.jsx):
//   - Breadcrumb: Home > Pillar > Cluster
//   - 2× contextual link UP to parent pillar (intro + conclusion)
//   - 2-3 sibling cluster links via relatedSiblings
//   - 1 cross-pillar contextual link via crossPillarLink
//   - Schema: WebPage + BreadcrumbList + FAQPage

export const CLUSTERS = [
  // ─────────────────────────────────────────────────────────────────
  // P1 — AI Financial Automation clusters
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'ai-financial-automation',
    slug: 'ai-for-finance',
    primaryKeyword: 'ai for finance',
    meta: {
      title: 'AI for Finance: A Practical Guide for 2026 | FinMark.ai',
      description:
        'How AI is changing finance — the technologies, the use cases, and what to actually adopt first. A practical guide for finance teams evaluating AI in 2026.',
    },
    hero: {
      badge: 'AI for Finance',
      h1: 'AI for Finance: A Practical Guide for 2026',
      subhead:
        'Where AI actually fits in modern finance — from forecasting and fraud detection to compliance and reporting. The technologies that matter, the use cases that pay back, and how to start.',
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What AI for finance actually means',
        body: [
          'AI for finance is the application of machine learning, natural language processing, and decision automation to the work that finance and operations teams do every day. It is not a single technology — it is a category that includes everything from anomaly detection in transaction streams to natural-language summaries of monthly reports.',
          'Three things separate AI from previous waves of finance automation: AI learns from data instead of following hand-coded rules, it handles exceptions and edge cases natively, and it improves over time as it sees more of your specific patterns. Those properties matter more in finance than almost anywhere else, because finance data is messy, exception-heavy, and constantly changing.',
        ],
      },
      {
        kicker: 'Core technologies',
        heading: 'The core AI technologies finance teams should know',
        body: [
          'Machine learning is the broadest category — supervised models for fraud and credit risk, unsupervised models for anomaly detection, time-series models for forecasting. NLP and large language models handle unstructured documents (invoices, contracts, emails) and generate narrative reports. Computer vision processes scanned receipts and bank statements. Decision automation routes exceptions to the right human with full context attached.',
          'You do not need a PhD to evaluate any of this. The right question for any AI claim is: what data does it learn from, how is the decision explained, and how does it handle the cases it has not seen before. Anything that cannot answer those three questions is not ready for finance.',
        ],
      },
      {
        kicker: 'Use cases',
        heading: 'Eight high-impact AI use cases in finance',
        body: [
          'The use cases that consistently pay back: AI fraud detection, AI cash flow forecasting, KYC and AML automation, automated financial reporting, intelligent invoice processing, automated reconciliation, anomaly detection in close, and natural-language financial Q&A. Each of these has been validated by real finance teams running real production workloads at scale.',
          'The pattern across all of them is the same: AI replaces work that is structured, recurring, and currently consuming analyst hours. Pick the use case where your team spends the most repetitive time and has the cleanest data — that is where the first AI deployment will have the highest ROI.',
        ],
      },
      {
        kicker: 'How to start',
        heading: 'Where finance teams should actually start with AI',
        body: [
          'Start with one use case, not a platform-wide rollout. The use case should be chosen by three criteria: it consumes a lot of repetitive analyst time, the data is reasonably clean and centralized, and the failure mode is forgiving (you can review AI output before it commits an action). Reporting automation, AP automation, and KYC are the three most common starting points for exactly these reasons.',
          'Avoid the trap of trying to AI-enable everything at once. The teams that succeed with AI in finance go deep on one workflow, prove the value, then expand. The teams that fail try to do eight things badly at the same time.',
        ],
      },
    ],
    relatedSiblings: ['financial-automation-software'],
    crossPillarLink: {
      pillarSlug: 'ai-fraud-detection',
      anchor: 'AI fraud detection',
    },
    faqs: [
      {
        q: 'What is AI for finance?',
        a: 'AI for finance is the use of machine learning, NLP, and decision automation to run finance and operations workflows that previously required manual effort. It includes everything from fraud detection to forecasting to natural-language reporting.',
      },
      {
        q: 'Is AI for finance ready for production use?',
        a: 'Yes — for the right use cases. Fraud detection, KYC, transaction monitoring, and reporting automation are all production-mature and used at scale by major banks and fintechs. Generative AI for less structured tasks (drafting commentary, conversational Q&A) is more recent but maturing fast.',
      },
      {
        q: 'How is AI for finance different from RPA?',
        a: 'RPA executes hand-coded scripts that break the moment something unexpected happens. AI learns patterns from data and handles exceptions natively. The most powerful systems combine both: RPA for stable steps, AI for the messy parts.',
      },
      {
        q: 'Can small finance teams adopt AI?',
        a: 'Yes. Modern AI finance platforms ship as SaaS, so you do not need to hire ML engineers to deploy them. The tradeoff is that small teams should start narrow (one workflow at a time) and pick high-leverage use cases like AP automation or reporting first.',
      },
      {
        q: 'What does FinMark.ai offer for AI in finance?',
        a: 'FinMark.ai is a unified platform that brings every category of AI for finance — reporting, forecasting, compliance, fraud detection, payments, workflow automation — into one product. You start with whichever capability matters most and expand as the value compounds.',
      },
    ],
  },
  {
    pillar: 'ai-financial-automation',
    slug: 'financial-automation-software',
    primaryKeyword: 'financial automation software',
    meta: {
      title: 'Financial Automation Software: Buyer\'s Guide for 2026 | FinMark.ai',
      description:
        'How to evaluate financial automation software in 2026. Categories, buying criteria, and the gap between point solutions and unified platforms.',
    },
    hero: {
      badge: 'Financial Automation Software',
      h1: 'Financial Automation Software That Scales With Your Team',
      subhead:
        'The buyer\'s guide for finance teams evaluating automation software in 2026. Categories, criteria, common traps, and what separates the platforms from the point tools.',
    },
    sections: [
      {
        kicker: 'What it does',
        heading: 'What financial automation software actually does',
        body: [
          'Financial automation software replaces manual finance work — invoice processing, reconciliation, reporting, compliance checks, payment processing, forecasting — with systems that do it automatically and at scale. The goal is to take the repetitive, structured work off your analysts so they can focus on the parts that actually require judgment.',
          'Modern financial automation software does more than just script clicks. It uses AI to handle exceptions, NLP to read unstructured documents, and integrations to read and write across your ERP, banking, and payment systems. The result is automation that holds up in production, not just in demos.',
        ],
      },
      {
        kicker: 'Categories',
        heading: 'The six main categories of financial automation software',
        body: [
          'AP automation handles invoice capture, coding, approval, payment, and reconciliation. AR automation handles invoicing, collections, cash application, and dispute resolution. Reporting automation generates statements, dashboards, and management commentary. Compliance automation handles KYC, AML, transaction monitoring, and regulatory filings. Fraud detection runs ML models against transaction streams. FP&A automation handles planning, forecasting, and scenario analysis.',
          'Most companies start by buying one category from a point-solution vendor, then end up running 6-8 different systems that do not talk to each other. The maintenance cost compounds. The integration debt grows. By year three, the team is spending more time managing the tools than doing finance work.',
        ],
      },
      {
        kicker: 'Buying criteria',
        heading: 'What to look for in 2026',
        body: [
          'Five criteria that separate the best financial automation software from the rest: AI-native (built around ML, not bolted on), pre-built integrations to your existing stack, full audit trail for every automated decision, time-to-value measured in weeks not months, and the ability to handle exceptions without rebuilding the workflow each time.',
          'A sixth criterion that matters more than people realize: how well the vendor handles the messy real-world data. Demo environments are clean. Your actual ERP is not. Ask for a proof-of-concept on your real data before signing.',
        ],
      },
      {
        kicker: 'Platform vs point tools',
        heading: 'Platform vs point tool — when each makes sense',
        body: [
          'Point tools win when you need depth in a single category and you have the integration capacity to glue them together. Platforms win when you need breadth across categories and you want one vendor relationship, one data model, and one bill. For most finance teams, the math tilts toward platforms by year two or three — but the right answer depends on your team size, your tolerance for integration work, and how mature your existing stack already is.',
        ],
      },
    ],
    relatedSiblings: ['ai-for-finance'],
    crossPillarLink: {
      pillarSlug: 'payment-processing-automation',
      anchor: 'payment processing automation',
    },
    faqs: [
      {
        q: 'What is financial automation software?',
        a: 'Financial automation software replaces manual finance work with systems that do it automatically. It includes AP/AR automation, reporting, compliance, fraud detection, and FP&A — either as point solutions or as a unified platform.',
      },
      {
        q: 'Should I buy a platform or stitch together point tools?',
        a: 'Point tools work well for narrow needs and small teams. Platforms scale better when you need 4+ categories of automation, because point tools accumulate integration debt over time. By year 2-3, most growing teams find platforms cheaper to operate.',
      },
      {
        q: 'How long does financial automation software take to implement?',
        a: 'Modern SaaS automation goes live in weeks, not months. The biggest implementation variable is data integration — if your source systems are clean and well-organized, implementation is faster. If they need cleanup first, that often becomes the bottleneck.',
      },
      {
        q: 'What is the typical ROI of financial automation?',
        a: 'Most categories pay back within 6-12 months. AP automation typically saves $9 per invoice. Reporting automation cuts close cycles by 30-50%. Fraud detection reduces losses by 50-80%. The compounding effect of catching errors earlier and freeing analyst time is harder to measure but often larger than the direct savings.',
      },
      {
        q: 'How does FinMark.ai compare to other financial automation software?',
        a: 'FinMark.ai is built as a unified platform from day one — every capability shares the same data layer, the same models, and the same UI. That makes it slower to evaluate against narrow point solutions on a single feature, but dramatically cheaper to operate as your needs grow.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P2 — Compliance Automation clusters
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'compliance-automation',
    slug: 'regulatory-compliance-automation',
    primaryKeyword: 'regulatory compliance automation',
    meta: {
      title: 'Regulatory Compliance Automation for Financial Services | FinMark.ai',
      description:
        'Automate BSA, OFAC, GDPR, MiFID, Basel and SEC compliance with AI you can audit. Continuous monitoring, automated reporting, and audit-ready trails for modern financial services.',
    },
    hero: {
      badge: 'Regulatory Compliance',
      h1: 'Regulatory Compliance Automation for Modern Financial Services',
      subhead:
        'BSA, OFAC, GDPR, MiFID, Basel, SEC — automated monitoring and reporting for the regulatory regimes that matter to your business. Built around explainable AI your auditors will trust.',
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What regulatory compliance automation covers',
        body: [
          'Regulatory compliance automation is software that handles the detect → assess → report → audit lifecycle for the regulations that apply to your business. For most financial services companies, that means automated KYC and AML, transaction monitoring against sanctions and watch lists, regulatory reporting (CTR, SAR, FBAR, FATCA), and an audit-ready trail of every decision.',
          'The shift from manual to automated compliance is not just about speed. It changes the model: instead of periodic reviews after the fact, automated compliance happens continuously, in real time, on every transaction. That is the only way to keep up with modern transaction volumes without growing the compliance team linearly.',
        ],
      },
      {
        kicker: 'Why it matters',
        heading: 'The regulatory landscape in 2026',
        body: [
          'Regulators have not gotten more lenient. BSA enforcement is up. OFAC sanctions lists are growing faster than compliance teams can keep up by hand. GDPR fines have crossed nine figures multiple times. The Basel III/IV implementation deadlines keep moving but the requirements keep stacking. MiFID II reporting requires near-real-time transaction reporting. The cost of getting it wrong has never been higher.',
          'At the same time, regulators have explicitly endorsed risk-based, technology-driven compliance. FATF guidance, FFIEC handbooks, and EU regulation all say the same thing: automation with proper auditability is acceptable, often preferred. The teams still doing compliance manually are not being more conservative — they are being slower and more error-prone for no regulatory benefit.',
        ],
      },
      {
        kicker: 'Where automation fits',
        heading: 'The four places automation reduces compliance effort',
        body: [
          'First: customer onboarding. Automated KYC and identity verification take onboarding from weeks to minutes. Second: ongoing monitoring. Continuous transaction monitoring catches issues in real time instead of in the next quarterly review. Third: regulatory reporting. Automated CTR, SAR, and other filings eliminate the manual data wrangling that consumes most compliance team time. Fourth: audit prep. A complete, queryable audit trail reduces audit fieldwork by 60-80%.',
        ],
      },
      {
        kicker: 'What good looks like',
        heading: 'What a good automated compliance program looks like',
        body: [
          'Good compliance automation has five properties: every alert is explainable (you can tell the auditor exactly why the model flagged a transaction), every decision is logged and queryable, the system handles exceptions without breaking, the false positive rate is low enough that real alerts get attention, and the program adapts as regulations change without requiring custom development.',
          'Bad compliance automation looks like a black-box ML model with no explanation, a 95% false positive rate, and a vendor that needs three months to add a new sanctions list. Avoid those.',
        ],
      },
    ],
    relatedSiblings: ['kyc-automation', 'aml-compliance-software'],
    crossPillarLink: {
      pillarSlug: 'ai-fraud-detection',
      anchor: 'AI fraud detection',
    },
    faqs: [
      {
        q: 'What is regulatory compliance automation?',
        a: 'Regulatory compliance automation is software that runs the detect → assess → report → audit lifecycle for the regulations that apply to your business. It typically includes KYC, AML, transaction monitoring, regulatory reporting, and audit trail management.',
      },
      {
        q: 'Is automated compliance accepted by regulators?',
        a: 'Yes. FATF, FFIEC, EU AML directives, and US BSA/AML rulemaking all explicitly endorse risk-based, technology-driven compliance. The key requirement is auditability — you must be able to explain every decision after the fact.',
      },
      {
        q: 'What regulations does FinMark.ai support?',
        a: 'BSA, OFAC, FinCEN (US); 5AMLD, 6AMLD, GDPR, MiFID II (EU); FCA, PRA (UK); PMLA, RBI (India); MAS (Singapore); and most major regulatory regimes. Templates are updated continuously as rules change.',
      },
      {
        q: 'How does AI handle false positives in compliance?',
        a: 'Rule-based compliance systems often produce 95%+ false positive rates. AI systems learn the patterns that actually predict suspicious activity, typically reducing false positives by 60-80% while catching novel patterns hand-written rules miss.',
      },
      {
        q: 'How long does compliance automation take to implement?',
        a: 'Most customers go live on KYC automation in 2 weeks. Full AML, transaction monitoring, and regulatory reporting takes 30-60 days. The biggest variable is how clean and centralized your transaction data already is.',
      },
    ],
  },
  {
    pillar: 'compliance-automation',
    slug: 'kyc-automation',
    primaryKeyword: 'kyc automation',
    meta: {
      title: 'KYC Automation: Onboard Customers in Minutes | FinMark.ai',
      description:
        'KYC automation that takes customer onboarding from weeks to minutes. AI-powered identity verification, document checks, risk scoring, and ongoing monitoring — all auditable.',
    },
    hero: {
      badge: 'KYC Automation',
      h1: 'KYC Automation: Onboard Customers in Minutes, Not Weeks',
      subhead:
        'Identity verification, document checks, risk scoring, and ongoing monitoring — automated end-to-end with AI that handles exceptions and produces audit trails your regulators trust.',
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What KYC automation actually does',
        body: [
          'KYC automation replaces the manual customer onboarding process — collecting documents, verifying identity, screening against sanctions lists, scoring risk, and reviewing the file — with software that does all of it automatically. Modern KYC automation goes from "we need a copy of your passport" to a fully verified, risk-scored customer file in under five minutes.',
          'The technology stack underneath is mature: optical character recognition reads identity documents, biometric matching compares the document photo to a selfie, sanctions screening checks the customer against global watch lists, and risk scoring models flag the customer for the right level of ongoing monitoring. Each step is logged and explainable.',
        ],
      },
      {
        kicker: 'The KYC lifecycle',
        heading: 'The full KYC lifecycle, automated',
        body: [
          'KYC is not a one-time event — it is a lifecycle. Onboarding KYC verifies identity at signup. Periodic refresh KYC re-verifies high-risk customers on a schedule. Trigger-based KYC re-screens when something changes (a new beneficial owner, a sudden change in transaction patterns, a new sanction). Each phase has different requirements and different signals to monitor.',
          'The platforms that handle the full lifecycle in one system — instead of bolting periodic refresh onto a separate tool — get dramatically better results, because the same risk model sees the customer across all phases.',
        ],
      },
      {
        kicker: 'Why AI matters',
        heading: 'What AI changes in KYC',
        body: [
          'Three things AI changes in KYC. First, document fraud detection — AI can spot manipulated or synthetic identity documents that humans miss. Second, biometric matching — modern face matching is more accurate than humans at comparing a live selfie to a passport photo. Third, risk scoring — ML models combine dozens of signals to assign a risk score that informs the level of due diligence required, instead of a one-size-fits-all process.',
          'The end result is faster onboarding for the 90% of customers who are clearly low-risk and more thorough due diligence on the 10% who actually warrant it. Manual KYC inverts that ratio.',
        ],
      },
      {
        kicker: 'Regulatory acceptance',
        heading: 'Is automated KYC actually accepted by regulators?',
        body: [
          'Yes — explicitly. FATF Recommendation 10 endorses risk-based KYC including digital methods. The EU 6AMLD, FCA guidance, FinCEN customer due diligence rules, and most other global frameworks all permit and often encourage technology-based identity verification. The requirement is that the methodology be auditable: you must be able to demonstrate to a regulator how each verification was made and why each customer was scored the way they were.',
          'FinMark.ai\'s KYC automation is built around exactly this requirement. Every verification produces a complete audit trail; every risk score comes with the features that drove it; every model decision is reproducible after the fact.',
        ],
      },
    ],
    relatedSiblings: ['aml-compliance-software', 'regulatory-compliance-automation'],
    crossPillarLink: {
      pillarSlug: 'ai-fraud-detection',
      anchor: 'AI fraud detection',
    },
    faqs: [
      {
        q: 'What is KYC automation?',
        a: 'KYC automation is software that handles customer identity verification, document checks, sanctions screening, and risk scoring automatically. Modern KYC automation completes onboarding in minutes instead of weeks.',
      },
      {
        q: 'Is automated KYC legal and compliant?',
        a: 'Yes. FATF, EU 6AMLD, US FinCEN, and most major regulatory frameworks explicitly permit automated KYC as long as the methodology is documented and auditable.',
      },
      {
        q: 'How accurate is automated identity verification?',
        a: 'Modern systems combining document verification + biometric matching achieve accuracy rates above 99% on legitimate users while catching synthetic and manipulated documents at higher rates than human reviewers.',
      },
      {
        q: 'What if the system flags a customer incorrectly?',
        a: 'Flagged customers are routed to a human reviewer with full context: the document images, the matching score, the sanctions hits, and the risk factors. The reviewer makes the final decision and the model learns from the feedback.',
      },
      {
        q: 'How does KYC automation handle ongoing monitoring?',
        a: 'After onboarding, customers are continuously monitored against updated sanctions lists, beneficial owner changes, and behavioral risk signals. High-risk customers get triggered re-verification automatically.',
      },
    ],
  },
  {
    pillar: 'compliance-automation',
    slug: 'aml-compliance-software',
    primaryKeyword: 'aml compliance software',
    meta: {
      title: 'AML Compliance Software With AI False Positive Reduction | FinMark.ai',
      description:
        'AML compliance software powered by AI. Sanctions screening, transaction monitoring, and SAR-ready audit trails — with false positive rates 60-80% lower than legacy rules engines.',
    },
    hero: {
      badge: 'AML Compliance Software',
      h1: 'AML Compliance Software That Adapts to Your Risk Profile',
      subhead:
        'Sanctions screening, transaction monitoring, and SAR workflow management — powered by AI that learns your risk patterns and dramatically reduces false positives.',
    },
    sections: [
      {
        kicker: 'What it does',
        heading: 'What AML compliance software covers',
        body: [
          'AML compliance software handles the four pillars of an AML program: sanctions and watch list screening, transaction monitoring, suspicious activity reporting (SAR), and recordkeeping. Modern AML platforms run all four on a shared transaction stream and a shared customer data layer, so signals from one feed into the others — a sanction hit on a counterparty automatically affects the customer\'s risk score and triggers transaction review.',
          'The bar for AML software has gone up dramatically in the last five years. Regulators expect real-time monitoring (not nightly batches), explainable decisions (not black-box models), and full audit trails. The legacy systems still running rule-based AML on overnight jobs are increasingly out of compliance with current expectations.',
        ],
      },
      {
        kicker: 'False positives',
        heading: 'The false positive problem and how AI fixes it',
        body: [
          'The dirty secret of legacy AML software is that most of what it produces is noise. False positive rates of 95-99% are common — meaning a compliance team can spend 95% of its time investigating alerts that turn out to be nothing. The team that should be hunting actual money laundering is instead processing tickets.',
          'AI changes the math by learning what suspicious activity actually looks like for your specific customer base, instead of relying on generic rules. Customers running ML-based AML typically see false positive reductions of 60-80% within the first 90 days, with no drop in true positive detection rate. That means the same compliance headcount can cover 5x the transaction volume.',
        ],
      },
      {
        kicker: 'Auditability',
        heading: 'Why explainability is non-negotiable',
        body: [
          'Regulators do not accept "the model said so" as a justification for an AML decision. Every AML platform that uses AI must be able to explain, for each alert, exactly which features contributed to the score and how much. This is not a nice-to-have — it is a hard regulatory requirement, and the AML platforms that fail audits are usually the ones that treated explainability as an afterthought.',
          'FinMark.ai\'s AML platform is built around explainability by design. Every score is decomposable, every model decision is reproducible, and the entire alert investigation history is queryable. Auditors love it; compliance officers love it more.',
        ],
      },
      {
        kicker: 'Industries',
        heading: 'AML use cases by industry',
        body: [
          'Banks need full BSA/OFAC programs covering retail, commercial, and correspondent banking. Fintech startups need fast onboarding and behavioral risk scoring without a giant compliance team. Crypto exchanges need travel rule compliance and complex chain analysis. Insurance companies need claims fraud + AML overlap detection. The same underlying AML platform handles all of these with industry-specific configuration.',
        ],
      },
    ],
    relatedSiblings: ['kyc-automation', 'regulatory-compliance-automation'],
    crossPillarLink: {
      pillarSlug: 'ai-fraud-detection',
      anchor: 'transaction monitoring software',
    },
    faqs: [
      {
        q: 'What is AML compliance software?',
        a: 'AML compliance software automates sanctions screening, transaction monitoring, suspicious activity reporting, and recordkeeping. Modern AML software uses machine learning to dramatically reduce false positives while catching novel laundering patterns.',
      },
      {
        q: 'How much does AI reduce AML false positives?',
        a: 'Customers typically see 60-80% reductions in false positive rates within 90 days of going live with AI-based monitoring. The same compliance team can then cover 4-5x the transaction volume without missing real threats.',
      },
      {
        q: 'How does FinMark.ai handle regulator audits?',
        a: 'Every AML decision the platform makes is logged with full feature attribution — which signals contributed to the alert, with what weight. Auditors can reproduce any decision after the fact, which makes audits dramatically faster.',
      },
      {
        q: 'Does it integrate with my core banking system?',
        a: 'Yes. Direct integrations with major core banking platforms (FIS, Fiserv, Jack Henry, Temenos) and a generic real-time event API for proprietary cores. AML monitoring runs on your existing transaction stream — no data migration required.',
      },
      {
        q: 'How quickly can FinMark.ai add a new sanctions list?',
        a: 'New sanctions lists are added within 24 hours of publication. Major lists (OFAC SDN, EU consolidated, UN) are continuously synced. Custom internal watch lists can be added by your team without engineering involvement.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P3 — Fraud Detection clusters
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'ai-fraud-detection',
    slug: 'fraud-detection-software',
    primaryKeyword: 'fraud detection software',
    meta: {
      title: 'Fraud Detection Software for Modern Payment Volumes | FinMark.ai',
      description:
        'Modern fraud detection software with real-time machine learning scoring, low false positive rates, and full auditability. Built for high-volume payments and financial services.',
    },
    hero: {
      badge: 'Fraud Detection Software',
      h1: 'Fraud Detection Software Built for Modern Payment Volumes',
      subhead:
        'Real-time machine learning fraud scoring, sub-100ms latency, and explainable decisions. The fraud detection software that scales with your transaction volume instead of your compliance headcount.',
    },
    sections: [
      {
        kicker: 'What it does',
        heading: 'What modern fraud detection software actually does',
        body: [
          'Fraud detection software analyzes incoming transactions in real time and decides which ones to approve, flag, or block. The decision happens at authorization time — typically in under 100 milliseconds — and is based on hundreds of features about the transaction, the customer, the device, and the historical pattern. Modern fraud detection software does this with machine learning models, not rules engines.',
          'The output is a risk score and an explanation: how risky is this transaction, and exactly why. The score drives the decision (approve, challenge, block, escalate) and the explanation drives the audit trail and any human review.',
        ],
      },
      {
        kicker: 'Rules vs ML',
        heading: 'Why rules-based fraud detection is no longer enough',
        body: [
          'Rule-based fraud systems work like decision trees: if transaction amount > X and country = Y and device unfamiliar, then flag. They are easy to understand and easy to audit, which is why they were the standard for decades. They also have a fatal flaw: fraudsters constantly adapt their patterns, and rules cannot adapt as fast as the engineers who maintain them.',
          'The result is that rule-based fraud systems either have crushing false positive rates (when rules are tightened to catch new patterns) or miss real fraud (when rules are loosened to reduce false positives). ML models avoid this tradeoff because they learn the patterns directly from data and adapt automatically as new fraud patterns appear.',
        ],
      },
      {
        kicker: 'Buying criteria',
        heading: 'What to look for in fraud detection software',
        body: [
          'Six criteria. First: real-time inference under 100ms — anything slower means you cannot block fraud at authorization. Second: low false positive rate (under 20% on a typical mix of transactions). Third: explainability for every decision. Fourth: continuous learning so the model improves on your specific data. Fifth: integration with your payment processor and customer systems via API. Sixth: SOC 2 and PCI DSS compliance, since you will be processing card data.',
          'A seventh criterion that matters enormously in practice: how the vendor handles the long tail of edge cases. Demo environments are clean. Real fraud is messy. Ask for performance metrics on real customer data, not synthetic benchmarks.',
        ],
      },
      {
        kicker: 'How FinMark.ai works',
        heading: 'How FinMark.ai\'s fraud detection works',
        body: [
          'FinMark.ai runs an inference pipeline on top of your transaction stream. Each transaction is scored against multiple specialized models — some looking at the transaction itself, some at customer behavior, some at network-level signals across customers — and gets a risk score plus an explanation. The decision returns in under 100ms. Models retrain weekly on your fraud feedback (confirmed fraud, false positives) and immediately when novel patterns are detected.',
          'Crucially, every score is reproducible after the fact. If a customer disputes a decision or a regulator asks why a transaction was blocked, you can pull the exact features and weights that drove the decision.',
        ],
      },
    ],
    relatedSiblings: ['machine-learning-fraud-detection'],
    crossPillarLink: {
      pillarSlug: 'compliance-automation',
      anchor: 'AML compliance software',
    },
    faqs: [
      {
        q: 'How accurate is modern fraud detection software?',
        a: 'Production ML fraud systems typically achieve 85-95% precision and recall on standard benchmarks, vs 30-60% for rule-based systems. Performance on your specific data depends on training data quality and how well the model is tuned to your customer base.',
      },
      {
        q: 'How does fraud detection software handle false positives?',
        a: 'Two ways. First, ML models tuned on your data have inherently lower false positive rates. Second, dynamic decision thresholds let high-value customers get more lenient treatment while new customers get tighter screening. Most customers see 60-80% reductions in false positives within 30 days.',
      },
      {
        q: 'What\'s the typical latency for real-time fraud scoring?',
        a: 'P50 latency on FinMark.ai is 25ms; P99 is under 100ms. Fast enough to slot into payment authorization without affecting customer experience.',
      },
      {
        q: 'Can fraud detection software handle ACH, wire, and card fraud?',
        a: 'Yes. Modern fraud detection software covers all payment rails — card present, card not present, ACH, wire, RTP, BEC, and account takeover. The same models can be tuned for each fraud type.',
      },
      {
        q: 'Is FinMark.ai PCI compliant?',
        a: 'Yes. PCI DSS Level 1, SOC 2 Type II, and ISO 27001 certified. Card data is tokenized so it never enters your systems through FinMark.ai.',
      },
    ],
  },
  {
    pillar: 'ai-fraud-detection',
    slug: 'machine-learning-fraud-detection',
    primaryKeyword: 'machine learning fraud detection',
    meta: {
      title: 'Machine Learning Fraud Detection Explained | FinMark.ai',
      description:
        'How machine learning detects fraud. Supervised, unsupervised, and graph-based approaches. Feature engineering, false positive reduction, and explainability for finance ML.',
    },
    hero: {
      badge: 'ML Fraud Detection',
      h1: 'How Machine Learning Detects Fraud (And Why Rules Aren\'t Enough)',
      subhead:
        'A practical guide to ML fraud detection: the model types, the feature engineering that matters, the false positive problem, and how explainability makes ML usable in regulated finance.',
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What machine learning fraud detection means',
        body: [
          'Machine learning fraud detection uses statistical models trained on historical transaction data to predict whether a new transaction is fraudulent. Unlike rule-based systems that follow hand-coded "if this then flag" logic, ML models learn the patterns that distinguish fraud from legitimate activity directly from data and adapt as new patterns emerge.',
          'The shift from rules to ML is not just an incremental improvement. It is a different approach to a problem that rules cannot solve: fraudsters adapt their tactics constantly, and any static rule set is obsolete the moment it ships. ML models can be retrained as fast as new fraud patterns appear.',
        ],
      },
      {
        kicker: 'Model types',
        heading: 'The four main ML approaches to fraud detection',
        body: [
          'Supervised learning trains a model on historical examples labeled as fraud or not-fraud. It is the most common approach and works well when you have enough labeled training data. Unsupervised learning (anomaly detection) finds transactions that look unusual compared to normal patterns, even without labels — useful for novel fraud types. Semi-supervised learning combines both. Graph-based approaches analyze relationships between accounts, devices, and transactions to detect fraud rings that look normal individually but suspicious in aggregate.',
          'The best production fraud systems use all four together. Supervised models catch the bulk of known fraud patterns. Anomaly detection catches the long tail of novel attacks. Graph models catch coordinated fraud. Each compensates for the others\' blind spots.',
        ],
      },
      {
        kicker: 'Features',
        heading: 'The features that actually predict fraud',
        body: [
          'The features that drive fraud detection accuracy fall into four categories. Transaction features (amount, currency, time, merchant). Velocity features (how many transactions in the last hour, day, week). Behavioral features (does this match the customer\'s normal pattern). Network features (is this device or IP linked to other suspicious accounts). The strongest production models use 200+ features across all four categories.',
          'Feature engineering — designing the right features for your specific fraud types — is often more important than the choice of model architecture. A simple model with great features beats a complex model with weak features almost every time.',
        ],
      },
      {
        kicker: 'Explainability',
        heading: 'Why explainability is non-negotiable for finance ML',
        body: [
          'In regulated finance, "the model said so" is not an acceptable answer to a customer dispute or a regulator inquiry. Every ML fraud decision must be explainable: which features contributed, how much each contributed, and what the model would have decided if certain features had been different. This is hard to get right with deep learning models — which is why production fraud systems often use explainable model architectures like gradient boosted trees instead of neural nets.',
          'FinMark.ai\'s ML fraud detection is built around explainability by design. Every score comes with a complete feature attribution. Auditors can reproduce decisions. Compliance teams can defend the model in regulatory reviews. This is what makes ML fraud detection viable in finance, not a research curiosity.',
        ],
      },
    ],
    relatedSiblings: ['fraud-detection-software'],
    crossPillarLink: {
      pillarSlug: 'unified-financial-data-platform',
      anchor: 'unified financial data platform',
    },
    faqs: [
      {
        q: 'What is machine learning fraud detection?',
        a: 'Machine learning fraud detection uses statistical models trained on historical data to predict whether new transactions are fraudulent. Unlike rule-based systems, ML models learn patterns from data and adapt as new fraud emerges.',
      },
      {
        q: 'What ML models work best for fraud?',
        a: 'Gradient boosted trees (XGBoost, LightGBM) are the workhorse for supervised fraud detection because they\'re accurate and explainable. Anomaly detection algorithms (isolation forest, autoencoders) catch novel patterns. Graph neural networks catch coordinated fraud. Production systems use all of these together.',
      },
      {
        q: 'How does ML handle imbalanced fraud data?',
        a: 'Fraud is rare — typically 0.1-1% of transactions. Standard techniques include oversampling minority class, undersampling majority class, using class weights, and choosing models robust to imbalance. The more important fix is using the right evaluation metric (precision/recall/AUPRC) instead of accuracy.',
      },
      {
        q: 'Can ML models be audited?',
        a: 'Yes — when designed for it. Tree-based models like XGBoost are inherently interpretable. SHAP values and feature attribution let you explain any single prediction. This is critical for regulated finance, where every decision must be defensible.',
      },
      {
        q: 'How often should fraud models be retrained?',
        a: 'At minimum weekly, ideally continuously. Fraud patterns evolve fast and models drift accordingly. FinMark.ai retrains models weekly by default and immediately when novel attack patterns are detected.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P4 — Payment Processing clusters
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'payment-processing-automation',
    slug: 'automated-payment-processing',
    primaryKeyword: 'automated payment processing',
    meta: {
      title: 'Automated Payment Processing for B2B Finance Teams | FinMark.ai',
      description:
        'Automated payment processing with built-in fraud screening, multi-currency support, and reconciliation. From initiation to settlement in one intelligent platform.',
    },
    hero: {
      badge: 'Automated Payment Processing',
      h1: 'Automated Payment Processing for B2B and Marketplace Volumes',
      subhead:
        'End-to-end automated payment workflows: initiation, routing, settlement, reconciliation, and reporting — with fraud screening and compliance built in at every step.',
    },
    sections: [
      {
        kicker: 'What it does',
        heading: 'What automated payment processing actually does',
        body: [
          'Automated payment processing handles every step of the payment lifecycle without human intervention. A payment is initiated (by an invoice, an API call, or a scheduled run), routed through approval workflows, screened for fraud and compliance, executed across the right rail, settled, reconciled against the GL, and reported on. All automatically. Exceptions get flagged with full context for human review.',
          'The pieces have existed for years, but stitching them together used to require integrating 4-6 different systems and writing custom glue code for each handoff. Modern platforms run the full workflow in one product, which is what makes "end-to-end automation" actually work in production.',
        ],
      },
      {
        kicker: 'The workflow',
        heading: 'The end-to-end automated payment workflow',
        body: [
          'Stage 1 is initiation — the payment comes from an invoice (AP), a customer charge (AR), a payroll run, a vendor payout, or an API call. Stage 2 is enrichment — adding metadata like categorization, tax codes, and matching POs. Stage 3 is approval — routing through your approval policy (auto-approve under threshold, route to manager above). Stage 4 is screening — fraud detection and compliance checks run inline. Stage 5 is execution — the right rail (ACH, wire, card, RTP) is selected and the payment runs. Stage 6 is settlement and reconciliation — confirming receipt and posting to the GL. Stage 7 is reporting — making the payment visible in dashboards and reports.',
          'Manual payment processing fails at the handoffs between these stages. Automation succeeds by running them as a single workflow with no manual handoffs.',
        ],
      },
      {
        kicker: 'Built-in screening',
        heading: 'Why fraud screening and compliance are inline',
        body: [
          'Payments that bypass fraud screening cause losses. Payments that bypass compliance screening cause fines and reputational damage. Most legacy payment systems treat fraud and compliance as bolt-ons run by separate teams — which means they happen too late to prevent the bad transactions in the first place. FinMark.ai runs fraud detection and compliance screening inline, before payment execution, so suspicious or non-compliant payments never go out.',
          'Inline screening only works if the latency is low enough to not slow payments down. FinMark.ai\'s fraud and compliance checks complete in under 100ms, fast enough to not affect even high-volume real-time payment flows.',
        ],
      },
      {
        kicker: 'Reconciliation',
        heading: 'Automated reconciliation against the GL',
        body: [
          'The least glamorous part of payment processing — and the most painful when done by hand — is reconciliation. Matching bank statements to GL entries, identifying exceptions, investigating discrepancies, and posting adjustments consumes weeks of finance team time every month. Automated reconciliation handles 90%+ of matches automatically and surfaces only the actual exceptions for human review. The result is closing the books in days instead of weeks.',
        ],
      },
    ],
    relatedSiblings: ['accounts-payable-automation'],
    crossPillarLink: {
      pillarSlug: 'ai-fraud-detection',
      anchor: 'fraud detection software',
    },
    faqs: [
      {
        q: 'What is automated payment processing?',
        a: 'Automated payment processing is software that handles the full payment lifecycle — initiation, approval, fraud screening, execution, settlement, and reconciliation — automatically. Modern platforms run all of it in one workflow with no manual handoffs.',
      },
      {
        q: 'How does fraud screening work in automated payment processing?',
        a: 'Fraud screening runs inline during payment authorization, in under 100ms. Suspicious payments are blocked or flagged before execution. The same models that power our fraud detection product run on every payment in this product.',
      },
      {
        q: 'Can it handle multi-currency payments?',
        a: 'Yes. Multi-currency is supported across 100+ currencies with native FX, local payment rails in 50+ countries, and automated treasury management to optimize when to convert.',
      },
      {
        q: 'Will it integrate with my ERP?',
        a: 'Yes. Direct integrations with NetSuite, SAP, Oracle, Workday, Microsoft Dynamics, QuickBooks, and Xero. Payments and reconciliations sync to your GL automatically.',
      },
      {
        q: 'What\'s the typical ROI of payment automation?',
        a: 'Most customers see payback within 6 months from a combination of reduced manual labor, fewer fraud losses, captured early-pay discounts, and faster reconciliation.',
      },
    ],
  },
  {
    pillar: 'payment-processing-automation',
    slug: 'accounts-payable-automation',
    primaryKeyword: 'accounts payable automation',
    meta: {
      title: 'Accounts Payable Automation: Invoice to Payment, Hands-Free | FinMark.ai',
      description:
        'AP automation that takes invoice processing costs from $11 to $2 per invoice. AI-powered capture, 3-way matching, approval routing, and payment in one workflow.',
    },
    hero: {
      badge: 'AP Automation',
      h1: 'Accounts Payable Automation: From Invoice to Payment, Hands-Free',
      subhead:
        'Automate every step of the AP workflow — capture, code, approve, pay, reconcile — with AI that handles exceptions and integrates directly with your ERP.',
    },
    sections: [
      {
        kicker: 'The AP problem',
        heading: 'Why manual AP is broken at scale',
        body: [
          'Manual accounts payable is one of the most expensive processes in finance. Industry benchmarks put the cost at $9-15 per invoice when you include capture, coding, approval routing, payment, and reconciliation. For a company processing 10,000 invoices per month, that is $1.5M+ per year just to pay your vendors.',
          'It is also slow. Manual AP cycles average 10-25 days from invoice receipt to payment. That means missed early-pay discounts, strained vendor relationships, and constant firefighting from finance to track down exceptions and approvals. The teams running manual AP are not lazy — they are drowning in volume that the process was never designed to handle.',
        ],
      },
      {
        kicker: 'The workflow',
        heading: 'The AP workflow, automated step by step',
        body: [
          'Step 1: capture. Invoices arrive via email, vendor portal, EDI, or API. AI extracts the line items, vendor info, dates, and amounts automatically — including from PDF and scanned documents. Step 2: coding. Machine learning predicts the right GL account, cost center, and tax codes based on history. Step 3: matching. Three-way match against the PO and goods receipt happens automatically; only mismatches go to humans. Step 4: approval. Routing follows your approval policy (auto-approve under threshold, route by amount and category). Step 5: payment. The right rail is chosen automatically and the payment executes. Step 6: reconciliation. The payment posts to the GL and matches against bank statements automatically.',
          'Each step is logged with full audit trail. Exceptions are handled by humans, but with full context attached so they take minutes instead of hours.',
        ],
      },
      {
        kicker: 'AI in AP',
        heading: 'Where AI actually helps in AP',
        body: [
          'OCR is no longer enough — modern document AI uses LLMs to extract structured data from any invoice format, even messy ones. ML categorization predicts the right GL coding from history with 95%+ accuracy. Anomaly detection flags suspicious invoices (duplicate, inflated, fraudulent vendor) before payment. Predictive cash management forecasts when each invoice should be paid to optimize working capital. None of these were possible with the AP automation generation that came before.',
        ],
      },
      {
        kicker: 'ROI',
        heading: 'The math on AP automation ROI',
        body: [
          'AP automation typically reduces processing costs from $9-15 per invoice to $2-3 per invoice — a 70-80% reduction. For 10,000 invoices/month, that is $850K-$1.4M in annual savings on processing alone. Add the captured early-pay discounts (typically 1-2% of total spend) and the reduction in late payment penalties, and most customers see total annual savings well above the platform cost. Payback is usually 4-6 months.',
        ],
      },
    ],
    relatedSiblings: ['automated-payment-processing'],
    crossPillarLink: {
      pillarSlug: 'financial-workflow-automation',
      anchor: 'procure-to-pay automation',
    },
    faqs: [
      {
        q: 'What is accounts payable automation?',
        a: 'AP automation is software that handles the full invoice-to-payment workflow automatically: capture, coding, approval routing, payment, and reconciliation. Modern AP automation uses AI to handle invoices in any format and predict the right coding from history.',
      },
      {
        q: 'How accurate is invoice OCR in 2026?',
        a: 'Modern document AI (which goes well beyond OCR) extracts structured data from invoices with 95%+ accuracy across formats — including handwritten line items, scanned PDFs, and non-standard layouts. Edge cases are flagged for human review.',
      },
      {
        q: 'How long does AP automation take to implement?',
        a: 'Most customers go live in 4-8 weeks. The biggest variable is ERP integration complexity — NetSuite, QuickBooks, and Xero are typically faster than SAP or custom systems.',
      },
      {
        q: 'What\'s the ROI of AP automation?',
        a: 'Typical savings are 70-80% on processing cost per invoice (from ~$11 to ~$2), plus captured early-pay discounts and reduced late fees. Payback is usually 4-6 months for companies processing more than 5,000 invoices per month.',
      },
      {
        q: 'Can AP automation prevent invoice fraud?',
        a: 'Yes. ML-based anomaly detection catches duplicate invoices, inflated amounts, vendor impersonation, and BEC attacks before payment. This is a major hidden value of AP automation that often exceeds the labor savings.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P5 — Reporting & Analytics clusters
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'ai-financial-reporting',
    slug: 'automated-financial-reporting',
    primaryKeyword: 'automated financial reporting',
    meta: {
      title: 'Automated Financial Reporting in Real Time | FinMark.ai',
      description:
        'Automate P&L, balance sheet, cash flow, MD&A, and the full board pack. Real-time financial reporting from live data with AI-generated narrative summaries.',
    },
    hero: {
      badge: 'Automated Financial Reporting',
      h1: 'Automated Financial Reporting for Real-Time Finance',
      subhead:
        'P&L, balance sheet, cash flow, MD&A, the board pack — generated automatically from your live financial data. Real-time, audit-ready, and explainable.',
    },
    sections: [
      {
        kicker: 'What it covers',
        heading: 'What automated financial reporting actually covers',
        body: [
          'Automated financial reporting covers the recurring reports that consume the most finance team time: monthly close packages, board decks, management reports, variance analysis, KPI dashboards, and the standard financial statements (P&L, balance sheet, cash flow statement). Each is generated automatically from live data instead of being assembled by hand in a spreadsheet.',
          'The shift from manual to automated reporting is not just speed. It changes the model: instead of monthly batch reports assembled three weeks after period close, reports are continuously updated and always current. The CFO can pull up cash position at any moment and get a real number, not a stale snapshot from last Friday.',
        ],
      },
      {
        kicker: 'The pipeline',
        heading: 'How the reporting pipeline works',
        body: [
          'Reports run on top of the unified data layer that ingests from every source system. Mappings convert source data to your chart of accounts, your entity structure, and your reporting currency. Calculations apply business logic (consolidation, intercompany elimination, accruals). Templates render the data into the right format (PDF, Excel, dashboard, web). Distribution pushes the right view to the right person on the right schedule.',
          'Each step is logged and queryable. Every number in every report traces back to the source transactions, so audit prep is dramatically faster — your auditors can verify any line item by clicking through to the source data.',
        ],
      },
      {
        kicker: 'AI narratives',
        heading: 'AI-generated narratives and commentary',
        body: [
          'The hardest part of monthly reporting is not the numbers — it is the narrative. Writing the management discussion and analysis, the variance commentary, the executive summary. Modern AI handles this automatically: it analyzes the variances, identifies the drivers, and drafts narrative commentary in your house style. The CFO still owns the story and edits the final version, but the first draft takes seconds instead of hours.',
          'This is where generative AI actually delivers in finance. Not as a magic black box, but as a fast first draft on a task that has clear inputs (the financial data) and a clear quality bar (does the human approve it).',
        ],
      },
      {
        kicker: 'Auditability',
        heading: 'Audit-ready by default',
        body: [
          'Automated financial reporting is only useful if it produces reports that can stand up to audit. Every number FinMark.ai produces traces back to source transactions; every AI-generated narrative cites the data behind it; the entire reporting pipeline is logged and reproducible. External auditors regularly use the audit trail to accelerate their fieldwork instead of doing it from scratch.',
        ],
      },
    ],
    relatedSiblings: [],
    crossPillarLink: {
      pillarSlug: 'unified-financial-data-platform',
      anchor: 'unified financial data platform',
    },
    faqs: [
      {
        q: 'What is automated financial reporting?',
        a: 'Automated financial reporting generates standard financial reports — statements, dashboards, board packs, management commentary — automatically from live data, instead of being assembled by hand in spreadsheets each period.',
      },
      {
        q: 'Can AI generate audit-ready reports?',
        a: 'Yes. Every number traces back to source transactions, every AI-generated narrative cites its supporting data, and the full reporting pipeline is logged and reproducible. External auditors use the audit trail to accelerate fieldwork.',
      },
      {
        q: 'How does it integrate with my GL?',
        a: 'Direct integrations with NetSuite, SAP, Oracle, Workday, Microsoft Dynamics, QuickBooks, Xero, and most modern GLs. Reports run on top of your existing GL — no migration required.',
      },
      {
        q: 'What dashboards come out of the box?',
        a: 'CFO dashboard (cash, runway, key KPIs), controller dashboard (close status, reconciliation, journal entries), FP&A dashboard (budget vs actual, forecasts), and operations dashboards (working capital, AR/AP aging). All customizable.',
      },
      {
        q: 'Can it handle multi-entity consolidation?',
        a: 'Yes. Native multi-entity support including intercompany elimination, currency translation, and consolidation rules. Built specifically for the complexity of multi-entity reporting at scale.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P6 — Data Platform clusters
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'unified-financial-data-platform',
    slug: 'financial-data-integration',
    primaryKeyword: 'financial data integration',
    meta: {
      title: 'Financial Data Integration: Unify Every System | FinMark.ai',
      description:
        'Financial data integration that connects ERP, banking, payments, billing, and CRM into one unified data layer. Real-time sync, normalization, and a single source of truth.',
    },
    hero: {
      badge: 'Financial Data Integration',
      h1: 'Financial Data Integration: Unify Every System You Use',
      subhead:
        'Connect your ERP, banking, payments, billing, CRM and 100+ other source systems into one unified data layer. Real-time sync, automatic normalization, and a single source of truth for every downstream application.',
    },
    sections: [
      {
        kicker: 'The problem',
        heading: 'Why financial data integration is hard',
        body: [
          'Modern finance teams use 8-15 different systems on average. The ERP holds the GL. The banking platform holds cash. The payment processor holds transaction details. The billing system holds revenue. The HRIS holds payroll. The CRM holds customer-side metadata. Each system has its own data model, its own update cadence, and its own quirks. Getting a unified view across all of them is one of the hardest, most expensive problems finance teams face.',
          'The traditional solution — write custom ETL scripts for each integration — does not scale. Every new source system means new code. Every schema change means broken pipelines. Every period close means scrambling to reconcile mismatched data. The maintenance cost of a hand-built integration layer compounds over time and eventually consumes the team that built it.',
        ],
      },
      {
        kicker: 'Patterns',
        heading: 'Integration patterns that actually work',
        body: [
          'There are four integration patterns that work in production. API-based integration pulls data via REST or GraphQL APIs — best for systems with good APIs (Stripe, Plaid, modern SaaS). Webhook-based integration receives push events when data changes — lowest latency but requires the source system to support it. Batch ETL loads data on a schedule — works for legacy systems without good APIs but introduces lag. Database replication mirrors source databases directly — fastest sync but requires deep access to source systems.',
          'A good integration layer uses all four patterns depending on the source system. FinMark.ai picks the right pattern for each connector automatically and handles the conversion to a unified schema downstream.',
        ],
      },
      {
        kicker: 'Normalization',
        heading: 'The normalization layer',
        body: [
          'Raw integration is the easy part. Normalization is where most projects die. Different systems use different chart of accounts, different currency conventions, different period boundaries, different vendor identifiers. To make the data usable downstream, all of this has to be reconciled into a single canonical model. That requires master data management, fuzzy matching, currency conversion, period alignment, and dozens of edge case handlers.',
          'FinMark.ai handles normalization automatically using a finance-aware schema and ML-based deduplication. New source systems plug in and start producing usable data within hours, not weeks.',
        ],
      },
      {
        kicker: 'Real-time vs batch',
        heading: 'Real-time vs batch — when each makes sense',
        body: [
          'Real-time integration is essential for fraud detection, cash position monitoring, and live reporting. Batch integration is fine for monthly close, audit prep, and historical analysis. A mature data platform supports both patterns on the same source system — the same connector can stream events in real time and run nightly reconciliation batches to catch anything missed. Most legacy ETL tools force you to choose; modern platforms run both modes in parallel.',
        ],
      },
    ],
    relatedSiblings: [],
    crossPillarLink: {
      pillarSlug: 'ai-financial-reporting',
      anchor: 'automated financial reporting',
    },
    faqs: [
      {
        q: 'What is financial data integration?',
        a: 'Financial data integration is the practice of connecting all the systems that hold your financial data (ERP, banking, payments, billing, CRM) into a single unified data layer that can serve every downstream application — reporting, forecasting, fraud detection, compliance.',
      },
      {
        q: 'What systems does FinMark.ai integrate with?',
        a: 'NetSuite, SAP, Oracle, Workday, Microsoft Dynamics, QuickBooks, Xero, Stripe, Adyen, Plaid, banking APIs, HRIS, CRMs, and 100+ more out of the box. Custom systems can be added via a generic API connector or CSV/SFTP fallback.',
      },
      {
        q: 'How long does integration take?',
        a: 'Most customers connect their first source system within hours and full multi-system integration takes 1-3 weeks depending on system count and complexity. Custom systems may take longer.',
      },
      {
        q: 'Is the data secure?',
        a: 'Yes. SOC 2 Type II, ISO 27001, encrypted at rest (AES-256) and in transit (TLS 1.3), regional data residency options, and full role-based access control.',
      },
      {
        q: 'Do I keep ownership of my data?',
        a: 'Yes. You own all data ingested into FinMark.ai. You can export at any time in standard formats, and we never train models on your data without explicit consent.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P7 — Predictive Forecasting clusters
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'predictive-financial-forecasting',
    slug: 'ai-cash-flow-forecasting',
    primaryKeyword: 'ai cash flow forecasting',
    meta: {
      title: 'AI Cash Flow Forecasting You Can Take to the Board | FinMark.ai',
      description:
        'AI cash flow forecasting refreshed daily from live banking and AR/AP data. Confidence intervals, scenario planning, and forecast accuracy you can defend in board meetings.',
    },
    hero: {
      badge: 'AI Cash Flow Forecasting',
      h1: 'AI Cash Flow Forecasting You Can Take to the Board',
      subhead:
        'Refreshed daily from live banking and AR/AP data, with statistical confidence intervals and scenario modeling. The cash flow forecasts your CFO can actually defend.',
    },
    sections: [
      {
        kicker: 'The problem',
        heading: 'Why most cash flow forecasts are wrong',
        body: [
          'Most cash flow forecasts are spreadsheet models that get updated quarterly and immediately start drifting from reality. The assumptions are stale within weeks. The inputs are entered by hand and full of errors. The methodology is basically "last month + 5%" with some optimistic adjustments. By the time anyone looks at the forecast in detail, it bears little resemblance to actual cash flow.',
          'This matters more than people realize. Cash flow forecast errors directly drive bad decisions: overhiring, under-investing, missed opportunities, unexpected liquidity crunches. CFOs do not avoid forecasting because it is unimportant — they avoid forecasting because the spreadsheet-based version is so unreliable that it is not worth the effort.',
        ],
      },
      {
        kicker: 'How AI helps',
        heading: 'How machine learning changes cash flow forecasting',
        body: [
          'ML cash flow forecasting works fundamentally differently. Instead of hand-coded assumptions, the model learns the actual drivers from your historical cash flow data — seasonality, customer payment patterns, vendor payment cycles, growth trends, one-off events. Instead of point estimates, it produces probabilistic forecasts with confidence intervals. Instead of monthly batch updates, it refreshes continuously as new data arrives.',
          'The result is a forecast that is more accurate, more current, and more honest about uncertainty. CFOs can use it for board presentations, fundraising conversations, hiring decisions, and capital allocation — knowing it is grounded in actual data instead of optimism.',
        ],
      },
      {
        kicker: 'Direct vs indirect',
        heading: 'Direct vs indirect method, automated',
        body: [
          'Direct method cash flow forecasting projects each cash inflow and outflow line by line. Indirect method starts with net income and adjusts for non-cash items. Both have valid use cases, and most finance teams need both. FinMark.ai produces direct method forecasts at the transaction level (best for short-term liquidity management) and indirect method forecasts at the GL level (best for board reporting and strategic planning) — automatically, from the same underlying data.',
        ],
      },
      {
        kicker: 'Confidence intervals',
        heading: 'Why confidence intervals matter for forecasts',
        body: [
          'Spreadsheet forecasts give you point estimates: "we will have $4.2M in cash on April 30." That is misleading because the actual answer has uncertainty. ML forecasts give you a probabilistic range: "we will have between $3.8M and $4.6M with 80% confidence, with upside if these specific receivables collect on time and downside if they slip." That is honest about uncertainty and lets you plan for both tails instead of pretending you know the exact number.',
        ],
      },
    ],
    relatedSiblings: ['financial-planning-and-analysis-software'],
    crossPillarLink: {
      pillarSlug: 'unified-financial-data-platform',
      anchor: 'financial data integration',
    },
    faqs: [
      {
        q: 'What is AI cash flow forecasting?',
        a: 'AI cash flow forecasting uses machine learning models to project future cash inflows and outflows from historical data. Unlike spreadsheet forecasting, ML models learn nonlinear patterns, run scenarios in parallel, and quantify uncertainty as confidence intervals.',
      },
      {
        q: 'How accurate are AI cash flow forecasts?',
        a: 'On benchmark datasets, ML cash flow models cut forecast error (MAPE) by 30-60% compared to spreadsheet forecasting. The bigger gain is consistency — the model does not get optimistic before board meetings.',
      },
      {
        q: 'Can I trust ML forecasts for board reporting?',
        a: 'Yes — when the model is explainable and the CFO owns the assumptions. FinMark.ai forecasts come with full feature attribution and confidence intervals. CFOs typically present both the model output and their own override commentary.',
      },
      {
        q: 'How does it handle one-off events?',
        a: 'You can override or annotate any specific period (e.g., "this quarter has a one-time legal settlement of $X"). The model treats these as known interventions and adjusts the forecast accordingly.',
      },
      {
        q: 'How often does the forecast refresh?',
        a: 'Continuously, as new transaction data arrives. Most customers see a daily refresh cadence in practice — fast enough for cash management decisions without overwhelming the team with constant updates.',
      },
    ],
  },
  {
    pillar: 'predictive-financial-forecasting',
    slug: 'fpa-software',
    primaryKeyword: 'financial planning and analysis software',
    meta: {
      title: 'Financial Planning and Analysis Software for the AI Era | FinMark.ai',
      description:
        'Modern financial planning and analysis software with AI-powered forecasting, scenario planning, and driver-based modeling. Built for finance teams that need to move beyond spreadsheets.',
    },
    hero: {
      badge: 'FP&A Software',
      h1: 'Financial Planning and Analysis Software for the AI Era',
      subhead:
        'Modern FP&A software with AI-powered forecasting, scenario planning, and driver-based modeling. Built for finance teams that need to move beyond spreadsheets without rebuilding from scratch.',
    },
    sections: [
      {
        kicker: 'What it does',
        heading: 'What FP&A software actually does',
        body: [
          'FP&A software covers four functions: planning (the annual budget process), forecasting (rolling projections of how the business will perform), analysis (variance analysis, KPI tracking, profitability deep-dives), and reporting (dashboards, board decks, management commentary). Modern FP&A platforms run all four on the same data layer so the inputs to the budget feed automatically into the forecast and the variances are calculated automatically.',
          'The big shift in FP&A software in the last few years is the addition of AI. Forecasts that used to be hand-modeled in Excel are now generated by ML models that learn from historical data. Variance analysis that used to require an FP&A analyst is now produced automatically by anomaly detection. The role of the human is shifting from data entry and calculation to interpretation and judgment — which is what FP&A teams should have been doing all along.',
        ],
      },
      {
        kicker: 'Beyond spreadsheets',
        heading: 'Why it is time to move past Excel',
        body: [
          'Excel is the most successful piece of finance software ever made. It is also the wrong tool for FP&A at any meaningful scale. Spreadsheets break: links go stale, formulas error out, version control becomes a nightmare, and the model that the CFO built three years ago is now an unmaintainable artifact that no one understands. The companies still running FP&A on Excel are not getting the benefits of structured planning — they are getting the costs.',
          'Modern FP&A platforms are designed to do everything Excel does, but with structured data, version control, audit trails, multi-user collaboration, and AI-powered automation. They are not a replacement for analyst judgment; they are a replacement for the spreadsheet sprawl that consumes analyst time.',
        ],
      },
      {
        kicker: 'Buying criteria',
        heading: 'How to evaluate FP&A software',
        body: [
          'Eight things to look for. Direct integration with your GL and source systems (no manual data uploads). Driver-based modeling (forecast revenue from MAU, hiring from open roles, not just historical extrapolation). Scenario planning that runs in seconds, not days. AI forecasting with explainable outputs. Multi-entity and multi-currency support. Collaborative workflow (multiple users editing the same plan). Built-in reporting and dashboards. A pricing model that does not penalize you for adding users.',
        ],
      },
      {
        kicker: 'Migration',
        heading: 'How to migrate off spreadsheets',
        body: [
          'The biggest barrier to FP&A software adoption is the migration. Years of Excel models, hand-built formulas, and institutional knowledge embedded in cell references — all of it needs to be translated into the new system. The trap is trying to migrate everything at once. The path that works: start with the next budget cycle, not by porting the existing one. Use the new tool for the next plan from scratch and let the old spreadsheets retire naturally.',
        ],
      },
    ],
    relatedSiblings: ['ai-cash-flow-forecasting'],
    crossPillarLink: {
      pillarSlug: 'ai-financial-reporting',
      anchor: 'automated financial reporting',
    },
    faqs: [
      {
        q: 'What is financial planning and analysis software?',
        a: 'FP&A software handles the four functions of financial planning and analysis: budgeting, forecasting, variance analysis, and management reporting. Modern FP&A platforms run all four on a shared data layer with AI-powered forecasting built in.',
      },
      {
        q: 'When should I move from spreadsheets to FP&A software?',
        a: 'If you spend more than 20% of your finance team\'s time on spreadsheet maintenance, version control problems, or manual data entry between systems — it is time. Most companies hit this point between 50-200 employees.',
      },
      {
        q: 'How does AI-powered FP&A actually work?',
        a: 'AI-powered FP&A uses machine learning to forecast revenue, expenses, and KPIs from historical data. It also handles automated variance analysis, anomaly detection, and natural-language commentary generation. The CFO still owns assumptions; AI handles the calculation work.',
      },
      {
        q: 'Can FP&A software handle multi-entity consolidation?',
        a: 'Yes — modern FP&A software handles multi-entity consolidation, intercompany elimination, currency translation, and complex reporting structures natively.',
      },
      {
        q: 'How long does FP&A software take to implement?',
        a: 'Typical implementation is 8-12 weeks for the first plan cycle. The biggest variable is data integration — clean source data accelerates implementation; messy data extends it.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // P8 — Workflow Automation clusters
  // ─────────────────────────────────────────────────────────────────
  {
    pillar: 'financial-workflow-automation',
    slug: 'rpa-in-finance',
    primaryKeyword: 'rpa in finance',
    meta: {
      title: 'RPA in Finance: Where It Wins, Where It Fails | FinMark.ai',
      description:
        'A practical guide to RPA in finance. The high-value use cases, the limitations, and how intelligent process automation goes beyond what RPA alone can do.',
    },
    hero: {
      badge: 'RPA in Finance',
      h1: 'RPA in Finance: Where It Wins, Where It Fails',
      subhead:
        'A practical guide to robotic process automation in finance. The use cases that work, the limitations to watch out for, and how intelligent process automation extends RPA with AI.',
    },
    sections: [
      {
        kicker: 'What it is',
        heading: 'What RPA actually is (and is not)',
        body: [
          'Robotic Process Automation is software that automates structured, repetitive tasks by mimicking the actions a human would take in a user interface — clicking buttons, copying fields between applications, running reports, sending emails. RPA bots run scripts that are essentially recorded macros: do this, then this, then this. They are predictable, fast, and brittle.',
          'RPA is not AI. It does not learn. It does not handle exceptions. It does not understand the data it is moving around. It just executes the same scripted steps over and over. That sounds limiting, and it is — but for the right kinds of tasks, that limitation is actually a feature: predictable scripts are easier to audit and verify than ML models.',
        ],
      },
      {
        kicker: 'Where it wins',
        heading: 'High-value RPA use cases in finance',
        body: [
          'RPA wins on tasks that are high-volume, structured, and stable: copying data between systems that do not have APIs, generating standard reports, running scheduled reconciliations, processing structured invoice formats from a known set of vendors, downloading bank statements and uploading them to the GL, and other "human-in-the-loop" tasks where the loop is mostly mechanical. For these tasks, an RPA bot is faster, cheaper, and more reliable than a human.',
          'A well-deployed RPA program can save hundreds of analyst hours per week on the repetitive tail of finance work. The teams that have done this successfully treat RPA as a tactical tool, not a strategic platform.',
        ],
      },
      {
        kicker: 'Where it fails',
        heading: 'Where RPA breaks down',
        body: [
          'RPA fails the moment something unexpected happens. A new invoice format. A field name change. A pop-up dialog the script did not anticipate. An exception that requires judgment. The bot simply stops, and someone has to figure out what went wrong and fix the script. Companies that built large RPA programs on the promise of "automate everything" usually end up spending more time maintaining the bots than they ever saved by deploying them.',
          'The fundamental limitation is that RPA cannot handle unstructured data or make judgment calls. Anything beyond strict scripts requires AI — which is what intelligent process automation (IPA) adds on top.',
        ],
      },
      {
        kicker: 'RPA + AI',
        heading: 'How RPA evolves into intelligent process automation',
        body: [
          'Intelligent process automation combines RPA with machine learning, NLP, and decision automation. The RPA layer still handles the deterministic steps (open this app, click here, enter this value). The AI layer handles the messy parts (read this unstructured invoice, decide which exception path to take, classify this transaction). Together they handle workflows that pure RPA cannot.',
          'FinMark.ai\'s workflow automation runs as IPA from the start: RPA for stable steps, AI for the parts that require judgment. The result is automation that holds up in production and gets better over time, instead of breaking the moment reality diverges from the script.',
        ],
      },
    ],
    relatedSiblings: [],
    crossPillarLink: {
      pillarSlug: 'ai-financial-automation',
      anchor: 'AI financial automation',
    },
    faqs: [
      {
        q: 'What is RPA in finance?',
        a: 'RPA (Robotic Process Automation) is software that automates structured, repetitive finance tasks by mimicking human actions in user interfaces. It works well for tasks like copying data between systems, running reports, and processing structured invoice formats.',
      },
      {
        q: 'What is the difference between RPA and intelligent process automation?',
        a: 'RPA executes hard-coded scripts and fails on exceptions. Intelligent process automation (IPA) combines RPA with AI — using ML and NLP to handle exceptions, unstructured data, and judgment-based decisions that pure RPA cannot.',
      },
      {
        q: 'Where does RPA fail?',
        a: 'RPA fails when the underlying system changes, when invoice formats vary, when exceptions require judgment, or when data is unstructured. Large RPA programs often spend more on maintenance than they save in labor — which is why most modern automation combines RPA with AI.',
      },
      {
        q: 'Should I still invest in RPA?',
        a: 'Yes — for the right use cases. RPA is the right tool for high-volume, stable, structured tasks. It is the wrong tool for anything requiring judgment or handling unstructured data. Most successful finance automation programs use both RPA and AI together.',
      },
      {
        q: 'How does FinMark.ai approach RPA?',
        a: 'FinMark.ai uses RPA for the deterministic steps in workflows where determinism matters, and AI for the parts that need judgment. The two work together as one intelligent process automation system, not separate tools.',
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
