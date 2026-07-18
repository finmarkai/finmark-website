import SEO from '../components/seo/SEO'
import Breadcrumb from '../components/seo/Breadcrumb'
import About from '../components/About'
import {
  organizationSchema,
  webPageSchema,
  breadcrumbSchema,
} from '../lib/schema'

export default function AboutPage() {
  const path = '/about'
  const items = [
    { name: 'Home', path: '/' },
    { name: 'About', path },
  ]

  return (
    <>
      <SEO
        title="About FinMark.ai — Our Mission"
        description="FinMark.ai builds AI-powered tools that simplify and optimize financial and operational workflows for modern businesses."
        path={path}
        schema={[
          organizationSchema(),
          webPageSchema({
            title: 'About FinMark.ai',
            description:
              'FinMark.ai builds AI-powered tools that simplify and optimize financial and operational workflows.',
            path,
          }),
          breadcrumbSchema(items),
        ]}
      />
      <Breadcrumb items={items} />
      <About headingTag="h1" />
    </>
  )
}
