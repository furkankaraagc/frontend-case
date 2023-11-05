import { useEffect, useState } from 'react';
import Item from './components/Item';
import CheckedItem from './components/CheckedItem';
import Search from './components/Search';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');

  const initialData = JSON.parse(localStorage.getItem('checkedValues')!) || [];
  const [checkedItems, setCheckedItems] = useState<string[]>(initialData);

  const debouncedSearch = useDebounce(query);

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    localStorage.setItem('checkedValues', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const getItems = async () => {
    try {
      const res = await fetch('http://localhost:3000/data', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setItems(
        data.filter((element: string) => !checkedItems.includes(element)),
      );
    } catch (error) {
      console.log('Error:', (error as Error).message);
    }
  };

  const filteredItems = items
    .filter((item) =>
      item.toLowerCase().includes(debouncedSearch.trim().toLowerCase()),
    )
    .sort();

  return (
    <div className='m-auto w-[500px] min-h-screen flex justify-center items-center'>
      <div className=' w-[300px] flex flex-col gap-4 px-8 py-5 border border-gray-400 bg-gray-100 rounded-md'>
        <h1 className='text-xl '>Kategoriler</h1>
        <Search setQuery={setQuery} query={query} />
        <div className='overflow-y-scroll h-[250px] flex flex-col  '>
          <div className='flex flex-col gap-2'>
            {checkedItems.map((checkedItem, index) => {
              return (
                <CheckedItem
                  key={index}
                  item={checkedItem}
                  index={index}
                  items={items}
                  setItems={setItems}
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                />
              );
            })}
            {filteredItems.map((item, index) => {
              return (
                <Item
                  key={index}
                  item={item}
                  index={index}
                  items={items}
                  setItems={setItems}
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                />
              );
            })}
          </div>
        </div>
        <button className='bg-blue-600 rounded-md text-white p-2 hover:brightness-110 '>
          Ara
        </button>
      </div>
    </div>
  );
}

export default App;
