type SanityImageSource = any // Sanity image object

export interface Formation {
    _id: string
    title: string
    slug: { current: string }
    category: string
    description: string
    fullDescription?: any[]
    forWho: string
    prerequisites?: string
    results: string[]
    format: 'presentiel' | 'online' | 'hybrid'
    duration: string
    rhythm: string
    instructor?: Instructor
    pricing?: Pricing
    color: string
    image?: SanityImageSource
    featured: boolean
    order?: number
}

export interface Pricing {
    _id: string
    name: string
    slug: { current: string }
    type: 'formation' | 'programme' | 'mentorat' | 'service'
    price: number
    priceEUR?: number
    priceUSD?: number
    currency: 'DZD' | 'EUR' | 'USD'
    discount?: number
    discountEndDate?: string
    features?: string[]
    paymentOptions?: PaymentOption[]
    active: boolean
}

export interface PaymentOption {
    option: 'one-time' | '2-times' | '3-times' | 'monthly'
    description?: string
}

export interface Instructor {
    _id: string
    name: string
    slug: { current: string }
    role: string
    experience: string
    bio?: any[]
    expertise?: string[]
    image: SanityImageSource
    linkedin?: string
    twitter?: string
    website?: string
    active: boolean
}

export interface Mentor {
    _id: string
    name: string
    slug: { current: string }
    title: string
    company?: string
    bio?: any[]
    specialties: string[]
    achievements?: string[]
    image: SanityImageSource
    linkedin?: string
    available: boolean
    featured: boolean
}

export interface Programme {
    _id: string
    name: string
    slug: { current: string }
    type: 'starter' | 'accelerateur' | 'expert'
    tagline: string
    description: string
    fullDescription?: any[]
    forWho: string
    duration: string
    features: string[]
    deliverables?: string[]
    pricing?: Pricing
    color: string
    icon?: string
    image?: SanityImageSource
    active: boolean
    order?: number
}

export interface Service {
    _id: string
    name: string
    slug: { current: string }
    category: 'strategy' | 'product' | 'tech' | 'marketing' | 'finance'
    description: string
    fullDescription?: any[]
    features?: string[]
    pricing?: Pricing
    icon?: string
    color?: string
    image?: SanityImageSource
    active: boolean
}

export interface BlogPost {
    _id: string
    title: string
    slug: { current: string }
    excerpt: string
    content?: any[]
    author?: TeamMember
    category?: string
    tags?: string[]
    featuredImage: SanityImageSource
    publishedAt: string
    featured: boolean
    published: boolean
}

export interface Event {
    _id: string
    title: string
    slug: { current: string }
    description: string
    fullDescription?: any[]
    eventType: 'workshop' | 'conference' | 'networking' | 'pitch' | 'training'
    startDate: string
    endDate?: string
    location: string
    format: 'in-person' | 'online' | 'hybrid'
    capacity?: number
    registrationLink?: string
    image: SanityImageSource
    featured: boolean
    published: boolean
}

export interface Partner {
    _id: string
    name: string
    slug: { current: string }
    description?: string
    logo: SanityImageSource
    website?: string
    category?: 'institutional' | 'corporate' | 'startup' | 'media' | 'academic'
    featured: boolean
    active: boolean
    order?: number
}

export interface TeamMember {
    _id: string
    name: string
    slug: { current: string }
    role: string
    bio?: any[]
    image: SanityImageSource
    linkedin?: string
    twitter?: string
    email?: string
    order?: number
    active: boolean
}

export interface FAQ {
    _id: string
    question: string
    answer: any[]
    category: 'general' | 'formations' | 'programmes' | 'mentorat' | 'pricing' | 'registration'
    order?: number
    active: boolean
}

export interface Testimonial {
    _id: string
    name: string
    role: string
    company?: string
    content: string
    image?: SanityImageSource
    rating?: number
    relatedTo?: 'formation' | 'programme' | 'mentorat' | 'general'
    featured: boolean
    active: boolean
}

export interface SiteSettings {
    siteName: string
    siteDescription?: string
    logo?: SanityImageSource
    favicon?: SanityImageSource
    contactEmail?: string
    contactPhone?: string
    address?: string
    socialLinks?: {
        facebook?: string
        twitter?: string
        linkedin?: string
        instagram?: string
        youtube?: string
    }
    seo?: {
        metaTitle?: string
        metaDescription?: string
        ogImage?: SanityImageSource
    }
    analytics?: {
        googleAnalyticsId?: string
        facebookPixelId?: string
    }
}
