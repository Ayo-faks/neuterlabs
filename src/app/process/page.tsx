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
          We begin by conducting comprehensive{' '}
          <strong className="font-semibold text-neutral-950">carbon footprint assessments</strong> and
          energy systems analysis to understand your organization&apos;s specific emissions sources and
          reduction opportunities.
        </p>
        <p>
          Our interdisciplinary team works with sustainability officers, operations managers, and supply chain
          experts to identify key emission hotspots, data quality challenges, and{' '}
          <strong className="font-semibold text-neutral-950">measurement gaps</strong>{' '}
          that must be addressed throughout the implementation process.
        </p>
        <p>
          We establish clear success metrics, reduction targets, and{' '}
          <strong className="font-semibold text-neutral-950">validation protocols</strong> that
          align with international carbon accounting standards like GHG Protocol and ISO 14064.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Carbon footprint mapping</TagListItem>
        <TagListItem>Energy systems analysis</TagListItem>
        <TagListItem>Stakeholder workshops</TagListItem>
        <TagListItem>Data source identification</TagListItem>
        <TagListItem>Compliance framework review</TagListItem>
        <TagListItem>Baseline establishment</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Development & Integration" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our development process integrates with your existing systems, implementing
          automated data collection from IoT sensors, energy management systems,
          and supply chain platforms to create comprehensive emissions tracking.
        </p>
        <p>
          Each carbon calculation undergoes continuous{' '}
          <strong className="font-semibold text-neutral-950">third-party verification</strong>{' '}
          where our AI models cross-reference multiple data sources and apply
          international carbon accounting standards to ensure accuracy and auditability.
        </p>
        <p>
          We maintain transparent documentation of all emission factors, calculation
          methodologies, and data sources to ensure{' '}
          <strong className="font-semibold text-neutral-950">full traceability</strong>{' '}
          and regulatory compliance.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Sarah Mitchell', role: 'Director of Sustainability, Global Energy Corp' }}
        className="mt-12"
      >
        WULO&rsquo;s rigorous verification protocols gave us confidence that our carbon
        reporting would meet the highest standards for investor disclosure and regulatory compliance.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deployment & Optimization" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Before full deployment, we conduct comprehensive{' '}
          <strong className="font-semibold text-neutral-950">
            pilot programs
          </strong>{' '}
          to validate carbon calculations against third-party audits, test reduction
          strategies, and refine our AI recommendations in real operational environments.
        </p>
        <p>
          Our deployment strategy includes gradual rollout with continuous{' '}
          <strong className="font-semibold text-neutral-950">monitoring</strong>{' '}
          systems that track emission reductions, identify new optimization opportunities,
          and provide early warning of data quality issues.
        </p>
        <p>
          We establish robust{' '}
          <strong className="font-semibold text-neutral-950">
            sustainability team enablement
          </strong>{' '}
          and provide comprehensive training on carbon accounting best practices, system
          usage, and{' '}
          <strong className="font-semibold text-neutral-950">
            reduction strategy implementation
          </strong>.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Pilot Validation">
          Comprehensive testing comparing WULO calculations against third-party audits
          across diverse operational scenarios and emission sources.
        </ListItem>
        <ListItem title="Continuous Monitoring">
          Real-time systems for tracking emissions, validating reductions, and
          ensuring continued accuracy of carbon intelligence.
        </ListItem>
        <ListItem title="Team Training">
          Comprehensive education programs for sustainability teams on carbon accounting
          methodologies, system capabilities, and optimization strategies.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Accuracy, transparency, and environmental impact"
      >
        <p>
          We are guided by principles that prioritize data accuracy, scientific rigor, 
          and measurable climate impact in every aspect of our carbon intelligence development.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Accuracy First">
            Carbon data accuracy is paramount. Every calculation is verified against international
            standards and undergoes third-party validation before reporting.
          </GridListItem>
          <GridListItem title="Transparent Methodology">
            We maintain complete transparency in our carbon accounting methods, providing clear
            documentation of emission factors, data sources, and calculation approaches.
          </GridListItem>
          <GridListItem title="Science-Based">
            Our development process is grounded in climate science and validated through
            peer-reviewed research and alignment with IPCC guidelines.
          </GridListItem>
          <GridListItem title="Auditable">
            We ensure complete traceability of all carbon data, enabling external audits
            and regulatory compliance through blockchain-backed verification.
          </GridListItem>
          <GridListItem title="Collaborative">
            We work closely with sustainability teams, carbon auditors, and industry experts
            to ensure our systems meet real-world operational needs.
          </GridListItem>
          <GridListItem title="Impact-Driven">
            We take responsibility for delivering measurable emission reductions and maintain
            ongoing monitoring to validate environmental impact.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'Our research-driven approach ensures that every carbon intelligence system we build meets the highest standards of accuracy, transparency, and environmental impact measurement.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we develop carbon intelligence systems">
        <p>
          Our research-driven approach ensures that every carbon intelligence system we build meets the highest standards of accuracy, transparency, and verifiable impact before deployment in sustainability operations.
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
