'use client';

import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/components/ui/table';
import { Skeleton } from '@/src/components/ui/skeleton';

type TableSkeletonProps = {
  rows?: number;
};

const COLUMN_SIZES = [165, 365, 120, 120, 165, 165, 160];
const HEADER_HEIGHT = 48;
const ROW_HEIGHT = 79;

export function TableSkeleton({ rows = 7 }: TableSkeletonProps) {
  const totalWidth = COLUMN_SIZES.reduce((a, b) => a + b, 0);

  return (
    <ShadcnTable className="table-fixed" style={{ width: totalWidth }}>
      <TableHeader>
        <TableRow>
          {COLUMN_SIZES.map((size, index) => (
            <TableHead key={index} style={{ width: size }} className="p-0">
              <div
                className="flex items-center justify-center"
                style={{ height: HEADER_HEIGHT }}
              >
                <Skeleton className="h-4 w-3/4" />
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            {COLUMN_SIZES.map((size, colIndex) => (
              <TableCell key={colIndex} style={{ width: size }} className="p-0">
                <div
                  className="flex items-center justify-center"
                  style={{ height: ROW_HEIGHT }}
                >
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </ShadcnTable>
  );
}
