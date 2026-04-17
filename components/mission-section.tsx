'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Target, 
  Compass, 
  Map, 
  Megaphone, 
  BookOpen, 
  Church, 
  Heart
} from 'lucide-react'

const ministryStrategy = [
  {
    icon: Megaphone,
    title: 'Evangelism',
    description: 'Faithfully proclaiming the Gospel of Jesus Christ to all people',
  },
  {
    icon: BookOpen,
    title: 'Discipleship',
    description: 'Equipping believers through biblical teaching, mentoring, and spiritual formation',
  },
  {
    icon: Church,
    title: 'Church Planting',
    description: 'Planting and strengthening biblically faithful and multiplying local churches',
  },
]

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
    <section id="mission" ref={sectionRef} className="pt-24 pb-12 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 bg-navy/10 text-navy rounded-full text-sm font-medium mb-4">
            Our Purpose
          </span>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl text-balance">
            Vision, Mission & Strategy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            The document emphasizes a Great Commission ministry shaped by biblical teaching, leadership
            development, church strengthening, and mission among unreached people.
          </p>
        </div>

        {/* Vision & Mission Tabs */}
        <div className="animate-on-scroll">
          <Tabs defaultValue="vision" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 h-12 bg-navy/5">
              <TabsTrigger value="vision" className="data-[state=active]:bg-navy data-[state=active]:text-white">
                Vision
              </TabsTrigger>
              <TabsTrigger value="mission" className="data-[state=active]:bg-navy data-[state=active]:text-white">
                Mission
              </TabsTrigger>
              <TabsTrigger value="strategy" className="data-[state=active]:bg-navy data-[state=active]:text-white">
                Strategy
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vision" className="mt-8">
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center">
                      <Target className="h-10 w-10 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
                      <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
                        Our vision is to glorify God by faithfully preaching the Gospel, making true
                        disciples of Jesus Christ, and planting biblical, healthy churches that transform
                        communities and advance the Kingdom of God.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mission" className="mt-8">
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center">
                      <Compass className="h-10 w-10 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
                      <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
                        Our mission is to proclaim the Gospel of Jesus Christ, disciple believers to grow
                        in biblical faith and obedience, and establish and strengthen healthy local churches
                        that faithfully teach the Word of God and reproduce new disciples and churches.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="strategy" className="mt-8">
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center">
                      <Map className="h-10 w-10 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-navy mb-2">Ministry Strategy</h3>
                      <p className="text-muted-foreground mb-6">
                        Our ministry strategy follows the biblical mandate of the Great Commission.
                      </p>
                      <div className="grid gap-6 sm:grid-cols-3">
                        {ministryStrategy.map((item) => {
                          const Icon = item.icon
                          return (
                            <div key={item.title} className="flex flex-col items-start gap-3 p-4 rounded-lg bg-cream">
                              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center">
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
