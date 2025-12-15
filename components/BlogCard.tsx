import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/types';
import { formatDate } from '@/lib/data';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  priority?: boolean;
}

export default function BlogCard({
  post,
  featured = false,
  priority = false,
}: BlogCardProps) {
  return (
    <article
      className={`${styles.card} ${featured ? styles.featured : ''}`}
    >
      <Link href={`/blog/${post.slug}`} className={styles.link}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
            className={styles.image}
            priority={priority}
          />
          {/* Category Badge */}
          <span className={styles.category}>{post.category}</span>
          {/* City Badge (if available) */}
          {post.city && <span className={styles.city}>{post.city}</span>}
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Meta */}
          <div className={styles.meta}>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span className={styles.dot}>•</span>
            <span>{post.readTime} Min Lesezeit</span>
          </div>

          {/* Title */}
          <h3 className={styles.title}>{post.title}</h3>

          {/* Excerpt */}
          <p className={styles.excerpt}>{post.excerpt}</p>

          {/* Footer */}
          <div className={styles.footer}>
            <div className={styles.author}>
              <div className={styles.authorAvatar}>
                {post.author.name.charAt(0)}
              </div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{post.author.name}</span>
                {post.author.role && (
                  <span className={styles.authorRole}>{post.author.role}</span>
                )}
              </div>
            </div>
            <span className={styles.readMore}>
              Lesen
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
