import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './index.css'

/**
 * Entry point used by both `vite dev` (CSR) and `vite-react-ssg build` (SSG).
 *
 * vite-react-ssg pre-renders every route in the `routes` table at build time
 * into static HTML, then hydrates on the client. The result is fully indexable
 * static pages with full React interactivity.
 */
export const createRoot = ViteReactSSG({ routes })
