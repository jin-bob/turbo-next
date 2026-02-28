'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Search as SearchIcon } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();

  const pathname = usePathname();

  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', '1');

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer text-foreground block w-full rounded-md border py-[9px] pl-10 text-sm"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('search')?.toString()}
      />
      <SearchIcon className="dark:peer-focus:text-foreground absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-zinc-300 peer-focus:text-gray-400" />
    </div>
  );
}
