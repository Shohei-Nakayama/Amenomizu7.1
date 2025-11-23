import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/reserve/success/', '/contact/success/'],
    },
    sitemap: 'https://www.amenomizu.jp/sitemap.xml',
  };
}
