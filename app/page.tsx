import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { MissionSection } from '@/components/mission-section'
import { ValuesSection } from '@/components/values-section'
import { FaithSection } from '@/components/faith-section'
import { LeadershipSection } from '@/components/leadership-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <MissionSection />
      <ValuesSection />
      <FaithSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
