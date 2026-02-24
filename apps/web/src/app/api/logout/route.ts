import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminAuth } from '@/src/lib/firebase/firebase-admin';

export async function POST() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;

  if (sessionCookie) {
    try {
      const decoded = await adminAuth.verifySessionCookie(sessionCookie);

      await adminAuth.revokeRefreshTokens(decoded.sub);
    } catch (error) {
      console.error('Failed to revoke session:', error);
    }
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set('session', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  return response;
}
