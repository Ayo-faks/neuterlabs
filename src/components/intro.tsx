import Image, { type StaticImageData } from 'next/image'

import { Container } from './Container'
import { FadeIn, FadeInStagger } from './FadeIn'
import imageHumanCenteredAgents from '@/images/Human-Centered AI Agents.png'
import imageMultiAgentOrchestration from '@/images/Multi-Agent Orchestration.png'
import imageSafetyFirstAutomation from '@/images/Safety-First Automation.png'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

type Service = {
    number: string
    title: string
    description: string
    image: StaticImageData
    deliverables: string[]
}

type ServiceGroup = {
    label: string
    tagline: string
    services: Service[]
}

const serviceGroups: ServiceGroup[] = [
    {
        label: 'Production AI',
        tagline: 'Take AI from idea to a system that carries real workload.',
        services: [
            {
                number: '01',
                title: 'AI Strategy',
                description:
                    'We align leadership on where AI genuinely pays off — filtering vague ideas into a prioritised roadmap grounded in technical feasibility, data readiness, and business outcomes that survive scrutiny.',
                image: imageHumanCenteredAgents,
                deliverables: ['Use-case prioritisation', 'AI roadmap & business case', 'Data readiness assessment'],
            },
            {
                number: '02',
                title: 'AI Workshops',
                description:
                    'A focused one-to-three-day sprint that condenses months of internal debate. Your team leaves with a validated, build-ready AI plan — and the shared understanding and governance guardrails to act on it.',
                image: imageMultiAgentOrchestration,
                deliverables: ['1–3 day strategic sprint', 'Validated production roadmap', 'Team enablement & governance'],
            },
            {
                number: '03',
                title: 'AI Automation',
                description:
                    'We engineer reasoning agents that go beyond scripted RPA — planning and executing multi-step processes inside your existing systems, with human control at the moments that matter.',
                image: imageSafetyFirstAutomation,
                deliverables: ['Reasoning-driven agents', 'System & workflow integration', 'MLOps · LLMOps · guardrails'],
            },
        ],
    },
    {
        label: 'Analytics',
        tagline: 'Turn scattered data into decisions people trust.',
        services: [
            {
                number: '04',
                title: 'Data Analytics',
                description:
                    'We consolidate fragmented data into a stable, governed foundation and apply advanced and predictive analytics — so strategic decisions replace guesswork with evidence.',
                image: imageLaptop,
                deliverables: ['Data platform & pipelines', 'Predictive modelling', 'Single source of truth'],
            },
            {
                number: '05',
                title: 'Business Intelligence',
                description:
                    'We design BI that teams actually use — trusted metrics, automated reporting, and dashboards that surface bottlenecks and opportunities the moment they appear.',
                image: imageWhiteboard,
                deliverables: ['KPI & metric design', 'Automated reporting', 'Interactive dashboards'],
            },
            {
                number: '06',
                title: 'Data Visualization',
                description:
                    'We turn complex datasets into clear visual stories — decision-ready dashboards and executive narratives that make the state of the business obvious at a glance.',
                image: imageMeeting,
                deliverables: ['Dashboard design systems', 'Visual data storytelling', 'Executive reporting'],
            },
        ],
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

                {serviceGroups.map((group) => (
                    <div key={group.label} className="mt-16 lg:mt-24">
                        <FadeIn className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                            <h3 className="font-display text-2xl font-semibold text-neutral-950">
                                {group.label}
                            </h3>
                            <p className="text-base text-neutral-600">{group.tagline}</p>
                        </FadeIn>

                        <FadeInStagger
                            className="mt-8 grid border-y border-neutral-950/20 lg:grid-cols-3"
                            faster
                        >
                            {group.services.map((service) => (
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
                                                <h4 className="font-display text-2xl font-semibold">
                                                    {service.title}
                                                </h4>
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
                    </div>
                ))}
            </Container>
        </section>
    )
}