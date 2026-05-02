import type { Language } from '@/lib/site-copy'

export type SiteAffiliation = {
  id: string
  shortName: string
  fullName: string
  logoUrl: string
}

export type SiteAnnouncement = {
  id: string
  titleEn: string
  titleAm: string
  bodyEn: string
  bodyAm: string
  imageUrl: string
}

export type SiteContent = {
  localChurches: number
  believersNationwide: number
  churchesPlanted: number
  churchesPlantedSuffix: string
  yearsOfMinistry: number
  yearsOfMinistrySuffix: string
  pastorName: string
  pastorRole: string
  pastorPhotoUrl: string
  boardChairName: string
  boardChairRole: string
  boardChairPhotoUrl: string
  servingSince: string
  credentials: string
  email: string
  phone: string
  messageEn: string
  messageAm: string
  boardChairMessageEn: string
  boardChairMessageAm: string
  announcementBadgeEn: string
  announcementBadgeAm: string
  announcementTitleEn: string
  announcementTitleAm: string
  announcementBodyEn: string
  announcementBodyAm: string
  announcementImageUrl: string
  announcements: SiteAnnouncement[]
  affiliations: SiteAffiliation[]
}

export const defaultSiteContent: SiteContent = {
  localChurches: 143,
  believersNationwide: 132456,
  churchesPlanted: 30,
  churchesPlantedSuffix: '+',
  yearsOfMinistry: 65,
  yearsOfMinistrySuffix: '+',
  pastorName: 'Pastor Yonas Fikadu',
  pastorRole: 'President, Emmanuel Baptist Church of Ethiopia',
  pastorPhotoUrl: '/ChatGPT Image Apr 17, 2026, 07_43_52 PM.png',
  boardChairName: 'Afera Asmerom',
  boardChairRole: 'Board Chair, Emmanuel Baptist Church of Ethiopia',
  boardChairPhotoUrl: '/board1.png',
  servingSince: '2019',
  credentials:
    'BA, M.Div. in Theology, Doctor of Ministry (D.Min.), B.A. in Leadership and Management',
  email: 'lejonahj@gmail.com',
  phone: '+251 911 679 842',
  messageEn: [
    'Grace and peace to you in the name of our Lord Jesus Christ.',
    'I am deeply grateful to God for the privilege of serving as President of the Emmanuel Baptist Church of Ethiopia. We firmly believe that this is a strategic time for the preaching of the Gospel in our nation.',
    'Our generation is in great need of the saving message of Jesus Christ, and the church must faithfully proclaim this good news with conviction and dedication.',
    'Our calling as a denomination is clear. We are committed to proclaiming the Gospel, making true disciples of our Lord Jesus Christ, and planting new biblical and healthy churches. At the same time, we are devoted to strengthening and guiding existing churches so they remain faithful to the Word of God.',
    'Equipping ministers and raising a new generation of leaders with sound biblical teaching is also a central priority of our ministry. Strong churches require well-prepared leaders who faithfully teach Scripture, shepherd God’s people, and lead according to biblical principles.',
    'Over the past years, our denominational office has been actively engaged in encouraging evangelism, supporting church planting efforts, strengthening congregations, and training pastors and ministry leaders. We remain committed to expanding this work across Ethiopia and beyond.',
    'I invite you to join us in prayer, partnership, and faithful service as we work together to fulfill the mission God has entrusted to His church.',
  ].join('\n\n'),
  messageAm: [
    'በጌታችን በኢየሱስ ክርስቶስ ስም ጸጋና ሰላም ለእናንተ ይሁን።',
    'በኢትዮጵያ አማኑኤል ባፕቲስት ቤተ ክርስቲያን ፕሬዚዳንት ሆኜ ማገልገል የሰጠኝን እድል ስለ እግዚአብሔር እጅግ አመሰግናለሁ። ይህ በሀገራችን ወንጌል ለመስበክ ወሳኝ ጊዜ መሆኑን እናምናለን።',
    'ትውልዳችን የኢየሱስ ክርስቶስን የሚያድን መልእክት በጣም ይፈልጋል፣ ቤተ ክርስቲያንም ይህን ምሥራች በታማኝነት ማወጅ አለባት።',
    'እንደ ማህበር ጥሪያችን ግልጽ ነው። ወንጌልን ለማወጅ፣ እውነተኛ የጌታችን ኢየሱስ ክርስቶስ ደቀ መዛሙርትን ለማፍራት እና አዳዲስ መጽሐፍ ቅዱሳዊ ጤናማ አብያተ ክርስቲያናትን ለመትከል ቁርጠኞች ነን።',
    'አገልጋዮችን ማብቃት እና በጠንካራ የመጽሐፍ ቅዱስ ትምህርት አዲስ ትውልድ መሪዎችን ማስነሳት የአገልግሎታችን አስፈላጊ ክፍል ነው።',
    'ባለፉት ዓመታት የማህበራችን ቢሮ ወንጌል ስብከትን ለማበረታታት፣ የቤተ ክርስቲያን መትከልን ለማገዝ፣ ጉባኤዎችን ለማጠናከር እና እረኞችን ለማሰልጠን በትጋት ሰርቷል።',
    'እግዚአብሔር ለቤተ ክርስቲያኑ የሰጠውን ተልዕኮ በአንድነት እንፈጽም ዘንድ በጸሎት፣ በአጋርነት እና በታማኝ አገልግሎት እንድትቀላቀሉ እጋብዛችኋለሁ።',
  ].join('\n\n'),
  boardChairMessageEn: [
    'Grace and peace to you in the name of our Lord Jesus Christ.',
    'As Board Chair of Emmanuel Baptist Church of Ethiopia, I thank God for the unity, faithfulness, and generosity that continue to strengthen this denomination.',
    'Our churches are called to stand firm on biblical truth, serve with humility, and work together in love so that the Gospel may reach more communities across Ethiopia.',
    'The board remains committed to supporting the spiritual health, accountability, and long-term mission of our churches. We believe healthy leadership and faithful cooperation are essential for lasting impact.',
    'I invite you to continue with us in prayer, sacrificial service, and partnership as we seek to honor Christ and advance His Kingdom together.',
  ].join('\n\n'),
  boardChairMessageAm: [
    'በጌታችን በኢየሱስ ክርስቶስ ስም ጸጋና ሰላም ለእናንተ ይሁን።',
    'የኢትዮጵያ አማኑኤል ባፕቲስት ቤተ ክርስቲያን የቦርድ ሰብሳቢ እንደመሆኔ ይህን ማህበር የሚያጠናክሩትን አንድነት፣ ታማኝነት እና ልግስና ስለሰጠን እግዚአብሔርን አመሰግናለሁ።',
    'ቤተ ክርስቲያናችን በመጽሐፍ ቅዱሳዊ እውነት መጽናት፣ በትህትና ማገልገል እና በፍቅር በአንድነት መስራት አለባት ወንጌልም በኢትዮጵያ ውስጥ ለብዙ ማህበረሰቦች ይድረስ ዘንድ።',
    'ቦርዱ የቤተ ክርስቲያናችንን መንፈሳዊ ጤና፣ ተጠያቂነት እና የረጅም ጊዜ ተልዕኮ ለመደገፍ ቁርጠኛ ነው። ጤናማ አመራር እና ታማኝ ትብብር ለረጅም ጊዜ ፍሬ እንዲያፈሩ አስፈላጊ መሆናቸውን እናምናለን።',
    'ክርስቶስን እንድናከብር እና መንግሥቱን በአንድነት እንድናስፋፋ በጸሎት፣ በመስዋዕታዊ አገልግሎት እና በአጋርነት ከእኛ ጋር እንድትቀጥሉ እጋብዛችኋለሁ።',
  ].join('\n\n'),
  announcementBadgeEn: 'Announcement',
  announcementBadgeAm: 'ማስታወቂያ',
  announcementTitleEn: '',
  announcementTitleAm: '',
  announcementBodyEn: '',
  announcementBodyAm: '',
  announcementImageUrl: '',
  announcements: [],
  affiliations: [
    {
      id: 'bwa',
      shortName: 'BWA',
      fullName: 'Baptist World Alliance',
      logoUrl: '',
    },
    {
      id: 'aabf',
      shortName: 'AABF',
      fullName: 'All African Baptist Fellowship',
      logoUrl: '',
    },
  ],
}

