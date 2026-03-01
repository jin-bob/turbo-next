import { Suspense } from 'react';
import { Metadata } from 'next';
import { defineQuery } from 'next-sanity';
import Table from '@/src/components/dashboard/table/table';
import { client } from '@/src/lib/sanity/client';
import TablePageFallback from '@/src/components/skeletons/table-page/table-page-fallback';

const PAGE_SIZE = 7;

const totalCountQuery = defineQuery(`count(*[
    _type == "customEvent" &&
    (
      $search == "*" ||
      name match $search + "*" ||
      description match $search + "*"
    )
  ])`);

type TablePageProps = {
  searchParams?: Promise<{
    page?: string;
    search?: string;
  }>;
};

export const metadata: Metadata = {
  title: 'Table',
};

export default async function TablePage(props: TablePageProps) {
  const searchParams = await props.searchParams;

  const searchValue = searchParams?.search || '*';

  const totalCount = await client.fetch(totalCountQuery, {
    search: searchValue,
  });
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const currentPage = Number(searchParams?.page) || 1;

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-start gap-4">
      <div className="text-2xl font-semibold">Example of React Table</div>

      <Suspense fallback={<TablePageFallback />}>
        <Table
          start={start}
          end={end}
          totalPages={totalPages}
          search={searchValue}
        />
      </Suspense>
    </div>
  );
}
