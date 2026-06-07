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
                            Building AI for the future of humanity
                        </h2>
                        <p className="mt-10 text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                            NeuterLabs is an AI research company building intelligent systems that expand human potential. 
                            We ground our work in rigorous research and ship it as products that make a real difference in people&apos;s lives.
                        </p>
                        <p className="mt-6 text-lg text-neutral-500 leading-relaxed max-w-3xl mx-auto">
                            Our flagship product, WULO Academy, is an always-available AI tutor and guidance counsellor — 
                            built on our research in speech recognition, natural language understanding, and adaptive learning.
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
                                Human Impact
                            </h3>
                            <p className="text-neutral-600 text-base leading-relaxed">
                                We apply AI where it can do the most good for people — from education and learning to healthcare and beyond.
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
                                We build AI systems with safety, privacy, and rigor at their core — especially when they serve children and other vulnerable populations.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    )
}