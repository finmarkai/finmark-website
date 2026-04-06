import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { NAV_LINKS, PLATFORM_LINKS } from '../lib/constants'
import GradientButton from './ui/GradientButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [platformOpen, setPlatformOpen] = useState(false)
  const platformRef = useRef(null)
  const closeTimer = useRef(null)
  const { scrollYProgress } = useScroll()
  const navOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close platform dropdown when clicking outside
  useEffect(() => {
    const onClick = (e) => {
      if (platformRef.current && !platformRef.current.contains(e.target)) {
        setPlatformOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const openPlatform = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setPlatformOpen(true)
  }
  const closePlatform = () => {
    closeTimer.current = setTimeout(() => setPlatformOpen(false), 150)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Bottom border that fades in on scroll */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent"
        style={{ opacity: navOpacity }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo-full.png" alt="FinMark.ai" className="h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {/* Platform dropdown */}
            <div
              ref={platformRef}
              className="relative"
              onMouseEnter={openPlatform}
              onMouseLeave={closePlatform}
            >
              <button
                className="flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-white py-1"
                onClick={() => setPlatformOpen(!platformOpen)}
                aria-expanded={platformOpen}
              >
                Platform
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${platformOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {platformOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[640px] glass-strong rounded-2xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-1 p-3">
                      {PLATFORM_LINKS.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setPlatformOpen(false)}
                          className="group flex flex-col gap-1 rounded-xl px-4 py-3 hover:bg-white/[0.04] transition-colors"
                        >
                          <span className="text-sm font-medium text-white group-hover:text-electric-light transition-colors">
                            {link.label}
                          </span>
                          <span className="text-xs text-gray-500 leading-relaxed">
                            {link.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <Link
                  to={link.to}
                  className="relative text-sm text-gray-400 transition-colors hover:text-white py-1"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/demo">
                <GradientButton className="text-sm px-5 py-2">Get a demo</GradientButton>
              </Link>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass-strong border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              <p className="px-3 pt-2 pb-1 text-xs uppercase tracking-[0.18em] text-gray-600">
                Platform
              </p>
              {PLATFORM_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-gray-300 hover:text-white hover:bg-white/[0.04] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/5 my-3" />
              <p className="px-3 pb-1 text-xs uppercase tracking-[0.18em] text-gray-600">Company</p>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-gray-300 hover:text-white hover:bg-white/[0.04] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3">
                <Link to="/demo" onClick={() => setMobileOpen(false)}>
                  <GradientButton className="w-full text-sm">Get a demo</GradientButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
