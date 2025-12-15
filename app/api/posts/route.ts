import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const API_SECRET = process.env.BLOG_API_KEY || '';
const POSTS_KEY = 'blog:posts';

export async function GET() {
  try {
    const posts = await redis.get(POSTS_KEY) || [];
    const sortedPosts = Array.isArray(posts)
      ? posts.sort((a: any, b: any) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        )
      : [];

    return NextResponse.json({
      success: true,
      count: sortedPosts.length,
      posts: sortedPosts,
    });
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (!token || token !== API_SECRET) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    if (!body.title || !body.excerpt || !body.category) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const post = {
      id: body.id || `post-${Date.now()}`,
      slug: body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: body.title,
      excerpt: body.excerpt,
      content: body.content || '',
      image: body.image || 'https://source.unsplash.com/1200x630/?web-design',
      imageAlt: body.imageAlt || body.title,
      category: body.category,
      city: body.city || null,
      author: body.author || { name: 'Elias Möller', role: 'Founder @ WebCuts' },
      publishedAt: body.publishedAt || new Date().toISOString().split('T')[0],
      readTime: body.readTime || 5,
      featured: body.featured || false,
      tags: body.tags || [],
    };

    const existingPosts = await redis.get(POSTS_KEY) || [];
    const posts = Array.isArray(existingPosts) ? existingPosts : [];
    posts.push(post);
    await redis.set(POSTS_KEY, posts);

    return NextResponse.json({
      success: true,
      message: 'Post created',
      post: { id: post.id, slug: post.slug, title: post.title, url: `/blog/${post.slug}` },
    }, { status: 201 });

  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
