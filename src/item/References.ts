import type { ComKey, PriKey } from '../key';
import type { Item } from './Item';

/**
 * Reference type that flattens item properties directly onto the reference object.
 * When populated, the reference contains the key plus all item properties directly,
 * allowing access via refs.name.property instead of refs.name.item.property.
 *
 * Structure:
 * - Unpopulated: { key: ComKey | PriKey }
 * - Populated: { key: ComKey | PriKey, ...itemProperties }
 */
export type Reference<S extends string,
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never
> = { key: ComKey<S, L1, L2, L3, L4, L5> | PriKey<S> } & Partial<Omit<Item<S, L1, L2, L3, L4, L5>, 'key'>>;

export type ReferenceItem<S extends string,
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never
> = Reference<S, L1, L2, L3, L4, L5>;

export type References = Record<string, Reference<any, any, any, any, any, any>>;

/**
 * Aggregation type that flattens item properties directly onto the aggregation object.
 * Similar to Reference, when populated, the aggregation contains the key plus all item properties.
 */
export type Aggregation<
  S extends string,
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never
> = { key: ComKey<S, L1, L2, L3, L4, L5> | PriKey<S> } & Partial<Omit<Item<S, L1, L2, L3, L4, L5>, 'key'>>;

