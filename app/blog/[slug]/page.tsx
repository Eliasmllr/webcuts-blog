import { notFound } from 'next/navigation';

async function getPost(slug: string) {
  const res = await fetch('https://webcuts-blog.vercel.app/api/posts', {
    cache: 'no-store'
  });
  const data = await res.json();
  return data.posts?.find((p: any) => p.slug === slug);
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 20px 60px' }}>
      <header style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <span style={{ background: '#ff5722', color: '#000', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>
            {post.category}
          </span>
          {post.city && (
            <span style={{ background: '#333', color: '#fff', padding: '4px 12px', borderRadius: '4px', fontSize: '12px' }}>
              {post.city}
            </span>
          )}
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
          {post.title}
        </h1>
        <p style={{ color: '#888', fontSize: '1.1rem', marginBottom: '20px' }}>{post.excerpt}</p>
        <div style={{ color: '#666', fontSize: '14px' }}>
          {post.publishedAt} - {post.readTime} Min Lesezeit
        </div>
      </header>

      <div style={{ color: '#ccc', lineHeight: 1.8, fontSize: '1.1rem', whiteSpace: 'pre-wrap' }}>
        {post.content}
      </div>

      <div style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid #333' }}>
        <a href="/" style={{ color: '#ff5722' }}>Zurueck zur Uebersicht</a>
      </div>
    </article>
  );
}
