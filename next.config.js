/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"],
    loader: "custom",
    path: "/"
  },
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
