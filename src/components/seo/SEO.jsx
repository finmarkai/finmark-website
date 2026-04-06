import { Head } from 'vite-react-ssg'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../../lib/site'

/**
 * Reusable per-route metadata wrapper.
 *
 * Uses vite-react-ssg's <Head> component (not react-helmet-async). This is
 * the only way to get tags into the pre-rendered HTML — react-helmet-async
 * only mutates the document on the client, which is too late for SEO crawlers.
 *
 * Required: title, description, path
 * Optional:
 *   - image (Open Graph image, defaults to /og/default.png)
 *   - type (Open Graph type, defaults to "website")
 *   - schema (single JSON-LD object OR array of them)
 *   - noindex (boolean, set true for pages we don't want crawled)
 */
export default function SEO({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  schema = null,
  noindex = false,
}) {
  const fullUrl = `${SITE_URL}${path}`
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`
  const schemaArray = schema ? (Array.isArray(schema) ? schema : [schema]) : []

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD */}
      {schemaArray
        .filter(Boolean)
        .map((s, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(s)}
          </script>
        ))}
    </Head>
  )
}
