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
        title="FinMark.ai — Financial Automation for African Enterprise"
        description="FinMark.ai builds Financial Automation for African enterprise. Today: AI accounts payable for Microsoft Dynamics NAV with Nigerian Withholding Tax built in. Live in production at TGI Group."
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
