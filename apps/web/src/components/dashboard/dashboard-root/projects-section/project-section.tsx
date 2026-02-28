import { defineQuery } from 'next-sanity';
import ProjectCard from '@/src/components/dashboard/dashboard-root/projects-section/project-card';
import { client } from '@/src/lib/sanity/client';

const getProjectsSectionQuery = defineQuery(`*[_type=="dashboardPage"][0]{
 cardsTitle,
 cards[]->{
   projectName,
   link,
   projectDescription,
   techs,
   "logo":projectLogo.asset->url
 }
}`);

export default async function ProjectsSection() {
  const data = await client.fetch(getProjectsSectionQuery);

  return (
    <div className="w-full space-y-6 text-center">
      <div className="text-2xl font-semibold">{data?.cardsTitle}</div>

      <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:items-start md:justify-around md:gap-8">
        {data?.cards?.length &&
          data.cards.map(
            ({ projectName, projectDescription, logo, link, techs }) => (
              <ProjectCard
                key={projectName}
                logo={logo}
                projectDescription={projectDescription}
                link={link}
                projectName={projectName}
                techs={techs}
              />
            ),
          )}
      </div>
    </div>
  );
}
