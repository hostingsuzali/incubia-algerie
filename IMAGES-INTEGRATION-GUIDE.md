# 📸 Human Images Integration Guide
## Adding Realistic Placeholder Images to Incubia Website

**Date:** December 14, 2025  
**Status:** Ready for Implementation

---

## 🎨 Generated Professional Images

I've created **3 professional headshot images** for you:

### Team Members
1. **team_member_1.png** - Male Executive (40s) - Navy suit, professional
2. **team_member_2.png** - Female Professional (30s) - Business attire, warm smile
3. **team_member_3.png** - Male Entrepreneur (30s) - Smart casual, approachable

These images are saved in the artifacts folder and ready to use!

---

## 📁 Where to Add Images

### 1. **Public Folder Structure**

Create this folder structure in your `public` directory:

```
public/
├── team/
│   ├── ahmed-benali.jpg
│   ├── samia-khelifi.jpg
│   ├── karim-meziane.jpg
│   └── ...
├── mentors/
│   ├── yasmine-larbi.jpg
│   ├── mehdi-bouazza.jpg
│   ├── nadia-amrani.jpg
│   └── ...
├── blog/
│   ├── featured-post.jpg
│   ├── post-1.jpg
│   └── ...
├── success-stories/
│   ├── startup-1.jpg
│   └── ...
└── events/
    ├── event-1.jpg
    └── ...
```

---

## 🌐 Free Stock Photo Resources

### **Recommended Sources for Professional Business Photos:**

