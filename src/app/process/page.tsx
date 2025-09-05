import { type Metadata } from 'next'

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
          We begin by conducting extensive literature reviews and stakeholder interviews to understand the specific{' '}
          <strong className="font-semibold text-neutral-950">clinical needs</strong> and
          regulatory requirements for your healthcare AI application.
        </p>
        <p>
          Our interdisciplinary team works with clinicians, patients, and healthcare administrators to identify key safety concerns, potential biases, and{' '}
          <strong className="font-semibold text-neutral-950">ethical considerations</strong>{' '}
          that must be addressed throughout the development process.
        </p>
        <p>
          We establish clear success metrics, safety benchmarks, and{' '}
          <strong className="font-semibold text-neutral-950">validation protocols</strong> that
          align with clinical best practices and regulatory standards.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Clinical needs assessment</TagListItem>
        <TagListItem>Literature review</TagListItem>
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Bias risk analysis</TagListItem>
        <TagListItem>Regulatory compliance review</TagListItem>
        <TagListItem>Ethics evaluation</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Development & Testing" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our development process follows rigorous safety protocols, implementing
          multiple layers of testing including adversarial robustness, bias detection,
          and privacy preservation throughout the model training pipeline.
        </p>
        <p>
          Each AI system undergoes continuous{' '}
          <strong className="font-semibold text-neutral-950">red-team evaluation</strong>{' '}
          where our safety researchers actively try to identify potential failures,
          edge cases, and unintended behaviors before clinical deployment.
        </p>
        <p>
          We maintain transparent documentation of all model decisions, training data,
          and validation results to ensure{' '}
          <strong className="font-semibold text-neutral-950">full auditability</strong>{' '}
          and clinical interpretability.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Dr. Sarah Chen', role: 'Chief Medical Officer, HealthTech Innovations' }}
        className="mt-12"
      >
        Neuter Labs&rsquo; rigorous testing protocols gave us confidence that their AI system 
        would perform safely and effectively in our clinical environment.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Validation & Deployment" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Before any clinical deployment, we conduct comprehensive{' '}
          <strong className="font-semibold text-neutral-950">
            validation studies
          </strong>{' '}
          to measure real-world performance, safety metrics, and clinical outcomes
          in controlled environments.
        </p>
        <p>
          Our deployment strategy includes gradual rollout with continuous{' '}
          <strong className="font-semibold text-neutral-950">monitoring</strong>{' '}
          systems that track model performance, detect distribution shifts, and
          provide early warning of potential safety issues.
        </p>
        <p>
          We establish robust{' '}
          <strong className="font-semibold text-neutral-950">
            human oversight
          </strong>{' '}
          protocols and provide comprehensive training to clinical staff on proper
          AI system usage, limitations, and{' '}
          <strong className="font-semibold text-neutral-950">
            intervention procedures
          </strong>.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Clinical Validation">
          Comprehensive studies measuring safety, efficacy, and real-world performance
          across diverse patient populations and clinical settings.
        </ListItem>
        <ListItem title="Monitoring Infrastructure">
          Real-time systems for tracking model performance, detecting drift, and
          ensuring continued safety post-deployment.
        </ListItem>
        <ListItem title="Clinical Training">
          Comprehensive education programs for healthcare providers on AI system
          capabilities, limitations, and proper usage protocols.
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
        title="Safety, transparency, and clinical excellence"
      >
        <p>
          We are guided by principles that prioritize patient safety, scientific rigor, 
          and ethical responsibility in every aspect of our AI development process.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Safety First">
            Patient safety is our highest priority. Every AI system undergoes rigorous
            testing and validation before deployment in clinical settings.
          </GridListItem>
          <GridListItem title="Transparent">
            We maintain complete transparency in our methods, providing clear
            documentation of model decisions and limitations to healthcare providers.
          </GridListItem>
          <GridListItem title="Evidence-Based">
            Our development process is grounded in clinical evidence and validated
            through real-world studies with measurable patient outcomes.
          </GridListItem>
          <GridListItem title="Ethical">
            We actively address bias, ensure fairness across patient populations,
            and respect privacy through privacy-preserving techniques.
          </GridListItem>
          <GridListItem title="Collaborative">
            We work closely with clinicians, researchers, and patient advocates
            to ensure our AI systems truly serve healthcare needs.
          </GridListItem>
          <GridListItem title="Responsible">
            We take full responsibility for our AI systems&rsquo; performance and maintain
            ongoing monitoring and support throughout their clinical lifecycle.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'Our research-driven approach ensures that every AI system we build meets the highest standards of safety, efficacy, and clinical validation.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we develop safe healthcare AI">
        <p>
          Our research-driven approach ensures that every AI system we build meets the highest standards of safety, efficacy, and clinical validation before deployment in healthcare settings.
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
