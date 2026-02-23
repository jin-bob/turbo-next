'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useTheme } from '@/src/context/theme-context';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="link" className="text-white" onClick={toggleTheme}>
      {theme === 'light' ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </Button>
  );
}
