import { Container } from './Container'
import { FadeIn, FadeInStagger } from './FadeIn'
import Link from 'next/link'
import { MicrophoneIcon, AcademicCapIcon, AdjustmentsHorizontalIcon, SpeakerWaveIcon, DocumentTextIcon, LockClosedIcon, SparklesIcon, ChartBarSquareIcon, MapIcon } from '@heroicons/react/24/outline'

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

const wuloFeatures = [
  {
    icon: MicrophoneIcon,
    title: 'Real-Time Voice Interaction',
    description: 'Children speak directly to the AI agent, which listens and evaluates pronunciation in real time using speech recognition optimized for young voices.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Structured Exercises',
    description: 'Sound isolation, syllable practice, minimal pairs, and listening discrimination — designed by speech-language pathologists.',
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'Adaptive Difficulty',
    description: 'AI adjusts exercise difficulty based on the child\'s performance, ensuring they\'re always challenged at the right level.',
  },
]

const scribeFeatures = [
  {
    icon: SpeakerWaveIcon,
    title: 'Ambient Listening',
    description: 'Passively captures clinician-patient conversations during appointments — no manual input required from the provider.',
  },
  {
    icon: DocumentTextIcon,
    title: 'Structured Note Generation',
    description: 'Automatically generates clinical notes in standard formats (SOAP, HPI, assessment/plan) from the conversation.',
  },
  {
    icon: LockClosedIcon,
    title: 'Privacy & Compliance',
    description: 'Built with HIPAA compliance at its core. Audio is processed in real time and discarded — never stored.',
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

        {/* Product 2: WULO Speech */}
        <FadeIn>
          <div className="mt-10 border border-neutral-200 bg-white p-10 sm:p-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
              <div className="lg:max-w-xl">
                <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 mb-6 border border-green-200">
                  <div className="h-2 w-2 bg-green-500 animate-subtle-pulse" />
                  Available Now
                </div>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                  WULO Speech
                </h3>
                <p className="mt-2 text-lg text-neutral-500 font-medium">AI-Powered Speech Therapy for Children</p>
                <p className="mt-6 text-neutral-600 leading-relaxed text-base">
                  A real-time voice agent that guides children through structured articulation and phonology exercises — 
                  sound isolation, vowel blending, minimal pairs, and listening tasks. Built to supplement therapist sessions 
                  so kids get consistent practice at home with a parent present.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">COPPA Compliant</span>
                  <span className="bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">HIPAA Ready</span>
                  <span className="bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">Ages 3–12</span>
                </div>
                <div className="mt-8">
                  <Link
                    href="https://wulo.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors duration-200"
                  >
                    Try WULO <span className="ml-2">↗</span>
                  </Link>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-1 lg:max-w-sm">
                {wuloFeatures.map((f) => (
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

        {/* Product 2: Clinical Ambient Scribe */}
        <FadeIn>
          <div className="mt-10 border border-neutral-200 bg-white p-10 sm:p-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
              <div className="lg:max-w-xl">
                <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 mb-6 border border-amber-200">
                  <div className="h-2 w-2 bg-amber-500" />
                  In Development
                </div>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                  Clinical Ambient Scribe
                </h3>
                <p className="mt-2 text-lg text-neutral-500 font-medium">AI-Powered Clinical Documentation</p>
                <p className="mt-6 text-neutral-600 leading-relaxed text-base">
                  An ambient AI scribe that listens to clinician-patient conversations and automatically generates 
                  structured clinical notes. Designed to reduce documentation burden so providers can focus on patient care — 
                  not paperwork.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">HIPAA Compliant</span>
                  <span className="bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">EHR Integration</span>
                  <span className="bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">SOAP / HPI / A&P</span>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center border border-neutral-200 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-950 hover:border-neutral-300 hover:bg-neutral-50 transition-colors duration-200"
                  >
                    Join the Waitlist
                  </Link>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-1 lg:max-w-sm">
                {scribeFeatures.map((f) => (
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
