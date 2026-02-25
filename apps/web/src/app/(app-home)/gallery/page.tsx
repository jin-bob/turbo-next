import Image from 'next/image';

export const dynamic = 'force-static';

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/gallery/cat-${i + 1}.webp`,
}));

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h1 className="mb-8 text-2xl font-semibold">Here are some kittens!!!</h1>

      <div className="mobsm:grid-cols-2 grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-4">
        {images.map((img, index) => {
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
                src={img.src}
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
