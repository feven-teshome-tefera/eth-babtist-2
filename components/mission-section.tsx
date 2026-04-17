'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Target, Compass, Map, Megaphone, BookOpen, Church } from 'lucide-react'
import { useSiteCopy } from '@/components/language-provider'

const strategyIcons = [Megaphone, BookOpen, Church]

export function MissionSection() {
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
    <section id="mission" ref={sectionRef} className="bg-cream pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="mb-4 inline-block rounded-full bg-navy/10 px-4 py-1 text-sm font-medium text-navy">
            {copy.mission.badge}
          </span>
          <h2 className="text-3xl font-bold text-navy text-balance sm:text-4xl lg:text-5xl">
            {copy.mission.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground text-pretty">
            {copy.mission.intro}
          </p>
        </div>

        <div className="animate-on-scroll">
          <Tabs defaultValue="vision" className="w-full">
            <TabsList className="mx-auto grid h-12 w-full max-w-md grid-cols-3 bg-navy/5">
              <TabsTrigger value="vision" className="data-[state=active]:bg-navy data-[state=active]:text-white">
                {copy.mission.tabs.vision}
              </TabsTrigger>
              <TabsTrigger value="mission" className="data-[state=active]:bg-navy data-[state=active]:text-white">
                {copy.mission.tabs.mission}
              </TabsTrigger>
              <TabsTrigger value="strategy" className="data-[state=active]:bg-navy data-[state=active]:text-white">
                {copy.mission.tabs.strategy}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vision" className="mt-8">
              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col items-start gap-8 lg:flex-row">
                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <Target className="h-10 w-10 text-gold" />
                    </div>
                    <div>
                      <h3 className="mb-4 text-2xl font-bold text-navy">{copy.mission.visionTitle}</h3>
                      <p className="text-lg leading-relaxed text-foreground/80 text-pretty">
                        {copy.mission.visionText}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mission" className="mt-8">
              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col items-start gap-8 lg:flex-row">
                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <Compass className="h-10 w-10 text-gold" />
                    </div>
                    <div>
                      <h3 className="mb-4 text-2xl font-bold text-navy">{copy.mission.missionTitle}</h3>
                      <p className="text-lg leading-relaxed text-foreground/80 text-pretty">
                        {copy.mission.missionText}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="strategy" className="mt-8">
              <Card className="border-0 bg-white shadow-lg">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col items-start gap-8 lg:flex-row">
                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <Map className="h-10 w-10 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-2xl font-bold text-navy">{copy.mission.strategyTitle}</h3>
                      <p className="mb-6 text-muted-foreground">{copy.mission.strategyText}</p>
                      <div className="grid gap-6 sm:grid-cols-3">
                        {copy.mission.strategyItems.map((item, index) => {
                          const Icon = strategyIcons[index]
                          return (
                            <div key={item.title} className="flex flex-col items-start gap-3 rounded-lg bg-cream p-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5">
                                <Icon className="h-6 w-6 text-navy" />
                              </div>
                              <h4 className="font-semibold text-navy">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
