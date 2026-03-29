'use client';

import { Phone } from 'lucide-react';
import copyToClipboard from '@/src/helpers/copyToClipboard';
import { Button } from '@/src/components/ui/button';

type PhoneButtonProps = {
  number: string;
};

export default function PhoneButton({ number }: PhoneButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      className="text-header"
      onClick={copyToClipboard(number, 'Phone Number')}
    >
      <Phone />
    </Button>
  );
}
