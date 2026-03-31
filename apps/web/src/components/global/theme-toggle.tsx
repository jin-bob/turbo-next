'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/src/context/theme-context';
import { SidebarMenuButton } from '@/src/components/ui/sidebar';

type ThemeToggleProps = {
  className?: string;
  text?: string;
};

export default function ThemeToggle({ className, text }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <SidebarMenuButton content={className} onClick={toggleTheme}>
      {theme === 'light' ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}

      {!!text && <span>{text}</span>}
    </SidebarMenuButton>
  );
}
