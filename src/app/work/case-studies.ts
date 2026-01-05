import { caseStudy as familyFund } from './family-fund/page.mdx'
import { caseStudy as globalManufacturing } from './globalmanufacturing/page.mdx'
import { caseStudy as pacificLogistics } from './pacificlogistics/page.mdx'
import { caseStudy as phobia } from './phobia/page.mdx'
import { caseStudy as techVentures } from './techventures/page.mdx'
import { caseStudy as unseal } from './unseal/page.mdx'

import type { StaticImageData } from 'next/image'

type ImageProps = {
  src: StaticImageData
  alt?: string
  width?: number
  height?: number
}

export interface CaseStudy {
  date: string
  client: string
  title: string
  description: string
  summary: Array<string>
  logo: StaticImageData
  image: ImageProps
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

export type MDXEntry<T> = T & { href: string; metadata: T }

function toEntry(caseStudy: CaseStudy, href: string): MDXEntry<CaseStudy> {
  return {
    ...caseStudy,
    href,
    metadata: caseStudy,
  }
}

export function getCaseStudies(): Array<MDXEntry<CaseStudy>> {
  return [
    toEntry(familyFund, '/work/family-fund'),
    toEntry(globalManufacturing, '/work/globalmanufacturing'),
    toEntry(pacificLogistics, '/work/pacificlogistics'),
    toEntry(phobia, '/work/phobia'),
    toEntry(techVentures, '/work/techventures'),
    toEntry(unseal, '/work/unseal'),
  ].sort((a, b) => b.date.localeCompare(a.date))
}
