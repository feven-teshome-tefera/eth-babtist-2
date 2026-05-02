import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const host = request.headers.get('host')
  const mainDomain = 'www.ethiopianemmanuelbaptistchurch.com'

  if (
    host === 'eth-babtist-2.vercel.app' ||
    host === 'ethiopianemmanuelbaptistchurch.com'
  ) {
    const url = request.nextUrl.clone()
    url.protocol = 'https'
    url.hostname = mainDomain

    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}