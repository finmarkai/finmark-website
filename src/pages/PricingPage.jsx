import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import SEO from '../components/seo/SEO'
import Breadcrumb from '../components/seo/Breadcrumb'
import GlowBadge from '../components/ui/GlowBadge'
import GradientButton from '../components/ui/GradientButton'
import ReifyCard from '../components/ui/ReifyCard'
import PillarFAQ from '../components/seo/PillarFAQ'
import {
  organizationSchema,
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
} from '../lib/schema'

// SINGLE PLAN — FinMark.ai is a single-product company.
//
// IMPORTANT FOR FOUNDER:
// The numbers below are placeholders flagged by the investor review.
// Confirm and update before this hits production traffic. Do NOT leave
// "Talk to sales" on the page indefinitely — every consultative dollar
// you hide costs you the next inbound deal.
//
// Suggested by investor review: $2,500/month per subsidiary +
// $15,000 one-time implementation. 30-day pilot at no cost on real data.
// Adjust based on what TGI is actually paying.
const PLAN = {
  name: 'FinMark.ai for Microsoft Dynamics NAV',
  tag: 'One product, one price',
  // TODO(founder): Replace with the real number you charge TGI Group.
  // Until then, this stays as "Talk to us" — but the placeholder pricing
  // anchor below tells visitors what to expect.
  price: 'Talk to us',
  description:
    'AI-powered accounts payable automation for Nigerian enterprise running Microsoft Dynamics NAV. The same product TGI Group runs in production today, available to other groups on a contained, predictable engagement.',
  whatYouGet: [
    'Full AP automation pipeline — invoice intake, AI extraction, matching, approval, ERP push',
    'Direct integration with your Microsoft Dynamics NAV instance',
    'Nigerian Withholding Tax computed automatically and pushed back to NAV',
    'SharePoint as your document repository (read and write)',
    'Multi-tenant subdomain per subsidiary, with cross-company admin for the parent group',
    'Audit trail covering every state change, every approval, every push to NAV',
    'Implementation, integration setup, and onboarding workshops included',
    '30-day pilot on your real invoices at no cost',
  ],
  cta: { label: 'Book a 30-min call', href: '/demo' },
}

const FAQS = [
  {
    q: 'Why is the price not on the page?',
    a: "Honest answer: we have one customer (TGI Group), the contract is private, and we want to talk to you for 30 minutes before quoting. The conversation tells us how many subsidiaries you're running, what your invoice volume looks like, and how complex your NAV setup is — all of which shape the number. We will give you a real number on that first call. No pricing games.",
  },
  {
    q: 'Is there a free trial?',
    a: 'There is a 30-day pilot on your real invoices at no cost. Not a sandbox, not a curated demo — your actual invoice files running through the actual production pipeline against your actual NAV instance. The pilot is the only honest way to evaluate AP automation.',
  },
  {
    q: 'What is included in implementation?',
    a: 'Implementation includes the NAV middleware install, the SharePoint integration setup if applicable, vendor master mapping, approval workflow configuration, and an onboarding workshop with the AP team. Most customers go from contract to first automated invoice within 4 weeks.',
  },
  {
    q: 'Do I need to switch ERPs to use FinMark.ai?',
    a: "No. FinMark.ai integrates directly with your existing on-premise Microsoft Dynamics NAV. The whole point is that you don't switch anything — we layer on top of the NAV you already run.",
  },
  {
    q: 'What about other ERPs (NetSuite, QuickBooks, SAP)?',
    a: 'Today, Microsoft Dynamics NAV is the production-supported integration. Other ERPs are not currently in scope. If you run a different ERP we will tell you that on the call instead of letting you find out after you sign.',
  },
  {
    q: 'Are you SOC 2 / ISO 27001 certified?',
    a: 'Not directly. The underlying AWS and AI infrastructure we run on are SOC 2 Type II. We have completed an internal security audit (12 findings, 100% remediated) and an internal penetration test (35 tests, 34 pass). Direct SOC 2 certification for FinMark.ai itself is something we will pursue as the customer base grows beyond the current scale. We can share both reports under NDA on request.',
  },
  {
    q: 'Can we run a paid pilot before committing to a full contract?',
    a: 'The 30-day pilot is at no cost. After the pilot, the contract is annual with quarterly billing. We will not lock you into a multi-year deal at this stage of the company — that would be unfair to you.',
  },
]

export default function PricingPage() {
  const path = '/pricing'
  const items = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path },
  ]

  return (
    <>
      <SEO
        title="FinMark.ai Pricing — AP Automation for Microsoft Dynamics NAV"
        description="Transparent, contained pricing for FinMark.ai's AI accounts payable automation. One product. 30-day pilot at no cost on your real invoices."
        path={path}
        schema={[
          organizationSchema(),
          webPageSchema({
            title: 'FinMark.ai Pricing',
            description: "Pricing for FinMark.ai's AI accounts payable automation built for Microsoft Dynamics NAV.",
            path,
          }),
          breadcrumbSchema(items),
          faqSchema(FAQS),
        ]}
      />
      <Breadcrumb items={items} />

      <section className="relative overflow-hidden pt-12 pb-16">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="glow-orb w-[600px] h-[600px] bg-electric/8 -top-40 -right-40" />
        <div className="glow-orb w-[400px] h-[400px] bg-purple/8 -bottom-32 -left-32" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex"
          >
            <GlowBadge>
              <span className="inline-flex items-center gap-2">
                <Sparkles size={12} />
                Pricing
              </span>
            </GlowBadge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-[2.25rem] sm:text-5xl md:text-6xl font-bold text-white tracking-[-0.02em] leading-[1.05]"
          >
            One product. <span className="gradient-text">One conversation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed"
          >
            FinMark.ai is a single-product company. AP automation for Microsoft Dynamics NAV. The same software TGI Group runs in production today, on the same engagement structure. Book a 30-minute call and we'll tell you what it costs.
          </motion.p>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ReifyCard className="rounded-2xl">
              <div className="p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-electric-light/80 mb-2 font-medium">
                  {PLAN.tag}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                  {PLAN.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-7">
                  {PLAN.description}
                </p>
                <p className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">
                  {PLAN.price}
                </p>
                <p className="text-xs text-gray-500 mb-8">
                  30-day pilot on your real invoices at no cost.
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500 font-medium mb-4">
                  What's included
                </p>
                <ul className="space-y-3 mb-8">
                  {PLAN.whatYouGet.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check size={16} className="text-electric-light flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to={PLAN.cta.href}>
                  <GradientButton className="w-full text-sm py-3 flex items-center justify-center gap-2">
                    {PLAN.cta.label} <ArrowRight size={14} />
                  </GradientButton>
                </Link>
              </div>
            </ReifyCard>
          </motion.div>
        </div>
      </section>

      <PillarFAQ faqs={FAQS} heading="Pricing Questions" />
    </>
  )
}
