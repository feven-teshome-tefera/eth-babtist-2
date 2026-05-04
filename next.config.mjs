/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'eth-baptist-2.vercel.app',
          },
        ],
        destination: 'https://www.ethiopianemmanuelbaptistchurch.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig