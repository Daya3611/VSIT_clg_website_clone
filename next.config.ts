import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vsit.edu.in',
        
      },
    ],
  },
};

export default nextConfig;
