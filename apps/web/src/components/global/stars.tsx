import { FC } from 'react';
import { cn } from '@/src/lib/utils';

export const Star: FC<{ active?: boolean; className?: string }> = ({
  active,
  className,
}) => {
  return (
    <svg
      className={cn(
        active ? 'text-yellow-500' : 'text-gray-300',
        'h-4 w-4',
        className,
      )}
      fill="none"
      height="24"
      role="img"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill={active ? '#FF9635' : '#727272'}
      />
    </svg>
  );
};

export const HalfStar: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={cn('h-4 w-4', className)}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="half" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" style={{ stopColor: '#FF9635', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#727272', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <polygon
        fill="url(#half)"
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  );
};

export const Stars: FC<{ rating: number; className?: string }> = ({
  rating,
  className,
}) => {
  const floorRating = Math.floor(rating);
  const remainder = rating - floorRating;

  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => {
        if (index < floorRating) {
          return (
            <Star active={true} key={`star-${index}`} className={className} />
          );
        } else if (index === floorRating && remainder >= 0.5) {
          // Display half star for the fractional part
          return <HalfStar key={`half-star-${index}`} className={className} />;
        } else {
          return (
            <Star active={false} key={`star-${index}`} className={className} />
          );
        }
      })}
      <span className="sr-only">{`Rated ${rating} out of 5`}</span>
    </div>
  );
};
