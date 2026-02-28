'use client';

import { cn } from '@/src/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

type PaginationProps = {
  totalPages: number;
};

export default function Pagination({ totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-between gap-4">
      <a
        href={createPageURL(currentPage - 1)}
        className={`rounded border px-3 py-1 ${currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}`}
      >
        Prev
      </a>
      <a
        href={createPageURL(currentPage + 1)}
        className={cn(
          'rounded border px-3 py-1',
          currentPage >= totalPages && 'pointer-events-none opacity-50',
        )}
      >
        Next
      </a>
    </div>
  );
}
