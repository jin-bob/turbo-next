import ExperienceCard from '@/src/components/home/experience-card';
import type { GetHomePageQueryResult } from '@/src/schema';
import ImageSlider from '@/src/components/global/image-slider';

type ExperienceSectionProps = {
  data:
    | NonNullable<GetHomePageQueryResult>['experienceSection']
    | null
    | undefined;
};

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  if (!data) return null;

  return (
    <section className="mt-8 mb-16 md:mt-16">
      <h3 className="text-header mb-16 text-3xl font-semibold uppercase">
        {data?.slug?.current}
      </h3>

      <div className="grid grid-cols-1 gap-5 md:gap-12 lg:grid-cols-2">
        {data?.projects?.map((project) => (
          <ExperienceCard
            key={project?.projectName}
            projectName={project?.projectName as string}
            description={project?.projectDescription as string}
            content={project?.content as string[]}
          />
        ))}
      </div>

      <ImageSlider
        data={data?.companies as string[]}
        imageWidth={250}
        imageHeight={50}
        rotationFrom="right"
        className="mt-16"
      />
    </section>
  );
}
