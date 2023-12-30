/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BUNGIE_API_KEY: process.env.BUNGIE_API_KEY,
    BUNGIE_CLIENT_ID: process.env.BUNGIE_CLIENT_ID,
    BUNGIE_AUTH_URL: process.env.BUNGIE_AUTH_URL
  }
};

module.exports = nextConfig;
