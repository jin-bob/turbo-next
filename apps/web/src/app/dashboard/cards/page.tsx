import List from '@/src/components/dashboard/cards/list';
import { ListCardData } from '@/src/components/dashboard/cards/list-card';

const listCardsData: Array<ListCardData> = [
  {
    id: 'react-basics',
    name: 'React Basics',
    image: '/logo.svg',
    shortDescription:
      'Learn the fundamentals of React including components, props, and state management.',
    amount: 1240,
    rating: '4.5',
  },
  {
    id: 'nextjs-dashboard',
    name: 'Next.js Dashboard',
    image: '/logo.svg',
    shortDescription:
      'Build a modern dashboard using Next.js App Router, layouts, and server components.',
    amount: 980,
    rating: '4.7',
  },
  {
    id: 'tailwind-mastery',
    name: 'Tailwind Mastery',
    image: '/logo.svg',
    shortDescription:
      'Master Tailwind CSS utilities to create fast and responsive user interfaces.',
    amount: 760,
    rating: '4.6',
  },
  {
    id: 'typescript-practical',
    name: 'TypeScript in Practice',
    image: '/logo.svg',
    shortDescription:
      'Improve code quality and scalability using TypeScript in real-world projects.',
    amount: 540,
    rating: '4.4',
  },
  {
    id: 'performance-optimization',
    name: 'Web Performance Optimization',
    image: '/logo.svg',
    shortDescription:
      'Optimize loading speed, reduce bundle size, and improve Core Web Vitals.',
    amount: 420,
    rating: '4.3',
  },
  {
    id: 'auth-patterns',
    name: 'Authentication Patterns',
    image: '/logo.svg',
    shortDescription:
      'Implement secure authentication flows with OAuth, JWT, and session strategies.',
    amount: 610,
    rating: '4.5',
  },
];

export default function CardsPage() {
  return (
    <main className="w-full">
      <div className="space-y-3">
        <h1 className="text-center text-2xl font-semibold">
          Example of page with Card data
        </h1>

        <h3 className="text-center text-base">Some popular info</h3>
      </div>

      <List cards={listCardsData} />
    </main>
  );
}
