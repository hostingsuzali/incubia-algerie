import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'pricing',
    title: 'Tarification',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nom du tarif',
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
                    { title: 'Formation', value: 'formation' },
                    { title: 'Programme', value: 'programme' },
                    { title: 'Mentorat', value: 'mentorat' },
                    { title: 'Service', value: 'service' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Prix (DZD)',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'priceEUR',
            title: 'Prix (EUR)',
            type: 'number',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'priceUSD',
            title: 'Prix (USD)',
            type: 'number',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: 'currency',
            title: 'Devise principale',
            type: 'string',
            options: {
                list: [
                    { title: 'DZD', value: 'DZD' },
                    { title: 'EUR', value: 'EUR' },
                    { title: 'USD', value: 'USD' },
                ],
            },
            initialValue: 'DZD',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'discount',
            title: 'Réduction (%)',
            type: 'number',
            validation: (Rule) => Rule.min(0).max(100),
        }),
        defineField({
            name: 'discountEndDate',
            title: 'Date de fin de réduction',
            type: 'datetime',
        }),
        defineField({
            name: 'features',
            title: 'Caractéristiques incluses',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'paymentOptions',
            title: 'Options de paiement',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'option',
                            title: 'Option',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Paiement unique', value: 'one-time' },
                                    { title: 'Paiement en 2 fois', value: '2-times' },
                                    { title: 'Paiement en 3 fois', value: '3-times' },
                                    { title: 'Mensuel', value: 'monthly' },
                                ],
                            },
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'string',
                        },
                    ],
                },
            ],
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
            price: 'price',
            currency: 'currency',
            type: 'type',
        },
        prepare(selection) {
            const { title, price, currency, type } = selection
            return {
                title: title,
                subtitle: `${price} ${currency} - ${type}`,
            }
        },
    },
})
