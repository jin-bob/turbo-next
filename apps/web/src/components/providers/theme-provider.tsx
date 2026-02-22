'use client';

import { ReactNode, useEffect } from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
import { setThemeCookie } from '@/src/lib/actions/theme';

function ThemeCookieSync() {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) {
      setThemeCookie(theme);
    }
  }, [theme]);

  return null;
}

export default function AppThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      storageKey="theme"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeCookieSync />

      {children}
    </ThemeProvider>
  );
}
