import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import SEO from '../components/seo/SEO'
import Breadcrumb from '../components/seo/Breadcrumb'
import GlowBadge from '../components/ui/GlowBadge'
import GradientButton from '../components/ui/GradientButton'
import { PRODUCTS } from '../lib/constants'
import { organizationSchema, webPageSchema, breadcrumbSchema } from '../lib/schema'

/**
 * Simple product intro page — consistent template for products that
 * don't yet have a full pillar page.
 *
 * Layout: badge + H1 + brief intro paragraphs + "Get a Demo" CTA.
 * Same visual pattern for every product.
 *
 * Reads from the PRODUCTS array in constants.js — each product's
 * `intro` field provides the page content.
 */
export default function ProductIntroPage({ slug }) {
  const product = PRODUCTS.find((p) => p.slug === slug)

  if (!product || !product.intro) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <p className="text-gray-400">No product matches "{slug}".</p>
        </div>
      </div>
    )
  }

  const { intro } = product
  const path = product.to
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: product.label, path },
  ]

  return (
    <>
      <SEO
        title={intro.metaTitle}
        description={intro.metaDescription}
        path={path}
        schema={[
          organizationSchema(),
          webPageSchema({
            title: intro.metaTitle,
            description: intro.metaDescription,
            path,
          }),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
        {/* Background ambience */}
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,rgba(0,102,255,0.08)_0%,transparent_70%)]" />
        <div className="glow-orb w-[700px] h-[700px] bg-electric/8 -top-40 -right-40" />
        <div className="glow-orb w-[500px] h-[500px] bg-purple/8 -bottom-32 -left-32" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <GlowBadge>
              <span className="inline-flex items-center gap-2">
                <Sparkles size={12} />
                {product.label}
              </span>
            </GlowBadge>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-center font-display text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.02em] leading-[1.05]"
          >
            {intro.h1}
          </motion.h1>

          {/* Intro paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 space-y-6 text-base sm:text-lg text-gray-400 leading-relaxed"
          >
            {intro.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-12 text-center"
          >
            <Link to={`/demo?product=${product.slug}`}>
              <GradientButton className="text-sm sm:text-base px-9 py-4 flex items-center gap-2 mx-auto">
                Get a demo <ArrowRight size={16} />
              </GradientButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
