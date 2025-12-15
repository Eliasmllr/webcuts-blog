'use client';

import { useState, useMemo } from 'react';
import BlogCard from './BlogCard';
import { blogPosts, categories } from '@/lib/data';
import type { BlogCategory } from '@/lib/types';
import styles from './BlogGrid.module.css';

type CategoryFilter = BlogCategory | 'Alle';

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Alle');

  // Gefilterte Posts mit useMemo für Performance
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      return selectedCategory === 'Alle' || post.category === selectedCategory;
    });
  }, [selectedCategory]);

  // Featured und Regular Posts trennen
  const featuredPosts = useMemo(
    () => filteredPosts.filter((post) => post.featured),
    [filteredPosts]
  );
  const regularPosts = useMemo(
    () => filteredPosts.filter((post) => !post.featured),
    [filteredPosts]
  );

  // Filter zurücksetzen
  const resetFilters = () => {
    setSelectedCategory('Alle');
  };

  const hasActiveFilters = selectedCategory !== 'Alle';

  return (
    <section className={styles.section} id="blog">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Aktuelle Artikel</h2>
          <p className={styles.sectionSubtitle}>
            Praxis-Tipps und Insights für dein Online-Business
          </p>
        </div>

        {/* Filter Section */}
        <div className={styles.filterSection} id="kategorien">
          {/* Kategorie Filter */}
          <div className={styles.filterGroup}>
            <h3 className={styles.filterLabel}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2 4a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm3 1a1 1 0 000 2h6a1 1 0 100-2H5zm0 4a1 1 0 100 2h6a1 1 0 100-2H5z" />
              </svg>
              Kategorie
            </h3>
            <div className={styles.filterButtons}>
              <button
                type="button"
                className={`${styles.filterBtn} ${
                  selectedCategory === 'Alle' ? styles.active : ''
                }`}
                onClick={() => setSelectedCategory('Alle')}
                aria-pressed={selectedCategory === 'Alle'}
              >
                Alle
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`${styles.filterBtn} ${
                    selectedCategory === cat ? styles.active : ''
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className={styles.activeFilters}>
              <span className={styles.filterCount}>
                {filteredPosts.length} Artikel gefunden
              </span>
              <button
                type="button"
                className={styles.resetBtn}
                onClick={resetFilters}
              >
                Filter zurücksetzen
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 3l8 8M11 3l-8 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className={styles.featuredSection}>
            <h3 className={styles.subsectionTitle}>
              <span className={styles.highlight}>★</span> Beliebte Artikel
            </h3>
            <div className={styles.featuredGrid}>
              {featuredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  featured
                  priority={index < 2}
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div className={styles.regularSection}>
            <h3 className={styles.subsectionTitle}>Weitere Artikel</h3>
            <div className={styles.grid}>
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📭</div>
            <h3>Keine Artikel gefunden</h3>
            <p>
              Mit den aktuellen Filtern wurden keine passenden Artikel gefunden.
            </p>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={resetFilters}
            >
              Filter zurücksetzen
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
