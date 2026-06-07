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
    name: 'WULO Academy',
    description: 'An always-available AI tutor and guidance counsellor. WULO Academy uses adaptive multiple-choice diagnostics to pinpoint each learner\'s strengths and gaps, then guides personalised practice for WAEC, NECO and JSSCE and offers subject and career counselling.',
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
  title: 'NeuterLabs - AI Research & Products for the Future of Humanity',
  description:
    'NeuterLabs is an AI research company building intelligent systems that expand human potential. Our flagship product, WULO Academy, is an AI tutor and guidance counsellor for every learner.',
  openGraph: {
    title: 'NeuterLabs - AI Research & Products for the Future of Humanity',
    description: 'AI research company building intelligent systems that expand human potential. Flagship product WULO Academy is an AI tutor and guidance counsellor.',
    type: 'website',
    url: 'https://neuterlabs.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuterLabs - AI Research & Products for the Future of Humanity',
      },
    ],
  },
  keywords: [
    'AI research',
    'AI for humanity',
    'NeuterLabs',
    'WULO Academy',
    'AI tutor',
    'AI guidance counsellor',
    'WAEC NECO JSSCE',
    'adaptive learning AI',
  ],
}


