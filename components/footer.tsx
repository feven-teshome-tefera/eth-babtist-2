import Link from 'next/link'
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Building2
} from 'lucide-react'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#mission', label: 'Our Mission' },
  { href: '#values', label: 'Core Values' },
  { href: '#faith', label: 'Statement of Faith' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://t.me/+LDH9i5_5DitiZDA8', icon: MessageCircle, label: 'Telegram' },
]

export function Footer() {
  return (
    <footer className="bg-navy-light border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy font-bold text-lg">
                E
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Emmanuel Baptist Church</p>
                <p className="text-xs text-white/60">of Ethiopia</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A Baptist denomination in Ethiopia committed to Gospel proclamation, biblical discipleship,
              leadership development, and healthy church multiplication.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-white/60 group-hover:text-gold transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Kirkos Sub City, Kazanchis<br />
                  Woreda 8, House No. 304<br />
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li>
                <a
                  href="tel:+25111156125"
                  className="flex items-center gap-3 text-white/60 hover:text-gold text-sm transition-colors"
                >
                  <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                  +251 111 56125
                </a>
              </li>
              <li>
                <a
                  href="mailto:ebceethiopia@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-gold text-sm transition-colors"
                >
                  <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                  ebceethiopia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Building2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                Registration Certificate No. 0824
              </li>
              <li>
                <a
                  href="https://t.me/+LDH9i5_5DitiZDA8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-gold text-sm transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  Join Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* Ministry Focus */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Focus</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Gospel Proclamation</li>
              <li>Biblical Discipleship</li>
              <li>Church Planting</li>
              <li>Leadership Development</li>
              <li>Mission Among Unreached People</li>
              <li>Strengthening Healthy Churches</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Emmanuel Baptist Church of Ethiopia. All rights reserved.
          </p>
          <p className="text-white/40 text-xs text-center sm:text-right">
            Built for gospel ministry, discipleship, and church multiplication.
          </p>
        </div>
      </div>
    </footer>
  )
}
