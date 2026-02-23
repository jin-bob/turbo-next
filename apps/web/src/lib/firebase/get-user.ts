import { cookies } from 'next/headers';
import { adminAuth } from '@/src/lib/firebase/firebase-admin';

export async function getUser() {
  const cookie = await cookies();
  const session = cookie.get('session')?.value;

  if (!session) return null;

  try {
    const decoded = await adminAuth.verifySessionCookie(session, true);
    return decoded;
  } catch {
    return null;
  }
}
