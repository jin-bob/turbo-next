import type { Metadata } from 'next';
import { defineQuery } from 'next-sanity';
import { client } from '@/src/lib/sanity/client';
import ExperienceSection from '@/src/components/home/experience-section';
import EducationSection from '@/src/components/home/education-section';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Experience Page',
  description: 'Created by Yevhenii Bober, Software Developer',
};

const getExperiencePageQuery = defineQuery(`*[_type=="homePage"][0]{
   experienceSection {
    slug,
    "companies": companies[].asset->url,
    projects[]->{
      projectName,
      projectDescription,
      content
    }
  },
  educationSection {
    ...,
    "logo": logo.asset->url,  
  }
}`);

export default async function ExperiencePage() {
  const data = await client.fetch(getExperiencePageQuery);

  return (
    <>
      <ExperienceSection data={data?.experienceSection} />

      <EducationSection data={data?.educationSection} />
    </>
  );
}
