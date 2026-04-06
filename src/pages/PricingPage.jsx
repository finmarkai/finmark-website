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

const PLANS = [
  {
    name: 'Starter',
    tag: 'For early teams',
    price: 'Custom',
    description:
      'For startups and small finance teams getting their first AI capabilities live.',
    features: [
      'Up to 3 platform modules',
      'Up to 10,000 monthly transactions',
      'Standard integrations (NetSuite, QuickBooks, Xero, Stripe)',
      'Email support',
      'SOC 2 Type II',
    ],
    cta: { label: 'Talk to sales', href: '/contact' },
  },
  {
    name: 'Growth',
    tag: 'Most popular',
    price: 'Custom',
    highlight: true,
    description:
      'For growing finance teams that need the full platform, with priority support and advanced models.',
    features: [
      'All 8 platform modules',
      'Up to 1M monthly transactions',
      'All integrations + custom API connectors',
      'Custom ML model tuning',
      'Priority support + dedicated CSM',
      'SOC 2 Type II + ISO 27001',
    ],
    cta: { label: 'Talk to sales', href: '/contact' },
  },
  {
    name: 'Enterprise',
    tag: 'For large orgs',
    price: 'Custom',
    description:
      'For multi-entity enterprises with complex compliance, multi-currency, and audit requirements.',
    features: [
      'Everything in Growth',
      'Unlimited transactions',
      'Multi-entity consolidation',
      'Single tenant deployment option',
      'Dedicated infrastructure',
      'White-glove onboarding',
      '24/7 support + named TAM',
    ],
    cta: { label: 'Contact sales', href: '/contact' },
  },
]

const FAQS = [
  {
    q: 'How is FinMark.ai priced?',
    a: 'Pricing is based on the platform modules you enable and your monthly transaction volume. There\'s no per-user fee, so the whole finance team can access the platform without worrying about seat limits. Contact sales for a custom quote tailored to your usage.',
  },
  {
    q: 'Is there a free trial?',
    a: 'We don\'t offer self-serve free trials, but every customer gets a structured 30-day pilot with a dedicated implementation engineer. The pilot lets you validate the platform on your real data before committing.',
  },
  {
    q: 'What\'s included in implementation?',
    a: 'Every plan includes data integration, model tuning, and onboarding workshops. Growth and Enterprise plans add a dedicated implementation engineer who helps you get to production within 30 days.',
  },
  {
    q: 'Can I start with just one module?',
    a: 'Yes. Starter plans typically begin with 1-3 modules (most often AP automation, financial reporting, or KYC) and expand as you see the value. You can add modules at any time.',
  },
  {
    q: 'What does "custom pricing" actually mean?',
    a: 'It means we tailor the price to your transaction volume, module selection, and contract length. There\'s no public price card because the variables matter — a 50-person fintech and a 5,000-person bank have very different needs. A 30-minute sales call gives you a real number.',
  },
  {
    q: 'Do you offer non-profit or startup discounts?',
    a: 'Yes. Startups under $5M ARR and registered non-profits qualify for our discount program. Mention it when you contact sales.',
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
        title="FinMark.ai Pricing — AI Financial Automation Plans"
        description="FinMark.ai pricing plans for finance teams of every size. Custom pricing based on platform modules and transaction volume. Free pilot available."
        path={path}
        schema={[
          organizationSchema(),
          webPageSchema({
            title: 'FinMark.ai Pricing',
            description: 'Pricing plans for the FinMark.ai AI financial automation platform.',
            path,
          }),
          breadcrumbSchema(items),
          faqSchema(FAQS),
        ]}
      />
      <Breadcrumb items={items} />

      <section className="relative overflow-hidden pt-12 pb-20">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="glow-orb w-[600px] h-[600px] bg-electric/8 -top-40 -right-40" />
        <div className="glow-orb w-[400px] h-[400px] bg-purple/8 -bottom-32 -left-32" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
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
            Pricing built around <span className="gradient-text">your usage</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed"
          >
            No per-user fees. No surprise overages. Pricing scales with the modules you enable
            and the transactions you actually run through the platform.
          </motion.p>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={plan.highlight ? 'md:-mt-4' : ''}
              >
                <ReifyCard className="rounded-2xl h-full">
                  <div className="p-8 h-full flex flex-col">
                    <p className="text-xs uppercase tracking-[0.2em] text-electric-light/80 mb-2 font-medium">
                      {plan.tag}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {plan.description}
                    </p>
                    <p className="font-display text-4xl font-bold text-white mb-8">
                      {plan.price}
                    </p>
                    <ul className="space-y-3 flex-1 mb-8">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                          <Check size={16} className="text-electric-light flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={plan.cta.href}>
                      <GradientButton className="w-full text-sm py-3 flex items-center justify-center gap-2">
                        {plan.cta.label} <ArrowRight size={14} />
                      </GradientButton>
                    </Link>
                  </div>
                </ReifyCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PillarFAQ faqs={FAQS} heading="Pricing Questions" />
    </>
  )
}
