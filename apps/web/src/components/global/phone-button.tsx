'use client';

import { Phone } from 'lucide-react';
import copyToClipboard from '@/src/helpers/copyToClipboard';
import { Button } from '@/src/components/ui/button';

export default function PhoneButton() {
  return (
    <Button
      type="button"
      variant="outline"
      className="text-header"
      onClick={copyToClipboard('+380974578182', 'Phone Number')}
    >
      <Phone />
    </Button>
  );
}
