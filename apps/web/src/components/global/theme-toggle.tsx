'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useTheme } from '@/src/context/theme-context';
import { cn } from '@/src/lib/utils';

type ThemeToggleProps = {
  className?: string;
  text?: string;
};

export default function ThemeToggle({ className, text }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="link"
      className={cn('text-white', className)}
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}

      {!!text && <span>{text}</span>}
    </Button>
  );
}
