import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Check } from 'lucide-react'
import SEO from '../components/seo/SEO'
import Breadcrumb from '../components/seo/Breadcrumb'
import GlowBadge from '../components/ui/GlowBadge'
import GradientButton from '../components/ui/GradientButton'
import ReifyCard from '../components/ui/ReifyCard'
import {
  organizationSchema,
  webPageSchema,
  breadcrumbSchema,
} from '../lib/schema'

const BENEFITS = [
  'Live walkthrough of the platform',
  'Tailored to your tech stack and use cases',
  'Implementation timeline for your scale',
  'No-pressure conversation with a product expert',
]

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    workEmail: '',
    company: '',
    role: '',
    message: '',
  })

  const path = '/demo'
  const items = [
    { name: 'Home', path: '/' },
    { name: 'Get a Demo', path },
  ]

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire to a real backend (Formspree, HubSpot, etc.)
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Get a Demo of FinMark.ai — AI Financial Automation"
        description="See FinMark.ai in action. Book a 30-minute demo with a product expert and we'll walk you through the platform live, tailored to your finance and operations stack."
        path={path}
        schema={[
          organizationSchema(),
          webPageSchema({
            title: 'Get a Demo of FinMark.ai',
            description: 'Book a 30-minute live demo of the FinMark.ai platform.',
            path,
          }),
          breadcrumbSchema(items),
        ]}
      />
      <Breadcrumb items={items} />

      <section className="relative overflow-hidden pt-12 pb-20 sm:pb-28">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="glow-orb w-[700px] h-[700px] bg-electric/8 -top-40 -right-40" />
        <div className="glow-orb w-[500px] h-[500px] bg-purple/8 -bottom-32 -left-32" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Pitch */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex"
              >
                <GlowBadge>
                  <span className="inline-flex items-center gap-2">
                    <Sparkles size={12} />
                    Get a demo
                  </span>
                </GlowBadge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="font-display text-[2.25rem] sm:text-5xl md:text-6xl font-bold text-white tracking-[-0.02em] leading-[1.05]"
              >
                See FinMark.ai <span className="gradient-text">live</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed"
              >
                Book a 30-minute walkthrough with a product expert. We'll show you the
                full platform — tailored to your finance and operations stack — and answer
                every question you have about implementation, pricing, and ROI.
              </motion.p>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-8 space-y-3"
              >
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-300">
                    <Check size={18} className="text-electric-light flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Right: Form */}
            <ReifyCard className="rounded-2xl">
              <div className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-electric to-purple flex items-center justify-center mb-5">
                      <Check size={28} className="text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-white mb-3">
                      We'll be in touch shortly.
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      A FinMark.ai product expert will email you within one business day
                      to schedule your demo.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-gray-600 focus:border-electric/50 focus:bg-white/[0.05] focus:outline-none transition-all"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2">
                        Work email
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        required
                        value={form.workEmail}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-gray-600 focus:border-electric/50 focus:bg-white/[0.05] focus:outline-none transition-all"
                        placeholder="jane@yourcompany.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={form.company}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-gray-600 focus:border-electric/50 focus:bg-white/[0.05] focus:outline-none transition-all"
                          placeholder="Acme Inc."
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-2">
                          Role
                        </label>
                        <input
                          type="text"
                          name="role"
                          value={form.role}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-gray-600 focus:border-electric/50 focus:bg-white/[0.05] focus:outline-none transition-all"
                          placeholder="CFO"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2">
                        Tell us what you'd like to see (optional)
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-gray-600 focus:border-electric/50 focus:bg-white/[0.05] focus:outline-none transition-all resize-none"
                        placeholder="We're evaluating tools for AP automation and KYC..."
                      />
                    </div>
                    <GradientButton type="submit" className="w-full text-sm py-3 mt-2">
                      Request a demo
                    </GradientButton>
                  </form>
                )}
              </div>
            </ReifyCard>
          </div>
        </div>
      </section>
    </>
  )
}
