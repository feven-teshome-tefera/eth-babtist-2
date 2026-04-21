'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Building2 } from 'lucide-react'
import { useSiteCopy } from '@/components/language-provider'

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const copy = useSiteCopy()
  const mapLocationUrl = 'https://maps.app.goo.gl/WzL374A5bTUzQv5Y8'

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
    setSubmitError(null)
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      firstName: String(formData.get('firstName') ?? ''),
      lastName: String(formData.get('lastName') ?? ''),
      email: String(formData.get('email') ?? ''),
      subject: String(formData.get('subject') ?? ''),
      message: String(formData.get('message') ?? ''),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      form.reset()
      setIsSubmitted(true)
    } catch {
      setSubmitError('Unable to send your message right now. Please try again shortly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden bg-navy py-24">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="mb-4 inline-block rounded-full bg-gold/20 px-4 py-1 text-sm font-medium text-gold">
            {copy.contact.badge}
          </span>
          <h2 className="text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl">
            {copy.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70 text-pretty">
            {copy.contact.intro}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 animate-on-scroll">
            <h3 className="mb-8 text-xl font-bold text-white">{copy.contact.infoTitle}</h3>

            <Card className="border-0 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">{copy.contact.officeAddress}</h4>
                    <p className="text-sm leading-relaxed text-white/70">
                      Kirkos Sub City
                      <br />
                      Kazanchis Woreda 8, House No. 304
                      <br />
                      PO Box: 30042
                      <br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">{copy.contact.officePhone}</h4>
                    <a href="tel:+25111156125" className="text-white/70 transition-colors hover:text-gold">
                      +251 111 56125
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">{copy.contact.email}</h4>
                    <a href="mailto:ebceethiopia@gmail.com" className="text-white/70 transition-colors hover:text-gold">
                      ebceethiopia@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <Building2 className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">{copy.contact.legalStatus}</h4>
                    <p className="text-sm leading-relaxed text-white/70">{copy.contact.legalStatusBody}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <MessageCircle className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">{copy.contact.telegram}</h4>
                    <a
                      href="https://t.me/+LDH9i5_5DitiZDA8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 transition-colors hover:text-gold"
                    >
                      {copy.contact.joinTelegram}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10">
              <a
                href={mapLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex aspect-video items-center justify-center bg-navy-light p-8 text-center"
              >
                <div>
                  <MapPin className="mx-auto mb-3 h-12 w-12 text-gold" />
                  <p className="text-sm font-medium text-white">{copy.contact.mapPlaceholder}</p>
                </div>
              </a>
            </Card>
          </div>

          <div className="animate-on-scroll">
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="mb-3 text-xl font-bold text-navy">{copy.contact.formTitle}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{copy.contact.formIntro}</p>
                {submitError ? <p className="mb-4 text-sm text-red-600">{submitError}</p> : null}

                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-navy">{copy.contact.successTitle}</h4>
                    <p className="text-muted-foreground">{copy.contact.successBody}</p>
                    <Button variant="outline" className="mt-6" onClick={() => setIsSubmitted(false)}>
                      {copy.contact.sendAnother}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <FieldGroup>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field>
                          <FieldLabel htmlFor="firstName">{copy.contact.firstName}</FieldLabel>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder={copy.contact.firstNamePlaceholder}
                            required
                            className="mt-1"
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="lastName">{copy.contact.lastName}</FieldLabel>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder={copy.contact.lastNamePlaceholder}
                            required
                            className="mt-1"
                          />
                        </Field>
                      </div>
                      <Field>
                        <FieldLabel htmlFor="email">{copy.contact.emailAddress}</FieldLabel>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={copy.contact.emailPlaceholder}
                          required
                          className="mt-1"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="subject">{copy.contact.subject}</FieldLabel>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder={copy.contact.subjectPlaceholder}
                          required
                          className="mt-1"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="message">{copy.contact.message}</FieldLabel>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder={copy.contact.messagePlaceholder}
                          rows={5}
                          required
                          className="mt-1 resize-none"
                        />
                      </Field>
                      <Button
                        type="submit"
                        className="w-full bg-gold font-semibold text-navy hover:bg-gold/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Clock className="mr-2 h-4 w-4 animate-spin" />
                            {copy.contact.sending}
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            {copy.contact.sendMessage}
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
