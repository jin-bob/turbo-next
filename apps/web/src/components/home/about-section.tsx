import TechSlider from '@/src/components/home/tech-slider';

export default function AboutSection() {
  return (
    <section className="mt-[150px] space-y-16">
      <h3 className="text-header text-3xl font-semibold uppercase">About</h3>

      <div className="mb-8 flex flex-col gap-6 md:flex-row md:gap-16">
        <div className="flex-1 text-[22px]/[100%] font-light text-zinc-500">
          <p>Worked on enterprise-level products, startup</p>

          <p>platforms, and content-driven applications using</p>

          <p>tools like TanStack Query, React Hook Form,</p>

          <p>Firebase, Sanity CMS, and Tailwind CSS.</p>
        </div>

        <div className="flex-1">
          <div className="text-lg/[22px] font-light">
            <p>Experienced in reusable UI development, API integrations,</p>

            <p>
              analytics, performance optimization, and frontend architecture.
            </p>

            <p>
              Open to remote frontend opportunities and interested in building
            </p>

            <p>modern, high-quality product experiences.</p>
          </div>
        </div>
      </div>

      <TechSlider />
    </section>
  );
}
