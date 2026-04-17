import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emmanuel Baptist Church of Ethiopia | Gospel, Discipleship, and Church Planting',
  description: 'Emmanuel Baptist Church of Ethiopia is a legally registered Baptist denomination serving Ethiopia through Gospel proclamation, discipleship, leadership development, and healthy church multiplication.',
  keywords: ['Emmanuel Baptist Church of Ethiopia', 'EBCE', 'Ethiopia', 'Baptist', 'Church Planting', 'Discipleship', 'Addis Ababa'],
  authors: [{ name: 'Emmanuel Baptist Church of Ethiopia' }],
  openGraph: {
    title: 'Emmanuel Baptist Church of Ethiopia',
    description: 'Serving Ethiopia since 1960 through Gospel proclamation, discipleship, and healthy church planting.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
