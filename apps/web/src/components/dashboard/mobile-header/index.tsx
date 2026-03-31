import Link from 'next/link';
import Logo from '@/src/components/global/logo';
import ThemeSwitcher from '@/src/components/global/theme-switcher';

export default function MobileHeader() {
  return (
    <div className="bg-header fixed top-0 z-20 flex w-full items-center justify-between gap-2 px-6 pt-2 pb-2.5 md:hidden">
      <Link href="/">
        <Logo className="dark:text-foreground" />
      </Link>

      <ThemeSwitcher className="text-foreground w-fit justify-start !no-underline" />
    </div>
  );
}
