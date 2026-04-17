'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, Award, Calendar, ChevronDown, ChevronUp, Quote } from 'lucide-react'
import { useSiteCopy } from '@/components/language-provider'

export function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showFullMessage, setShowFullMessage] = useState(false)
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
    <section id="leadership" ref={sectionRef} className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="mb-4 inline-block rounded-full bg-gold/10 px-4 py-1 text-sm font-medium text-navy">
            {copy.leadership.badge}
          </span>
          <h2 className="text-3xl font-bold text-navy text-balance sm:text-4xl lg:text-5xl">
            {copy.leadership.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground text-pretty">
            {copy.leadership.intro}
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Card className="order-2 border-0 bg-cream shadow-lg animate-on-scroll lg:order-1">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <Quote className="h-8 w-8 text-gold" />
                <h3 className="text-xl font-bold text-navy">{copy.leadership.messageTitle}</h3>
              </div>

              <div className="prose prose-sm max-w-none text-foreground/80">
                {copy.leadership.messageIntro.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-relaxed first:mt-0">
                    {paragraph}
                  </p>
                ))}

                {showFullMessage &&
                  copy.leadership.messageFull.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={`mt-4 leading-relaxed ${index === copy.leadership.messageFull.length - 1 ? 'font-medium' : ''}`}
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>

              <Button
                variant="ghost"
                onClick={() => setShowFullMessage(!showFullMessage)}
                className="mt-6 gap-2 text-navy hover:text-gold"
              >
                {showFullMessage ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    {copy.leadership.readLess}
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    {copy.leadership.readFull}
                  </>
                )}
              </Button>

              <div className="mt-6 border-t border-border pt-6">
                <p className="font-semibold text-navy">{copy.leadership.name}</p>
                <p className="text-sm text-muted-foreground">{copy.leadership.role}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="order-1 border-0 bg-white shadow-lg animate-on-scroll lg:order-2">
            <CardContent className="p-8">
              <div className="relative mb-6">
                <div className="mx-auto flex aspect-[4/5] max-w-xs items-center justify-center overflow-hidden rounded-lg border border-border bg-navy/5">
                  <Image
                    src="/ChatGPT Image Apr 17, 2026, 07_43_52 PM.png"
                    alt={copy.leadership.profileAlt}
                    className="h-full w-full object-cover"
                    width={400}
                    height={500}
                  />
                </div>
              </div>

              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold text-navy">{copy.leadership.name}</h3>
                <p className="mt-1 font-medium text-gold">{copy.leadership.president}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-lg bg-cream p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5">
                    <Calendar className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{copy.leadership.servingSince}</p>
                    <p className="font-medium text-navy">2019</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg bg-cream p-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy/5">
                    <Award className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{copy.leadership.credentials}</p>
                    <p className="text-sm font-medium text-navy">{copy.leadership.credentialsValue}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-lg bg-cream p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5">
                    <Mail className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{copy.leadership.email}</p>
                    <a href="mailto:lejonahj@gmail.com" className="font-medium text-navy transition-colors hover:text-gold">
                      lejonahj@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-lg bg-cream p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5">
                    <Phone className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{copy.leadership.phone}</p>
                    <a href="tel:+251911679842" className="font-medium text-navy transition-colors hover:text-gold">
                      +251 911 679 842
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 animate-on-scroll">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold text-navy">{copy.leadership.affiliationsTitle}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{copy.leadership.affiliationsSubtitle}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Card className="border border-border/50 transition-colors hover:border-gold/50">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-navy/5">
                  <span className="text-2xl font-bold text-navy">BWA</span>
                </div>
                <p className="font-medium text-navy">Baptist World Alliance</p>
              </CardContent>
            </Card>
            <Card className="border border-border/50 transition-colors hover:border-gold/50">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-navy/5">
                  <span className="text-2xl font-bold text-navy">AABF</span>
                </div>
                <p className="font-medium text-navy">All African Baptist Fellowship</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <Card className="mx-auto max-w-3xl border-0 bg-muted/30">
            <CardContent className="p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">{copy.leadership.legal}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
