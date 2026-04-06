import App from './App'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'
import DemoPage from './pages/DemoPage'
import ContactPage from './pages/ContactPage'
import PillarPage from './pages/PillarPage'
import ClusterPage from './pages/ClusterPage'
import NotFoundPage from './pages/NotFoundPage'
import { PILLARS } from './content/pillars'
import { CLUSTERS } from './content/clusters'

/**
 * Route table consumed by both react-router-dom and vite-react-ssg.
 *
 * Every route is enumerated as a static path so vite-react-ssg pre-renders
 * each one as its own HTML file. PILLARS and CLUSTERS drive the dynamic
 * portions — adding a new pillar or cluster automatically adds a new route.
 */

const pillarRoutes = PILLARS.map((p) => ({
  path: p.slug,
  element: <PillarPage slug={p.slug} />,
}))

const clusterRoutes = CLUSTERS.map((c) => ({
  path: `${c.pillar}/${c.slug}`,
  element: <ClusterPage pillar={c.pillar} cluster={c.slug} />,
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
      ...clusterRoutes,
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
  ...CLUSTERS.map((c) => `/${c.pillar}/${c.slug}`),
]
