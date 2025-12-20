import type { UUID } from './UUID';

export interface LocKey<
  L extends string
> {
  readonly kt: L,
  readonly lk: UUID | string | number
};

export type LocKeyArray<
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never
> =
  ([L5] extends [never] ?
    ([L4] extends [never] ?
      ([L3] extends [never] ?
        ([L2] extends [never] ?
          ([L1] extends [never] ?
            [] | never :
            [LocKey<L1>]) :
          [LocKey<L1>, LocKey<L2>]) :
        [LocKey<L1>, LocKey<L2>, LocKey<L3>]) :
      [LocKey<L1>, LocKey<L2>, LocKey<L3>, LocKey<L4>]) :
    [LocKey<L1>, LocKey<L2>, LocKey<L3>, LocKey<L4>, LocKey<L5>]);

export type AllLocTypeArrays<
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never,
> = readonly [] |
  readonly [L1] |
  readonly [L1, L2] |
  readonly [L1, L2, L3] |
  readonly [L1, L2, L3, L4] |
  readonly [L1, L2, L3, L4, L5];

