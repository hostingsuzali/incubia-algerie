# 📧 Email Service Setup Guide

## Overview

Your Incubia Algérie website now has **full email functionality** for:
- ✅ Contact form submissions
- ✅ Formation booking/reservation requests
- ✅ Automatic confirmation emails to users
- ✅ Notifications to admin

---

## 🎯 What's Been Added

### 1. **Email Service Integration (Resend)**
- Professional email service using Resend API
- HTML email templates with branded design
- Automatic email sending for all forms

### 2. **API Routes**
- `/api/contact` - Handles contact form submissions
- `/api/formation-booking` - Handles formation reservation requests

### 3. **New Pages**
- `/reservation-formation` - Beautiful formation booking page with multi-step form

### 4. **Updated Pages**
- `/contact` - Now sends real emails instead of simulation

---

## 🚀 Setup Instructions

### Step 1: Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address

### Step 2: Get Your API Key

1. Log in to Resend dashboard
2. Go to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "Incubia Production")
5. Copy the API key (starts with `re_`)

### Step 3: Configure Environment Variables

1. Create a `.env.local` file in your project root:

```bash
# In your terminal
cd c:\Users\mamino\v0-incubia-website-designre
echo. > .env.local
```

2. Add these variables to `.env.local`:

```env
RESEND_API_KEY=re_your_actual_api_key_here
ADMIN_EMAIL=contact@incuba-dz.com
```

Replace `re_your_actual_api_key_here` with your actual Resend API key.

### Step 4: Verify Your Domain (Optional but Recommended)

For production use, you should verify your domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `incuba-dz.com`)
4. Follow the DNS configuration instructions
5. Once verified, update `lib/resend.ts`:

```typescript
export const EMAIL_CONFIG = {
  from: 'Incubia Algérie <noreply@incuba-dz.com>', // Use your verified domain
  to: process.env.ADMIN_EMAIL || 'contact@incuba-dz.com',
  replyTo: 'contact@incuba-dz.com',
};
```

### Step 5: Test the Forms

1. Make sure your dev server is running:
```bash
npm run dev
```

2. Test the contact form:
   - Go to `http://localhost:3000/contact`
   - Fill out the form
   - Submit and check for success message

3. Test the formation booking:
   - Go to `http://localhost:3000/reservation-formation`
   - Fill out the form
   - Submit and check for success message

4. Check your email inbox (the one you set as ADMIN_EMAIL)

---

## 📁 File Structure

```
app/
├── api/
│   ├── contact/
│   │   └── route.ts              # Contact form API endpoint
│   └── formation-booking/
│       └── route.ts              # Formation booking API endpoint
├── contact/
│   └── page.tsx                  # Updated with real email sending
└── reservation-formation/
    ├── page.tsx                  # New formation booking page
    └── metadata.ts               # SEO metadata

lib/
├── resend.ts                     # Resend configuration
└── email-templates.tsx           # HTML email templates
```

---

## 📧 Email Templates

### For Admin (You)

**Contact Form Email:**
- Shows all contact information
- Includes the message
- Provides clickable email and phone links

**Formation Booking Email:**
- Shows participant information
- Includes formation details
- Shows experience and objectives
- Displays availability

### For Users (Automatic Confirmation)

**Contact Confirmation:**
- Thanks them for contacting
- Confirms 24-hour response time
- Includes link back to website

**Formation Confirmation:**
- Confirms their booking request
- Explains next steps
- Sets expectations (48-hour response)

---

## 🎨 Formation Booking Page Features

The new `/reservation-formation` page includes:

- ✅ Beautiful gradient hero section
- ✅ Quick stats display (duration, participants, focus)
- ✅ Multi-step form with visual indicators
- ✅ 8 formation options to choose from
- ✅ Availability selector
- ✅ Experience and objectives fields
- ✅ Success confirmation with next steps
- ✅ Fully responsive design
- ✅ Loading states and error handling

---

## 🔗 Navigation Updates Needed

You should add links to the formation booking page in:

1. **Formations page** - Add a CTA button
2. **Header navigation** - Add to formations dropdown
3. **Footer** - Add under formations section

Example button for formations page:
```tsx
<Button asChild>
  <Link href="/reservation-formation">
    Réserver une Formation
  </Link>
</Button>
```

---

## 🧪 Testing Checklist

- [ ] Resend account created
- [ ] API key added to `.env.local`
- [ ] Contact form sends emails
- [ ] Formation booking sends emails
- [ ] Admin receives emails
- [ ] Users receive confirmation emails
- [ ] Forms show success messages
- [ ] Error handling works
- [ ] Mobile responsive

---

## 🚨 Important Notes

### Development vs Production

**Development (using onboarding@resend.dev):**
- Works immediately with Resend API key
- Limited to sending to verified email addresses
- Good for testing

**Production (using your domain):**
- Requires domain verification
- Can send to any email address
- Professional sender address

### Email Deliverability

To ensure emails don't go to spam:
1. ✅ Verify your domain in Resend
2. ✅ Set up SPF, DKIM, and DMARC records
3. ✅ Use a professional "from" address
4. ✅ Keep email content relevant and well-formatted

### Rate Limits

**Resend Free Tier:**
- 100 emails per day
- 3,000 emails per month

**If you need more:**
- Upgrade to paid plan ($20/month for 50,000 emails)

---

## 🎉 What You Can Do Now

1. **Receive Contact Requests**
   - All contact form submissions come to your email
   - Users get automatic confirmation

2. **Manage Formation Bookings**
   - Receive detailed booking requests
   - See participant profiles and objectives
   - Follow up within 48 hours

3. **Professional Communication**
   - Branded email templates
   - Automatic responses
   - Better user experience

---

## 🛠️ Troubleshooting

### Emails Not Sending?

1. Check `.env.local` file exists and has correct API key
2. Restart dev server after adding environment variables
3. Check Resend dashboard for error logs
4. Verify API key is active

### Emails Going to Spam?

1. Verify your domain in Resend
2. Set up DNS records (SPF, DKIM)
3. Use a professional sender address
4. Avoid spam trigger words

### Form Not Submitting?

1. Check browser console for errors
2. Verify API routes are working
3. Check network tab for failed requests
4. Ensure all required fields are filled

---

## 📞 Support

If you need help:
- Resend Documentation: https://resend.com/docs
- Resend Support: support@resend.com
- Check the Resend dashboard for logs and errors

---

## 🎯 Next Steps

1. ✅ Set up Resend account
2. ✅ Add API key to `.env.local`
3. ✅ Test both forms
4. ✅ Verify domain (for production)
5. ✅ Update email templates if needed
6. ✅ Add navigation links to booking page
7. ✅ Monitor email delivery

---

**Your website now has professional email functionality! 🚀**
