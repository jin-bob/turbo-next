import { Suspense } from 'react';
import Table from '@/src/components/dashboard/table/table';

export default async function TablePage() {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-start gap-4">
      <div className="text-2xl font-semibold">Example of React Table</div>

      <Suspense fallback={<div>Loading...</div>}>
        <Table />
      </Suspense>
    </div>
  );
}
