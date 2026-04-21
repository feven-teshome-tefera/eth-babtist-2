'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react'
import { useSiteCopy } from '@/components/language-provider'

export function FaithSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showExtended, setShowExtended] = useState(false)
  const copy = useSiteCopy()
  const visibleArticles = showExtended ? copy.faith.articles : copy.faith.articles.slice(0, 4)

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

  const handleToggleExtended = () => {
    setShowExtended((current) => !current)
  }

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

            <div className="space-y-1">
              {visibleArticles.map((article, index) => (
                <div key={article.title} className="border-b border-border py-4 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div className="min-w-0 text-left">
                      <h4 className="font-semibold text-navy">{article.title}</h4>
                      <p className="mt-2 leading-relaxed text-foreground/80">
                        {showExtended ? article.extended : article.summary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center border-t border-border pt-6">
              <Button variant="outline" onClick={handleToggleExtended} className="gap-2">
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
