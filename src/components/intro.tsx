import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export default function Intro(){

    return(
        <div>
        <Container className="mt-24 mb-24 sm:mt-32 sm:mb-32 md:mt-36 md:mb-36">
        <FadeIn className=""> {/*max-w-3xl*/}
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950  sm:text-7xl">
            Over 50 years of award-winning experience.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a development studio working at the intersection of design
            and technology. It’s a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p>
        </FadeIn>
      </Container>
      </div>
    )

}