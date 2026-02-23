import Link from 'next/link';
import NavLinks from '@/src/components/global/nav/desktop-nav/nav-links';
import Logo from '@/src/components/global/logo';
import ThemeToggle from '@/src/components/global/theme-toggle';
import LoginLink from '@/src/components/home/login-link';

export default function DesktopNav() {
  return (
    <nav className="bg-header sticky top-0 hidden w-full items-center gap-4 p-4 md:flex">
      <Link href="/apps/web/public">
        <Logo className="h-12 w-[144px] text-white" />
      </Link>

      <NavLinks />

      <div className="flex flex-row items-center justify-between gap-2">
        <LoginLink className="h-fit w-fit text-base" />

        <ThemeToggle />
      </div>
    </nav>
  );
}
