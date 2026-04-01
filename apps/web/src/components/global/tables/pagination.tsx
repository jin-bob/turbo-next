'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/src/lib/utils';

type PaginationProps = {
  totalPages: number;
  firstPage?: number;
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
      <Link
        href={createPageURL(currentPage - 1)}
        className={`rounded border px-3 py-1 ${currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}`}
      >
        Prev
      </Link>

      <Link
        href={createPageURL(currentPage + 1)}
        className={cn(
          'rounded border px-3 py-1',
          currentPage >= totalPages && 'pointer-events-none opacity-50',
        )}
      >
        Next
      </Link>
    </div>
  );
}
