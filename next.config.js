/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  // swcMinify: true,
  images: {
    domains: ['crypton.cl'],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=6000, must-revalidate, no-cache',
          }
        ],
      },
    ]
  },

}

module.exports = nextConfig
