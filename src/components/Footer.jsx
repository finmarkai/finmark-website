import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Send } from 'lucide-react'
import { PRODUCTS } from '../lib/constants'

const COMPANY_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
  { label: 'Get a demo', to: '/demo' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-dark-lighter overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-electric/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <motion.div
            className="col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center mb-4">
              <img src="/logo-full.png" alt="FinMark.ai" className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              AI-powered financial and operational automation for modern finance teams.
              Compliance, fraud detection, forecasting, payments, and reporting in one
              unified platform.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Stay updated</p>
              <div className="flex max-w-xs">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 rounded-l-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-electric/50 transition-colors"
                />
                <button className="rounded-r-lg bg-gradient-to-r from-electric to-purple px-4 py-2 text-white hover:opacity-90 transition-all hover:shadow-lg hover:shadow-electric/20 cursor-pointer">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Platform */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              {PRODUCTS.map((product) => (
                <li key={product.to}>
                  <Link
                    to={product.to}
                    className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} FinMark.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
