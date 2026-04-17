'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  MessageCircle,
  Clock,
  Building2
} from 'lucide-react'

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto text-pretty">
            We would love to hear from you. Reach out for inquiries, partnership opportunities, 
            or to learn more about Emmanuel Baptist Church of Ethiopia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-on-scroll">
            <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>
            
            <Card className="border-0 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Office Address</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Kirkos Sub City<br />
                      Kazanchis Woreda 8, House No. 304<br />
                      PO Box: 30042<br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Office Phone</h4>
                    <a 
                      href="tel:+25111156125" 
                      className="text-white/70 hover:text-gold transition-colors"
                    >
                      +251 111 56125
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a 
                      href="mailto:ebceethiopia@gmail.com" 
                      className="text-white/70 hover:text-gold transition-colors"
                    >
                      ebceethiopia@gmail.com
                    </a>
                    <p className="text-white/50 text-xs mt-1">
                      Future: ebce@ebceethiopia.org
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Legal Status</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Registered through the Ethiopian Council of Gospel Believers&apos; Churches
                      under Registration Certificate No. 0824.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telegram Community</h4>
                    <a 
                      href="https://t.me/+LDH9i5_5DitiZDA8" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-gold transition-colors"
                    >
                      Join our Telegram group
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-0 bg-white/5 backdrop-blur-sm overflow-hidden">
              <div className="aspect-video bg-navy-light flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-white/20 mx-auto mb-3" />
                  <p className="text-white/50 text-sm">
                    [Map Placeholder: Addis Ababa, Ethiopia]
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-navy mb-3">Send us a Message</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Use this form for ministry inquiries, partnerships, or questions about EBCE churches and leadership.
                </p>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-navy mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We will respond to your inquiry soon.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-6"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <FieldGroup>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                          <Input 
                            id="firstName" 
                            placeholder="Your first name"
                            required
                            className="mt-1"
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                          <Input 
                            id="lastName" 
                            placeholder="Your last name"
                            required
                            className="mt-1"
                          />
                        </Field>
                      </div>
                      <Field>
                        <FieldLabel htmlFor="email">Email Address</FieldLabel>
                        <Input 
                          id="email" 
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="mt-1"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="subject">Subject</FieldLabel>
                        <Input 
                          id="subject" 
                          placeholder="How can we help you?"
                          required
                          className="mt-1"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        <Textarea 
                          id="message" 
                          placeholder="Write your message here..."
                          rows={5}
                          required
                          className="mt-1 resize-none"
                        />
                      </Field>
                      <Button 
                        type="submit" 
                        className="w-full bg-gold text-navy hover:bg-gold/90 font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Clock className="h-4 w-4 animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </FieldGroup>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
