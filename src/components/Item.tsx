export type ItemProps = {
  item: string;
  index: number;
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
  checkedItems: string[];
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>;
};

const Item = ({
  item,
  index,
  items,
  setItems,
  setCheckedItems,
  checkedItems,
}: ItemProps) => {
  const handleChecked = () => {
    setCheckedItems([...checkedItems, item]);
    setItems(items.filter((element) => element !== item));
  };

  return (
    <div
      onClick={handleChecked}
      className='flex gap-3 cursor-pointer items-center group  '
      key={index}
    >
      <div className='border border-gray-400 aspect-square w-auto h-4 relative group-hover:border-gray-500 transition-all ease-in '>
        <input
          className='w-0 h-0 '
          type='checkbox'
          name='checkbox'
          checked={false}
          readOnly
        />
      </div>
      <h1 className='group-hover:font-medium transition-all ease-in   '>
        {item}
      </h1>
    </div>
  );
};

export default Item;
