import { defineQuery } from 'next-sanity';
import TableUI from '@/src/components/dashboard/table/table-ui';
import { COLUMNS } from '@/src/components/dashboard/table/columns';
import { client } from '@/src/lib/sanity/client';
import Search from '@/src/components/global/search';
import Pagination from '@/src/components/dashboard/table/pagination';

const getCustomEventsQuery = defineQuery(`*[_type == "customEvent" &&
    (
      $search == "*" ||
      name match $search + "*" ||
      description match $search + "*"
    )][$start...$end]{
    "slug": slug.current,
    name,
    description,
    startDate,
    endDate,
    categories,
    status,
    type,
}
`);

type TableProps = {
  start: number;
  end: number;
  totalPages: number;
  search: string;
};

export default async function Table({
  start,
  end,
  search,
  totalPages,
}: TableProps) {
  const data = await client.fetch(getCustomEventsQuery, {
    start: start,
    end: end,
    search,
  });

  return (
    <>
      <div className="flex w-full max-w-[1302px] justify-end">
        <Search placeholder="Search..." />
      </div>

      <div className="w-full max-w-[1302px] overflow-y-auto rounded-md border px-5">
        <TableUI className="h-[79px]" data={data || []} columns={COLUMNS} />
      </div>

      <Pagination totalPages={totalPages} />
    </>
  );
}
