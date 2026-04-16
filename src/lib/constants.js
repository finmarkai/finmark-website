import {
  FileSearch,
  Brain,
  CheckSquare,
  Receipt,
  Database,
  FolderTree,
  Building2,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]

// Nested product structure for the navbar "Products" dropdown.
// Today there is one product (Accounts Payable). Each product has
// a set of features that show as sub-items in the dropdown.
// When more products ship, append new entries here and the dropdown
// expands automatically.
export const PRODUCTS = [
  {
    label: 'Accounts Payable',
    slug: 'accounts-payable-automation',
    to: '/accounts-payable-automation',
    description: 'AI-powered AP automation. Live in production.',
    badge: 'Live',
    features: [],
    intro: null, // AP uses the full pillar page, not the simple intro template
  },
  {
    label: 'ERP Audit',
    slug: 'erp-audit',
    to: '/erp-audit',
    description: 'Automated audit and compliance for your ERP.',
    badge: null,
    features: [],
    intro: {
      metaTitle: 'ERP Audit — Automated Compliance Checks | FinMark.ai',
      metaDescription: 'Automated ERP audit that finds anomalies, control gaps, and compliance issues in your financial data before your auditors do.',
      h1: 'ERP Audit',
      body: [
        'Your ERP holds all your financial data. FinMark.ai\'s ERP Audit scans it automatically — looking for anomalies, control gaps, duplicate transactions, unauthorized changes, and compliance issues that manual audits miss or find too late.',
        'Instead of quarterly reviews that surface problems weeks after they happen, ERP Audit runs continuously on your live data. Findings are flagged with full context so your finance team can act immediately — not after the auditor leaves.',
        'Built on the same AI and ERP integration layer that powers our AP automation product. If you run an ERP, this is the audit tool that actually understands your data.',
      ],
    },
  },
  {
    label: 'FP&A',
    slug: 'fpa',
    to: '/fpa',
    description: 'Financial planning, budgeting, and forecasting.',
    badge: null,
    features: [],
    intro: {
      metaTitle: 'FP&A — Financial Planning & Analysis | FinMark.ai',
      metaDescription: 'AI-powered financial planning and analysis. Budgeting, forecasting, variance analysis, and scenario planning — built for finance teams that want to move past spreadsheets.',
      h1: 'FP&A',
      body: [
        'Financial Planning & Analysis still runs on spreadsheets at most companies. FinMark.ai\'s FP&A product replaces the spreadsheet sprawl with a structured system — budgets, forecasts, variance analysis, and scenario planning in one place, connected to your live financial data.',
        'AI handles the parts that need AI — forecasting from historical patterns, flagging unusual variances, generating narrative commentary. Rules and integrations handle the rest. The result is planning you can trust and analysis that happens in hours, not weeks.',
        'Built on the same data layer and ERP integrations that power our AP automation product. Your actuals flow in automatically; your plans stay current without manual data entry.',
      ],
    },
  },
  {
    label: 'Spend Analytics',
    slug: 'spend-analytics',
    to: '/spend-analytics',
    description: 'Spending insights from your invoice data.',
    badge: null,
    features: [],
    intro: {
      metaTitle: 'Spend Analytics — Invoice Intelligence | FinMark.ai',
      metaDescription: 'Turn your invoice data into spending insights. Vendor concentration, category trends, cost anomalies, and savings opportunities — visible automatically.',
      h1: 'Spend Analytics',
      body: [
        'Every invoice your AP team processes is a data point about how your company spends money. FinMark.ai\'s Spend Analytics turns that data into visible, actionable intelligence — vendor concentration risk, category spending trends, cost anomalies, and savings opportunities that nobody was tracking.',
        'No separate data warehouse. No ETL project. The analytics layer sits directly on top of your AP data as it flows through the platform. The insights are there the moment the invoices are processed.',
        'Built as a natural extension of the AP automation product. If you already run FinMark.ai for accounts payable, Spend Analytics is one switch away — your data is already there.',
      ],
    },
  },
]

// Flat list of all feature links — derived from PRODUCTS.
// Kept for backward compat with Footer's Product column.
export const PLATFORM_LINKS = PRODUCTS.flatMap((p) => p.features)

