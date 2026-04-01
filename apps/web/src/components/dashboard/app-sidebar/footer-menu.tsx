import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from '@/src/components/ui/sidebar';
import LogoutButton from '@/src/components/global/logout-button';
import ThemeSwitcher from '@/src/components/global/theme-switcher';

export default function FooterMenu() {
  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <ThemeSwitcher
            isSidebar
            className="text-foreground justify-start !no-underline"
            text="Theme"
          />
        </SidebarMenuItem>

        <SidebarMenuItem>
          <LogoutButton className="dark:text-foreground" />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
