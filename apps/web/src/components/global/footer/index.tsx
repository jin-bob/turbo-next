import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-0 mt-3 flex w-full flex-col">
      <div className="h-[200px] w-full bg-gradient-to-b from-[var(--background)] to-[var(--header))]" />
      <div className="bg-header mx-auto box-border flex h-[48px] w-full items-center justify-between gap-4 px-3 text-white md:px-5">
        <a
          href="https://www.linkedin.com/in/mdbobskiy/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Linkedin className="size-[24px]" />
        </a>

        <div className="flex gap-2">
          <span>{currentYear}</span>

          <Link href={'/'}>Recall</Link>
        </div>
      </div>
    </footer>
  );
}
