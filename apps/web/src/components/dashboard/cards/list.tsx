import ListCard, {
  type ListCardData,
} from '@/src/components/dashboard/cards/list-card';

export type ListProps = {
  cards: Array<ListCardData>;
};

export default function List({ cards }: ListProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid w-full auto-rows-auto grid-cols-1 justify-items-center gap-[24px] px-[15px] pt-2.5 min-[1100px]:grid-cols-3 md:grid-cols-2">
        {cards.map((card) => {
          return (
            <ListCard
              key={card.id}
              name={card.name}
              id={card.id}
              image={card.image}
              shortDescription={card.shortDescription}
              amount={card.amount}
              rating={card.rating}
            />
          );
        })}
      </div>
    </div>
  );
}
