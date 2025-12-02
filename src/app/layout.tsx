import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zuna - Coming Soon | Digital Solutions',
  description: 'Zuna is coming soon with amazing digital solutions and creative services. Stay tuned for our launch on December 10, 2025.',
  keywords: 'Zuna, digital solutions, web development, creative services, coming soon, Vietnam',
  authors: [{ name: 'Zuna' }],
  creator: 'Zuna',
  publisher: 'Zuna',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://zunaweb.com',
    siteName: 'Zuna - Coming Soon',
    title: 'Zuna - Coming Soon | Digital Solutions',
    description: 'Zuna is coming soon with amazing digital solutions and creative services. Stay tuned for our launch on December 10, 2025.',
    images: [
      {
        url: 'https://zunaweb.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zuna - Coming Soon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zuna - Coming Soon | Digital Solutions',
    description: 'Zuna is coming soon with amazing digital solutions and creative services.',
    images: ['https://zunaweb.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://zunaweb.com',
  },
  metadataBase: new URL('https://zunaweb.com'),
  icons: {
    icon: '/logozuna.png',
    apple: '/logozuna.png',
    shortcut: '/logozuna.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}

