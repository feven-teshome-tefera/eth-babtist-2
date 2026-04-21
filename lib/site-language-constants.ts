import type { Language } from '@/lib/site-copy'

export const SITE_LANGUAGE_COOKIE = 'site-language'

export function normalizeLanguage(value: string | undefined | null): Language {
  return value === 'am' ? 'am' : 'en'
}
