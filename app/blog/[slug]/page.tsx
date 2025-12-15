import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

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

      <div className="prose" style={{ color: '#ccc', lineHeight: 1.8, fontSize: '1.1rem' }}>
        <ReactMarkdown
          components={{
            h1: ({children}) => <h1 style={{fontSize: '2rem', fontWeight: 700, marginTop: '40px', marginBottom: '16px', color: '#fff'}}>{children}</h1>,
            h2: ({children}) => <h2 style={{fontSize: '1.5rem', fontWeight: 700, marginTop: '40px', marginBottom: '16px', color: '#fff'}}>{children}</h2>,
            h3: ({children}) => <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginTop: '30px', marginBottom: '12px', color: '#fff'}}>{children}</h3>,
            p: ({children}) => <p style={{marginBottom: '16px', color: '#ccc'}}>{children}</p>,
            ul: ({children}) => <ul style={{marginBottom: '16px', paddingLeft: '24px'}}>{children}</ul>,
            li: ({children}) => <li style={{marginBottom: '8px', color: '#ccc'}}>{children}</li>,
            strong: ({children}) => <strong style={{color: '#fff', fontWeight: 600}}>{children}</strong>,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <div style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid #333' }}>
        <a href="/" style={{ color: '#ff5722' }}>← Zurück zur Übersicht</a>
      </div>
    </article>
  );
}
