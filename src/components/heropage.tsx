import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'

import neuterBG from '@/images/neuterBG.png'

const capabilities = [
  'AI strategy',
  'Agentic systems',
  'Product engineering',
  'Responsible deployment',
]

export default function HeroPage() {
  return (
    <section className="relative -mt-24 min-h-[min(960px,100svh)] overflow-hidden bg-[#070706] pt-24 text-gold-50">
      <Image
        src={neuterBG}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.16] grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070706] via-[#070706]/90 to-[#070706]/50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,162,39,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,162,39,0.07)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <div className="relative mx-auto flex min-h-[calc(min(960px,100svh)-6rem)] max-w-7xl flex-col justify-between px-6 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-36 lg:px-12 lg:pt-44">
        <div className="max-w-5xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase text-gold-300 sm:text-sm">
            <span className="h-px w-10 bg-gold-400" />
            NeuterLabs / Applied AI Studio
          </p>
          <h1 className="mt-8 max-w-5xl font-display text-5xl font-medium leading-[0.98] text-gold-50 sm:text-6xl lg:text-7xl">
            AI systems,
            <span className="block text-gold-300">engineered for real work.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gold-100/70 sm:text-xl">
            We help ambitious teams find the right AI opportunity, build the
            product, and take it safely into production. Strategy, agents,
            automation, and end-to-end product engineering in one senior team.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-between gap-8 bg-gold-400 px-6 py-3 text-sm font-semibold text-[#070706] transition-colors hover:bg-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
            >
              Start an AI project
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#portfolio"
              className="group inline-flex min-h-12 items-center justify-between gap-8 border border-gold-400/40 px-6 py-3 text-sm font-semibold text-gold-100 transition-colors hover:border-gold-300 hover:bg-gold-400/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
            >
              Explore our work
              <ArrowDownRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
          </div>
        </div>

        <ul className="mt-20 grid border-y border-gold-400/20 text-xs uppercase text-gold-100/60 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <li
              key={capability}
              className="flex min-h-14 items-center gap-3 border-gold-400/20 px-4 py-3 sm:border-l sm:first:border-l-0"
            >
              <span className="text-gold-400">0{index + 1}</span>
              {capability}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}