import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'partner',
    title: 'Partenaires',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom',
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
            name: 'description',
            title: 'Description',
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
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'website',
            title: 'Site web',
            type: 'url',
        }),
        defineField({
            name: 'category',
            title: 'Catégorie',
            type: 'string',
            options: {
                list: [
                    { title: 'Institutionnel', value: 'institutional' },
                    { title: 'Entreprise', value: 'corporate' },
                    { title: 'Startup', value: 'startup' },
                    { title: 'Média', value: 'media' },
                    { title: 'Académique', value: 'academic' },
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
            subtitle: 'category',
            media: 'logo',
        },
    },
})
