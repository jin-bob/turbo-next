import { Card, CardContent, CardFooter } from '@/src/components/ui/card';
import { Skeleton } from '@/src/components/ui/skeleton';

export function CardPageInfoSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="mx-auto mb-4 h-8 w-64" />

      <Skeleton className="mx-auto h-6 w-24" />
    </div>
  );
}

function ListCardSkeleton() {
  return (
    <Card className="xxs:w-[416px] bg-secondary flex h-full w-full flex-col rounded-[20px] border-0 p-4 shadow-none md:w-auto md:max-w-[345px]">
      <CardContent className="p-0">
        <div className="aspect-[313/104] h-[104px] w-full animate-pulse rounded-[8px] bg-gray-200 dark:bg-gray-500" />
      </CardContent>

      <CardFooter className="mt-[18px] flex flex-col items-start border-0 p-0">
        <div className="mb-2 h-5 w-2/3 animate-pulse rounded bg-gray-200 dark:bg-gray-500" />

        <div className="mb-3 flex w-full flex-col gap-2">
          <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-500" />
          <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200 dark:bg-gray-500" />
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-500" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-500" />
        </div>
      </CardFooter>
    </Card>
  );
}

export function ListSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid w-full auto-rows-auto grid-cols-1 justify-items-center gap-[24px] px-[15px] pt-2.5 min-[1100px]:grid-cols-3 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <ListCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
