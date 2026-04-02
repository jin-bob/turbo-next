import UsersTableContainer from '@/src/components/dashboard/home/users-table/users-table-container';

export default function DashboardPage() {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-start gap-4">
      <div className="text-header mt-16 mb-8 text-center text-4xl font-semibold">
        Users Table with TanStack Query data
      </div>

      <UsersTableContainer />
    </div>
  );
}
