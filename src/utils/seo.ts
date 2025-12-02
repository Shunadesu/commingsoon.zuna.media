// SEO utility functions for generating structured data

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zunaweb.com'

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zuna',
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description: 'Digital Solutions & Creative Services',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+84-xxx-xxx-xxxx',
    contactType: 'customer service',
    areaServed: 'VN',
    availableLanguage: ['Vietnamese']
  }
})

export const generateWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zuna - Coming Soon',
  url: baseUrl,
  description: 'Zuna is coming soon with amazing digital solutions',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${baseUrl}/search?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
})

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})

