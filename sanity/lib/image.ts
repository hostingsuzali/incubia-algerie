import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = imageUrlBuilder(client)

// Use 'any' for maximum compatibility across @sanity/image-url versions
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
    return builder.image(source)
}

// Helper to get optimized image URL
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getImageUrl(source: any, width?: number, height?: number) {
    let imageBuilder = urlFor(source)

    if (width) {
        imageBuilder = imageBuilder.width(width)
    }

    if (height) {
        imageBuilder = imageBuilder.height(height)
    }

    return imageBuilder.url()
}
