import { type ReactNode } from 'react';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Theme, ThemeProvider } from '@/src/context/theme-context';
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
  const theme = (cookieStore.get('theme')?.value || 'light') as Theme;

  return (
    <html lang="en" className={theme}>
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
