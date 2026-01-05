import type { ImageProps } from 'next/image'
import glob from 'fast-glob'

import { getArticles } from '../app/blog/articles'
import { getCaseStudies } from '../app/work/case-studies'

async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string,
): Promise<Array<MDXEntry<T>>> {
  const filenames = await glob('**/page.mdx', { cwd: `src/app/${directory}` })

  const results = await Promise.allSettled(
    filenames.map(async (filename) => {
      const modulePath = `../app/${directory}/${filename}`
      const metadata = (await import(modulePath))[metaName] as T
      return {
        ...metadata,
        metadata,
        href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
      }
    }),
  )

  const entries: Array<MDXEntry<T>> = []
  for (let i = 0; i < results.length; i++) {
    const result = results[i]
    if (result.status === 'fulfilled') {
      entries.push(result.value)
      continue
    }

    const filename = filenames[i]
    console.warn(
      `[mdx] Skipping ${directory}/${filename} due to import error:`,
      result.reason,
    )
  }

  return entries.sort((a, b) => b.date.localeCompare(a.date))
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  date: string
  title: string
  description: string
  readingTime?: string
  toc?: Array<{ title: string; href: string }>
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface CaseStudy {
  date: string
  client: string
  title: string
  description: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

export function loadArticles() {
  // Avoid runtime glob + dynamic import of `page.mdx` under `app/`.
  // In Next 13 dev this can fail for newly added MDX routes that haven't been compiled yet.
  return Promise.resolve(getArticles() as Array<MDXEntry<Article>>)
}

export function loadCaseStudies() {
  // Avoid runtime glob + dynamic import of `page.mdx` under `app/`.
  // In Next 13 dev/build this can intermittently fail for MDX routes.
  return Promise.resolve(getCaseStudies() as Array<MDXEntry<CaseStudy>>)
}
