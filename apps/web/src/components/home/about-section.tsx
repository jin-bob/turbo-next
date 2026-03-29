import TechSlider from '@/src/components/home/tech-slider';
import type { GetHomePageQueryResult } from '@/src/schema';
import { simpleComponent } from '@/src/components/global/simple-components';
import { PortableText } from '@portabletext/react';

type AboutSectionProps = {
  data: NonNullable<GetHomePageQueryResult>['aboutSection'] | null | undefined;
};

export default function AboutSection({ data }: AboutSectionProps) {
  if (!data) return null;

  return (
    <section className="mt-[150px] space-y-16">
      <h3 className="text-header text-3xl font-semibold uppercase">
        {data.slug?.current || ''}
      </h3>

      <div className="mb-8 flex flex-col gap-6 md:flex-row md:gap-16">
        <div className="flex-1 text-[22px]/[100%] font-light text-zinc-500">
          <PortableText
            value={data?.descriptionLeft ? data.descriptionLeft : []}
            components={simpleComponent}
          />
        </div>

        <div className="flex-1">
          <div className="text-lg/[22px] font-light">
            <PortableText
              value={data?.descriptionRight ? data.descriptionRight : []}
              components={simpleComponent}
            />
          </div>
        </div>
      </div>

      <TechSlider data={data.technologies} />
    </section>
  );
}
