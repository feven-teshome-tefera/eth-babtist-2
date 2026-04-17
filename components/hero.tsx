'use client'

import Link from 'next/link'
import { ChevronDown, Users, BookOpen, Church } from 'lucide-react'
import { useSiteCopy } from '@/components/language-provider'

export function Hero() {
  const copy = useSiteCopy()

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/ourchurch1.jpg")' }}
        />
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat blur-md"
          style={{ backgroundImage: 'url("/ourchurch1.jpg")' }}
        />
        <div className="absolute inset-0 bg-navy/35" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-navy/60" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-gold animate-pulse" />
          {copy.hero.badge}
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          {copy.hero.titleStart}{' '}
          <span className="text-gold">{copy.hero.titleHighlight}</span>{' '}
          {copy.hero.titleEnd}
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-white/80 sm:text-xl">
          {copy.hero.description}
        </p>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-lg border border-white/[0.15] bg-white/[0.08] p-6 backdrop-blur-sm">
            <Church className="h-8 w-8 text-gold" />
            <span className="text-3xl font-bold text-white">{copy.hero.stats[0].value}</span>
            <span className="text-sm text-white/70">{copy.hero.stats[0].label}</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border border-white/[0.15] bg-white/[0.08] p-6 backdrop-blur-sm">
            <Users className="h-8 w-8 text-gold" />
            <span className="text-3xl font-bold text-white">{copy.hero.stats[1].value}</span>
            <span className="text-sm text-white/70">{copy.hero.stats[1].label}</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border border-white/[0.15] bg-white/[0.08] p-6 backdrop-blur-sm">
            <BookOpen className="h-8 w-8 text-gold" />
            <span className="text-3xl font-bold text-white">{copy.hero.stats[2].value}</span>
            <span className="text-sm text-white/70">{copy.hero.stats[2].label}</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 flex justify-center">
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
        >
          <span className="text-xs uppercase tracking-wider">{copy.hero.scroll}</span>
          <ChevronDown className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
