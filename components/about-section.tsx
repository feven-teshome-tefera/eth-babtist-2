'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Church, Cross, Book, Users, Globe } from 'lucide-react'
import Image from 'next/image'
import { useLanguage, useSiteCopy } from '@/components/language-provider'

const timelineIcons = [Church, Church, Church, Book, Cross, Users, Globe, Church]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { language } = useLanguage()
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
  }, [language])

  return (
    <section id="about" ref={sectionRef} className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="mb-4 inline-block rounded-full bg-gold/10 px-4 py-1 text-sm font-medium text-navy">
            {copy.about.badge}
          </span>
          <h2 className="text-3xl font-bold text-navy text-balance sm:text-4xl lg:text-5xl">
            {copy.about.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground text-pretty">
            {copy.about.intro}
          </p>
        </div>

        <Card className="mb-16 border-0 bg-cream shadow-lg animate-on-scroll">
          <CardContent className="p-8 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-navy">{copy.about.legacyTitle}</h3>
                <p className="mb-4 leading-relaxed text-foreground/80">{copy.about.paragraph1}</p>
                <p className="leading-relaxed text-foreground/80">{copy.about.paragraph2}</p>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1555892727-55b51e5fceae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D"
                  alt={copy.about.imageAlt}
                  className="mb-4 h-full w-full rounded-lg object-cover"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold text-navy sm:text-3xl">{copy.about.historyTitle}</h3>
          <p className="mt-2 text-muted-foreground">{copy.about.historySubtitle}</p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-gold via-navy to-gold lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-6 lg:space-y-8">
            {copy.about.timeline.map((event, index) => {
              const Icon = timelineIcons[index]
              const isLeft = index % 2 === 0

              return (
                <div
                  key={`timeline-${index}`}
                  className={`relative flex items-start gap-4 animate-on-scroll ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center lg:left-1/2">
                    <div className="h-4 w-4 rounded-full border-4 border-white bg-gold shadow-md" />
                  </div>

                  <div className={`ml-14 lg:ml-0 lg:w-[calc(50%-1.25rem)] ${isLeft ? 'lg:pr-5' : 'lg:pl-5'}`}>
                    <Card className="border border-border/50 transition-colors hover:border-gold/50 hover:shadow-md">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy/5">
                            <Icon className="h-5 w-5 text-navy" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="mb-1.5 flex items-center gap-3">
                              <span className="inline-flex items-center rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-navy">
                                {event.year}
                              </span>
                            </div>
                            <h4 className="mb-1.5 text-base font-semibold text-navy">{event.title}</h4>
                            <p className="text-sm leading-relaxed text-foreground/70">{event.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden lg:block lg:w-[calc(50%-1.25rem)]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
