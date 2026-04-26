/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '5gl6uqlaxg.ufs.sh',
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
