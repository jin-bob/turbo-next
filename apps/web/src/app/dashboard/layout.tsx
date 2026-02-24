import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { SidebarProvider, SidebarTrigger } from '@/src/components/ui/sidebar';
import AppSidebar from '@/src/components/dashboard/app-sidebar/app-sidebar';
import MobileNav from '@/src/components/dashboard/mobile-nav/mobile-nav';
import { getUser } from '@/src/lib/firebase/get-user';

export default async function Layout({ children }: { children: ReactNode }) {
  const user = await getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger className="hidden md:block" />

        <div className="mb-[60px] w-full p-3 md:px-5 md:pt-0 md:pb-5">
          {children}
        </div>

        <MobileNav />
      </main>
    </SidebarProvider>
  );
}
