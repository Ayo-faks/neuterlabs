import type { Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://neuterlabs.com'),
  title: {
    template: '%s | NeuterLabs',
    default: 'NeuterLabs - AI Research and Products That Put Safety at the Frontier',
  },
  description: 'AI will have a vast impact on the world. NeuterLabs is dedicated to securing its benefits and mitigating its risks through responsible AI research and products like WULO, our carbon intelligence system.',
  keywords: ['AI safety', 'artificial intelligence', 'carbon intelligence', 'WULO', 'responsible AI', 'AI research', 'climate tech', 'sustainability AI', 'healthcare AI', 'ethical AI'],
  authors: [{ name: 'NeuterLabs' }],
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
    title: 'NeuterLabs - AI Research and Products That Put Safety at the Frontier',
    description: 'AI will have a vast impact on the world. NeuterLabs is dedicated to securing its benefits and mitigating its risks through responsible AI research and products.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuterLabs - AI Safety Research',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuterLabs - AI Research and Products That Put Safety at the Frontier',
    description: 'Dedicated to securing AI benefits and mitigating risks through responsible research and products like WULO.',
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
