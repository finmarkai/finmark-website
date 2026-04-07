import {
  FileSearch,
  Bot,
  CheckSquare,
  Workflow,
  CreditCard,
  ShieldCheck,
  Database,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Product', to: '/accounts-payable-automation' },
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]

// Single-product navbar dropdown — links to AP cluster pages
// (FinMark.ai builds AP automation, period. The dropdown surfaces the
// depth of the AP product, not multiple unrelated products.)
export const PLATFORM_LINKS = [
  {
    label: 'Invoice Processing',
    to: '/accounts-payable-automation/invoice-processing-automation',
    description: 'Capture & extract invoice data with AI.',
  },
  {
    label: 'Invoice OCR',
    to: '/accounts-payable-automation/invoice-ocr-data-extraction',
    description: '95%+ accuracy on real-world invoices.',
  },
  {
    label: '3-Way Matching',
    to: '/accounts-payable-automation/3-way-matching',
    description: 'Auto-match invoices to POs and receipts.',
  },
  {
    label: 'Approval Workflows',
    to: '/accounts-payable-automation/ap-approval-workflows',
    description: 'Configurable routing and one-click approval.',
  },
  {
    label: 'Vendor Payments',
    to: '/accounts-payable-automation/vendor-payment-automation',
    description: 'Pay on the right rail automatically.',
  },
  {
    label: 'Invoice Fraud Detection',
    to: '/accounts-payable-automation/invoice-fraud-detection',
    description: 'Stop duplicates and BEC before payment.',
  },
  {
    label: 'ERP Integration',
    to: '/accounts-payable-automation/ap-erp-integration',
    description: 'NetSuite, QuickBooks, Xero, SAP, more.',
  },
  {
    label: 'Bill Pay Automation',
    to: '/accounts-payable-automation/bill-pay-automation',
    description: 'End-to-end bill pay across every rail.',
  },
]

export const FEATURES = [
  {
    icon: FileSearch,
    title: 'AI Invoice Capture',
    description:
      'Read invoices in any format — PDF, image, email, EDI — with document AI that achieves 95%+ accuracy on real-world invoices, no per-vendor templates required.',
  },
  {
    icon: Bot,
    title: 'Smart GL Coding',
    description:
      'Machine learning predicts the right GL account, cost center, project, and tax codes from your historical patterns. New vendors learn fast.',
  },
  {
    icon: CheckSquare,
    title: 'Automated 3-Way Matching',
    description:
      'Match invoices to POs and goods receipts automatically. Auto-approve clean matches; route real exceptions to a human with full context.',
  },
  {
    icon: Workflow,
    title: 'Configurable Approval Workflows',
    description:
      'Routing that auto-approves under threshold, escalates by amount and category, and handles delegation. One-click approval from email or Slack.',
  },
  {
    icon: CreditCard,
    title: 'Multi-Rail Vendor Payments',
    description:
      'Pay vendors on the right rail automatically — ACH, wire, card, RTP, check, or international. Multi-currency support included.',
  },
  {
    icon: ShieldCheck,
    title: 'Built-In Fraud Detection',
    description:
      'AI screens every invoice for duplicates, vendor impersonation, BEC patterns, and inflated amounts — before payment runs.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Capture Invoices Automatically',
    description:
      'Vendors send invoices to your dedicated FinMark.ai address (or upload via portal, EDI, or API). Document AI extracts the structured data automatically — no per-vendor templates required.',
  },
  {
    step: '02',
    title: 'Code, Match, and Approve',
    description:
      'Machine learning predicts the right GL coding from your history. 3-way matching against POs runs automatically. Configurable approval workflows route the rest with one-click approve from email or Slack.',
  },
  {
    step: '03',
    title: 'Pay and Reconcile',
    description:
      'Approved invoices pay on the right rail (ACH, wire, card, RTP, or check). Payments post to your GL automatically. Bank statements reconcile in real time. Your books stay clean.',
  },
]

export const SERVICES = [
  {
    icon: FileSearch,
    title: 'Invoice Processing',
    description:
      'AI captures, codes, and routes invoices in any format — PDF, scan, email, EDI. The extraction layer learns from your specific vendor patterns over time.',
  },
  {
    icon: CheckSquare,
    title: '3-Way Matching',
    description:
      'Automatic matching against POs and goods receipts. Auto-approve clean matches within tolerance; route exceptions to humans with full context attached.',
  },
  {
    icon: Workflow,
    title: 'Approval Workflows',
    description:
      'Configurable routing that matches your real policy — by amount, category, vendor, or project. One-click approval from email, Slack, or mobile.',
  },
  {
    icon: CreditCard,
    title: 'Vendor Payments',
    description:
      'Multi-rail payment execution across ACH, wire, card, RTP, check, and international. Multi-currency support and automatic GL posting.',
  },
  {
    icon: ShieldCheck,
    title: 'Fraud & Duplicate Detection',
    description:
      'AI catches duplicate invoices, vendor impersonation, BEC attacks, and inflated amounts before payment runs. Saves more than processing labor in many cases.',
  },
  {
    icon: Database,
    title: 'ERP Integration',
    description:
      'Direct integrations with NetSuite, QuickBooks, Xero, and more. Vendor master sync, GL posting, and bank reconciliation handled end-to-end.',
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
