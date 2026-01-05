import BlogArticleWrapper from '../wrapper'

import type { Article, MDXEntry } from '@/lib/mdx'

import { article } from './page.mdx'

const entry: MDXEntry<Article> = {
  ...article,
  href: '/blog/secr-compliance-guide-2026',
  metadata: article,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BlogArticleWrapper article={entry}>{children}</BlogArticleWrapper>
}
