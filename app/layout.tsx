import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/components/language-provider'
import { Toaster } from '@/components/ui/sonner'
import { getServerLanguage } from '@/lib/site-language'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://www.ethiopianemmanuelbaptistchurch.com'
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ethiopian Emmanuel Baptist Church',
    template: '%s | Ethiopian Emmanuel Baptist Church',
  },

  description:
    'Ethiopian Emmanuel Baptist Church shares worship services, ministries, events, and church updates for the Ethiopian community.',

  applicationName: 'Emmanuel Baptist Church of Ethiopia',
  keywords: [
    'Emmanuel Baptist Church of Ethiopia',
    'Ethiopian Emmanuel Baptist',
    'EBCE',
    'Ethiopia',
    'Baptist church Ethiopia',
    'Church planting Ethiopia',
    'Discipleship',
    'Addis Ababa church',
    'Evangelical church Ethiopia',
  ],
  authors: [{ name: 'Emmanuel Baptist Church of Ethiopia' }],
  alternates: {
    canonical: '/',
  },
  category: 'religion',
  creator: 'Emmanuel Baptist Church of Ethiopia',
  publisher: 'Emmanuel Baptist Church of Ethiopia',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Emmanuel Baptist Church of Ethiopia',
    description: 'Serving Ethiopia since 1960 G.C through Gospel proclamation, discipleship, and healthy church planting.',
    url: siteUrl,
    siteName: 'Emmanuel Baptist Church of Ethiopia',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/ourchurch1.jpg',
        width: 1200,
        height: 630,
        alt: 'Emmanuel Baptist Church of Ethiopia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Baptist Church of Ethiopia',
    description: 'Serving Ethiopia since 1960 G.C through Gospel proclamation, discipleship, and healthy church planting.',
    images: ['/ourchurch1.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const language = await getServerLanguage()

  return (
    <html lang={language} className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
        <LanguageProvider initialLanguage={language}>{children}</LanguageProvider>
        <Toaster position="top-center" offset={20} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
