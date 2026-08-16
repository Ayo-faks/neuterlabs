import { Container } from './Container'
import { FadeIn, FadeInStagger } from './FadeIn'

type FaqItem = {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'What does an end-to-end AI engagement with NeuterLabs include?',
    answer:
      'A full engagement runs from strategy through operation: we define your AI roadmap and priority use cases, assess data readiness, engineer the pipelines and models, integrate with your core systems, deploy into production, and keep performance, cost, and accuracy at peak with ongoing evaluation and monitoring. You can enter at any stage — many clients start with a workshop or a readiness assessment.',
  },
  {
    question: 'How do you identify high-ROI AI use cases?',
    answer:
      'We audit your workflows, data estate, and operational bottlenecks, then score candidate use cases against value, technical feasibility, data availability, and risk. The output is a ranked roadmap — not a list of ideas — so investment goes to the use cases with the clearest path to measurable impact, and experiments that would stall in production are filtered out early.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'A strategy workshop produces a validated roadmap in one to three days. A scoped pilot typically ships in four to eight weeks, and hardening a pilot into production usually lands within a quarter. We define success metrics before we build, so you can track value from the first sprint rather than waiting for a big-bang launch.',
  },
  {
    question: 'What is the difference between traditional automation (RPA) and reasoning AI agents?',
    answer:
      'RPA follows fixed scripts — it breaks the moment an input, format, or screen changes. Reasoning agents plan and adapt: they interpret context, decompose multi-step objectives, call the right tools and systems, handle variation in real data, and escalate to a person when confidence drops. That makes them suited to end-to-end processes rather than isolated keystroke-level tasks.',
  },
  {
    question: 'Can you integrate AI with our existing or legacy systems?',
    answer:
      'Yes — integration is where most of our engineering effort goes. We connect agents and models to your ERP, CRM, and line-of-business systems through APIs and event layers, without a rip-and-replace. Where legacy systems lack modern interfaces, we build the connective tissue so AI works with the stack you already run.',
  },
  {
    question: 'How do you measure the ROI of AI automation?',
    answer:
      'We baseline the process before we automate it, then track the deltas: hours reclaimed, process latency, error and rework rates, cost per outcome, and adoption. Reporting is shared openly during the engagement, so ROI is a number you can defend to your board — not a vendor claim.',
  },
  {
    question: 'How do you handle data privacy, security, and GDPR compliance?',
    answer:
      'Privacy is engineered in from day one. We practise data minimisation, process personal data under UK and EU GDPR with appropriate agreements in place, keep your data inside your security boundary wherever possible, and never use your data to train third-party models without explicit consent. Guardrails, access controls, and audit trails are part of the system architecture — not an afterthought.',
  },
  {
    question: 'What is the difference between business intelligence and data analytics?',
    answer:
      'Business intelligence tells you what happened and what is happening — trusted metrics, reporting, and dashboards. Data analytics goes further into why it happened and what happens next, using statistical and predictive modelling. We build both on one governed data foundation, so your BI and your predictions never disagree with each other.',
  },
  {
    question: 'Does our data need to be AI-ready before we start?',
    answer:
      'No. Most organisations we work with start with fragmented or messy data — that is normal. A data readiness assessment is part of the engagement: we identify gaps, stabilise the foundation, and sequence the roadmap so data work and AI delivery progress together instead of blocking each other.',
  },
  {
    question: 'What happens after deployment?',
    answer:
      'Production is the start, not the finish. We monitor accuracy, drift, latency, and cost; retrain and tune models as real-world conditions evolve; and keep guardrails current as usage grows. You choose the model: an embedded NeuterLabs team, a managed arrangement, or a structured handover to your own engineers.',
  },
]

function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export default function Faq() {
  return (
    <section id="faq" className="bg-black py-24 text-gold-50 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
      <Container>
        <FadeIn className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase text-gold-300">FAQ</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight sm:text-5xl">
              Questions we hear before every engagement.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-gold-100/70 lg:col-span-5 lg:justify-self-end">
            Straight answers on scope, timelines, integration, ROI, and how we
            keep your data safe.
          </p>
        </FadeIn>

        <FadeInStagger className="mx-auto mt-16 max-w-4xl" faster>
          {faqs.map((faq) => (
            <FadeIn key={faq.question}>
              <details className="group border-t border-gold-400/20 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-display text-lg font-semibold text-gold-50 transition-colors hover:text-gold-200 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 flex-none items-center justify-center border border-gold-400/40 text-gold-300 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-8 text-base leading-7 text-gold-100/70">
                  {faq.answer}
                </p>
              </details>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}
