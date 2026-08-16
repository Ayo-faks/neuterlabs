import type { Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import Faq from '@/components/Faq'
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
      
      {/* Hero — AI agency positioning */}
      <HeroPage/>
      
      {/* Services */}
      <Intro/>
      
      {/* Portfolio */}
      <WuloProduct/>
      
      {/* Engagement model & principles */}
      <ResearchPrinciples/>

      {/* FAQ */}
      <Faq />

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}

export const metadata: Metadata = {
  title: 'NeuterLabs — AI Service Agency for Strategy, Agents & Product Engineering',
  description:
    'NeuterLabs is an applied AI studio. We help ambitious teams find the right AI opportunity, build agents and automation, and take products safely into production — proven by our own live products like WULO Academy.',
  openGraph: {
    title: 'NeuterLabs — AI Service Agency for Strategy, Agents & Product Engineering',
    description: 'Applied AI studio for strategy, agentic systems, and production engineering — proven by live products like WULO Academy and Wulo-X.',
    type: 'website',
    url: 'https://neuterlabs.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuterLabs — Applied AI Studio',
      },
    ],
  },
  keywords: [
    'AI agency',
    'AI consultancy',
    'AI service agency',
    'agentic systems',
    'AI product engineering',
    'NeuterLabs',
    'WULO Academy',
    'Wulo-X',
    'AI strategy',
  ],
}


