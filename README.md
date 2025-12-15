# WebCuts Blog - Next.js App v2.0

Eine moderne, SEO-optimierte Blog-Anwendung mit Dark-Orange Design für WebCuts.

## ✨ Features

- ⚡ **Next.js 14** mit App Router und Server Components
- 🎨 **Dark Mode Design** mit Orange Akzenten (matching webcuts.de)
- 📱 **Responsive** Mobile-First Design
- 🔍 **SEO-optimiert** (Meta Tags, Structured Data, OpenGraph)
- 🏷️ **Blog Filtering** nach Kategorie und Stadt
- 🌍 **Geo-Targeting** für lokale SEO (Hannover, Braunschweig, etc.)
- ♿ **Accessibility** (ARIA Labels, Focus States)
- ⚡ **Performance** (Image Optimization, CSS Variables)
- 🎯 **TypeScript** für Type Safety

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Sprache:** TypeScript
- **Styling:** CSS Modules + CSS Custom Properties
- **Fonts:** Sora + Space Grotesk (Google Fonts)
- **Images:** next/image mit WebP/AVIF Optimierung

## 📁 Projektstruktur

```
webcuts-blog/
├── app/
│   ├── layout.tsx          # Root Layout mit Metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design System + Global Styles
│   └── blog/
│       └── [slug]/
│           ├── page.tsx    # Dynamische Blog Posts
│           └── page.module.css
├── components/
│   ├── Navigation.tsx      # Header + Mobile Menu
│   ├── Hero.tsx           # Hero Section
│   ├── BlogGrid.tsx       # Blog Grid mit Filtering
│   ├── BlogCard.tsx       # Blog Post Card
│   └── Footer.tsx         # Footer
├── lib/
│   ├── types.ts           # TypeScript Interfaces
│   └── data.ts            # Mock Data + Helper Functions
├── public/                 # Static Assets
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🚀 Quick Start

```bash
# 1. Dependencies installieren
npm install

# 2. Development Server starten
npm run dev

# 3. Browser öffnen
# http://localhost:3000
```

## 🎨 Design System

### Farben

```css
--color-primary: #0a0a0a;      /* Dark Background */
--color-accent: #ff5722;       /* Orange */
--color-accent-light: #ff7043; /* Orange Light */
--color-text-primary: #ffffff;
--color-text-secondary: #a3a3a3;
```

### Typography

- **Display:** Sora (700-800 weight)
- **Body:** Space Grotesk (400-600 weight)

## 📦 Deployment

### Vercel (empfohlen)

1. Push zu GitHub
2. Importiere auf [vercel.com](https://vercel.com)
3. Deploy automatisch

### Custom Domain

1. In Vercel: Settings → Domains
2. `blog.webcuts.de` hinzufügen
3. DNS: CNAME auf `cname.vercel-dns.com`

## 🔧 Konfiguration

### Umgebungsvariablen (optional)

```env
NEXT_PUBLIC_SITE_URL=https://blog.webcuts.de
```

## 🔜 Roadmap

- [ ] MDX Support für Blog Posts
- [ ] API Endpoint für n8n Integration
- [ ] Datenbank-Anbindung (Supabase/PostgreSQL)
- [ ] Newsletter Integration
- [ ] RSS Feed
- [ ] Sitemap Generation
- [ ] Search Functionality

## 📝 Blog Posts hinzufügen

Aktuell sind Blog Posts als Mock-Daten in `lib/data.ts` definiert. Um neue Posts hinzuzufügen:

```typescript
// lib/data.ts
export const blogPosts: BlogPost[] = [
  {
    id: 'unique-id',
    slug: 'url-freundlicher-slug',
    title: 'Dein Titel',
    excerpt: 'Kurze Beschreibung...',
    image: 'https://images.unsplash.com/...',
    imageAlt: 'Bildbeschreibung',
    category: 'SEO', // oder 'Webdesign', 'Marketing', etc.
    city: 'Hannover', // optional für Geo-Targeting
    author: {
      name: 'Elias Möller',
      role: 'Founder @ WebCuts',
    },
    publishedAt: '2025-01-15',
    readTime: 5,
    featured: false,
    tags: ['Tag1', 'Tag2'],
  },
  // ...weitere Posts
];
```

## 🤝 Support

Bei Fragen: [kontakt@webcuts.de](mailto:kontakt@webcuts.de)

---

Entwickelt mit ❤️ in Hannover
