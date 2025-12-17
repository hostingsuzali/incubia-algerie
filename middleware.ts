import { NextRequest, NextResponse } from 'next/server';

/**
 * Edge middleware for geo-blocking specific countries
 * Allows all major search engine bots regardless of origin
 * Runs on Vercel Edge Network before route handlers
 */

// Vercel geo location type
interface VercelGeo {
    city?: string;
    country?: string;
    region?: string;
    latitude?: string;
    longitude?: string;
}

// Extend NextRequest with Vercel's geo property
interface VercelRequest extends NextRequest {
    geo?: VercelGeo;
}

// Blocked country codes (ISO 3166-1 alpha-2)
const BLOCKED_COUNTRIES = [
    'CN', // China
    'ID', // Indonesia
    'VN', // Vietnam
    'BD', // Bangladesh
    'PK', // Pakistan
    'IN', // India (optional - remove if needed)
    'PH', // Philippines (optional)
    'TH', // Thailand (optional)
    'RO', //Romania
    'DZ',

];

// Known search engine bot user agents (case-insensitive substrings)
const SEARCH_BOT_PATTERNS = [
    'googlebot',
    'google-inspectiontool',
    'bingbot',
    'slurp', // Yahoo
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'whatsapp',
    'telegrambot',
];

/**
 * Check if user agent matches known search engine bots
 */
function isSearchBot(userAgent: string): boolean {
    const ua = userAgent.toLowerCase();
    return SEARCH_BOT_PATTERNS.some((pattern) => ua.includes(pattern));
}

export function middleware(request: VercelRequest) {
    const { geo, headers } = request;
    const userAgent = headers.get('user-agent') || '';
    const country = geo?.country || 'UNKNOWN';

    // DEBUG: Add headers to see what Vercel detects
    const debugHeaders = {
        'X-Debug-Country': country,
        'X-Debug-Is-Bot': isSearchBot(userAgent) ? 'yes' : 'no',
        'X-Geo-Country': country,
    };

    // Block requests from specified countries FIRST (even if they're bots)
    // This prioritizes spam prevention over SEO for high-risk regions
    if (BLOCKED_COUNTRIES.includes(country)) {
        return new Response(
            JSON.stringify({
                error: 'Forbidden',
                message: 'Access denied from your region.',
                debug: {
                    country: country,
                    isBot: isSearchBot(userAgent),
                    blockedCountries: BLOCKED_COUNTRIES,
                },
            }),
            {
                status: 403,
                headers: {
                    'Content-Type': 'application/json',
                    // Don't cache blocks (geo might be wrong or policies might change)
                    'Cache-Control': 'no-store, max-age=0',
                    ...debugHeaders,
                    'X-Robots-Tag': 'noindex, nofollow',
                },
            }
        );
    }


    // Allow search engine crawlers from other regions
    if (isSearchBot(userAgent)) {
        const response = NextResponse.next();
        response.headers.set('X-Geo-Allowed', 'bot');
        response.headers.set('X-Debug-Country', country);
        response.headers.set('X-Debug-Is-Bot', 'yes');
        return response;
    }

    // Allow all other traffic
    const response = NextResponse.next();
    response.headers.set('X-Geo-Country', country);
    response.headers.set('X-Debug-Country', country);
    response.headers.set('X-Debug-Is-Bot', 'no');
    return response;
}



// Run middleware on all routes except static assets
export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization)
         * - favicon.ico, robots.txt, sitemap.xml
         * - public folder files (images, etc)
         */
        '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp|avif)).*)',
    ],
};
