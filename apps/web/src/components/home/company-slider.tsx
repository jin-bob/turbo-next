import Image from 'next/image';

type CompanySliderProps = {
  data: string[];
};

export default function CompanySlider({ data }: CompanySliderProps) {
  if (!data?.length) {
    return null;
  }

  const duplicatedImages = [...data, ...data];

  return (
    <div className="group relative mt-16 w-full overflow-hidden py-5">
      <div className="easing from-background via-background-/90 pointer-events-none absolute -left-1 z-1 h-[250px] w-10 bg-gradient-to-r to-transparent md:w-[80px]" />
      <div className="easing from-background via-background-/90 pointer-events-none absolute -right-1 z-1 h-[250px] w-10 bg-gradient-to-l to-transparent md:w-[80px]" />

      <div className="animate-marquee-reverse flex w-max gap-5 group-hover:[animation-play-state:paused] md:gap-12">
        {duplicatedImages.map((src, index) => (
          <div key={index} className="h-auto w-[250px]">
            <Image
              src={src}
              width={250}
              height={50}
              alt={`slide-${index}`}
              className="block h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
