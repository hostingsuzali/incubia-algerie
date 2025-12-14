# 🚨 Email Not Working - Troubleshooting Guide

## Issue Detected
✅ The test shows: **RESEND_API_KEY is NOT set**

This means the environment variables in `.env.local` are not being loaded.

---

## 🔧 Solution Steps

### Step 1: Verify .env.local File Content

Open `.env.local` and make sure it contains:

```env
RESEND_API_KEY=re_your_actual_api_key_here
ADMIN_EMAIL=contact@incuba-dz.com
```

**Important:** 
- No spaces around the `=` sign
- No quotes around the values
- The file should be in the root directory (same level as `package.json`)

### Step 2: Get Your Resend API Key

If you haven't already:

1. **Go to:** https://resend.com
2. **Sign up** (it's free - 100 emails/day)
3. **Create API Key:**
   - Click "API Keys" in dashboard
   - Click "Create API Key"
   - Name it "Incubia Production"
   - Copy the key (starts with `re_`)

4. **Update .env.local:**
   ```env
   RESEND_API_KEY=re_abc123xyz...  # ← Paste your actual key here
   ADMIN_EMAIL=contact@incuba-dz.com
   ```

### Step 3: Restart Dev Server

**CRITICAL:** Environment variables only load when the server starts!

```bash
# In your terminal:
# 1. Stop the current server (press Ctrl+C)
# 2. Start it again:
npm run dev
```

### Step 4: Test Again

After restarting:

1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. Check your email inbox (the one you set as ADMIN_EMAIL)

---

## 🧪 Quick Test

Run this command to verify your setup:

```bash
node test-email-config.js
```

You should see:
- ✅ RESEND_API_KEY is set and looks valid
- ✅ ADMIN_EMAIL is set to: your@email.com

---

## 🐛 Common Issues

### Issue 1: "API key not set"
**Cause:** `.env.local` file not in the right place or not formatted correctly  
**Fix:** Make sure `.env.local` is in the root directory (same folder as `package.json`)

### Issue 2: "Still showing placeholder"
**Cause:** Didn't replace `re_your_api_key_here` with actual key  
**Fix:** Get real API key from Resend and update the file

### Issue 3: "Variables still not loading"
**Cause:** Didn't restart dev server  
**Fix:** Stop server (Ctrl+C) and run `npm run dev` again

### Issue 4: "Emails not arriving"
**Possible causes:**
- Check spam folder
- Verify email address in Resend dashboard (free tier)
- Check Resend dashboard for error logs
- Make sure you restarted the server

---

## 📧 Testing Email Sending

### Manual Test (Optional)

Create a test file to send a test email:

```bash
# Create test file
echo 'import { resend } from "./lib/resend.js"; resend.emails.send({ from: "onboarding@resend.dev", to: "your@email.com", subject: "Test", html: "<p>Test email</p>" }).then(console.log).catch(console.error);' > test-email.mjs

# Run it
node test-email.mjs
```

---

## ✅ Checklist

Before testing forms:

- [ ] Created Resend account
- [ ] Got API key from Resend dashboard
- [ ] Added API key to `.env.local` (no placeholder)
- [ ] Added ADMIN_EMAIL to `.env.local`
- [ ] Restarted dev server (Ctrl+C then npm run dev)
- [ ] Ran `node test-email-config.js` - shows ✅
- [ ] Ready to test forms!

---

## 🎯 Expected Behavior

When everything is working:

1. **Submit contact form** → 
   - Success message appears
   - You receive email with contact details
   - User receives confirmation email

2. **Submit formation booking** →
   - Success message appears
   - You receive email with booking details
   - User receives confirmation with next steps

---

## 📞 Still Not Working?

Check the browser console and terminal for error messages:

**Browser Console (F12):**
- Look for red error messages
- Check Network tab for failed API calls

**Terminal (where npm run dev is running):**
- Look for error messages about Resend
- Check for API key errors

**Resend Dashboard:**
- Go to https://resend.com/logs
- Check for failed email attempts
- Look at error messages

---

## 💡 Quick Fix Summary

```bash
# 1. Make sure .env.local has your real API key
# 2. Stop the server
Ctrl+C

# 3. Restart the server
npm run dev

# 4. Test
# Go to http://localhost:3000/contact and submit the form
```

That's it! 🚀
