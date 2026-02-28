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
   rating
 }
}
`);

export default async function CardsPage() {
  const data = await client.fetch(getCardsPageDataQuery);

  return (
    <main className="w-full">
      <div className="space-y-3">
        <h1 className="text-center text-2xl font-semibold">{data?.h1}</h1>

        <h3 className="text-center text-base">{data?.subText}</h3>
      </div>

      <List cards={data?.infoCards || []} />
    </main>
  );
}