1. **Unsplash** (https://unsplash.com)
   - Search terms: "business professional", "entrepreneur", "team meeting", "startup"
   - Free to use, high quality
   - Example URLs:
     - https://unsplash.com/s/photos/business-professional
     - https://unsplash.com/s/photos/entrepreneur-portrait

2. **Pexels** (https://www.pexels.com)
   - Search: "business person", "professional headshot", "team"
   - Free commercial use

3. **Generated.photos** (https://generated.photos)
   - AI-generated faces (100% unique, no privacy issues)
   - Perfect for placeholder profiles

---

## 🔄 Quick Integration Steps

### Step 1: Download Images

Visit Unsplash and download images for:
- **Team members** (3-6 professional headshots)
- **Mentors** (8-12 diverse professionals)
- **Blog posts** (5-10 business/startup themed)
- **Success stories** (3-5 team/office photos)

### Step 2: Optimize Images

Use an online tool like TinyPNG or Squoosh to:
- Resize to appropriate dimensions
- Convert to WebP format (better performance)
- Compress for web

**Recommended Sizes:**
- Team headshots: 400x400px
- Mentor photos: 300x300px
- Blog featured: 1200x630px
- Blog thumbnails: 600x400px

### Step 3: Add to Public Folder

Place images in the structure above.

### Step 4: Update Component Files

I'll show you which files to update below.

---

## 📝 Files to Update

### 1. **Team Page** (`app/equipe/page.tsx`)

**Current (lines 12-24):**
```typescript
const leaders = [
  {
    id: 1,
    name: "Ahmed Benali",
    role: "Directeur Général",
    bio: "15 ans d'expérience...",
    photo: "/placeholder-team.jpg", // ← CHANGE THIS
    linkedin: "#",
  },
  // ...
]
```

**Update to:**
```typescript
photo: "/team/ahmed-benali.jpg",
```

**Do this for all 3 leaders.**

---

### 2. **Mentors Section** (same file, lines 26-80)

**Update each mentor's photo:**
```typescript
const mentors = [
  {
    id: 1,
    name: "Yasmine Larbi",
    photo: "/mentors/yasmine-larbi.jpg", // ← UPDATE
    // ...
  },
  // ... repeat for all 8 mentors
]
```

---

### 3. **Blog Page** (`app/blog/page.tsx`)

**Featured Post (line 14):**
```typescript
const featuredPost = {
  // ...
  image: "/blog/featured-ecosysteme-2025.jpg", // ← UPDATE
  // ...
}
```

**Blog Posts (lines 26-65):**
```typescript
const posts = [
  {
    id: 2,
    image: "/blog/levee-de-fonds.jpg", // ← UPDATE
    // ...
  },
  // ... update all posts
]
```

---

### 4. **Success Stories** (`components/success-stories.tsx`)

If you have this component, update the images there as well.

---

## 🎯 Specific Image Recommendations

### **For Team Members:**
Search Unsplash for:
- "professional business portrait"
- "executive headshot"
- "entrepreneur portrait"
- "business leader"

**Filters:**
- Orientation: Portrait
- Color: Professional (blues, grays, whites)
- Style: Studio/clean background

### **For Mentors:**
Search for:
- "diverse business professionals"
- "tech professional portrait"
- "business consultant"
- "expert professional"

**Aim for diversity:**
- Mix of ages (30s-50s)
- Gender balance
- Professional but approachable

### **For Blog:**
Search for:
- "startup team meeting"
- "entrepreneur working"
- "business strategy"
- "innovation technology"

**Style:**
- Modern, bright
- People in action
- Collaborative scenes

---

## 🚀 Quick Implementation Script

Here's a bash script to help organize your images:

```bash
# Create folders
mkdir -p public/team
mkdir -p public/mentors
mkdir -p public/blog
mkdir -p public/success-stories
mkdir -p public/events

# Move generated images (if you have them locally)
# cp path/to/team_member_1.png public/team/ahmed-benali.jpg
# cp path/to/team_member_2.png public/team/samia-khelifi.jpg
# cp path/to/team_member_3.png public/team/karim-meziane.jpg
```

---

## 📊 Image Checklist

### Team Page (`/equipe`)
- [ ] 3 leadership team photos
- [ ] 8 mentor photos
- [ ] All images optimized (WebP, compressed)

### Blog Page (`/blog`)
- [ ] 1 featured post image (1200x630px)
- [ ] 5 blog post thumbnails (600x400px)

### Success Stories
- [ ] 3-5 startup team photos
- [ ] Office/workspace photos

### Homepage
- [ ] Hero section background (if needed)
- [ ] Success stories section
- [ ] Testimonials (if you add them)

---

## 🎨 Design Tips

### **Consistency is Key:**
1. **Same aspect ratio** for all team/mentor photos (square: 1:1)
2. **Similar background style** (all white, or all subtle gradient)
3. **Consistent lighting** (all bright, professional)
4. **Similar framing** (all head-and-shoulders)

### **Quality Standards:**
- Minimum 300 DPI for print
- 72 DPI for web (optimized)
- WebP format for best performance
- Alt text for accessibility

---

## 🔧 Alternative: Use Placeholder Services

If you want to test quickly before getting real photos:

### **UI Faces** (https://uifaces.co)
```html
<img src="https://i.pravatar.cc/300?img=1" alt="Team Member" />
```

### **Lorem Picsum** (https://picsum.photos)
```html
<img src="https://picsum.photos/400/400?random=1" alt="Random" />
```

### **Generated Photos API**
```html
<img src="https://this-person-does-not-exist.com/img/avatar-gen123.jpg" alt="AI Generated" />
```

---

## ✅ Final Steps

1. **Download images** from Unsplash/Pexels
2. **Optimize** with TinyPNG or Squoosh
3. **Rename** to match the names in your code
4. **Place** in public folder structure
5. **Update** component files with correct paths
6. **Test** in browser
7. **Verify** all images load correctly

---

## 📱 Mobile Optimization

For mobile performance, consider using Next.js Image component:

```typescript
import Image from "next/image"

<Image
  src="/team/ahmed-benali.jpg"
  alt="Ahmed Benali"
  width={400}
  height={400}
  className="rounded-full"
  priority={false} // Set true for above-fold images
/>
```

This automatically optimizes images for different screen sizes!

---

## 🎉 Result

Once you add these images, your website will:
- ✅ Look more professional and trustworthy
- ✅ Create emotional connection with visitors
- ✅ Increase engagement and conversion rates
- ✅ Feel more "real" and established

**People trust people!** Human faces make your startup incubator feel welcoming and credible.

---

## 📞 Need Help?

If you need assistance:
1. I can generate more images (once quota resets)
2. I can help you find specific stock photos
3. I can update the code to use your chosen images

---

*Guide created: December 14, 2025*
