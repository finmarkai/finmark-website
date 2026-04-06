import SEO from '../components/seo/SEO'
import Hero from '../components/Hero'
import FeatureTicker from '../components/FeatureTicker'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import About from '../components/About'
import { organizationSchema, websiteSchema } from '../lib/schema'

export default function HomePage() {
  return (
    <>
      <SEO
        title="FinMark.ai — AI Financial & Operational Automation Platform"
        description="FinMark.ai is the AI-powered platform that automates financial and operational workflows end-to-end. Compliance, fraud detection, forecasting, reporting, and payments — all in one system."
        path="/"
        schema={[organizationSchema(), websiteSchema()]}
      />
      <Hero />
      <FeatureTicker />
      <Features />
      <HowItWorks />
      <Services />
      <Stats />
      <CTA />
      <About />
    </>
  )
}
