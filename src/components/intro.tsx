import Image, { type StaticImageData } from 'next/image'

import { Container } from './Container'
import { FadeIn, FadeInStagger } from './FadeIn'
import imageHumanCenteredAgents from '@/images/Human-Centered AI Agents.png'
import imageMultiAgentOrchestration from '@/images/Multi-Agent Orchestration.png'
import imageSafetyFirstAutomation from '@/images/Safety-First Automation.png'

type Service = {
    number: string
    title: string
    description: string
    image: StaticImageData
    deliverables: string[]
}

const services: Service[] = [
    {
        number: '01',
        title: 'AI product strategy',
        description:
            'We turn an ambitious brief into a focused AI roadmap, grounded in user value, technical feasibility, and a business case that can survive scrutiny.',
        image: imageHumanCenteredAgents,
        deliverables: ['Opportunity mapping', 'Prototype definition', 'Data and model strategy'],
    },
    {
        number: '02',
        title: 'Agents and automation',
        description:
            'We design dependable agents that reason across real workflows, call the right tools, and hand control back to people at the moments that matter.',
        image: imageMultiAgentOrchestration,
        deliverables: ['Voice and chat agents', 'Workflow orchestration', 'Human-in-the-loop controls'],
    },
    {
        number: '03',
        title: 'AI product engineering',
        description:
            'From interface to infrastructure, we build production systems with evaluation, observability, security, and responsible AI engineered in from day one.',
        image: imageSafetyFirstAutomation,
        deliverables: ['Full-stack delivery', 'Evaluation and guardrails', 'Cloud deployment'],
    },
]

export default function Intro() {
    return (
        <section id="services" className="relative bg-gold-50 py-24 text-neutral-950 sm:py-32 lg:py-40">
            <Container>
                <FadeIn className="grid gap-10 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <p className="text-sm font-semibold uppercase text-gold-700">
                            What we do
                        </p>
                        <h2 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
                            From AI ambition to a system people can use.
                        </h2>
                    </div>
                    <p className="max-w-xl text-lg leading-8 text-neutral-600 lg:col-span-5 lg:justify-self-end">
                        NeuterLabs is a senior AI delivery partner for organisations that
                        need more than a demo. We define, design, build, and operate useful
                        AI products from one accountable team.
                    </p>
                </FadeIn>

                <FadeInStagger
                    className="mt-16 grid border-y border-neutral-950/20 lg:mt-24 lg:grid-cols-3"
                    faster
                >
                    {services.map((service) => (
                        <FadeIn
                            key={service.title}
                            className="group border-b border-neutral-950/20 py-8 last:border-b-0 lg:border-b-0 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
                        >
                            <article>
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                                    <Image
                                        src={service.image}
                                        alt=""
                                        fill
                                        sizes="(min-width: 1024px) 33vw, 100vw"
                                        className="object-cover opacity-80 grayscale transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gold-400/10 mix-blend-color" />
                                </div>
                                <div className="mt-8 flex items-start justify-between gap-6">
                                    <div>
                                        <h3 className="font-display text-2xl font-semibold">
                                            {service.title}
                                        </h3>
                                        <p className="mt-4 text-base leading-7 text-neutral-600">
                                            {service.description}
                                        </p>
                                    </div>
                                    <span className="text-sm font-semibold text-gold-700">
                                        {service.number}
                                    </span>
                                </div>
                                <ul className="mt-8 space-y-3 border-t border-neutral-950/15 pt-6 text-sm text-neutral-700">
                                    {service.deliverables.map((deliverable) => (
                                        <li key={deliverable} className="flex items-center gap-3">
                                            <span className="h-px w-4 bg-gold-600" />
                                            {deliverable}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </FadeIn>
                    ))}
                </FadeInStagger>
            </Container>
        </section>
    )
}