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
// FinMark.ai builds AP automation specifically for African enterprise running
// Microsoft Dynamics NAV. The dropdown reflects the real product capabilities
// that ship in production today.
export const PLATFORM_LINKS = [
  {
    label: 'Invoice Processing',
    to: '/accounts-payable-automation/invoice-processing-automation',
    description: 'The full 8-stage AP pipeline.',
  },
  {
    label: 'Claude AI Extraction',
    to: '/accounts-payable-automation/claude-ai-invoice-extraction',
    description: 'Claude Opus 4.6 at 98% confidence.',
  },
  {
    label: '3-Way Matching',
    to: '/accounts-payable-automation/3-way-matching',
    description: 'Match against POs and GRNs from NAV.',
  },
  {
    label: 'Nigerian WHT Automation',
    to: '/accounts-payable-automation/nigerian-withholding-tax-automation',
    description: 'WHT computation per 2024 regulations.',
  },
  {
    label: 'Microsoft Dynamics NAV',
    to: '/accounts-payable-automation/microsoft-dynamics-nav-integration',
    description: 'Direct on-premise NAV integration.',
  },
  {
    label: 'SharePoint Integration',
    to: '/accounts-payable-automation/sharepoint-invoice-integration',
    description: 'Invoices in, portal uploads back.',
  },
  {
    label: 'Approval Workflows',
    to: '/accounts-payable-automation/ap-approval-workflows',
    description: 'Vendor-approver mapping, full audit trail.',
  },
  {
    label: 'Multi-Tenant Platform',
    to: '/accounts-payable-automation/multi-tenant-ap-platform',
    description: 'Multiple subsidiaries, one platform.',
  },
]

export const FEATURES = [
  {
    icon: Brain,
    title: 'Claude AI Extraction',
    description:
      'Anthropic Claude Opus 4.6 with 2-pass extraction reads invoices in any format at 98% confidence — no per-vendor templates, no traditional OCR.',
  },
  {
    icon: CheckSquare,
    title: '3-Way Matching with NAV',
    description:
      'Auto-match invoices against POs and GRNs synced from Microsoft Dynamics NAV every 5 minutes. Lump-sum and ratio-based matching for telecom and marketing invoices.',
  },
  {
    icon: Receipt,
    title: 'Nigerian WHT Automation',
    description:
      'Withholding Tax computed automatically per Nigerian 2024 regulations. 7 WHT fields pushed to NAV with every invoice. The killer feature US AP tools cannot match.',
  },
  {
    icon: Database,
    title: 'Microsoft Dynamics NAV Integration',
    description:
      'Direct on-premise NAV integration via SOAP middleware. Bidirectional sync, ERP push-back with both standard and WHT fields populated. Production-tested.',
  },
  {
    icon: FolderTree,
    title: 'SharePoint Document Repository',
    description:
      'Invoices flow in from SharePoint folders via Microsoft Graph webhooks + delta polling. Portal uploads write back to SharePoint as the single source of truth.',
  },
  {
    icon: Building2,
    title: 'Multi-Tenant Platform',
    description:
      'Run multiple subsidiaries on one platform with full data isolation. Subdomain-based architecture with cross-company admin dashboard for group oversight.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Capture from SharePoint or Portal',
    description:
      'Vendors send invoices to a SharePoint folder or upload via the portal. Claude Opus 4.6 reads each invoice with a 2-pass extraction process that achieves 98% confidence. SHA-256 deduplication catches every duplicate at the door.',
  },
  {
    step: '02',
    title: 'Match, Validate, and Compute Tax',
    description:
      '3-way matching runs against POs and GRNs synced from Microsoft Dynamics NAV. 10 sanity checks catch the errors AI alone would miss. Nigerian Withholding Tax is computed automatically per 2024 regulations with the right rate per vendor type and service category.',
  },
  {
    step: '03',
    title: 'Approve and Push to NAV',
    description:
      'Configurable approval workflows route invoices to the right approver with vendor-approver mapping. Approved invoices push back into Microsoft Dynamics NAV with all 4 standard Finmark fields and 7 WHT fields populated, ready to post.',
  },
]

export const SERVICES = [
  {
    icon: FileSearch,
    title: 'AI Invoice Processing',
    description:
      'Claude Opus 4.6 reads invoices in any format with a 2-pass extraction process that achieves 98% confidence on real production invoices. No templates required.',
  },
  {
    icon: CheckSquare,
    title: '3-Way Matching with NAV',
    description:
      'Auto-match invoices against POs and GRNs synced from Microsoft Dynamics NAV every 5 minutes. Lump-sum support for telecom and marketing invoices.',
  },
  {
    icon: Receipt,
    title: 'Nigerian Withholding Tax',
    description:
      'WHT computed per 2024 regulations with rate variations by vendor type and service category. 7 WHT fields pushed to NAV with every approved invoice.',
  },
  {
    icon: Database,
    title: 'Microsoft Dynamics NAV',
    description:
      'Direct integration with on-premise NAV via SOAP middleware. Bidirectional sync of POs, GRNs, vendor master, and approved invoices.',
  },
  {
    icon: FolderTree,
    title: 'SharePoint Integration',
    description:
      'Invoices flow in from SharePoint folders via Microsoft Graph. Portal uploads write back to SharePoint. Single document repository for the whole AP workflow.',
  },
  {
    icon: Building2,
    title: 'Multi-Tenant for Group Companies',
    description:
      'Run multiple subsidiaries on one platform with subdomain-based isolation, per-tenant NAV integration, and cross-company admin dashboard for group oversight.',
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
