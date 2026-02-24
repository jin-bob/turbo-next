'use client';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { Button } from '@/src/components/ui/button';
import { auth } from '@/src/lib/firebase/firebase-client';
import { cn } from '@/src/lib/utils';

type LogoutButtonProps = {
  className?: string;
};

export default function LogoutButton({ className }: LogoutButtonProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);

    await fetch('/api/logout', { method: 'POST' });

    router.push('/');
    router.refresh();
  };

  return (
    <Button
      variant="secondary"
      className={cn('', className)}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}
