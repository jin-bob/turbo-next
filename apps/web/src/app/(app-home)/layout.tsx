import { ReactNode } from 'react';
import LandingLayout from '@/src/components/global/landing-layout';

export default function Layout({ children }: { children: ReactNode }) {
  return <LandingLayout>{children}</LandingLayout>;
}
