import SEO from '../components/seo/SEO'
import Hero from '../components/Hero'
import FeatureTicker from '../components/FeatureTicker'
import CTA from '../components/CTA'
import About from '../components/About'
import { organizationSchema, websiteSchema } from '../lib/schema'

// Homepage is intentionally brand-level only.
// The Features / HowItWorks / Services / full AP story all live on the
// /accounts-payable-automation pillar page. The homepage tells the
// FinMark.ai story; the pillar tells the AP product story.
export default function HomePage() {
  return (
    <>
      <SEO
        title="FinMark.ai — AI Financial Automation"
        description="FinMark.ai builds intelligent automation for modern finance teams. Live in production at TGI Group. Explore what we ship today at /accounts-payable-automation."
        path="/"
        schema={[organizationSchema(), websiteSchema()]}
      />
      <Hero />
      <FeatureTicker />
      <About />
      <CTA />
    </>
  )
}
