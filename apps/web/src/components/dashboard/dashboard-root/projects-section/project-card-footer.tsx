import { Info } from 'lucide-react';
import { CardFooter } from '@/src/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/src/components/ui/popover';
import { ProjectCardProps } from '@/src/components/dashboard/dashboard-root/projects-section/project-card';

type ProjectCardFooterProps = NonNullable<Pick<ProjectCardProps, 'techs'>>;

export default function ProjectCardFooter({ techs }: ProjectCardFooterProps) {
  return (
    <CardFooter className="flex w-full justify-end">
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex items-center gap-1.5">
            <Info className="size-4" />

            <span>Worked with</span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="bg-background w-fit">
          <ul className="text-start">
            {techs?.length && techs.map((tech, i) => <li key={i}>{tech}</li>)}
          </ul>
        </PopoverContent>
      </Popover>
    </CardFooter>
  );
}
