'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navigation.module.css';

const navLinks = [
  { label: 'Blog', href: '/' },
  { label: 'Kategorien', href: '/#kategorien' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Hauptnavigation">
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
            <Image
              src="/webcuts logo orange.png"
              alt="WebCuts Logo"
              width={40}
              height={40}
              className={styles.logoImage}
            />
            <span className={styles.logoSub}>Blog</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks} role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://www.webcuts.de/kontakt"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Kontakt
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <ul className={styles.mobileNavLinks} role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.webcuts.de/kontakt"
                className={styles.mobileCta}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
