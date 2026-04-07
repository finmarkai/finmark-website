import { motion } from 'framer-motion'
import GlowBadge from './ui/GlowBadge'
import ReifyCard from './ui/ReifyCard'
import useIsMobile from '../lib/useIsMobile'

const FOUNDERS = [
  {
    name: 'Arin Soni',
    initials: 'AS',
    role: 'Co-founder & CTO',
    bio: 'Builds the product. Wrote most of the code FinMark.ai runs on, including the AI invoice extraction pipeline, the NAV middleware integration, and the multi-tenant architecture that runs TGI Group\'s subsidiaries on isolated subdomains. Spends his weeks split between Lagos and his laptop.',
  },
  {
    name: 'Aditi Agarwal',
    initials: 'AA',
    role: 'Co-founder',
    bio: 'Runs operations and customer relationships. Identifies the workflows worth automating, designs the engagement structure, and makes sure what gets shipped actually solves the AP team\'s real problem rather than the problem the founders imagined.',
  },
]

export default function About() {
  const isMobile = useIsMobile()

  const Wrapper = isMobile ? 'div' : motion.div
  const sectionMotion = isMobile ? {} : {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }
  const delayMotion = (d) => isMobile ? {} : {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: d },
  }

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-8" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* About Header */}
        <div className="text-center mb-16">
          <Wrapper {...sectionMotion}>
            <GlowBadge>About</GlowBadge>
          </Wrapper>
          <Wrapper {...delayMotion(0.1)}>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Why <span className="gradient-text">FinMark.ai</span> exists
            </h2>
          </Wrapper>
        </div>

        {/* Founder story */}
        <div className="space-y-6 text-gray-400 leading-relaxed text-base sm:text-lg">
          <Wrapper {...delayMotion(0.15)}>
            <p>
              We started building FinMark.ai when TGI Group's CFO told us no AP automation tool on the market handled Nigerian Withholding Tax inside Microsoft Dynamics NAV. The Bill.coms and Tipaltis of the world were built for US sales tax and cloud accounting systems. None of them spoke NAV. None of them computed Nigerian WHT. The Nigerian conglomerates running NAV were stuck either doing AP entirely by hand or bending US-built tools into shapes they were never designed for.
            </p>
          </Wrapper>
          <Wrapper {...delayMotion(0.2)}>
            <p>
              So we built it for them. We spent months in TGI's finance team understanding the actual workflow — how invoices arrive, how PO and GRN matching breaks down for telecom and marketing categories, how WHT certificates get filed, how the AP team actually uses NAV day to day. The result is a platform that now runs across two TGI subsidiaries in production, processing real vendor invoices through a pipeline that knows what Nigerian AP teams actually need.
            </p>
          </Wrapper>
          <Wrapper {...delayMotion(0.25)}>
            <p>
              Today FinMark.ai handles the full invoice-to-NAV workflow: AI captures invoices in any format, PO and GRN matching happens against live data from NAV, sanity checks catch what AI alone would miss, Nigerian WHT is computed automatically per the 2024 regulations, and approved invoices push back into NAV ready to post. What used to take days takes minutes.
            </p>
          </Wrapper>
          <Wrapper {...delayMotion(0.3)}>
            <p>
              FinMark.ai is the start of a broader Financial Automation platform built for African enterprise. AP automation is the first product because AP is where the pain is loudest. More products will follow as the company grows — but only after each one is real, shipping, and proven at a paying customer.
            </p>
          </Wrapper>
          <Wrapper {...delayMotion(0.35)}>
            <p>
              If you run Microsoft Dynamics NAV at a Nigerian or African enterprise and any of the above sounds like your AP team's life, we should talk.
            </p>
          </Wrapper>
        </div>

        {/* Founding Team */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <Wrapper {...delayMotion(0.1)}>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Founding <span className="gradient-text">Team</span>
              </h3>
            </Wrapper>
            <Wrapper {...delayMotion(0.15)}>
              <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                Two founders. One product. One paying customer who runs it in production every day.
              </p>
            </Wrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FOUNDERS.map((founder, i) => (
              <Wrapper key={founder.name} {...delayMotion(0.2 + i * 0.1)}>
                <ReifyCard className="rounded-2xl h-full">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-electric to-purple flex items-center justify-center text-lg font-bold text-white flex-shrink-0">
                        {founder.initials}
                      </div>
                      <div>
                        <h4 className="font-display text-xl font-semibold text-white">
                          {founder.name}
                        </h4>
                        <p className="text-electric-light text-xs uppercase tracking-[0.15em] mt-1">
                          {founder.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      {founder.bio}
                    </p>
                  </div>
                </ReifyCard>
              </Wrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
