# Sanity Studio Access & Usage Guide

## 🚀 Quick Start

### 1. Fix Dependencies (if needed)

If you're seeing module resolution errors, try:

```bash
# Delete node_modules and lock files
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# Or if using pnpm
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory with:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=hhmlozjt
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

**To get your API token:**
1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** → **Tokens**
4. Create a new token with **Editor** permissions
5. Copy the token to `.env.local`

### 3. Access Sanity Studio

#### Local Development
1. Start your Next.js dev server:
   ```bash
   npm run dev
   ```

2. Navigate to: **http://localhost:3000/studio**

3. You'll be prompted to log in with your Sanity account credentials

#### Production
- Access at: `https://your-domain.com/studio`
- Or use the deployed studio: `https://your-project.sanity.studio`

## 📝 How to Use Sanity Studio

### First Time Setup

1. **Log In**: Use your Sanity account credentials
2. **Create Your First Document**: 
   - Start with **Site Settings** (only one document allowed)
   - Then add content like Formations, Instructors, etc.

### Content Types Available

1. **Site Settings** ⚙️
   - Global site configuration
   - SEO settings
   - Analytics IDs
   - Social media links
   - **Note**: Only one document allowed

2. **Formations** 📚
   - Training programs
   - Link to instructors and pricing
   - Set `active: true` to display on website
   - Use `order` field to control display order

3. **Instructors** 👨‍🏫
   - Trainer profiles
   - Expertise areas
   - Social links

4. **Mentors** 🎯
   - Mentor profiles
   - Specialties
   - Achievements

5. **Programmes** 🚀
   - Startup programs (Starter, Accélérateur, Expert)
   - Program details and benefits

6. **Services** 💼
   - Service offerings by category
   - Descriptions and pricing

7. **Blog Posts** ✍️
   - Articles with rich content
   - Authors and categories

8. **Events** 📅
   - Workshops, conferences
   - Dates and locations

9. **Partners** 🤝
   - Partner organizations
   - Logos and descriptions

10. **Team Members** 👥
    - Team profiles
    - Roles and bios

11. **FAQs** ❓
    - Frequently asked questions
    - Organized by category

12. **Testimonials** ⭐
    - Client testimonials
    - Ratings and featured status

13. **Pricing** 💰
    - Multi-currency pricing
    - Discounts and payment options

### Adding Content

1. **Navigate to Content Type**
   - Click on a content type in the left sidebar

2. **Create New Document**
   - Click **"Create new"** button (top right)
   - Or use the **"+"** icon

3. **Fill in Fields**
   - Required fields are marked with *
   - Use the rich text editor for descriptions
   - Upload images directly in the Studio

4. **Save Draft**
   - Click **"Save"** to save as draft
   - Drafts won't appear on the website

5. **Publish**
   - Click **"Publish"** to make it live
   - Published content appears on the website immediately

### Managing Images

- **Upload**: Click the image field and upload from your computer
- **Optimization**: Sanity automatically optimizes images
- **Hotspot & Crop**: Click on uploaded images to set focal points
- **Formats**: Automatically serves WebP when supported

### Content Organization Tips

#### Formations
- Set `active: true` to display on website
- Use `order` field (lower numbers appear first)
- Mark as `featured` to highlight on homepage
- Link to instructor and pricing documents

#### Pricing
- Supports multiple currencies (DZD, EUR, USD)
- Add discounts with end dates
- Define payment options (one-time, installments, monthly)

#### Site Settings
- **Important**: Only one document allowed
- Update this to change global site settings
- Add SEO meta tags here
- Configure analytics IDs

## 🔧 Troubleshooting

### Error: "The default export is not a React Component"
✅ **Fixed**: The layout file has been updated. Restart your dev server.

### Error: "Module not found: Can't resolve './cjs/react-dom.development.js'"
Try:
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Restart dev server
npm run dev
```

### Error: "Package jsdom can't be external"
This is a warning, not an error. It won't prevent the studio from working. To fix:
```bash
npm install jsdom@27.3.0 --save-dev
```

### Studio Not Loading
1. Check environment variables in `.env.local`
2. Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
3. Make sure you're logged into Sanity
4. Check browser console for errors

### Can't Log In
1. Make sure you have a Sanity account
2. Verify the project ID matches your Sanity project
3. Check that the project exists at [sanity.io/manage](https://www.sanity.io/manage)

## 📚 Useful Features

### Vision Tool (GROQ Query Editor)
- Access via the **Vision** icon in the toolbar
- Write and test GROQ queries
- See results in real-time
- Useful for debugging data fetching

### Document Actions
- **Duplicate**: Create a copy of a document
- **Unpublish**: Remove from website (keeps as draft)
- **Delete**: Permanently remove (be careful!)

### Keyboard Shortcuts
- `Cmd/Ctrl + K`: Quick search
- `Cmd/Ctrl + S`: Save
- `Cmd/Ctrl + P`: Publish

## 🔄 Syncing with Website

### Automatic Updates
- Changes are reflected immediately after publishing
- No need to rebuild the website
- Images are served from Sanity CDN

### API Queries
The website fetches data using GROQ queries. Example:

```typescript
// Get all active formations
*[_type == "formation" && active == true] | order(order asc)

// Get formation by slug
*[_type == "formation" && slug.current == "business-model-canvas"][0]
```

## 🚀 Next Steps

1. **Add Initial Content**
   - Start with Site Settings
   - Add a few Formations
   - Add Instructors
   - Link them together

2. **Test on Website**
   - Visit your website
   - Verify content appears correctly
   - Check images load properly

3. **Train Your Team**
   - Show them how to add/edit content
   - Explain the content types
   - Set up user permissions in Sanity

4. **Set Up Webhooks** (Optional)
   - Automatically revalidate Next.js pages
   - Configure in Sanity API settings

## 📞 Support Resources

- **Sanity Docs**: https://www.sanity.io/docs
- **GROQ Query Cheat Sheet**: https://www.sanity.io/docs/query-cheat-sheet
- **Sanity Community**: https://slack.sanity.io/
- **Next.js + Sanity Guide**: https://www.sanity.io/docs/nextjs

---

**Current Configuration:**
- Project ID: `hhmlozjt` (from env.template)
- Dataset: `production`
- Base Path: `/studio`
- Studio URL: `http://localhost:3000/studio` (local)
