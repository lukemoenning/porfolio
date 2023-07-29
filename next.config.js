/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  env: {
    NEXT_PUBLIC_WEB3FORMS: process.env.NEXT_PUBLIC_WEB3FORMS,
  }
}

module.exports = nextConfig
