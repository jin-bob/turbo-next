import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { type GetHomePageQueryResult } from '@/src/schema';
import { simpleComponent } from '@/src/components/global/simple-components';
import WorkInfo from '@/src/components/home/work-info';

type InfoSectionProps = {
  data: NonNullable<GetHomePageQueryResult>['infoSection'] | null | undefined;
};

export default function InfoSection({ data }: InfoSectionProps) {
  if (!data) return null;

  return (
    <section className="bg-background mt-6 w-full rounded-3xl border-zinc-200 shadow-sm md:mt-16">
      <Image
        height={180}
        width={1200}
        alt="bg"
        src={data?.background || ''}
        className="h-[180px] w-full rounded-t-3xl object-cover"
        fetchPriority="high"
        loading="eager"
      />

      <div className="relative px-6 pt-0 pb-8 md:px-10">
        <div className="-mt-20 mb-6 flex items-end justify-between gap-4">
          <a
            href={data?.linkedinLink || ''}
            target="_blank"
            rel="noreferrer noopener"
            className="flex justify-center transition hover:saturate-75"
          >
            <Image
              src={data?.avatar || ''}
              alt="avatar"
              width={160}
              height={160}
              className="size-44 rounded-full border-[6px] border-white"
            />
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
                {data?.username}
              </h1>

              <ShieldCheck size={18} className="text-header" />
            </div>

            <p className="text-foreground/45 text-2xl font-medium">
              {data?.jobTitle}
            </p>

            <p className="text-foreground/65 mt-2 text-lg">{data?.location}</p>

            <div className="bg-header/16 relative mt-10 max-w-xl rounded-2xl px-5 py-5">
              <p className="text-2xl font-semibold text-green-700">
                {data?.status}
              </p>

              <div className="text-start text-2xl font-light">
                <PortableText
                  value={data?.description ? data.description : []}
                  components={simpleComponent}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-2">
            {data?.experience?.length &&
              data.experience.map((exp) => (
                <WorkInfo
                  key={exp.name}
                  title={exp.name as string}
                  subtitle={exp.description as string}
                  logo={exp.logo as string}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
