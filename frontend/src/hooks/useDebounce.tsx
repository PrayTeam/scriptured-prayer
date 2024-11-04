import { useEffect, useRef, useState } from "react";

export function useDebounce<T>(value: T, delay: number = 250) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const ref = useRef<number>();

  useEffect(() => {
    ref.current = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(ref.current);
  }, [value, delay]);

  return debouncedValue;
}
