'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Check, Laptop, Moon, Sun } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu';
import { cn } from '@/src/lib/utils';
import { SidebarMenuButton } from '@/src/components/ui/sidebar';
import { Button } from '@/src/components/ui/button';

type ThemeSwitcherProps = {
  className?: string;
  text?: string;
  isSidebar?: boolean;
};

export default function ThemeSwitcher({
  className,
  text,
  isSidebar = false,
}: ThemeSwitcherProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const currentIcon = !mounted ? (
    <Sun className="size-4" />
  ) : theme === 'system' ? (
    <Laptop className="size-4" />
  ) : resolvedTheme === 'light' ? (
    <Sun className="size-4" />
  ) : (
    <Moon className="size-4" />
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {isSidebar ? (
          <SidebarMenuButton className={cn('justify-start', className)}>
            {currentIcon}
            <span>{text}</span>
          </SidebarMenuButton>
        ) : (
          <Button className="hover:bg-blue-400/25 hover:!text-blue-300">
            {currentIcon}
          </Button>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 size-4" />
          Light
          {theme === 'light' && <Check className="ml-auto size-4" />}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 size-4" />
          Dark
          {theme === 'dark' && <Check className="ml-auto size-4" />}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Laptop className="mr-2 size-4" />
          System
          {theme === 'system' && <Check className="ml-auto size-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
