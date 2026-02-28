import ListCard from '@/src/components/dashboard/cards/list-card';
import { GetCardsPageDataQueryResult } from '@/src/schema';

export type ListProps = {
  cards: NonNullable<GetCardsPageDataQueryResult>['infoCards'];
};

export default function List({ cards }: ListProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid w-full auto-rows-auto grid-cols-1 justify-items-center gap-[24px] px-[15px] pt-2.5 min-[1100px]:grid-cols-3 md:grid-cols-2">
        {cards?.map(({ name, shortDescription, amount, rating, slug }) => {
          return (
            <ListCard
              key={name}
              name={name}
              shortDescription={shortDescription}
              amount={amount}
              rating={rating}
              slug={slug}
            />
          );
        })}
      </div>
    </div>
  );
}
