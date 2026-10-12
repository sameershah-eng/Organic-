# Meridian Collective — Unified Studio Platform

Meridian Collective is a production-ready, high-craft multidisciplinary design house website that merges three previously independent practices into one unified web platform:

1. **Spatial Architecture** (`/spatial-architecture`) — Conceived from *Studio Arch & Pavilions* (`studio-arch.design`). Monolithic stone pavilions, alpine residences, passive solar orientation, and heritage restorations.
2. **Bespoke Objects** (`/bespoke-objects`) — Conceived from *Monolith Craft & Objects* (`monolith-craft.com`). Numbered editions of solid walnut seating, carved Roman travertine dining tables, lost-wax cast bronze luminaires, and stoneware vessels.
3. **Digital Direction** (`/digital-direction`) — Conceived from *Apex Creative & Digital* (`apex-creative.agency`). Bespoke brand identity systems, 60fps luxury digital flagships, GPU shader interactions, and typographic publications.

---

## 📁 Project Structure

```text
├── api/
│   └── contact.js                   # Vercel serverless function for contact submissions
├── public/
│   └── images/
│       ├── spatial-architecture/    # Destination folder for your real architecture photography
│       │   └── .gitkeep
│       ├── bespoke-objects/         # Destination folder for your real furniture & object photos
│       │   └── .gitkeep
│       └── digital-direction/       # Destination folder for your real digital mocks & screenshots
│           └── .gitkeep
├── src/
│   ├── components/
│   │   ├── BackToTopButton.tsx      # Smooth scroll-to-top floating button
│   │   ├── CursorFollower.tsx       # Subtle desktop custom cursor follower (60fps spring)
│   │   ├── Footer.tsx               # Global footer with locations, disciplines & copyright
│   │   ├── ImageWithFallback.tsx    # Resilient image component with aspect ratio & fallback
│   │   ├── Navbar.tsx               # Sticky frosted glass navbar with mega-menu & scroll progress
│   │   ├── ScrollToTop.tsx          # Instant route reset scroll handler
│   │   ├── SectionHeader.tsx        # Typographic hierarchy section headers
│   │   ├── StatsCounter.tsx         # Animated scroll-triggered counters
│   │   └── TestimonialMarquee.tsx   # Continuous 60fps marquee for client reviews
│   ├── data/
│   │   ├── images.js                # CENTRAL REPOSITORY: All image URLs organized by category
│   │   ├── images.d.ts              # TypeScript declarations for images repository
│   │   ├── site.ts                  # Site config, brand metadata, categories, locations
│   │   ├── spatial-architecture.ts  # Category 1 complete content, projects, methodology
│   │   ├── bespoke-objects.ts       # Category 2 complete content, products, materials
│   │   └── digital-direction.ts     # Category 3 complete content, case studies, packages
│   ├── pages/
│   │   ├── HomePage.tsx             # Unified brand hero & 3-category showcase bento
│   │   ├── SpatialArchitecturePage.tsx # Category 1 dedicated page with project inspection
│   │   ├── BespokeObjectsPage.tsx   # Category 2 dedicated page with collection quick-view
│   │   ├── DigitalDirectionPage.tsx # Category 3 dedicated page with metrics & scope tiers
│   │   ├── AboutPage.tsx            # Origin story, partners, milestones, and outposts
│   │   ├── ContactPage.tsx          # Full client-validated inquiry form & FAQs
│   │   └── NotFoundPage.tsx         # Friendly 404 page with navigation recovery
│   ├── App.tsx                      # Root component with React Router & Framer Motion transitions
│   ├── index.css                    # Tailwind CSS v4 styling & typography theme
│   └── main.tsx                     # React 18 DOM mount
├── .env.example                     # Environment variables template
├── .gitignore                       # Standard ignore rules
├── index.html                       # HTML5 entry with Google Fonts & OG meta tags
├── package.json                     # Dependencies and build scripts
├── tsconfig.json                    # TypeScript configuration
├── vercel.json                      # Vercel SPA routing rewrites configuration
└── vite.config.ts                   # Vite build configuration
```

---

## 🚀 Local Development Setup

Follow these steps to run the project locally on your machine:

1. **Clone or navigate to the repository:**
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local Vite development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

4. **Run TypeScript check & build verification:**
   ```bash
   npm run build
   ```

---

## 🖼️ How to Replace Dummy Images

All image URLs across the entire application are stored in **ONE single central file**:
👉 `/src/data/images.js`

You never need to edit UI components or pages to swap images.

### Method 1: Using Local Images in `/public/images/`
1. Save your photos into the appropriate category folder in `/public/`:
   - `/public/images/spatial-architecture/hero.jpg`
   - `/public/images/bespoke-objects/monolith-table.jpg`
   - `/public/images/digital-direction/lumina-mockup.jpg`
2. Open `/src/data/images.js`.
3. Change the URL to the local path:
   ```javascript
   // Before:
   hero: "https://picsum.photos/seed/spatial-hero-pavilion/1600/900",

   // After:
   hero: "/images/spatial-architecture/hero.jpg",
   ```

### Method 2: Using Custom CDN or S3 / Cloudinary URLs
Simply update the respective entry in `/src/data/images.js`:
```javascript
hero: "https://cdn.yourdomain.com/architecture/hero.webp",
```

---

## 🌐 Step-by-Step Vercel Deployment

This project includes `vercel.json` pre-configured with client-side SPA rewrites, ensuring all direct routes (like `/spatial-architecture`, `/bespoke-objects`, `/digital-direction`, etc.) load properly without 404 errors on refresh.

### Step 1: Push your code to GitHub
```bash
git add .
git commit -m "feat: unified Meridian Collective platform"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Select your GitHub repository from the list and click **"Import"**.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. (Optional) In **Environment Variables**, you can add:
   - `VITE_SITE_URL`: `https://your-custom-domain.com`
   - `RESEND_API_KEY`: *(If connecting the `/api/contact` function to an email provider)*
6. Click **"Deploy"**.

### Step 3: Verify the Live Deployment
- Test direct links such as `https://<your-project>.vercel.app/spatial-architecture`.
- Test the contact form at `/contact`.
- Check Vercel Functions log tab to view inquiries processed by `/api/contact.js`.
