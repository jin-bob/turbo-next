import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/src/components/ui/sidebar';
import Logo from '@/src/components/global/logo';
import NavMain from '@/src/components/dashboard/app-sidebar/nav-main';
import FooterMenu from '@/src/components/dashboard/app-sidebar/footer-menu';

export default function AppSidebar() {
  return (
    <Sidebar className="relative hidden md:fixed [[data-state=collapsed]>&]:!w-0">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>

      <SidebarContent>
        <NavMain />
      </SidebarContent>

      <SidebarFooter>
        <FooterMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
