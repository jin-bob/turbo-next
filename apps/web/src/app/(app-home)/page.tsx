import { type Metadata } from 'next';
import { defineQuery } from 'next-sanity';
import TechSlider from '@/src/components/home/tech-slider';
import ExperienceSection from '@/src/components/home/experience-section';
import EducationSection from '@/src/components/home/education-section';
import ContactSection from '@/src/components/home/contact-section';
import CompanySlider from '@/src/components/home/company-slider';
import InfoSection from '@/src/components/home/info-section';
import AboutSection from '@/src/components/home/about-section';
import { client } from '@/src/lib/sanity/client';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Created by Yevhenii Bober, Software Developer',
};

const getHomePageQuery = defineQuery(`*[_type=="homePage"][0]{
content
}`);

export default async function Home() {
  const data = await client.fetch(getHomePageQuery);

  console.log('data: ', data);
  return (
    <main className="mx-auto w-full max-w-[90rem] px-6 md:px-[60px] lg:px-[120px]">
      <InfoSection />

      <AboutSection />

      <TechSlider />

      <ExperienceSection />

      <CompanySlider />

      <EducationSection />

      <ContactSection />
    </main>
  );
}
