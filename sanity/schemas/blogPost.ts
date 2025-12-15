import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'blogPost',
    title: 'Articles de blog',
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
            name: 'excerpt',
            title: 'Extrait',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required().max(200),
        }),
        defineField({
            name: 'content',
            title: 'Contenu',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Auteur',
            type: 'reference',
            to: [{ type: 'teamMember' }],
        }),
        defineField({
            name: 'category',
            title: 'Catégorie',
            type: 'string',
            options: {
                list: [
                    { title: 'Startup', value: 'startup' },
                    { title: 'Financement', value: 'financement' },
                    { title: 'Produit', value: 'produit' },
                    { title: 'Management', value: 'management' },
                    { title: 'Écosystème', value: 'ecosysteme' },
                ],
            },
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'featuredImage',
            title: 'Image principale',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Date de publication',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'featured',
            title: 'Article mis en avant',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'published',
            title: 'Publié',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'featuredImage',
            published: 'published',
        },
        prepare(selection) {
            const { title, published } = selection
            return {
                title: title,
                subtitle: published ? '✓ Publié' : '✗ Brouillon',
                media: selection.media,
            }
        },
    },
})
