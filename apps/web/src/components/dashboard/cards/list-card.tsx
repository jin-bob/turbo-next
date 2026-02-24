import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/src/components/ui/card';
import { Stars } from '@/src/components//global/stars';

export type ListCardData = {
  name: string;
  id: string;
  image: string;
  shortDescription: string;
  amount?: number;
  rating?: string;
};

export default function ListCard({
  name,
  id,
  image,
  shortDescription,
  amount,
  rating,
}: ListCardData) {
  const cardHref = `/dashboard/cards/${id}`;

  return (
    <Card className="xxs:w-[416px] bg-secondary flex h-full w-full flex-col rounded-[20px] border-0 p-4 shadow-none md:w-auto md:max-w-[345px]">
      <CardContent className="rounded-[8px] bg-gradient-to-br from-blue-700 via-blue-400 to-blue-200 p-0 md:max-h-[216px] md:max-w-[384px]">
        {!!image && (
          <Link href={cardHref}>
            <Image
              src={image}
              alt={name}
              width={384}
              height={216}
              className="h-full w-full rounded-[8px] object-cover"
            />
          </Link>
        )}
      </CardContent>

      <CardFooter className="mt-[18px] flex flex-col items-start border-0 p-0 text-start">
        <Link className="text-xl font-bold" href={cardHref}>
          {name}
        </Link>

        <div className="flex w-full flex-col justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="mt-1 mb-2 flex w-full flex-col justify-start">
            <div className="flex items-center gap-1 text-start text-[14px]">
              <Calendar className="size-[14px]" />

              <span>Card</span>

              <span>•</span>

              <span>{amount || 0} views</span>
            </div>

            <div className="flex items-center gap-1 text-start text-[14px]">
              <Stars rating={Number(rating) || 0} />
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {shortDescription}
        </p>
      </CardFooter>
    </Card>
  );
}
