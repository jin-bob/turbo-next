'use client';

import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import createUsersQueryOptions from '@/src/lib/tanstack-query/options/users-query-options';
import Pagination from '@/src/components/global/tables/pagination';
import { USERS_COLUMNS } from '@/src/components/dashboard/home/users-table/columns';
import TableUI from '@/src/components/global/tables/table-ui';

export default function UsersTableContainer() {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 0;

  const { data, isLoading, error } = useQuery(
    createUsersQueryOptions({
      params: {
        p: (currentPage - 1).toString(),
        pp: '10',
        q: undefined,
        sb: undefined,
        sd: undefined,
      },
    }),
  );

  return (
    <>
      <div className="w-full max-w-[1142px] overflow-y-auto rounded-md border px-5">
        <TableUI
          isClient
          className="h-[64px]"
          columns={USERS_COLUMNS}
          data={data?.users || []}
          isLoading={isLoading}
          error={error?.message}
        />
      </div>

      <Pagination totalPages={data?.total || 0} firstPage={0} />
    </>
  );
}
