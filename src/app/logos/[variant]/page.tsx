'use client'

import { useParams, useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import SEO from '@/components/SEO'
import { generateBreadcrumbSchema } from '@/utils/seo'

const variants = {
  default: {
    name: 'Default',
    shape: 'none',
    bgColor: 'bg-transparent',
    textColor: 'text-white',
    dotColor: 'from-cyan-400 via-purple-400 to-pink-400',
    className: 'p-0'
  },
  round: {
    name: 'Round',
    shape: 'rounded-full',
    bgColor: 'bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20',
    textColor: 'text-white',
    dotColor: 'from-cyan-400 via-purple-400 to-pink-400',
    className: 'p-16 w-96 h-96'
  },
  square: {
    name: 'Square',
    shape: 'rounded-lg',
    bgColor: 'bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20',
    textColor: 'text-white',
    dotColor: 'from-cyan-400 via-purple-400 to-pink-400',
    className: 'p-16 w-96 h-96'
  },
  cyan: {
    name: 'Cyan',
    shape: 'rounded-full',
    bgColor: 'bg-cyan-500/20',
    textColor: 'text-cyan-300',
    dotColor: 'from-cyan-300 to-cyan-500',
    className: 'p-16 w-96 h-96'
  },
  purple: {
    name: 'Purple',
    shape: 'rounded-full',
    bgColor: 'bg-purple-500/20',
    textColor: 'text-purple-300',
    dotColor: 'from-purple-300 to-purple-500',
    className: 'p-16 w-96 h-96'
  },
  pink: {
    name: 'Pink',
    shape: 'rounded-full',
    bgColor: 'bg-pink-500/20',
    textColor: 'text-pink-300',
    dotColor: 'from-pink-300 to-pink-500',
    className: 'p-16 w-96 h-96'
  },
  'gradient-round': {
    name: 'Gradient Round',
    shape: 'rounded-full',
    bgColor: 'bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500',
    textColor: 'text-white',
    dotColor: 'from-white to-white',
    className: 'p-16 w-96 h-96'
  },
  'gradient-square': {
    name: 'Gradient Square',
    shape: 'rounded-xl',
    bgColor: 'bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500',
    textColor: 'text-white',
    dotColor: 'from-white to-white',
    className: 'p-16 w-96 h-96'
  },
  'outline-round': {
    name: 'Outline Round',
    shape: 'rounded-full',
    bgColor: 'bg-transparent border-2 border-cyan-400',
    textColor: 'text-cyan-400',
    dotColor: 'from-cyan-400 to-purple-400',
    className: 'p-16 w-96 h-96'
  },
  'outline-square': {
    name: 'Outline Square',
    shape: 'rounded-lg',
    bgColor: 'bg-transparent border-2 border-purple-400',
    textColor: 'text-purple-400',
    dotColor: 'from-purple-400 to-pink-400',
    className: 'p-16 w-96 h-96'
  },
  'dark-round': {
    name: 'Dark Round',
    shape: 'rounded-full',
    bgColor: 'bg-black/50 border border-white/10',
    textColor: 'text-white',
    dotColor: 'from-cyan-400 via-purple-400 to-pink-400',
    className: 'p-16 w-96 h-96'
  },
  'glass-round': {
    name: 'Glass Round',
    shape: 'rounded-full',
    bgColor: 'bg-white/5 backdrop-blur-xl border border-white/10',
    textColor: 'text-white',
    dotColor: 'from-cyan-400 via-purple-400 to-pink-400',
    className: 'p-16 w-96 h-96'
  }
}

export default function LogoDetailPage() {
  const params = useParams()
  const router = useRouter()
  const variantKey = params.variant as string
  const variant = variants[variantKey as keyof typeof variants]
  const logoRef = useRef<HTMLDivElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  if (!variant) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl mb-4">Logo không tồn tại</p>
          <button
            onClick={() => router.push('/logos')}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
          >
            Quay lại
          </button>
        </div>
      </main>
    )
  }

  const handleDownload = async () => {
    if (!logoRef.current) return

    setIsDownloading(true)
    try {
      // Get the logo element dimensions
      const logoElement = logoRef.current
      const size = logoElement.offsetWidth || 384
      
      const canvas = await html2canvas(logoElement, {
        backgroundColor: null,
        scale: 3,
        width: size,
        height: size,
        logging: false,
        useCORS: true,
        allowTaint: false
      })

      // Create a new canvas with exact square dimensions
      const finalCanvas = document.createElement('canvas')
      finalCanvas.width = size
      finalCanvas.height = size
      const ctx = finalCanvas.getContext('2d')
      
      if (ctx) {
        // Clear with transparent background
        ctx.clearRect(0, 0, size, size)
        
        // Draw the logo centered
        ctx.drawImage(canvas, 0, 0, size, size)
        
        // If it's a round logo, apply circular clipping
        if (variant.shape === 'rounded-full') {
          ctx.globalCompositeOperation = 'destination-in'
          ctx.beginPath()
          ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      const link = document.createElement('a')
      link.download = `zuna-logo-${variantKey}.png`
      link.href = finalCanvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('Error downloading logo:', error)
      alert('Có lỗi xảy ra khi tải logo. Vui lòng thử lại.')
    } finally {
      setIsDownloading(false)
    }
  }

  const structuredData = variant ? [
    generateBreadcrumbSchema([
      { name: 'Trang chủ', url: 'https://zunaweb.com' },
      { name: 'Logo Variants', url: 'https://zunaweb.com/logos' },
      { name: variant.name, url: `https://zunaweb.com/logos/${variantKey}` }
    ])
  ] : []

  return (
    <>
      {variant && (
        <SEO
          title={variant.name}
          description={`Tải logo ${variant.name} của Zuna với chất lượng cao. Logo ${variant.shape === 'rounded-full' ? 'tròn' : 'vuông'} phù hợp cho avatar, branding và nhiều mục đích khác.`}
          keywords={`Zuna logo ${variant.name}, ${variant.name} logo, logo download, brand logo, ${variant.shape === 'rounded-full' ? 'round logo' : 'square logo'}`}
          url={`https://zunaweb.com/logos/${variantKey}`}
          type="website"
          structuredData={structuredData}
        />
      )}
      <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={() => router.push('/logos')}
            className="mb-6 text-gray-400 hover:text-white transition-colors"
          >
            ← Quay lại
          </button>
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            {variant.name}
          </h1>
        </div>

        {/* Logo Preview */}
        <div className="flex flex-col items-center gap-8 mb-12">
          <div
            ref={logoRef}
            className={`${variant.shape} ${variant.bgColor} ${variant.className} flex items-center justify-center transition-all duration-300`}
          >
            <span
              className={`text-8xl font-bold tracking-tighter ${variant.textColor} transition-all duration-300 inline-flex items-center`}
            >
              Zuna
              <span
                className={`inline-block ml-2 bg-gradient-to-b from-cyan-400 via-pink-400 to-purple-400 transition-all duration-300`}
                style={{
                  width: '12px',
                  height: '96px',
                  borderRadius: '6px'
                }}
              />
            </span>
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? 'Đang tải...' : 'Tải Logo'}
          </button>
        </div>
      </div>
    </main>
    </>
  )
}

