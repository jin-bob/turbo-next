'use client';

import { type ReactNode } from 'react';
import {
  flexRender,
  getCoreRowModel,
  type RowData,
  type TableOptions,
  useReactTable,
} from '@tanstack/react-table';
import getCommonPinningStyle from '@/src/components/global/tables/get-common-pinning-style';
import {
  Table as ShadcnTable,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/components/ui/table';
import createLoading from '@/src/components/global/tables/create-loading';
import TableContent from '@/src/components/global/tables/table-content';

export type TableUIProps<TData extends RowData> = Omit<
  TableOptions<TData>,
  'getCoreRowModel'
> & {
  className?: string;
  isClient?: boolean;
  isLoading?: boolean;
  error?: ReactNode;
};

export default function TableUI<TData extends RowData>({
  data,
  columns,
  className,
  isLoading,
  isClient = false,
  error,
  ...props
}: TableUIProps<TData>) {
  let tableData = data;
  let tableColumns = columns;

  if (isClient && isLoading !== undefined) {
    const { columns: clientTableColumns, data: clientTableData } =
      createLoading({
        isLoading,
        columns,
        data,
      });

    tableData = clientTableData;
    tableColumns = clientTableColumns;
  }

  const table = useReactTable({
    data: tableData,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    ...props,
  });

  const width = table.getTotalSize();

  return (
    <ShadcnTable className="table-fixed" style={{ width }}>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const isPinned = header.column.getIsPinned();

              return (
                <TableHead
                  key={header.id}
                  className="text-foreground h-12 text-center text-[12px]"
                  style={getCommonPinningStyle(header.column)}
                >
                  {isPinned && (
                    <div className="bg-background absolute inset-0 -z-[1]" />
                  )}
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        <TableContent table={table} error={error} className={className} />
      </TableBody>
    </ShadcnTable>
  );
}
