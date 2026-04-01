import Image from 'next/image';

type WorkInfoProps = { logo: string; title: string; subtitle: string };

export default function WorkInfo({ logo, title, subtitle }: WorkInfoProps) {
  return (
    <div className="flex items-start gap-4">
      <Image
        src={logo}
        width={48}
        height={48}
        alt={title + ' logo'}
        className="size-12 object-contain"
      />

      <div>
        <p className="text-xl font-semibold">{title}</p>

        <p className="text-foreground/45 text-base">{subtitle}</p>
      </div>
    </div>
  );
}
