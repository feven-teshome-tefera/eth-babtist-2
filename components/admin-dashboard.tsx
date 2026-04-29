'use client'

import { type ChangeEvent, type FormEvent, type ReactNode, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Eye, EyeOff } from 'lucide-react'
import { toast } from 'sonner'
import { defaultSiteContent, type SiteAffiliation, type SiteContent } from '@/lib/site-content'
import { getSupabaseBrowserClient } from '@/lib/supabase/client'

type AnnouncementItem = {
  id: string
  titleEn: string
  titleAm: string
  bodyEn: string
  bodyAm: string
}

type AnnouncementDraft = {
  id: string | null
  titleEn: string
  titleAm: string
  bodyEn: string
  bodyAm: string
}

type AffiliationDraft = {
  id: string | null
  shortName: string
  fullName: string
  logoUrl: string
}

type HomepageRecord = {
  tableName: string
  id: number
  localChurches: number
  believersNationwide: number
  yearsOfMinistry: number
}

type LeadershipRecord = {
  tableName: string
  id: number
  name: string
  role: string
  photoUrl: string
  servingSince: string
  email: string
  phone: string
  credentials: string
}

type AnnouncementsRecord = {
  tableName: string
  items: AnnouncementItem[]
}

type PresidentMessageRecord = {
  tableName: string
  id: number
  messageEn: string
  messageAm: string
  messageEnColumn: string | null
  messageAmColumn: string | null
}

type AffiliationsRecord = {
  tableName: string
  items: SiteAffiliation[]
}

