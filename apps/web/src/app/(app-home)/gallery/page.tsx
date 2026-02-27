import Image from 'next/image';
import { defineQuery } from 'next-sanity';
import { client } from '@/src/lib/sanity/client';

export const dynamic = 'force-static';

const getGalleryPageQuery = defineQuery(`*[_type=="galleryPage"][0]{
  title,
  catImages[]->{
    "url": image.asset->url
  }
}`);

export default async function GalleryPage() {
  const data = await client.fetch(getGalleryPageQuery);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h1 className="mb-8 text-2xl font-semibold">{data?.title}</h1>

      <div className="mobsm:grid-cols-2 grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-4">
        {data?.catImages?.map((img, index) => {
          const spans = [
            'col-span-2 row-span-2',
            'col-span-1 row-span-1',
            'col-span-1 row-span-1',
            'col-span-2 row-span-1',
            'col-span-1 row-span-2',
            'col-span-1 row-span-1',
          ];

          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg ${spans[index % spans.length]}`}
            >
              <Image
                src={img.url || ''}
                alt={`cat-${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
