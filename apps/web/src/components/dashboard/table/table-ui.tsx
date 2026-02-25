'use client';

import { useMemo } from 'react';
import {
  flexRender,
  getCoreRowModel,
  type RowData,
  type TableOptions,
  useReactTable,
} from '@tanstack/react-table';
import getCommonPinningStyle from '@/src/components/dashboard/table/get-common-pinning-style';
import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/components/ui/table';

type TableUIProps<TData extends RowData> = Omit<
  TableOptions<TData>,
  'getCoreRowModel'
> & {
  className?: string;
};

export default function TableUI<TData extends RowData>({
  data,
  columns,
  className,
  ...props
}: TableUIProps<TData>) {
  const memoData = useMemo(() => data, [data]);
  const memoColumns = useMemo(() => columns, [columns]);

  const table = useReactTable({
    data: memoData,
    columns: memoColumns,
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
        {table.getRowModel().rows.map((row) => {
          return (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
              className={className}
            >
              {row.getVisibleCells().map((cell) => {
                const isPinned = cell.column.getIsPinned();

                return (
                  <TableCell
                    key={cell.id}
                    style={getCommonPinningStyle(cell.column)}
                    className="text-center"
                  >
                    {isPinned && (
                      <div className="bg-background absolute inset-0 -z-[1]" />
                    )}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </ShadcnTable>
  );
}
