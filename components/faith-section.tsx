'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react'
import { useSiteCopy } from '@/components/language-provider'

export function FaithSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showExtended, setShowExtended] = useState(false)
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
    <section id="faith" ref={sectionRef} className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="mb-4 inline-block rounded-full bg-navy/10 px-4 py-1 text-sm font-medium text-navy">
            {copy.faith.badge}
          </span>
          <h2 className="text-3xl font-bold text-navy text-balance sm:text-4xl lg:text-5xl">
            {copy.faith.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground text-pretty">
            {copy.faith.intro}
          </p>
        </div>

        <Card className="mx-auto max-w-4xl border-0 bg-white shadow-lg animate-on-scroll">
          <CardContent className="p-6 lg:p-8">
            <div className="mb-8 flex items-center gap-4 border-b border-border pb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                <BookOpen className="h-7 w-7 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy">{copy.faith.articlesTitle}</h3>
                <p className="text-sm text-muted-foreground">{copy.faith.articlesSubtitle}</p>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {copy.faith.articles.map((article, index) => (
                <AccordionItem key={article.title} value={`item-${index}`}>
                  <AccordionTrigger className="py-4 text-left hover:no-underline">
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <div className="text-left">
                        <h4 className="font-semibold text-navy">{article.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{article.summary}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-12">
                    <p className="pb-2 leading-relaxed text-foreground/80">
                      {showExtended ? article.extended : article.summary}
                    </p>
                    {showExtended && (
                      <p className="mt-2 text-sm italic text-muted-foreground">
                        {copy.faith.extendedHint}
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 flex items-center justify-center border-t border-border pt-6">
              <Button variant="outline" onClick={() => setShowExtended(!showExtended)} className="gap-2">
                {showExtended ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    {copy.faith.showSummary}
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    {copy.faith.showExtended}
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
