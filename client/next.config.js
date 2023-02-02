/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SERVER_URI: process.env.SERVER_URI,
  },
};

module.exports = nextConfig;
