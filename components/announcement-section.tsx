 'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { siteCopy, type Language } from '@/lib/site-copy'
import { type SiteAnnouncement, type SiteContent } from '@/lib/site-content'

export function AnnouncementSection({
  language,
  siteContent,
}: {
  language: Language
  siteContent: SiteContent
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const copy = siteCopy[language]
  const badge = (language === 'am' ? siteContent.announcementBadgeAm : siteContent.announcementBadgeEn).trim()
  const fallbackBadge = (language === 'am' ? siteContent.announcementBadgeEn : siteContent.announcementBadgeAm).trim()
  const label = badge || fallbackBadge || 'Announcement'

  const announcements = siteContent.announcements.filter((item) => {
    const title = getLocalizedText(item, language, 'title').trim()
    const body = getLocalizedText(item, language, 'body').trim()
    const imageUrl = item.imageUrl.trim()

    return Boolean(title || body || imageUrl)
  })
  const shouldCenterGroup = announcements.length <= 2

  if (announcements.length === 0) {
    return null
  }

  function scrollAnnouncements(direction: 'left' | 'right') {
    const container = scrollRef.current

    if (!container) {
      return
    }

    const amount = Math.max(container.clientWidth * 0.85, 320)
    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="announcements" className="bg-cream py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <span className="inline-block rounded-full bg-gold/15 px-4 py-1 text-sm font-medium text-navy">
              {label}
            </span>
            <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">{copy.announcement.title}</h2>
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Scroll announcements left"
            onClick={() => scrollAnnouncements('left')}
            className={`absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-white/95 text-navy shadow-md transition hover:bg-gold hover:text-navy lg:flex ${shouldCenterGroup ? 'lg:hidden' : ''}`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Scroll announcements right"
            onClick={() => scrollAnnouncements('right')}
            className={`absolute right-0 top-1/2 z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-white/95 text-navy shadow-md transition hover:bg-gold hover:text-navy lg:flex ${shouldCenterGroup ? 'lg:hidden' : ''}`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className={`-mx-4 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 ${shouldCenterGroup ? 'lg:overflow-x-visible' : ''}`}
          >
            <div className={`flex snap-x snap-mandatory gap-5 ${shouldCenterGroup ? 'lg:justify-center' : ''}`}>
              {announcements.map((item) => {
                const title = getLocalizedText(item, language, 'title').trim()
                const body = getLocalizedText(item, language, 'body').trim()
                const imageUrl = item.imageUrl.trim()

                return (
                  <Card
                    key={item.id}
                    className={`w-[85vw] min-w-[85vw] border-0 bg-white shadow-lg sm:w-[28rem] sm:min-w-[28rem] ${shouldCenterGroup ? 'snap-start' : 'snap-center'}`}
                  >
                    <CardContent className="flex h-full flex-col p-0">
                      {imageUrl ? (
                        <div className="h-48 overflow-hidden rounded-t-xl bg-muted/30">
                          <img
                            src={imageUrl}
                            alt={title || label}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : null}

                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <span className="inline-block w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-navy">
                          {label}
                        </span>
                        {title ? (
                          <h3 className="mt-4 text-xl font-bold text-navy text-balance">
                            {title}
                          </h3>
                        ) : null}
                        {body ? (
                          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {body}
                          </p>
                        ) : null}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function getLocalizedText(
  item: SiteAnnouncement,
  language: Language,
  field: 'title' | 'body',
) {
  if (field === 'title') {
    const preferred = language === 'am' ? item.titleAm : item.titleEn
    const fallback = language === 'am' ? item.titleEn : item.titleAm

    return preferred || fallback
  }

  const preferred = language === 'am' ? item.bodyAm : item.bodyEn
  const fallback = language === 'am' ? item.bodyEn : item.bodyAm

  return preferred || fallback
}
