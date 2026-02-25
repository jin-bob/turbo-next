import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/src/components/ui/sidebar';
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
      <div className="relative">
        <AppSidebar />

        <SidebarTrigger className="absolute top-0 right-[-30px] z-20 hidden justify-center md:flex" />
      </div>

      <SidebarInset className="relative mb-[60px] w-full p-3 md:w-[calc(100dvw-var(--sidebar-width)-16px)] md:px-5 md:pb-5">
        {children}
      </SidebarInset>

      <MobileNav />
    </SidebarProvider>
  );
}
