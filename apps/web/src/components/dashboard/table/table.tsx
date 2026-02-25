import getTableData from '@/src/actions/get-table-data';
import TableUI from '@/src/components/dashboard/table/table-ui';
import { COLUMNS } from '@/src/components/dashboard/table/columns';

export default async function Table() {
  const data = await getTableData();

  return (
    <div className="w-full max-w-[1302px] overflow-y-auto rounded-md border px-5">
      <TableUI
        className="h-[79px]"
        data={data}
        columns={COLUMNS}
        state={{
          columnPinning: {
            right: ['actions'],
          },
        }}
      />
    </div>
  );
}
