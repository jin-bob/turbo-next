import Image from 'next/image';
import { cn } from '@/src/lib/utils';

type ImageSlider = {
  className?: string;
  data: Array<string | null> | undefined | null;
  rotationFrom?: 'left' | 'right';
  imageWidth: number;
  imageHeight: number;
};

export default function ImageSlider({
  className,
  data,
  rotationFrom = 'left',
  imageWidth = 250,
  imageHeight = 250,
}: ImageSlider) {
  if (!data?.length) {
    return null;
  }

  const duplicatedImages = [...data, ...data];

  return (
    <div
      className={cn('group relative w-full overflow-hidden py-5', className)}
    >
      <div className="easing from-background via-background-/90 pointer-events-none absolute -left-1 z-1 h-[250px] w-10 bg-gradient-to-r to-transparent md:w-[80px]" />
      <div className="easing from-background via-background-/90 pointer-events-none absolute -right-1 z-1 h-[250px] w-10 bg-gradient-to-l to-transparent md:w-[80px]" />

      <div
        className={cn(
          'animate-marquee flex w-max gap-5 group-hover:[animation-play-state:paused] md:gap-12',
          rotationFrom === 'right' && 'animate-marquee-reverse',
        )}
      >
        {duplicatedImages.map((src, index) => (
          <div key={index} className="flex flex-shrink-0 items-center">
            <Image
              src={src || ''}
              width={imageWidth}
              height={imageHeight}
              alt={`slide-${index}`}
              className={`w-[${imageWidth}px] block h-[${imageHeight}px] object-contain`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