export function AdminDashboard() {
  const supabase = getSupabaseBrowserClient()
  const [signedIn, setSignedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [content, setContent] = useState<SiteContent>(defaultSiteContent)
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>([
    {
      id: 'announcement-1',
      titleEn: defaultSiteContent.announcementTitleEn,
      titleAm: defaultSiteContent.announcementTitleAm,
      bodyEn: defaultSiteContent.announcementBodyEn,
      bodyAm: defaultSiteContent.announcementBodyAm,
    },
  ])
  const [announcementDialogOpen, setAnnouncementDialogOpen] = useState(false)
  const [announcementDraft, setAnnouncementDraft] = useState<AnnouncementDraft>({
    id: null,
    titleEn: '',
    titleAm: '',
    bodyEn: '',
    bodyAm: '',
  })
  const [affiliationDialogOpen, setAffiliationDialogOpen] = useState(false)
  const [affiliationDraft, setAffiliationDraft] = useState<AffiliationDraft>({
    id: null,
    shortName: '',
    fullName: '',
    logoUrl: '',
  })
  const [signingIn, setSigningIn] = useState(false)
  const [savingKey, setSavingKey] = useState<string | null>(null)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [homepageTableName, setHomepageTableName] = useState<string | null>(null)
  const [homepageRowId, setHomepageRowId] = useState<number | null>(null)
  const [leadershipTableName, setLeadershipTableName] = useState<string | null>(null)
  const [leadershipRowId, setLeadershipRowId] = useState<number | null>(null)
  const [announcementsTableName, setAnnouncementsTableName] = useState<string | null>(null)
  const [presidentMessageTableName, setPresidentMessageTableName] = useState<string | null>(null)
  const [presidentMessageRowId, setPresidentMessageRowId] = useState<number | null>(null)
  const [presidentMessageEnColumn, setPresidentMessageEnColumn] = useState<string | null>(null)
  const [presidentMessageAmColumn, setPresidentMessageAmColumn] = useState<string | null>(null)
  const [affiliationsTableName, setAffiliationsTableName] = useState<string | null>(null)

  function isMissingTableError(message: string, tableName: string) {
    const normalizedMessage = message.toLowerCase()
    const normalizedTableName = tableName.toLowerCase()

    return (
      normalizedMessage.includes(normalizedTableName) &&
      (normalizedMessage.includes('schema cache') ||
        normalizedMessage.includes('does not exist') ||
        normalizedMessage.includes('relation'))
    )
  }

  function normalizePhoneDigits(value: string) {
    return value.replace(/\D/g, '')
  }

  function findMessageColumn(record: Record<string, unknown>, language: 'en' | 'am') {
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

  async function fetchHomepageRecord() {
    if (!supabase) {
      return null
    }

    const homepageTableCandidates = ['homepage', 'homepgae']
    let missingTableCount = 0

    for (const tableName of homepageTableCandidates) {
      const { data, error: homepageError } = await supabase
        .from(tableName)
        .select('id,"Local Churches","Believers Nationwide","Years of Ministry"')
        .order('id', { ascending: true })
        .limit(1)
        .maybeSingle()

      if (homepageError) {
        if (isMissingTableError(homepageError.message, tableName)) {
          missingTableCount += 1
          continue
        }

        throw homepageError
      }

      if (!data) {
        setHomepageTableName(tableName)
        setHomepageRowId(1)
        return {
          tableName,
          id: 1,
          localChurches: 0,
          believersNationwide: 0,
          yearsOfMinistry: 0,
        } satisfies HomepageRecord
      }

      const rowId = Number(data.id ?? 1)
      setHomepageTableName(tableName)
      setHomepageRowId(rowId)

      return {
        tableName,
        id: rowId,
        localChurches: Number(data['Local Churches'] ?? 0),
        believersNationwide: Number(data['Believers Nationwide'] ?? 0),
        yearsOfMinistry: Number(data['Years of Ministry'] ?? 0),
      } satisfies HomepageRecord
    }

    if (missingTableCount === homepageTableCandidates.length) {
      setHomepageTableName(null)
      setHomepageRowId(null)
    }

    return null
  }

  async function fetchLeadershipRecord() {
    if (!supabase) {
      return null
    }

    const leadershipTableCandidates = ['Leadership', 'leadership']
    let missingTableCount = 0

    for (const tableName of leadershipTableCandidates) {
      const { data, error: leadershipError } = await supabase
        .from(tableName)
        .select('id,name,role,photo_url,"serving since",email,phone,credentials')
        .order('id', { ascending: true })
        .limit(1)
        .maybeSingle()

      if (leadershipError) {
        if (isMissingTableError(leadershipError.message, tableName)) {
          missingTableCount += 1
          continue
        }

        throw leadershipError
      }

      if (!data) {
        setLeadershipTableName(tableName)
        setLeadershipRowId(1)
        return {
          tableName,
          id: 1,
          name: '',
          role: '',
          photoUrl: '',
          servingSince: '',
          email: '',
          phone: '',
          credentials: '',
        } satisfies LeadershipRecord
      }

      const rowId = Number(data.id ?? 1)
      setLeadershipTableName(tableName)
      setLeadershipRowId(rowId)

      return {
        tableName,
        id: rowId,
        name: String(data.name ?? ''),
        role: String(data.role ?? ''),
        photoUrl: String(data.photo_url ?? ''),
        servingSince: String(data['serving since'] ?? ''),
        email: String(data.email ?? ''),
        phone: normalizePhoneDigits(String(data.phone ?? '')),
        credentials: String(data.credentials ?? ''),
      } satisfies LeadershipRecord
    }

    if (missingTableCount === leadershipTableCandidates.length) {
      setLeadershipTableName(null)
      setLeadershipRowId(null)
    }

    return null
  }

  async function fetchAnnouncementsRecord() {
    if (!supabase) {
      return null
    }

    const announcementsTableCandidates = ['Announcements', 'announcements']
    let missingTableCount = 0

    for (const tableName of announcementsTableCandidates) {
      const { data, error: announcementsError } = await supabase
        .from(tableName)
        .select('id,title_en,title_am,body_en,body_am')
        .order('id', { ascending: true })

      if (announcementsError) {
        if (isMissingTableError(announcementsError.message, tableName)) {
          missingTableCount += 1
          continue
        }

        throw announcementsError
      }

      setAnnouncementsTableName(tableName)

      return {
        tableName,
        items: normalizeAnnouncements(data ?? []),
      } satisfies AnnouncementsRecord
    }

    if (missingTableCount === announcementsTableCandidates.length) {
      setAnnouncementsTableName(null)
    }

    return null
  }

  async function fetchPresidentMessageRecord() {
    if (!supabase) {
      return null
    }

    const tableCandidates = ['President Message', 'president_message', 'president message']
    let missingTableCount = 0

    for (const tableName of tableCandidates) {
      const { data, error: messageError } = await supabase.from(tableName).select('*').order('id', { ascending: true }).limit(1).maybeSingle()

      if (messageError) {
        if (isMissingTableError(messageError.message, tableName)) {
          missingTableCount += 1
          continue
        }

        throw messageError
      }

      const row = (data ?? {}) as Record<string, unknown>
      const messageEnColumn = findMessageColumn(row, 'en')
      const messageAmColumn = findMessageColumn(row, 'am')
      const rowId = Number(row.id ?? 1)

      setPresidentMessageTableName(tableName)
      setPresidentMessageRowId(rowId)
      setPresidentMessageEnColumn(messageEnColumn)
      setPresidentMessageAmColumn(messageAmColumn)

      return {
        tableName,
        id: rowId,
        messageEn: messageEnColumn ? String(row[messageEnColumn] ?? '') : '',
        messageAm: messageAmColumn ? String(row[messageAmColumn] ?? '') : '',
        messageEnColumn,
        messageAmColumn,
      } satisfies PresidentMessageRecord
    }

    if (missingTableCount === tableCandidates.length) {
      setPresidentMessageTableName(null)
      setPresidentMessageRowId(null)
      setPresidentMessageEnColumn(null)
      setPresidentMessageAmColumn(null)
    }

    return null
  }

  async function fetchAffiliationsRecord() {
    if (!supabase) {
      return null
    }

    const tableCandidates = ['Affiliations & Partnerships', 'affiliations_partnerships', 'affiliations & partnerships']
    let missingTableCount = 0

    for (const tableName of tableCandidates) {
      const { data, error: affiliationsError } = await supabase
        .from(tableName)
        .select('id,short_name,full_name,img_url')
        .order('id', { ascending: true })

      if (affiliationsError) {
        if (isMissingTableError(affiliationsError.message, tableName)) {
          missingTableCount += 1
          continue
        }

        throw affiliationsError
      }

      setAffiliationsTableName(tableName)

      return {
        tableName,
        items: (data ?? []).map((row, index) => ({
          id: String(row.id ?? `affiliation-${index + 1}`),
          shortName: String(row.short_name ?? ''),
          fullName: String(row.full_name ?? ''),
          logoUrl: String(row.img_url ?? ''),
        })),
      } satisfies AffiliationsRecord
    }

    if (missingTableCount === tableCandidates.length) {
      setAffiliationsTableName(null)
    }

    return null
  }

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    let active = true

    const hydrate = async (session: { user: { id: string; email?: string | null } } | null) => {
      if (!active) {
        return
      }

      if (!session) {
        setSignedIn(false)
        setLoading(false)
        return
      }

      setEmail(session.user.email ?? '')
      setSignedIn(true)
      await loadAdminData()

      if (active) {
        setLoading(false)
      }
    }

    supabase.auth.getSession().then(({ data }) => {
      hydrate(data.session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      hydrate(session)
    })

    return () => {
      active = false
      subscription.unsubscribe()
    }
  }, [supabase])

  useEffect(() => {
    if (!signedIn || !message) {
      return
    }

    toast.success(message, {
      duration: 3000,
    })
    setMessage('')
  }, [signedIn, message])

  useEffect(() => {
    if (!signedIn || !error) {
      return
    }

    toast.error(error, {
      duration: 3000,
    })
    setError('')
  }, [signedIn, error])

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!supabase) {
      setError('Supabase is not configured.')
      return
    }

    setSigningIn(true)
    setError('')
    setMessage('')

    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (signInError) {
      setError(signInError.message)
      setSigningIn(false)
      return
    }

    const nextEmail = data.user?.email ?? email
    setEmail(nextEmail)
    setSignedIn(true)

    if (data.user) {
      await loadAdminData()
      setMessage('Signed in successfully.')
    }

    setSigningIn(false)
  }

  async function handleSignOut() {
    if (!supabase) {
      return
    }

    await supabase.auth.signOut()
    setSignedIn(false)
    setPassword('')
    setMessage('')
    setError('')
  }

  function updateField<K extends keyof SiteContent>(key: K, value: SiteContent[K]) {
    setContent((current) => ({
      ...current,
      [key]: value,
    }))
  }

  function updateAffiliation(index: number, key: 'shortName' | 'fullName' | 'logoUrl', value: string) {
    setContent((current) => ({
      ...current,
      affiliations: current.affiliations.map((affiliation, itemIndex) =>
        itemIndex === index ? { ...affiliation, [key]: value } : affiliation
      ),
    }))
  }

  async function loadAdminData() {
    if (!supabase) {
      return
    }

    let homepageRecord: HomepageRecord | null = null
    let leadershipRecord: LeadershipRecord | null = null
    let announcementsRecord: AnnouncementsRecord | null = null
    let presidentMessageRecord: PresidentMessageRecord | null = null
    let affiliationsRecord: AffiliationsRecord | null = null

    try {
      homepageRecord = await fetchHomepageRecord()
    } catch (homepageError) {
      setError(homepageError instanceof Error ? homepageError.message : 'Failed to load homepage data.')
      return
    }

    try {
      leadershipRecord = await fetchLeadershipRecord()
    } catch (leadershipError) {
      setError(leadershipError instanceof Error ? leadershipError.message : 'Failed to load leadership data.')
      return
    }

    try {
      announcementsRecord = await fetchAnnouncementsRecord()
    } catch (announcementsError) {
      setError(announcementsError instanceof Error ? announcementsError.message : 'Failed to load announcements data.')
      return
    }

    try {
      presidentMessageRecord = await fetchPresidentMessageRecord()
    } catch (presidentMessageError) {
      setError(presidentMessageError instanceof Error ? presidentMessageError.message : 'Failed to load president message data.')
      return
    }

    try {
      affiliationsRecord = await fetchAffiliationsRecord()
    } catch (affiliationsTableError) {
      setError(affiliationsTableError instanceof Error ? affiliationsTableError.message : 'Failed to load affiliations data.')
      return
    }

    const [{ data: contentData, error: contentError }] = await Promise.all([
      supabase.from('site_content').select('*').eq('slug', 'primary').maybeSingle(),
    ])

    const loadErrors: string[] = []

    if (contentError && !isMissingTableError(contentError.message, 'site_content')) {
      loadErrors.push(contentError.message)
    }

    const normalizedContent = {
      ...defaultSiteContent,
      ...(contentData
        ? {
            churchesPlanted: Number(contentData.churches_planted ?? defaultSiteContent.churchesPlanted),
            churchesPlantedSuffix: String(contentData.churches_planted_suffix ?? defaultSiteContent.churchesPlantedSuffix),
            yearsOfMinistrySuffix: String(contentData.years_of_ministry_suffix ?? defaultSiteContent.yearsOfMinistrySuffix),
            announcementBadgeEn: String(contentData.announcement_badge_en ?? defaultSiteContent.announcementBadgeEn),
            announcementBadgeAm: String(contentData.announcement_badge_am ?? defaultSiteContent.announcementBadgeAm),
          }
        : {}),
    }

    normalizedContent.localChurches = homepageRecord?.localChurches ?? 0
    normalizedContent.believersNationwide = homepageRecord?.believersNationwide ?? 0
    normalizedContent.yearsOfMinistry = homepageRecord?.yearsOfMinistry ?? 0
    normalizedContent.pastorName = leadershipRecord?.name ?? ''
    normalizedContent.pastorRole = leadershipRecord?.role ?? ''
    normalizedContent.pastorPhotoUrl = leadershipRecord?.photoUrl ?? ''
    normalizedContent.servingSince = leadershipRecord?.servingSince ?? ''
    normalizedContent.email = leadershipRecord?.email ?? ''
    normalizedContent.phone = leadershipRecord?.phone ?? ''
    normalizedContent.credentials = leadershipRecord?.credentials ?? ''
    normalizedContent.messageEn = presidentMessageRecord?.messageEn ?? ''
    normalizedContent.messageAm = presidentMessageRecord?.messageAm ?? ''

    const normalizedAnnouncements = announcementsRecord?.items ?? []
    const normalizedAffiliations = affiliationsRecord?.items ?? []

    setContent({
      ...normalizedContent,
      announcementTitleEn: normalizedAnnouncements[0]?.titleEn ?? '',
      announcementTitleAm: normalizedAnnouncements[0]?.titleAm ?? '',
      announcementBodyEn: normalizedAnnouncements[0]?.bodyEn ?? '',
      announcementBodyAm: normalizedAnnouncements[0]?.bodyAm ?? '',
      affiliations: normalizedAffiliations,
    })
    setAnnouncements(normalizedAnnouncements)
    setError(loadErrors[0] ?? '')
  }

  async function saveSiteContent(partial: Partial<SiteContent>, successMessage: string, saveKey: string) {
    if (!supabase) {
      setError('Supabase is not configured.')
      return false
    }

    const nextContent = {
      ...content,
      ...partial,
    }

    setError('')
    setSavingKey(saveKey)

    const { error: saveError } = await supabase.from('site_content').upsert(
      {
        slug: 'primary',
        local_churches: nextContent.localChurches,
        believers_nationwide: nextContent.believersNationwide,
        churches_planted: nextContent.churchesPlanted,
        churches_planted_suffix: nextContent.churchesPlantedSuffix,
        years_of_ministry: nextContent.yearsOfMinistry,
        years_of_ministry_suffix: nextContent.yearsOfMinistrySuffix,
        pastor_name: nextContent.pastorName,
        pastor_role: nextContent.pastorRole,
        pastor_photo_url: nextContent.pastorPhotoUrl,
        serving_since: nextContent.servingSince,
        credentials: nextContent.credentials,
        email: nextContent.email,
        phone: nextContent.phone,
        message_en: nextContent.messageEn,
        message_am: nextContent.messageAm,
        announcement_badge_en: nextContent.announcementBadgeEn,
        announcement_badge_am: nextContent.announcementBadgeAm,
        announcement_title_en: nextContent.announcementTitleEn,
        announcement_title_am: nextContent.announcementTitleAm,
        announcement_body_en: nextContent.announcementBodyEn,
        announcement_body_am: nextContent.announcementBodyAm,
        affiliations: nextContent.affiliations,
      },
      { onConflict: 'slug' },
    )

    if (saveError) {
      setSavingKey(null)
      setError(saveError.message)
      return false
    }

    setSavingKey(null)

    setContent(nextContent)
    setMessage(successMessage)
    return true
  }

  async function saveHomepageStats() {
    if (!supabase) {
      setError('Supabase is not configured.')
      return false
    }

    setError('')
    setSavingKey('homepage')

    let targetTableName = homepageTableName
    let targetRowId = homepageRowId

    if (!targetTableName) {
      try {
        const homepageRecord = await fetchHomepageRecord()
        targetTableName = homepageRecord?.tableName ?? null
        targetRowId = homepageRecord?.id ?? 1
      } catch (homepageError) {
        setSavingKey(null)
        setError(homepageError instanceof Error ? homepageError.message : 'Failed to resolve homepage table.')
        return false
      }
    }

    if (!targetTableName) {
      setSavingKey(null)
      setError('Could not find a `homepage` table to save into.')
      return false
    }

    const payload = {
      'Local Churches': content.localChurches,
      'Believers Nationwide': content.believersNationwide,
      'Years of Ministry': content.yearsOfMinistry,
    }

    const { data: updatedRows, error: updateError } = await supabase
      .from(targetTableName)
      .update(payload)
      .eq('id', targetRowId ?? 1)
      .select('id')

    if (updateError && !isMissingTableError(updateError.message, targetTableName)) {
      setSavingKey(null)
      setError(updateError.message)
      return false
    }

    if (!updatedRows || updatedRows.length === 0) {
      const { error: insertError } = await supabase.from(targetTableName).insert({
        id: targetRowId ?? 1,
        ...payload,
      })

      if (insertError && !isMissingTableError(insertError.message, targetTableName)) {
        setSavingKey(null)
        setError(insertError.message)
        return false
      }
    }

    setMessage('Homepage stats updated.')
    setSavingKey(null)
    return true
  }

  async function saveLeadershipProfile() {
    if (!supabase) {
      setError('Supabase is not configured.')
      return false
    }

    setError('')
    setSavingKey('leadership-profile')

    let targetTableName = leadershipTableName
    let targetRowId = leadershipRowId

    if (!targetTableName) {
      try {
        const leadershipRecord = await fetchLeadershipRecord()
        targetTableName = leadershipRecord?.tableName ?? null
        targetRowId = leadershipRecord?.id ?? 1
      } catch (leadershipError) {
        setSavingKey(null)
        setError(leadershipError instanceof Error ? leadershipError.message : 'Failed to resolve leadership table.')
        return false
      }
    }

    if (!targetTableName) {
      setSavingKey(null)
      setError('Could not find a `Leadership` table to save into.')
      return false
    }

    const payload = {
      name: content.pastorName,
      role: content.pastorRole,
      photo_url: content.pastorPhotoUrl,
      'serving since': content.servingSince,
      email: content.email,
      phone: content.phone ? Number(normalizePhoneDigits(content.phone)) : null,
      credentials: content.credentials,
    }

    const { data: updatedRows, error: updateError } = await supabase
      .from(targetTableName)
      .update(payload)
      .eq('id', targetRowId ?? 1)
      .select('id')

    if (updateError && !isMissingTableError(updateError.message, targetTableName)) {
      setSavingKey(null)
      setError(updateError.message)
      return false
    }

    if (!updatedRows || updatedRows.length === 0) {
      const { error: insertError } = await supabase.from(targetTableName).insert({
        id: targetRowId ?? 1,
        ...payload,
      })

      if (insertError && !isMissingTableError(insertError.message, targetTableName)) {
        setSavingKey(null)
        setError(insertError.message)
        return false
      }
    }

    setMessage('Leadership profile updated.')
    setSavingKey(null)
    return true
  }

  async function savePresidentMessage() {
    if (!supabase) {
      setError('Supabase is not configured.')
      return false
    }

    setError('')
    setSavingKey('president-message')

    let targetTableName = presidentMessageTableName
    let targetRowId = presidentMessageRowId
    let messageEnColumn = presidentMessageEnColumn
    let messageAmColumn = presidentMessageAmColumn

    if (!targetTableName || !messageEnColumn || !messageAmColumn) {
      try {
        const record = await fetchPresidentMessageRecord()
        targetTableName = record?.tableName ?? null
        targetRowId = record?.id ?? 1
        messageEnColumn = record?.messageEnColumn ?? null
        messageAmColumn = record?.messageAmColumn ?? null
      } catch (presidentMessageError) {
        setSavingKey(null)
        setError(presidentMessageError instanceof Error ? presidentMessageError.message : 'Failed to resolve president message table.')
        return false
      }
    }

    if (!targetTableName || !messageEnColumn || !messageAmColumn) {
      setSavingKey(null)
      setError('Could not find a `President Message` table to save into.')
      return false
    }

    const payload: Record<string, string> = {
      [messageEnColumn]: content.messageEn,
      [messageAmColumn]: content.messageAm,
    }

    const { data: updatedRows, error: updateError } = await supabase
      .from(targetTableName)
      .update(payload)
      .eq('id', targetRowId ?? 1)
      .select('id')

    if (updateError && !isMissingTableError(updateError.message, targetTableName)) {
      setSavingKey(null)
      setError(updateError.message)
      return false
    }

    if (!updatedRows || updatedRows.length === 0) {
      const { error: insertError } = await supabase.from(targetTableName).insert({
        id: targetRowId ?? 1,
        ...payload,
      })

      if (insertError && !isMissingTableError(insertError.message, targetTableName)) {
        setSavingKey(null)
        setError(insertError.message)
        return false
      }
    }

    setMessage('President message updated.')
    setSavingKey(null)
    return true
  }

  async function clearPresidentMessage() {
    setContent((current) => ({
      ...current,
      messageEn: '',
      messageAm: '',
    }))

    const nextContent = {
      ...content,
      messageEn: '',
      messageAm: '',
    }

    setError('')
    setSavingKey('president-message')

    let targetTableName = presidentMessageTableName
    let targetRowId = presidentMessageRowId
    let messageEnColumn = presidentMessageEnColumn
    let messageAmColumn = presidentMessageAmColumn

    if (!targetTableName || !messageEnColumn || !messageAmColumn) {
      try {
        const record = await fetchPresidentMessageRecord()
        targetTableName = record?.tableName ?? null
        targetRowId = record?.id ?? 1
        messageEnColumn = record?.messageEnColumn ?? null
        messageAmColumn = record?.messageAmColumn ?? null
      } catch (presidentMessageError) {
        setSavingKey(null)
        setError(presidentMessageError instanceof Error ? presidentMessageError.message : 'Failed to resolve president message table.')
        return false
      }
    }

    if (!targetTableName || !messageEnColumn || !messageAmColumn) {
      setSavingKey(null)
      setError('Could not find a `President Message` table to save into.')
      return false
    }

    const payload: Record<string, string> = {
      [messageEnColumn]: nextContent.messageEn,
      [messageAmColumn]: nextContent.messageAm,
    }

    const { data: updatedRows, error: updateError } = await supabase!
      .from(targetTableName)
      .update(payload)
      .eq('id', targetRowId ?? 1)
      .select('id')

    if (updateError && !isMissingTableError(updateError.message, targetTableName)) {
      setSavingKey(null)
      setError(updateError.message)
      return false
    }

    if (!updatedRows || updatedRows.length === 0) {
      const { error: insertError } = await supabase!.from(targetTableName).insert({
        id: targetRowId ?? 1,
        ...payload,
      })

      if (insertError && !isMissingTableError(insertError.message, targetTableName)) {
        setSavingKey(null)
        setError(insertError.message)
        return false
      }
    }

    setMessage('President message cleared.')
    setSavingKey(null)
    return true
  }

  function openAddAnnouncement() {
    setAnnouncementDraft({
      id: null,
      titleEn: '',
      titleAm: '',
      bodyEn: '',
      bodyAm: '',
    })
    setAnnouncementDialogOpen(true)
  }

  function openEditAnnouncement(item: AnnouncementItem) {
    setAnnouncementDraft({
      id: item.id,
      titleEn: item.titleEn,
      titleAm: item.titleAm,
      bodyEn: item.bodyEn,
      bodyAm: item.bodyAm,
    })
    setAnnouncementDialogOpen(true)
  }

  async function deleteAnnouncement(id: string) {
    if (!supabase) {
      setError('Supabase is not configured.')
      return
    }

    setError('')
    setSavingKey(`announcement-delete-${id}`)

    let targetTableName = announcementsTableName
    if (!targetTableName) {
      try {
        const announcementsRecord = await fetchAnnouncementsRecord()
        targetTableName = announcementsRecord?.tableName ?? null
      } catch (announcementsError) {
        setSavingKey(null)
        setError(announcementsError instanceof Error ? announcementsError.message : 'Failed to resolve announcements table.')
        return
      }
    }

    if (!targetTableName) {
      setSavingKey(null)
      setError('Could not find an `Announcements` table to delete from.')
      return
    }

    const { error: deleteError } = await supabase.from(targetTableName).delete().eq('id', Number(id))

    if (deleteError) {
      setSavingKey(null)
      setError(deleteError.message)
      return
    }

    await loadAdminData()
    setMessage('Announcement deleted.')
    setSavingKey(null)
  }

  async function saveAnnouncementDraft() {
    if (!supabase) {
      setError('Supabase is not configured.')
      return
    }

    setError('')
    setSavingKey(`announcement-save-${announcementDraft.id ?? 'new'}`)

    let targetTableName = announcementsTableName
    if (!targetTableName) {
      try {
        const announcementsRecord = await fetchAnnouncementsRecord()
        targetTableName = announcementsRecord?.tableName ?? null
      } catch (announcementsError) {
        setSavingKey(null)
        setError(announcementsError instanceof Error ? announcementsError.message : 'Failed to resolve announcements table.')
        return
      }
    }

    if (!targetTableName) {
      setSavingKey(null)
      setError('Could not find an `Announcements` table to save into.')
      return
    }

    const payload = {
      title_en: announcementDraft.titleEn,
      title_am: announcementDraft.titleAm,
      body_en: announcementDraft.bodyEn,
      body_am: announcementDraft.bodyAm,
    }

    const query = announcementDraft.id
      ? supabase.from(targetTableName).update(payload).eq('id', Number(announcementDraft.id))
      : supabase.from(targetTableName).insert(payload)

    const { error: saveError } = await query

    if (saveError) {
      setSavingKey(null)
      setError(saveError.message)
      return
    }

    setAnnouncementDialogOpen(false)
    await loadAdminData()
    setMessage(announcementDraft.id ? 'Announcement updated.' : 'Announcement added.')
    setSavingKey(null)
  }

  function openAddAffiliation() {
    setAffiliationDraft({
      id: null,
      shortName: '',
      fullName: '',
      logoUrl: '',
    })
    setAffiliationDialogOpen(true)
  }

  function openEditAffiliation(affiliation: SiteAffiliation) {
    setAffiliationDraft({
      id: affiliation.id,
      shortName: affiliation.shortName,
      fullName: affiliation.fullName,
      logoUrl: affiliation.logoUrl,
    })
    setAffiliationDialogOpen(true)
  }

  async function deleteAffiliation(id: string) {
    if (!supabase) {
      setError('Supabase is not configured.')
      return
    }

    setError('')
    setSavingKey(`affiliation-delete-${id}`)

    let targetTableName = affiliationsTableName
    if (!targetTableName) {
      try {
        const record = await fetchAffiliationsRecord()
        targetTableName = record?.tableName ?? null
      } catch (affiliationsError) {
        setSavingKey(null)
        setError(affiliationsError instanceof Error ? affiliationsError.message : 'Failed to resolve affiliations table.')
        return
      }
    }

    if (!targetTableName) {
      setSavingKey(null)
      setError('Could not find an `Affiliations & Partnerships` table to delete from.')
      return
    }

    const { error: deleteError } = await supabase.from(targetTableName).delete().eq('id', Number(id))

    if (deleteError) {
      setSavingKey(null)
      setError(deleteError.message)
      return
    }

    await loadAdminData()
    setMessage('Affiliation deleted.')
    setSavingKey(null)
  }

  async function saveAffiliationDraft() {
    if (!supabase) {
      setError('Supabase is not configured.')
      return
    }

    setError('')
    setSavingKey(`affiliation-save-${affiliationDraft.id ?? 'new'}`)

    let targetTableName = affiliationsTableName
    if (!targetTableName) {
      try {
        const record = await fetchAffiliationsRecord()
        targetTableName = record?.tableName ?? null
      } catch (affiliationsError) {
        setSavingKey(null)
        setError(affiliationsError instanceof Error ? affiliationsError.message : 'Failed to resolve affiliations table.')
        return
      }
    }

    if (!targetTableName) {
      setSavingKey(null)
      setError('Could not find an `Affiliations & Partnerships` table to save into.')
      return
    }

    const payload = {
      short_name: affiliationDraft.shortName,
      full_name: affiliationDraft.fullName,
      img_url: affiliationDraft.logoUrl,
    }

    const query = affiliationDraft.id
      ? supabase.from(targetTableName).update(payload).eq('id', Number(affiliationDraft.id))
      : supabase.from(targetTableName).insert(payload)

    const { error: saveError } = await query

    if (saveError) {
      setSavingKey(null)
      setError(saveError.message)
      return
    }

    setAffiliationDialogOpen(false)
    await loadAdminData()
    setMessage(affiliationDraft.id ? 'Affiliation updated.' : 'Affiliation added.')
    setSavingKey(null)
  }

  if (!supabase) {
    return (
      <Card className="mx-auto mt-24 max-w-md rounded-3xl border border-[#331660]/12 bg-white/80 shadow-xl backdrop-blur">
        <CardContent className="p-8">
          <p className="text-sm text-muted-foreground">
            Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to enable the admin.
          </p>
        </CardContent>
      </Card>
    )
  }

  if (loading) {
    return (
      <Card className="mx-auto mt-24 max-w-md rounded-3xl border border-[#331660]/12 bg-white/80 shadow-xl backdrop-blur">
        <CardContent className="p-8">
          <p className="text-sm text-muted-foreground">Loading admin…</p>
        </CardContent>
      </Card>
    )
  }

  if (!signedIn) {
    return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(122,74,45,0.2),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(176,125,82,0.22),transparent_34%)]" />
        <Card className="relative mx-auto w-full max-w-md rounded-3xl border border-[#331660]/12 bg-white/80 shadow-xl backdrop-blur">
          <CardHeader className="space-y-2 px-8 pt-8 text-center">
            <CardTitle className="text-4xl font-semibold text-navy">Admin Sign In</CardTitle>
            <p className="text-sm text-foreground/70">Secure access to church content management.</p>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <form className="mt-4 space-y-4" onSubmit={handleSignIn}>
              {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
              {message && <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</p>}

              <div className="space-y-2">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="h-11 rounded-xl border-gold/50 bg-white px-4 text-navy focus-visible:border-gold focus-visible:ring-gold/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    className="h-11 rounded-xl border-gold/50 bg-white px-4 pr-12 text-navy focus-visible:border-gold focus-visible:ring-gold/30"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    aria-pressed={showPassword}
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/55 transition hover:text-navy"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <Button
                type="submit"
                className="h-11 w-full rounded-xl bg-gold font-semibold text-navy transition hover:bg-gold/90"
                disabled={signingIn}
              >
                {signingIn ? 'Signing in…' : 'Sign in'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <main className="page-shell pb-16">
      <section className="section-shell">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-5xl font-bold text-[#331660]">Admin Panel</h1>
            <p className="mt-3 text-sm text-foreground/70">
              Welcome
            </p>
          </div>
          <Button
            type="button"
            onClick={handleSignOut}
            className="rounded-xl bg-[#cf4741] px-5 text-white hover:bg-[#ba3d38]"
          >
            Log out
          </Button>
        </div>
      </section>

      <section className="section-shell mt-8">
        <div className="space-y-8">
          <div className="grid gap-8 xl:grid-cols-3 2xl:grid-cols-4">
            <ColumnPanel title="Homepage" showAdd={false}>
              <ItemCard title="Home Page Stats">
                <p className="text-sm text-foreground/75">Manage the homepage number blocks shown in home section.</p>
                <div className="mt-4 grid gap-3">
                  <Field label="Local Churches">
                    <Input
                      type="number"
                      value={content.localChurches}
                      onChange={(event) => updateField('localChurches', Number(event.target.value) || 0)}
                    />
                  </Field>
                  <Field label="Believers Nationwide">
                    <Input
                      type="number"
                      value={content.believersNationwide}
                      onChange={(event) => updateField('believersNationwide', Number(event.target.value) || 0)}
                    />
                  </Field>
                  <Field label="Years of Ministry">
                    <Input
                      type="number"
                      value={content.yearsOfMinistry}
                      onChange={(event) => updateField('yearsOfMinistry', Number(event.target.value) || 0)}
                    />
                  </Field>
                  <div className="flex gap-2 pt-1">
                    <ActionButton
                      label={savingKey === 'homepage' ? 'Saving…' : 'Save'}
                      onClick={saveHomepageStats}
                    />
                  </div>
                </div>
              </ItemCard>
            </ColumnPanel>

            <ColumnPanel title="Leadership" showAdd={false}>
              <ItemCard title="President Profile">
                <p className="text-sm text-foreground/75">
                  {content.pastorRole || 'Primary leadership profile shown in the leadership section.'}
                </p>
                <div className="mt-4 grid gap-3">
                  <Field label="Name">
                    <Input value={content.pastorName} onChange={(event) => updateField('pastorName', event.target.value)} />
                  </Field>
                  <Field label="Role">
                    <Input value={content.pastorRole} onChange={(event) => updateField('pastorRole', event.target.value)} />
                  </Field>
                  <Field label="Photo URL">
                    <ImageField
                      label="President Photo"
                      value={content.pastorPhotoUrl}
                      onChange={(value) => updateField('pastorPhotoUrl', value)}
                      onError={setError}
                    />
                  </Field>
                  <Field label="Serving Since">
                    <Input value={content.servingSince} onChange={(event) => updateField('servingSince', event.target.value)} />
                  </Field>
                  <Field label="Email">
                    <Input value={content.email} onChange={(event) => updateField('email', event.target.value)} />
                  </Field>
                  <Field label="Phone">
                    <div className="relative">
                      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-foreground/60">
                        +
                      </span>
                      <Input
                        type="tel"
                        inputMode="numeric"
                        value={content.phone}
                        onChange={(event) => updateField('phone', normalizePhoneDigits(event.target.value))}
                        className="pl-8"
                      />
                    </div>
                  </Field>
                  <Field label="Credentials">
                    <Textarea value={content.credentials} onChange={(event) => updateField('credentials', event.target.value)} />
                  </Field>
                  <div className="flex gap-2 pt-1">
                    <ActionButton
                      label={savingKey === 'leadership-profile' ? 'Saving…' : 'Save'}
                      onClick={saveLeadershipProfile}
                    />
                  </div>
                </div>
              </ItemCard>
            </ColumnPanel>

            <ColumnPanel
              title="President Message"
              showAdd={false}
              className="xl:order-4 xl:col-span-2 2xl:order-3 2xl:col-span-2"
            >
              <div className="grid gap-4 xl:grid-cols-2">
                <ItemCard title="English Version">
                  <p className="mb-3 text-sm text-foreground/75">Long-form leadership message for English readers.</p>
                  <Field label="Message (English)">
                    <Textarea
                      className="min-h-64"
                      value={content.messageEn}
                      onChange={(event) => updateField('messageEn', event.target.value)}
                    />
                  </Field>
                </ItemCard>

                <ItemCard title="Amharic Version">
                  <p className="mb-3 text-sm text-foreground/75">Long-form leadership message for Amharic readers.</p>
                  <Field label="Message (Amharic)">
                    <Textarea
                      className="min-h-64"
                      value={content.messageAm}
                      onChange={(event) => updateField('messageAm', event.target.value)}
                    />
                  </Field>
                </ItemCard>
              </div>
              <div className="flex gap-2">
                <ActionButton
                  label={savingKey === 'president-message' ? 'Saving…' : 'Save'}
                  onClick={savePresidentMessage}
                />
                <ActionButton
                  label="Delete"
                  destructive
                  onClick={clearPresidentMessage}
                />
              </div>
            </ColumnPanel>

            <ColumnPanel
              title="Announcements"
              addLabel="Add"
              onAddClick={openAddAnnouncement}
              className="xl:order-3 2xl:order-4"
            >
              <ItemCard title="Announcements">
                <div className="space-y-4">
                  {announcements.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-[#d9cbff] bg-white/70 p-4 text-sm text-foreground/65">
                      No announcements yet. Use `+ Add` to create one.
                    </div>
                  ) : null}

                  {announcements.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-[#e7ddff] bg-white/80 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h4 className="font-semibold text-[#2c2157]">Announcement</h4>
                          <p className="mt-1 line-clamp-2 text-sm text-foreground/70">
                            {item.titleEn || item.titleAm || 'No title yet'}
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 line-clamp-3 text-sm text-foreground/75">
                        {item.bodyEn || item.bodyAm || 'No announcement body yet.'}
                      </p>
                      <div className="mt-4 flex gap-2">
                        <ActionButton
                          label="Edit"
                          onClick={() => openEditAnnouncement(item)}
                          disabled={savingKey === `announcement-delete-${item.id}`}
                        />
                        <ActionButton
                          label={savingKey === `announcement-delete-${item.id}` ? 'Deleting…' : 'Delete'}
                          destructive
                          disabled={savingKey === `announcement-delete-${item.id}`}
                          onClick={() => deleteAnnouncement(item.id)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </ItemCard>
            </ColumnPanel>

            <ColumnPanel
              title="Affiliations & Partnerships"
              addLabel="Add"
              onAddClick={openAddAffiliation}
              className="xl:order-5 2xl:order-5"
            >
              <ItemCard title="Partner Organizations">
                <div className="space-y-4">
                  {content.affiliations.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-[#d9cbff] bg-white/70 p-4 text-sm text-foreground/65">
                      No partner organizations yet. Use `+ Add` to create one.
                    </div>
                  ) : null}

                  {content.affiliations.map((affiliation) => (
                    <div key={affiliation.id} className="rounded-2xl border border-[#e7ddff] bg-white/80 p-4">
                      <div className="min-w-0">
                        <h4 className="font-semibold text-[#2c2157]">
                          {affiliation.shortName || 'Partner Organization'}
                        </h4>
                        <p className="mt-1 line-clamp-2 text-sm text-foreground/70">
                          {affiliation.fullName || 'No organization name yet'}
                        </p>
                      </div>
                      {affiliation.logoUrl ? (
                        <div className="mt-4 overflow-hidden rounded-2xl border border-[#e7ddff] bg-white/80">
                          <img
                            src={affiliation.logoUrl}
                            alt={affiliation.fullName || affiliation.shortName || 'Affiliation logo'}
                            className="h-28 w-full object-cover"
                          />
                        </div>
                      ) : null}
                      <div className="mt-4 flex gap-2">
                        <ActionButton
                          label="Edit"
                          onClick={() => openEditAffiliation(affiliation)}
                          disabled={savingKey === `affiliation-delete-${affiliation.id}`}
                        />
                        <ActionButton
                          label={savingKey === `affiliation-delete-${affiliation.id}` ? 'Deleting…' : 'Delete'}
                          destructive
                          disabled={savingKey === `affiliation-delete-${affiliation.id}`}
                          onClick={() => deleteAffiliation(affiliation.id)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </ItemCard>
            </ColumnPanel>
          </div>

        </div>
      </section>

      <Dialog open={announcementDialogOpen} onOpenChange={setAnnouncementDialogOpen}>
        <DialogContent className="flex max-h-[90vh] w-[min(56rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-3xl border border-[#e7ddff] bg-[#fffaf6] p-0">
          <DialogHeader className="shrink-0 border-b border-[#efe3ff] px-6 py-5">
            <DialogTitle className="text-2xl font-semibold text-[#331660]">
              {announcementDraft.id ? 'Edit Announcement' : 'Add Announcement'}
            </DialogTitle>
          </DialogHeader>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
            <div className="grid gap-4">
            <Field label="Title (English)">
              <Input
                value={announcementDraft.titleEn}
                onChange={(event) =>
                  setAnnouncementDraft((current) => ({
                    ...current,
                    titleEn: event.target.value,
                  }))
                }
              />
            </Field>

            <Field label="Title (Amharic)">
              <Input
                value={announcementDraft.titleAm}
                onChange={(event) =>
                  setAnnouncementDraft((current) => ({
                    ...current,
                    titleAm: event.target.value,
                  }))
                }
              />
            </Field>

            <Field label="Body (English)">
              <Textarea
                className="min-h-40"
                value={announcementDraft.bodyEn}
                onChange={(event) =>
                  setAnnouncementDraft((current) => ({
                    ...current,
                    bodyEn: event.target.value,
                  }))
                }
              />
            </Field>

            <Field label="Body (Amharic)">
              <Textarea
                className="min-h-40"
                value={announcementDraft.bodyAm}
                onChange={(event) =>
                  setAnnouncementDraft((current) => ({
                    ...current,
                    bodyAm: event.target.value,
                  }))
                }
              />
            </Field>
            </div>
          </div>

          <DialogFooter className="shrink-0 border-t border-[#efe3ff] px-6 py-5">
            <Button type="button" variant="outline" onClick={() => setAnnouncementDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="button" className="bg-navy text-white hover:bg-navy/90" onClick={saveAnnouncementDraft}>
              {announcementDraft.id ? 'Update' : 'Add'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={affiliationDialogOpen} onOpenChange={setAffiliationDialogOpen}>
        <DialogContent className="flex max-h-[90vh] w-[min(42rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-3xl border border-[#e7ddff] bg-[#fffaf6] p-0">
          <DialogHeader className="shrink-0 border-b border-[#efe3ff] px-6 py-5">
            <DialogTitle className="text-2xl font-semibold text-[#331660]">
              {affiliationDraft.id ? 'Edit Affiliation' : 'Add Affiliation'}
            </DialogTitle>
          </DialogHeader>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
            <div className="grid gap-4">
              <Field label="Short Name">
                <Input
                  value={affiliationDraft.shortName}
                  onChange={(event) =>
                    setAffiliationDraft((current) => ({
                      ...current,
                      shortName: event.target.value,
                    }))
                  }
                />
              </Field>

              <Field label="Full Name">
                <Input
                  value={affiliationDraft.fullName}
                  onChange={(event) =>
                    setAffiliationDraft((current) => ({
                      ...current,
                      fullName: event.target.value,
                    }))
                  }
                />
              </Field>

              <Field label="Logo">
              <ImageField
                label="Affiliation Logo"
                value={affiliationDraft.logoUrl}
                bucketName="partnership"
                onChange={(value) =>
                  setAffiliationDraft((current) => ({
                    ...current,
                    logoUrl: value,
                  }))
                }
                onError={setError}
              />
              </Field>
            </div>
          </div>

          <DialogFooter className="shrink-0 border-t border-[#efe3ff] px-6 py-5">
            <Button type="button" variant="outline" onClick={() => setAffiliationDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="button" className="bg-navy text-white hover:bg-navy/90" onClick={saveAffiliationDraft}>
              {affiliationDraft.id ? 'Update' : 'Add'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="min-w-0 space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  )
}

function ColumnPanel({
  title,
  addLabel = 'Add',
  showAdd = true,
  onAddClick,
  className,
  children,
}: {
  title: string
  addLabel?: string
  showAdd?: boolean
  onAddClick?: () => void
  className?: string
  children: ReactNode
}) {
  return (
    <Card
      className={`h-[min(70vh,820px)] overflow-hidden rounded-[1.65rem] border border-[#e7ddff] bg-white/80 shadow-[0_14px_34px_-28px_rgba(76,29,149,0.45)] ${className ?? ''}`}
    >
      <CardHeader className="flex flex-col items-start gap-3 pb-4">
        <CardTitle className="max-w-full break-words text-[2.35rem] leading-[0.95] font-semibold text-[#22184c]">
          {title}
        </CardTitle>
        {showAdd ? (
          <Button
            type="button"
            onClick={onAddClick}
            className="rounded-xl bg-gold px-4 text-navy hover:bg-gold/90"
          >
            + {addLabel}
          </Button>
        ) : null}
      </CardHeader>
      <CardContent className="h-full space-y-4 overflow-y-auto pb-6">{children}</CardContent>
    </Card>
  )
}

function ItemCard({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="rounded-3xl border border-[#e7ddff] bg-white/70 p-4 shadow-[0_10px_26px_-24px_rgba(76,29,149,0.35)]">
      <h3 className="max-w-full break-words text-xl font-semibold leading-tight text-[#2c2157]">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  )
}

function ImageField({
  label,
  value,
  onChange,
  onError,
  bucketName = 'image',
}: {
  label: string
  value: string
  onChange: (value: string) => void
  onError?: (message: string) => void
  bucketName?: string
}) {
  const [uploading, setUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState('')

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    const objectUrl = URL.createObjectURL(file)
    setPreviewUrl(objectUrl)

    const supabase = getSupabaseBrowserClient()
    if (!supabase) {
      onError?.('Supabase is not configured.')
      event.target.value = ''
      return
    }

    setUploading(true)

    const extension = file.name.includes('.') ? file.name.split('.').pop() : 'jpg'
    const safeBaseName = file.name
      .replace(/\.[^.]+$/, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
    const filePath = `${safeBaseName || 'image'}.${extension}`

    const { error: uploadError } = await supabase.storage.from(bucketName).upload(filePath, file, {
      upsert: false,
    })

    if (uploadError) {
      if (uploadError.message.toLowerCase().includes('already exists')) {
        const {
          data: { publicUrl },
        } = supabase.storage.from(bucketName).getPublicUrl(filePath)

        onChange(publicUrl)
        setPreviewUrl('')
        setUploading(false)
        event.target.value = ''
        return
      }

      setUploading(false)
      onError?.(uploadError.message)
      event.target.value = ''
      return
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from(bucketName).getPublicUrl(filePath)

    onChange(publicUrl)
    setPreviewUrl('')
    setUploading(false)
    event.target.value = ''
  }

  return (
    <div className="space-y-3">
      {previewUrl || value ? (
        <div className="overflow-hidden rounded-2xl border border-[#e7ddff] bg-white/80">
          <img src={previewUrl || value} alt={label} className="h-40 w-full object-cover" />
        </div>
      ) : (
        <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-[#d9cbff] bg-white/60 text-sm text-foreground/55">
          No image selected
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <Input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Paste image URL or browse" />
        <label className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-gold px-4 py-2 text-sm font-medium text-navy hover:bg-gold/90">
          {uploading ? 'Uploading…' : 'Browse Image'}
          <input type="file" accept="image/*" className="sr-only" onChange={handleFileChange} />
        </label>
      </div>
    </div>
  )
}

function ActionButton({
  label,
  destructive = false,
  onClick,
  disabled = false,
}: {
  label: string
  destructive?: boolean
  onClick?: () => void
  disabled?: boolean
}) {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={onClick}
      disabled={disabled}
      className={
        destructive
          ? 'rounded-xl border-[#f0d7d7] bg-white text-[#b53c35] hover:bg-red-50 hover:text-[#9f302a] disabled:cursor-not-allowed disabled:opacity-60'
          : 'rounded-xl border-gold/40 bg-white text-[#8b6a1f] hover:bg-gold/10 hover:text-navy disabled:cursor-not-allowed disabled:opacity-60'
      }
    >
      {label}
    </Button>
  )
}

function normalizeAnnouncements(rows: Array<Record<string, unknown>>): AnnouncementItem[] {
  return rows.map((row, index) => ({
    id: String(row.id ?? `announcement-${index + 1}`),
    titleEn: String(row.title_en ?? ''),
    titleAm: String(row.title_am ?? ''),
    bodyEn: String(row.body_en ?? ''),
    bodyAm: String(row.body_am ?? ''),
  }))
}

function normalizeAffiliations(rows: Array<Record<string, unknown>>): SiteAffiliation[] {
  return rows.map((row, index) => ({
    id: String(row.id ?? `affiliation-${index + 1}`),
    shortName: String(row.short_name ?? ''),
    fullName: String(row.full_name ?? ''),
    logoUrl: String(row.logo_url ?? ''),
  }))
}
