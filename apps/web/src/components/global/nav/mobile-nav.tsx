'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { navbarLinks } from '@/src/app/constants/navbar';
import { Button } from '@/src/components/ui/button';
import Logo from '@/src/components/global/logo';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathName = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="sticky top-0 flex w-full items-center justify-between gap-2 bg-blue-300 p-2 md:hidden">
      <Link href="/apps/web/public">
        <Logo className="h-12 w-[144px] text-white" />
      </Link>

      <button
        type="button"
        className="text-white"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Menu className={cn('size-8', isOpen ? 'hidden' : 'block')} />
        <X className={cn('size-8', isOpen ? 'block' : 'hidden')} />
      </button>

      <div
        className={cn(
          'bg-background fixed top-[64px] bottom-0 left-0 w-full transform flex-col gap-4 px-4 py-3 transition-all duration-300 ease-in-out',
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-[-100%] opacity-0',
        )}
      >
        <div className="flex flex-col items-start gap-4">
          {navbarLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                'font-semibold transition-opacity duration-300',
                pathName === link.href ? 'text-blue-500' : 'text-foreground',
                isOpen ? 'opacity-100 delay-[50ms]' : 'opacity-0',
              )}
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="flex w-full items-center justify-center">
          <Button asChild variant="default" className="px-[80px] py-6">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
