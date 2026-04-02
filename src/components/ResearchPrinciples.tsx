import { Container } from './Container'
import { FadeIn, FadeInStagger } from './FadeIn'
import { SectionIntro } from './SectionIntro'
import { MicrophoneIcon, MagnifyingGlassIcon, CpuChipIcon, ChartBarIcon, ShieldCheckIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

const researchAreas = [
  {
    title: 'Speech Recognition',
    description: 'Building ASR models for underserved populations — children, accented speakers, clinical settings — where off-the-shelf models fall short.',
    Icon: MicrophoneIcon,
  },
  {
    title: 'Clinical NLP',
    description: 'Extracting structured clinical information from unstructured conversations, enabling ambient documentation and decision support.',
    Icon: MagnifyingGlassIcon,
  },
  {
    title: 'Adaptive Systems',
    description: 'Creating AI that adjusts in real time to user performance, context, and goals — from therapy exercises to clinical workflows.',
    Icon: CpuChipIcon,
  },
  {
    title: 'Evaluation & Scoring',
    description: 'Real-time pronunciation assessment, clinical note quality scoring, and output validation for high-stakes healthcare applications.',
    Icon: ChartBarIcon,
  },
  {
    title: 'Safety & Privacy',
    description: 'Ensuring AI systems for vulnerable populations meet the highest standards of COPPA, HIPAA, and age-appropriate design.',
    Icon: ShieldCheckIcon,
  },
  {
    title: 'Clinical Validation',
    description: 'Partnering with clinicians to validate AI outputs against established practices and measure real-world outcomes.',
    Icon: ClipboardDocumentCheckIcon,
  },
]

const principles = [
  {
    number: '01',
    title: 'Safety First',
    description: 'Every system we build is designed with safety as the top priority — especially when serving children, patients, and other vulnerable populations.',
  },
  {
    number: '02',
    title: 'Evidence-Based',
    description: 'Our products are grounded in peer-reviewed research and validated with practicing clinicians before reaching users.',
  },
  {
    number: '03',
    title: 'Augment, Not Replace',
    description: 'We build AI that makes clinicians and therapists more effective — not tools that try to replace human expertise.',
  },
  {
    number: '04',
    title: 'Inclusive Design',
    description: 'We build for diverse populations, ensuring our systems work across accents, ages, and clinical contexts.',
  },
  {
    number: '05',
    title: 'Privacy by Default',
    description: 'We process data in real time and minimize storage. We collect only what is necessary and discard the rest.',
  },
  {
    number: '06',
    title: 'Rigorous Evaluation',
    description: 'We test against diverse data, measure real-world outcomes, and iterate continuously to improve accuracy and fairness.',
  },
]

export default function ResearchPrinciples() {
  return (
    <section id="research" className="bg-neutral-950 py-24 sm:py-32">
      <Container>
        {/* Research Areas */}
        <SectionIntro
          eyebrow="Our Research"
          title="Advancing AI for healthcare"
          invert
        >
          <p className="text-neutral-300">
            We conduct applied research across speech recognition, clinical NLP, and adaptive systems — 
            focused on the hardest problems in healthcare AI where accuracy and safety are non-negotiable.
          </p>
        </SectionIntro>

        <FadeInStagger className="mt-16" faster>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => (
              <FadeIn key={area.title}>
                <div className="group border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors duration-200">
                  <area.Icon className="w-6 h-6 text-white mb-4" />
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
              Our Principles
            </h2>
            <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
              These principles guide how we build AI — ensuring safety, clinical rigor, 
              and genuine value in everything we ship.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-12" faster>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <FadeIn key={principle.number}>
                <div className="group relative border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 hover:border-white/20 hover:from-white/10 hover:to-white/5 transition-colors duration-200">
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
              Interested in collaborating on healthcare AI research?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white px-8 py-4 text-base font-semibold text-neutral-950 hover:bg-neutral-200 transition-colors duration-200"
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
