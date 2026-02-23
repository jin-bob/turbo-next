import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { SidebarProvider, SidebarTrigger } from '@/src/components/ui/sidebar';
import AppSidebar from '@/src/components/global/app-sidebar';
import { getUser } from '@/src/lib/firebase/get-user';

export default async function Layout({ children }: { children: ReactNode }) {
  const user = await getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
