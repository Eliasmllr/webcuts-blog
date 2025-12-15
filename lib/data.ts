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

// Blog Posts
export const blogPosts: BlogPost[] = [];

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
