import { Suspense } from 'react';
import { Metadata } from 'next';
import InfoSection from '@/src/components/dashboard/dashboard-root/info-section';
import ProjectsSection from '@/src/components/dashboard/dashboard-root/projects-section/project-section';
import {
  InfoSectionSkeleton,
  ProjectsSectionSkeleton,
} from '@/src/components/skeletons/dashboard-skeletons';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function DashboardPage() {
  return (
    <main className="flex-1 space-y-8 px-6 py-4">
      <Suspense fallback={<InfoSectionSkeleton />}>
        <InfoSection />
      </Suspense>

      <Suspense fallback={<ProjectsSectionSkeleton />}>
        <ProjectsSection />
      </Suspense>
    </main>
  );
}
