/** @type {import('next').NextConfig} */
const nextConfig = {
    // Security Headers
    async headers() {
        return [
            // Sanity Studio routes - less restrictive headers
            {
                source: '/studio/:path*',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
            // All other routes - full security headers
            {
                source: '/:path*',
                headers: [
                    // Prevent clickjacking attacks
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    // Prevent MIME type sniffing
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    // Control referrer information
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                    // Enable XSS protection
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    // Permissions Policy (formerly Feature Policy)
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },
                    // Strict Transport Security (HTTPS only)
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains',
                    },
                    // Content Security Policy
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com https://cdn.sanity.io",
                            "style-src 'self' 'unsafe-inline' https://cdn.sanity.io",
                            "img-src 'self' data: https: blob:",
                            "font-src 'self' data: https://cdn.sanity.io",
                            "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://*.sanity.io https://*.api.sanity.io",
                            "frame-ancestors 'none'",
                        ].join('; '),
                    },
                ],
            },
        ]
    },

    // Image optimization
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },

    // Compression
    compress: true,

    // Production optimizations
    productionBrowserSourceMaps: false,
    poweredByHeader: false,

    // Experimental features for better performance
    experimental: {
        optimizePackageImports: ['lucide-react', '@vercel/analytics', '@vercel/speed-insights'],
    },
    // Skip type checking and linting for build
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
