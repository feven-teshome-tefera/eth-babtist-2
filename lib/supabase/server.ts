import 'server-only'

import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { defaultSiteContent, type SiteAffiliation, type SiteAnnouncement, type SiteContent } from '@/lib/site-content'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export async function getSiteContent(): Promise<SiteContent> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return defaultSiteContent
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })

  const [homepage, leadership, presidentMessage, announcements, affiliations] = await Promise.all([
    fetchHomepageRecord(supabase),
    fetchLeadershipRecord(supabase),
    fetchPresidentMessageRecord(supabase),
    fetchAnnouncementsRecord(supabase),
    fetchAffiliationsRecord(supabase),
  ])

  const firstAnnouncement = announcements[0] ?? null

  return {
    ...defaultSiteContent,
    localChurches: homepage?.localChurches ?? defaultSiteContent.localChurches,
    believersNationwide: homepage?.believersNationwide ?? defaultSiteContent.believersNationwide,
    yearsOfMinistry: homepage?.yearsOfMinistry ?? defaultSiteContent.yearsOfMinistry,
    pastorName: leadership?.name ?? defaultSiteContent.pastorName,
    pastorRole: leadership?.role ?? defaultSiteContent.pastorRole,
    pastorPhotoUrl: leadership?.photoUrl ?? defaultSiteContent.pastorPhotoUrl,
    servingSince: leadership?.servingSince ?? defaultSiteContent.servingSince,
    credentials: leadership?.credentials ?? defaultSiteContent.credentials,
    email: leadership?.email ?? defaultSiteContent.email,
    phone: leadership?.phone ?? defaultSiteContent.phone,
    messageEn: presidentMessage?.messageEn ?? defaultSiteContent.messageEn,
    messageAm: presidentMessage?.messageAm ?? defaultSiteContent.messageAm,
    announcementTitleEn: firstAnnouncement?.titleEn ?? defaultSiteContent.announcementTitleEn,
    announcementTitleAm: firstAnnouncement?.titleAm ?? defaultSiteContent.announcementTitleAm,
    announcementBodyEn: firstAnnouncement?.bodyEn ?? defaultSiteContent.announcementBodyEn,
    announcementBodyAm: firstAnnouncement?.bodyAm ?? defaultSiteContent.announcementBodyAm,
    announcementImageUrl: firstAnnouncement?.imageUrl ?? defaultSiteContent.announcementImageUrl,
    announcements,
    affiliations: affiliations.length > 0 ? affiliations : defaultSiteContent.affiliations,
  }
}

type RowRecord = Record<string, unknown>

type HomepageRecord = {
  localChurches: number
  believersNationwide: number
  yearsOfMinistry: number
}

type LeadershipRecord = {
  name: string
  role: string
  photoUrl: string
  servingSince: string
  email: string
  phone: string
  credentials: string
}

type PresidentMessageRecord = {
  messageEn: string
  messageAm: string
}

type AnySupabaseClient = SupabaseClient<any, 'public', any>

async function fetchHomepageRecord(supabase: AnySupabaseClient) {
  for (const tableName of ['homepage', 'homepgae']) {
    const { data, error } = await supabase.from(tableName).select('*').order('id', { ascending: true }).limit(1).maybeSingle()

    if (isMissingTableError(error?.message, tableName)) {
      continue
    }

    if (error || !data) {
      return null
    }

    const row = data as RowRecord

    return {
      localChurches: getNumber(row['Local Churches'], defaultSiteContent.localChurches),
      believersNationwide: getNumber(row['Believers Nationwide'], defaultSiteContent.believersNationwide),
      yearsOfMinistry: getNumber(row['Years of Ministry'], defaultSiteContent.yearsOfMinistry),
    } satisfies HomepageRecord
  }

  return null
}

async function fetchLeadershipRecord(supabase: AnySupabaseClient) {
  for (const tableName of ['Leadership', 'leadership']) {
    const { data, error } = await supabase.from(tableName).select('*').order('id', { ascending: true }).limit(1).maybeSingle()

    if (isMissingTableError(error?.message, tableName)) {
      continue
    }

    if (error || !data) {
      return null
    }

    const row = data as RowRecord

    return {
      name: getString(row.name, defaultSiteContent.pastorName),
      role: getString(row.role, defaultSiteContent.pastorRole),
      photoUrl: getString(row.photo_url, defaultSiteContent.pastorPhotoUrl),
      servingSince: getString(row['serving since'], defaultSiteContent.servingSince),
      email: getString(row.email, defaultSiteContent.email),
      phone: formatPhoneValue(row.phone, defaultSiteContent.phone),
      credentials: getString(row.credentials, defaultSiteContent.credentials),
    } satisfies LeadershipRecord
  }

  return null
}

