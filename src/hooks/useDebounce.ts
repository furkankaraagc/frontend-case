import { useEffect, useState } from 'react';

export const useDebounce = (value: string) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, 400);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return debouncedValue;
};
