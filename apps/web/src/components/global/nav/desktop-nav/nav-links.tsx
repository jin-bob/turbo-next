'use client';

import { navbarLinks } from '@/src/app/constants/navbar';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <div className="flex flex-1 items-center justify-center gap-[100px]">
      {navbarLinks.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={cn(
            'font-semibold',
            pathName === link.href
              ? 'font-semibold text-white'
              : 'text-zinc-300 hover:text-white',
          )}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}
