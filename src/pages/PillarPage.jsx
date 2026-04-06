import { useParams } from 'react-router-dom'
import SEO from '../components/seo/SEO'
import Breadcrumb from '../components/seo/Breadcrumb'
import PillarHero from '../components/seo/PillarHero'
import PillarSection from '../components/seo/PillarSection'
import PillarHubList from '../components/seo/PillarHubList'
import SiblingPillarsBar from '../components/seo/SiblingPillarsBar'
import PillarFAQ from '../components/seo/PillarFAQ'
import PillarCTA from '../components/seo/PillarCTA'
import { getPillarBySlug, resolveSiblings } from '../content/pillars'
import {
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
} from '../lib/schema'

/**
 * Generic pillar page renderer.
 *
 * Reads pillar slug from the URL (or accepts an explicit `slug` prop for SSG entry),
 * looks up the content config, and renders the standard pillar layout.
 *
 * One component, 8 routes.
 */
export default function PillarPage({ slug: slugProp }) {
  const params = useParams()
  const slug = slugProp || params.slug
  const pillar = getPillarBySlug(slug)

  if (!pillar) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Pillar not found</h1>
          <p className="text-gray-400">No pillar matches the slug "{slug}".</p>
        </div>
      </div>
    )
  }

  const path = `/${pillar.slug}`
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: pillar.hero.badge || pillar.meta.title, path },
  ]

  const siblings = resolveSiblings(pillar.siblings || [])

  return (
    <>
      <SEO
        title={pillar.meta.title}
        description={pillar.meta.description}
        path={path}
        schema={[
          organizationSchema(),
          webPageSchema({
            title: pillar.meta.title,
            description: pillar.meta.description,
            path,
          }),
          breadcrumbSchema(breadcrumbItems),
          faqSchema(pillar.faqs),
        ]}
      />

      <Breadcrumb items={breadcrumbItems} />

      <PillarHero
        badge={pillar.hero.badge}
        h1={pillar.hero.h1}
        subhead={pillar.hero.subhead}
        primaryCta={pillar.hero.primaryCta}
        secondaryCta={pillar.hero.secondaryCta}
      />

      {pillar.sections.map((section, i) => (
        <PillarSection
          key={i}
          kicker={section.kicker}
          heading={section.heading}
          body={section.body}
        />
      ))}

      {pillar.clusters && pillar.clusters.length > 0 && (
        <PillarHubList
          heading={pillar.clusterHubHeading || `Explore ${pillar.hero.badge}`}
          clusters={pillar.clusters}
          pillarSlug={pillar.slug}
        />
      )}

      <SiblingPillarsBar siblings={siblings} />

      <PillarFAQ faqs={pillar.faqs} />

      <PillarCTA
        heading={`Ready to see ${pillar.hero.badge} in action?`}
        subhead="Get a 30-minute demo and we'll walk you through the platform live, with your data."
        primaryCta={{ label: 'Get a demo', href: '/demo' }}
        secondaryCta={{ label: 'See pricing', href: '/pricing' }}
      />
    </>
  )
}
