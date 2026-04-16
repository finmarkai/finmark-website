import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Sparkles, Check } from 'lucide-react'
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const path = '/contact'
  const items = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path },
  ]

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact FinMark.ai — Sales, Support, and Partnerships"
        description="Get in touch with FinMark.ai. Contact sales for pricing and demos, support for product help, or partnerships for integrations and reseller opportunities."
        path={path}
        schema={[
          organizationSchema(),
          webPageSchema({
            title: 'Contact FinMark.ai',
            description: 'Contact FinMark.ai for sales, support, or partnerships.',
            path,
          }),
          breadcrumbSchema(items),
        ]}
      />
      <Breadcrumb items={items} />

      <section className="relative overflow-hidden pt-12 pb-20 sm:pb-28">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="glow-orb w-[600px] h-[600px] bg-electric/8 -top-40 -right-40" />
        <div className="glow-orb w-[400px] h-[400px] bg-purple/8 -bottom-32 -left-32" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex"
            >
              <GlowBadge>
                <span className="inline-flex items-center gap-2">
                  <Sparkles size={12} />
                  Contact
                </span>
              </GlowBadge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-[2.25rem] sm:text-5xl md:text-6xl font-bold text-white tracking-[-0.02em] leading-[1.05]"
            >
              Get in <span className="gradient-text">touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              Sales questions, support requests, partnership opportunities — drop us a
              note and the right person on our team will get back to you.
            </motion.p>
          </div>

          <ReifyCard className="rounded-2xl">
            <div className="p-8 sm:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-electric to-purple flex items-center justify-center mb-5">
                    <Check size={28} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-3">
                    Message received.
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    We'll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-gray-600 focus:border-electric/50 focus:bg-white/[0.05] focus:outline-none transition-all"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-gray-600 focus:border-electric/50 focus:bg-white/[0.05] focus:outline-none transition-all"
                      placeholder="Sales question"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-gray-600 focus:border-electric/50 focus:bg-white/[0.05] focus:outline-none transition-all resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <GradientButton type="submit" className="w-full text-sm py-3">
                    Send message
                  </GradientButton>
                </form>
              )}
            </div>
          </ReifyCard>

          <div className="mt-12 text-center text-gray-500 text-sm">
            <Mail size={16} className="inline mr-2 text-electric-light" />
            Or email us directly at{' '}
            <a
              href="mailto:admin@finmark.ai"
              className="text-electric-light hover:text-white transition-colors"
            >
              admin@finmark.ai
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
