# 🚀 DEPLOYMENT GUIDE
## Incubia Website - Production Deployment

**Date:** December 14, 2025  
**Platform:** Vercel (Recommended)

---

## 📋 PRE-DEPLOYMENT CHECKLIST

### 1. Environment Setup
```bash
# Ensure all dependencies are installed
npm install

# Run build locally to check for errors
npm run build

# Test production build
npm run start
```

### 2. Environment Variables
Create `.env.local` file (if needed):
```env
# Add your environment variables here
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_SITE_URL=https://incuba-dz.com
# EMAIL_SERVICE_API_KEY=your-key-here
```

### 3. Update Configuration
- [ ] Replace `https://incuba-dz.com` with your actual domain in:
  - `app/layout.tsx` (metadataBase)
  - `app/sitemap.ts` (baseUrl)
  - `app/robots.ts` (sitemap URL)
  - `public/schema.json` (url fields)

---

## 🌐 VERCEL DEPLOYMENT (RECOMMENDED)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Link Project
```bash
# From your project directory
cd c:\Users\mamino\v0-incubia-website-designre

# Initialize Vercel project
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? **Your account/team**
- Link to existing project? **No**
- Project name? **incubia-website** (or your choice)
- Directory? **./** (current directory)
- Override settings? **No**

### Step 4: Deploy to Production
```bash
# Deploy to production
vercel --prod
```

### Step 5: Configure Custom Domain
1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Domains**
4. Add your domain: `incuba-dz.com`
5. Add www redirect: `www.incuba-dz.com` → `incuba-dz.com`

### Step 6: Configure DNS
Add these records to your domain registrar:

**For root domain (incuba-dz.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔧 ALTERNATIVE: MANUAL DEPLOYMENT

### Option 1: Static Export
```bash
# Build static export
npm run build

# Files will be in .next folder
# Upload to any static hosting (Netlify, GitHub Pages, etc.)
```

### Option 2: Node.js Server
```bash
# Build for production
npm run build

# Start production server
npm run start

# Server runs on port 3000
# Use PM2 or similar for process management
```

---

## 📊 POST-DEPLOYMENT SETUP

### 1. Google Analytics
```tsx
// Add to app/layout.tsx after <body> tag
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 2. Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://incuba-dz.com`
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://incuba-dz.com/sitemap.xml`

### 3. Error Monitoring (Sentry)
```bash
# Install Sentry
npm install @sentry/nextjs

# Initialize
npx @sentry/wizard@latest -i nextjs
```

Follow the wizard to configure Sentry.

### 4. Email Service Integration
For form submissions, integrate with:
- **Resend** (recommended for Next.js)
- **SendGrid**
- **Mailgun**

Example with Resend:
```bash
npm install resend
```

```tsx
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  
  await resend.emails.send({
    from: 'contact@incuba-dz.com',
    to: 'team@incuba-dz.com',
    subject: 'Nouveau contact depuis le site',
    html: `<p>Message de ${body.firstName} ${body.lastName}</p>...`,
  });
  
  return Response.json({ success: true });
}
```

---

## 🔒 SECURITY CONFIGURATION

### 1. Environment Variables (Vercel)
1. Go to Project Settings → Environment Variables
2. Add sensitive keys:
   - `RESEND_API_KEY`
   - `DATABASE_URL` (if using database)
   - `NEXTAUTH_SECRET` (if using auth)

### 2. Security Headers
Create `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

---

## 📈 MONITORING & OPTIMIZATION

### 1. Vercel Analytics
Already included via `@vercel/analytics/next`

### 2. Performance Monitoring
```bash
# Install Web Vitals
npm install web-vitals
```

```tsx
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

// Add in body
<SpeedInsights />
```

### 3. Image Optimization
Vercel automatically optimizes images via Next.js Image component.

Ensure all images use:
```tsx
import Image from 'next/image'

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={false} // true for above-fold images
/>
```

---

## 🧪 TESTING IN PRODUCTION

### 1. Smoke Tests
- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Forms submit successfully
- [ ] Mobile menu works
- [ ] No console errors

### 2. Performance Tests
```bash
# Run Lighthouse audit
# Target scores:
# Performance: 90+
# Accessibility: 95+
# Best Practices: 95+
# SEO: 100
```

Tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### 3. SEO Verification
- [ ] Sitemap accessible: `/sitemap.xml`
- [ ] Robots.txt accessible: `/robots.txt`
- [ ] Meta tags present (view source)
- [ ] Open Graph preview (Facebook Debugger)
- [ ] Twitter Card preview (Twitter Card Validator)

---

## 🚨 TROUBLESHOOTING

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Deployment Fails
1. Check Vercel logs
2. Verify all dependencies in package.json
3. Ensure no TypeScript errors
4. Check environment variables

### Images Not Loading
1. Ensure images are in `public` folder
2. Use correct paths (start with `/`)
3. Check Next.js Image configuration

### Forms Not Working
1. Verify API routes are deployed
2. Check environment variables
3. Test API endpoints directly
4. Check CORS settings

---

## 📞 SUPPORT RESOURCES

### Vercel
- [Documentation](https://vercel.com/docs)
- [Support](https://vercel.com/support)
- [Community](https://github.com/vercel/next.js/discussions)

### Next.js
- [Documentation](https://nextjs.org/docs)
- [Examples](https://github.com/vercel/next.js/tree/canary/examples)
- [Discord](https://discord.gg/nextjs)

---

## ✅ DEPLOYMENT COMPLETE!

Once deployed, your website will be live at:
- **Production:** `https://incuba-dz.com`
- **Preview:** `https://your-project.vercel.app`

### Next Steps:
1. ✅ Monitor analytics
2. ✅ Respond to user feedback
3. ✅ Optimize based on data
4. ✅ Regular content updates
5. ✅ A/B test CTAs

---

## 🎉 CONGRATULATIONS!

Your Incubia website is now **LIVE** and ready to:
- Attract entrepreneurs
- Generate leads
- Showcase services
- Build credibility
- Scale your business

**Welcome to the world! 🌍🚀**

---

*Deployment guide created: December 14, 2025*  
*Platform: Vercel*  
*Status: Production Ready*
