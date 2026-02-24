'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Binoculars, Home, LucideIcon, Table } from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/src/components/ui/sidebar';
import getIsActive from '@/src/components/global/dashboard/get-is-active';

type MenuItem = {
  id: string;
  icon: LucideIcon;
  to: string;
  title: string;
};

const BASE = '/dashboard';

const ITEMS: Array<MenuItem> = [
  {
    id: '0',
    icon: Home,
    to: '/',
    title: 'Dashboard',
  },
  {
    id: '1',
    icon: Binoculars,
    to: '/cards',
    title: 'Cards',
  },
  {
    id: '2',
    icon: Table,
    to: '/table',
    title: 'Table',
  },
];

export default function AppSidebarMenu() {
  const pathName = usePathname();

  return (
    <SidebarMenu>
      {ITEMS.map((item) => {
        return (
          <SidebarMenuItem key={item.id}>
            <Link href={`${BASE}${item.to}`}>
              <>
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={getIsActive({ pathName, to: item.to })}
                  asChild
                >
                  <span>
                    {!!item.icon && <item.icon />}

                    <span>{item.title}</span>
                  </span>
                </SidebarMenuButton>
              </>
            </Link>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
