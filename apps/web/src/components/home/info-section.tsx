import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { type GetHomePageQueryResult } from '@/src/schema';
import { simpleComponent } from '@/src/components/global/simple-components';

type InfoSectionProps = {
  data: NonNullable<GetHomePageQueryResult>['infoSection'] | null | undefined;
};

export default function InfoSection({ data }: InfoSectionProps) {
  if (!data) return null;

  return (
    <section className="mt-6 w-full rounded-3xl border-zinc-200 bg-white shadow-sm md:mt-16">
      <div className="to-header via-header/80 from-header/50 relative h-[180px] w-full rounded-t-3xl bg-gradient-to-r"></div>

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
              fetchPriority="high"
            />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
                Yevhenii Bober
              </h1>

              <ShieldCheck size={18} className="text-header" />
            </div>

            <p className="text-foreground/45 text-2xl font-medium">
              Software Developer
            </p>

            <p className="text-foreground/65 mt-2 text-lg">
              Kyiv, Kyiv City, Ukraine
            </p>

            <div className="bg-header/16 relative mt-10 max-w-xl rounded-2xl px-5 py-5">
              <p className="text-2xl font-semibold text-green-700">
                Open to work
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
            <div className="flex items-start gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-xl font-bold text-zinc-900">
                P
              </div>

              <div>
                <p className="text-2xl font-semibold text-zinc-900">PixelTeh</p>
                <p className="text-base text-zinc-500">
                  Current company / experience
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-xl font-bold text-zinc-900">
                K
              </div>

              <div>
                <p className="text-2xl leading-snug font-semibold text-zinc-900">
                  National Technical University of Ukraine
                  <br />
                  “Kyiv Polytechnic Institute”
                </p>
                <p className="text-base text-zinc-500">
                  Education / university
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
