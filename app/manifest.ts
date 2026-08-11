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
        src: '/cropped_circle_image.png',
        sizes: '161x161',
        type: 'image/png',
      },
    ],
  }
}
