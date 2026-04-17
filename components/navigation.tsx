'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#mission', label: 'Our Mission' },
  { href: '#values', label: 'Core Values' },
  { href: '#faith', label: 'Statement of Faith' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''))
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
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white font-bold text-lg">
              E
            </div>
            <div className="hidden sm:block">
              <p className={cn(
                'font-semibold text-sm leading-tight transition-colors',
                isScrolled ? 'text-navy' : 'text-white'
              )}>
                Emmanuel Baptist Church
              </p>
              <p className={cn(
                'text-xs transition-colors',
                isScrolled ? 'text-muted-foreground' : 'text-white/80'
              )}>
                of Ethiopia
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  activeSection === link.href.replace('#', '')
                    ? isScrolled
                      ? 'text-navy bg-navy/5'
                      : 'text-white bg-white/10'
                    : isScrolled
                      ? 'text-foreground/70 hover:text-navy hover:bg-navy/5'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button
              asChild
              variant={isScrolled ? 'outline' : 'ghost'}
              size="sm"
              className={cn(
                !isScrolled && 'text-white border-white/30 hover:bg-white/10'
              )}
            >
              <Link href="https://t.me/+LDH9i5_5DitiZDA8" target="_blank">
                Join Telegram
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-gold text-navy hover:bg-gold/90"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  !isScrolled && 'text-white hover:bg-white/10'
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white font-bold">
                      E
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-navy">Emmanuel Baptist Church</p>
                      <p className="text-xs text-muted-foreground">of Ethiopia</p>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={cn(
                      'px-4 py-3 text-base font-medium rounded-md transition-colors',
                      activeSection === link.href.replace('#', '')
                        ? 'text-navy bg-navy/5'
                        : 'text-foreground/70 hover:text-navy hover:bg-navy/5'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 flex flex-col gap-3 px-4">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <Link 
                      href="https://t.me/+LDH9i5_5DitiZDA8" 
                      target="_blank"
                      onClick={handleLinkClick}
                    >
                      Join Telegram
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-gold text-navy hover:bg-gold/90"
                  >
                    <Link href="#contact" onClick={handleLinkClick}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
