/**
 * Data Migration Script for Sanity CMS
 * 
 * This script helps migrate existing hardcoded data to Sanity CMS format.
 * Run this after setting up your Sanity project.
 * 
 * Usage:
 * 1. Set up your Sanity project and get credentials
 * 2. Add credentials to .env.local
 * 3. Run: node scripts/migrate-to-sanity.js
 */

const { createClient } = require('@sanity/client')

// Initialize Sanity client
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

// Sample data from your existing formations
const formationsData = [
    {
        _type: 'formation',
        title: 'Business Model Canvas en Action',
        slug: { _type: 'slug', current: 'business-model-canvas' },
        category: 'fondamentaux',
        description: 'Construisez un business model validé et structurez votre plan d\'action MVP',
        forWho: 'Porteurs de projet en phase d\'idéation ou pré-MVP',
        prerequisites: 'Aucun',
        results: [
            'Construire un business model validé',
            'Identifier vos segments clients prioritaires',
            'Définir une proposition de valeur claire',
            'Structurer votre plan d\'action MVP',
        ],
        format: 'presentiel',
        duration: '2 jours (14h)',
        rhythm: 'Weekend intensif',
        color: 'from-[#059669] to-[#10B981]',
        featured: false,
        active: true,
        order: 1,
    },
    // Add more formations here...
]

// Sample instructors data
const instructorsData = [
    {
        _type: 'instructor',
        name: 'Karim Benali',
        slug: { _type: 'slug', current: 'karim-benali' },
        role: 'Ex-CEO TechCorp, 3 exits réussies',
        experience: '15 ans en tech, accompagné 50+ startups',
        expertise: ['Business Model', 'Stratégie', 'Levée de fonds'],
        active: true,
    },
    // Add more instructors here...
]

// Sample pricing data
const pricingData = [
    {
        _type: 'pricing',
        name: 'Formation Business Model Canvas',
        slug: { _type: 'slug', current: 'formation-bmc' },
        type: 'formation',
        price: 45000,
        priceEUR: 300,
        priceUSD: 320,
        currency: 'DZD',
        features: [
            'Support de formation',
            'Certificat de participation',
            'Accès groupe alumni',
            'Suivi post-formation (1 mois)',
        ],
        paymentOptions: [
            {
                option: 'one-time',
                description: 'Paiement unique',
            },
            {
                option: '2-times',
                description: 'Paiement en 2 fois sans frais',
            },
        ],
        active: true,
    },
    // Add more pricing here...
]

async function migrateData() {
    console.log('🚀 Starting data migration to Sanity...\n')

    try {
        // Migrate Instructors first (they're referenced by formations)
        console.log('📝 Migrating instructors...')
        const instructorIds = {}
        for (const instructor of instructorsData) {
            const result = await client.create(instructor)
            instructorIds[instructor.slug.current] = result._id
            console.log(`✅ Created instructor: ${instructor.name}`)
        }

        // Migrate Pricing
        console.log('\n💰 Migrating pricing...')
        const pricingIds = {}
        for (const pricing of pricingData) {
            const result = await client.create(pricing)
            pricingIds[pricing.slug.current] = result._id
            console.log(`✅ Created pricing: ${pricing.name}`)
        }

        // Migrate Formations with references
        console.log('\n📚 Migrating formations...')
        for (const formation of formationsData) {
            // Add instructor reference if exists
            const formationWithRefs = {
                ...formation,
                // Add references here based on your data
                // instructor: { _type: 'reference', _ref: instructorIds['karim-benali'] },
                // price: { _type: 'reference', _ref: pricingIds['formation-bmc'] },
            }

            const result = await client.create(formationWithRefs)
            console.log(`✅ Created formation: ${formation.title}`)
        }

        console.log('\n✨ Migration completed successfully!')
        console.log('\n📊 Summary:')
        console.log(`   - Instructors: ${instructorsData.length}`)
        console.log(`   - Pricing: ${pricingData.length}`)
        console.log(`   - Formations: ${formationsData.length}`)
        console.log('\n🎉 You can now view your content in Sanity Studio!')

    } catch (error) {
        console.error('❌ Migration failed:', error)
        process.exit(1)
    }
}

// Run migration
if (require.main === module) {
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.SANITY_API_TOKEN) {
        console.error('❌ Error: Missing Sanity credentials in .env.local')
        console.error('Please add:')
        console.error('  - NEXT_PUBLIC_SANITY_PROJECT_ID')
        console.error('  - NEXT_PUBLIC_SANITY_DATASET')
        console.error('  - SANITY_API_TOKEN')
        process.exit(1)
    }

    migrateData()
}

module.exports = { migrateData }
