'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useLanguage, useSiteCopy } from '@/components/language-provider'
import { languageOptions } from '@/lib/site-copy'
import { SITE_LANGUAGE_COOKIE } from '@/lib/site-language-constants'
import { cn } from '@/lib/utils'

export function Navigation() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const copy = useSiteCopy()
  const navLinks = copy.nav.links

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => link.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navLinks])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const handleLanguageChange = (nextLanguage: (typeof languageOptions)[number]['value']) => {
    window.localStorage.setItem(SITE_LANGUAGE_COOKIE, nextLanguage)
    document.cookie = `${SITE_LANGUAGE_COOKIE}=${nextLanguage}; path=/; max-age=31536000; samesite=lax`
    document.documentElement.lang = nextLanguage
    setLanguage(nextLanguage)
    router.refresh()
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 border-b border-border shadow-sm backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-navy text-lg font-bold text-white">
              <Image
                src="/cropped_circle_image.png"
                alt="Logo"
                className="h-full w-full object-cover"
                width={40}
                height={40}
              />
            </div>
            <div className="hidden sm:block">
              <p
                className={cn(
                  'text-sm font-semibold leading-tight transition-colors',
                  isScrolled ? 'text-navy' : 'text-white'
                )}
              >
                {copy.brand.line1}
              </p>
              <p
                className={cn(
                  'text-xs transition-colors',
                  isScrolled ? 'text-muted-foreground' : 'text-white/80'
                )}
              >
                {copy.brand.line2}
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  activeSection === link.href.replace('#', '')
                    ? isScrolled
                      ? 'bg-navy/5 text-navy'
                      : 'bg-white/10 text-white'
                    : isScrolled
                      ? 'text-foreground/70 hover:bg-navy/5 hover:text-navy'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button
              asChild
              variant={isScrolled ? 'outline' : 'ghost'}
              size="sm"
              className={cn(!isScrolled && 'border-white/30 text-white hover:bg-white/10')}
            >
              <Link href="https://t.me/+UItuI-4qYUBmYzNk" target="_blank">
                {copy.nav.joinTelegram}
              </Link>
            </Button>
            <div className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-sm">
              {languageOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleLanguageChange(option.value)}
                  className={cn(
                    'rounded-full px-3 py-1 text-xs font-semibold transition-colors',
                    language === option.value
                      ? 'bg-gold text-navy'
                      : isScrolled
                        ? 'text-navy/70 hover:text-navy'
                        : 'text-white/80 hover:text-white'
                  )}
                  aria-label={`${copy.nav.language}: ${option.label}`}
                >
                  {option.shortLabel}
                </button>
              ))}
            </div>
            {/* <Button asChild size="sm" className="bg-gold text-navy hover:bg-gold/90">
              <Link href="#contact">{copy.nav.contactUs}</Link>
            </Button> */}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(!isScrolled && 'text-white hover:bg-white/10')}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">{copy.nav.openMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-navy text-white font-bold">
                      <Image
                        src="/cropped_circle_image.png"
                        alt="Logo"
                        className="h-full w-full object-cover"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">{copy.brand.line1}</p>
                      <p className="text-xs text-muted-foreground">{copy.brand.line2}</p>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-1">
                <div className="mb-4 px-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {copy.nav.language}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {languageOptions.map((option) => (
                      <Button
                        key={option.value}
                        type="button"
                        variant={language === option.value ? 'default' : 'outline'}
                        className={cn(
                          language === option.value && 'bg-navy text-white hover:bg-navy/90'
                        )}
                        onClick={() => handleLanguageChange(option.value)}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={cn(
                      'rounded-md px-4 py-3 text-base font-medium transition-colors',
                      activeSection === link.href.replace('#', '')
                        ? 'bg-navy/5 text-navy'
                        : 'text-foreground/70 hover:bg-navy/5 hover:text-navy'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 flex flex-col gap-3 px-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="https://t.me/+UItuI-4qYUBmYzNk"
                      target="_blank"
                      onClick={handleLinkClick}
                    >
                      {copy.nav.joinTelegram}
                    </Link>
                  </Button>
                  {/* <Button asChild className="w-full bg-gold text-navy hover:bg-gold/90">
                    <Link href="#contact" onClick={handleLinkClick}>
                      {copy.nav.contactUs}
                    </Link>
                  </Button> */}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
