import List from '@/src/components/dashboard/cards/list';
import { defineQuery } from 'next-sanity';
import { client } from '@/src/lib/sanity/client';

const getCardsPageDataQuery = defineQuery(`*[_type=="cardsPage"][0]{
 h1,
 subText,
 "infoCards": infoCards[]->{
   name,
   shortDescription,
   amount,
   rating,
   "slug": slug.current,
 }
}
`);

export default async function CoursePage() {
  const data = await client.fetch(getCardsPageDataQuery);

  return (
    <main className="w-full">
      <div className="space-y-3">
        <h1 className="text-header mt-16 text-center text-4xl font-semibold">
          {data?.h1}
        </h1>

        <h3 className="text-center text-lg text-zinc-400 dark:text-zinc-300">
          {data?.subText}
        </h3>
      </div>

      <List cards={data?.infoCards || []} />
    </main>
  );
}
