import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/'],
    },
    sitemap: [`https://${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`],
  };
}
