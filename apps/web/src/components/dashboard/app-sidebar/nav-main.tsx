import { SidebarGroup } from '@/src/components/ui/sidebar';
import AppSidebarMenu from '@/src/components/dashboard/app-sidebar/app-sidebar-menu';

export default function NavMain() {
  return (
    <SidebarGroup>
      <AppSidebarMenu />
    </SidebarGroup>
  );
}
