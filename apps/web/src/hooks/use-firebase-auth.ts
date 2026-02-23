'use client';

import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '@/src/lib/firebase/firebase-client';

export default function useFirebaseAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}
