import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-gradient-to-br from-neutral-900 to-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12 shadow-premium-xl">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Ready to accelerate your decarbonization?
            </h2>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              Let's discuss how our carbon intelligence solutions can help you achieve your sustainability goals.
            </p>
            <div className="mt-8 flex">
              <Button href="/contact" invert>
                Start the conversation
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-sm font-semibold tracking-widest text-white/80 uppercase">
                Global Carbon Intelligence Network
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
