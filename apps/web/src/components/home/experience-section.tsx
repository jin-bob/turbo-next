import ExperienceCard from '@/src/components/home/experience-card';
import CompanySlider from '@/src/components/home/company-slider';

const MARVELOUS_DATA = [
  'Developed and maintained client-facing application using React.js',
  'Improved page load performance and frontend responsiveness',
  'Worked heavily with TanStack Table and TanStack Query',
  'Implemented real-time functionality using WebSockets / Socket.IO',
  'Integrated and customized React Quill for rich text / editor-based workflows',
];

const SKYBOX_DATA = [
  'Developed a mobile-first frontend application using React, TypeScript, and Vite',
  'Integrated Firebase Authentication for user access and session management',
  'Worked with Instagram and Facebook API-related data structures',
  'Built UI using Tailwind CSS and shadcn/ui',
  'Participated in communication-related feature work with exposure to CometChat',
];

const FUTUREPEDIA_DATA = [
  'Developed and Maintained a content-driven web platform using Next.js and TypeScript',
  'Worked with Sanity CMS and next-sanity for structured content management',
  'Integrated Mixpanel for product and user behavior tracking',
  'Improved SEO, SSR, and frontend performance',
  'Developed reusable UI components and scalable page structures',
];

const MALEVICH_DATA = [
  'Contributed to frontend feature development using React and modern JavaScript / TypeScript tooling',
  'Worked on UI improvements, feature implementation, and bug fixing',
  'Participated in maintaining frontend code quality',
];

const SHUTTERSTOCK_DATA = [
  'Worked on analytics-related frontend functionality to support user behavior tracking and interaction analysis',
  'Helped maintain frontend quality standards and test coverage requirements',
  'Contributed to bug fixing and frontend stability improvements',
  'Worked with and integrated a reusable internal frontend library into the main application',
  'Worked with i18next internationalization-framework',
];

export default function ExperienceSection() {
  return (
    <section className="mt-8 mb-16 md:mt-16">
      <h3 className="text-header mb-16 text-3xl font-semibold uppercase">
        Experience
      </h3>

      <div className="grid grid-cols-1 gap-5 md:gap-12 lg:grid-cols-2">
        <ExperienceCard
          projectName="Marvelous Works"
          description="PixelTech, Remote | May 2022 - Oct 2025"
          content={MARVELOUS_DATA}
        />

        <ExperienceCard
          projectName="Skybox (Startup)"
          description="PixelTech, Remote | May 2022 - Oct 2025"
          content={SKYBOX_DATA}
        />

        <ExperienceCard
          projectName="Futurepedia"
          description="PixelTech, Remote | May 2022 - Oct 2025"
          content={FUTUREPEDIA_DATA}
        />

        <ExperienceCard
          projectName="Medical conference platform"
          description="Malevich, Remote | Feb 2022 - May 2022"
          content={MALEVICH_DATA}
        />

        <ExperienceCard
          projectName="Shutterstock"
          description="Axels, Remote | Jan 2021 - Feb 2022"
          content={SHUTTERSTOCK_DATA}
        />
      </div>

      <CompanySlider />
    </section>
  );
}
