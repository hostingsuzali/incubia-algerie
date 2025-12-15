# Sanity CMS Setup Guide for Incubia Algérie

## 🎯 Overview

This guide will help you set up and configure Sanity CMS for managing all content on the Incubia Algérie website.

## 📋 What's Managed by Sanity CMS

### Content Types
1. **Formations** - Training programs with instructors, pricing, and details
2. **Pricing** - Multi-currency pricing with discounts and payment options
3. **Instructors** - Trainer profiles with expertise and social links
4. **Mentors** - Mentor profiles with specialties and achievements
5. **Programmes** - Startup programs (Starter, Accélérateur, Expert)
6. **Services** - Service offerings by category
7. **Blog Posts** - Articles with rich content and authors
8. **Events** - Workshops, conferences, and networking events
9. **Partners** - Partner organizations with logos
10. **Team Members** - Team profiles
11. **FAQs** - Frequently asked questions by category
12. **Testimonials** - Client testimonials with ratings
13. **Site Settings** - Global site configuration, SEO, and analytics

## 🚀 Setup Steps

### Step 1: Create a Sanity Account

1. Go to [sanity.io](https://www.sanity.io/)
2. Sign up for a free account
3. Create a new project:
   - Project name: `Incubia Algérie`
   - Dataset: `production`
   - Template: `Clean project`

### Step 2: Get Your Project Credentials
h
After creating your project, you'll receive:
- **Project ID**: Found in your project settings
- **Dataset**: Usually `production`
- **API Token**: Create one in the API settings with Editor permissions

### Step 3: Configure Environment Variables

Create or update your `.env.local` file with:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

**Important**: 
- `NEXT_PUBLIC_*` variables are exposed to the browser
- `SANITY_API_TOKEN` should be kept secret (used for mutations)

### Step 4: Initialize Sanity in Your Project

The Sanity packages are already installed. Run:

```bash
npm install
```

### Step 5: Deploy Sanity Studio

Deploy your Sanity Studio to make it accessible:

```bash
npx sanity deploy
```

This will give you a URL like: `https://your-project.sanity.studio`

## 📁 Project Structure

```
sanity/
├── schemas/
│   ├── index.ts              # Schema exports
│   ├── formation.ts          # Formation schema
│   ├── pricing.ts            # Pricing schema
│   ├── instructor.ts         # Instructor schema
│   ├── mentor.ts             # Mentor schema
│   ├── programme.ts          # Programme schema
│   ├── service.ts            # Service schema
│   ├── blogPost.ts           # Blog post schema
│   ├── event.ts              # Event schema
│   ├── partner.ts            # Partner schema
│   ├── teamMember.ts         # Team member schema
│   ├── faq.ts                # FAQ schema
│   ├── testimonial.ts        # Testimonial schema
│   └── siteSettings.ts       # Site settings schema
├── lib/
│   ├── client.ts             # Sanity client configuration
│   ├── image.ts              # Image URL builder
│   ├── queries.ts            # GROQ queries
│   └── types.ts              # TypeScript types
sanity.config.ts              # Sanity configuration
```

## 🎨 Accessing Sanity Studio

### Local Development
Access the studio at: `http://localhost:3000/studio`

### Production
Access the studio at: `https://your-domain.com/studio`

Or use the deployed studio: `https://your-project.sanity.studio`

## 📝 Using Sanity CMS

### Adding Content

1. Navigate to `/studio` in your browser
2. Log in with your Sanity credentials
3. Select a content type from the sidebar
4. Click "Create new" to add content
5. Fill in the required fields
6. Click "Publish" to make it live

### Managing Images

Sanity has a built-in image CDN that automatically:
- Optimizes images
- Generates responsive sizes
- Provides hotspot/crop functionality
- Serves WebP format when supported

Upload images directly in the Studio interface.

### Content Organization

#### Formations
- Set `active: true` to display on the website
- Use `order` field to control display order
- Mark as `featured` to highlight
- Link to instructor and pricing

#### Pricing
- Support for multiple currencies (DZD, EUR, USD)
- Add discounts with end dates
- Define payment options (one-time, installments, monthly)
- Link to formations, programmes, or services

#### Site Settings
- Only one document allowed
- Manages global site configuration
- SEO meta tags
- Analytics IDs
- Social media links

## 🔄 Fetching Data in Next.js

### Server Components (Recommended)

```typescript
import { client } from '@/sanity/lib/client'
import { formationsQuery } from '@/sanity/lib/queries'

export default async function FormationsPage() {
  const formations = await client.fetch(formationsQuery)
  
  return (
    <div>
      {formations.map((formation) => (
        <div key={formation._id}>{formation.title}</div>
      ))}
    </div>
  )
}
```

### Client Components

```typescript
'use client'

import { useEffect, useState } from 'react'

export default function FormationsList() {
  const [formations, setFormations] = useState([])
  
  useEffect(() => {
    fetch('/api/sanity/formations')
      .then(res => res.json())
      .then(data => setFormations(data.data))
  }, [])
  
  return (
    <div>
      {formations.map((formation) => (
        <div key={formation._id}>{formation.title}</div>
      ))}
    </div>
  )
}
```

### Using Images

```typescript
import { urlFor } from '@/sanity/lib/image'

// In your component
<img 
  src={urlFor(formation.image).width(800).height(600).url()} 
  alt={formation.title}
/>
```

## 🔐 Security Best Practices

1. **API Tokens**: Never commit API tokens to Git
2. **CORS**: Configure CORS in Sanity settings to allow only your domain
3. **Permissions**: Use read-only tokens for public data
4. **Environment Variables**: Keep sensitive data in `.env.local`

## 🚀 Deployment Checklist

- [ ] Create Sanity project
- [ ] Add environment variables to Vercel/hosting platform
- [ ] Deploy Sanity Studio (`npx sanity deploy`)
- [ ] Configure CORS in Sanity settings
- [ ] Add initial content
- [ ] Test API routes
- [ ] Verify images are loading
- [ ] Set up webhooks for revalidation (optional)

## 📚 Useful GROQ Queries

### Get all active formations
```groq
*[_type == "formation" && active == true] | order(order asc)
```

### Get formation by slug with instructor
```groq
*[_type == "formation" && slug.current == "business-model-canvas"][0] {
  ...,
  "instructor": instructor->
}
```

### Get featured testimonials
```groq
*[_type == "testimonial" && featured == true && active == true]
```

## 🔄 Webhooks & Revalidation

To automatically update your Next.js site when content changes:

1. In Sanity Studio, go to API settings
2. Create a webhook pointing to: `https://your-domain.com/api/revalidate`
3. Create the revalidate API route in Next.js

## 📞 Support

- Sanity Documentation: https://www.sanity.io/docs
- GROQ Query Cheat Sheet: https://www.sanity.io/docs/query-cheat-sheet
- Community Slack: https://slack.sanity.io/

## 🎓 Next Steps

1. **Migrate Existing Data**: Transfer current hardcoded content to Sanity
2. **Update Components**: Modify components to fetch from Sanity
3. **Add Webhooks**: Set up automatic revalidation
4. **Train Team**: Teach content editors how to use the Studio
5. **Monitor Usage**: Check Sanity dashboard for usage and performance

---

**Note**: The free Sanity plan includes:
- Unlimited API requests
- 10GB bandwidth
- 3 users
- 500k documents

For production use, consider upgrading if you exceed these limits.
