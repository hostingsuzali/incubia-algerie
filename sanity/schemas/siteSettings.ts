import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Paramètres du site',
    type: 'document',
    fields: [
        defineField({
            name: 'siteName',
            title: 'Nom du site',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'siteDescription',
            title: 'Description du site',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
        }),
        defineField({
            name: 'contactEmail',
            title: 'Email de contact',
            type: 'string',
        }),
        defineField({
            name: 'contactPhone',
            title: 'Téléphone',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Adresse',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'socialLinks',
            title: 'Réseaux sociaux',
            type: 'object',
            fields: [
                { name: 'facebook', title: 'Facebook', type: 'url' },
                { name: 'twitter', title: 'Twitter', type: 'url' },
                { name: 'linkedin', title: 'LinkedIn', type: 'url' },
                { name: 'instagram', title: 'Instagram', type: 'url' },
                { name: 'youtube', title: 'YouTube', type: 'url' },
            ],
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
                {
                    name: 'metaTitle',
                    title: 'Meta Title',
                    type: 'string',
                },
                {
                    name: 'metaDescription',
                    title: 'Meta Description',
                    type: 'text',
                    rows: 3,
                },
                {
                    name: 'ogImage',
                    title: 'Image Open Graph',
                    type: 'image',
                },
            ],
        }),
        defineField({
            name: 'analytics',
            title: 'Analytics',
            type: 'object',
            fields: [
                {
                    name: 'googleAnalyticsId',
                    title: 'Google Analytics ID',
                    type: 'string',
                },
                {
                    name: 'facebookPixelId',
                    title: 'Facebook Pixel ID',
                    type: 'string',
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'siteName',
        },
    },
})
