import { article as aiSpeechTherapyChildren } from './ai-speech-therapy-children/page.mdx'
import { article as voiceAgentsArticulationPractice } from './voice-agents-articulation-practice/page.mdx'
import { article as phonologyExercisesAiFeedback } from './phonology-exercises-ai-feedback/page.mdx'
import { article as beyondTheHypePreparingYourOrganizationForTheAgenticEra } from './beyond-the-hype-preparing-your-organization-for-the-agentic-era/page.mdx'
import { article as loopEngineeringNewFullStack } from './loop-engineering-new-full-stack/page.mdx'

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
    image?: ImageProps
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
    toEntry(loopEngineeringNewFullStack, '/blog/loop-engineering-new-full-stack'),
    toEntry(
      beyondTheHypePreparingYourOrganizationForTheAgenticEra,
      '/blog/beyond-the-hype-preparing-your-organization-for-the-agentic-era',
    ),
    toEntry(aiSpeechTherapyChildren, '/blog/ai-speech-therapy-children'),
    toEntry(voiceAgentsArticulationPractice, '/blog/voice-agents-articulation-practice'),
    toEntry(phonologyExercisesAiFeedback, '/blog/phonology-exercises-ai-feedback'),
  ].sort((a, b) => b.date.localeCompare(a.date))
}
