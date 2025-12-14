# 📧 Resend Configuration - Testing Mode

## Current Setup (Free Tier - Testing)

You're using Resend's **free tier in testing mode**, which means:
- ✅ You can send emails
- ⚠️ **BUT** only to your verified email: `hostingsuzali@gmail.com`
- ❌ Cannot send to other emails (like `odo@suzaliconseil.com`) yet

---

## Quick Fix for Testing

Update your `.env.local` file to:

```env
RESEND_API_KEY=re_your_actual_key_here
ADMIN_EMAIL=hostingsuzali@gmail.com
```

**Change `ADMIN_EMAIL` to `hostingsuzali@gmail.com`**

This way:
- You'll receive all contact form submissions at `hostingsuzali@gmail.com`
- You'll receive all formation bookings at `hostingsuzali@gmail.com`
- Users will still get confirmation emails (sent to their email)

---

## After Changing .env.local

**IMPORTANT:** Restart your dev server!

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

---

## For Production (Sending to Any Email)

To send emails to any address (like `odo@suzaliconseil.com`):

### Option 1: Verify Your Domain (Recommended)

1. Go to https://resend.com/domains
2. Click "Add Domain"
3. Enter your domain (e.g., `incuba-dz.com` or `suzaliconseil.com`)
4. Add the DNS records they provide
5. Wait for verification (usually a few minutes)
6. Update `lib/resend.ts`:

```typescript
export const EMAIL_CONFIG = {
  from: 'Incubia Algérie <noreply@incuba-dz.com>', // Your verified domain
  to: process.env.ADMIN_EMAIL || 'odo@suzaliconseil.com',
  replyTo: 'contact@incuba-dz.com',
};
```

### Option 2: Upgrade to Paid Plan

- $20/month for 50,000 emails
- Can send to any email without domain verification
- Better for production use

---

## Current Workflow

**For Now (Testing):**
1. Set `ADMIN_EMAIL=hostingsuzali@gmail.com` in `.env.local`
2. Restart dev server
3. Test forms - all emails go to `hostingsuzali@gmail.com`
4. You can forward important ones to `odo@suzaliconseil.com` manually

**For Production:**
1. Verify your domain at Resend
2. Update `ADMIN_EMAIL` to any email you want
3. Emails will work for everyone

---

## Summary

✅ **Right now:** Use `hostingsuzali@gmail.com` as ADMIN_EMAIL  
🔄 **Later:** Verify domain to use any email  
📧 **Result:** All notifications go to one inbox for testing  

Update your `.env.local` and restart the server!
