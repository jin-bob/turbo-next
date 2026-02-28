import Link from 'next/link';
import { Button } from '@/src/components/ui/button';

export default function CardNotFound() {
  return (
    <main className="bg-background text-foreground flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">Card Info not found</h2>

      <p>Could not find requested Card Info.</p>

      <Button asChild variant="secondary">
        <Link href="/dashboard/cards">Go Back</Link>
      </Button>
    </main>
  );
}
