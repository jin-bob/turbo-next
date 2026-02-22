import Link from 'next/link';
import NavLinks from '@/src/components/global/nav/desktop-nav/nav-links';
import Logo from '@/src/components/global/logo';
import ThemeToggle from '@/src/components/global/theme-toggle';

export default function DesktopNav() {
  return (
    <nav className="sticky top-0 hidden w-full items-center gap-4 bg-blue-300 p-4 md:flex">
      <Link href="/apps/web/public">
        <Logo className="h-12 w-[144px] text-white" />
      </Link>

      <NavLinks />

      <div className="flex flex-row items-center justify-between gap-2">
        <Link href="/login" className="text-white">
          Login
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}
