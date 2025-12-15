'use client';

import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import styles from './BlogGrid.module.css';

type CategoryFilter = string;

export default function BlogGrid() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Alle');

  const categories = ['Alle', 'SEO', 'Geo', 'Webdesign'];

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/posts');
        const data = await res.json();
        if (data.success) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (selectedCategory === 'Alle') return true;
    return post.category === selectedCategory;
  });

  if (loading) {
    return (
      <section className={styles.section} id="blog">
        <div className={styles.container}>
          <p style={{ textAlign: 'center', color: '#888' }}>Lädt Artikel...</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} id="blog">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Aktuelle Artikel</h2>
          <p className={styles.sectionSubtitle}>
            Praxis-Tipps und Insights für dein Online-Business
          </p>
        </div>

        <div className={styles.filterSection} id="kategorien">
          <div className={styles.filterGroup}>
            <h3 className={styles.filterLabel}>Kategorie</h3>
            <div className={styles.filterButtons}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className={styles.grid}>
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📭</div>
            <h3>Keine Artikel gefunden</h3>
            <p>Mit den aktuellen Filtern wurden keine passenden Artikel gefunden.</p>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => setSelectedCategory('Alle')}
            >
              Filter zurücksetzen
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
