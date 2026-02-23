import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/src/lib/firebase/firebase-admin';

export async function POST(req: NextRequest) {
  const { idToken } = await req.json();

  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

  const sessionCookie = await adminAuth.createSessionCookie(idToken, {
    expiresIn,
  });

  const response = NextResponse.json({ status: 'success' });

  response.cookies.set('session', sessionCookie, {
    httpOnly: true,
    secure: true,
    path: '/',
    maxAge: expiresIn / 1000,
  });

  return response;
}
