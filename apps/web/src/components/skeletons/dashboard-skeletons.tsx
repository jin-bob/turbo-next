import { Skeleton } from '@/src/components/ui/skeleton';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/src/components/ui/card';

export function InfoSectionSkeleton() {
  return (
    <div className="flex max-w-[1440px] flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-between">
      {/* Text section */}
      <div className="w-full flex-1">
        {/* h1 */}
        <Skeleton className="mb-4 h-8 w-2/3" />

        <div className="space-y-3">
          {/* subText */}
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />

          {/* detailInfo lines */}
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-5 w-3/4" />
        </div>
      </div>

      {/* Avatar */}
      <div className="shrink-0">
        <Skeleton className="size-[256px] rounded-full" />
      </div>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <Card className="mobl:w-[300px] box-border flex h-[355px] w-[240px] flex-col">
      <CardHeader className="space-y-2">
        {/* Title */}
        <Skeleton className="mx-auto h-5 w-3/4" />

        {/* Visit link */}
        <div className="flex justify-center">
          <Skeleton className="h-4 w-12" />
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col items-center gap-2">
        {/* Description */}
        <div className="w-full flex-1 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        {/* Logo image */}
        <Skeleton className="h-7 w-40" />
      </CardContent>

      {/* Tech footer */}
      <CardFooter className="flex flex-wrap justify-center gap-1">
        <Skeleton className="h-5 w-12 rounded-md" />
        <Skeleton className="h-5 w-10 rounded-md" />
        <Skeleton className="h-5 w-14 rounded-md" />
      </CardFooter>
    </Card>
  );
}

export function ProjectsSectionSkeleton() {
  return (
    <div className="w-full space-y-6 text-center">
      {/* Section title */}
      <Skeleton className="mx-auto h-7 w-48" />

      {/* Cards */}
      <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:items-start md:justify-around md:gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProjectCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
