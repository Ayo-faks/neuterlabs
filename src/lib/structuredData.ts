export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NeuterLabs',
    alternateName: 'Neuter Labs',
    url: 'https://neuterlabs.com',
    logo: 'https://neuterlabs.com/logo.png',
    description: 'Applied AI studio — an AI service agency for strategy, agentic systems, and product engineering. Creator of WULO Academy and Wulo-X.',
    foundingDate: '2020',
    sameAs: [
      'https://twitter.com/neuterlabs',
      'https://linkedin.com/company/neuterlabs',
      'https://github.com/neuterlabs',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'New Business',
      email: 'ayoola@neuterlabs.com',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'AI Strategy Consulting',
      'AI Agents and Agentic Systems',
      'Workflow Automation',
      'AI Product Engineering',
      'Machine Learning Deployment',
      'Natural Language Understanding',
      'Automatic Speech Recognition',
      'Adaptive Learning Systems',
      'Responsible AI Development',
      'AI Safety',
      'Privacy-Preserving AI',
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
    applicationCategory: 'EducationalApplication',
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
    '@type': 'ProfessionalService',
    name: 'NeuterLabs',
    url: 'https://neuterlabs.com',
    description: 'AI service agency — strategy, agents and automation, and end-to-end AI product engineering, delivered by the team behind WULO Academy and Wulo-X',
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'AI Product Strategy',
        description: 'Opportunity mapping, prototype definition, and data and model strategy for organisations adopting AI',
      },
      {
        '@type': 'Thing',
        name: 'Agents and Automation',
        description: 'Voice and chat agents, workflow orchestration, and human-in-the-loop controls for real business workflows',
      },
      {
        '@type': 'Thing',
        name: 'AI Product Engineering',
        description: 'Full-stack delivery with evaluation, guardrails, observability, and cloud deployment engineered in from day one',
      },
      {
        '@type': 'Thing',
        name: 'Responsible AI Deployment',
        description: 'Safety, privacy, and compliance built into system architecture — especially for regulated and high-stakes domains',
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
    description: 'AI research company building intelligent systems for the future of humanity — led by WULO Academy, an AI tutor and guidance counsellor for every learner',
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
