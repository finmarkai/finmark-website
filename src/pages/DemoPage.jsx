import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
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

const PRODUCT_OPTIONS = [
  { id: 'ap', label: 'Accounts Payable' },
  { id: 'erp-audit', label: 'ERP Audit' },
  { id: 'fpa', label: 'FP&A' },
  { id: 'spend-analytics', label: 'Spend Analytics' },
  { id: 'custom', label: 'Something else — tell us what you need' },
]

// Map URL ?product= param to checkbox id
const PRODUCT_PARAM_MAP = {
  'accounts-payable-automation': 'ap',
  'accounts-payable': 'ap',
  'ap': 'ap',
  'erp-audit': 'erp-audit',
  'fpa': 'fpa',
  'spend-analytics': 'spend-analytics',
  'custom': 'custom',
}

export default function DemoPage() {
  const [searchParams] = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [selected, setSelected] = useState({})

  // Pre-select product from URL param (e.g., /demo?product=ap)
  useEffect(() => {
    const param = searchParams.get('product')
    if (param && PRODUCT_PARAM_MAP[param]) {
      setSelected((prev) => ({ ...prev, [PRODUCT_PARAM_MAP[param]]: true }))
    }
  }, [searchParams])

  const path = '/demo'
  const items = [
    { name: 'Home', path: '/' },
    { name: 'Book a Call', path },
  ]

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const toggleProduct = (id) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const selectedProducts = PRODUCT_OPTIONS
      .filter((p) => selected[p.id])
      .map((p) => p.label)
      .join(', ')

    const formData = new URLSearchParams({
      'form-name': 'demo',
      name: form.name,
      email: form.email,
      products: selectedProducts || 'None selected',
      message: form.message,
    })
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }

  return (
    <>
      <SEO
        title="Book a Call — FinMark.ai"
        description="Tell us your problem. We'll figure out how to solve it. Book a call with the FinMark.ai team."
        path={path}
        schema={[
          organizationSchema(),
          webPageSchema({
            title: 'Book a Call — FinMark.ai',
            description: 'Tell us your problem. Book a call with the FinMark.ai team.',
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
                  Let's talk
                </span>
              </GlowBadge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-[2.25rem] sm:text-5xl md:text-6xl font-bold text-white tracking-[-0.02em] leading-[1.05]"
            >
              Book a <span className="gradient-text">call</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto"
            >
              Tell us your problem and let's figure out how to solve it.
            </motion.p>
          </div>

          <ReifyCard className="rounded-2xl max-w-lg mx-auto">
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
                    Someone from the FinMark.ai team will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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
                      placeholder="Your name"
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
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Product selection */}
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-3">
                      What are you interested in?
                    </label>
                    <div className="space-y-2">
                      {PRODUCT_OPTIONS.map((product) => (
                        <button
                          key={product.id}
                          type="button"
                          onClick={() => toggleProduct(product.id)}
                          className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                            selected[product.id]
                              ? 'border-electric/50 bg-electric/[0.08] text-white'
                              : 'border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20 hover:bg-white/[0.04]'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center transition-all ${
                              selected[product.id]
                                ? 'border-electric bg-electric'
                                : 'border-white/20'
                            }`}
                          >
                            {selected[product.id] && <Check size={10} className="text-white" />}
                          </div>
                          {product.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">
                      Anything else? (optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-gray-600 focus:border-electric/50 focus:bg-white/[0.05] focus:outline-none transition-all resize-none"
                      placeholder="Tell us more about what you need..."
                    />
                  </div>
                  <GradientButton type="submit" className="w-full text-sm py-3 mt-2">
                    Book a call
                  </GradientButton>
                </form>
              )}
            </div>
          </ReifyCard>
        </div>
      </section>
    </>
  )
}
