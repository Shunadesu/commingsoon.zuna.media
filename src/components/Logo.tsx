'use client'

import { forwardRef } from 'react'

interface LogoProps {
  size?: number
  variant?: 'default' | 'round' | 'gradient' | 'cyan' | 'purple' | 'pink'
  className?: string
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ size = 180, variant = 'round', className = '' }, ref) => {
    const variants = {
      default: {
        bg: 'bg-transparent',
        text: 'text-white',
        dot: 'from-cyan-400 via-purple-400 to-pink-400',
        border: ''
      },
      round: {
        bg: 'bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20',
        text: 'text-white',
        dot: 'from-cyan-400 via-purple-400 to-pink-400',
        border: ''
      },
      gradient: {
        bg: 'bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500',
        text: 'text-white',
        dot: 'from-white to-white',
        border: ''
      },
      cyan: {
        bg: 'bg-cyan-500/20',
        text: 'text-cyan-300',
        dot: 'from-cyan-300 to-cyan-500',
        border: ''
      },
      purple: {
        bg: 'bg-purple-500/20',
        text: 'text-purple-300',
        dot: 'from-purple-300 to-purple-500',
        border: ''
      },
      pink: {
        bg: 'bg-pink-500/20',
        text: 'text-pink-300',
        dot: 'from-pink-300 to-pink-500',
        border: ''
      }
    }

    const currentVariant = variants[variant]
    const fontSize = size * 0.4 // Tỷ lệ font size so với container

    return (
      <div
        ref={ref}
        className={`rounded-full ${currentVariant.bg} ${currentVariant.border} flex items-center justify-center ${className}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          minWidth: `${size}px`,
          minHeight: `${size}px`
        }}
      >
        <span
          className={`font-bold tracking-tighter ${currentVariant.text} transition-all duration-300`}
          style={{ fontSize: `${fontSize}px` }}
        >
          Zuna
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${currentVariant.dot} transition-all duration-300`}
          >
            .
          </span>
        </span>
      </div>
    )
  }
)

Logo.displayName = 'Logo'

export default Logo

