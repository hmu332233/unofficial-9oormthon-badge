/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: '/badge.svg',
        destination: '/api/badge.svg',
      },
    ];
  },
};

module.exports = nextConfig;
