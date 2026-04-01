import { type ReactNode } from 'react';
import { Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/src/components/ui/alert';

type AlertInfoProps = {
  description: ReactNode;
  title?: ReactNode;
};

export default function AlertInfo({ description, title }: AlertInfoProps) {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      {!!title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
