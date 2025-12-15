import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'formation',
    title: 'Formations',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titre',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
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
                    { title: 'Fondamentaux Startup', value: 'fondamentaux' },
                    { title: 'Produit & MVP', value: 'produit' },
                    { title: 'Développement Commercial', value: 'commercial' },
                    { title: 'Management & Organisation', value: 'management' },
                    { title: 'Juridique & Administratif', value: 'juridique' },
                    { title: 'Financement & Levée', value: 'financement' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description courte',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required().max(200),
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
            rows: 2,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'prerequisites',
            title: 'Pré-requis',
            type: 'string',
        }),
        defineField({
            name: 'results',
            title: 'Résultats attendus',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required().min(3).max(6),
        }),
        defineField({
            name: 'format',
            title: 'Format',
            type: 'string',
            options: {
                list: [
                    { title: 'Présentiel', value: 'presentiel' },
                    { title: 'En ligne', value: 'online' },
                    { title: 'Hybride', value: 'hybrid' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'duration',
            title: 'Durée',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'rhythm',
            title: 'Rythme',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'instructor',
            title: 'Intervenant',
            type: 'reference',
            to: [{ type: 'instructor' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Prix',
            type: 'reference',
            to: [{ type: 'pricing' }],
        }),
        defineField({
            name: 'color',
            title: 'Couleur (gradient)',
            type: 'string',
            description: 'Ex: from-[#059669] to-[#10B981]',
            validation: (Rule) => Rule.required(),
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
            name: 'featured',
            title: 'Formation mise en avant',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'active',
            title: 'Active',
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
            title: 'title',
            category: 'category',
            media: 'image',
            active: 'active',
        },
        prepare(selection) {
            const { title, category, active } = selection
            return {
                title: title,
                subtitle: `${category} ${active ? '✓' : '✗ Inactive'}`,
                media: selection.media,
            }
        },
    },
})
