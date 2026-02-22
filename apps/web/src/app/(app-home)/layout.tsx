import { ReactNode } from 'react';
import Navbar from '@/src/components/global/nav/navbar';
import Footer from '@/src/components/global/footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
