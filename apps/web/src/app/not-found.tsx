import Link from 'next/link';
import { Button } from '@/src/components/ui/button';

export default function NotFound() {
  return (
    <main className="bg-background text-foreground flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold"> 404 Not Found</h2>

      <p>Could not find requested page.</p>

      <Button asChild variant="secondary">
        <Link href="/">Go Home</Link>
      </Button>
    </main>
  );
}
