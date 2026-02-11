// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Only enable static export for production builds
  // This is the recommended approach per Next.js documentation
  // ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  output: 'export',
  /**
   * Set base path. This is the slug of your GitHub repository.
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: '/motion-playground',

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react'],
  },
};

export default nextConfig;
