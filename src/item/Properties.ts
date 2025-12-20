import type { Item } from './Item';

export type RecursivePartial<T> = {
  [P in keyof T]?:
  T[P] extends (infer U)[] ? RecursivePartial<U>[] :
  T[P] extends object | undefined ? RecursivePartial<T[P]> :
  T[P];
};

/**
 * Interface for properties that can be added to items
 */
export interface Propertied {
  name: string;
  value: number;
}

/**
 * Type for item properties without the key - equivalent to Partial<Item> without the key
 */
export type ItemProperties<
  S extends string = never,
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never
> = Partial<Omit<Item<S, L1, L2, L3, L4, L5>, 'key'>>;

/**
 * Type for item properties without the key - equivalent to Partial<Item> without the key
 * This is an alias for ItemProperties for backward compatibility
 */
export type TypesProperties<
  S extends string = never,
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never
> = Partial<Omit<Item<S, L1, L2, L3, L4, L5>, 'key'>>;

