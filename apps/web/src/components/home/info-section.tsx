import Image from 'next/image';
import { Sparkle } from 'lucide-react';

export default function InfoSection() {
  return (
    <>
      <div className="mt:0 mt-6 mb-8 space-y-6 text-center md:mt-[96px]">
        <a
          href="https://www.linkedin.com/in/mdbobskiy/"
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center transition hover:saturate-75"
        >
          <Image
            src="/images/avatar.webp"
            alt="avatar"
            width={256}
            height={256}
            className="size-[256px] rounded-full"
            fetchPriority="high"
          />
        </a>

        <div className="text-center">
          <h1 className="text-header text-6xl font-semibold uppercase">
            Yevhenii Bober
          </h1>
          <h2 className="text-3xl text-zinc-500">Software Developer</h2>
        </div>
      </div>

      <div className="mb-8 flex justify-center">
        <Sparkle size={48} className="text-header" />
      </div>

      <div className="text-center text-2xl font-light">
        <p>Frontend Developer with 5 years of experience</p>
        <p>building scalable and user-focused web applications</p>
        <p> with React, TypeScript, and Next.js.</p>
      </div>
    </>
  );
}
