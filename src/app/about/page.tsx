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
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our values"
        title="Building AI with purpose and responsibility."
        invert
      >
        <p>
          We are driven by the belief that AI can accelerate climate action when developed responsibly.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Climate First" invert>
            Every decision we make is evaluated through the lens of
            environmental impact and sustainability outcomes.
          </GridListItem>
          <GridListItem title="Scientific Rigor" invert>
            Our carbon intelligence systems are built on peer-reviewed methodologies and
            validated against international standards.
          </GridListItem>
          <GridListItem title="Radical Transparency" invert>
            We believe in open communication about our AI systems capabilities, limitations,
            and environmental footprint.
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
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
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
  title: 'About | AI Research for Sustainability',
  description:
    'NeuterLabs is an AI research company combining machine learning expertise with climate science to build intelligent systems that accelerate the global transition to sustainable operations and renewable energy.',
  keywords: [
    'AI research company',
    'sustainability AI team',
    'climate tech founders',
    'carbon intelligence experts',
    'responsible AI development',
    'WULO team',
  ],
}

export default async function About() {
  const blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Building AI for a sustainable future">
        <p>
          We believe AI can accelerate the global transition to renewable energy, but only when built with safety, transparency, and environmental responsibility at its core.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            NeuterLabs was founded by researchers and climate tech pioneers who recognized that solving the climate crisis requires intelligent systems that can process vast amounts of data and optimize complex sustainability challenges. We combine cutting-edge AI research with deep domain expertise in renewable energy and carbon management.
          </p>
          <p>
            Our team includes AI safety researchers, climate scientists, energy systems experts, and sustainability engineers who collaborate to build products like WULO—our flagship carbon intelligence platform. We believe that responsible AI development for climate solutions requires rigorous testing, transparent methodologies, and measurable environmental impact.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="10M+" label="Tonnes CO₂ tracked" />
          <StatListItem value="500+" label="Organizations using WULO" />
          <StatListItem value="40%" label="Average emissions reduction" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
