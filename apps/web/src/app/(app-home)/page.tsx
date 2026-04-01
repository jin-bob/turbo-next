import { type Metadata } from 'next';
import { defineQuery } from 'next-sanity';
import ExperienceSection from '@/src/components/home/experience-section';
import EducationSection from '@/src/components/home/education-section';
import ContactSection from '@/src/components/home/contact-section';
import InfoSection from '@/src/components/home/info-section';
import AboutSection from '@/src/components/home/about-section';
import { client } from '@/src/lib/sanity/client';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Created by Yevhenii Bober, Software Developer',
};

const getHomePageQuery = defineQuery(`*[_type=="homePage"][0]{
  ...,
  infoSection{
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
  },
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

export default async function Home() {
  const data = await client.fetch(getHomePageQuery);

  return (
    <>
      <InfoSection data={data?.infoSection} />

      <AboutSection data={data?.aboutSection} />

      <ExperienceSection data={data?.experienceSection} />

      <EducationSection data={data?.educationSection} />

      <ContactSection data={data?.contactSection} />
    </>
  );
}
