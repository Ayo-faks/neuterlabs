declare module '*.mdx' {
  import type { ComponentType } from 'react'

  const MDXComponent: ComponentType<any>
  export default MDXComponent

  export const metadata: any
  export const article: any
  export const caseStudy: any
}
