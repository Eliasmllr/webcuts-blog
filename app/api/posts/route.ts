import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { BlogPost, BlogCategory } from '@/lib/types';

// API Key validation
const API_KEY = process.env.BLOG_API_KEY;

function validateApiKey(request: NextRequest): boolean {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) return false;

  // Support both "Bearer <key>" and just "<key>" formats
  const key = authHeader.startsWith('Bearer ')
    ? authHeader.slice(7)
    : authHeader;

  return key === API_KEY;
}

// Generate unique ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Validate blog post data
function validatePost(data: Partial<BlogPost>): { valid: boolean; error?: string } {
  if (!data.title || typeof data.title !== 'string') {
    return { valid: false, error: 'Title is required' };
  }
  if (!data.excerpt || typeof data.excerpt !== 'string') {
    return { valid: false, error: 'Excerpt is required' };
  }
  if (!data.category || !['SEO', 'Geo', 'Webdesign'].includes(data.category)) {
    return { valid: false, error: 'Category must be SEO, Geo, or Webdesign' };
  }
  if (!data.image || typeof data.image !== 'string') {
    return { valid: false, error: 'Image URL is required' };
  }
  return { valid: true };
}

// GET - Fetch all posts
export async function GET(request: NextRequest) {
  if (!validateApiKey(request)) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const dataPath = path.join(process.cwd(), 'data', 'posts.json');

    try {
      const data = await fs.readFile(dataPath, 'utf-8');
      const posts = JSON.parse(data);
      return NextResponse.json({ success: true, data: posts });
    } catch {
      // Return empty array if file doesn't exist
      return NextResponse.json({ success: true, data: [] });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

// POST - Create new post
export async function POST(request: NextRequest) {
  if (!validateApiKey(request)) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();

    // Validate post data
    const validation = validatePost(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 }
      );
    }

    // Create the post object
    const newPost: BlogPost = {
      id: generateId(),
      slug: body.slug || generateSlug(body.title),
      title: body.title,
      excerpt: body.excerpt,
      content: body.content || '',
      image: body.image,
      imageAlt: body.imageAlt || body.title,
      category: body.category as BlogCategory,
      city: body.city,
      author: body.author || {
        name: 'Elias Möller',
        role: 'Founder @ WebCuts',
      },
      publishedAt: body.publishedAt || new Date().toISOString().split('T')[0],
      readTime: body.readTime || Math.ceil(body.content?.split(' ').length / 200) || 5,
      featured: body.featured || false,
      tags: body.tags || [],
    };

    // Read existing posts
    const dataDir = path.join(process.cwd(), 'data');
    const dataPath = path.join(dataDir, 'posts.json');

    let posts: BlogPost[] = [];

    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    try {
      const data = await fs.readFile(dataPath, 'utf-8');
      posts = JSON.parse(data);
    } catch {
      // File doesn't exist yet, start with empty array
    }

    // Add new post to the beginning
    posts.unshift(newPost);

    // Write back to file
    await fs.writeFile(dataPath, JSON.stringify(posts, null, 2));

    return NextResponse.json(
      { success: true, data: newPost, message: 'Post created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
