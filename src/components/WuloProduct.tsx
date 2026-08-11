import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

import { Container } from './Container'
import { FadeIn, FadeInStagger } from './FadeIn'

type PortfolioAction = {
  label: string
  href: string
  external?: boolean
  primary?: boolean
}

type PortfolioEntry = {
  number: string
  name: string
  sector: string
  status: string
  headline: string
  description: string
  scope: string[]
  actions: PortfolioAction[]
}

const portfolio: PortfolioEntry[] = [
  {
    number: '01',
    name: 'WULO Academy',
    sector: 'Education · Consumer AI',
    status: 'Live product',
    headline: 'An always-available AI tutor and guidance counsellor.',
    description:
      'WULO Academy turns minutes of adaptive multiple-choice diagnostics into a precise picture of what each learner knows, then guides practice for WAEC, NECO and JSSCE and grounds career counselling in real performance data. Designed, engineered, and operated end to end by NeuterLabs.',
    scope: [
      'Product strategy',
      'Adaptive learning engine',
      'Full-stack engineering',
      'Safeguarding & evaluation',
    ],
    actions: [
      {
        label: 'Visit WULO Academy',
        href: 'https://academy.wulo.ai',
        external: true,
        primary: true,
      },
      { label: 'About WULO', href: 'https://wulo.ai', external: true },
    ],
  },
  {
    number: '02',
    name: 'Wulo-X',
    sector: 'Healthcare · Agentic automation',
    status: 'Private deployments',
    headline: 'A safe, AI-native communication OS for healthcare.',
    description:
      'Wulo-X coordinates patient conversations across voice, SMS, WhatsApp, and email — automating appointment logistics and recall while every sensitive moment escalates to staff. It is the blueprint for how we build dependable agents inside regulated workflows.',
    scope: [
      'Voice & chat agents',
      'Workflow orchestration',
      'Multi-channel delivery',
      'Clinical safety controls',
    ],
    actions: [{ label: 'Discuss Wulo-X', href: '/contact', primary: true }],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black py-24 text-gold-50 sm:py-32 lg:py-40">
      <Container>
        <FadeIn className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase text-gold-300">
              Portfolio
            </p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Our proof runs in production.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-gold-100/70 lg:col-span-5 lg:justify-self-end">
            We hold client engagements to the same bar as our own products —
            systems with real users, real stakes, and real uptime.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 lg:mt-20" faster>
          {portfolio.map((entry) => (
            <FadeIn key={entry.name}>
              <article className="grid gap-8 border-t border-gold-400/20 py-12 lg:grid-cols-12 lg:py-16">
                <div className="flex gap-6 lg:col-span-3 lg:flex-col lg:gap-4">
                  <span className="text-sm font-semibold text-gold-400">
                    {entry.number}
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase text-gold-100/60">
                      {entry.sector}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-gold-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-subtle-pulse" />
                      {entry.status}
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="font-display text-3xl font-semibold text-gold-50">
                    {entry.name}
                  </h3>
                  <p className="mt-2 text-lg text-gold-200">{entry.headline}</p>
                  <p className="mt-6 text-base leading-7 text-gold-100/70">
                    {entry.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {entry.actions.map((action) => (
                      <Link
                        key={action.label}
                        href={action.href}
                        {...(action.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className={
                          action.primary
                            ? 'inline-flex items-center gap-2 bg-gold-400 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gold-300'
                            : 'inline-flex items-center gap-2 border border-gold-400/40 px-6 py-3 text-sm font-semibold text-gold-100 transition-colors hover:border-gold-300 hover:bg-gold-400/10'
                        }
                      >
                        {action.label}
                        {action.external && (
                          <ArrowUpRightIcon className="h-4 w-4" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-gold-100/70 lg:col-span-3 lg:justify-self-end">
                  {entry.scope.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-px w-4 bg-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>

        <FadeIn>
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-gold-400/20 pt-10">
            <p className="text-base text-gold-100/70">
              Want the detail — architecture, guardrails, and outcomes?
            </p>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
            >
              Read the case studies
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
