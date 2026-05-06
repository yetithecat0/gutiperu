/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/studio',
        destination: 'https://gutiperustudio.vercel.app/studio',
      },
      {
        source: '/studio/:path*',
        destination: 'https://gutiperustudio.vercel.app/studio/:path*',
      },
      {
        source: '/rescoperu',
        destination: 'https://rescoperu.vercel.app',
      },
      {
        source: '/rescoperu/:path*',
        destination: 'https://rescoperu.vercel.app/:path*',
      },
      {
        source: '/ati',
        destination: 'https://ati-pad.vercel.app',
      },
      {
        source: '/ati/:path*',
        destination: 'https://ati-pad.vercel.app/:path*',
      },
      {
        source: '/latelierperuano',
        destination: 'https://latelierperuano.vercel.app',
      },
      {
        source: '/latelierperuano/:path*',
        destination: 'https://latelierperuano.vercel.app/:path*',
      },
    ]
  },
};

export default nextConfig;
