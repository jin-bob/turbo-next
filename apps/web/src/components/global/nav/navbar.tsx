import MobileNav from '@/src/components/global/nav/mobile-nav';
import DesktopNav from '@/src/components/global/nav/desktop-nav';

export default function Navbar() {
  return (
    <div className="w-full">
      <MobileNav />

      <DesktopNav />
    </div>
  );
}
