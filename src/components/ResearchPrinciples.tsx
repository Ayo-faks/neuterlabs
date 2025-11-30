import { Container } from './Container'
import { FadeIn, FadeInStagger } from './FadeIn'
import { SectionIntro } from './SectionIntro'

const researchAreas = [
  {
    title: 'AI Alignment',
    description: 'Developing methods to ensure AI systems pursue goals that are genuinely beneficial to humanity, even as they become more capable.',
    icon: '🎯',
  },
  {
    title: 'Interpretability',
    description: 'Making AI decision-making transparent and understandable, enabling meaningful oversight and accountability.',
    icon: '🔍',
  },
  {
    title: 'Robustness & Safety',
    description: 'Building AI systems that perform reliably across diverse conditions and fail gracefully when encountering edge cases.',
    icon: '🛡️',
  },
  {
    title: 'Bias & Fairness',
    description: 'Identifying and mitigating algorithmic bias to ensure AI systems serve all communities equitably and justly.',
    icon: '⚖️',
  },
  {
    title: 'Privacy Preservation',
    description: 'Pioneering federated learning and differential privacy techniques that enable AI innovation while protecting individual data.',
    icon: '🔒',
  },
  {
    title: 'Climate & Sustainability',
    description: 'Applying AI to address climate challenges while minimizing the environmental footprint of AI systems themselves.',
    icon: '🌱',
  },
]

const principles = [
  {
    number: '01',
    title: 'Safety First',
    description: 'We prioritize safety in every stage of research and development, from initial concept to deployment and beyond.',
  },
  {
    number: '02',
    title: 'Transparent Operations',
    description: 'We publish our research, share our methodologies, and engage openly with the broader AI safety community.',
  },
  {
    number: '03',
    title: 'Human Oversight',
    description: 'AI should augment, not replace, human judgment in critical decisions affecting people\'s lives and wellbeing.',
  },
  {
    number: '04',
    title: 'Long-Term Thinking',
    description: 'We consider the long-term implications of our work, not just immediate benefits or market pressures.',
  },
  {
    number: '05',
    title: 'Inclusive Development',
    description: 'We actively seek diverse perspectives and ensure our AI systems serve all communities equitably.',
  },
  {
    number: '06',
    title: 'Continuous Evaluation',
    description: 'We rigorously test, monitor, and update our systems to maintain safety and effectiveness over time.',
  },
]

export default function ResearchPrinciples() {
  return (
    <section id="research" className="bg-neutral-950 py-24 sm:py-32">
      <Container>
        {/* Research Areas */}
        <SectionIntro
          eyebrow="Our Research"
          title="Advancing the frontier of AI safety"
          invert
        >
          <p className="text-neutral-300">
            We conduct fundamental research to understand and address the core challenges of building 
            safe, beneficial AI systems. Our work spans technical, ethical, and governance dimensions.
          </p>
        </SectionIntro>

        <FadeInStagger className="mt-16" faster>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => (
              <FadeIn key={area.title}>
                <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        {/* Divider */}
        <div className="my-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* AI Safety Principles */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Our AI Safety Principles
            </h2>
            <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
              These principles guide every decision we make, from research priorities to product design. 
              They represent our commitment to responsible AI development.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-12" faster>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <FadeIn key={principle.number}>
                <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 hover:border-white/20 hover:from-white/10 hover:to-white/5 transition-all duration-300">
                  <div className="text-5xl font-display font-bold text-white/10 mb-3">
                    {principle.number}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        {/* Call to Action */}
        <FadeIn>
          <div className="mt-20 text-center">
            <p className="text-neutral-300 text-lg mb-8">
              Interested in collaborating on AI safety research?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-neutral-950 shadow-lg hover:bg-neutral-100 transition-all duration-200 hover:scale-105"
            >
              Get in Touch
              <span className="ml-2">→</span>
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
