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
  { label: 'Product', to: '/accounts-payable-automation' },
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]

// Single-product navbar dropdown — links to AP cluster pages.
// FinMark.ai builds AP automation specifically for Nigerian enterprise running
// Microsoft Dynamics NAV. Descriptions are outcome-focused, not implementation
// details. The buyer cares what they get, not how it's built internally.
export const PLATFORM_LINKS = [
  {
    label: 'Invoice Processing',
    to: '/accounts-payable-automation/invoice-processing-automation',
    description: 'From PDF to NAV, hands-free.',
  },
  {
    label: 'AI Invoice Extraction',
    to: '/accounts-payable-automation/ai-invoice-extraction',
    description: 'Read any invoice format, no templates.',
  },
  {
    label: '3-Way Matching',
    to: '/accounts-payable-automation/3-way-matching',
    description: 'Match invoices to POs and GRNs from NAV.',
  },
  {
    label: 'Nigerian WHT Automation',
    to: '/accounts-payable-automation/nigerian-withholding-tax-automation',
    description: 'WHT computed and pushed to NAV automatically.',
  },
  {
    label: 'Microsoft Dynamics NAV',
    to: '/accounts-payable-automation/microsoft-dynamics-nav-integration',
    description: 'Direct integration with on-premise NAV.',
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
]

// FEATURES — outcome-focused, not implementation porn.
// What the buyer gets, not what's under the hood.
export const FEATURES = [
  {
    icon: Brain,
    title: 'AI Invoice Extraction',
    description:
      'Reads any invoice format your vendors send — PDFs, scans, photos, emails. No per-vendor template setup. Sustained high accuracy on real-world invoices in production.',
  },
  {
    icon: Database,
    title: 'Direct NAV Integration',
    description:
      'Approved invoices flow straight into your Microsoft Dynamics NAV instance with all the fields populated. No manual rekeying. No middleware to babysit.',
  },
  {
    icon: Receipt,
    title: 'Nigerian Withholding Tax, Built In',
    description:
      'WHT computed automatically per the latest Nigerian regulations and pushed to NAV alongside the invoice. The killer feature US-built AP tools simply do not have.',
  },
  {
    icon: CheckSquare,
    title: 'Smart Matching',
    description:
      'Auto-match invoices against POs and GRNs from NAV. Handles the messy real-world cases — telecom invoices, marketing line items, partial receipts — without manual workarounds.',
  },
  {
    icon: FolderTree,
    title: 'SharePoint as Your Repository',
    description:
      'If your vendors send to SharePoint, FinMark.ai picks them up automatically. If you upload through the portal, the documents go back to SharePoint. One source of truth, no migration.',
  },
  {
    icon: Building2,
    title: 'Built for Group Companies',
    description:
      'Run multiple subsidiaries on one platform with full data isolation. The parent group sees everything; each subsidiary stays independent. Standard architecture, not an afterthought.',
  },
]

// HOW_IT_WORKS — three steps the buyer cares about, not eight stages of internal pipeline.
export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Invoices Arrive',
    description:
      'Vendors send invoices to your SharePoint folder, or upload through the FinMark.ai portal. Whatever format they use, the platform picks them up automatically and reads them.',
  },
  {
    step: '02',
    title: 'AI Does the Work',
    description:
      'Extraction, GL coding, PO and GRN matching, sanity checks, and Nigerian Withholding Tax computation all happen automatically. Only the genuine exceptions reach a human, and they reach the right human with full context attached.',
  },
  {
    step: '03',
    title: 'Approved, Posted to NAV',
    description:
      'Configurable approval workflows route each invoice to the right approver. Approved invoices push straight into Microsoft Dynamics NAV with every field populated, ready to post. Your AP team stops rekeying and starts reviewing.',
  },
]

// SERVICES — same outcome-focused approach as FEATURES.
export const SERVICES = [
  {
    icon: FileSearch,
    title: 'AI Invoice Capture',
    description:
      'Read invoices in any format your vendors send. No templates, no per-vendor setup, accuracy that holds up on the messy real-world documents.',
  },
  {
    icon: CheckSquare,
    title: 'PO & GRN Matching',
    description:
      'Auto-match invoices against your purchase orders and goods receipts from NAV. Handles lump-sum and ratio-based matching for telecom and marketing categories.',
  },
  {
    icon: Receipt,
    title: 'Nigerian WHT',
    description:
      'Withholding Tax computed automatically per the latest Nigerian regulations. The numbers are right, the certificates are filable, the audit trail is clean.',
  },
  {
    icon: Database,
    title: 'NAV Integration',
    description:
      'Direct integration with your on-premise Microsoft Dynamics NAV. POs, GRNs, vendor master, and approved invoices all flow between FinMark.ai and NAV automatically.',
  },
  {
    icon: FolderTree,
    title: 'SharePoint as Repository',
    description:
      'Use SharePoint as your AP document repository. FinMark.ai reads invoices in and writes portal uploads back. Your existing IT governance stays intact.',
  },
  {
    icon: Building2,
    title: 'Multi-Subsidiary Platform',
    description:
      'Run multiple subsidiaries on one platform with full data isolation and a cross-company admin view for the parent group. Designed for African enterprise group structures.',
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
