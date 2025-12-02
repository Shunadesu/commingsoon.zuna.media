<div align="center">

# ✨ Zuna Background - Coming Soon

**A stunning countdown landing page with WebGL Prism effects and logo showcase**

[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

</div>

---

## 🎯 Overview

Zuna Background is a beautiful coming soon page featuring a countdown timer to the official launch date. Built with Next.js 14, TypeScript, and WebGL-powered Prism effects for a stunning visual experience.

### 🌟 Key Highlights

- ⚡ **Next.js 14** - Latest React framework with App Router
- 🎨 **WebGL Prism** - Subtle animated background effect
- ⏰ **Countdown Timer** - Real-time countdown to launch date
- 🎭 **Logo Showcase** - Multiple logo variants with download feature
- 📱 **Fully Responsive** - Mobile-first design
- 🔍 **SEO Optimized** - Complete SEO implementation
- 🖼️ **Logo Generator** - Create and download logos for Facebook avatars

---

## 📸 Features

### 🎨 Main Page
- **Prism Background** - Subtle WebGL-powered 3D prism effect
- **Logo Display** - "Zuna" logo with gradient vertical bar
- **Countdown Timer** - Days, hours, minutes, seconds until launch
- **Days Counter** - "Còn X ngày nữa" display
- **Responsive Design** - Works perfectly on all devices

### 🎭 Logo Showcase
- **12 Logo Variants** - Round, square, gradient, colored variants
- **Size Selector** - SM, MD, LG, XL preview sizes
- **Detail View** - Click to view larger version
- **Download Feature** - Export logos as PNG with perfect circular clipping

### 🖼️ Avatar Generator
- **Facebook Avatar** - Create round logos for Facebook
- **Multiple Variants** - Round, Gradient, Cyan, Purple, Pink
- **Size Options** - 180x180, 360x360, 512x512
- **One-Click Download** - High-quality PNG export

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (or **yarn** / **pnpm**)

### Installation

```bash
# Navigate to background directory
cd background

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` 🎉

---

## 🛠️ Tech Stack

### Core Technologies

| Technology           | Version | Purpose                 |
| -------------------- | ------- | ----------------------- |
| **Next.js**          | 14.0.0  | React Framework          |
| **React**            | 18.2.0  | UI Library              |
| **TypeScript**       | 5.0.0   | Type Safety             |
| **Tailwind CSS**     | 3.3.6   | Utility-first CSS       |

### Libraries

| Technology       | Version | Purpose                          |
| ---------------- | ------- | -------------------------------- |
| **OGL**          | 1.0.11  | WebGL Library (Prism Effect)    |
| **html2canvas**  | 1.4.1   | Logo Export to PNG              |

---

## 📁 Project Structure

```
background/
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📂 avatar/              # Avatar generator page
│   │   │   └── page.tsx
│   │   ├── 📂 logos/                # Logo showcase
│   │   │   ├── page.tsx             # Logo variants list
│   │   │   └── [variant]/
│   │   │       └── page.tsx         # Logo detail page
│   │   ├── page.tsx                 # Main countdown page
│   │   ├── layout.tsx               # Root layout with metadata
│   │   └── globals.css               # Global styles
│   ├── 📂 components/
│   │   ├── CountdownTimer.tsx       # Countdown timer component
│   │   ├── Logo.tsx                 # Reusable logo component
│   │   ├── Prism.tsx                 # WebGL Prism effect
│   │   └── SEO.tsx                   # SEO component
│   └── 📂 utils/
│       └── seo.ts                    # SEO utilities
├── 📂 public/
│   ├── logozuna.png                 # Favicon
│   ├── robots.txt                    # SEO robots file
│   └── sitemap.xml                   # SEO sitemap
├── next.config.js                    # Next.js configuration
├── tailwind.config.js                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Dependencies
```

---

## 🎨 Design System

### Color Palette

Our design uses a **Prism-inspired gradient** color scheme:

```css
/* Primary Gradient */
from-cyan-400 via-purple-400 to-pink-400

/* Color Values */
Cyan:    #06b6d4 → #22d3ee
Purple:  #8b5cf6 → #a855f7
Pink:    #ec4899 → #f472b6
```

### Logo Design

- **Text**: "Zuna" in bold, white text
- **Vertical Bar**: Gradient bar (cyan → pink → purple) replacing the dot
- **Variants**: 12 different styles (round, square, gradient, colored)

---

## 🔥 Features

### ⏰ Countdown Page

- ✅ **Prism Background** - Subtle WebGL-powered 3D prism effect
- ✅ **Logo Display** - "Zuna" with gradient vertical bar
- ✅ **Days Counter** - "Còn X ngày nữa" display
- ✅ **Countdown Timer** - Real-time countdown (days, hours, minutes, seconds)
- ✅ **Responsive Design** - Mobile-first approach

### 🎭 Logo Showcase (`/logos`)

- ✅ **12 Logo Variants** - Default, Round, Square, Cyan, Purple, Pink, Gradient, Outline, Dark, Glass
- ✅ **Size Preview** - SM, MD, LG, XL size selector
- ✅ **Detail View** - Click to view larger version
- ✅ **Download Feature** - Export as PNG with perfect circular clipping

### 🖼️ Avatar Generator (`/avatar`)

- ✅ **Round Logo Creator** - Generate round logos for Facebook
- ✅ **5 Variants** - Round, Gradient, Cyan, Purple, Pink
- ✅ **3 Sizes** - 180x180 (Facebook), 360x360 (HD), 512x512 (High Res)
- ✅ **One-Click Download** - High-quality PNG export with transparent background

### 🔍 SEO

- ✅ **Meta Tags** - Complete Open Graph and Twitter Cards
- ✅ **Structured Data** - JSON-LD schemas (Organization, Website, Breadcrumb)
- ✅ **Sitemap** - XML sitemap for search engines
- ✅ **Robots.txt** - Search engine crawling rules
- ✅ **Dynamic SEO** - Page-specific meta tags

---

## 🎯 Pages & Routes

### Public Routes

- `/` - Main countdown page with logo and timer
- `/logos` - Logo variants showcase (12 variants)
- `/logos/[variant]` - Logo detail page with download
- `/avatar` - Facebook avatar logo generator

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site URL (optional, defaults to https://zunaweb.com)
NEXT_PUBLIC_SITE_URL=https://zunaweb.com
```

### Next.js Configuration

The project uses Next.js 14 with App Router:

- **Port**: `3000` (development)
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling

### Prism Effect Settings

The Prism component uses subtle settings:

```tsx
<Prism
  timeScale={0.3}      // Slow animation
  glow={0.8}          // Moderate glow
  opacity={0.3}       // Subtle appearance
/>
```

---

## 📦 Scripts

```bash
# Development
npm run dev          # Start dev server (port 3000)

# Build
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**:

```bash
npm i -g vercel
```

2. **Deploy**:

```bash
vercel
```

3. **Configure Environment Variables** (if needed):

   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add `NEXT_PUBLIC_SITE_URL` (optional)

### Other Platforms

The build output can be deployed to:

- **Netlify** - Connect GitHub repository
- **AWS Amplify** - Connect GitHub repository
- **Railway** - Connect GitHub repository
- **Any Node.js host** - Run `npm run build && npm start`

---

## 🎨 Customization

### Changing Countdown Date

Edit `src/app/page.tsx`:

```tsx
const targetDate = new Date('2025-12-10T10:00:00').getTime()
```

### Modifying Prism Effect

Edit `src/components/Prism.tsx` props:

```tsx
<Prism
  timeScale={0.3}      // Animation speed
  glow={0.8}          // Glow intensity
  height={3.5}        // Prism height
  baseWidth={5.5}     // Base width
/>
```

### Adding Logo Variants

Edit `src/app/logos/page.tsx`:

```tsx
const logoVariants = [
  {
    name: 'Your Variant',
    shape: 'rounded-full',
    bgColor: 'bg-your-color',
    // ... other properties
  }
]
```

---

## 🔍 SEO Implementation

### Meta Tags

All pages include:
- Title, description, keywords
- Open Graph tags (Facebook)
- Twitter Card tags
- Canonical URLs

### Structured Data

- **Organization Schema** - Company information
- **Website Schema** - Site-wide information
- **Breadcrumb Schema** - Navigation structure

### Files

- `public/robots.txt` - Search engine rules
- `public/sitemap.xml` - Site structure
- `src/components/SEO.tsx` - Dynamic SEO component

---

## 🧪 Performance Optimizations

### Implemented Optimizations

1. **Next.js Optimizations**
   - Automatic code splitting
   - Image optimization
   - Font optimization
   - Static generation where possible

2. **WebGL Performance**
   - Subtle Prism effect (low GPU usage)
   - Conditional rendering
   - Optimized shader code

3. **Logo Export**
   - High-quality canvas rendering (3x scale)
   - Perfect circular clipping
   - Transparent background

---

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Change port in package.json
"dev": "next dev -p 3001"
```

**Build errors:**

```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
```

**Logo export not working:**

- Ensure `html2canvas` is installed
- Check browser console for errors
- Try different browser (Chrome recommended)

---

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [OGL Documentation](https://github.com/oframe/ogl)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

Built with ❤️ by the Zuna Web Team

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [OGL](https://github.com/oframe/ogl) - Minimal WebGL library
- [html2canvas](https://html2canvas.hertzen.com/) - Screenshots with JavaScript

---

## ⏰ Countdown Target

**10:00 sáng ngày 10 tháng 12 năm 2025**

---

<div align="center">

**Made with ⚡ by [Zuna Web](https://zunaweb.com)**

[⬆ Back to Top](#-zuna-background---coming-soon)

</div>
