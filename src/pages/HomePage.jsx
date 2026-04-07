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
        title="FinMark.ai — AI Accounts Payable Automation for African Enterprise"
        description="AI-powered AP automation built for African enterprise. Microsoft Dynamics NAV integration, Nigerian Withholding Tax computation, and Claude-powered invoice extraction at 98% confidence. Live with TGI Group."
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
