import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getPostBySlug, blogPosts, formatDate } from '@/lib/data';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artikel nicht gefunden',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.article}>
      {/* Hero Section */}
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Blog</Link>
            <span className={styles.separator}>/</span>
            <span>{post.category}</span>
          </nav>

          {/* Meta Info */}
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            {post.city && <span className={styles.city}>📍 {post.city}</span>}
            <span className={styles.dot}>•</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span className={styles.dot}>•</span>
            <span>{post.readTime} Min Lesezeit</span>
          </div>

          {/* Title */}
          <h1 className={styles.title}>{post.title}</h1>

          {/* Excerpt */}
          <p className={styles.excerpt}>{post.excerpt}</p>

          {/* Author */}
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
        </div>
      </header>

      {/* Featured Image */}
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className={styles.image}
            priority
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.prose}>
          {/* Placeholder content - in production this would be MDX/Markdown rendered */}
          <p>
            Dies ist ein Platzhalter für den vollständigen Artikelinhalt. In der
            Produktion würde hier der tatsächliche Inhalt des Blog-Posts gerendert
            werden, entweder aus einer Markdown-Datei oder einer Datenbank.
          </p>
          
          <h2>Warum ist {post.category} wichtig?</h2>
          <p>
            {post.excerpt} Mit den richtigen Strategien kannst du dein Business
            auf das nächste Level bringen und mehr Kunden gewinnen.
          </p>

          <h2>Praktische Tipps</h2>
          <p>
            Hier sind einige konkrete Maßnahmen, die du sofort umsetzen kannst,
            um bessere Ergebnisse zu erzielen. Diese Tipps basieren auf unserer
            Erfahrung aus über 20 erfolgreichen Projekten.
          </p>

          <h2>Fazit</h2>
          <p>
            Mit den richtigen Tools und Strategien ist es einfacher als je zuvor,
            online erfolgreich zu sein. Wenn du Unterstützung brauchst, sind wir
            bei WebCuts für dich da.
          </p>
        </div>

        {/* Tags */}
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.cta}>
          <h3>Bereit für dein Projekt?</h3>
          <p>
            Lass uns gemeinsam deine Website oder deinen Online-Shop erstellen.
            In nur 48 Stunden hast du eine professionelle Online-Präsenz.
          </p>
          <a
            href="https://www.webcuts.de/kontakt"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Projekt starten
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
          </a>
        </div>

        {/* Back Link */}
        <Link href="/" className={styles.backLink}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M13 8H3M7 4L3 8l4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Zurück zur Übersicht
        </Link>
      </div>
    </article>
  );
}
