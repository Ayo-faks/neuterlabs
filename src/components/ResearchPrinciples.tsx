import Link from 'next/link'

import { Container } from './Container'
import { FadeIn, FadeInStagger } from './FadeIn'

const engagements = [
  {
    title: 'AI Opportunity Sprint',
    duration: '2–3 weeks',
    description:
      'A focused diagnostic across your workflows and data. You leave with a ranked opportunity map, a costed architecture, and a build-ready recommendation.',
  },
  {
    title: 'Pilot to Production',
    duration: '6–12 weeks',
    description:
      'We build the first system end to end — model, product surface, evaluation harness, and deployment — and prove it against agreed success criteria.',
  },
  {
    title: 'Embedded AI Team',
    duration: 'Ongoing',
    description:
      'A senior NeuterLabs pod operates inside your organisation, shipping AI capability continuously while upskilling your engineers along the way.',
  },
]

const principles = [
  {
    number: '01',
    title: 'Production or it doesn\u2019t count',
    description:
      'Demos are cheap. We measure our work by what survives real users, real data, and real operational load.',
  },
  {
    number: '02',
    title: 'Evaluation before enthusiasm',
    description:
      'Every system ships with an evaluation harness, so quality is a number you can watch — not a feeling.',
  },
  {
    number: '03',
    title: 'Humans stay in command',
    description:
      'Agents act within explicit boundaries. Sensitive decisions escalate to people, by design and by default.',
  },
  {
    number: '04',
    title: 'Safety is architecture',
    description:
      'Guardrails, privacy, and compliance are engineered into the system\u2019s structure, never patched on after launch.',
  },
  {
    number: '05',
    title: 'Senior hands only',
    description:
      'The people who scope your engagement are the people who build it. No handoffs to a bench.',
  },
  {
    number: '06',
    title: 'Leave teams stronger',
    description:
      'We document, instrument, and transfer knowledge so your organisation owns the system after we step back.',
  },
]

export default function ResearchPrinciples() {
  return (
    <section id="approach" className="bg-gold-50 py-24 text-neutral-950 sm:py-32 lg:py-40">
      <Container>
        <FadeIn className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-gold-700">
            How we engage
          </p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight sm:text-5xl">
            Three ways to work with us.
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Every engagement is scoped around one question: what is the fastest
            responsible path to an AI system that earns its keep?
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16" faster>
          <div className="grid gap-px bg-neutral-950/15 sm:grid-cols-3">
            {engagements.map((engagement) => (
              <FadeIn key={engagement.title} className="bg-gold-50">
                <div className="flex h-full flex-col justify-between gap-10 border-t-2 border-gold-500 bg-neutral-950 p-8 text-gold-50">
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {engagement.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-gold-100/70">
                      {engagement.description}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-gold-300">
                    {engagement.duration}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        <FadeIn>
          <div className="mt-24 max-w-3xl sm:mt-32">
            <p className="text-sm font-semibold uppercase text-gold-700">
              Our principles
            </p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight sm:text-5xl">
              The standards behind every build.
            </h2>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-12" faster>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <FadeIn key={principle.number}>
                <div className="border-t border-neutral-950/20 pt-6">
                  <span className="text-sm font-semibold text-gold-600">
                    {principle.number}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {principle.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        <FadeIn>
          <div className="mt-20 flex flex-wrap items-center gap-6 border-t border-neutral-950/20 pt-10">
            <p className="text-lg text-neutral-600">
              Have a workflow that deserves better than a chatbot?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-neutral-950 px-8 py-4 text-sm font-semibold text-gold-50 transition-colors hover:bg-neutral-800"
            >
              Get in touch
              <span className="ml-2 text-gold-300">→</span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
