import Link from 'next/link';
import { getUser } from '@/src/lib/firebase/get-user';
import { cn } from '@/src/lib/utils';
import { Button } from '@/src/components/ui/button';

type LoginLinkProps = {
  className?: string;
};

export default async function LoginLink({ className }: LoginLinkProps) {
  const user = await getUser();

  const text = user ? 'Dashboard' : 'Login';

  return (
    <Button
      asChild
      variant="default"
      className={cn('h-[64px] w-[240px] text-xl font-semibold', className)}
    >
      <Link href="/dashboard">{text}</Link>
    </Button>
  );
}
