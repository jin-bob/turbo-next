'use client';

import { useRouter } from 'next/navigation';
import { auth } from '@/src/lib/firebase/firebase-client';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from '@/src/components/ui/button';

export default function GoogleLoginButton() {
  const router = useRouter();

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const idToken = await result.user.getIdToken();

      await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ idToken }),
        headers: { 'Content-Type': 'application/json' },
      });

      router.push('/dashboard');
    } catch (error) {
      console.error('Login Failed', error);
    }
  };

  return (
    <Button variant="default" onClick={login}>
      Sign in with Google
    </Button>
  );
}
