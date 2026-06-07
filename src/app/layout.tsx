import type { Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://neuterlabs.com'),
  title: {
    template: '%s | NeuterLabs',
    default: 'NeuterLabs - AI Research & Products',
  },
  description: 'NeuterLabs is an AI research company building intelligent systems for the future of humanity. Our flagship product, WULO Academy, is an always-available AI tutor and guidance counsellor for every learner.',
  keywords: [
    'AI research',
    'artificial intelligence',
    'NeuterLabs',
    'AI for humanity',
    'WULO Academy',
    'AI tutor',
    'AI guidance counsellor',
    'adaptive learning',
    'WAEC NECO JSSCE',
    'machine learning',
    'natural language processing',
    'speech recognition',
    'education AI',
    'AI safety',
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
    title: 'NeuterLabs - AI Research & Products',
    description: 'AI research company building intelligent systems for the future of humanity. Flagship product WULO Academy is an AI tutor and guidance counsellor for every learner.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuterLabs - AI Research & Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuterLabs - AI Research & Products',
    description: 'AI research company building intelligent systems for the future of humanity — led by WULO Academy, an AI tutor and guidance counsellor.',
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
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
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
