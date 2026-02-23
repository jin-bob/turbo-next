'use client';

import { createContext, PropsWithChildren, useContext } from 'react';
import { setThemeCookie } from '@/src/actions/theme';

export type Theme = 'dark' | 'light';

type ThemeProviderProps = PropsWithChildren<{
  theme: Theme;
}>;

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('useThemeContext must be used within ThemeProvider');
  return context;
}

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setThemeCookie(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
