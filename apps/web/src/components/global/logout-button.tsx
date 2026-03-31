'use client';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/src/lib/firebase/firebase-client';
import { SidebarMenuButton } from '@/src/components/ui/sidebar';

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
    <SidebarMenuButton className={className} onClick={handleLogout}>
      Logout
    </SidebarMenuButton>
  );
}
