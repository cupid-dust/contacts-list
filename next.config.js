/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'pistas-bucket.s3.eu-west-1.amazonaws.com'],
  },

  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
