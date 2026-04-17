import App from './App'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DemoPage from './pages/DemoPage'
import ContactPage from './pages/ContactPage'
import ProductIntroPage from './pages/ProductIntroPage'
import RequestPage from './pages/RequestPage'
import NotFoundPage from './pages/NotFoundPage'
import { PRODUCTS } from './lib/constants'

/**
 * Route table consumed by both react-router-dom and vite-react-ssg.
 *
 * All product pages now use the same simple ProductIntroPage template.
 * Adding a new product to the PRODUCTS array in constants.js with an
 * `intro` field auto-creates its route.
 */

const productRoutes = PRODUCTS
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
      { path: 'demo', element: <DemoPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'request', element: <RequestPage /> },
      ...productRoutes,
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
  '/request',
  ...PRODUCTS.filter((p) => p.intro).map((p) => `/${p.slug}`),
]
