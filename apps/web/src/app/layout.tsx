import { type ReactNode } from 'react';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import AppThemeProvider from '@/src/components/providers/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Next App',
    default: 'Next App',
  },
  description: 'Simple Next Application',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value;

  return (
    <html
      lang="en"
      className={theme === 'dark' ? 'dark' : 'light'}
      suppressHydrationWarning
    >
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
