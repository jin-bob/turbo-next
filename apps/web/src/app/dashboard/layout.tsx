import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { SidebarProvider, SidebarTrigger } from '@/src/components/ui/sidebar';
import AppSidebar from '@/src/components/global/dashboard/app-sidebar/app-sidebar';
import { getUser } from '@/src/lib/firebase/get-user';
import MobileNav from '@/src/components/global/dashboard/mobile-nav/mobile-nav';

export default async function Layout({ children }: { children: ReactNode }) {
  const user = await getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <MobileNav />
        <SidebarTrigger className="hidden md:block" />
        <div className="w-full p-3 md:px-5 md:pt-0 md:pb-5">{children}</div>
      </main>
    </SidebarProvider>
  );
}
