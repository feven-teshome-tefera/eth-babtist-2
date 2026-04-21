'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, Cross, Users, Church, Heart, Crown, Globe } from 'lucide-react'
import { useSiteCopy } from '@/components/language-provider'

const valueIcons = [BookOpen, Cross, Users, Church, Heart, Crown, Globe]

export function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const copy = useSiteCopy()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="values" ref={sectionRef} className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="mb-4 inline-block rounded-full bg-gold/10 px-4 py-1 text-sm font-medium text-navy">
            {copy.values.badge}
          </span>
          <h2 className="text-3xl font-bold text-navy text-balance sm:text-4xl lg:text-5xl">
            {copy.values.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground text-pretty">
            {copy.values.intro}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {copy.values.items.map((value, index) => {
            const Icon = valueIcons[index]
            return (
              <Card
                key={value.title}
                className="group border border-border/50 transition-all hover:border-gold/50 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-navy/5 transition-colors group-hover:bg-gold/10">
                    <Icon className="h-7 w-7 text-navy transition-colors group-hover:text-gold" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-navy">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
