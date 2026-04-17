'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Church, Cross, Book, Users, Globe } from 'lucide-react'
import Image from 'next/image'
const timelineEvents = [
  {
    year: '1960',
    title: 'Church Planted',
    description: 'Emmanuel Baptist Church was planted in Addis Ababa by missionaries of the Baptist Bible Fellowship (BBF) from the United States.',
    icon: Church,
  },
  {
    year: '1962',
    title: 'Building Erected',
    description: 'A four-story building was erected on land in Arat Kilo, establishing a permanent home for the church.',
    icon: Church,
  },
  {
    year: '1963',
    title: 'New Home',
    description: 'The church moved into the new building, marking a significant milestone in its growth.',
    icon: Church,
  },
  {
    year: '1963',
    title: 'Bible School Founded',
    description: 'A Bible school called "Baptist Bible Institute" was established to train ministers and church leaders.',
    icon: Book,
  },
  {
    year: '1981',
    title: 'Period of Trial',
    description: 'The church building was confiscated without compensation during a time of political upheaval.',
    icon: Cross,
  },
  {
    year: '1981-1991',
    title: 'Underground Faith',
    description: 'The church continued faithfully through scattered underground meetings, demonstrating remarkable perseverance.',
    icon: Users,
  },
  {
    year: '1991',
    title: 'Freedom Restored',
    description: 'Religious freedom returned to Ethiopia, though the original church buildings were not returned.',
    icon: Globe,
  },
  {
    year: 'Today',
    title: 'Growing Denomination',
    description: 'Today the denomination operates with nearly 143 local churches, continuing to plant churches and make disciples across Ethiopia.',
    icon: Church,
  },
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 bg-gold/10 text-navy rounded-full text-sm font-medium mb-4">
            Our Heritage
          </span>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl text-balance">
            About Emmanuel Baptist Church
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            The history of Emmanuel Baptist Church of Ethiopia is marked by gospel witness, doctrinal
            conviction, persecution, perseverance, and ongoing church multiplication across the country.
          </p>
        </div>

        {/* Introduction Card */}
        <Card className="mb-16 border-0 shadow-lg bg-cream animate-on-scroll">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">A Legacy of Faithfulness</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Emmanuel Baptist Church was planted in 1960 in Addis Ababa by missionaries of the Baptist
                  Bible Fellowship from the United States. In 1962, a four-story church building was erected
                  at Arat Kilo on land granted by Emperor Haile Selassie I, and the congregation moved there in 1963.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The ministry later included the Baptist Bible Institute, where many Ethiopian ministers were
                  trained. Even after the building was confiscated in 1981 and the church was forced into
                  scattered underground gatherings, the work continued. Today EBCE serves through 143 local
                  churches and continues to preach the Gospel, disciple believers, and strengthen churches.
                </p>
              </div>
              <div className="relative">
                {/* Placeholder for about image */}
                {/* <div className="aspect-[4/3] rounded-lg bg-navy/10 flex items-center justify-center border border-border"> */}
                  {/* <div className="text-center p-8"> */}
                    <Image
                      src="https://images.unsplash.com/photo-1555892727-55b51e5fceae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Historical ministry photo"
                      className="rounded-lg object-cover w-full h-full mb-4"
                      width={400}
                      height={300}
                    />
                    {/* <Church className="h-16 w-16 text-navy/30 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">
                      Historical ministry photo
                    </p> */}
                  {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="mb-8 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold text-navy sm:text-3xl">Our History</h3>
          <p className="mt-2 text-muted-foreground">Key moments in the life of EBCE</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-navy to-gold lg:-translate-x-1/2" />

          {/* Timeline events */}
          <div className="space-y-6 lg:space-y-8">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isLeft = index % 2 === 0

              return (
                <div
                  key={`${event.year}-${index}`}
                  className={`relative flex items-start gap-4 animate-on-scroll ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 w-8 h-8 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-gold border-4 border-white shadow-md" />
                  </div>

                  {/* Content card */}
                  <div className={`ml-14 lg:ml-0 lg:w-[calc(50%-1.25rem)] ${isLeft ? 'lg:pr-5' : 'lg:pl-5'}`}>
                    <Card className="border border-border/50 hover:border-gold/50 transition-colors hover:shadow-md">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-navy" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-1.5">
                              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/10 text-navy text-xs font-semibold">
                                {event.year}
                              </span>
                            </div>
                            <h4 className="text-base font-semibold text-navy mb-1.5">{event.title}</h4>
                            <p className="text-foreground/70 text-sm leading-relaxed">{event.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for opposite side on desktop */}
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
