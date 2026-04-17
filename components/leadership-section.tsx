'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  User, 
  Mail, 
  Phone, 
  Award, 
  Calendar,
  ChevronDown,
  ChevronUp,
  Quote
} from 'lucide-react'

export function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [showFullMessage, setShowFullMessage] = useState(false)

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
    <section id="leadership" ref={sectionRef} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 bg-gold/10 text-navy rounded-full text-sm font-medium mb-4">
            Our Leadership
          </span>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl text-balance">
            Leadership & President&apos;s Message
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Faithful servants leading our denomination with biblical conviction and pastoral care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* President's Message */}
          <Card className="border-0 shadow-lg bg-cream animate-on-scroll order-2 lg:order-1">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Quote className="h-8 w-8 text-gold" />
                <h3 className="text-xl font-bold text-navy">Message from the President</h3>
              </div>
              
              <div className="prose prose-sm max-w-none text-foreground/80">
                <p className="leading-relaxed">
                  Grace and peace to you in the name of our Lord Jesus Christ.
                </p>
                <p className="leading-relaxed mt-4">
                  I am deeply grateful to God for the privilege of serving as President of the Emmanuel
                  Baptist Church of Ethiopia. We firmly believe that this is a strategic time for the
                  preaching of the Gospel in our nation.
                </p>
                <p className="leading-relaxed mt-4">
                  Our generation is in great need of the saving message of Jesus Christ, and the church
                  must faithfully proclaim this good news with conviction and dedication.
                </p>
                
                {showFullMessage && (
                  <>
                    <p className="leading-relaxed mt-4">
                      Our calling as a denomination is clear. We are committed to proclaiming the Gospel,
                      making true disciples of our Lord Jesus Christ, and planting new biblical and healthy
                      churches. At the same time, we are devoted to strengthening and guiding existing churches
                      so they remain faithful to the Word of God.
                    </p>
                    <p className="leading-relaxed mt-4">
                      Equipping ministers and raising a new generation of leaders with sound biblical teaching
                      is also a central priority of our ministry. Strong churches require well-prepared leaders
                      who faithfully teach Scripture, shepherd God&apos;s people, and lead according to biblical principles.
                    </p>
                    <p className="leading-relaxed mt-4">
                      Over the past years, our denominational office has been actively engaged in encouraging
                      evangelism, supporting church planting efforts, strengthening congregations, and training
                      pastors and ministry leaders. We remain committed to expanding this work across Ethiopia and beyond.
                    </p>
                    <p className="leading-relaxed mt-4 font-medium">
                      I invite you to join us in prayer, partnership, and faithful service as we work together
                      to fulfill the mission God has entrusted to His church.
                    </p>
                  </>
                )}
              </div>

              <Button
                variant="ghost"
                onClick={() => setShowFullMessage(!showFullMessage)}
                className="mt-6 gap-2 text-navy hover:text-gold"
              >
                {showFullMessage ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Read less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    Read full message
                  </>
                )}
              </Button>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-navy">Pastor Yonas Fikadu</p>
                <p className="text-sm text-muted-foreground">President, Emmanuel Baptist Church of Ethiopia</p>
              </div>
            </CardContent>
          </Card>

          {/* Leadership Profile */}
          <Card className="border-0 shadow-lg bg-white animate-on-scroll order-1 lg:order-2">
            <CardContent className="p-8">
              {/* Profile Image Placeholder */}
              <div className="relative mb-6">
                <div className="aspect-[4/5] max-w-xs mx-auto rounded-lg bg-navy/5 flex items-center justify-center border border-border overflow-hidden">
                  {/* <div className="text-center p-8">
                    <User className="h-20 w-20 text-navy/20 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Leadership portrait</p>
                  </div> */}
                  <Image
                    src="/patoryonas.jpg"
                    alt="Leadership portrait"
                    className="object-cover w-full h-full"
                    width={400}
                    height={500}
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-navy">Yonas Fikadu</h3>
                <p className="text-gold font-medium mt-1">Pastor / President</p>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-cream">
                  <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Serving Since</p>
                    <p className="font-medium text-navy">2019</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-lg bg-cream">
                  <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Credentials</p>
                    <p className="font-medium text-navy text-sm">BA, M.Div. in Theology, Doctor of Ministry (D.Min.), B.A. in Leadership and Management</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg bg-cream">
                  <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:lejonahj@gmail.com" 
                      className="font-medium text-navy hover:text-gold transition-colors"
                    >
                      lejonahj@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg bg-cream">
                  <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a 
                      href="tel:+251911679842" 
                      className="font-medium text-navy hover:text-gold transition-colors"
                    >
                      +251 911 679 842
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Affiliations */}
        <div className="mt-20 animate-on-scroll">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-navy">Affiliations & Partnerships</h3>
            <p className="text-sm text-muted-foreground mt-1">Emmanuel Baptist Church of Ethiopia is affiliated with</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Card className="border border-border/50 hover:border-gold/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-navy/5 flex items-center justify-center">
                  <span className="text-2xl font-bold text-navy">BWA</span>
                </div>
                <p className="font-medium text-navy">Baptist World Alliance</p>
              </CardContent>
            </Card>
            <Card className="border border-border/50 hover:border-gold/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-navy/5 flex items-center justify-center">
                  <span className="text-2xl font-bold text-navy">AABF</span>
                </div>
                <p className="font-medium text-navy">All African Baptist Fellowship</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Legal Information */}
        <div className="mt-12 text-center animate-on-scroll">
          <Card className="border-0 bg-muted/30 max-w-3xl mx-auto">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Emmanuel Baptist Church of Ethiopia is a legally registered religious organization 
                under the laws of the Federal Democratic Republic of Ethiopia through the Ethiopian 
                Council of Gospel Believers&apos; Churches, holding Registration Certificate No. 0824.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
