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
  description:
    'AI research and products that put safety at the frontier. NeuterLabs is dedicated to securing AI benefits and mitigating risks through responsible innovation.',
  openGraph: {
    title: 'NeuterLabs - AI Research and Products That Put Safety at the Frontier',
    description: 'AI will have a vast impact on the world. NeuterLabs is dedicated to securing its benefits and mitigating its risks.',
    type: 'website',
    url: 'https://neuterlabs.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NeuterLabs - AI Safety Research',
      },
    ],
  },
}


