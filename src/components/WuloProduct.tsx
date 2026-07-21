import { Container } from './Container'
import { FadeIn, FadeInStagger } from './FadeIn'
import Link from 'next/link'
import { ArrowPathIcon, CalendarDaysIcon, ChartBarSquareIcon, ChatBubbleLeftRightIcon, MapIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline'

const academyFeatures = [
  {
    icon: ChartBarSquareIcon,
    title: 'Adaptive Diagnostics',
    description: 'A short, adaptive set of multiple-choice questions pinpoints exactly what each learner understands — mapped to the WAEC, NECO and JSSCE syllabus.',
  },
  {
    icon: SparklesIcon,
    title: 'Socratic Tutoring',
    description: 'Like a great tutor, WULO guides learners to the answer with step-by-step hints and worked reasoning — it never just hands over the solution.',
  },
  {
    icon: MapIcon,
    title: 'Career Counselling',
    description: 'Grounded in real performance data, WULO suggests subject combinations and career pathways that fit each learner\'s strengths and interests.',
  },
]

const wuloXFeatures = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Multi-Channel Agents',
    description: 'Coordinate patient conversations across voice, SMS, WhatsApp, and email from one AI-native operating layer.',
  },
  {
    icon: CalendarDaysIcon,
    title: 'Appointment Logistics',
    description: 'Automate confirmations, rescheduling, preparation reminders, and handoffs so teams spend less time chasing admin.',
  },
  {
    icon: ArrowPathIcon,
    title: 'Patient Recall Workflows',
    description: 'Trigger recall journeys for overdue reviews, follow-ups, and preventive care with safe escalation paths for staff.',
  },
]

export default function Products() {
  return (
    <section id="products" className="relative bg-gradient-to-b from-neutral-50/50 to-white py-28 sm:py-36">
      <Container>
        {/* Section Header */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl leading-[1.1]">
              Our Products
            </h2>
            <p className="mt-8 text-xl text-neutral-600 leading-relaxed">
              We turn our research into products that expand human potential — 
              shipping AI systems that learners, families, and clinicians can rely on.
            </p>
          </div>
        </FadeIn>

        {/* Flagship Product: WULO Academy */}
        <FadeIn>
          <div className="mt-24 border-2 border-neutral-950 bg-neutral-950 p-10 sm:p-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
              <div className="lg:max-w-xl">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 text-sm font-semibold text-white mb-6 border border-white/20">
                  <div className="h-2 w-2 bg-green-400 animate-subtle-pulse" />
                  Flagship Product — Available Now
                </div>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  WULO Academy
                </h3>
                <p className="mt-2 text-lg text-white/60 font-medium">Your always-available AI tutor &amp; guidance counsellor</p>
                <p className="mt-6 text-white/80 leading-relaxed text-base">
                  WULO Academy turns a few minutes of adaptive multiple-choice answers into an accurate diagnosis, 
                  a guided study path, and grounded counselling on what to do next. Built to help learners think — 
                  not skip thinking — it prepares students for WAEC, NECO and JSSCE while keeping teachers and parents in the loop.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="bg-white/10 px-4 py-2 text-sm font-medium text-white/90">WAEC / NECO / JSSCE</span>
                  <span className="bg-white/10 px-4 py-2 text-sm font-medium text-white/90">For Learners, Teachers &amp; Parents</span>
                  <span className="bg-white/10 px-4 py-2 text-sm font-medium text-white/90">Diagnose · Tutor · Counsel</span>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="https://academy.wulo.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold text-neutral-950 hover:bg-neutral-200 transition-colors duration-200"
                  >
                    Get Started Free <span className="ml-2">↗</span>
                  </Link>
                  <Link
                    href="https://wulo.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-white/20 bg-transparent px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-1 lg:max-w-sm">
                {academyFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <f.icon className="w-5 h-5 flex-none text-white mt-0.5" />
                    <div>
                      <h4 className="font-display text-sm font-semibold text-white">{f.title}</h4>
                      <p className="mt-1 text-sm text-white/70 leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Product 2: Wulo-X */}
        <FadeIn>
          <div className="mt-10 border border-neutral-200 bg-white p-10 sm:p-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
              <div className="lg:max-w-xl">
                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 mb-6 border border-blue-200">
                  <ShieldCheckIcon className="h-4 w-4" />
                  Safe Healthcare Communication
                </div>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                  Wulo-X
                </h3>
                <p className="mt-2 text-lg text-neutral-500 font-medium">AI-native communication operating system for healthcare</p>
                <p className="mt-6 text-neutral-600 leading-relaxed text-base">
                  Wulo-X is a safe, AI-native communication operating system for healthcare, powered by workflow automation 
                  and multi-channel agents across voice, SMS, WhatsApp, and email to streamline appointment logistics and 
                  patient recall.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">Voice / SMS / WhatsApp / Email</span>
                  <span className="bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">Workflow Automation</span>
                  <span className="bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">Appointment Recall</span>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors duration-200"
                  >
                    Talk to us about Wulo-X
                  </Link>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-1 lg:max-w-sm">
                {wuloXFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <f.icon className="w-5 h-5 flex-none text-neutral-950 mt-0.5" />
                    <div>
                      <h4 className="font-display text-sm font-semibold text-neutral-950">{f.title}</h4>
                      <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
