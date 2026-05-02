'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, Award, Calendar, ChevronDown, ChevronUp, Quote } from 'lucide-react'
import { useLanguage, useSiteCopy } from '@/components/language-provider'
import {
  getLocalizedBoardChairMessage,
  getLocalizedMessage,
  getLocalizedServingSince,
  getMessageParagraphs,
  type SiteContent,
} from '@/lib/site-content'

export function LeadershipSection({ siteContent }: { siteContent: SiteContent }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [showFullMessage, setShowFullMessage] = useState(false)
  const [showFullBoardChairMessage, setShowFullBoardChairMessage] = useState(false)
  const { language } = useLanguage()
  const copy = useSiteCopy()
  const messageParagraphs = getMessageParagraphs(getLocalizedMessage(siteContent, language))
  const visibleParagraphs = messageParagraphs.slice(0, 3)
  const extraParagraphs = messageParagraphs.slice(3)
  const boardChairMessageParagraphs = getMessageParagraphs(getLocalizedBoardChairMessage(siteContent, language))
  const visibleBoardChairParagraphs = boardChairMessageParagraphs.slice(0, 3)
  const extraBoardChairParagraphs = boardChairMessageParagraphs.slice(3)

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

        <div className="space-y-8">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <Card className="border-0 bg-cream shadow-lg animate-on-scroll">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-3">
                  <Quote className="h-8 w-8 text-gold" />
                  <h3 className="text-xl font-bold text-navy">{copy.leadership.messageTitle}</h3>
                </div>

                <div className="prose prose-sm max-w-none text-foreground/80">
                  {visibleParagraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 leading-relaxed first:mt-0">
                      {paragraph}
                    </p>
                  ))}

                  {showFullMessage &&
                    extraParagraphs.map((paragraph, index) => (
                      <p
                        key={paragraph}
                        className={`mt-4 leading-relaxed ${index === extraParagraphs.length - 1 ? 'font-medium' : ''}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>

                {extraParagraphs.length > 0 && (
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
                )}

                <div className="mt-6 border-t border-border pt-6">
                  <p className="font-semibold text-navy">{siteContent.pastorName}</p>
                  <p className="text-sm text-muted-foreground">{siteContent.pastorRole}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-lg animate-on-scroll">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="mx-auto flex aspect-[4/5] max-w-xs items-center justify-center overflow-hidden rounded-lg border border-border bg-navy/5">
                    <img
                      src={siteContent.pastorPhotoUrl}
                      alt={copy.leadership.profileAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold text-navy">{siteContent.pastorName}</h3>
                  <p className="mt-1 font-medium text-gold">{copy.leadership.president}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-lg bg-cream p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5">
                      <Calendar className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{copy.leadership.servingSince}</p>
                      <p className="font-medium text-navy">
                        {getLocalizedServingSince(siteContent.servingSince, language)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-lg bg-cream p-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy/5">
                      <Award className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{copy.leadership.credentials}</p>
                      <p className="text-sm font-medium text-navy">{siteContent.credentials}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg bg-cream p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5">
                      <Mail className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{copy.leadership.email}</p>
                      <a href={`mailto:${siteContent.email}`} className="font-medium text-navy transition-colors hover:text-gold">
                        {siteContent.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-lg bg-cream p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5">
                      <Phone className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{copy.leadership.phone}</p>
                      <a href={`tel:${siteContent.phone.replace(/\s+/g, '')}`} className="font-medium text-navy transition-colors hover:text-gold">
                        {siteContent.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <Card className="border-0 bg-cream shadow-lg animate-on-scroll">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-3">
                  <Quote className="h-8 w-8 text-gold" />
                  <h3 className="text-xl font-bold text-navy">{copy.leadership.boardChairMessageTitle}</h3>
                </div>

                <div className="prose prose-sm max-w-none text-foreground/80">
                  {visibleBoardChairParagraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 leading-relaxed first:mt-0">
                      {paragraph}
                    </p>
                  ))}

                  {showFullBoardChairMessage &&
                    extraBoardChairParagraphs.map((paragraph, index) => (
                      <p
                        key={paragraph}
                        className={`mt-4 leading-relaxed ${index === extraBoardChairParagraphs.length - 1 ? 'font-medium' : ''}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>

                {extraBoardChairParagraphs.length > 0 && (
                  <Button
                    variant="ghost"
                    onClick={() => setShowFullBoardChairMessage(!showFullBoardChairMessage)}
                    className="mt-6 gap-2 text-navy hover:text-gold"
                  >
                    {showFullBoardChairMessage ? (
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
                )}
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-lg animate-on-scroll">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="mx-auto flex aspect-[4/5] max-w-xs items-center justify-center overflow-hidden rounded-lg border border-border bg-navy/5">
                    <img
                      src={siteContent.boardChairPhotoUrl}
                      alt={copy.leadership.boardChairProfileAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-navy">{siteContent.boardChairName}</h3>
                  <p className="mt-1 font-medium text-gold">{copy.leadership.boardChair}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{siteContent.boardChairRole}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20 animate-on-scroll">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold text-navy">{copy.leadership.affiliationsTitle}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{copy.leadership.affiliationsSubtitle}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {siteContent.affiliations.map((affiliation) => (
              <Card key={affiliation.id} className="border border-border/50 transition-colors hover:border-gold/50">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-navy/5">
                    {affiliation.logoUrl ? (
                      <img src={affiliation.logoUrl} alt={affiliation.fullName} className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-2xl font-bold text-navy">{affiliation.shortName}</span>
                    )}
                  </div>
                  <p className="font-medium text-navy">{affiliation.fullName}</p>
                </CardContent>
              </Card>
            ))}
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
