import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/src/components/ui/card';
import { Stars } from '@/src/components//global/stars';
import { GetCardsPageDataQueryResult } from '@/src/schema';

export type ListCardData = NonNullable<
  NonNullable<GetCardsPageDataQueryResult>['infoCards']
>[number];

export default function ListCard({
  name,
  shortDescription,
  amount,
  rating,
}: ListCardData) {
  return (
    <Card className="xxs:w-[416px] bg-secondary flex h-full w-full flex-col rounded-[20px] border-0 p-4 shadow-none md:w-auto md:max-w-[345px]">
      <CardContent className="rounded-[8px] bg-gradient-to-br from-blue-700 via-blue-400 to-blue-200 p-0 md:max-h-[216px] md:max-w-[384px]">
        <Image
          src={'/logo.svg'}
          alt={name || ''}
          width={313}
          height={104}
          className="h-full w-full rounded-[8px] object-cover"
        />
      </CardContent>

      <CardFooter className="mt-[18px] flex flex-col items-start border-0 p-0 text-start">
        <div>{name}</div>

        <div className="flex w-full flex-col justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="mt-1 mb-2 flex w-full flex-col justify-start">
            <div className="flex items-center gap-1 text-start text-[14px]">
              <Calendar className="size-[14px]" />

              <span>Card</span>

              <span>•</span>

              <span>{amount} views</span>
            </div>

            <div className="flex items-center gap-1 text-start text-[14px]">
              <Stars rating={Number(rating)} />
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
