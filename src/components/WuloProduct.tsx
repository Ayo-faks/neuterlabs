import { Container } from './Container'
import { FadeIn, FadeInStagger } from './FadeIn'
import Link from 'next/link'
import { MicrophoneIcon, AcademicCapIcon, AdjustmentsHorizontalIcon, SpeakerWaveIcon, DocumentTextIcon, LockClosedIcon } from '@heroicons/react/24/outline'

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
              We turn our research into products that solve real problems in healthcare — 
              shipping AI systems that clinicians and families can rely on.
            </p>
          </div>
        </FadeIn>

        {/* Product 1: WULO */}
        <FadeIn>
          <div className="mt-24 border border-neutral-200 bg-white p-10 sm:p-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
              <div className="lg:max-w-xl">
                <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 mb-6 border border-green-200">
                  <div className="h-2 w-2 bg-green-500 animate-subtle-pulse" />
                  Available Now
                </div>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                  WULO
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
