/**
 * HTTP 410 Gone handler for legacy WordPress URLs
 * Returns permanent removal signal to search engines
 * Edge runtime for zero cold starts
 */
export const runtime = 'edge';

export async function GET() {
    return new Response(
        JSON.stringify({
            error: 'Gone',
            message: 'This resource has been permanently removed.',
        }),
        {
            status: 410,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=31536000, immutable',
                // Tell search engines this is permanent
                'X-Robots-Tag': 'noindex, nofollow',
            },
        }
    );
}

// Handle all HTTP methods the same way
export const POST = GET;
export const PUT = GET;
export const DELETE = GET;
export const PATCH = GET;
