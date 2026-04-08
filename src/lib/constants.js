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
    to: '/accounts-payable-automation',
    description: 'AI-powered AP automation. Live in production.',
    badge: 'Live',
    features: [
      {
        label: 'Invoice Processing',
        to: '/accounts-payable-automation/invoice-processing-automation',
        description: 'From PDF to ERP, hands-free.',
      },
      {
        label: 'AI Invoice Extraction',
        to: '/accounts-payable-automation/ai-invoice-extraction',
        description: 'Two models read every invoice for accuracy.',
      },
      {
        label: '3-Way Matching',
        to: '/accounts-payable-automation/3-way-matching',
        description: 'Match invoices to POs and goods receipts.',
      },
      {
        label: 'Withholding Tax Automation',
        to: '/accounts-payable-automation/nigerian-withholding-tax-automation',
        description: 'WHT computed and pushed to your ERP.',
      },
      {
        label: 'ERP Integration',
        to: '/accounts-payable-automation/microsoft-dynamics-nav-integration',
        description: 'Direct integration via SOAP and REST APIs.',
      },
      {
        label: 'SharePoint Integration',
        to: '/accounts-payable-automation/sharepoint-invoice-integration',
        description: 'Use SharePoint as your AP repository.',
      },
      {
        label: 'Approval Workflows',
        to: '/accounts-payable-automation/ap-approval-workflows',
        description: 'Vendor-approver mapping, full audit trail.',
      },
      {
        label: 'For Group Companies',
        to: '/accounts-payable-automation/multi-tenant-ap-platform',
        description: 'Multiple subsidiaries on one platform.',
      },
    ],
  },
  // Future products go here
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
