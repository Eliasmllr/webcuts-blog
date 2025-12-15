import type { BlogPost, City, BlogCategory } from './types';

// Verfügbare Städte für Geo-Targeting
export const cities: City[] = [
  { name: 'Alle', slug: 'alle' },
  { name: 'Hannover', slug: 'hannover' },
  { name: 'Braunschweig', slug: 'braunschweig' },
  { name: 'Garbsen', slug: 'garbsen' },
  { name: 'Langenhagen', slug: 'langenhagen' },
  { name: 'Burgdorf', slug: 'burgdorf' },
];

// Verfügbare Kategorien
export const categories: BlogCategory[] = [
  'SEO',
  'Geo',
  'Webdesign',
];

// Mock Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'seo-fuer-hannover-startups-2025',
    title: 'SEO für Hannover Startups: Der ultimative Guide 2025',
    excerpt:
      'Erfahre, wie du dein Startup in Hannover durch lokale SEO-Strategien sichtbar machst. Von Google My Business bis Content-Marketing – alles was du wissen musst.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    imageAlt: 'SEO Dashboard mit Analytics',
    category: 'SEO',
    city: 'Hannover',
    author: {
      name: 'Elias Möller',
      role: 'Founder @ WebCuts',
    },
    publishedAt: '2025-01-10',
    readTime: 8,
    featured: true,
    tags: ['SEO', 'Startups', 'Hannover', 'Local SEO'],
  },
  {
    id: '2',
    slug: 'framer-vs-webflow-vergleich',
    title: 'Framer vs. Webflow: Welches Tool ist besser für dein Projekt?',
    excerpt:
      'Ein detaillierter Vergleich der beiden No-Code-Plattformen. Wann Framer die bessere Wahl ist und wann du zu Webflow greifen solltest.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    imageAlt: 'Webdesign Tools Vergleich',
    category: 'Webdesign',
    author: {
      name: 'Elias Möller',
      role: 'Founder @ WebCuts',
    },
    publishedAt: '2025-01-08',
    readTime: 6,
    featured: true,
    tags: ['Framer', 'Webflow', 'No-Code', 'Webdesign'],
  },
  {
    id: '3',
    slug: 'website-in-48-stunden',
    title: 'Website in 48 Stunden: So funktioniert unser Express-Service',
    excerpt:
      'Hinter den Kulissen unseres 48h-Website-Services. Wie wir es schaffen, in kürzester Zeit professionelle Websites zu liefern.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    imageAlt: 'Schnelle Website-Entwicklung',
    category: 'Webdesign',
    city: 'Hannover',
    author: {
      name: 'Elias Möller',
      role: 'Founder @ WebCuts',
    },
    publishedAt: '2025-01-05',
    readTime: 5,
    featured: false,
    tags: ['Express Service', 'Webdesign'],
  },
  {
    id: '4',
    slug: 'shopify-online-shop-hannover',
    title: 'Shopify Online-Shop für Hannover: Kosten, Tipps & Anbieter',
    excerpt:
      'Alles über E-Commerce in Hannover: Was kostet ein Shopify-Shop? Welche Agenturen gibt es? Worauf solltest du achten?',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    imageAlt: 'E-Commerce Shopify Shop',
    category: 'Geo',
    city: 'Hannover',
    author: {
      name: 'Elias Möller',
      role: 'Founder @ WebCuts',
    },
    publishedAt: '2025-01-03',
    readTime: 7,
    featured: false,
    tags: ['Shopify', 'E-Commerce', 'Hannover'],
  },
  {
    id: '5',
    slug: 'google-my-business-optimieren',
    title: '10 Tipps: Google Unternehmensprofil optimieren (2025)',
    excerpt:
      'Maximiere deine lokale Sichtbarkeit mit einem perfekt optimierten Google Unternehmensprofil. Mit Beispielen aus Hannover.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
    imageAlt: 'Google My Business Optimierung',
    category: 'SEO',
    city: 'Hannover',
    author: {
      name: 'Elias Möller',
      role: 'Founder @ WebCuts',
    },
    publishedAt: '2024-12-28',
    readTime: 9,
    featured: false,
    tags: ['Google My Business', 'Local SEO'],
  },
  {
    id: '6',
    slug: 'webdesign-braunschweig-tipps',
    title: 'Webdesign in Braunschweig: Anbieter, Kosten & Trends',
    excerpt:
      'Du suchst eine Webdesign-Agentur in Braunschweig? Wir zeigen dir, worauf es ankommt und was du erwarten kannst.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    imageAlt: 'Webdesign Braunschweig',
    category: 'Geo',
    city: 'Braunschweig',
    author: {
      name: 'Elias Möller',
      role: 'Founder @ WebCuts',
    },
    publishedAt: '2024-12-20',
    readTime: 6,
    featured: false,
    tags: ['Webdesign', 'Braunschweig', 'Agentur'],
  },
  {
    id: '7',
    slug: 'website-ladezeit-verbessern',
    title: 'Website zu langsam? 7 Tricks für bessere Performance',
    excerpt:
      'Ladezeit ist ein Ranking-Faktor. Lerne, wie du deine Website schneller machst – mit praktischen Tipps, die sofort wirken.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    imageAlt: 'Website Performance Optimierung',
    category: 'SEO',
    author: {
      name: 'Elias Möller',
      role: 'Founder @ WebCuts',
    },
    publishedAt: '2024-12-15',
    readTime: 5,
    featured: false,
    tags: ['Performance', 'Web Vitals', 'SEO'],
  },
  {
    id: '8',
    slug: 'webdesign-hannover-guide',
    title: 'Webdesign Hannover: Der komplette Guide für 2025',
    excerpt:
      'Alles was du über Webdesign in Hannover wissen musst. Von Agenturen bis zu Trends – dein Wegweiser für die perfekte Website.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    imageAlt: 'Webdesign Hannover Guide',
    category: 'Geo',
    city: 'Hannover',
    author: {
      name: 'Elias Möller',
      role: 'Founder @ WebCuts',
    },
    publishedAt: '2024-12-10',
    readTime: 8,
    featured: false,
    tags: ['Webdesign', 'Hannover', 'Guide'],
  },
];

// Helper Functions
export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: BlogCategory | 'Alle'): BlogPost[] {
  if (category === 'Alle') return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

export function getPostsByCity(city: string | 'Alle'): BlogPost[] {
  if (city === 'Alle') return blogPosts;
  return blogPosts.filter((post) => post.city === city);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function filterPosts(
  category: BlogCategory | 'Alle',
  city: string | 'Alle'
): BlogPost[] {
  return blogPosts.filter((post) => {
    const categoryMatch = category === 'Alle' || post.category === category;
    const cityMatch = city === 'Alle' || post.city === city || !post.city;
    return categoryMatch && cityMatch;
  });
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
