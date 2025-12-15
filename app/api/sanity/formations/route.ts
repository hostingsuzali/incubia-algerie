import { NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'
import { formationsQuery } from '@/sanity/lib/queries'

export async function GET() {
    try {
        const formations = await client.fetch(formationsQuery)

        return NextResponse.json({
            success: true,
            data: formations,
        })
    } catch (error) {
        console.error('Error fetching formations:', error)
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to fetch formations',
            },
            { status: 500 }
        )
    }
}
