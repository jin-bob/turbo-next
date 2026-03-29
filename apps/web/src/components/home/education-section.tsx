import Image from 'next/image';
import type { GetHomePageQueryResult } from '@/src/schema';

type EducationSectionProps = {
  data:
    | NonNullable<GetHomePageQueryResult>['educationSection']
    | null
    | undefined;
};

export default function EducationSection({ data }: EducationSectionProps) {
  if (!data) {
    return null;
  }

  return (
    <div>
      <h3 className="text-header my-16 text-3xl font-semibold uppercase">
        {data?.slug?.current}
      </h3>

      <a
        href={data?.link}
        target="_blank"
        rel="noreferrer nofollow"
        className="block"
      >
        <div className="bg-header relative isolate mb-16 flex w-full items-start gap-6 overflow-hidden rounded-[72px] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-12 md:gap-12">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute bottom-[-80px] left-[-140px] h-[220px] w-[420px] rotate-[-18deg] rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] shadow-[inset_0_0_40px_rgba(255,255,255,0.08)] blur-[2px]" />

            <div className="absolute top-[-90px] right-[-180px] h-[240px] w-[500px] rotate-[20deg] rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] shadow-[inset_0_0_40px_rgba(255,255,255,0.06)] blur-[2px]" />

            <div className="absolute top-[10%] left-[8%] h-[120px] w-[240px] rotate-[-12deg] rounded-full bg-white/5 blur-[4px]" />

            <div className="absolute right-[10%] bottom-[8%] h-[130px] w-[260px] rotate-[18deg] rounded-full bg-white/[0.04] blur-[6px]" />
          </div>

          <Image
            src={data?.logo || ''}
            alt="kpi-big-logo"
            className="bg-background mobsm:flex relative z-10 hidden aspect-square w-auto max-w-[75px] flex-1 shrink-0 rounded-full object-cover object-center sm:max-w-[150px] md:max-w-[180px] lg:max-w-[300px]"
            width={313}
            height={313}
          />

          <div className="mobsm:text-start relative z-10 space-y-3 text-center text-white">
            <h3 className="text-xl md:text-2xl lg:text-4xl">{data?.h3}</h3>

            <p className="text-2sm">{data?.details}</p>

            <p className="text-2sm max-w-[600px] sm:text-xl md:text-2xl">
              {data?.summary}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
