import { article as aiRenewableEnergyOptimization } from './ai-renewable-energy-optimization/page.mdx'
import { article as carbonTrackingVerification } from './carbon-tracking-verification/page.mdx'
import { article as emissionsPredictionBreakthrough } from './emissions-prediction-breakthrough/page.mdx'
import { article as secrComplianceGuide2026 } from './secr-compliance-guide-2026/page.mdx'

import type { StaticImageData } from 'next/image'

type ImageProps = {
  src: StaticImageData
  alt?: string
  width?: number
  height?: number
}

export interface Article {
  date: string
  title: string
  description: string
  readingTime?: string
  toc?: Array<{ title: string; href: string }>
  author: {
    name: string
    role: string
    image: ImageProps
  }
}

export type MDXEntry<T> = T & { href: string; metadata: T }

function toEntry(article: Article, href: string): MDXEntry<Article> {
  return {
    ...article,
    href,
    metadata: article,
  }
}

export function getArticles(): Array<MDXEntry<Article>> {
  return [
    toEntry(aiRenewableEnergyOptimization, '/blog/ai-renewable-energy-optimization'),
    toEntry(carbonTrackingVerification, '/blog/carbon-tracking-verification'),
    toEntry(emissionsPredictionBreakthrough, '/blog/emissions-prediction-breakthrough'),
    toEntry(secrComplianceGuide2026, '/blog/secr-compliance-guide-2026'),
  ].sort((a, b) => b.date.localeCompare(a.date))
}
