import { MetadataRoute } from 'next';
import { client } from '@/src/lib/sanity/client';
import { defineQuery } from 'next-sanity';

type SitemapProjection = {
  _updatedAt: string;
  slug: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_SITE_URL is not defined');
}

const getHomePageMapQuery = defineQuery(`*[_type=="homePage"][0]{
  _updatedAt,
  "slug": ""
}`);

const getAboutPageMapQuery = defineQuery(`*[_type=="homePage"][0]{
  _updatedAt,
  "slug": aboutSection.slug.current
}`);

const getContactPageMapQuery = defineQuery(`*[_type=="homePage"][0]{
  _updatedAt,
  "slug": contactSection.slug.current
}`);

const getTermsPageMapQuery = defineQuery(`*[_type=="aboutPage"][0]{
  _updatedAt,
  "slug": slug.current
}`);

const getContactUsPageMapQuery = defineQuery(`*[_type=="contactPage"][0]{
  _updatedAt,
  "slug": slug.current
}`);

async function fetchSinglePage(query: string) {
  try {
    return await client.fetch<SitemapProjection | null>(query);
  } catch (error) {
    console.error(error);
    return null;
  }
}

function createEntry(
  page: SitemapProjection | null,
  options: Pick<MetadataRoute.Sitemap[number], 'priority' | 'changeFrequency'>,
): MetadataRoute.Sitemap[number] | null {
  if (!page) return null;

  return {
    url: `${BASE_URL}/${page.slug.split('/').filter(Boolean).join('/')}`,
    lastModified: new Date(page._updatedAt),
    ...options,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [landingPage, aboutPage, contactPage, termsPage, contactUsPage] =
    await Promise.all([
      fetchSinglePage(getHomePageMapQuery),
      fetchSinglePage(getAboutPageMapQuery),
      fetchSinglePage(getContactPageMapQuery),
      fetchSinglePage(getTermsPageMapQuery),
      fetchSinglePage(getContactUsPageMapQuery),
    ]);

  return [
    createEntry(landingPage, { priority: 1, changeFrequency: 'yearly' }),
    createEntry(aboutPage, { priority: 0.8, changeFrequency: 'yearly' }),
    createEntry(contactPage, { priority: 0.8, changeFrequency: 'yearly' }),
    createEntry(termsPage, { priority: 0.4, changeFrequency: 'yearly' }),
    createEntry(contactUsPage, { priority: 0.4, changeFrequency: 'yearly' }),
  ].filter(Boolean) as MetadataRoute.Sitemap;
}
