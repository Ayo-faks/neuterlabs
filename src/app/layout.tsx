import type { Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://neuterlabs.com'),
  title: {
    template: '%s | NeuterLabs',
    default: 'NeuterLabs - AI Research for Climate & Sustainability',
  },
  description: 'NeuterLabs is an AI research company building intelligent systems for climate action and sustainable development. Our flagship product WULO delivers enterprise carbon intelligence powered by responsible AI.',
  keywords: [
    'AI research',
    'artificial intelligence',
    'carbon intelligence',
    'WULO',
    'sustainability AI',
    'climate tech',
    'renewable energy AI',
    'emissions tracking',
    'AI safety',
    'responsible AI',
    'machine learning',
    'carbon accounting',
    'net zero',
    'decarbonization',
    'ESG technology',
    'Scope 3 emissions',
    'GHG Protocol',
  ],
  authors: [{ name: 'NeuterLabs', url: 'https://neuterlabs.com' }],
  creator: 'NeuterLabs',
  publisher: 'NeuterLabs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://neuterlabs.com',
    siteName: 'NeuterLabs',
    title: 'NeuterLabs - AI Research for Climate & Sustainability',
    description: 'Building intelligent systems for climate action. Enterprise carbon intelligence powered by responsible AI research.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuterLabs - AI Research for Climate & Sustainability',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuterLabs - AI Research for Climate & Sustainability',
    description: 'Building intelligent systems for climate action. Enterprise carbon intelligence powered by responsible AI.',
    images: ['/twitter-image.jpg'],
    creator: '@neuterlabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased ">
      <body className="flex min-h-full flex-col" suppressHydrationWarning={true}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
