import Image from 'next/image';
import { defineQuery } from 'next-sanity';
import { client } from '@/src/lib/sanity/client';

const getInfoSectionQuery = defineQuery(`*[_type=="dashboardPage"][0]{
  h1,
  subText,
  detailInfo,
  "avatar":avatar.asset->url
}
`);

export default async function InfoSection() {
  const data = await client.fetch(getInfoSectionQuery);

  return (
    <div className="flex max-w-[1440px] flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-between">
      <div className="flex-1">
        <h1 className="text-2xl">{data?.h1}</h1>

        <div className="space-y-3 text-lg">
          <p className="text-zinc-500 dark:text-zinc-300">{data?.subText}</p>

          {data?.detailInfo &&
            data?.detailInfo.map((info, index) => <p key={index}>{info}</p>)}
        </div>
      </div>

      <a
        href="https://www.linkedin.com/in/mdbobskiy/"
        target="_blank"
        rel="noreferrer noopener"
        className="transition hover:saturate-75"
      >
        <Image
          src={data?.avatar || ''}
          alt="avatar"
          width={256}
          height={256}
          className="size-[256px] rounded-full"
        />
      </a>
    </div>
  );
}
