import { ItemProps } from './Item';

const CheckedItem = ({
  item,
  index,
  items,
  setItems,
  setCheckedItems,
  checkedItems,
}: ItemProps) => {
  const handleChecked = () => {
    setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
    setItems([...items, item]);
  };

  return (
    <div
      onClick={handleChecked}
      className='flex gap-3 cursor-pointer items-center'
      key={index}
    >
      <div className='border border-gray-400 aspect-square w-auto h-4 relative'>
        <input
          className='w-0 h-0'
          type='checkbox'
          name='checkbox'
          checked={true}
          readOnly
        />
        <span className='absolute bg-blue-700 aspect-square h-2.5 w-auto top-0 bottom-0 right-0 left-0 m-auto'></span>
      </div>
      <h1 className='text-blue-700 font-medium'>{item}</h1>
    </div>
  );
};

export default CheckedItem;
