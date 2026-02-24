'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_BASE, NAV_ITEMS } from '@/src/constants/nav';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';
import getIsActivePathname from '@/src/helpers/get-is-active-pathname';

export default function MobileNav() {
  const pathName = usePathname();

  return (
    <div className="bg-background fixed bottom-0 box-border flex h-[60px] w-full items-center justify-between gap-4 border-t p-3 md:hidden">
      {NAV_ITEMS.map((item) => (
        <Button
          variant="secondary"
          key={item.id}
          asChild
          className={cn(
            'hover:bg-header hover:text-background',
            getIsActivePathname({
              pathName,
              to: item.to,
            }) && 'bg-header text-background',
          )}
        >
          <Link href={`${NAV_BASE}${item.to}`}>
            <div className="mobsm:px-0 mobsm:gap-2 flex flex-row items-center justify-between gap-1 px-3 text-xl">
              {!!item.icon && <item.icon className="size-5" />}

              <div className="mobsm:block hidden">{item.title}</div>
            </div>
          </Link>
        </Button>
      ))}
    </div>
  );
}
