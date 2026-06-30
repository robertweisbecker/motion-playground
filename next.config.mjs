// @ts-check

/** @type {import('next').NextConfig['images']['remotePatterns']} */
const remotePatterns = [
  {
    protocol: 'https',
    hostname: 'avatar.vercel.sh',
    pathname: '/**',
  },
  {
    protocol: 'https',
    hostname: 'github.com',
    pathname: '/**',
  },
  {
    protocol: 'https',
    hostname: 'cdn.brandfetch.io',
    pathname: '/**',
  },
  {
    protocol: 'https',
    hostname: '**.public.blob.vercel-storage.com',
    pathname: '/**',
  },
  {
    protocol: 'https',
    hostname: 'images.unsplash.com',
    pathname: '/**',
  },
];

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react'],
  },
};

export default nextConfig;
