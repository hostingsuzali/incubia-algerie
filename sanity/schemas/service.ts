import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Services',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom du service',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Catégorie',
            type: 'string',
            options: {
                list: [
                    { title: 'Stratégie', value: 'strategy' },
                    { title: 'Produit', value: 'product' },
                    { title: 'Tech', value: 'tech' },
                    { title: 'Marketing', value: 'marketing' },
                    { title: 'Finance', value: 'finance' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description courte',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'fullDescription',
            title: 'Description complète',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'features',
            title: 'Caractéristiques',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'pricing',
            title: 'Tarification',
            type: 'reference',
            to: [{ type: 'pricing' }],
        }),
        defineField({
            name: 'icon',
            title: 'Icône',
            type: 'string',
            description: 'Nom de l\'icône Lucide React',
        }),
        defineField({
            name: 'color',
            title: 'Couleur',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'active',
            title: 'Actif',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'category',
            media: 'image',
        },
    },
})
