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

const statementOfFaith = [
  {
    title: 'The Bible',
    summary: 'We believe the Holy Bible is the inspired, infallible, and authoritative Word of God and the final authority for faith and practice.',
    extended: 'We believe the sixty-six books of the Old and New Testaments are God-breathed Scripture and the final standard for faith, doctrine, and ministry.',
  },
  {
    title: 'God',
    summary: 'We believe there is one true God who eternally exists in three persons: the Father, the Son, and the Holy Spirit.',
    extended: 'We believe in the one living and true God, Creator of heaven and earth, eternally existing as Father, Son, and Holy Spirit.',
  },
  {
    title: 'Jesus Christ',
    summary: 'We believe that Jesus Christ is the Son of God, fully God and fully man, who lived, died, rose, and will return again.',
    extended: 'We believe Jesus Christ was born of a virgin, lived a sinless life, died on the cross for our sins, rose from the dead, and will return in glory.',
  },
  {
    title: 'Salvation',
    summary: 'We believe salvation is by grace alone through faith alone in Jesus Christ, not by human works.',
    extended: 'All who repent and believe in Christ are forgiven, born again by the Holy Spirit, and receive eternal life as a free gift of God.',
  },
  {
    title: 'The Holy Spirit',
    summary: 'We believe the Holy Spirit regenerates, indwells, and empowers believers to live godly lives and serve God.',
    extended: 'The Holy Spirit convicts of sin, gives new birth, illumines Scripture, seals believers, and equips the church for worship, witness, and service.',
  },
  {
    title: 'The Church',
    summary: 'We believe the church is the body of Christ, made up of all true believers.',
    extended: 'We believe the church is called to worship God, preach the Gospel, make disciples, and plant healthy churches under the authority of Scripture.',
  },
  {
    title: 'Baptism and the Lord’s Supper',
    summary: 'We believe in believer’s baptism by immersion and the Lord’s Supper as ordinances given by Christ to the church.',
    extended: 'Baptism and the Lord’s Supper are ordinances instituted by Christ for His church and practiced in obedience to His command.',
  },
  {
    title: 'The Return of Christ',
    summary: 'We believe that Jesus Christ will personally return to judge the living and the dead and establish His eternal kingdom.',
    extended: 'We believe Christ will return visibly and gloriously, raise the dead, judge all people in righteousness, and bring His kingdom to completion.',
  },
]

export function FaithSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showExtended, setShowExtended] = useState(false)

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
    <section id="faith" ref={sectionRef} className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 bg-navy/10 text-navy rounded-full text-sm font-medium mb-4">
            What We Believe
          </span>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl text-balance">
            Statement of Faith
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            The full requirements document contains an extended doctrinal statement. This section presents
            the shorter Baptist statement of faith provided for website use.
          </p>
        </div>

        {/* Statement of Faith Accordion */}
        <Card className="border-0 shadow-lg bg-white max-w-4xl mx-auto animate-on-scroll">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                <BookOpen className="h-7 w-7 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy">Articles of Faith</h3>
                <p className="text-sm text-muted-foreground">Essential beliefs of Emmanuel Baptist Church of Ethiopia</p>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {statementOfFaith.map((article, index) => (
                <AccordionItem key={article.title} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white text-sm font-semibold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <div className="text-left">
                        <h4 className="font-semibold text-navy">{article.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{article.summary}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-12">
                    <p className="text-foreground/80 leading-relaxed pb-2">
                      {showExtended ? article.extended : article.summary}
                    </p>
                    {showExtended && (
                      <p className="text-sm text-muted-foreground italic mt-2">
                        Website summary expanded from the requirements document
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Toggle Extended */}
            <div className="mt-8 pt-6 border-t border-border flex items-center justify-center">
              <Button
                variant="outline"
                onClick={() => setShowExtended(!showExtended)}
                className="gap-2"
              >
                {showExtended ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Show Summary Version
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    Show Extended Doctrinal Statement
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
