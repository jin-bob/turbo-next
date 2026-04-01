import { Suspense } from 'react';
import { Metadata } from 'next';
import { defineQuery } from 'next-sanity';
import Table from '@/src/components/dashboard/events-table/table';
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
  title: 'Dashboard',
};

export default async function EventsPage(props: TablePageProps) {
  const searchParams = await props.searchParams;

  const searchValue = searchParams?.search || '*';

  const totalCount = await client.fetch(
    totalCountQuery,
    {
      search: searchValue,
    },
    { next: { revalidate: 3600 } },
  );
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const currentPage = Number(searchParams?.page) || 1;

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return (
    <main className="mx-auto flex w-full flex-col items-center justify-start gap-4">
      <div className="text-header mt-16 text-center text-4xl font-semibold">
        All Available Events
      </div>

      <Suspense fallback={<TablePageFallback />}>
        <Table
          start={start}
          end={end}
          totalPages={totalPages}
          search={searchValue}
        />
      </Suspense>
    </main>
  );
}
