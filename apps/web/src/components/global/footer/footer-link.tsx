import Link from 'next/link';
import { cn } from '@/src/lib/utils';
import { PropsWithChildren } from 'react';

type FooterLinkProps = PropsWithChildren<{
  href: string;
  variant?: 'default' | 'small';
}>;

export default function FooterLink({
  children,
  href,
  variant = 'default',
}: FooterLinkProps) {
  return (
    <Link
      className={cn(
        'text-base leading-6 text-white hover:underline hover:underline-offset-1',
        variant === 'small' && 'text-xs leading-5',
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
