export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NeuterLabs',
    alternateName: 'Neuter Labs',
    url: 'https://neuterlabs.com',
    logo: 'https://neuterlabs.com/logo.png',
    description: 'AI research company building intelligent systems for the future of humanity. Creator of WULO Academy, an always-available AI tutor and guidance counsellor for every learner.',
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
      'Adaptive Learning',
      'AI Tutoring',
      'Educational Technology',
      'Automatic Speech Recognition',
      'Natural Language Understanding',
      'Career Guidance Systems',
      'WAEC NECO JSSCE Preparation',
      'Speech-Language Pathology',
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
    '@type': 'ResearchOrganization',
    name: 'NeuterLabs',
    url: 'https://neuterlabs.com',
    description: 'AI research organization building intelligent systems for the future of humanity — adaptive learning, AI tutoring, speech recognition, and natural language understanding',
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'Adaptive Learning Diagnostics',
        description: 'AI-powered adaptive multiple-choice diagnostics that pinpoint each learner\'s strengths and gaps',
      },
      {
        '@type': 'Thing',
        name: 'AI Tutoring',
        description: 'Socratic tutoring that guides learners to the answer with hints and worked reasoning rather than shortcuts',
      },
      {
        '@type': 'Thing',
        name: 'Career & Subject Counselling',
        description: 'Evidence-based guidance on subject combinations and career pathways grounded in learner performance',
      },
      {
        '@type': 'Thing',
        name: 'Responsible AI for Learners',
        description: 'Building safe, privacy-preserving AI systems that keep teachers and parents in the loop',
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
