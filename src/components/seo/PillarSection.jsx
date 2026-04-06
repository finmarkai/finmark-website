import { motion } from 'framer-motion'

/**
 * Generic content section used inside pillar/cluster pages.
 * Heading + optional kicker + body (rendered as paragraphs).
 *
 * `body` can be a string (single paragraph), an array of strings (multiple paragraphs),
 * or React children for full control.
 */
export default function PillarSection({ kicker, heading, body, children, id }) {
  const paragraphs = Array.isArray(body) ? body : body ? [body] : []

  return (
    <section id={id} className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {kicker && (
          <p className="text-xs uppercase tracking-[0.2em] text-electric-light/80 mb-3 font-medium">
            {kicker}
          </p>
        )}
        {heading && (
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            {heading}
          </motion.h2>
        )}
        {paragraphs.length > 0 && (
          <div className="mt-6 space-y-5 text-base sm:text-lg text-gray-400 leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
