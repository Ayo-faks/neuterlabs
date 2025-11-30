export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NeuterLabs',
    alternateName: 'Neuter Labs',
    url: 'https://neuterlabs.com',
    logo: 'https://neuterlabs.com/logo.png',
    description: 'AI research and products that put safety at the frontier. Dedicated to securing AI benefits and mitigating risks.',
    foundingDate: '2020',
    sameAs: [
      'https://twitter.com/neuterlabs',
      'https://linkedin.com/company/neuterlabs',
      'https://github.com/neuterlabs',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'General Inquiries',
      email: 'contact@neuterlabs.com',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Artificial Intelligence',
      'AI Safety',
      'Machine Learning',
      'Carbon Intelligence',
      'Climate Technology',
      'Healthcare AI',
      'Responsible AI',
      'AI Alignment',
      'AI Ethics',
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
    description: 'AI safety research organization dedicated to advancing responsible AI development',
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'AI Alignment',
        description: 'Ensuring AI systems pursue goals beneficial to humanity',
      },
      {
        '@type': 'Thing',
        name: 'AI Interpretability',
        description: 'Making AI decision-making transparent and understandable',
      },
      {
        '@type': 'Thing',
        name: 'AI Safety',
        description: 'Building reliable and safe AI systems',
      },
      {
        '@type': 'Thing',
        name: 'Algorithmic Fairness',
        description: 'Mitigating bias in AI systems',
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
    description: 'AI research and products that put safety at the frontier',
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
