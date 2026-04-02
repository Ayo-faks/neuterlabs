import type { Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://neuterlabs.com'),
  title: {
    template: '%s | NeuterLabs',
    default: 'NeuterLabs - AI Research & Products',
  },
  description: 'NeuterLabs is an AI research company building intelligent systems for healthcare. Our products include WULO, a real-time speech therapy platform for children, and a clinical ambient scribe.',
  keywords: [
    'AI research',
    'artificial intelligence',
    'NeuterLabs',
    'healthcare AI',
    'speech therapy AI',
    'WULO',
    'clinical ambient scribe',
    'AI voice agents',
    'machine learning',
    'natural language processing',
    'speech recognition',
    'pediatric AI',
    'medical AI',
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
    description: 'AI research company building intelligent systems for healthcare. Products include WULO speech therapy for children and a clinical ambient scribe.',
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
    description: 'AI research company building intelligent systems for healthcare — speech therapy, clinical documentation, and more.',
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
