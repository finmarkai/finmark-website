import App from './App'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'
import DemoPage from './pages/DemoPage'
import ContactPage from './pages/ContactPage'
import PillarPage from './pages/PillarPage'
import NotFoundPage from './pages/NotFoundPage'
import { PILLARS } from './content/pillars'

/**
 * Route table consumed by both react-router-dom and vite-react-ssg.
 *
 * vite-react-ssg uses the `entry()` function on dynamic routes (or static paths
 * via getStaticPaths) to know which URLs to pre-render at build time. We export
 * a static array because every route is enumerable from PILLARS.
 */

const pillarRoutes = PILLARS.map((p) => ({
  path: p.slug,
  element: <PillarPage slug={p.slug} />,
  // Hint for SSG: this route maps to /<slug>
}))

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'demo', element: <DemoPage /> },
      { path: 'contact', element: <ContactPage /> },
      ...pillarRoutes,
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]

/**
 * Flat list of all static URLs in the app. Used by:
 *   - scripts/generate-sitemap.js
 *   - any place that needs to enumerate the full URL inventory
 */
export const STATIC_PATHS = [
  '/',
  '/about',
  '/pricing',
  '/demo',
  '/contact',
  ...PILLARS.map((p) => `/${p.slug}`),
]
