import { PropsWithChildren } from 'react';
import { Info } from 'lucide-react';
import { CardFooter } from '@/src/components/ui/card';
import { ProjectCardType } from '@/src/components/dashboard/dashboard-root/projects-section/project-card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/src/components/ui/popover';

type ProjectCardFooterProps = PropsWithChildren<Pick<ProjectCardType, 'techs'>>;

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
            {techs.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </CardFooter>
  );
}
