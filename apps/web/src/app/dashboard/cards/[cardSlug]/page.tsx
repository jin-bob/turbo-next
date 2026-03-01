import { Metadata } from 'next';
import { defineQuery } from 'next-sanity';
import { notFound } from 'next/navigation';
import { client } from '@/src/lib/sanity/client';

type CardPageProps = {
  params?: Promise<{ cardSlug?: string }>;
};

const getCardPageQuery =
  defineQuery(`*[_type == "cardInfo" && slug.current == $cardSlug][0]{
   name,
   shortDescription,
   amount,
   rating,
}`);

export const metadata: Metadata = {
  title: 'Cards',
};

export default async function CardPage(props: CardPageProps) {
  const params = await props.params;

  const data = await client.fetch(getCardPageQuery, {
    cardSlug: params?.cardSlug,
  });

  if (!data) return notFound();

  return <div className="w-full p-5">{JSON.stringify(data)}</div>;
}
