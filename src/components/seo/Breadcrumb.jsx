import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/**
 * Breadcrumb navigation. The last item is rendered as the current page (no link).
 * Pair this with breadcrumbSchema() in your SEO component for the JSON-LD.
 *
 * Example:
 *   <Breadcrumb items={[
 *     { name: 'Home', path: '/' },
 *     { name: 'AI Financial Automation', path: '/ai-financial-automation' },
 *   ]} />
 */
export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
      <ol className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-gray-500">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.path || item.name} className="flex items-center gap-1">
              {isLast ? (
                <span aria-current="page" className="text-gray-300">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-electric-light transition-colors"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && <ChevronRight size={14} className="text-gray-700" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
