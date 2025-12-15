import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'instructor',
    title: 'Intervenants',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom complet',
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
            name: 'role',
            title: 'Rôle / Titre',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'experience',
            title: 'Expérience',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'bio',
            title: 'Biographie',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'expertise',
            title: 'Domaines d\'expertise',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'image',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'url',
        }),
        defineField({
            name: 'twitter',
            title: 'Twitter',
            type: 'url',
        }),
        defineField({
            name: 'website',
            title: 'Site web',
            type: 'url',
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
            subtitle: 'role',
            media: 'image',
        },
    },
})
