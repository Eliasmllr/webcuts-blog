import { promises as fs } from 'fs';
import path from 'path';
import type { BlogPost } from './types';
import { blogPosts as staticPosts } from './data';

// Get all posts (static + dynamic from API)
export async function getAllPosts(): Promise<BlogPost[]> {
  const dynamicPosts = await getDynamicPosts();

  // Merge dynamic posts with static posts, dynamic first (newer)
  return [...dynamicPosts, ...staticPosts];
}

// Get dynamic posts from JSON file
export async function getDynamicPosts(): Promise<BlogPost[]> {
  try {
    const dataPath = path.join(process.cwd(), 'data', 'posts.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Get post by slug (checks both sources)
export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const allPosts = await getAllPosts();
  return allPosts.find((post) => post.slug === slug);
}

// Get featured posts
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.featured);
}
