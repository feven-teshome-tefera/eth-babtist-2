'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Church, Users, TrendingUp, Heart } from 'lucide-react'

const stats = [
  {
    icon: Church,
    value: 143,
    label: 'Local Churches',
    description: 'Established across Ethiopia',
  },
  {
    icon: Users,
    value: 132456,
    label: 'Believers',
    description: 'Walking in faith',
  },
  {
    icon: TrendingUp,
    value: 30,
    suffix: '+',
    label: 'Churches Planted',
    description: 'Historically in a single period',
  },
  {
    icon: Heart,
    value: 65,
    suffix: '+',
    label: 'Years of Ministry',
    description: 'Faithful service since 1960',
  },
]

function AnimatedCounter({ 
  value, 
  suffix = '', 
  isVisible 
}: { 
  value: number
  suffix?: string
  isVisible: boolean 
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return (
    <span className="tabular-nums">
      {formatNumber(count)}{suffix}
    </span>
  )
}

export function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
            By God&apos;s Grace
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            The Impact of the Gospel
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto text-pretty">
            The current ministry footprint in the document reflects a denomination with longstanding
            gospel work, broad church presence, and a legacy of church planting in Ethiopia.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card 
                key={stat.label}
                className="border-0 bg-white/5 backdrop-blur-sm animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 animate-count-up">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      isVisible={isVisible} 
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gold mb-1">{stat.label}</h3>
                  <p className="text-sm text-white/60">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center animate-on-scroll">
          <blockquote className="text-xl italic text-white/80 max-w-4xl mx-auto">
            During its strongest seasons of missionary work, EBCE sent church planters to different parts
            of the country and planted as many as 30 local churches.
          </blockquote>
          <cite className="mt-4 block text-gold text-sm">— Historical ministry summary</cite>
        </div>
      </div>
    </section>
  )
}
