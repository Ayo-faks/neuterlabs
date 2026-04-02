import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAyoolaFakoya from '@/images/ayoola_fakoya.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our values"
        title="Building AI that earns trust."
        invert
      >
        <p>
          We hold ourselves to a high standard — because the people who use our products depend on it.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Safety First" invert>
            Every decision is evaluated through the lens of patient safety,
            clinical accuracy, and responsible deployment.
          </GridListItem>
          <GridListItem title="Clinical Rigor" invert>
            Our systems are designed with clinicians and
            validated against evidence-based practices.
          </GridListItem>
          <GridListItem title="Radical Transparency" invert>
            We are open about our AI systems&apos; capabilities, limitations,
            and how user data is handled.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Founder',
    people: [
      {
        name: 'Ayoola Fakoya',
        role: 'Founder',
        image: { src: imageAyoolaFakoya },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About | NeuterLabs',
  description:
    'NeuterLabs is an AI research company building intelligent systems for healthcare — from speech therapy to clinical documentation.',
  keywords: [
    'AI research company',
    'healthcare AI',
    'NeuterLabs team',
    'AI safety',
    'clinical AI',
  ],
}

export default async function About() {
  const blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="AI research for healthcare">
        <p>
          We build intelligent systems that solve real problems in healthcare — shipping products that clinicians and families can rely on.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            NeuterLabs was founded to apply AI research to healthcare&apos;s hardest problems. Our first product, WULO, is a real-time speech therapy platform for children. We&apos;re also building a clinical ambient scribe to reduce documentation burden for providers.
          </p>
          <p>
            Our work spans speech recognition, natural language processing, and real-time voice AI — always grounded in clinical evidence and built with safety as the top priority.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="2" label="Products" />
          <StatListItem value="6" label="Research areas" />
          <StatListItem value="2026" label="Founded" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Latest thinking on AI, healthcare, and the systems we're building."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