export function getMessageParagraphs(message: string) {
  return message
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

export function getLocalizedMessage(content: SiteContent, language: Language) {
  const preferredMessage = language === 'am' ? content.messageAm : content.messageEn
  const fallbackMessage = language === 'am' ? content.messageEn : content.messageAm

  return preferredMessage.trim() || fallbackMessage.trim()
}

export function getLocalizedAnnouncement(content: SiteContent, language: Language) {
  const firstAnnouncement = content.announcements[0]
  const preferredBadge = language === 'am' ? content.announcementBadgeAm : content.announcementBadgeEn
  const fallbackBadge = language === 'am' ? content.announcementBadgeEn : content.announcementBadgeAm
  const preferredTitle =
    language === 'am' ? firstAnnouncement?.titleAm ?? content.announcementTitleAm : firstAnnouncement?.titleEn ?? content.announcementTitleEn
  const fallbackTitle =
    language === 'am' ? firstAnnouncement?.titleEn ?? content.announcementTitleEn : firstAnnouncement?.titleAm ?? content.announcementTitleAm
  const preferredBody =
    language === 'am' ? firstAnnouncement?.bodyAm ?? content.announcementBodyAm : firstAnnouncement?.bodyEn ?? content.announcementBodyEn
  const fallbackBody =
    language === 'am' ? firstAnnouncement?.bodyEn ?? content.announcementBodyEn : firstAnnouncement?.bodyAm ?? content.announcementBodyAm

  return {
    badge: preferredBadge.trim() || fallbackBadge.trim(),
    title: preferredTitle.trim() || fallbackTitle.trim(),
    body: preferredBody.trim() || fallbackBody.trim(),
  }
}

export function getLocalizedBoardChairMessage(content: SiteContent, language: Language) {
  const preferredMessage = language === 'am' ? content.boardChairMessageAm : content.boardChairMessageEn
  const fallbackMessage = language === 'am' ? content.boardChairMessageEn : content.boardChairMessageAm

  return preferredMessage.trim() || fallbackMessage.trim()
}

export function getLocalizedServingSince(servingSince: string, language: Language) {
  const trimmedValue = servingSince.trim()

  if (!trimmedValue) {
    return trimmedValue
  }

  if (/(G\.C|E\.C|GC|EC)\b/.test(trimmedValue)) {
    return trimmedValue
  }

  const rangeMatch = trimmedValue.match(/^(\d{4})\s*-\s*(\d{4})$/)
  if (rangeMatch) {
    const start = Number(rangeMatch[1])
    const end = Number(rangeMatch[2])

    if (language === 'am') {
      return `${start - 8}-${end - 8} E.C`
    }

    return `${start}-${end} G.C`
  }

  const singleYearMatch = trimmedValue.match(/^(\d{4})$/)
  if (singleYearMatch) {
    const year = Number(singleYearMatch[1])

    if (language === 'am') {
      return `${year - 8} E.C`
    }

    return `${year} G.C`
  }

  return trimmedValue
}

export function normalizeSiteContent(record?: Record<string, unknown> | null): SiteContent {
  if (!record) {
    return defaultSiteContent
  }

  const affiliations = Array.isArray(record.affiliations)
    ? record.affiliations
        .map((item, index) => {
          if (!item || typeof item !== 'object') {
            return defaultSiteContent.affiliations[index] ?? null
          }

          const value = item as Record<string, unknown>

          return {
            id: getString(value.id, defaultSiteContent.affiliations[index]?.id ?? `affiliation-${index + 1}`),
            shortName: getString(value.shortName, defaultSiteContent.affiliations[index]?.shortName ?? ''),
            fullName: getString(value.fullName, defaultSiteContent.affiliations[index]?.fullName ?? ''),
            logoUrl: getString(value.logoUrl, ''),
          }
        })
        .filter((item): item is SiteAffiliation => item !== null)
    : defaultSiteContent.affiliations

  return {
    localChurches: getNumber(record.local_churches, defaultSiteContent.localChurches),
    believersNationwide: getNumber(record.believers_nationwide, defaultSiteContent.believersNationwide),
    churchesPlanted: getNumber(record.churches_planted, defaultSiteContent.churchesPlanted),
    churchesPlantedSuffix: getString(record.churches_planted_suffix, defaultSiteContent.churchesPlantedSuffix),
    yearsOfMinistry: getNumber(record.years_of_ministry, defaultSiteContent.yearsOfMinistry),
    yearsOfMinistrySuffix: getString(record.years_of_ministry_suffix, defaultSiteContent.yearsOfMinistrySuffix),
    pastorName: getString(record.pastor_name, defaultSiteContent.pastorName),
    pastorRole: getString(record.pastor_role, defaultSiteContent.pastorRole),
    pastorPhotoUrl: getString(record.pastor_photo_url, defaultSiteContent.pastorPhotoUrl),
    boardChairName: getString(record.board_chair_name, defaultSiteContent.boardChairName),
    boardChairRole: getString(record.board_chair_role, defaultSiteContent.boardChairRole),
    boardChairPhotoUrl: getString(record.board_chair_photo_url, defaultSiteContent.boardChairPhotoUrl),
    servingSince: getString(record.serving_since, defaultSiteContent.servingSince),
    credentials: getString(record.credentials, defaultSiteContent.credentials),
    email: getString(record.email, defaultSiteContent.email),
    phone: getString(record.phone, defaultSiteContent.phone),
    messageEn: getString(record.message_en, defaultSiteContent.messageEn),
    messageAm: getString(record.message_am, defaultSiteContent.messageAm),
    boardChairMessageEn: getString(record.board_chair_message_en, defaultSiteContent.boardChairMessageEn),
    boardChairMessageAm: getString(record.board_chair_message_am, defaultSiteContent.boardChairMessageAm),
    announcementBadgeEn: getString(record.announcement_badge_en, defaultSiteContent.announcementBadgeEn),
    announcementBadgeAm: getString(record.announcement_badge_am, defaultSiteContent.announcementBadgeAm),
    announcementTitleEn: getString(record.announcement_title_en, defaultSiteContent.announcementTitleEn),
    announcementTitleAm: getString(record.announcement_title_am, defaultSiteContent.announcementTitleAm),
    announcementBodyEn: getString(record.announcement_body_en, defaultSiteContent.announcementBodyEn),
    announcementBodyAm: getString(record.announcement_body_am, defaultSiteContent.announcementBodyAm),
    announcementImageUrl: getString(record.announcement_image_url, defaultSiteContent.announcementImageUrl),
    announcements: defaultSiteContent.announcements,
    affiliations: affiliations.length > 0 ? affiliations : defaultSiteContent.affiliations,
  }
}

function getNumber(value: unknown, fallback: number) {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

function getString(value: unknown, fallback: string) {
  return typeof value === 'string' ? value : fallback
}