async function fetchPresidentMessageRecord(supabase: AnySupabaseClient) {
  for (const tableName of ['President Message', 'president_message', 'president message']) {
    const { data, error } = await supabase.from(tableName).select('*').order('id', { ascending: true }).limit(1).maybeSingle()

    if (isMissingTableError(error?.message, tableName)) {
      continue
    }

    if (error || !data) {
      return null
    }

    const row = data as RowRecord
    const messageEnColumn = findMessageColumn(row, 'en')
    const messageAmColumn = findMessageColumn(row, 'am')

    return {
      messageEn: messageEnColumn ? getString(row[messageEnColumn], defaultSiteContent.messageEn) : defaultSiteContent.messageEn,
      messageAm: messageAmColumn ? getString(row[messageAmColumn], defaultSiteContent.messageAm) : defaultSiteContent.messageAm,
    } satisfies PresidentMessageRecord
  }

  return null
}

async function fetchAnnouncementsRecord(supabase: AnySupabaseClient) {
  for (const tableName of ['Announcements', 'announcements']) {
    const { data, error } = await supabase.from(tableName).select('*').order('id', { ascending: true })

    if (isMissingTableError(error?.message, tableName)) {
      continue
    }

    if (error || !data) {
      return []
    }

    return (data as RowRecord[]).map((row, index) => ({
      id: String(row.id ?? `announcement-${index + 1}`),
      titleEn: getString(row.title_en, ''),
      titleAm: getString(row.title_am, ''),
      bodyEn: getString(row.body_en, ''),
      bodyAm: getString(row.body_am, ''),
      imageUrl: getString(row.image_url, ''),
    })) satisfies SiteAnnouncement[]
  }

  return []
}

async function fetchAffiliationsRecord(supabase: AnySupabaseClient) {
  for (const tableName of ['Affiliations & Partnerships', 'affiliations_partnerships', 'affiliations & partnerships']) {
    const { data, error } = await supabase.from(tableName).select('*').order('id', { ascending: true })

    if (isMissingTableError(error?.message, tableName)) {
      continue
    }

    if (error || !data) {
      return []
    }

    return (data as RowRecord[]).map((row, index) => ({
      id: String(row.id ?? `affiliation-${index + 1}`),
      shortName: getString(row.short_name, defaultSiteContent.affiliations[index]?.shortName ?? ''),
      fullName: getString(row.full_name, defaultSiteContent.affiliations[index]?.fullName ?? ''),
      logoUrl: getString(row.img_url, ''),
    })) satisfies SiteAffiliation[]
  }

  return []
}

function isMissingTableError(message: string | undefined, tableName: string) {
  if (!message) {
    return false
  }

  const normalizedMessage = message.toLowerCase()
  const normalizedTableName = tableName.toLowerCase()

  return (
    normalizedMessage.includes(normalizedTableName) &&
    (normalizedMessage.includes('schema cache') ||
      normalizedMessage.includes('does not exist') ||
      normalizedMessage.includes('relation'))
  )
}

function findMessageColumn(record: RowRecord, language: 'en' | 'am') {
  const entries = Object.entries(record).filter(([key]) => key !== 'id' && key !== 'created_at')
  const exactMatches =
    language === 'en'
      ? ['message_en', 'body_en', 'english_message', 'english', 'message english']
      : ['message_am', 'body_am', 'amharic_message', 'amharic', 'message amharic']

  for (const [key] of entries) {
    if (exactMatches.includes(key.toLowerCase())) {
      return key
    }
  }

  for (const [key] of entries) {
    const normalizedKey = key.toLowerCase()
    if (language === 'en' && (normalizedKey.includes('english') || normalizedKey.endsWith('_en') || normalizedKey.includes('en_'))) {
      return key
    }
    if (language === 'am' && (normalizedKey.includes('amharic') || normalizedKey.endsWith('_am') || normalizedKey.includes('am_'))) {
      return key
    }
  }

  return entries[language === 'en' ? 0 : 1]?.[0] ?? null
}

function getNumber(value: unknown, fallback: number) {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

function getString(value: unknown, fallback: string) {
  return typeof value === 'string' ? value : fallback
}

function formatPhoneValue(value: unknown, fallback: string) {
  if (typeof value === 'string') {
    return value
  }

  if (typeof value === 'number' && Number.isFinite(value)) {
    return String(value)
  }

  return fallback
}
