import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'event',
    title: 'Événements',
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
            name: 'eventType',
            title: 'Type d\'événement',
            type: 'string',
            options: {
                list: [
                    { title: 'Workshop', value: 'workshop' },
                    { title: 'Conférence', value: 'conference' },
                    { title: 'Networking', value: 'networking' },
                    { title: 'Pitch Night', value: 'pitch' },
                    { title: 'Formation', value: 'training' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'startDate',
            title: 'Date de début',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'endDate',
            title: 'Date de fin',
            type: 'datetime',
        }),
        defineField({
            name: 'location',
            title: 'Lieu',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'format',
            title: 'Format',
            type: 'string',
            options: {
                list: [
                    { title: 'Présentiel', value: 'in-person' },
                    { title: 'En ligne', value: 'online' },
                    { title: 'Hybride', value: 'hybrid' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'capacity',
            title: 'Capacité',
            type: 'number',
            validation: (Rule) => Rule.integer().min(1),
        }),
        defineField({
            name: 'registrationLink',
            title: 'Lien d\'inscription',
            type: 'url',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'featured',
            title: 'Mis en avant',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'published',
            title: 'Publié',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            eventType: 'eventType',
            media: 'image',
        },
        prepare(selection) {
            const { title, eventType } = selection
            return {
                title: title,
                subtitle: eventType,
                media: selection.media,
            }
        },
    },
})
