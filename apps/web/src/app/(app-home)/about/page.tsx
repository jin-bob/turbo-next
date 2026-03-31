import InfoSection from '@/src/components/home/info-section';
import type { Metadata } from 'next';
import { defineQuery } from 'next-sanity';
import { client } from '@/src/lib/sanity/client';
import AboutSection from '@/src/components/home/about-section';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Created by Yevhenii Bober, Software Developer',
};

const getAboutPageQuery = defineQuery(`*[_type=="homePage"][0]{
   infoSection {
    username,
    linkedinLink,
    jobTitle,
    location,
    status,
    description,
    experience[] {
      name,
      description,
      "logo": logo.asset->url
    },
    "avatar": avatar.asset->url,
    "background": bgImage.asset->url
  },
  aboutSection {
    slug,
    descriptionLeft,
    descriptionRight,
    "technologies": technologies[].asset->url
  }
}`);

export default async function AboutUsPage() {
  const data = await client.fetch(getAboutPageQuery);

  return (
    <>
      <InfoSection data={data?.infoSection} />
      
      <AboutSection data={data?.aboutSection} />
    </>
  );
}
