/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //configurar links de apis com images externas
  images: {
    domains: ['cdn.traction.one']
  }
}

module.exports = nextConfig
