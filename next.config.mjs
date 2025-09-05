import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['sanity']
  },
  images: {
    domains: ['cdn.sanity.io']
  },
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

export default withMDX(nextConfig)
