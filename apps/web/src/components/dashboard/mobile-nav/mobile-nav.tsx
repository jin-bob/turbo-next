'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MOBILE_NAV_ITEMS, NAV_BASE } from '@/src/constants/nav';
import getIsActivePathname from '@/src/helpers/get-is-active-pathname';
import { cn } from '@/src/lib/utils';

export default function MobileNav() {
  const pathName = usePathname();

  return (
    <div className="bg-background fixed bottom-0 w-full border-0 md:hidden">
      <div className="bg-header mx-4 mb-2 flex items-center justify-between gap-4 rounded-3xl px-4 py-2">
        {MOBILE_NAV_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={`${NAV_BASE}${item.to}`}
            className={cn(
              'text-background dark:text-foreground rounded-full px-3 py-2 hover:bg-blue-400/25 hover:!text-blue-300',
              getIsActivePathname({
                pathName,
                to: item.to,
              }) && 'bg-blue-400/25 !text-blue-300',
            )}
          >
            <div className="flex flex-col items-center justify-between">
              {!!item.icon && <item.icon className="size-5" />}

              <div className="mobsm:block hidden text-sm">{item.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
