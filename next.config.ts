import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

 
  eslint: { ignoreDuringBuilds: true }, 
  
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
