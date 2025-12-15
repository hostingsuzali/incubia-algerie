import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'programme',
    title: 'Programmes',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom du programme',
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
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Le Starter', value: 'starter' },
                    { title: 'L\'Accélérateur', value: 'accelerateur' },
                    { title: 'L\'Expert', value: 'expert' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tagline',
            title: 'Slogan',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
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
            name: 'forWho',
            title: 'Pour qui',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'duration',
            title: 'Durée',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'features',
            title: 'Caractéristiques',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required().min(3),
        }),
        defineField({
            name: 'deliverables',
            title: 'Livrables',
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
            name: 'color',
            title: 'Couleur (gradient)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icône',
            type: 'string',
            description: 'Nom de l\'icône Lucide React',
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
        defineField({
            name: 'order',
            title: 'Ordre d\'affichage',
            type: 'number',
            validation: (Rule) => Rule.integer().min(0),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'type',
            media: 'image',
        },
    },
})
