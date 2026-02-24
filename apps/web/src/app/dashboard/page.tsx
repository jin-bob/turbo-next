import InfoSection from '@/src/components/dashboard/dashboard-root/info-section';
import ProjectsSection from '@/src/components/dashboard/dashboard-root/projects-section/project-section';

export default async function DashboardPage() {
  return (
    <main className="flex-1 space-y-8 px-6 py-4">
      <InfoSection />

      <ProjectsSection />
    </main>
  );
}
