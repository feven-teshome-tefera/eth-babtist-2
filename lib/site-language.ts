import { cookies } from 'next/headers'
import { siteCopy, type Language, type SiteCopy } from '@/lib/site-copy'
import { SITE_LANGUAGE_COOKIE, normalizeLanguage } from '@/lib/site-language-constants'

export async function getServerLanguage(): Promise<Language> {
  const cookieStore = await cookies()
  return normalizeLanguage(cookieStore.get(SITE_LANGUAGE_COOKIE)?.value)
}

export async function getServerSiteCopy(): Promise<SiteCopy> {
  const language = await getServerLanguage()
  return siteCopy[language]
}
