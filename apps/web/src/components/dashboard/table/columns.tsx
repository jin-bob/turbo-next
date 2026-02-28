'use client';

import { createColumnHelper } from '@tanstack/react-table';
import TruncateCell from '@/src/components/global/tables/cells/truncate-cell';
import StatusCell from '@/src/components/dashboard/table/cells/status-cell';
import { getConvertedDate } from '@/src/helpers/getConvertedDate';
import { GetCustomEventsQueryResult } from '@/src/schema';

type Column = Omit<GetCustomEventsQueryResult[number], 'slug'>;

const columnHelper = createColumnHelper<Column>();

export const COLUMNS = [
  columnHelper.accessor('name', {
    size: 165,
    header: 'Name',
    cell: TruncateCell,
  }),
  columnHelper.accessor('description', {
    size: 365,
    header: 'Description',
    cell: TruncateCell,
  }),
  columnHelper.accessor('startDate', {
    size: 120,
    header: 'Start Date',
    cell: ({ getValue }) => {
      const value = getValue();

      return <div>{getConvertedDate(value || undefined)}</div>;
    },
  }),
  columnHelper.accessor('endDate', {
    size: 120,
    header: 'End Date',
    cell: ({ getValue }) => {
      const value = getValue();

      return <div>{getConvertedDate(value || undefined)}</div>;
    },
  }),
  columnHelper.accessor('type', {
    size: 165,
    header: 'Type',
    cell: TruncateCell,
  }),

  columnHelper.accessor('categories', {
    size: 165,
    header: 'Categories',
    cell: ({ getValue }) => {
      const categories = getValue();

      if (!categories?.length) {
        return null;
      }

      return (
        <ul className="max-h-[20px] overflow-y-auto">
          {categories.map((category) => (
            <li key={category} className="max-w-[150px] truncate">
              {category}
            </li>
          ))}
        </ul>
      );
    },
  }),

  columnHelper.accessor('status', {
    size: 160,
    header: 'Status',
    cell: StatusCell,
  }),
];
