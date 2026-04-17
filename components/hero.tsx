'use client'

import Link from 'next/link'
import { ChevronDown, Users, BookOpen, Church } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-navy">
        {/* Placeholder for hero background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%231a2744' width='1200' height='800'/%3E%3Ctext x='600' y='400' text-anchor='middle' fill='%23ffffff20' font-size='24' font-family='sans-serif'%3EHero Image Placeholder%3C/text%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm border border-white/10">
          <span className="inline-block h-2 w-2 rounded-full bg-gold animate-pulse" />
          Serving Ethiopia since 1960
        </div>

        {/* Main Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Proclaiming the Gospel.{' '}
          <span className="text-gold">Making Disciples.</span>{' '}
          Planting Healthy Churches.
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80 sm:text-xl leading-relaxed text-pretty">
          Emmanuel Baptist Church of Ethiopia is a gospel-centered Baptist denomination serving Ethiopia
          since 1960, committed to proclaiming Christ, making true disciples, and strengthening and
          planting biblical local churches.
        </p>

        {/* Quick stats preview */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2 rounded-lg bg-white/5 backdrop-blur-sm p-6 border border-white/10">
            <Church className="h-8 w-8 text-gold" />
            <span className="text-3xl font-bold text-white">143</span>
            <span className="text-sm text-white/70">Local Churches</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg bg-white/5 backdrop-blur-sm p-6 border border-white/10">
            <Users className="h-8 w-8 text-gold" />
            <span className="text-3xl font-bold text-white">132,456</span>
            <span className="text-sm text-white/70">Believers Nationwide</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg bg-white/5 backdrop-blur-sm p-6 border border-white/10">
            <BookOpen className="h-8 w-8 text-gold" />
            <span className="text-3xl font-bold text-white">65+</span>
            <span className="text-sm text-white/70">Years of Ministry</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-12 flex justify-center">
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
