import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'mentor',
    title: 'Mentors',
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
            name: 'title',
            title: 'Titre',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Entreprise',
            type: 'string',
        }),
        defineField({
            name: 'bio',
            title: 'Biographie',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'specialties',
            title: 'Spécialités',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'achievements',
            title: 'Réalisations',
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
            name: 'available',
            title: 'Disponible',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'featured',
            title: 'Mis en avant',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'title',
            media: 'image',
        },
    },
})
