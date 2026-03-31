import type { Metadata } from 'next';
import { defineQuery } from 'next-sanity';
import { client } from '@/src/lib/sanity/client';
import ContactSection from '@/src/components/home/contact-section';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Created by Yevhenii Bober, Software Developer',
};

const getContactPageQuery = defineQuery(`*[_type=="homePage"][0]{
   contactSection {
    ...
  },
}`);

export default async function ContactPage() {
  const data = await client.fetch(getContactPageQuery);

  return <ContactSection data={data?.contactSection} />;
}
