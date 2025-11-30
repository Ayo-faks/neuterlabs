import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export default function Intro(){
    return(
        <div className="bg-white relative z-10">
            <Container className="mt-24 mb-24 sm:mt-32 sm:mb-32 md:mt-40 md:mb-40">
                <FadeIn>
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="font-display text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl leading-[1.1]">
                            Building AI that benefits humanity
                        </h2>
                        <p className="mt-10 text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                            AI will have a vast impact on the world. At NeuterLabs, we&apos;re dedicated to securing 
                            its benefits and mitigating its risks through rigorous research and principled product development.
                        </p>
                        <p className="mt-6 text-lg text-neutral-500 leading-relaxed max-w-3xl mx-auto">
                            From climate intelligence to healthcare applications, our work centers on one fundamental question: 
                            How do we ensure AI systems remain safe, transparent, and aligned with human values as they grow more powerful?
                        </p>
                    </div>
                    
                    {/* Mission pillars */}
                    <div className="mt-20 grid gap-10 sm:grid-cols-3">
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-100 text-3xl mb-6 group-hover:bg-neutral-950 group-hover:scale-105 transition-all duration-300">
                                <span className="group-hover:invert transition-all duration-300">🔬</span>
                            </div>
                            <h3 className="font-display text-xl font-semibold text-neutral-950 mb-3">
                                Safety Research
                            </h3>
                            <p className="text-neutral-600 text-base leading-relaxed">
                                Advancing the science of AI alignment, interpretability, and robustness through peer-reviewed research
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-100 text-3xl mb-6 group-hover:bg-neutral-950 group-hover:scale-105 transition-all duration-300">
                                <span className="group-hover:invert transition-all duration-300">🛡️</span>
                            </div>
                            <h3 className="font-display text-xl font-semibold text-neutral-950 mb-3">
                                Responsible Products
                            </h3>
                            <p className="text-neutral-600 text-base leading-relaxed">
                                Translating safety principles into real-world applications that solve critical challenges
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-100 text-3xl mb-6 group-hover:bg-neutral-950 group-hover:scale-105 transition-all duration-300">
                                <span className="group-hover:invert transition-all duration-300">🌍</span>
                            </div>
                            <h3 className="font-display text-xl font-semibold text-neutral-950 mb-3">
                                Societal Impact
                            </h3>
                            <p className="text-neutral-600 text-base leading-relaxed">
                                Collaborating with policymakers, researchers, and communities to shape beneficial AI governance
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    )
}