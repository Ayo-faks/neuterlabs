import CaseStudyLayout from '../wrapper'

import type { CaseStudy, MDXEntry } from '@/lib/mdx'

import { caseStudy } from './page.mdx'

const entry: MDXEntry<CaseStudy> = {
  ...caseStudy,
  href: '/work/phobia',
  metadata: caseStudy,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout caseStudy={entry}>{children}</CaseStudyLayout>
}
