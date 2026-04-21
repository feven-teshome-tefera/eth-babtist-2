import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Emmanuel Baptist Church of Ethiopia',
    short_name: 'EBCE',
    description:
      'Official website of Emmanuel Baptist Church of Ethiopia for doctrine, leadership, mission, and contact information.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f1e8',
    theme_color: '#1a2744',
    icons: [
      {
        src: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
