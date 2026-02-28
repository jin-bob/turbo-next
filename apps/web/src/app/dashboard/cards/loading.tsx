import {
  CardPageInfoSkeleton,
  ListSkeleton,
} from '@/src/components/skeletons/cards-page-skeletons';

export default function CardsLoadingPage() {
  return (
    <main className="w-full">
      <CardPageInfoSkeleton />

      <ListSkeleton />
    </main>
  );
}
