import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "cdn.sanity.io",
      },
      {
        hostname: "*.cloudfront.net",
      },
      {
        hostname: "fakestoreapi.com"
      },
    ],
  },
}

export default nextConfig
