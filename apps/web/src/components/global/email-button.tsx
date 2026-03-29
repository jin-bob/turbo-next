'use client';

import { MailIcon } from 'lucide-react';
import copyToClipboard from '@/src/helpers/copyToClipboard';
import { Button } from '@/src/components/ui/button';

export default function EmailButton() {
  return (
    <Button
      type="button"
      variant="outline"
      className="text-header"
      onClick={copyToClipboard('mdbobskiy777@gmail.com', 'Email')}
    >
      <MailIcon />
    </Button>
  );
}