// FEATURES — outcome-focused. AI claims are honest about scope:
// - Extraction is genuinely AI (two-model verification approach).
// - Matching, approval, WHT, ERP integration are deterministic rules + sync.
// We don't claim "AI everywhere" because that would be a lie. We claim AI
// where AI actually delivers and rules-based automation where rules deliver.
export const FEATURES = [
  {
    icon: Brain,
    title: 'AI Invoice Extraction',
    description:
      'Two AI models read every invoice and verify each other\'s extraction before the data flows downstream. High accuracy on any vendor format, no per-vendor templates required.',
  },
  {
    icon: Database,
    title: 'Direct ERP Integration',
    description:
      'Connect via SOAP and REST APIs. POs and goods receipts sync into FinMark.ai; approved invoices push back into your ERP with all the fields populated, ready to post.',
  },
  {
    icon: Receipt,
    title: 'Withholding Tax, Built In',
    description:
      'Withholding Tax computed automatically and pushed back to your ERP alongside the invoice. Currently optimized for the Nigerian 2024 regulations; other regions on the roadmap.',
  },
  {
    icon: CheckSquare,
    title: 'Smart Matching',
    description:
      'Auto-match invoices against POs and goods receipts from your ERP using configurable tolerances. Handles the messy real-world cases — telecom invoices, marketing line items, partial receipts — without manual workarounds.',
  },
  {
    icon: FolderTree,
    title: 'SharePoint as Your Repository',
    description:
      'Pick up new invoices from your SharePoint folders automatically. Portal uploads write back to SharePoint. One source of truth, no migration.',
  },
  {
    icon: Building2,
    title: 'Built for Group Companies',
    description:
      'Run multiple subsidiaries on one platform with full data isolation between them and a cross-company admin view for the parent group. Each subsidiary stays independent.',
  },
]

// HOW_IT_WORKS — brand-level homepage content. Original pre-AP copy.
export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Connect Your Systems',
    description:
      'Integrate your existing tools across finance, operations, marketing, and more. FinMark.ai brings all your data into one unified platform—no silos, no friction.',
  },
  {
    step: '02',
    title: 'Automate Your Workflows',
    description:
      'Design and deploy intelligent workflows tailored to your business. From financial processes to operational tasks and marketing activities, automate everything with precision.',
  },
  {
    step: '03',
    title: 'Gain Insights & Scale',
    description:
      'Unlock real-time insights, monitor performance, and make data-driven decisions. As your business grows, FinMark.ai scales with you—ensuring efficiency at every stage.',
  },
]

// SERVICES — same honest framing as FEATURES.
export const SERVICES = [
  {
    icon: FileSearch,
    title: 'AI Invoice Capture',
    description:
      'Two AI models read each invoice and verify the extraction before it flows downstream. High accuracy on any vendor format with no template setup.',
  },
  {
    icon: CheckSquare,
    title: 'PO & GRN Matching',
    description:
      'Auto-match invoices against purchase orders and goods receipts from your ERP. Configurable tolerances. Handles lump-sum and ratio-based matching for telecom and marketing categories.',
  },
  {
    icon: Receipt,
    title: 'Withholding Tax',
    description:
      'WHT computed automatically and pushed to your ERP alongside the invoice. Currently optimized for the Nigerian 2024 regulations; other regions on the roadmap.',
  },
  {
    icon: Database,
    title: 'ERP Integration',
    description:
      'Direct integration via SOAP and REST APIs. Bidirectional sync of POs, goods receipts, vendor master, and approved invoices. Built for on-premise and cloud ERPs.',
  },
  {
    icon: FolderTree,
    title: 'SharePoint Repository',
    description:
      'Use SharePoint as your AP document repository. We read invoices in and write portal uploads back. Your existing IT governance stays intact.',
  },
  {
    icon: Building2,
    title: 'Multi-Subsidiary Platform',
    description:
      'Run multiple subsidiaries on one platform with full data isolation and a cross-company admin view. Designed for group company structures with multiple legal entities.',
  },
]

export const TRUSTED_LOGOS = []

// TESTIMONIALS — kept for backward compatibility but the Testimonials
// component is no longer rendered on the homepage. Add real customer
// quotes here when you have them; do NOT keep fake quotes.
export const TESTIMONIALS = []

export const FOOTER_LINKS = {
  Product: ['Features', 'How It Works', 'Pricing'],
  Legal: ['Privacy Policy', 'Terms of Service'],
}
