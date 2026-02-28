import { TableSkeleton } from '@/src/components/skeletons/table-page/table-page-skeletons';
import { PaginationSkeleton } from '@/src/components/skeletons/table-page/pagination-skeleton';
import { Skeleton } from '@/src/components/ui/skeleton';

export default function TablePageFallback() {
  return (
    <>
      <div className="flex w-full max-w-[1302px] justify-end">
        <Skeleton className="h-[39px] w-[218px] rounded" />
      </div>

      <div className="w-full max-w-[1302px] overflow-y-auto rounded-md border px-5">
        <TableSkeleton />
      </div>

      <PaginationSkeleton />
    </>
  );
}
