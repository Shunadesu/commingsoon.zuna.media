'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import CountdownTimer from '@/components/CountdownTimer'
import SEO from '@/components/SEO'
import { generateOrganizationSchema, generateWebsiteSchema } from '@/utils/seo'

const Prism = dynamic(() => import('@/components/Prism'), { ssr: false })

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [daysLeft, setDaysLeft] = useState(8)

  useEffect(() => {
    setMounted(true)
    
    const targetDate = new Date('2025-12-10T10:00:00').getTime()
    const now = new Date().getTime()
    const difference = targetDate - now
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24))
    setDaysLeft(days > 0 ? days : 0)
  }, [])

  const structuredData = [
    generateOrganizationSchema(),
    generateWebsiteSchema()
  ]

  return (
    <>
      <SEO
        title="Coming Soon"
        description="Zuna is coming soon with amazing digital solutions and creative services. Stay tuned for our launch on December 10, 2025 at 10:00 AM."
        keywords="Zuna, coming soon, digital solutions, web development, creative services, launch, December 2025"
        type="website"
        structuredData={structuredData}
      />
      <main className="relative min-h-screen flex items-center justify-center">
      {/* Prism Background - Subtle */}
      {mounted && (
        <div className="absolute inset-0 w-full h-full z-0 opacity-30">
          <Prism
            animationType="rotate"
            timeScale={0.3}
            height={3.5}
            baseWidth={5.5}
            scale={2.8}
            hueShift={0}
            colorFrequency={1}
            noise={0.2}
            glow={0.8}
            transparent={true}
          />
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        {/* Logo */}
        <div className="mb-2 sm:mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 group inline-flex items-center">
            Zuna<span className="inline-block ml-1 sm:ml-2 bg-gradient-to-b from-cyan-400 via-pink-400 to-purple-400 transition-all duration-300" style={{ width: '6px', height: '48px', borderRadius: '3px' }}></span>
          </h1>
        </div>

        {/* Days Left */}
        <div className="mb-4 sm:mb-6">
          <p className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-300 mb-1.5 sm:mb-2">
            Comming Soon...
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center">
          <CountdownTimer />
        </div>
      </div>
    </main>
    </>
  )
}

