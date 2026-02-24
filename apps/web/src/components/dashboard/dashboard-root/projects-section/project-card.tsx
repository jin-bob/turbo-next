import { PropsWithChildren } from 'react';
import Image from 'next/image';
import { Link } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { cn } from '@/src/lib/utils';
import ProjectCardFooter from '@/src/components/dashboard/dashboard-root/projects-section/project-card-footer';

export type ProjectCardType = PropsWithChildren<{
  title: string;
  link?: string;
  content: string;
  image: string;
  techs: string[];
}>;

export default function ProjectCard({
  title,
  link,
  content,
  image,
  techs,
}: ProjectCardType) {
  return (
    <Card className="mobl:w-[300px] box-border flex h-[355px] w-[240px] flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex items-center justify-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center gap-1 hover:text-zinc-400',
              !link && 'invisible',
            )}
          >
            <div className="pb-0.5">visit</div>

            <Link className="flex size-3" />
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-center gap-1">
        <p className="flex-1 text-start">{content}</p>
        <Image
          src={`/svg/project-logos/${image}-logo.svg`}
          alt="project-image"
          width={192}
          height={28}
          className="max-w-[240px]"
        />
      </CardContent>
      <ProjectCardFooter techs={techs} />
    </Card>
  );
}
