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
    <Sidebar className="hidden md:block">
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
