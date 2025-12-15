import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'answer',
            title: 'Réponse',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Catégorie',
            type: 'string',
            options: {
                list: [
                    { title: 'Général', value: 'general' },
                    { title: 'Formations', value: 'formations' },
                    { title: 'Programmes', value: 'programmes' },
                    { title: 'Mentorat', value: 'mentorat' },
                    { title: 'Tarification', value: 'pricing' },
                    { title: 'Inscription', value: 'registration' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Ordre d\'affichage',
            type: 'number',
            validation: (Rule) => Rule.integer().min(0),
        }),
        defineField({
            name: 'active',
            title: 'Active',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'question',
            subtitle: 'category',
        },
    },
})
