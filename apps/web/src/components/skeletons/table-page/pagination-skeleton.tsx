import { Skeleton } from '@/src/components/ui/skeleton';

export function PaginationSkeleton() {
  return (
    <div className="mt-4 flex justify-center gap-4">
      <Skeleton className="h-8 w-16 rounded" />

      <Skeleton className="h-8 w-16 rounded" />
    </div>
  );
}
