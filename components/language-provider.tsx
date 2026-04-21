'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Language, siteCopy } from '@/lib/site-copy'
import { SITE_LANGUAGE_COOKIE } from '@/lib/site-language-constants'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode
  initialLanguage: Language
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage)

  useEffect(() => {
    setLanguage(initialLanguage)
  }, [initialLanguage])

  useEffect(() => {
    window.localStorage.setItem('site-language', language)
    document.cookie = `${SITE_LANGUAGE_COOKIE}=${language}; path=/; max-age=31536000; samesite=lax`
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
