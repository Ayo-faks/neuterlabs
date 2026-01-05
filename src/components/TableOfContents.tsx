import Link from 'next/link'

import clsx from 'clsx'

import { Border } from '@/components/Border'

export type TocItem = {
  title: string
  href: string
}

export function TableOfContents({
  items,
  className,
}: {
  items: TocItem[]
  className?: string
}) {
  if (items.length === 0) return null

  return (
    <Border
      position="left"
      className={clsx('mx-auto mt-10 max-w-3xl pl-8', className)}
    >
      <p className="font-display text-sm font-bold uppercase tracking-widest text-neutral-950">
        On this page
      </p>
      <ul className="mt-4 space-y-2 text-base text-neutral-600">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="underline decoration-neutral-300 underline-offset-4 hover:text-neutral-950"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </Border>
  )
}
