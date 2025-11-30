import { Container } from './Container'
import { FadeIn, FadeInStagger } from './FadeIn'
import Link from 'next/link'

const features = [
  {
    icon: '🌍',
    title: 'Real-Time Carbon Intelligence',
    description: 'Advanced AI algorithms monitor and analyze carbon emissions across your entire operation in real-time, providing actionable insights for immediate impact.',
  },
  {
    icon: '📊',
    title: 'Predictive Analytics',
    description: 'Machine learning models forecast emission trends and identify optimization opportunities before they become problems, enabling proactive sustainability management.',
  },
  {
    icon: '🔒',
    title: 'Verified & Transparent',
    description: 'Blockchain-backed verification ensures data integrity and transparency, meeting the highest standards for carbon accounting and regulatory compliance.',
  },
  {
    icon: '🎯',
    title: 'Goal-Driven Optimization',
    description: 'Set ambitious decarbonization targets and receive AI-powered recommendations to achieve them efficiently while maintaining operational excellence.',
  },
  {
    icon: '🔄',
    title: 'Supply Chain Integration',
    description: 'End-to-end visibility across your supply chain enables comprehensive Scope 3 emissions tracking and collaborative reduction strategies with partners.',
  },
  {
    icon: '📱',
    title: 'Intuitive Interface',
    description: 'Beautiful, accessible dashboards make complex carbon data understandable for everyone from executives to sustainability teams to frontline staff.',
  },
]

const metrics = [
  { value: '40%', label: 'Average Emissions Reduction' },
  { value: '10M+', label: 'Tonnes CO₂ Tracked' },
  { value: '500+', label: 'Organizations Using WULO' },
  { value: '99.9%', label: 'Data Accuracy' },
]

export default function WuloProduct() {
  return (
    <section id="wulo" className="relative bg-gradient-to-b from-neutral-50/50 to-white py-28 sm:py-36">
      <Container>
        {/* Product Header */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-5 py-2.5 text-sm font-semibold text-green-700 mb-8 ring-1 ring-green-200/50">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-subtle-pulse" />
              Featured Product
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl leading-[1.1]">
              WULO: Carbon Intelligence System
            </h2>
            <p className="mt-8 text-xl text-neutral-600 leading-relaxed">
              The world&apos;s most advanced AI-powered platform for measuring, managing, and reducing carbon emissions. 
              Built with safety and transparency at its core.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wulo.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-8 py-4 text-base font-semibold text-white shadow-premium-lg hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-premium-xl"
              >
                Visit WULO.ai
                <span className="ml-2">↗</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-neutral-200 bg-white px-8 py-4 text-base font-semibold text-neutral-950 hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Metrics Bar */}
        <FadeIn>
          <div className="mt-24 grid grid-cols-2 gap-8 border-y border-neutral-200/80 py-14 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl tracking-tight">
                  {metric.value}
                </div>
                <div className="mt-3 text-sm text-neutral-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Features Grid */}
        <FadeInStagger className="mt-28" faster>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FadeIn key={feature.title}>
                <div className="group relative rounded-3xl border border-neutral-200/80 bg-white p-8 shadow-premium hover:shadow-premium-md transition-all duration-300 hover:border-neutral-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-100 text-2xl mb-5 group-hover:bg-neutral-950 group-hover:scale-105 transition-all duration-300">
                    <span className="group-hover:invert transition-all duration-300">{feature.icon}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-950 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        {/* Safety & Ethics Callout */}
        <FadeIn>
          <div className="mt-28 rounded-4xl bg-gradient-to-br from-neutral-900 to-neutral-950 p-12 sm:p-16 text-center shadow-premium-xl">
            <div className="mx-auto max-w-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-3xl mb-6">
                🛡️
              </div>
              <h3 className="font-display text-3xl font-semibold text-white mb-6 tracking-tight">
                Built on AI Safety Principles
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed">
                WULO embodies our commitment to responsible AI development. Every algorithm is rigorously 
                tested for bias, transparency, and accuracy. Our carbon intelligence system is designed to 
                serve humanity&apos;s climate goals without compromising data privacy or ethical standards.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 justify-center">
                <span className="rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 border border-white/10 backdrop-blur-sm">
                  Privacy-First Architecture
                </span>
                <span className="rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 border border-white/10 backdrop-blur-sm">
                  Auditable AI Models
                </span>
                <span className="rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 border border-white/10 backdrop-blur-sm">
                  ISO 14064 Compliant
                </span>
                <span className="rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 border border-white/10 backdrop-blur-sm">
                  Open Methodology
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
