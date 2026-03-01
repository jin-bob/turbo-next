import { Metadata } from 'next';
import {
  CardPageInfoSkeleton,
  ListSkeleton,
} from '@/src/components/skeletons/cards-page-skeletons';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

export default function CardsLoadingPage() {
  return (
    <main className="w-full">
      <CardPageInfoSkeleton />

      <ListSkeleton />
    </main>
  );
}
