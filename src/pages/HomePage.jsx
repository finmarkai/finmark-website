import SEO from '../components/seo/SEO'
import Hero from '../components/Hero'
import FeatureTicker from '../components/FeatureTicker'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'
import CTA from '../components/CTA'
import About from '../components/About'
import { organizationSchema, websiteSchema } from '../lib/schema'

export default function HomePage() {
  return (
    <>
      <SEO
        title="FinMark.ai — AP Automation for Microsoft Dynamics NAV"
        description="AI-powered accounts payable automation for Nigerian enterprise running Microsoft Dynamics NAV. Live in production at TGI Group. Nigerian Withholding Tax computed automatically."
        path="/"
        schema={[organizationSchema(), websiteSchema()]}
      />
      <Hero />
      <FeatureTicker />
      <Features />
      <HowItWorks />
      <Services />
      <CTA />
      <About />
    </>
  )
}
