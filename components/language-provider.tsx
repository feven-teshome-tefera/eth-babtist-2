'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Language, siteCopy } from '@/lib/site-copy'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('site-language') as Language | null
    if (storedLanguage === 'en' || storedLanguage === 'am') {
      setLanguage(storedLanguage)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('site-language', language)
    document.documentElement.lang = language === 'am' ? 'am' : 'en'
  }, [language])

  const value = useMemo(() => ({ language, setLanguage }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}

export function useSiteCopy() {
  const { language } = useLanguage()
  return siteCopy[language]
}
