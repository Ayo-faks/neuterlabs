import type { Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://neuterlabs.com'),
  title: {
    template: '%s | NeuterLabs',
    default: 'NeuterLabs — Applied AI Studio',
  },
  description: 'NeuterLabs is an AI service agency for strategy, agents, and product engineering. We design, build, and operate production AI systems — proven by our own live products, WULO Academy and Wulo-X.',
  keywords: [
    'AI agency',
    'AI consultancy',
    'applied AI studio',
    'NeuterLabs',
    'agentic systems',
    'AI agents',
    'AI product engineering',
    'AI strategy',
    'workflow automation',
    'WULO Academy',
    'Wulo-X',
    'machine learning',
    'natural language processing',
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
    title: 'NeuterLabs — Applied AI Studio',
    description: 'AI service agency for strategy, agents, and product engineering — proven by live products WULO Academy and Wulo-X.',
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
    title: 'NeuterLabs — Applied AI Studio',
    description: 'AI service agency for strategy, agents, and product engineering — proven by live products WULO Academy and Wulo-X.',
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
