import App from './App'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DemoPage from './pages/DemoPage'
import ContactPage from './pages/ContactPage'
import ProductIntroPage from './pages/ProductIntroPage'
import ClusterPage from './pages/ClusterPage'
import NotFoundPage from './pages/NotFoundPage'
import { PRODUCTS } from './lib/constants'
import { CLUSTERS } from './content/clusters'

/**
 * Route table consumed by both react-router-dom and vite-react-ssg.
 *
 * All product pages use the same simple ProductIntroPage template.
 * Adding a new product to the PRODUCTS array in constants.js with an
 * `intro` field auto-creates its route.
 */

const productRoutes = PRODUCTS
  .filter((p) => p.intro)
  .map((p) => ({
    path: p.slug,
    element: <ProductIntroPage slug={p.slug} />,
  }))

/**
 * SEO cluster pages — one per entry in src/content/clusters.js.
 * They live under their parent pillar slug, e.g.
 * /accounts-payable-automation/3-way-matching. The pillar slug is also a
 * product intro page, which acts as the hub linking down to these guides.
 */
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
      { path: 'demo', element: <DemoPage /> },
      { path: 'contact', element: <ContactPage /> },
      ...productRoutes,
      ...clusterRoutes,
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
  '/demo',
  '/contact',
  ...PRODUCTS.filter((p) => p.intro).map((p) => `/${p.slug}`),
  ...CLUSTERS.map((c) => `/${c.pillar}/${c.slug}`),
]
