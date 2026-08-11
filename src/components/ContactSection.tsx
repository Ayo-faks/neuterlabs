import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-gold-50 [text-wrap:balance] sm:text-4xl">
              Let&apos;s build your AI advantage
            </h2>
            <p className="mt-4 text-gold-100/70 leading-relaxed">
              Bring us the workflow, the idea, or the mandate — we&apos;ll bring the team that ships it.
            </p>
            <div className="mt-8 flex">
              <Button href="/contact" invert>
                Start the conversation
              </Button>
            </div>
            <div className="mt-10 border-t border-gold-400/20 pt-10">
              <h3 className="font-display text-sm font-semibold tracking-widest text-gold-300 uppercase">
                Available Worldwide
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
