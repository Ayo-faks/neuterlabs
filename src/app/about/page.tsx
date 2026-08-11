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
            Every decision is evaluated through the lens of user safety,
            accuracy, and responsible deployment.
          </GridListItem>
          <GridListItem title="Evidence-Based" invert>
            Our systems are designed with domain experts and
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
    'NeuterLabs is an applied AI studio — an AI service agency for strategy, agents, and product engineering, founded by the team behind WULO Academy and Wulo-X.',
  keywords: [
    'AI agency',
    'applied AI studio',
    'NeuterLabs team',
    'AI consultancy',
    'AI safety',
    'WULO Academy',
  ],
}

export default async function About() {
  const blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="An applied AI studio that ships">
        <p>
          We help ambitious teams turn AI from a slide into a system — strategy, agents, and product engineering from one senior team.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            NeuterLabs began by building its own products. WULO Academy, our always-available AI tutor and guidance counsellor, and Wulo-X, an AI-native communication OS for healthcare, taught us what it takes to run AI in production — evaluation, guardrails, uptime, and trust. Today we put that same team to work for clients as an AI service agency.
          </p>
          <p>
            Our work spans AI strategy, agentic systems, speech and language AI, and full-stack product engineering — always grounded in evidence and built with safety as the top priority.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="2" label="Live products" />
          <StatListItem value="3" label="Service lines" />
          <StatListItem value="2026" label="Agency launch" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Latest thinking on AI, learning, and the systems we're building."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
