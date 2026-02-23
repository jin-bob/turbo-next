import { ReactNode } from 'react';
import Navbar from '@/src/components/global/nav/navbar';
import Footer from '@/src/components/global/footer';

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background flex min-h-screen w-full flex-col items-center">
      <Navbar />
      <main className="w-full flex-1">{children}</main>
      <Footer />
    </div>
  );
}
