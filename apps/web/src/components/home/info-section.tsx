import Image from 'next/image';
import { Sparkle } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { type GetHomePageQueryResult } from '@/src/schema';
import { simpleComponent } from '@/src/components/global/simple-components';

type InfoSectionProps = {
  data: NonNullable<GetHomePageQueryResult>['infoSection'] | null | undefined;
};

export default function InfoSection({ data }: InfoSectionProps) {
  if (!data) return null;

  return (
    <>
      <div className="mt:0 mt-6 mb-8 space-y-6 text-center md:mt-[96px]">
        <a
          href={data?.linkedinLink || ''}
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center transition hover:saturate-75"
        >
          <Image
            src={data?.avatar || ''}
            alt="avatar"
            width={256}
            height={256}
            className="size-[256px] rounded-full"
            fetchPriority="high"
          />
        </a>

        <div className="text-center">
          <h1 className="text-header text-6xl font-semibold uppercase">
            {data?.username}
          </h1>
          <h2 className="text-3xl text-zinc-500">{data?.jobTitle}</h2>
        </div>
      </div>

      <div className="mb-8 flex justify-center">
        <Sparkle size={48} className="text-header" />
      </div>

      <div className="text-center text-2xl font-light">
        <PortableText
          value={data?.description ? data.description : []}
          components={simpleComponent}
        />
      </div>
    </>
  );
}
