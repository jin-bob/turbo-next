import { redirect } from 'next/navigation';
import { getUser } from '@/src/lib/firebase/get-user';

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect('/login');
  }

  return <div>Welcome {user.email}</div>;
}
