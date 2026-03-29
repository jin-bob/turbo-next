import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-header bottom-0 mt-3 flex w-full">
      <div className="mx-auto box-border flex h-[48px] w-full max-w-[90rem] items-center justify-between gap-4 px-6 text-white md:px-[120px]">
        <a
          href="https://www.linkedin.com/in/mdbobskiy/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Linkedin className="size-[24px]" />
        </a>

        <div className="flex gap-2">
          <span>2026</span>

          <Link href={'/'}>Recall</Link>
        </div>
      </div>
    </footer>
  );
}
