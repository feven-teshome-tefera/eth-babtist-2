import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { AnnouncementSection } from '@/components/announcement-section'
import { AboutSection } from '@/components/about-section'
import { MissionSection } from '@/components/mission-section'
import { ValuesSection } from '@/components/values-section'
import { FaithSection } from '@/components/faith-section'
import { LeadershipSection } from '@/components/leadership-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import Script from 'next/script'
import { getServerLanguage } from '@/lib/site-language'
import { siteCopy } from '@/lib/site-copy'
import { getSiteContent } from '@/lib/supabase/server'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: 'Emmanuel Baptist Church of Ethiopia',
  alternateName: 'EBCE',
  url: siteUrl,
  logo: `${siteUrl}/apple-icon.png`,
  image: `${siteUrl}/ourchurch1.jpg`,
  description:
    'Emmanuel Baptist Church of Ethiopia is a legally registered Baptist denomination serving Ethiopia through Gospel proclamation, discipleship, leadership development, and healthy church multiplication.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kazanchis Woreda 8, House No. 304',
    addressLocality: 'Addis Ababa',
    addressCountry: 'ET',
    postOfficeBoxNumber: '30042',
  },
  telephone: '+251 111 56125',
  email: 'ebceethiopia@gmail.com',
  sameAs: ['https://t.me/+LDH9i5_5DitiZDA8'],
}

export default async function Home() {
  const language = await getServerLanguage()
  const copy = siteCopy[language]
  const siteContent = await getSiteContent()

  return (
    <main className="min-h-screen">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navigation />
      <Hero copy={copy} siteContent={siteContent} />
      <AnnouncementSection language={language} siteContent={siteContent} />
      <AboutSection />
      <MissionSection />
      <ValuesSection />
      <FaithSection />
      <LeadershipSection siteContent={siteContent} />
      <ContactSection />
      <Footer copy={copy} />
    </main>
  )
}
