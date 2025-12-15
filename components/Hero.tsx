import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.backgroundGrid} aria-hidden="true" />
      <div className={styles.glowOrb} aria-hidden="true" />
      
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Headline */}
          <h1 className={styles.title}>
            Webdesign & SEO
            <br />
            <span className={styles.highlight}>Know-How</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Praxis-Tipps für Gründer und Startups in Hannover. Lerne, wie du dein
            Business online sichtbar machst – ohne Marketing-Blabla.
          </p>

          {/* CTA Buttons */}
          <div className={styles.actions}>
            <a href="#blog" className={styles.primaryBtn}>
              Artikel entdecken
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
            <a
              href="https://www.webcuts.de/kontakt"
              className={styles.secondaryBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Projekt starten
            </a>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>20+</span>
              <span className={styles.statLabel}>Projekte</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Zufriedenheit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
