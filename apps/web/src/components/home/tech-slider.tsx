import Image from 'next/image';

type TechSliderProps = {
  data: Array<string | null> | undefined | null;
};

export default function TechSlider({ data }: TechSliderProps) {
  if (!data?.length) {
    return null;
  }

  const duplicatedImages = [...data, ...data];

  return (
    <div className="group relative w-full overflow-hidden py-5">
      <div className="easing from-background via-background-/90 pointer-events-none absolute -left-1 z-1 h-[250px] w-10 bg-gradient-to-r to-transparent md:w-[80px]" />
      <div className="easing from-background via-background-/90 pointer-events-none absolute -right-1 z-1 h-[250px] w-10 bg-gradient-to-l to-transparent md:w-[80px]" />

      <div className="animate-marquee flex w-max gap-5 group-hover:[animation-play-state:paused] md:gap-12">
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="h-[250px] w-[250px] flex-shrink-0 overflow-hidden rounded-2xl"
          >
            <Image
              src={src || ''}
              width={250}
              height={250}
              alt={`slide-${index}`}
              className="block h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
