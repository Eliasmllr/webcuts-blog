import type { Metadata, Viewport } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.webcuts.de'),
  title: {
    default: 'WebCuts Blog | Webdesign & SEO Tipps aus Hannover',
    template: '%s | WebCuts Blog',
  },
  description:
    'Lerne alles über modernes Webdesign, SEO und Digital Marketing. Praxis-Tipps von deiner Webdesign-Agentur aus Hannover für Gründer und Startups.',
  keywords: [
    'Webdesign Hannover',
    'SEO Hannover',
    'Framer Webdesign',
    'Website erstellen',
    'Shopify Agentur',
    'Webdesign für Startups',
  ],
  authors: [{ name: 'Elias Möller', url: 'https://www.webcuts.de' }],
  creator: 'WebCuts',
  publisher: 'WebCuts',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://blog.webcuts.de',
    siteName: 'WebCuts Blog',
    title: 'WebCuts Blog | Webdesign & SEO Tipps aus Hannover',
    description:
      'Praxis-Tipps für modernes Webdesign und SEO von deiner Webdesign-Agentur aus Hannover.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebCuts Blog - Webdesign & SEO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebCuts Blog',
    description: 'Webdesign & SEO Tipps aus Hannover',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://blog.webcuts.de',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Preconnect zu wichtigen Domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
