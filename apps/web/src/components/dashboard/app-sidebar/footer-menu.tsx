import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from '@/src/components/ui/sidebar';
import LogoutButton from '@/src/components/global/logout-button';
import ThemeToggle from '@/src/components/global/theme-toggle';

export default function FooterMenu() {
  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <ThemeToggle
            className="text-foreground justify-start !no-underline"
            text="Theme"
          />
        </SidebarMenuItem>

        <SidebarMenuItem>
          <LogoutButton />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
