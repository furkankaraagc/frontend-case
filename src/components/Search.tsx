import React from 'react';

interface SearchProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
}

const Search = ({ setQuery, query }: SearchProps) => {
  return (
    <div className='relative'>
      <input
        value={query}
        className=' border border-gray-400 pl-2 py-1 pr-8 w-full rounded-md'
        placeholder='kategori ara...'
        type='text'
        name='search'
        onChange={(e) => setQuery(e.target.value)}
      />
      <img
        className='absolute right-3 top-0 bottom-0 my-auto aspect-square w-4 h-auto fill-white'
        src='./assets/search.svg'
        alt=''
      />
    </div>
  );
};

export default Search;
