import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zuna - Coming Soon',
  description: 'Zuna is coming soon',
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

