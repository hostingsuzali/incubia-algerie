import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Témoignages',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Rôle',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Entreprise',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Témoignage',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'rating',
            title: 'Note',
            type: 'number',
            validation: (Rule) => Rule.min(1).max(5),
        }),
        defineField({
            name: 'relatedTo',
            title: 'Lié à',
            type: 'string',
            options: {
                list: [
                    { title: 'Formation', value: 'formation' },
                    { title: 'Programme', value: 'programme' },
                    { title: 'Mentorat', value: 'mentorat' },
                    { title: 'Général', value: 'general' },
                ],
            },
        }),
        defineField({
            name: 'featured',
            title: 'Mis en avant',
            type: 'boolean',
            initialValue: false,
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
            subtitle: 'company',
            media: 'image',
        },
    },
})
