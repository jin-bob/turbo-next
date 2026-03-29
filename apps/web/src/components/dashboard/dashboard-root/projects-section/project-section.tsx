import { defineQuery } from 'next-sanity';
import { client } from '@/src/lib/sanity/client';

const getProjectsSectionQuery = defineQuery(`*[_type=="dashboardPage"][0]{
 cardsTitle,
}`);

export default async function ProjectsSection() {
  const data = await client.fetch(getProjectsSectionQuery);

  return (
    <div className="w-full space-y-6 text-center">
      <div className="text-2xl font-semibold">{data?.cardsTitle}</div>
    </div>
  );
}
