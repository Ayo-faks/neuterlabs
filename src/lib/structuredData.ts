export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NeuterLabs',
    alternateName: 'Neuter Labs',
    url: 'https://neuterlabs.com',
    logo: 'https://neuterlabs.com/logo.png',
    description: 'AI research company building intelligent systems for climate action and sustainable development. Creator of WULO, enterprise carbon intelligence platform.',
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
      'Machine Learning',
      'Carbon Intelligence',
      'Climate Technology',
      'Sustainability AI',
      'Renewable Energy Optimization',
      'Emissions Tracking',
      'GHG Protocol',
      'Net Zero Strategy',
      'Responsible AI Development',
      'AI Safety',
      'ESG Technology',
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
    applicationCategory: 'BusinessApplication',
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
    description: 'AI research organization developing intelligent systems for climate action, carbon intelligence, and sustainable technology',
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'Carbon Intelligence',
        description: 'AI-powered emissions tracking, forecasting, and reduction optimization',
      },
      {
        '@type': 'Thing',
        name: 'Renewable Energy AI',
        description: 'Machine learning systems for grid optimization and energy efficiency',
      },
      {
        '@type': 'Thing',
        name: 'Sustainability Analytics',
        description: 'Data-driven insights for environmental impact measurement and ESG reporting',
      },
      {
        '@type': 'Thing',
        name: 'Responsible AI Development',
        description: 'Building safe, transparent, and accountable AI systems',
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
    description: 'AI research company building intelligent systems for climate action and sustainable development',
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
