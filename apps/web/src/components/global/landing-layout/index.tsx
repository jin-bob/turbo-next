import { ReactNode } from 'react';
import Navbar from '@/src/components/global/nav/navbar';
import Footer from '@/src/components/global/footer';

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background flex min-h-screen w-full flex-col items-center">
      <Navbar />
      <main className="mx-auto w-full max-w-[90rem] flex-1 px-6 md:px-[60px] lg:px-[120px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
