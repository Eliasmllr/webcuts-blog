import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  blog: [
    { label: 'Alle Artikel', href: '/' },
    { label: 'SEO', href: '/#kategorien' },
    { label: 'Geo', href: '/#kategorien' },
    { label: 'Webdesign', href: '/#kategorien' },
  ],
  company: [
    { label: 'Kontakt', href: 'https://www.webcuts.de/kontakt', external: true },
    { label: 'Projekt starten', href: 'https://www.webcuts.de', external: true },
  ],
  legal: [
    { label: 'Impressum', href: 'https://www.webcuts.de/impressum', external: true },
    { label: 'Datenschutz', href: 'https://www.webcuts.de/datenschutz', external: true },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/webcuts.de', icon: 'instagram' },
    { label: 'TikTok', href: 'https://tiktok.com/@webcuts.de', icon: 'tiktok' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand Section */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>WebCuts</span>
              <span className={styles.logoDot}>.</span>
              <span className={styles.logoSub}>Blog</span>
            </Link>
            <p className={styles.tagline}>
              Webdesign & SEO Know-How aus Hannover. Praxis-Tipps für Gründer und
              Startups, die online durchstarten wollen.
            </p>
            <div className={styles.social}>
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon === 'instagram' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {link.icon === 'tiktok' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className={styles.linksSection}>
            <h4 className={styles.linksTitle}>Blog</h4>
            <ul className={styles.linksList}>
              {footerLinks.blog.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksSection}>
            <h4 className={styles.linksTitle}>WebCuts</h4>
            <ul className={styles.linksList}>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <span className={styles.externalIcon}>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksSection}>
            <h4 className={styles.linksTitle}>Rechtliches</h4>
            <ul className={styles.linksList}>
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} WebCuts. Alle Rechte vorbehalten.
          </p>
          <p className={styles.madeIn}>
            Mit <span className={styles.heart}>♥</span> in Hannover entwickelt
          </p>
        </div>
      </div>
    </footer>
  );
}
