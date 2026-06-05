import type { MetadataRoute } from 'next';
import { FEATURED_PROJECTS } from '@/lib/site-data';
import { SITE_URL } from '@/lib/seo';

const publicRoutes = [
  '/',
  '/services',
  '/portfolio',
  '/pricing',
  '/contact',
  '/design',
];

const designRoutes = [
  '/design/school',
  '/design/erp',
  '/design/restaurant',
  '/design/billingerp',
  '/design/nexmart',
  '/design/ecommerce',
  '/design/construction',
  '/design/erpsoftware',
  '/design/gym',
  ...FEATURED_PROJECTS.map((project) => project.link).filter((link) => link.startsWith('/')),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Array.from(new Set([...publicRoutes, ...designRoutes]));
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : route.startsWith('/design') ? 'monthly' : 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/design') ? 0.6 : 0.8,
  }));
}
