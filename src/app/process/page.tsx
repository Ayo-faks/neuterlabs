import type { Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Research & Discovery" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin with{' '}
          <strong className="font-semibold text-neutral-950">deep domain research</strong> —
          understanding the clinical problem, existing workflows, and where AI can
          create genuine value.
        </p>
        <p>
          Our team works directly with{' '}
          <strong className="font-semibold text-neutral-950">clinicians and domain experts</strong>{' '}
          to identify the specific pain points, edge cases, and safety requirements
          that will shape the product.
        </p>
        <p>
          We establish{' '}
          <strong className="font-semibold text-neutral-950">evaluation criteria</strong>{' '}
          before writing a line of code — defining what success looks like in clinical terms,
          not just technical metrics.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Clinical needs assessment</TagListItem>
        <TagListItem>Literature review</TagListItem>
        <TagListItem>Domain expert interviews</TagListItem>
        <TagListItem>Safety requirement mapping</TagListItem>
        <TagListItem>Evaluation framework</TagListItem>
        <TagListItem>Feasibility analysis</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Development & Validation" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We build iteratively, shipping working prototypes to clinicians early and often.
          Every model is trained on{' '}
          <strong className="font-semibold text-neutral-950">domain-specific data</strong>{' '}
          and tested against real-world clinical scenarios.
        </p>
        <p>
          Our systems are designed for{' '}
          <strong className="font-semibold text-neutral-950">real-time performance</strong>{' '}
          — low-latency inference that feels natural in clinical and consumer contexts.
        </p>
        <p>
          Safety and privacy are{' '}
          <strong className="font-semibold text-neutral-950">built in from the start</strong>,{' '}
          not bolted on after. We design for HIPAA and COPPA compliance at the architecture level.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Dr. Sarah Chen', role: 'Clinical Advisor' }}
        className="mt-12"
      >
        What sets NeuterLabs apart is how closely the engineering team works with clinicians.
        The products reflect a genuine understanding of real clinical workflows.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deployment & Iteration" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We deploy with{' '}
          <strong className="font-semibold text-neutral-950">
            comprehensive monitoring
          </strong>{' '}
          — tracking model accuracy, user outcomes, and edge cases
          in production.
        </p>
        <p>
          Continuous feedback loops with{' '}
          <strong className="font-semibold text-neutral-950">clinicians and users</strong>{' '}
          drive rapid iteration. We ship improvements weekly, not quarterly.
        </p>
        <p>
          Every product includes{' '}
          <strong className="font-semibold text-neutral-950">
            outcome measurement
          </strong>{' '}
          — we track whether our AI is actually improving clinical outcomes,
          not just engagement metrics.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Production Monitoring">
          Real-time tracking of model accuracy, latency, and error rates
          across all deployed systems.
        </ListItem>
        <ListItem title="Clinical Outcome Tracking">
          Measuring real-world impact on patient outcomes,
          clinician efficiency, and user satisfaction.
        </ListItem>
        <ListItem title="Continuous Improvement">
          Weekly model updates and feature releases driven by
          production data and clinician feedback.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Safety, rigor, and measurable impact"
      >
        <p>
          We are guided by principles that prioritize patient safety, evidence-based development, 
          and genuine clinical outcomes across all our products.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Patient Safety">
            Safety is non-negotiable. We design for the most vulnerable users first —
            children, patients, and those who depend on clinical accuracy.
          </GridListItem>
          <GridListItem title="Evidence-Based">
            Every product is grounded in peer-reviewed research and validated
            with practicing clinicians before reaching users.
          </GridListItem>
          <GridListItem title="Clinically Validated">
            Our AI outputs are benchmarked against expert human judgment
            to ensure accuracy and reliability.
          </GridListItem>
          <GridListItem title="Privacy by Design">
            We process data in real time, minimize storage, and build
            HIPAA and COPPA compliance into every system from day one.
          </GridListItem>
          <GridListItem title="Clinician-Aligned">
            We work alongside practicing clinicians to ensure our products
            complement established workflows and protocols.
          </GridListItem>
          <GridListItem title="Measurable Outcomes">
            Clear metrics help users and stakeholders track real-world
            impact and improvement over time.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process | NeuterLabs',
  description:
    'How NeuterLabs builds AI for healthcare — from research and clinical validation to deployment and ongoing improvement.',
  keywords: [
    'AI development process',
    'healthcare AI methodology',
    'clinical validation',
    'AI safety',
    'responsible AI development',
  ],
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we build AI for healthcare">
        <p>
          Our research-driven approach ensures that every product is safe, clinically validated, and built to deliver real outcomes.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
