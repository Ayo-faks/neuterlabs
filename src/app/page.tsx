import type { Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
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
    description: 'Advanced AI-powered carbon intelligence system for measuring, managing, and reducing emissions',
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
      
      {/* WULO Product Showcase */}
      <WuloProduct/>
      
      {/* Research & Principles */}
      <ResearchPrinciples/>

      {/* Testimonial */}
      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        NeuterLabs sets the gold standard for AI safety in healthcare. Their rigorous approach to bias testing 
        and privacy-preserving methods gave us confidence to deploy responsibly. More than vendors, they&apos;re 
        partners in building trustworthy AI that truly serves patients.
      </Testimonial>

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}

export const metadata: Metadata = {
  title: 'NeuterLabs - AI Research for Climate & Sustainability',
  description:
    'NeuterLabs is an AI research company building intelligent systems for climate action. Our flagship product WULO delivers enterprise carbon intelligence for emissions tracking, renewable energy optimization, and sustainable operations.',
  openGraph: {
    title: 'NeuterLabs - AI Research for Climate & Sustainability',
    description: 'Building intelligent systems for climate action. Enterprise carbon intelligence powered by responsible AI research.',
    type: 'website',
    url: 'https://neuterlabs.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuterLabs - AI Research for Climate & Sustainability',
      },
    ],
  },
  keywords: [
    'AI research company',
    'carbon intelligence',
    'WULO',
    'sustainability AI',
    'climate tech startup',
    'emissions tracking AI',
    'renewable energy optimization',
    'responsible AI',
  ],
}


