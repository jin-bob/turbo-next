import Link from 'next/link';
import NavLinks from '@/src/components/global/nav/desktop-nav/nav-links';
import Logo from '@/src/components/global/logo';

export default function DesktopNav() {
  return (
    <div className="bg-header sticky top-0 z-20 hidden h-[72px] w-full justify-center md:flex">
      <nav className="flex w-full max-w-[90rem] items-center gap-4 px-6 py-4 md:px-[60px] lg:px-[120px]">
        <Link href="/">
          <Logo className="dark:text-foreground text-white" />
        </Link>

        <NavLinks />

        <div className="flex flex-row items-center justify-between gap-2">
          <Link
            href="/dashboard"
            aria-label={'Open Dashboard page'}
            className="text-base font-semibold text-zinc-300 hover:text-white"
          >
            Dashboard
          </Link>
        </div>
      </nav>
    </div>
  );
}
