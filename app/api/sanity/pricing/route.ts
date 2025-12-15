import { NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'
import { pricingQuery } from '@/sanity/lib/queries'

export async function GET() {
    try {
        const pricing = await client.fetch(pricingQuery)

        return NextResponse.json({
            success: true,
            data: pricing,
        })
    } catch (error) {
        console.error('Error fetching pricing:', error)
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to fetch pricing',
            },
            { status: 500 }
        )
    }
}
