import type { ComKey, PriKey } from '../key';
import type { Evented, ManagedEvents } from './Events';
import type { Aggregation, Reference } from './References';

export type Identified<S extends string,
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never> = {
    key: ComKey<S, L1, L2, L3, L4, L5> | PriKey<S>;
  };

export interface Item<S extends string = never,
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never> extends Identified<S, L1, L2, L3, L4, L5> {
  events: ManagedEvents & Evented;
  // TODO: This is a bit of a hack to get around the fact that we don't want to pass all these generics
  aggs?: Record<string, Aggregation<any, any, any, any, any, any>[]>;
  refs?: Record<string, Reference<any, any, any, any, any, any>>;
  [key: string]: any
}

