import Link from 'next/link'
import { Mail, Phone, MapPin, MessageCircle, Building2 } from 'lucide-react'
import type { SiteCopy } from '@/lib/site-copy'

const socialLinks = [
  { href: 'https://t.me/+LDH9i5_5DitiZDA8', icon: MessageCircle, label: 'Telegram' },
]

export function Footer({ copy }: { copy: SiteCopy }) {
  const quickLinks = copy.nav.links

  return (
    <footer className="border-t border-white/10 bg-navy-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-lg font-bold text-navy">
                E
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{copy.brand.line1}</p>
                <p className="text-xs text-white/60">{copy.brand.line2}</p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/70">{copy.footer.description}</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-gold/20 group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-white/60 transition-colors group-hover:text-gold" />
                  </Link>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">{copy.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">{copy.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                <span className="text-sm text-white/60">
                  Kirkos Sub City, Kazanchis
                  <br />
                  Woreda 8, House No. 304
                  <br />
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li>
                <a href="tel:+25111156125" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold">
                  <Phone className="h-5 w-5 flex-shrink-0 text-gold" />
                  +251 111 56125
                </a>
              </li>
              <li>
                <a href="mailto:ebceethiopia@gmail.com" className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold">
                  <Mail className="h-5 w-5 flex-shrink-0 text-gold" />
                  ebceethiopia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Building2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                Registration Certificate No. 0824
              </li>
              <li>
                <a
                  href="https://t.me/+LDH9i5_5DitiZDA8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold"
                >
                  <MessageCircle className="h-5 w-5 flex-shrink-0 text-gold" />
                  {copy.footer.joinTelegram}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">{copy.footer.focus}</h3>
            <ul className="space-y-2 text-sm text-white/60">
              {copy.footer.focusItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-center text-sm text-white/50 sm:text-left">
            &copy; {new Date().getFullYear()} {copy.brand.line1} {copy.brand.line2}. {copy.footer.rights}
          </p>
          <p className="text-center text-xs text-white/40 sm:text-right">{copy.footer.builtFor}</p>
        </div>
      </div>
    </footer>
  )
}
