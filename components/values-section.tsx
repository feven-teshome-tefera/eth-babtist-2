'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { 
  BookOpen, 
  Cross, 
  Users, 
  Church, 
  Heart, 
  Crown,
  Globe
} from 'lucide-react'

const coreValues = [
  {
    icon: BookOpen,
    title: 'Biblical Authority',
    description: 'We believe the Holy Bible is the inspired, infallible, and authoritative Word of God and the final standard for faith, doctrine, and ministry.',
  },
  {
    icon: Cross,
    title: 'Christ-Centered Gospel',
    description: 'We are committed to faithfully proclaiming the Gospel of Jesus Christ as the only way of salvation for all people.',
  },
  {
    icon: Users,
    title: 'Disciple-Making',
    description: 'We prioritize making true disciples who grow in spiritual maturity, obey Christ’s commands, and disciple others.',
  },
  {
    icon: Church,
    title: 'Healthy Local Churches',
    description: 'We are committed to planting and strengthening biblical, healthy, and reproducing local churches.',
  },
  {
    icon: Heart,
    title: 'Prayer and Dependence',
    description: 'We believe that effective ministry depends on prayer and the power of the Holy Spirit.',
  },
  {
    icon: Crown,
    title: 'Servant Leadership',
    description: 'We value humble, godly, and accountable leadership that reflects the character of Christ.',
  },
  {
    icon: Globe,
    title: 'Mission & Multiplication',
    description: 'We are committed to evangelism, missions, and multiplying churches among all peoples.',
  },
]

export function ValuesSection() {
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
    <section id="values" ref={sectionRef} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 bg-gold/10 text-navy rounded-full text-sm font-medium mb-4">
            What We Stand For
          </span>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl text-balance">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            These core values are taken from the ministry requirements and define how EBCE approaches
            doctrine, leadership, discipleship, and church multiplication.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {coreValues.map((value, index) => {
            const Icon = value.icon
            return (
              <Card 
                key={value.title}
                className="border border-border/50 hover:border-gold/50 hover:shadow-lg transition-all group animate-on-scroll"
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 w-14 h-14 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Icon className="h-7 w-7 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
