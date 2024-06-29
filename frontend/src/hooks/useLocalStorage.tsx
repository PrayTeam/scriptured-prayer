/* eslint-disable */
// type-safe local storage wrapper
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { version } from "~/../package.json";
import { LocalStorage, localStorageDefaults } from "~/types";

type IsTuple<T extends ReadonlyArray<any>> = number extends T["length"]
  ? false
  : true;
type ArrayKey = number;
type TupleKeys<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;
type PathImpl<K extends string | number, V> = V extends object
  ? `${K}`
  : `${K}` | `${K}.${Path<V>}`;
type Path<T> =
  T extends ReadonlyArray<infer V>
    ? IsTuple<T> extends true
      ? {
          [K in TupleKeys<T>]-?: PathImpl<K & string, T[K]>;
        }[TupleKeys<T>]
      : PathImpl<ArrayKey, V>
    : {
        [K in keyof T]-?: PathImpl<K & string, T[K]>;
      }[keyof T];

// for type-safety
type StorageValues = Record<string, any>;
// include version to invalidate cache
interface Cached extends StorageValues {
  version?: string;
}

function getExisting<T>(key: string): T | null {
  try {
    const existing = localStorage.getItem(key);
    if (existing) {
      const parsed: Cached = JSON.parse(existing);
      if (parsed.version && parsed.version >= version) {
        return parsed as T;
      }
    }
  } catch (err) {
    console.error(err);
  }
  // either it doesn't exist or we found a different version
  return null;
}

function updateValue<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify({ version, ...value }));
  } catch (err) {
    console.error(err);
  }
}

type UseLocalStorage = <
  TStorageName extends Path<LocalStorage> = Path<LocalStorage>,
>(
  key: TStorageName,
  defaultValue?: Partial<LocalStorage[typeof key]>,
) => [
  LocalStorage[typeof key],
  Dispatch<SetStateAction<LocalStorage[typeof key]>>,
];

export const useLocalStorage: UseLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState<LocalStorage[typeof key]>(
    defaultValue
      ? { ...localStorageDefaults[key], ...defaultValue }
      : getExisting(key) ?? localStorageDefaults[key],
  );

  // key changed
  useEffect(() => {
    const existing = getExisting<LocalStorage[typeof key]>(key);
    if (existing) setValue(existing);
  }, [key]);

  // updated
  useEffect(() => {
    updateValue(key, value);
  }, [key, value]);

  return [value, setValue];
};
