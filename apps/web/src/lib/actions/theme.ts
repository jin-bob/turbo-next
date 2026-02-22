'use server';

import { cookies } from 'next/headers';

export async function setThemeCookie(theme: string) {
  const cookieStore = await cookies();

  cookieStore.set('theme', theme, {
    path: '/',
    maxAge: 31536000,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: false,
  });
}
