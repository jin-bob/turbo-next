'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/src/components/ui/sidebar';
import { NAV_BASE, NAV_ITEMS } from '@/src/constants/nav';
import getIsActivePathname from '@/src/helpers/get-is-active-pathname';

export default function AppSidebarMenu() {
  const pathName = usePathname();

  return (
    <SidebarMenu>
      {NAV_ITEMS.map((item) => {
        return (
          <SidebarMenuItem key={item.id}>
            <Link href={`${NAV_BASE}${item.to}`}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={getIsActivePathname({ pathName, to: item.to })}
                asChild
              >
                <span>
                  {!!item.icon && <item.icon />}

                  <span>{item.title}</span>
                </span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
