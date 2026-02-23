import LoginLink from '@/src/components/home/login-link';

export default function Home() {
  return (
    <main className="w-full space-y-3">
      <div className="h-[208px] w-full bg-gradient-to-b from-[var(--header)] to-[var(--background)]" />

      <div className="flex flex-col items-center justify-between gap-2 px-4 md:px-6">
        <h1 className="max-w-[775px] text-center text-[36px]/[110%] font-semibold text-zinc-400 md:text-[64px]/[120%] dark:text-zinc-200">
          Welcome, this is example of monorepo project. Created using Turborepo
          build system
        </h1>

        <div className="mt-4 text-base font-semibold text-zinc-400 dark:text-zinc-200">
          Go to Dashboard
        </div>

        <LoginLink />
      </div>
    </main>
  );
}
