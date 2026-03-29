'use client';

import { MailIcon } from 'lucide-react';
import copyToClipboard from '@/src/helpers/copyToClipboard';
import { Button } from '@/src/components/ui/button';

type EmailButtonProps = {
  email: string;
};

export default function EmailButton({ email }: EmailButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      className="text-header"
      onClick={copyToClipboard(email, 'Email')}
    >
      <MailIcon />
    </Button>
  );
}
