import type { Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import HeroPage from '@/components/heropage'
import Intro from '@/components/intro'
import WuloProduct from '@/components/WuloProduct'
import ResearchPrinciples from '@/components/ResearchPrinciples'
import { 
  generateOrganizationSchema, 
  generateProductSchema, 
  generateWebsiteSchema,
  generateResearchSchema 
} from '@/lib/structuredData'

export default async function Home() {
  // Generate structured data for SEO
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()
  const researchSchema = generateResearchSchema()
  const wuloSchema = generateProductSchema({
    name: 'WULO',
    description: 'Real-time AI-powered speech therapy platform for children. Intelligent voice agents guide kids through structured articulation and phonology exercises.',
    url: 'https://wulo.ai',
    image: 'https://wulo.ai/og-image.jpg',
  })

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wuloSchema) }}
      />
      
      {/* Hero Section - Anthropic-style with WULO highlight */}
      <HeroPage/>
      
      {/* Mission Statement */}
      <Intro/>
      
      {/* Products */}
      <WuloProduct/>
      
      {/* Research & Principles */}
      <ResearchPrinciples/>

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}

export const metadata: Metadata = {
  title: 'NeuterLabs - AI Research & Products for Healthcare',
  description:
    'NeuterLabs is an AI research company building intelligent systems for healthcare — from pediatric speech therapy to clinical documentation.',
  openGraph: {
    title: 'NeuterLabs - AI Research & Products for Healthcare',
    description: 'AI research company building intelligent systems for healthcare. Products include WULO speech therapy and a clinical ambient scribe.',
    type: 'website',
    url: 'https://neuterlabs.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuterLabs - AI Research & Products for Healthcare',
      },
    ],
  },
  keywords: [
    'AI research',
    'healthcare AI',
    'NeuterLabs',
    'WULO',
    'speech therapy AI',
    'clinical ambient scribe',
    'medical AI',
    'speech recognition',
  ],
}


