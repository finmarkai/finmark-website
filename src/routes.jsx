import App from './App'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'
import DemoPage from './pages/DemoPage'
import ContactPage from './pages/ContactPage'
import PillarPage from './pages/PillarPage'
import ClusterPage from './pages/ClusterPage'
import ProductIntroPage from './pages/ProductIntroPage'
import NotFoundPage from './pages/NotFoundPage'
import { PILLARS } from './content/pillars'
import { CLUSTERS } from './content/clusters'
import { PRODUCTS } from './lib/constants'

/**
 * Route table consumed by both react-router-dom and vite-react-ssg.
 *
 * Every route is enumerated as a static path so vite-react-ssg pre-renders
 * each one as its own HTML file.
 */

const pillarRoutes = PILLARS.map((p) => ({
  path: p.slug,
  element: <PillarPage slug={p.slug} />,
}))

const clusterRoutes = CLUSTERS.map((c) => ({
  path: `${c.pillar}/${c.slug}`,
  element: <ClusterPage pillar={c.pillar} cluster={c.slug} />,
}))

// Product intro pages — for products that have an `intro` field
// (i.e., the ones that don't have a full pillar page yet).
const productIntroRoutes = PRODUCTS
  .filter((p) => p.intro)
  .map((p) => ({
    path: p.slug,
    element: <ProductIntroPage slug={p.slug} />,
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
      ...productIntroRoutes,
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]

/**
 * Flat list of all static URLs in the app.
 */
export const STATIC_PATHS = [
  '/',
  '/about',
  '/pricing',
  '/demo',
  '/contact',
  ...PILLARS.map((p) => `/${p.slug}`),
  ...CLUSTERS.map((c) => `/${c.pillar}/${c.slug}`),
  ...PRODUCTS.filter((p) => p.intro).map((p) => `/${p.slug}`),
]
