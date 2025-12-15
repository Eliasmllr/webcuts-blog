// Blog Post Types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  imageAlt: string;
  category: BlogCategory;
  city?: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  featured: boolean;
  tags: string[];
}

export interface Author {
  name: string;
  avatar?: string;
  role?: string;
}

export type BlogCategory =
  | 'SEO'
  | 'Geo'
  | 'Webdesign';

export interface City {
  name: string;
  slug: string;
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// Filter Types
export interface BlogFilters {
  category: BlogCategory | 'Alle';
  city: string | 'Alle';
  search?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// SEO Types
export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}
