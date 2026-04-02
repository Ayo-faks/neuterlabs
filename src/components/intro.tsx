import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { BeakerIcon, BuildingOffice2Icon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function Intro(){
    return(
        <div className="bg-white relative z-10">
            <Container className="mt-24 mb-24 sm:mt-32 sm:mb-32 md:mt-40 md:mb-40">
                <FadeIn>
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="font-display text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl leading-[1.1]">
                            Building AI that makes a real difference
                        </h2>
                        <p className="mt-10 text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                            NeuterLabs is an AI research company focused on healthcare. We develop intelligent systems 
                            grounded in rigorous research and deploy them as products that solve real clinical problems.
                        </p>
                        <p className="mt-6 text-lg text-neutral-500 leading-relaxed max-w-3xl mx-auto">
                            Our work spans speech recognition, natural language understanding, and real-time voice AI — 
                            applied to domains where accuracy and safety matter most.
                        </p>
                    </div>
                    
                    {/* Mission pillars */}
                    <div className="mt-20 grid gap-10 sm:grid-cols-3">
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-14 h-14 border border-neutral-200 mb-6">
                                <BeakerIcon className="w-6 h-6 text-neutral-950" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-neutral-950 mb-3">
                                Research-Driven
                            </h3>
                            <p className="text-neutral-600 text-base leading-relaxed">
                                Every product starts with fundamental research. We publish our findings and build on peer-reviewed science.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-14 h-14 border border-neutral-200 mb-6">
                                <BuildingOffice2Icon className="w-6 h-6 text-neutral-950" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-neutral-950 mb-3">
                                Healthcare Focus
                            </h3>
                            <p className="text-neutral-600 text-base leading-relaxed">
                                We apply AI where it can have the greatest clinical impact — from pediatric speech therapy to clinical documentation.
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-14 h-14 border border-neutral-200 mb-6">
                                <ShieldCheckIcon className="w-6 h-6 text-neutral-950" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-neutral-950 mb-3">
                                Safety First
                            </h3>
                            <p className="text-neutral-600 text-base leading-relaxed">
                                We build AI systems with safety, privacy, and clinical rigor at their core — especially when they serve vulnerable populations.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    )
}