export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NeuterLabs',
    alternateName: 'Neuter Labs',
    url: 'https://neuterlabs.com',
    logo: 'https://neuterlabs.com/logo.png',
    description: 'AI research company building intelligent voice agents for pediatric speech therapy. Creator of WULO, a real-time AI-powered speech therapy platform for children.',
    foundingDate: '2020',
    sameAs: [
      'https://twitter.com/neuterlabs',
      'https://linkedin.com/company/neuterlabs',
      'https://github.com/neuterlabs',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Partnership Inquiries',
      email: 'ayoola@neuterlabs.com',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Artificial Intelligence Research',
      'Speech-Language Pathology',
      'Pediatric Speech Therapy',
      'Automatic Speech Recognition',
      'Voice AI Agents',
      'Articulation Therapy',
      'Phonological Disorders',
      'Child Speech Development',
      'Real-Time Pronunciation Assessment',
      'Responsible AI Development',
      'AI Safety',
      'COPPA Compliance',
    ],
  }
}

export function generateProductSchema(product: {
  name: string
  description: string
  url: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: 'HealthApplication',
    description: product.description,
    url: product.url,
    image: product.image,
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'Organization',
      name: 'NeuterLabs',
      url: 'https://neuterlabs.com',
    },
  }
}

export function generateResearchSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ResearchOrganization',
    name: 'NeuterLabs',
    url: 'https://neuterlabs.com',
    description: 'AI research organization developing intelligent voice agents for pediatric speech therapy, pronunciation assessment, and child speech development',
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'Pediatric Speech Recognition',
        description: 'AI-powered automatic speech recognition optimized for children\'s voices and speech patterns',
      },
      {
        '@type': 'Thing',
        name: 'Pronunciation Assessment',
        description: 'Real-time evaluation and feedback on articulation, phonology, and speech clarity',
      },
      {
        '@type': 'Thing',
        name: 'Adaptive Speech Exercises',
        description: 'AI-driven personalization of articulation and phonology exercises based on child progress',
      },
      {
        '@type': 'Thing',
        name: 'Responsible AI for Children',
        description: 'Building safe, COPPA-compliant, and privacy-preserving AI systems for pediatric applications',
      },
    ],
    sameAs: [
      'https://twitter.com/neuterlabs',
      'https://linkedin.com/company/neuterlabs',
    ],
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NeuterLabs',
    url: 'https://neuterlabs.com',
    description: 'AI research company building intelligent voice agents for pediatric speech therapy and child speech development',
    publisher: {
      '@type': 'Organization',
      name: 'NeuterLabs',
      logo: {
        '@type': 'ImageObject',
        url: 'https://neuterlabs.com/logo.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://neuterlabs.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}
