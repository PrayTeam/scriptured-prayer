import { useState, useCallback } from "react";

export function useArray<T>(initialValue: T[]) {
  const [array, setArray] = useState(initialValue);
  const push = useCallback(
    (item: T) => setArray((current) => [...current, item]),
    [],
  );
  const removeAtIndex = useCallback(
    (index: number) =>
      setArray((current) => {
        current.splice(index, 1);
        return current;
      }),
    [],
  );
  const pop = useCallback(() => removeAtIndex(array.length), []);
  const clear = useCallback(() => setArray(() => []), []);

  return {
    array,
    setArray,
    push,
    removeAtIndex,
    pop,
    clear,
  };
}
