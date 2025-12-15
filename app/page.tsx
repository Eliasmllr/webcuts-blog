import Hero from '@/components/Hero';
import BlogGrid from '@/components/BlogGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WebCuts Blog | Webdesign & SEO Tipps aus Hannover',
  description:
    'Aktuelle Webdesign-Trends, SEO-Strategien und Marketing-Tipps für Hannover und Umgebung. Praxis-Wissen für Gründer und Startups.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BlogGrid />
    </>
  );
}
