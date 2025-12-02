'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const logoVariants = [
  {
    name: 'Default',
    shape: 'none',
    bgColor: 'transparent',
    textColor: 'text-white',
    dotColor: 'from-cyan-400 via-purple-400 to-pink-400',
    className: 'p-0'
  },
  {
    name: 'Round',
    shape: 'rounded-full',
    bgColor: 'bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20',
    textColor: 'text-white',
    dotColor: 'from-cyan-400 via-purple-400 to-pink-400',
    className: 'p-8 w-32 h-32'
  },
  {
    name: 'Square',
    shape: 'rounded-lg',
    bgColor: 'bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20',
    textColor: 'text-white',
    dotColor: 'from-cyan-400 via-purple-400 to-pink-400',
    className: 'p-8'
  },
  {
    name: 'Cyan',
    shape: 'rounded-full',
    bgColor: 'bg-cyan-500/20',
    textColor: 'text-cyan-300',
    dotColor: 'from-cyan-300 to-cyan-500',
    className: 'p-8'
  },
  {
    name: 'Purple',
    shape: 'rounded-full',
    bgColor: 'bg-purple-500/20',
    textColor: 'text-purple-300',
    dotColor: 'from-purple-300 to-purple-500',
    className: 'p-8'
  },
  {
    name: 'Pink',
    shape: 'rounded-full',
    bgColor: 'bg-pink-500/20',
    textColor: 'text-pink-300',
    dotColor: 'from-pink-300 to-pink-500',
    className: 'p-8'
  },
  {
    name: 'Gradient Round',
    shape: 'rounded-full',
    bgColor: 'bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500',
    textColor: 'text-white',
    dotColor: 'from-white to-white',
    className: 'p-8'
  },
  {
    name: 'Gradient Square',
    shape: 'rounded-xl',
    bgColor: 'bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500',
    textColor: 'text-white',
    dotColor: 'from-white to-white',
    className: 'p-8'
  },
  {
    name: 'Outline Round',
    shape: 'rounded-full',
    bgColor: 'bg-transparent border-2 border-cyan-400',
    textColor: 'text-cyan-400',
    dotColor: 'from-cyan-400 to-purple-400',
    className: 'p-8'
  },
  {
    name: 'Outline Square',
    shape: 'rounded-lg',
    bgColor: 'bg-transparent border-2 border-purple-400',
    textColor: 'text-purple-400',
    dotColor: 'from-purple-400 to-pink-400',
    className: 'p-8'
  },
  {
    name: 'Dark Round',
    shape: 'rounded-full',
    bgColor: 'bg-black/50 border border-white/10',
    textColor: 'text-white',
    dotColor: 'from-cyan-400 via-purple-400 to-pink-400',
    className: 'p-8 w-32 h-32'
  },
  {
    name: 'Glass Round',
    shape: 'rounded-full',
    bgColor: 'bg-white/5 backdrop-blur-xl border border-white/10',
    textColor: 'text-white',
    dotColor: 'from-cyan-400 via-purple-400 to-pink-400',
    className: 'p-8 w-32 h-32'
  }
]

export default function LogosPage() {
  const router = useRouter()
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg')
  
  const getVariantKey = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, '-')
  }

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-8xl'
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            Logo Variants
          </h1>
          <p className="text-gray-400 mb-6">
            Các biến thể logo với nhiều kiểu dáng và màu sắc khác nhau
          </p>

          {/* Size Selector */}
          <div className="flex justify-center gap-4 mb-8">
            {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedSize === size
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {size.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {logoVariants.map((variant, index) => (
            <div
              key={index}
              onClick={() => router.push(`/logos/${getVariantKey(variant.name)}`)}
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
            >
              {/* Logo Container */}
              <div
                className={`${variant.shape} ${variant.bgColor} ${variant.className} ${variant.shape === 'rounded-full' ? 'w-32 h-32 aspect-square' : ''} flex items-center justify-center transition-all duration-300 hover:scale-105`}
              >
                <span
                  className={`${sizeClasses[selectedSize]} font-bold tracking-tighter ${variant.textColor} transition-all duration-300 group inline-flex items-center`}
                >
                  Zuna
                  <span
                    className={`inline-block ml-1 bg-gradient-to-b from-cyan-400 via-pink-400 to-purple-400 transition-all duration-300`}
                    style={{
                      width: selectedSize === 'sm' ? '3px' : selectedSize === 'md' ? '5px' : selectedSize === 'lg' ? '7px' : '9px',
                      height: selectedSize === 'sm' ? '24px' : selectedSize === 'md' ? '32px' : selectedSize === 'lg' ? '48px' : '64px',
                      borderRadius: selectedSize === 'sm' ? '1.5px' : selectedSize === 'md' ? '2.5px' : selectedSize === 'lg' ? '3.5px' : '4.5px'
                    }}
                  />
                </span>
              </div>

              {/* Variant Name */}
              <p className="text-sm text-gray-400 text-center">{variant.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

