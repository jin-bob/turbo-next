import type { GetHomePageQueryResult } from '@/src/schema';
import { simpleComponent } from '@/src/components/global/simple-components';
import ImageSlider from '@/src/components/global/image-slider';
import { PortableText } from '@portabletext/react';

type AboutSectionProps = {
  data: NonNullable<GetHomePageQueryResult>['aboutSection'] | null | undefined;
};

export default function AboutSection({ data }: AboutSectionProps) {
  if (!data) return null;

  return (
    <section className="mt-16 mb-16 space-y-16">
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
          <div className="text-foreground text-lg/[22px] font-light">
            <PortableText
              value={data?.descriptionRight ? data.descriptionRight : []}
              components={simpleComponent}
            />
          </div>
        </div>
      </div>

      <ImageSlider
        data={data.technologies}
        imageHeight={250}
        imageWidth={250}
        className="[&_img]:rounded-2xl"
      />
    </section>
  );
}
