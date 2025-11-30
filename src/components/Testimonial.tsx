import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({
  children,
  client,
  className,
}: {
  children: React.ReactNode
  client: { logo: ImageProps['src']; name: string }
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50/50 py-20 sm:py-32 md:py-40',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-200/40 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl md:text-4xl leading-relaxed">
              <span className="absolute -left-6 top-0 text-neutral-300 text-6xl font-serif hidden sm:block">"</span>
              <p>
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-12">
              <Image src={client.logo} alt={client.name} unoptimized className="opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
