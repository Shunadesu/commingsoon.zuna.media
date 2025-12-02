'use client'

import { useRef, useState } from 'react'
import Logo from '@/components/Logo'
import html2canvas from 'html2canvas'

const variants = [
  { name: 'Round', value: 'round' as const },
  { name: 'Gradient', value: 'gradient' as const },
  { name: 'Cyan', value: 'cyan' as const },
  { name: 'Purple', value: 'purple' as const },
  { name: 'Pink', value: 'pink' as const }
]

const sizes = [
  { name: '180x180 (Facebook)', value: 180 },
  { name: '360x360 (HD)', value: 360 },
  { name: '512x512 (High Res)', value: 512 }
]

export default function AvatarPage() {
  const [selectedVariant, setSelectedVariant] = useState<'round' | 'gradient' | 'cyan' | 'purple' | 'pink'>('round')
  const [selectedSize, setSelectedSize] = useState(180)
  const [isDownloading, setIsDownloading] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!logoRef.current) return

    setIsDownloading(true)
    try {
      const logoElement = logoRef.current
      
      const canvas = await html2canvas(logoElement, {
        backgroundColor: null,
        scale: 3,
        width: selectedSize,
        height: selectedSize,
        logging: false,
        useCORS: true,
        allowTaint: false
      })

      // Create a new canvas with exact square dimensions
      const finalCanvas = document.createElement('canvas')
      finalCanvas.width = selectedSize
      finalCanvas.height = selectedSize
      const ctx = finalCanvas.getContext('2d')
      
      if (ctx) {
        // Clear with transparent background
        ctx.clearRect(0, 0, selectedSize, selectedSize)
        
        // Draw the logo centered
        ctx.drawImage(canvas, 0, 0, selectedSize, selectedSize)
        
        // Apply circular clipping for round logo
        ctx.globalCompositeOperation = 'destination-in'
        ctx.beginPath()
        ctx.arc(selectedSize / 2, selectedSize / 2, selectedSize / 2, 0, Math.PI * 2)
        ctx.fill()
      }

      const link = document.createElement('a')
      link.download = `zuna-logo-${selectedVariant}-${selectedSize}x${selectedSize}.png`
      link.href = finalCanvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('Error downloading logo:', error)
      alert('Có lỗi xảy ra khi tải logo. Vui lòng thử lại.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            Logo Avatar Facebook
          </h1>
          <p className="text-gray-400 mb-6">
            Tạo và tải logo tròn cho avatar Facebook
          </p>
        </div>

        {/* Preview Section */}
        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <Logo
              ref={logoRef}
              size={selectedSize}
              variant={selectedVariant}
            />
          </div>

          {/* Controls */}
          <div className="w-full max-w-md space-y-6">
            {/* Variant Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Kiểu Logo
              </label>
              <div className="grid grid-cols-3 gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.value}
                    onClick={() => setSelectedVariant(variant.value)}
                    className={`px-4 py-3 rounded-lg transition-all ${
                      selectedVariant === variant.value
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Kích Thước
              </label>
              <div className="space-y-2">
                {sizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setSelectedSize(size.value)}
                    className={`w-full px-4 py-3 rounded-lg transition-all text-left ${
                      selectedSize === size.value
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? 'Đang tải...' : 'Tải Logo'}
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="text-center text-gray-400 text-sm">
          <p>Logo sẽ được tải về với định dạng PNG, sẵn sàng để sử dụng làm avatar Facebook</p>
        </div>
      </div>
    </main>
  )
}

