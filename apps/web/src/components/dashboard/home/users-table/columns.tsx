'use client';

import { createColumnHelper } from '@tanstack/react-table';
import TruncateCell from '@/src/components/global/tables/cells/truncate-cell';
import { getConvertedDate } from '@/src/helpers/getConvertedDate';
import { User } from '@/src/lib/tanstack-query/options/users-query-options';

const columnHelper = createColumnHelper<User>();

export const USERS_COLUMNS = [
  columnHelper.accessor('firstName', {
    size: 165,
    header: 'First Name',
    cell: TruncateCell,
  }),
  columnHelper.accessor('lastName', {
    size: 165,
    header: 'Last Name',
    cell: TruncateCell,
  }),
  columnHelper.accessor('age', {
    size: 120,
    header: 'Age',
    cell: TruncateCell,
  }),
  columnHelper.accessor('birthDate', {
    size: 120,
    header: 'Birth Date',
    cell: ({ getValue }) => {
      const value = getValue();

      return <div>{getConvertedDate(value || undefined)}</div>;
    },
  }),
  columnHelper.accessor('address.country', {
    size: 165,
    header: 'Country',
    cell: TruncateCell,
  }),

  columnHelper.accessor('university', {
    size: 365,
    header: 'University',
    cell: TruncateCell,
  }),
];
