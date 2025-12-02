'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  siteName?: string
  structuredData?: object | object[]
}

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  siteName = 'Zuna - Coming Soon',
  structuredData
}: SEOProps) => {
  const pathname = usePathname()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zunaweb.com'
  const fullUrl = url || `${baseUrl}${pathname}`
  const ogImage = image || `${baseUrl}/og-image.jpg`
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Digital Solutions`

  useEffect(() => {
    // Update document title
    document.title = fullTitle

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }

    // Basic meta tags
    if (description) {
      updateMetaTag('description', description)
    }
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true)
    if (description) {
      updateMetaTag('og:description', description, true)
    }
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:url', fullUrl, true)
    updateMetaTag('og:image', ogImage, true)
    updateMetaTag('og:site_name', siteName, true)
    updateMetaTag('og:locale', 'vi_VN', true)

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', fullTitle)
    if (description) {
      updateMetaTag('twitter:description', description)
    }
    updateMetaTag('twitter:image', ogImage)

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', fullUrl)

    // Structured Data (JSON-LD)
    if (structuredData) {
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
      existingScripts.forEach(script => script.remove())
      
      // Handle array or single object
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData]
      
      // Create script for each structured data object
      dataArray.forEach((data) => {
        const script = document.createElement('script')
        script.setAttribute('type', 'application/ld+json')
        script.textContent = JSON.stringify(data)
        document.head.appendChild(script)
      })
    }
  }, [title, description, keywords, image, url, type, siteName, structuredData, fullTitle, fullUrl, ogImage, pathname])

  return null
}

export default SEO

