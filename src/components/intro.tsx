import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export default function Intro(){
    return(
        <div>
            <Container className="mt-24 mb-24 sm:mt-32 sm:mb-32 md:mt-36 md:mb-36">
                <FadeIn className="">
                    <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 sm:text-7xl">
                        AI safety for health and wellbeing
                    </h1>
                    <p className="mt-6 text-xl text-neutral-600 max-w-3xl">
                        We&rsquo;re building AI assistants that help people manage diabetes and depression with safety, privacy, and human dignity at the center. Our research combines rigorous safety protocols with compassionate design, ensuring AI serves as a trusted companion in healthcare.
                    </p>
                </FadeIn>
            </Container>
        </div>
    )
}